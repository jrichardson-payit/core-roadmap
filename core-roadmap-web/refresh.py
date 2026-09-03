#!/usr/bin/env python3
"""Refresh CORE roadmap data from Jira.

Never overwrite overlay.json title or why (the generated epic name and
Why It Matters). Also keep an existing snapshot title/why when overlay
has no entry yet. Jira summary is stored separately as epicTitle.

  export JIRA_EMAIL='you@payitgov.com'
  export JIRA_API_TOKEN='...'
  python3 refresh.py

Without credentials, re-applies overlay.json onto the existing snapshot
and leaves epicTitle / sprint / Jira fields as they are (except overlay
title/why).
"""
from __future__ import annotations

import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CLOUD = "https://payitdev.atlassian.net"
JQL = (
    'project in (LICS, FNCL, SYST, CALM, CVEH, RESRV) AND issuetype = Epic '
    'AND cf[11575] in ("2026 Q3","2026 Q4","2027 Q1","2027 Q2","2027 Q3","2027 Q4","2028 Q1","2028 Q2","2028 Q3") '
    'AND summary !~ Unplanned AND summary !~ Support AND summary !~ Suport '
    "AND status not in (Canceled, Cancelled)"
)
FIELDS = [
    "summary",
    "project",
    "status",
    "issuelinks",
    "customfield_11575",
    "customfield_11610",
    "customfield_11356",
]
SPRINT_FIELD = "customfield_10006"
CORE_PROJECTS = ("LICS", "FNCL", "SYST", "CALM", "CVEH", "RESRV")
CLIENT_PROJECTS = {
    "CROH": "Ohio",
    "COMO": "Missouri",
    "MELS": "Minnesota",
    "OV": "Oregon",
    "MDWFP": "Mississippi",
    "CLV": "Louisiana",
    "CRAR": "Arkansas",
    "MICH": "Michigan",
}
FIELD_CLIENT = {
    "OH": "Ohio",
    "Ohio": "Ohio",
    "MO": "Missouri",
    "Missouri": "Missouri",
    "MN": "Minnesota",
    "Minnesota": "Minnesota",
    "MS": "Mississippi",
    "Mississippi": "Mississippi",
    "LA": "Louisiana",
    "Louisiana": "Louisiana",
    "OR": "Oregon",
    "Oregon": "Oregon",
    "AR": "Arkansas",
    "Arkansas": "Arkansas",
    "MI": "Michigan",
    "Michigan": "Michigan",
    "Cherokee": "Cherokee",
    "All Clients": "All",
    "All": "All",
    "Ontario": "Ontario",
    "Klamath": "Klamath",
    "NH": "New Hampshire",
    "New Hampshire": "New Hampshire",
}
NAME_SUFFIX = {
    "OH": "Ohio",
    "MO": "Missouri",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "LA": "Louisiana",
    "OR": "Oregon",
    "AR": "Arkansas",
    "MI": "Michigan",
}
SPRINT_WHEN = re.compile(r"(20\d{2})[-.\s]?Q(\d)(?:[-.\s]?S(\d+))?", re.I)
PLACEHOLDER_WHY = (
    "No business write-up yet. This epic is on the published roadmap; "
    "add a title and why in overlay.json, then refresh."
)


def option_name(value):
    if value is None:
        return None
    if isinstance(value, dict):
        return value.get("value") or value.get("name")
    return str(value)


def auth_header():
    email = os.environ.get("JIRA_EMAIL")
    token = os.environ.get("JIRA_API_TOKEN")
    if not email or not token:
        return None
    import base64

    raw = f"{email}:{token}".encode()
    return "Basic " + base64.b64encode(raw).decode()


def jira_get(path, params=None):
    url = CLOUD + path
    if params:
        url += "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(
        url,
        headers={
            "Authorization": auth_header(),
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read().decode())


def search_jql(jql, fields):
    issues = []
    next_page = None
    while True:
        params = {
            "jql": jql,
            "maxResults": 100,
            "fields": ",".join(fields),
        }
        if next_page:
            params["nextPageToken"] = next_page
        data = jira_get("/rest/api/3/search/jql", params)
        issues.extend(data.get("issues") or [])
        next_page = data.get("nextPageToken")
        if not next_page:
            break
    return issues


def search_epics():
    return search_jql(JQL, FIELDS)


def chunks(items, size):
    for i in range(0, len(items), size):
        yield items[i : i + size]


def linked_keys(fields):
    keys = []
    for link in fields.get("issuelinks") or []:
        other = link.get("inwardIssue") or link.get("outwardIssue")
        if not other:
            continue
        key = other.get("key") or ""
        if key:
            keys.append(key)
    return keys


