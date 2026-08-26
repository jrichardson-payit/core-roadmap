#!/usr/bin/env python3
"""Refresh CORE roadmap data from Jira. Keeps overlay.json titles and why copy.

  export JIRA_EMAIL='you@payitgov.com'
  export JIRA_API_TOKEN='...'   # https://id.atlassian.com/manage-profile/security/api-tokens
  python3 refresh.py

Without credentials, re-applies overlay.json onto the existing snapshot.
"""
from __future__ import annotations

import json
import os
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


def search_epics():
    issues = []
    next_page = None
    while True:
        params = {
            "jql": JQL,
            "maxResults": 100,
            "fields": ",".join(FIELDS),
        }
        if next_page:
            params["nextPageToken"] = next_page
        data = jira_get("/rest/api/3/search/jql", params)
        issues.extend(data.get("issues") or [])
        next_page = data.get("nextPageToken")
        if not next_page:
            break
    return issues


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
    # stable unique
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


def to_epic(issue, overlay):
    fields = issue.get("fields") or {}
    key = issue["key"]
    summary = fields.get("summary") or key
    q = option_name(fields.get("customfield_11575")) or ""
    shirt = option_name(fields.get("customfield_11610")) or "Needs Estimate"
    project = (fields.get("project") or {}).get("key") or key.split("-")[0]
    tickets = linked_client_tickets(fields)
    ov = overlay.get(key) or {}
    title = ov.get("title") or summary
    why = ov.get("why") or (
        "No business write-up yet. This epic is on the published roadmap; "
        "add a title and why in overlay.json, then refresh."
    )
    return {
        "key": key,
        "q": q,
        "project": project,
        "title": title,
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
    header = auth_header()
    if header:
        try:
            issues = search_epics()
        except urllib.error.HTTPError as exc:
            sys.exit(f"Jira search failed: {exc.code} {exc.read()[:300]!r}")
        epics = [to_epic(i, overlay) for i in issues]
        epics.sort(key=lambda e: (e["q"], e["project"], e["key"]))
        from datetime import date

        payload = {
            "updated": date.today().isoformat(),
            "source": "Jira Roadmap Scope + T-Shirt Size, merged with overlay.json",
            "epics": epics,
        }
        write_snapshot(payload)
        missing = [e["key"] for e in epics if e["key"] not in overlay]
        print(f"Wrote {len(epics)} epics. Overlay missing for {len(missing)} new keys.")
        if missing:
            print("New (need title/why): " + ", ".join(missing[:30]))
        return
    existing = json.loads((ROOT / "data.json").read_text())
    for epic in existing.get("epics") or []:
        ov = overlay.get(epic["key"]) or {}
        if ov.get("title"):
            epic["title"] = ov["title"]
        if ov.get("why"):
            epic["why"] = ov["why"]
    write_snapshot(existing)
    print(
        "No JIRA_EMAIL / JIRA_API_TOKEN. Re-applied overlay.json onto the existing snapshot "
        f"({len(existing.get('epics') or [])} epics). Set those env vars to pull live Jira."
    )


if __name__ == "__main__":
    main()