def linked_client_tickets(fields):
    tickets = []
    for link in fields.get("issuelinks") or []:
        other = link.get("inwardIssue") or link.get("outwardIssue")
        if not other:
            continue
        key = other.get("key") or ""
        prefix = key.split("-")[0]
        if prefix not in CLIENT_PROJECTS:
            continue
        summary = (other.get("fields") or {}).get("summary") or key
        tickets.append({"key": key, "name": summary, "client": CLIENT_PROJECTS[prefix]})
    seen = set()
    out = []
    for t in tickets:
        if t["key"] in seen:
            continue
        seen.add(t["key"])
        out.append(t)
    return out


def clients_for(fields, summary, tickets):
    found = []
    raw = fields.get("customfield_11356")
    values = raw if isinstance(raw, list) else ([raw] if raw else [])
    for item in values:
        name = FIELD_CLIENT.get(option_name(item) or "", None)
        if name and name not in found:
            found.append(name)
    for t in tickets:
        if t["client"] not in found:
            found.append(t["client"])
    upper = (summary or "").upper()
    for tag, client in NAME_SUFFIX.items():
        if f"({tag})" in upper or f" {tag})" in upper:
            if client not in found:
                found.append(client)
    if not found:
        found = ["PayIt"]
    return found


def sprint_names(value):
    if not value:
        return []
    items = value if isinstance(value, list) else [value]
    names = []
    for item in items:
        if isinstance(item, dict) and item.get("name"):
            names.append(item["name"])
        elif isinstance(item, str):
            match = re.search(r"name=([^,\]]+)", item)
            if match:
                names.append(match.group(1).strip())
    return names


def sprint_sort_key(name):
    if not name:
        return (9999, 9, 999, "")
    match = SPRINT_WHEN.search(name)
    if match:
        sprint_n = int(match.group(3) or 0)
        return (int(match.group(1)), int(match.group(2)), sprint_n, name)
    return (9998, 9, 0, name)


def furthest_sprint(names):
    cleaned = [n for n in names if n]
    if not cleaned:
        return ""
    return max(cleaned, key=sprint_sort_key)


def core_keys(keys):
    return [k for k in keys if k.split("-")[0] in CORE_PROJECTS]


def fetch_core_sprints(epic_issues):
    """Sprint names from CORE-project children and CORE-project issue links."""
    by_epic = {issue["key"]: [] for issue in epic_issues}
    epic_set = set(by_epic)
    parent_jql = (
        "project in ({projects}) AND parent in ({keys})"
    )
    for batch in chunks(list(epic_set), 40):
        quoted = ",".join(f'"{k}"' for k in batch)
        issues = search_jql(
            parent_jql.format(projects=", ".join(CORE_PROJECTS), keys=quoted),
            ["parent", SPRINT_FIELD],
        )
        for issue in issues:
            parent = ((issue.get("fields") or {}).get("parent") or {}).get("key")
            if parent in by_epic:
                by_epic[parent].extend(
                    sprint_names((issue.get("fields") or {}).get(SPRINT_FIELD))
                )

    linked = []
    for issue in epic_issues:
        for key in core_keys(linked_keys(issue.get("fields") or {})):
            if key not in epic_set:
                linked.append((issue["key"], key))
    unique_linked = sorted({key for _, key in linked})
    sprint_by_key = {}
    for batch in chunks(unique_linked, 40):
        quoted = ",".join(f'"{k}"' for k in batch)
        issues = search_jql(
            f"key in ({quoted})",
            [SPRINT_FIELD],
        )
        for issue in issues:
            sprint_by_key[issue["key"]] = sprint_names(
                (issue.get("fields") or {}).get(SPRINT_FIELD)
            )
    for epic_key, link_key in linked:
        by_epic[epic_key].extend(sprint_by_key.get(link_key) or [])
    return {key: furthest_sprint(names) for key, names in by_epic.items()}


def draft_title(summary):
    text = summary or ""
    text = re.sub(r"^[A-Z][A-Z0-9]+-\d+\s*[-:]\s*", "", text)
    text = re.sub(
        r"\s*\((OH|MO|MN|MS|LA|OR|AR|MI|FF|CR|NN|NC|INT)\)\s*",
        " ",
        text,
        flags=re.I,
    )
    text = re.sub(r"\s+", " ", text).strip(" -")
    return text or summary


def draft_why():
    return (
        "This epic is on the published roadmap. The title is a first draft from the "
        "Jira summary. Replace this why with what changes, why a director cares, "
        "and who it is for."
    )


def ensure_overlay(overlay, items):
    """Create overlay title/why for any new epic key. Never replace existing copy."""
    added = []
    for item in items:
        key = item["key"]
        entry = overlay.get(key) or {}
        if entry.get("title") and entry.get("why"):
            continue
        summary = item.get("summary") or item.get("epicTitle") or item.get("title") or key
        if not entry.get("title"):
            entry["title"] = draft_title(summary)
        if not entry.get("why"):
            entry["why"] = draft_why()
        overlay[key] = entry
        added.append(key)
    return added


def write_overlay(overlay):
    (ROOT / "overlay.json").write_text(json.dumps(overlay, indent=2) + "\n")


def keep_copy(overlay_value, existing_value, fallback):
    """Overlay wins. Else keep what we already published. Else fallback."""
    if overlay_value:
        return overlay_value
    if existing_value and existing_value != PLACEHOLDER_WHY:
        return existing_value
    return fallback


def to_epic(issue, overlay, existing, sprint):
    fields = issue.get("fields") or {}
    key = issue["key"]
    summary = fields.get("summary") or key
    q = option_name(fields.get("customfield_11575")) or ""
    shirt = option_name(fields.get("customfield_11610")) or "Needs Estimate"
    project = (fields.get("project") or {}).get("key") or key.split("-")[0]
    tickets = linked_client_tickets(fields)
    ov = overlay.get(key) or {}
    prev = existing.get(key) or {}
    title = keep_copy(ov.get("title"), prev.get("title"), summary)
    why = keep_copy(ov.get("why"), prev.get("why"), PLACEHOLDER_WHY)
    return {
        "key": key,
        "q": q,
        "project": project,
        "title": title,
        "epicTitle": summary,
        "sprint": sprint or "",
        "shirt": shirt,
        "clients": clients_for(fields, summary, tickets),
        "tickets": [{"key": t["key"], "name": t["name"]} for t in tickets[:6]],
        "ticketCount": len(tickets),
        "why": why,
    }


def write_snapshot(payload):
    (ROOT / "data.json").write_text(json.dumps(payload, indent=2) + "\n")
    (ROOT / "data.js").write_text(
        "window.ROADMAP_DATA = " + json.dumps(payload, indent=2) + ";\n"
    )


def main():
    overlay = json.loads((ROOT / "overlay.json").read_text())
    existing_payload = {}
    if (ROOT / "data.json").exists():
        existing_payload = json.loads((ROOT / "data.json").read_text())
    existing = {e["key"]: e for e in existing_payload.get("epics") or []}
    header = auth_header()
    if header:
        try:
            issues = search_epics()
            sprints = fetch_core_sprints(issues)
        except urllib.error.HTTPError as exc:
            sys.exit(f"Jira search failed: {exc.code} {exc.read()[:300]!r}")
        added = ensure_overlay(
            overlay,
            [
                {
                    "key": i["key"],
                    "summary": (i.get("fields") or {}).get("summary") or i["key"],
                }
                for i in issues
            ],
        )
        if added:
            write_overlay(overlay)
        epics = [to_epic(i, overlay, existing, sprints.get(i["key"], "")) for i in issues]
        epics.sort(key=lambda e: (e["q"], e["project"], sprint_sort_key(e.get("sprint")), e["key"]))
        from datetime import date

        payload = {
            "updated": date.today().isoformat(),
            "source": "Jira Roadmap Scope + T-Shirt Size + CORE sprint, merged with overlay.json",
            "epics": epics,
        }
        write_snapshot(payload)
        print(f"Wrote {len(epics)} epics.")
        if added:
            print("Created overlay for: " + ", ".join(added[:30]))
        return
    added = ensure_overlay(overlay, existing_payload.get("epics") or [])
    if added:
        write_overlay(overlay)
    for epic in existing_payload.get("epics") or []:
        ov = overlay.get(epic["key"]) or {}
        if ov.get("title"):
            epic["title"] = ov["title"]
        if ov.get("why"):
            epic["why"] = ov["why"]
        epic.setdefault("epicTitle", "")
        epic.setdefault("sprint", "")
    write_snapshot(existing_payload)
    print(
        "No JIRA_EMAIL / JIRA_API_TOKEN. Re-applied overlay.json onto the existing snapshot "
        f"({len(existing_payload.get('epics') or [])} epics). Set those env vars to pull live Jira."
    )
    if added:
        print("Created overlay for: " + ", ".join(added[:30]))


if __name__ == "__main__":
    main()
