window.ROADMAP_DATA = {
  "updated": "2026-09-03",
  "source": "Jira Roadmap Scope + T-Shirt Size + CORE sprint, merged with overlay.json",
  "epics": [
    {
      "key": "CALM-3481",
      "q": "2026 Q3",
      "project": "CALM",
      "title": "Work rolled from Q2 into Q3",
      "epicTitle": "2026 Rollover Q2 to Q3",
      "sprint": "CALM 2026-Q3-S3",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "This is leftover mobile work that did not finish in Q2, not new scope. It is here so committed items do not vanish between quarters. PayIt owns the list; clients should not brief it as a feature."
    },
    {
      "key": "CALM-2404",
      "q": "2026 Q3",
      "project": "CALM",
      "title": "Paginate long license lists in the mobile app so they load",
      "epicTitle": "Pagination/page load for long license lists (CR) (MI)",
      "sprint": "CALM 2026-Q3-S4",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Michigan"
      ],
      "tickets": [
        {
          "key": "MICH-1309",
          "name": "CALM 2404 2026Q3 - Production bug: Mobile not able to view all permits"
        },
        {
          "key": "MICH-2927",
          "name": "MOBILE API to support grouped and paginated license retrieval"
        },
        {
          "key": "MICH-3019",
          "name": "CLONE - MOBILE API to support grouped and paginated Survey retrieval"
        }
      ],
      "ticketCount": 3,
      "why": "Long license lists on the phone currently stall or never finish loading, so a hunter cannot see what they already bought. Paging the list is the difference between a usable app and a dead screen in the field. Michigan needs this before staff tell customers to 'just use the app.'"
    },
    {
      "key": "CALM-3213",
      "q": "2026 Q3",
      "project": "CALM",
      "title": "Ohio survey mobile changes required right after go-live",
      "epicTitle": "OH Tickets (Changes and Bugs) Survey Updates (FF) (OH)",
      "sprint": "CALM 2026-Q3-S5",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-1268",
          "name": "HuntFish OH- Product Display_ Replace a License"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio's post-launch survey flow on the phone does not match what they sold. If hunters cannot complete or replace the survey from mobile, field staff take the call and the go-live looks unfinished. This is a launch fix, not a new product."
    },
    {
      "key": "CALM-3460",
      "q": "2026 Q3",
      "project": "CALM",
      "title": "Show revocations on business-customer mobile profiles",
      "epicTitle": "Business Customer Revocations Display (ALL)",
      "sprint": "CALM 2026-Q3-S5",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Business accounts can be revoked like people, but the phone profile does not show it. A clerk or owner who only uses the app can keep trying to buy. Showing the revocation on mobile stops that surprise at the counter."
    },
    {
      "key": "CALM-2903",
      "q": "2026 Q3",
      "project": "CALM",
      "title": "Mobile tech debt, upgrades, and go-lives",
      "epicTitle": "2026 Q3 Tech Debt/Upgrades/Go-Lives",
      "sprint": "CALM 2026-Q3-S6",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "The mobile app has to stay current through OS upgrades and client go-lives or seasons stall on last year's build. This is keep-the-lights-on work, not a new hunter feature. Every client on the app depends on it shipping on time."
    },
    {
      "key": "CALM-3491",
      "q": "2026 Q3",
      "project": "CALM",
      "title": "Mobile release maintenance",
      "epicTitle": "2026 Q3 Release Maintenance",
      "sprint": "CALM 2026-Q3-S6",
      "shirt": "S - 1 sprint",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Each mobile release needs testing, store submission, and fixes so hunters are not stuck on a broken build mid-season. This is release hygiene, not a new screen. All app clients feel it when it slips."
    },
    {
      "key": "CALM-3502",
      "q": "2026 Q3",
      "project": "CALM",
      "title": "Move mobile builds from Azure DevOps to GitHub and Fastlane",
      "epicTitle": "Switch from Azure DevOps to GitHub and FastLane",
      "sprint": "Future Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Mobile builds still depend on a pipeline we are leaving. If we do not move to GitHub and Fastlane, every client release gets slower and riskier. Hunters never see this; product managers will if a season build cannot ship."
    },
    {
      "key": "CALM-3516",
      "q": "2026 Q3",
      "project": "CALM",
      "title": "Sort and paginate available vs submitted surveys on mobile",
      "epicTitle": "Survey Tab updates (MI)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Michigan"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Michigan officers and biologists cannot tell submitted surveys from ones still on the device when the list is one long scroll. Sort and page so field staff find the right survey without calling support. This is a field-time saver, not a new survey type."
    },
    {
      "key": "CVEH-2578",
      "q": "2026 Q3",
      "project": "CVEH",
      "title": "Ohio customer and login vehicle bugs needed for go-live",
      "epicTitle": "OH Tickets (Changes and Bugs) Customer / Login (OH)",
      "sprint": "CVEH 2026-Q3-S1",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-1569",
          "name": "Staging - PayIt SSO_ Staging_ Error when trying to log into Sales via 'Account'"
        },
        {
          "key": "CROH-1501",
          "name": "Staging - PayIt SSO_ Not finding online account and profile which have already been created"
        },
        {
          "key": "CROH-1475",
          "name": "Staging - PayIt SSO_ Unable to Access Account"
        },
        {
          "key": "CROH-1726",
          "name": "Reports not returning data"
        },
        {
          "key": "CROH-1671",
          "name": "VEMS_ Volunteer can't complete transaction (no ReCaptcha)"
        }
      ],
      "ticketCount": 5,
      "why": "Ohio vehicle customers hit login and account bugs that block go-live. A hunter who cannot sign in cannot register the boat they showed up to title. These are launch defects, not a new vehicle product."
    },
    {
      "key": "CVEH-2566",
      "q": "2026 Q3",
      "project": "CVEH",
      "title": "Minnesota vehicles go-live remaining work",
      "epicTitle": "2026 Q3 MN Vehicles Go Live (MN)",
      "sprint": "Prioritized",
      "shirt": "L - 3 sprints",
      "clients": [
        "Minnesota"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Minnesota vehicles still have remaining go-live work. Until it is done, DNR cannot run boat and vehicle transactions in CORE as sold. Treat this as launch completion, not a later enhancement."
    },
    {
      "key": "CVEH-2707",
      "q": "2026 Q3",
      "project": "CVEH",
      "title": "Louisiana web new-registration depends on delayed payments being trustworthy",
      "epicTitle": "LA New Reg/Delayed Payment Launch",
      "sprint": "Priority Unrefined Work",
      "shirt": "L - 3 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Louisiana's web new-registration path is only safe if delayed payments can be trusted. If money posts late or twice, the agency eats the exception. This unblocks their registration flow; it is not optional polish."
    },
    {
      "key": "FNCL-2298",
      "q": "2026 Q3",
      "project": "FNCL",
      "title": "Search and report expired gift certificates",
      "epicTitle": "Expired Gift Cert Search and Report (OH)",
      "sprint": "FNCL 2026-Q3-S1",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-1622",
          "name": "Expired Gift Cert Report needed"
        },
        {
          "key": "CROH-31",
          "name": "1.3.3 Gift Certificates"
        },
        {
          "key": "CROH-404",
          "name": "10.1.14 Gift Certificates"
        }
      ],
      "ticketCount": 3,
      "why": "Ohio gift certificates expire and then disappear from search, so staff cannot prove what happened. They need to find and report expired certificates without a ticket to PayIt. This is customer-service time, not a new tender type."
    },
    {
      "key": "FNCL-2182",
      "q": "2026 Q3",
      "project": "FNCL",
      "title": "Voids must not rewrite prior-day financial reports",
      "epicTitle": "Update Handling of Voids (Pt 2)",
      "sprint": "FNCL 2026-Q3-S5",
      "shirt": "S - 1 sprint",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Voiding a sale today can rewrite yesterday's financial reports, which finance cannot explain to auditors. Voids must land as new activity and leave history alone. Every state that closes the day on CORE reports needs this."
    },
    {
      "key": "FNCL-220",
      "q": "2026 Q3",
      "project": "FNCL",
      "title": "Staff can sweep an agent\u2019s full ACH balance by hand",
      "epicTitle": "Manual ACH Sweep (Agent-Level, Full Balance) (MO)",
      "sprint": "FNCL 2026-Q3-S5",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri",
        "Mississippi",
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "COMO-441",
          "name": "2.21.6\u00a0- NSF Processing"
        },
        {
          "key": "MDWFP-323",
          "name": "17.7 - 17.7\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must allow separate identified requests for manual re-sweeps for any Agent with insufficient funds during an ACH sweep, even if account is in \"deactivated or locked\" status."
        },
        {
          "key": "COMO-806",
          "name": "2.22.8 - Manual ACH"
        },
        {
          "key": "MELS-1075",
          "name": "Manual ACH Sweep"
        },
        {
          "key": "COMO-689",
          "name": "Vendors Gap"
        },
        {
          "key": "COMO-669",
          "name": "Response time for Agent Prenote"
        }
      ],
      "ticketCount": 10,
      "why": "Agents can be left with an ACH balance finance cannot pull without a workaround. Staff need to sweep the full balance by hand when the automated path is wrong or late. Arkansas, Minnesota, Mississippi, Missouri, and Ohio all hit this at month-end."
    },
    {
      "key": "FNCL-2300",
      "q": "2026 Q3",
      "project": "FNCL",
      "title": "Record full or partial payments that are not ACH",
      "epicTitle": "Non-ACH Manual Payments (Full, Partial) (MO)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri",
        "Mississippi",
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "COMO-441",
          "name": "2.21.6\u00a0- NSF Processing"
        },
        {
          "key": "MDWFP-323",
          "name": "17.7 - 17.7\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must allow separate identified requests for manual re-sweeps for any Agent with insufficient funds during an ACH sweep, even if account is in \"deactivated or locked\" status."
        },
        {
          "key": "COMO-806",
          "name": "2.22.8 - Manual ACH"
        },
        {
          "key": "MELS-1075",
          "name": "Manual ACH Sweep"
        },
        {
          "key": "COMO-689",
          "name": "Vendors Gap"
        },
        {
          "key": "MDWFP-333",
          "name": "17.17 - 17.17\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must permit adjustments and payments to the Accounts Receivable accounts with proper audit controls."
        }
      ],
      "ticketCount": 10,
      "why": "Not every payment is ACH, but CORE still treats some cash/check/partials as second-class. Finance needs a full or partial non-ACH payment recorded cleanly so the drawer and the report match. Same states as the ACH sweep work."
    },
    {
      "key": "LICS-3002",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Show county assessor contact on land profiles",
      "epicTitle": "Landowner County Adjustments (MO)",
      "sprint": "LICS 2026-Q3-S3",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1625",
          "name": "Land Profile>STR: Section/Township/Range MUST be Required IF one is supplied"
        },
        {
          "key": "COMO-1485",
          "name": "County Profile - county management fields needed"
        },
        {
          "key": "COMO-1799",
          "name": "Land Profile: Section does not collect a direction and MUST not be displayed"
        },
        {
          "key": "COMO-1481",
          "name": "Landowner Design Issues"
        },
        {
          "key": "COMO-265",
          "name": "2.12.15\u00a0- Permit Allotment"
        },
        {
          "key": "COMO-266",
          "name": "2.12.16\u00a0- County Landowner Reporting"
        }
      ],
      "ticketCount": 6,
      "why": "Missouri land profiles omit the county assessor contact people actually call. Putting it on the land record saves a hunt through another system. Landowners and counter staff both use it."
    },
    {
      "key": "LICS-3021",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Retire and reorder landowner types without breaking land profiles",
      "epicTitle": "Landowner Type Updates (MO)",
      "sprint": "LICS 2026-Q3-S3",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1584",
          "name": "Landowner Type Order Is NOT Working"
        },
        {
          "key": "COMO-1583",
          "name": "Custom Lookup>Landowner Type for Land Profile"
        },
        {
          "key": "COMO-1593",
          "name": "Land Profile>Landowner Type: Landowner Types MUST be driven off of Is Corporate Entity or Is Trust Questions"
        },
        {
          "key": "COMO-1830",
          "name": "Land Profile: Landowner Type MUST be driving by \"Is Property Owned by Corporate Entity or Trust? Yes/No\" Response"
        },
        {
          "key": "COMO-1831",
          "name": "Land Profile: If Is Corporate Entity/Trust = Yes - Display Corporate Entity/Trust Name Field"
        },
        {
          "key": "COMO-1630",
          "name": "Customers>Landowner Tab: Identify what columns should be displayed"
        }
      ],
      "ticketCount": 11,
      "why": "Agencies retire landowner types, but old profiles still point at dead values and then will not save. Staff need to reorder and retire types without breaking existing land. Minnesota and Missouri cannot maintain land rules without this."
    },
    {
      "key": "LICS-2158",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "One- to three-day fishing permit on a single product",
      "epicTitle": "1-3 Day Permit Length in Single Product Code (MO)",
      "sprint": "LICS 2026-Q3-S4",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Missouri needs a one- to three-day fishing permit as one product, not three SKUs clerks forget. Visitors buy the short trip they actually take. Merchandising and the counter both get simpler."
    },
    {
      "key": "LICS-2733",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Warn when a harvest check looks like a recent duplicate",
      "epicTitle": "Harvest Reports \u2014 recent duplicate submission warning (OH)",
      "sprint": "LICS 2026-Q3-S4",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-276",
          "name": "7.3.3 Notification of Previous Submission"
        },
        {
          "key": "CROH-92",
          "name": "2.2.4 Recent Harvest Submission Notification"
        },
        {
          "key": "CROH-1649",
          "name": "Q1 2026 development work - Needs to be pulled into Q4 2025"
        }
      ],
      "ticketCount": 3,
      "why": "Ohio harvest checks get entered twice when a hunter or clerk retries. A warning on a likely duplicate stops a double harvest on the books. Wardens and biologists rely on one check meaning one animal."
    },
    {
      "key": "LICS-3039",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Weight draw odds by points without always serving highest-points first",
      "epicTitle": "Tiered Bonus Points Algorithm (MS) (CR)",
      "sprint": "LICS 2026-Q3-S4",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Mississippi"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Mississippi wants draw odds weighted by points without always handing the tag to the highest-point hunter. That is a fairness rule they already sold, not a new lottery. Applicants will notice if draws still behave the old way."
    },
    {
      "key": "LICS-3529",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Fix land-profile data that does not persist across mobile, POS, and surveys",
      "epicTitle": "Land Profile Fixes (MN, MO, MS)",
      "sprint": "LICS 2026-Q3-S4",
      "shirt": "M - 2 sprints",
      "clients": [
        "Mississippi"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Land entered on the phone, at the counter, or on a survey does not always stick. Hunters then buy a landowner permit on land the system forgot. Minnesota, Mississippi, and Missouri cannot trust landowner sales until this persists everywhere."
    },
    {
      "key": "LICS-2732",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "License start-time defaults, per-agent limits, and policy messages",
      "epicTitle": "Product Configuration & Policy Enhancements (MO)",
      "sprint": "LICS 2026-Q3-S5",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-841",
          "name": "Products>Replacements: Replacement of products with telecheck IDs"
        },
        {
          "key": "COMO-1597",
          "name": "Product Policy>Character Limit for Error Message: Character limit MUST be increased"
        },
        {
          "key": "COMO-1504",
          "name": "Products>Policies: Reason for Unavailability Message Needs to be update when product is in cart but not purcahsed. "
        },
        {
          "key": "COMO-734",
          "name": "Will Max per LY per Vendor be covered in Policy updates?"
        }
      ],
      "ticketCount": 4,
      "why": "Missouri license start times, per-agent caps, and policy messages are still easy to get wrong at the counter. Defaults and limits need to match how they sell. This prevents a clerk from issuing something the rule does not allow."
    },
    {
      "key": "LICS-3001",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Separate landowner bonus points by hunt type and county",
      "epicTitle": "Multi-type county bonus points for landowner permits (MO)",
      "sprint": "LICS 2026-Q3-S6",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1484",
          "name": "Land>County Display: Need columns displayed"
        },
        {
          "key": "COMO-1402",
          "name": "Product 101: 75+ Acre Policy"
        },
        {
          "key": "COMO-1481",
          "name": "Landowner Design Issues"
        }
      ],
      "ticketCount": 3,
      "why": "Missouri landowner bonus points are mixed across hunt types and counties, so a point earned in one place spends in another. Split them the way the regulation is written. Landowners will treat this as fairness."
    },
    {
      "key": "LICS-3930",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Refresh the product catalog without a full rebuild",
      "epicTitle": "Product catalog \u2014 targeted refresh without a full rebuild",
      "sprint": "LICS 2026-Q3-S6",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Refreshing the product catalog today is close to a rebuild, so price and rule fixes wait. A safer refresh lets merchandising change products without a project. PayIt-owned; clients feel it as faster catalog corrections."
    },
    {
      "key": "LICS-3931",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Load customers with long histories faster in POS, licensing, and mobile",
      "epicTitle": "Customer cache \u2014 faster customer load in POS, Licensing, and mobile",
      "sprint": "LICS 2026-Q3-S6",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1641",
          "name": "Land Profile:  When entering in CC does not appear on Public Web"
        }
      ],
      "ticketCount": 1,
      "why": "Customers with long purchase histories freeze POS, licensing, and mobile. Clerks wait, hunters wait, and the line grows. Faster load is a counter-time issue, not a new report."
    },
    {
      "key": "LICS-2579",
      "q": "2026 Q3",
      "project": "LICS",
      "title": "Find a survey response by confirmation number without opening the customer",
      "epicTitle": "Survey Response Search Via Confirmation Number/Non-Customer Profile (AR, MS, OH)",
      "sprint": "2026 Q4 - AR Work",
      "shirt": "S - 1 sprint",
      "clients": [
        "Arkansas",
        "Ohio",
        "Mississippi"
      ],
      "tickets": [
        {
          "key": "CRAR-1027",
          "name": "Game Check Confirmation Number Search"
        },
        {
          "key": "CROH-76",
          "name": "2.1.6 Customer Look-up"
        },
        {
          "key": "MDWFP-1701",
          "name": "Alligator Game Check - Survey Edit Issues"
        }
      ],
      "ticketCount": 3,
      "why": "Staff should find a survey by confirmation number without opening the whole customer. Today they hunt through the profile and burn the window. Arkansas, Mississippi, and Ohio need this at the counter and in the back office."
    },
    {
      "key": "RESRV-1466",
      "q": "2026 Q3",
      "project": "RESRV",
      "title": "Educator API so Kalkomey / IHEA course completions post to CORE",
      "epicTitle": "Educator API Integration (Kalkomey / IHEA)",
      "sprint": "Core RESRV 2026-Q3-S1",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "COMO-1944",
          "name": "IHEA API for Online Courses"
        },
        {
          "key": "COMO-2123",
          "name": "API with IHEA-USA OutdoorELN"
        },
        {
          "key": "CROH-176",
          "name": "5.1.13 Interface With Online Class Provider"
        }
      ],
      "ticketCount": 3,
      "why": "Hunter-ed completions from Kalkomey and IHEA still do not post into CORE on their own. Educators and agencies re-key or leave certifications missing, and then the student cannot buy. Several states share this dependency."
    },
    {
      "key": "RESRV-1543",
      "q": "2026 Q3",
      "project": "RESRV",
      "title": "Ohio print-template fixes required for go-live",
      "epicTitle": "OH Tickets (Changes and Bugs) Print Templates (OH)",
      "sprint": "Core RESRV 2026-Q3-S1",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-1571",
          "name": "Template Override_ Ordered List Code not working"
        },
        {
          "key": "CROH-1464",
          "name": "Short Term not Printing Effective Dates Properly"
        },
        {
          "key": "CROH-1635",
          "name": "Valid Date on Template Setting not working for templates"
        },
        {
          "key": "CROH-1671",
          "name": "VEMS_ Volunteer can't complete transaction (no ReCaptcha)"
        }
      ],
      "ticketCount": 4,
      "why": "Ohio event and class print templates are wrong for go-live. If the paper in the hunter's hand is wrong, the launch looks unfinished even if the screen is right. This is print correctness, not a new event type."
    },
    {
      "key": "RESRV-1546",
      "q": "2026 Q3",
      "project": "RESRV",
      "title": "Customer mobile check-in and check-out at unmanned Class B ranges",
      "epicTitle": "Customer mobile check-in/check-out for unmanned Class B shooting ranges (OH)",
      "sprint": "Core RESRV 2026-Q3-S1",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-120",
          "name": "3.3 Shooting Range Management: Unstaffed Ranges (Class B)"
        },
        {
          "key": "CROH-108",
          "name": "3.1.2 Self-Check-In Orientation - Mobile "
        }
      ],
      "ticketCount": 2,
      "why": "Ohio Class B ranges are often unmanned. Hunters need to check in and out on their phone so the range can run without a roster desk. Without this, those sites stay on paper or stay closed to CORE."
    },
    {
      "key": "RESRV-449",
      "q": "2026 Q3",
      "project": "RESRV",
      "title": "Informational event pages with no attendee or volunteer signup",
      "epicTitle": "Informational Event Pages - No Attendee/Volunteer Signup (MO)",
      "sprint": "Core RESRV 2026-Q3-S5",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-178",
          "name": "2.6.8\u00a0- Event Registration or no registration needed"
        }
      ],
      "ticketCount": 1,
      "why": "Missouri needs event pages that inform without taking signups. Today every event wants attendees or volunteers, so they fake a class or skip CORE. This is a communications page, not a registration product."
    },
    {
      "key": "RESRV-1677",
      "q": "2026 Q3",
      "project": "RESRV",
      "title": "Return vehicle documents when a Minnesota sale is voided",
      "epicTitle": "MN Vehicle Document Returns on Void (MN)",
      "sprint": "Core RESRV 2026-Q3-S6",
      "shirt": "M - 2 sprints",
      "clients": [
        "All",
        "Minnesota"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "When a Minnesota vehicle sale is voided, the documents still look sold. Title staff then chase paper that should have rolled back. Returning documents on void keeps the file and the money in sync."
    },
    {
      "key": "SYST-3781",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Separate citation add/edit access from revocations",
      "epicTitle": "Leverage Revocations for Citation Solution (OH)",
      "sprint": "SYST 2026-Q3-S1",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-1027",
          "name": "Data Migration_ Customer Arrest Data"
        },
        {
          "key": "CROH-386",
          "name": "9.5.1 Arrest Data"
        },
        {
          "key": "CROH-1718",
          "name": "Leverage Revocations for OH Go-Live Citation Solution"
        },
        {
          "key": "CROH-387",
          "name": "9.5.2 Arrest User Access"
        },
        {
          "key": "CROH-381",
          "name": "9.4.4 Customer Display"
        }
      ],
      "ticketCount": 5,
      "why": "Citation entry and revocations share access, so the wrong person can revoke or cannot write a citation. Ohio needs those jobs split. Officers write citations; a smaller set should revoke."
    },
    {
      "key": "SYST-3855",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Ohio customer and login bugs needed for go-live",
      "epicTitle": "OH Tickets (Changes and Bugs) Customer / Login (OH)",
      "sprint": "SYST 2026-Q3-S1",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-1569",
          "name": "Staging - PayIt SSO_ Staging_ Error when trying to log into Sales via 'Account'"
        },
        {
          "key": "CROH-1501",
          "name": "Staging - PayIt SSO_ Not finding online account and profile which have already been created"
        },
        {
          "key": "CROH-1475",
          "name": "Staging - PayIt SSO_ Unable to Access Account"
        },
        {
          "key": "CROH-1726",
          "name": "Reports not returning data"
        },
        {
          "key": "CROH-1671",
          "name": "VEMS_ Volunteer can't complete transaction (no ReCaptcha)"
        }
      ],
      "ticketCount": 5,
      "why": "Ohio customer and login defects still block go-live. If a resident cannot sign in or the profile is wrong, nothing else in Q3 matters for them. These are launch bugs."
    },
    {
      "key": "SYST-4614",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Map of active selling agents by location",
      "epicTitle": "Active Agent Map Search and Location Experience (CR) (MN, ALL)",
      "sprint": "SYST 2026-Q3-S1",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Leadership wants a map of who is actively selling, not a spreadsheet of every agent ever. Minnesota and platform ops use this to see coverage holes. It is a sales-network picture, not a GIS project."
    },
    {
      "key": "SYST-3821",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Log every Control Center view of a customer SSN",
      "epicTitle": "FROM DTSD - Logging needed when CC user accesses SSN (FF) (OH)",
      "sprint": "SYST 2026-Q3-S2",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-48",
          "name": "1.5.3 SSN Requirement"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio requires a trail when someone in Control Center views an SSN. Without a log, they cannot answer an audit. This is privacy evidence, not a new customer screen."
    },
    {
      "key": "SYST-3228",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Print a full customer profile with license sales",
      "epicTitle": "MEDA-511 - Printable Full Customer Profile with License Sales (NN) (OH)",
      "sprint": "SYST 2026-Q3-S3",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-59",
          "name": "1.5.14 Customer Reports"
        },
        {
          "key": "CROH-8",
          "name": "1.1.7 Reports"
        }
      ],
      "ticketCount": 2,
      "why": "Ohio staff print a customer and do not get license sales on the page. They then print three screens or skip the file. One full profile print is what a warden or clerk takes to the window."
    },
    {
      "key": "SYST-4575",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Certification setup that keeps collected fields consistent",
      "epicTitle": "Certification Configuration and Collected Info Updates (ALL)",
      "sprint": "SYST 2026-Q3-S3",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "All",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-1909",
          "name": "Certification Collected Info Settings_ Seed Settings"
        }
      ],
      "ticketCount": 1,
      "why": "Certification setup lets fields drift, so one class asks for data another never stores. Agencies then cannot compare completions. Keeping collected fields consistent is how hunter ed stays auditable."
    },
    {
      "key": "SYST-2818",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Revoke business customers the same way as individuals",
      "epicTitle": "Business Customer Revocations (ALL)",
      "sprint": "SYST 2026-Q3-S4",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-363",
          "name": "9.1.3 Enforce Revocations"
        }
      ],
      "ticketCount": 1,
      "why": "Business customers cannot be revoked with the same tools as a person. A shop that should be stopped can still sell. Ohio needs the same revocation path for both."
    },
    {
      "key": "SYST-4327",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Highest-priority security bugs",
      "epicTitle": "Other Q3 Highest Security Bugs (PayIt)",
      "sprint": "SYST 2026-Q3-S4",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Highest-priority security defects sit here so they are not lost under feature work. Clients will not brief this as a product; they will feel it if we skip it. PayIt-owned on purpose."
    },
    {
      "key": "SYST-4714",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Mississippi vehicle print-template changes",
      "epicTitle": "MS Vehicle Template Changes/Additions",
      "sprint": "SYST 2026-Q3-S5",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Mississippi"
      ],
      "tickets": [
        {
          "key": "MDWFP-1970",
          "name": "Changes to Boat Registration Card 2027"
        },
        {
          "key": "MDWFP-1971",
          "name": "Boat Registration Application Updates"
        },
        {
          "key": "MDWFP-1946",
          "name": "Orange Stock - Updates Needed"
        },
        {
          "key": "MDWFP-1947",
          "name": "Digital Receipt Updates"
        }
      ],
      "ticketCount": 4,
      "why": "Mississippi vehicle print templates do not match what they issue at the counter. Wrong paper means a customer leaves with a document they cannot use. This is template correction, not a new title type."
    },
    {
      "key": "SYST-2366",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Choose Radar, ESRI, or Google for address lookup",
      "epicTitle": "Update Address Lookup to use either Radar, ESRI, or Google (PayIt)",
      "sprint": "SYST 2026-Q3-S6",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-49",
          "name": "1.5.4 License Purchase Requirements"
        },
        {
          "key": "CROH-57",
          "name": "1.5.12 Geocoded Addresses"
        }
      ],
      "ticketCount": 2,
      "why": "Address lookup quality depends on the vendor, and one vendor does not win everywhere. Agencies need to choose Radar, ESRI, or Google without a code change. Ohio and platform-wide sales all use addresses to tax, ship, and prove residency."
    },
    {
      "key": "SYST-4630",
      "q": "2026 Q3",
      "project": "SYST",
      "title": "Work rolled from Q2 into Q3",
      "epicTitle": "ROLLOVER 2026 Q2 to Q3",
      "sprint": "SYST 2026-Q3-S6",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Platform leftovers from Q2, not new promises. They stay on the roadmap so committed work is not dropped. PayIt tracks the list."
    },
    {
      "key": "CALM-1866",
      "q": "2026 Q4",
      "project": "CALM",
      "title": "Clearer mobile home screen: primary actions, menus, and first-time guidance (part 1)",
      "epicTitle": "Drive Mobile Adoption through UX Modernization (All) Pt. 1",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Hunters open the app and cannot tell what to tap first: buy, check game, or find rules. This first slice puts primary actions, menus, and first-time guidance in the right place. Research said utility beats a new look\u2014so we are not restyling for its own sake."
    },
    {
      "key": "CALM-2905",
      "q": "2026 Q4",
      "project": "CALM",
      "title": "Mobile app upgrades and maintenance",
      "epicTitle": "2026 Q4 Tech Debt/Upgrades",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Mobile OS and library upgrades so the app does not die on a new phone. No new hunter-facing feature. PayIt-owned maintenance that every app client needs."
    },
    {
      "key": "CALM-3382",
      "q": "2026 Q4",
      "project": "CALM",
      "title": "Mobile release maintenance",
      "epicTitle": "2026 Q4 Release Maintenance",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Routine mobile release work for Q4: submit, fix, ship. If this slips, hunters stay on a stale build through fall. Not a product announcement."
    },
    {
      "key": "CALM-3554",
      "q": "2026 Q4",
      "project": "CALM",
      "title": "LED iOS builds and Apple Business Manager distribution to client devices",
      "epicTitle": "LED iOS Builds and Client Apple Business Manager Distribution",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Law-enforcement iOS builds still have to reach agency devices through Apple Business Manager. If that pipeline is not owned, officers stay on a stale build and a client cannot roll a fix. This is distribution, not a new LED feature."
    },
    {
      "key": "CVEH-67",
      "q": "2026 Q4",
      "project": "CVEH",
      "title": "Require boat inspections before registration when the rules say so",
      "epicTitle": "Inspections (FF) [LA, MS]",
      "sprint": "Future Work",
      "shirt": "L - 3 sprints",
      "clients": [
        "Louisiana"
      ],
      "tickets": [
        {
          "key": "CLV-261",
          "name": "Inspection Scheduling and Process"
        },
        {
          "key": "CLV-20",
          "name": "Inspections"
        },
        {
          "key": "CLV-405",
          "name": "Boat Inspections "
        }
      ],
      "ticketCount": 3,
      "why": "Some boats cannot be registered until inspection is on file. Louisiana and Mississippi already have the rule; CORE still lets the registration through. Block it when the rule says so."
    },
    {
      "key": "CVEH-1575",
      "q": "2026 Q4",
      "project": "CVEH",
      "title": "Transfer-on-death successors cannot transact until they take title",
      "epicTitle": "Title \u2014 Transfer on Death cannot transact (MN)",
      "sprint": "Prioritized",
      "shirt": "M - 2 sprints",
      "clients": [
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "MELS-3108",
          "name": "UAT-VEH-POS-System Allows Adding TOD on Non-Titled Vehicles (ATV, ORV, OHM, Snowmobile, Non-Titled Watercraft)"
        },
        {
          "key": "MELS-3051",
          "name": "UAT-VEH-CC-CC Admin Cannot Identify TOD Assigned to a Registered Vehicle-Conjunction Not Displayed"
        },
        {
          "key": "MELS-3107",
          "name": "UAT-VEH-POS-Customer Listed as TOD Able to Transact on Registered Vehicle - Should Be Restricted"
        }
      ],
      "ticketCount": 3,
      "why": "Minnesota transfer-on-death successors sometimes transact before they take title. That is a legal miss. They must be blocked until title is in their name."
    },
    {
      "key": "CVEH-1378",
      "q": "2026 Q4",
      "project": "CVEH",
      "title": "Mark a vehicle sold, including buyers with no account",
      "epicTitle": "Marking Vehicles as Sold (NC) (MS, LA, MN)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Mississippi",
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "MDWFP-1575",
          "name": "Stop renewals on vessles marked as sold"
        },
        {
          "key": "MDWFP-1359",
          "name": "Able to renew a boat you no longer own"
        }
      ],
      "ticketCount": 2,
      "why": "A sold boat or vehicle has to leave the seller's record, including when the buyer has no account yet. Louisiana, Minnesota, and Mississippi cannot close the sale if CORE insists the buyer already exists. This is how a private sale actually works."
    },
    {
      "key": "CVEH-1924",
      "q": "2026 Q4",
      "project": "CVEH",
      "title": "Stop duplicate registration numbers and reuse unused numbers",
      "epicTitle": "Registration Number Generation \u201a\u00c4\u00ec Dupe Check & Reuse (CR) (ALL)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Duplicate registration numbers and wasted unused numbers show up on the water and in audits. Stop the duplicates and reuse the unused pool. Every vehicle client inherits bad numbers if we do not."
    },
    {
      "key": "FNCL-2361",
      "q": "2026 Q4",
      "project": "FNCL",
      "title": "Finish delayed-payment work not required for first go-live",
      "epicTitle": "LA Delayed Payments FF Work",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Louisiana delayed-payment work that was not required to open the door. It still has to finish so later payments do not sit in a half-state. Finance will own the exceptions until it does."
    },
    {
      "key": "FNCL-279",
      "q": "2026 Q4",
      "project": "FNCL",
      "title": "Automatically lock agents after failed bank returns",
      "epicTitle": "Return File Handling Automation (Locking) (MO)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "Minnesota",
        "Missouri"
      ],
      "tickets": [
        {
          "key": "MELS-471",
          "name": "Agent Locked on ACH Return - Update"
        },
        {
          "key": "MELS-1292",
          "name": "ACH Return Code Configuration"
        },
        {
          "key": "MELS-1345",
          "name": "Corporate Agents"
        },
        {
          "key": "COMO-1765",
          "name": "Notifications>Failed ACH/Account Update: Email Notice - REQUIRED FOR GO LIVE"
        },
        {
          "key": "MELS-2264",
          "name": "ACH Notification of Change Codes- C Codes (Correction Codes)"
        }
      ],
      "ticketCount": 5,
      "why": "Failed bank returns should lock the agent automatically so they cannot keep selling on bad paper. Minnesota, Missouri, and Ohio finance chase this by hand today. It is risk control, not a new fee."
    },
    {
      "key": "LICS-2740",
      "q": "2026 Q4",
      "project": "LICS",
      "title": "Hunt-draw maps and replacement harvest-check IDs",
      "epicTitle": "MO Draw Work (MO)",
      "sprint": "2026 Q4 - Feature Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-841",
          "name": "Products>Replacements: Replacement of products with telecheck IDs"
        },
        {
          "key": "COMO-254",
          "name": "2.12.4\u00a0- Data Import"
        },
        {
          "key": "COMO-753",
          "name": "Data management of Draws"
        },
        {
          "key": "COMO-1278",
          "name": "Permit Allocations - Product Availability based on table w/ unique code"
        },
        {
          "key": "COMO-1054",
          "name": "Antlerless Elk Draw and Permit Process"
        },
        {
          "key": "COMO-836",
          "name": "Landowner Maps for Elk Draws"
        }
      ],
      "ticketCount": 9,
      "why": "Missouri hunt-draw maps and replacement harvest-check IDs are how a hunter knows where to go and how to check in if the first ID is lost. Wrong map or no replacement ID is a season-stopping call. This is operations, not a new draw type."
    },
    {
      "key": "LICS-3019",
      "q": "2026 Q4",
      "project": "LICS",
      "title": "Manage a customer\u2019s land from their profile",
      "epicTitle": "Customer Profile \u2014 Land profiles tab (CC) (MO)",
      "sprint": "2026 Q4 - Feature Work",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1627",
          "name": "Land Profile>Search: Include Conservation ID as a Search Field"
        },
        {
          "key": "COMO-1630",
          "name": "Customers>Landowner Tab: Identify what columns should be displayed"
        },
        {
          "key": "COMO-1626",
          "name": "Land Profile>Customers: As an Admin User/Customer, I need to see USEFUL information with minimal scrolling or swapping between screens, tabs, or tiles, to view the entire picture of my landprofile. "
        },
        {
          "key": "COMO-152",
          "name": "2.5.51\u00a0- Landowner Tracking"
        },
        {
          "key": "COMO-154",
          "name": "2.5.53\u00a0- Landowner Admin Entry"
        },
        {
          "key": "COMO-155",
          "name": "2.5.54\u00a0- Landowner Verification"
        }
      ],
      "ticketCount": 6,
      "why": "Staff should manage a customer's land from the customer profile instead of a side database. Missouri clerks lose land when they have to leave the person they are helping. One profile, one place."
    },
    {
      "key": "LICS-3064",
      "q": "2026 Q4",
      "project": "LICS",
      "title": "Residency, contiguous acres, and landowner attestations",
      "epicTitle": "Customer Land Profile Attestation / Contiguous / Residency Requirements (MO)",
      "sprint": "2026 Q4 - Feature Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1581",
          "name": "Land Profile: Contiguous"
        },
        {
          "key": "COMO-1624",
          "name": "Land Profile: How does residency limitations play a role in land profile collection?"
        },
        {
          "key": "COMO-1402",
          "name": "Product 101: 75+ Acre Policy"
        },
        {
          "key": "COMO-1590",
          "name": "Land Profile: Land Profile Validation Level - We need more info on this"
        },
        {
          "key": "COMO-1594",
          "name": "Land Profile>Attestation: Attestation is only required by the customer, not by admin staff"
        },
        {
          "key": "COMO-1481",
          "name": "Landowner Design Issues"
        }
      ],
      "ticketCount": 15,
      "why": "Missouri landowner permits depend on residency, contiguous acres, and attestations that CORE does not enforce cleanly. Get those wrong and a permit is issued on land that does not qualify. This is eligibility, not a form tweak."
    },
    {
      "key": "LICS-3576",
      "q": "2026 Q4",
      "project": "LICS",
      "title": "Camping stay limits on rolling day-windows",
      "epicTitle": "Licensing catalog \u2014 Missouri camping permits (700)",
      "sprint": "Future Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1279",
          "name": "Camping Permit - Required Deliverable by Q4 2026"
        }
      ],
      "ticketCount": 1,
      "why": "Missouri camping stays are limited on a rolling window of days, not a calendar month. CORE still lets people overstay. Rangers need the system to count the days the way the rule is written."
    },
    {
      "key": "LICS-3032",
      "q": "2026 Q4",
      "project": "LICS",
      "title": "Collect only the land details the agency uses (part 1)",
      "epicTitle": "Land Profile Attribute Configuration Pt 1. (MO)",
      "sprint": "PROD SUPPORT PULL FROM LIST",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1621",
          "name": "Land Profile>Is Active? If a property is entered in from licensing, does it default to is active? If so, land entered in CC should default to Yes Is active as wel."
        },
        {
          "key": "COMO-1589",
          "name": "Land Profile: Is Sub-Unit Enabled MUST BE REMOVED"
        },
        {
          "key": "COMO-1586",
          "name": "Land Profile: Size MUST Accommodate Decimal Poins to the 100ths"
        },
        {
          "key": "COMO-1587",
          "name": "Land Profile: Unit of Measure - Acres ONLY"
        },
        {
          "key": "COMO-1580",
          "name": "Land Profile: Land Name Does/Will NOT Apply to Missouri"
        },
        {
          "key": "COMO-1592",
          "name": "Land Profile: Make Check-In Req/Disclaimer/Disc Notes Manageable on Land Profile Settings"
        }
      ],
      "ticketCount": 15,
      "why": "Missouri collects land details CORE still shows as empty cards and unused fields. Turn off what they do not use, keep land type, and save acres the way they measure them. This is configuration, not a new land product."
    },
    {
      "key": "LICS-3575",
      "q": "2026 Q4",
      "project": "LICS",
      "title": "CWD and deer-management permit updates",
      "epicTitle": "CWD / DMAP allocations \u2014 landowner remaining and hunter self-purchase",
      "sprint": "PROD SUPPORT PULL FROM LIST",
      "shirt": "M - 2 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Missouri CWD and deer-management permits change with the disease map. Product and rule updates have to land before those seasons open. Biologists and the counter will both ask if the old permit is still for sale."
    },
    {
      "key": "RESRV-1380",
      "q": "2026 Q4",
      "project": "RESRV",
      "title": "Attach an organization to an event or class",
      "epicTitle": "Add Organizations to VEMS (MO)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1780",
          "name": "VEMS Location - School ID Field Needed"
        }
      ],
      "ticketCount": 1,
      "why": "Missouri events are run by organizations, not only by a person. Attaching an organization to the class is how they assign ownership and reporting. Without it, every class looks like a one-off."
    },
    {
      "key": "RESRV-1381",
      "q": "2026 Q4",
      "project": "RESRV",
      "title": "Tag which agency division owns an event",
      "epicTitle": "Add Branches (aka Sponsoring Division) to VEMS (MO)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Missouri needs to tag which division owns an event so Education and Protection are not sharing a pile. Filters and reports only work if ownership is on the event. This is org structure, not a new calendar."
    },
    {
      "key": "RESRV-1556",
      "q": "2026 Q4",
      "project": "RESRV",
      "title": "Turn class skills, attitude, and scoring on or off by state",
      "epicTitle": "Update class assessment process to be configurable per state (MO)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Missouri"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Class skills, attitude, and scoring are not used the same way in every state. Agencies need those pieces on or off without a custom build. Arkansas, Missouri, Ohio, Oregon, and others share the same class engine."
    },
    {
      "key": "RESRV-458",
      "q": "2026 Q4",
      "project": "RESRV",
      "title": "Stop signup when an event is full; keep waitlists accurate",
      "epicTitle": "Event Capacity & Waitlist Management (AR, MN, MO, OR, MS) (CV-363 / CV-321)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "M - 2 sprints",
      "clients": [
        "Mississippi",
        "Oregon"
      ],
      "tickets": [
        {
          "key": "MDWFP-448",
          "name": "20.24 - 20.24\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must include a wait list procedure for Agency specified events. For these designated events, customers would be able to register on the wait list even if the event was full, and their application would be date/tim..."
        },
        {
          "key": "MDWFP-449",
          "name": "20.25 - 20.25\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must retain historical information on customers that cancel event registration, those that are wait listed, and those that successfully register, and the events and dates associated with these actions. This inform..."
        },
        {
          "key": "OV-2817",
          "name": "User Waitlist Messaging and Button Logic at Engagement Profile/Register Page (1769)(INT)"
        },
        {
          "key": "OV-2822",
          "name": "Waitlist Messaging and Logic when Event Has Requirements and Attempt to Add to Cart when Event at Max Capacity (INT)"
        },
        {
          "key": "OV-2823",
          "name": "Waitlist Functionality,  Logic, and Notification"
        },
        {
          "key": "OV-2826",
          "name": "UPDATE - Add Waitlisted Value to OV-1580 (CC)"
        }
      ],
      "ticketCount": 7,
      "why": "Events still take signups after they are full, and waitlists lie. Stop the extra seat and keep the waitlist honest. Shared across the states that sell seats in CORE."
    },
    {
      "key": "SYST-3212",
      "q": "2026 Q4",
      "project": "SYST",
      "title": "Missouri commercial print templates",
      "epicTitle": "MEDA-1798 - Missouri Commercial Print Templates (FF) (MO)",
      "sprint": "2026 Q4",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1042",
          "name": "Commercial Print Templates (MO)"
        }
      ],
      "ticketCount": 1,
      "why": "Missouri commercial print still uses the wrong templates, so a business license or receipt can print with the wrong layout. Staff reprint and customers walk with a document that does not match the sale. This is Missouri print, not a new product line."
    },
    {
      "key": "SYST-3491",
      "q": "2026 Q4",
      "project": "SYST",
      "title": "Printed license and receipt template fixes",
      "epicTitle": "MO Print Template Updates (MO)",
      "sprint": "2026 Q4",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1817",
          "name": "Print Templates: - MAJOR Issues"
        },
        {
          "key": "COMO-72",
          "name": "2.4.11\u00a0- QR Codes"
        },
        {
          "key": "COMO-948",
          "name": "Replacements on Print Templates"
        },
        {
          "key": "COMO-246",
          "name": "2.11.2\u00a0- Print Template Messaging"
        }
      ],
      "ticketCount": 4,
      "why": "Missouri licenses and receipts print wrong, which is what the customer takes home. Template fixes are go-live for paper. Do not brief this as a new license type."
    },
    {
      "key": "SYST-4500",
      "q": "2026 Q4",
      "project": "SYST",
      "title": "Readable notification history with actual email content",
      "epicTitle": "Update Notifications History for usability/readability",
      "sprint": "2026 Q4",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "All",
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1904",
          "name": "Questions around Notification History"
        },
        {
          "key": "COMO-134",
          "name": "2.5.33\u00a0- Manual Journals"
        },
        {
          "key": "COMO-145",
          "name": "2.5.44\u00a0\u00a0- Auto Renewal"
        }
      ],
      "ticketCount": 3,
      "why": "Notification history is a list of labels with no body, so staff cannot see what the customer was actually emailed. Show the content. Missouri and platform support both need this to answer 'I never got it.'"
    },
    {
      "key": "SYST-4803",
      "q": "2026 Q4",
      "project": "SYST",
      "title": "Remind customers before products expire",
      "epicTitle": "Product Expiration Notifications (FF)",
      "sprint": "2026 Q4",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Customers find out a privilege expired when they are already in the field or at the counter. A reminder before expiry is fewer angry lines and fewer lost sales. Platform-wide."
    },
    {
      "key": "SYST-882",
      "q": "2026 Q4",
      "project": "SYST",
      "title": "Buy licenses for other people in one checkout",
      "epicTitle": "Multi-Customer Flow Update (MO, MN, MS)",
      "sprint": "2026 Q4",
      "shirt": "M - 2 sprints",
      "clients": [
        "All",
        "Missouri",
        "Mississippi",
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "COMO-120",
          "name": "2.5.19\u00a0- Multi-Customer, Multi-Item"
        },
        {
          "key": "COMO-118",
          "name": "2.5.17\u00a0- Multi-Customer"
        },
        {
          "key": "COMO-502",
          "name": "Legacy Multi-Customer Sales"
        },
        {
          "key": "COMO-147",
          "name": "2.5.46\u00a0- Multi-Customer Reporting"
        },
        {
          "key": "COMO-819",
          "name": "Auto-Renewal: Multi-Customer/Managed Relationship Sale - AR NOT allowed"
        },
        {
          "key": "COMO-992",
          "name": "Multi-Customer Flow"
        }
      ],
      "ticketCount": 16,
      "why": "Buying licenses for a spouse or child still means extra checkouts. One cart for other people is how families actually buy. Minnesota, Mississippi, Missouri, and anyone using household sales will feel this."
    },
    {
      "key": "SYST-4669",
      "q": "2026 Q4",
      "project": "SYST",
      "title": "Issue the ginseng authorization permit in CORE",
      "epicTitle": "FROM DTSD - Unable to create Ginseng Authorization permit in CORE",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Missouri issues a ginseng authorization that still does not live in CORE. Until it does, that permit is a side process. Put it on the same customer as everything else they buy."
    },
    {
      "key": "CALM-2939",
      "q": "2027 Q1",
      "project": "CALM",
      "title": "Switch address lookup vendors (Radar, Google, or others)",
      "epicTitle": "Update Address Lookups",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Mobile address lookup has to follow the vendor the agency picked (Radar, Google, or other). A wrong or dead vendor means residency and shipping fail on the phone. PayIt-owned switch work that every app client inherits."
    },
    {
      "key": "CALM-3134",
      "q": "2027 Q1",
      "project": "CALM",
      "title": "Clearer mobile home screen and navigation (part 2)",
      "epicTitle": "Drive Mobile Adoption through UX Modernization (All) Pt. 2",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Second slice of the clearer mobile home: navigation that gets a hunter to buy, check, and find without hunting through menus. Same research as part 1\u2014make the job obvious, do not restyle for its own sake."
    },
    {
      "key": "CALM-3383",
      "q": "2027 Q1",
      "project": "CALM",
      "title": "Mobile release maintenance",
      "epicTitle": "2027 Q1 Release Maintenance",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Q1 mobile release maintenance so winter builds still ship. Not a feature. App clients stay current."
    },
    {
      "key": "CALM-3384",
      "q": "2027 Q1",
      "project": "CALM",
      "title": "Mobile app upgrades and maintenance",
      "epicTitle": "2027 Q1 Tech Debt/Upgrades",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Q1 mobile upgrades and OS maintenance. PayIt-owned. Required to keep the store listing alive."
    },
    {
      "key": "CVEH-1420",
      "q": "2027 Q1",
      "project": "CVEH",
      "title": "One primary owner on each vehicle",
      "epicTitle": "(Rollover) Primary Vehicle Owner (NC) (All)",
      "sprint": "Future Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "All",
        "Minnesota",
        "Mississippi"
      ],
      "tickets": [
        {
          "key": "MELS-2538",
          "name": "Remove Owner Prompt - \"Who is performing the transaction?\""
        },
        {
          "key": "MDWFP-1603",
          "name": "Co-owner on boat must always keep the primary owner as the primary owner. It should not switch based on who is completing the transaction. "
        },
        {
          "key": "MDWFP-1679",
          "name": "Clear definition between Owner 1 and Owner 2"
        }
      ],
      "ticketCount": 3,
      "why": "Vehicles end up with two 'primary' owners and then every mailing and liability question is ambiguous. One primary owner. Minnesota, Mississippi, and platform vehicle clients."
    },
    {
      "key": "CVEH-117",
      "q": "2027 Q1",
      "project": "CVEH",
      "title": "Staff can correct registration start and end dates",
      "epicTitle": "Edit Reg Validity Dates (CR) (All)",
      "sprint": "Priority Unrefined Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "Mississippi",
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "MDWFP-138",
          "name": "10.9 - 10.9\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must allow manual adjustment of registration expiration date by administrators with the proper role- based security level."
        },
        {
          "key": "MDWFP-148",
          "name": "10.19 - 10.19\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 All historical information and comments must be kept so that users can easily identify who owned what boats, when, and how they were registered, and include historical comments made by System administrators and System users,..."
        },
        {
          "key": "MELS-1864",
          "name": "UAT-VEH-CCA - Need Expiration Date Field on Vehicle Profile"
        },
        {
          "key": "MELS-3319",
          "name": "UAT-VEH-CC-Vehicle Registration Expiration Date Not Editable"
        },
        {
          "key": "MDWFP-156",
          "name": "11.6 - 11.6\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must allow authorized Agency, Agent, or Vendor staff to maintain a narrative comments section for each unique customer record.The System must be capable of recording comments over time and associating each comme..."
        }
      ],
      "ticketCount": 5,
      "why": "Staff issue a registration with the wrong start or end date and cannot fix it without a ticket. Louisiana, Minnesota, and Mississippi need a staff correction path. Customers should not wait on PayIt for a date typo."
    },
    {
      "key": "CVEH-1412",
      "q": "2027 Q1",
      "project": "CVEH",
      "title": "Fill make and year from the hull ID",
      "epicTitle": "Autofill Manufacturer and Year from HIN (NN) (MN, LA, MS)",
      "sprint": "Priority Unrefined Work",
      "shirt": "S - 1 sprint",
      "clients": [
        "Mississippi"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Hull ID already knows make and year; clerks retype it and mismatch. Autofill from the hull ID for Louisiana, Minnesota, and Mississippi. Faster counter, fewer typos on the title."
    },
    {
      "key": "CVEH-1571",
      "q": "2027 Q1",
      "project": "CVEH",
      "title": "Search and autofill lienholder banks",
      "epicTitle": "Financial Institution Selection Search (NN) (ALL)",
      "sprint": "Priority Unrefined Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Lienholder banks are retyped every time, so names never match. Search and autofill the bank. Title staff stop inventing a new spelling of the same lender."
    },
    {
      "key": "CVEH-1375",
      "q": "2027 Q1",
      "project": "CVEH",
      "title": "Different vehicle powers by seller type (office vs retail)",
      "epicTitle": "Vehicle Config by Agent Type (NC) (MS,LA)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "A DNR office and a retail seller should not have the same vehicle powers. Louisiana and Mississippi already run that split; CORE still treats them alike. Wrong power means a dealer does an office job or vice versa."
    },
    {
      "key": "CVEH-1404",
      "q": "2027 Q1",
      "project": "CVEH",
      "title": "Reject invalid VIN format before save",
      "epicTitle": "Validate VIN Numbers (NC) (All)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Bad VIN format still saves, and then every later document is wrong. Reject it before save. This is data hygiene every title shop will thank you for."
    },
    {
      "key": "CVEH-1617",
      "q": "2027 Q1",
      "project": "CVEH",
      "title": "Standard reasons when more information is needed",
      "epicTitle": "Common More Info Needed Reasons (NN) (LA, MN, MS)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Mississippi"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "When more information is needed, the reason is free text and unreportable. Standard reasons for Louisiana, Minnesota, and Mississippi so queues and letters mean the same thing. Customers get a clear ask instead of a vague hold."
    },
    {
      "key": "CVEH-1685",
      "q": "2027 Q1",
      "project": "CVEH",
      "title": "Title mailing-address list for a date range",
      "epicTitle": "Title Address Printing (NN) (MS)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Mississippi"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Mississippi needs a mailing list of titles for a date range to run the print vendor. Without it, they export by hand. This is operations for title-by-mail."
    },
    {
      "key": "FNCL-1547",
      "q": "2027 Q1",
      "project": "FNCL",
      "title": "Accounting reports \u2014 next set",
      "epicTitle": "Accounting Reports 3 (FF) (MO,MN)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-2240",
          "name": "Reports: Product Sales Report - Does it exist?"
        },
        {
          "key": "COMO-438",
          "name": "2.21.3\u00a0- ACH Reporting"
        }
      ],
      "ticketCount": 2,
      "why": "Minnesota and Missouri still need the next set of accounting reports they close the books on. If a report is missing, they keep a shadow spreadsheet. This is finance's month-end, not a dashboard for fun."
    },
    {
      "key": "FNCL-1626",
      "q": "2027 Q1",
      "project": "FNCL",
      "title": "Accounting reports \u2014 additional states",
      "epicTitle": "Accounting - Reports Update 2 (FF) (MS, MO, MN, LA)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri",
        "Louisiana"
      ],
      "tickets": [
        {
          "key": "COMO-438",
          "name": "2.21.3\u00a0- ACH Reporting"
        }
      ],
      "ticketCount": 1,
      "why": "Additional states need those same accounting reports, not a one-off for the first two. Louisiana, Minnesota, Mississippi, and Missouri all have to file. Same reports, more books."
    },
    {
      "key": "FNCL-2",
      "q": "2027 Q1",
      "project": "FNCL",
      "title": "Calculate sales tax on merchandise and fees (licenses can stay untaxed)",
      "epicTitle": "Sales Tax Configuration and Enforcement for Merchandise and Fees (NN) (MS, MN, OH)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "M - 2 sprints",
      "clients": [
        "Mississippi",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "MDWFP-499",
          "name": "29.2 - 29.2\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must have the ability to apply taxes to a customer\u2019s order based on the customer\u2019s address and in accordance with MS Sales and Use Tax policy."
        },
        {
          "key": "CROH-407",
          "name": "10.1.17 Sales tax"
        }
      ],
      "ticketCount": 2,
      "why": "Merchandise and fees need sales tax; many licenses stay untaxed. Today the cart cannot do that split, so agencies either skip tax or tax the wrong thing. Minnesota, Mississippi, and Ohio all have this mix in one sale."
    },
    {
      "key": "FNCL-68",
      "q": "2027 Q1",
      "project": "FNCL",
      "title": "Clearer history of voids, refunds, and invalidations",
      "epicTitle": "Void Detail History (FF) (MN, MS, MO)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri",
        "Mississippi",
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "COMO-131",
          "name": "2.5.30\u00a0- Void/Invalidate"
        },
        {
          "key": "MDWFP-110",
          "name": "9.17 - 9.17\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System and process must allow Agents and customers to reprint currently held and valid License Related Products at no charge (no Vendor Transaction Fee) for a specified time period, from the time of the initial transac..."
        },
        {
          "key": "MDWFP-335",
          "name": "17.18 - 17.19\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must support a process for handling void transactions to maintain the integrity of financial information and to minimize the possibility of fraud. Void transaction rules will be determined by role-based security p..."
        },
        {
          "key": "MDWFP-338",
          "name": "17.22 - 17.22\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must have the capability of issuing refunds with appropriate authorization and documentation. All historical data must be maintained for auditing purposes."
        },
        {
          "key": "MDWFP-342",
          "name": "17.26 - 17.26\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must automatically capture refund request data and also user entered data including but not limited to customer information, refund request date, reason for refund, status, status date, and user making the change."
        },
        {
          "key": "MDWFP-370",
          "name": "18.6 - 18.6\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0 The System must allow Agents to reverse a sale prior to printing the license."
        }
      ],
      "ticketCount": 14,
      "why": "Voids, refunds, and invalidations are hard to follow after the fact, so clerks and finance argue about what happened. A clearer history is how you answer a customer and an auditor. Minnesota, Mississippi, and Missouri."
    },
    {
      "key": "FNCL-1635",
      "q": "2027 Q1",
      "project": "FNCL",
      "title": "Vendor statements: newest first, printable, skip vendors with no sales",
      "epicTitle": "Vendors Statements Updates (CR) (MO)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1698",
          "name": "Agent EFT Statement Issues"
        },
        {
          "key": "COMO-1693",
          "name": "Vendors>Statements Tab: Sort Newest to Oldest"
        }
      ],
      "ticketCount": 2,
      "why": "Missouri vendor statements dump oldest-first and include vendors with no sales. Print newest first and skip the zeros so accounting can mail a statement. Small, and they will notice every month."
    },
    {
      "key": "FNCL-322",
      "q": "2027 Q1",
      "project": "FNCL",
      "title": "Report collected tax by Ohio taxing district (and home state if out of Ohio)",
      "epicTitle": "Sales Tax Reporting by Taxing District and State (NN) (OH)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-408",
          "name": "10.1.18 Sales tax reports"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio has to report tax by taxing district, and by the customer's home state when they are not Ohio. Without that breakdown, finance cannot file what DOW owes the state. This attributes tax already collected; it does not invent a new tax."
    },
    {
      "key": "LICS-3712",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Turn land profiles on separately for businesses vs people",
      "epicTitle": "Land profiles \u2014 independent on/off for business vs individual customers",
      "sprint": "2026 Q4 - Feature Work",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Land profiles for a business and for a person should be turned on separately. Some agencies are ready for people and not for outfitters, or the reverse. PayIt-owned switch so we do not force both."
    },
    {
      "key": "LICS-3886",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Draw group: leader buys the quota, members buy a companion license",
      "epicTitle": "Draw Award \u2014 leader Product A / member Product B purchase with single group quota",
      "sprint": "2026 Q4 - Feature Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "A draw group needs the leader to buy the quota and members to buy a companion license, not six people fighting for the same tag. PayIt-owned pattern several states will use. Hunters already hunt this way in camp."
    },
    {
      "key": "LICS-2736",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Clearer residency rules and display",
      "epicTitle": "Residency Issues (MO, MN)",
      "sprint": "2027 Q1 - MO Work",
      "shirt": "M - 2 sprints",
      "clients": [
        "Minnesota"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Residency rules are easy to misread on screen, so a nonresident buys a resident price or vice versa. Minnesota and Missouri need the rule and the display to match. This is money and eligibility, not copy-editing."
    },
    {
      "key": "LICS-3020",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Customer-facing property card on the web",
      "epicTitle": "Display Customer Property Card on Web/POS (MO)",
      "sprint": "2027 Q1 - MO Work",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-2000",
          "name": "Land Profile Tile - The information presented will NOT work"
        },
        {
          "key": "COMO-1623",
          "name": "Land Profile>Licensing Display: Information displayed needs to be updated"
        }
      ],
      "ticketCount": 2,
      "why": "Missouri landowners should see their property card on the web the way staff see it. Today they call in because they cannot verify acres or type. Self-serve here cuts counter volume."
    },
    {
      "key": "LICS-3031",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Hide land editing from the sales counter",
      "epicTitle": "Restrict Land Profile Management in POS (MO)",
      "sprint": "2027 Q1 - MO Work",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1616",
          "name": "Land Profile: How do we not allow POS to manage a land profile?"
        }
      ],
      "ticketCount": 1,
      "why": "The sales counter should not edit land; that is how acres get changed during a rush. Missouri wants land edits in the back office. Clerks sell; specialists maintain land."
    },
    {
      "key": "LICS-3053",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Keep land history when customer records are merged",
      "epicTitle": "Landowner Merge Update (MO)",
      "sprint": "2027 Q1 - MO Work",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-927",
          "name": "Merges: Should Not 'Always' Move Landowner Permit Application Data Forward"
        }
      ],
      "ticketCount": 1,
      "why": "Merging two customer records today can drop land history. Missouri still needs to know which land that person used. History has to survive the merge."
    },
    {
      "key": "LICS-2157",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Multiple attachments on a land record",
      "epicTitle": "Land Profile Attachment Updates (MO)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1615",
          "name": "MDC Landowner Regulations (Reference Material and Supporting Docs)"
        },
        {
          "key": "COMO-154",
          "name": "2.5.53\u00a0- Landowner Admin Entry"
        },
        {
          "key": "COMO-155",
          "name": "2.5.54\u00a0- Landowner Verification"
        },
        {
          "key": "COMO-158",
          "name": "2.5.57\u00a0- Landowner Expiration"
        },
        {
          "key": "COMO-265",
          "name": "2.12.15\u00a0- Permit Allotment"
        },
        {
          "key": "COMO-683",
          "name": "Attachments by Module: Allow for Unique List of Document Types per Module, W/ Multi-Select"
        }
      ],
      "ticketCount": 7,
      "why": "Missouri land records need more than one attachment (deed, map, letter). One file means the rest lives in email. Multiple attachments keep the land file in CORE."
    },
    {
      "key": "LICS-3018",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Better land search results for staff",
      "epicTitle": "Land Related Control Center Search Results Grid Updates (MO)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1629",
          "name": "Land Profile>Search Return Columns: Required Columns on Search Display"
        },
        {
          "key": "COMO-1484",
          "name": "Land>County Display: Need columns displayed"
        },
        {
          "key": "COMO-1627",
          "name": "Land Profile>Search: Include Conservation ID as a Search Field"
        }
      ],
      "ticketCount": 3,
      "why": "Missouri staff search land and get results they cannot use. Better results mean they find the tract before the hunter leaves the counter. Search quality is a landowner-sale problem."
    },
    {
      "key": "LICS-3054",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Show land used on a past sale",
      "epicTitle": "Land Profile Information View in Transaction Detail History (MO)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1958",
          "name": "Customers>Transactions: Missing Information that MUST be displayed"
        }
      ],
      "ticketCount": 1,
      "why": "Staff cannot see which land was used on a past sale, so they re-ask the hunter every year. Show it. Missouri landowner renewals get faster and more accurate."
    },
    {
      "key": "LICS-3055",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Land updates appear the same on web, counter, and back office",
      "epicTitle": "Ensure Land Profile Sync Between CC/Web/POS (MO)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1641",
          "name": "Land Profile:  When entering in CC does not appear on Public Web"
        }
      ],
      "ticketCount": 1,
      "why": "A land change on the web does not always show at the counter or in the back office. Missouri will sell on stale acres if those three stay out of sync. Same land, same picture everywhere."
    },
    {
      "key": "LICS-3062",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Simpler land fields for landowners (part 2)",
      "epicTitle": "Land Profile Attribute Configuration Pt 2. (MO)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1559",
          "name": "CC>Landowner/Property Information Gaps/Questions"
        },
        {
          "key": "COMO-1626",
          "name": "Land Profile>Customers: As an Admin User/Customer, I need to see USEFUL information with minimal scrolling or swapping between screens, tabs, or tiles, to view the entire picture of my landprofile. "
        }
      ],
      "ticketCount": 2,
      "why": "Second slice of simpler land fields for Missouri landowners: collect what the rule needs, hide the rest. Landowners abandon the form when it looks like a GIS survey. This is still configuration, not a new module."
    },
    {
      "key": "LICS-3063",
      "q": "2027 Q1",
      "project": "LICS",
      "title": "Confirm the land before buying a landowner permit",
      "epicTitle": "Confirm Land Property Details During Landowner Permit Purchase (MO)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1853",
          "name": "Updates to Cart/Purchase functionality for Landowner"
        },
        {
          "key": "COMO-2035",
          "name": "Available Properties to display upon purchase of permits"
        },
        {
          "key": "COMO-156",
          "name": "2.5.55\u00a0- Landowner Sales Process"
        }
      ],
      "ticketCount": 3,
      "why": "Missouri landowner permits should not sell until the hunter confirms the land. A wrong tract is a compliance miss. Confirm at buy time."
    },
    {
      "key": "RESRV-431",
      "q": "2027 Q1",
      "project": "RESRV",
      "title": "Save or withdraw a volunteer signup for a specific event",
      "epicTitle": "Adoption & Conversion Optimization - Volunteer Registration Workflow - (NN) (All)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1310",
          "name": "VEMS: Volunteer Event Entry Issues"
        }
      ],
      "ticketCount": 1,
      "why": "A volunteer should save or withdraw a signup for one event without calling the coordinator. Missouri and other event clients lose volunteers in a form they cannot undo. This is courtesy and data quality."
    },
    {
      "key": "RESRV-435",
      "q": "2027 Q1",
      "project": "RESRV",
      "title": "Save, withdraw, or submit a volunteer application (not tied to one event)",
      "epicTitle": "Adoption & Conversion Optimization - Volunteer Application Workflow - (NN) (All)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1310",
          "name": "VEMS: Volunteer Event Entry Issues"
        }
      ],
      "ticketCount": 1,
      "why": "Volunteer applications (not tied to one event) also need save, withdraw, and submit. People start an application on the couch and finish later. Missouri and shared VEMS."
    },
    {
      "key": "RESRV-772",
      "q": "2027 Q1",
      "project": "RESRV",
      "title": "Find events by proximity, calendar date, and category",
      "epicTitle": "Adoption & Conversion Optimization- Attend an Event - Participant (NN) (ALL)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "All",
        "Ohio",
        "Minnesota",
        "Missouri"
      ],
      "tickets": [
        {
          "key": "CROH-201",
          "name": "5.3.7 Map Features"
        },
        {
          "key": "MELS-188",
          "name": "8.1.26 - Map Features"
        },
        {
          "key": "COMO-184",
          "name": "2.6.14\u00a0- Event Display"
        },
        {
          "key": "COMO-183",
          "name": "2.6.13\u00a0- Event Searching"
        },
        {
          "key": "COMO-160",
          "name": "2.5.59\u00a0- Interactive Maps"
        }
      ],
      "ticketCount": 5,
      "why": "Hunters cannot find a class near them, on a date they can attend, in a category they care about. Proximity, calendar, and category are how people actually look. Minnesota, Missouri, Ohio, and anyone using events."
    },
    {
      "key": "RESRV-773",
      "q": "2027 Q1",
      "project": "RESRV",
      "title": "Find volunteer shifts at events with location, date, and role filters",
      "epicTitle": "Adoption & Conversion Optimization - Volunteer at Event (NN) (ALL)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-184",
          "name": "2.6.14\u00a0- Event Display"
        }
      ],
      "ticketCount": 1,
      "why": "Volunteer shift finding is the same problem: location, date, and role. Coordinators get no-shows when people cannot see what is open. Missouri and shared VEMS."
    },
    {
      "key": "RESRV-775",
      "q": "2027 Q1",
      "project": "RESRV",
      "title": "Find volunteer roles with search, filters, and categories",
      "epicTitle": "Adoption & Conversion Optimization - Become a Volunteer (NN) (ALL)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Ohio",
        "Minnesota",
        "Missouri"
      ],
      "tickets": [
        {
          "key": "CROH-201",
          "name": "5.3.7 Map Features"
        },
        {
          "key": "MELS-188",
          "name": "8.1.26 - Map Features"
        },
        {
          "key": "COMO-160",
          "name": "2.5.59\u00a0- Interactive Maps"
        }
      ],
      "ticketCount": 3,
      "why": "Volunteer roles are buried unless you already know the name. Search, filters, and categories let a new volunteer find 'range safety' without a staff email. Same states as event find."
    },
    {
      "key": "SYST-2531",
      "q": "2027 Q1",
      "project": "SYST",
      "title": "Customers can find a lost certification themselves",
      "epicTitle": "Mobile Certifications API updates (MN)",
      "sprint": "2027 and Beyond",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "MELS-2186",
          "name": "Law Enforcement Mobile: redesign customer profile"
        }
      ],
      "ticketCount": 1,
      "why": "Customers lose a certification and call the agency because they cannot look it up. Minnesota and others want the customer to find it themselves. Fewer tickets, same record."
    },
    {
      "key": "SYST-2676",
      "q": "2027 Q1",
      "project": "SYST",
      "title": "Collect SSN/DL only when required; treat foreign DL as an exemption",
      "epicTitle": "SSN and DL Configuration Updates (MN, All)",
      "sprint": "2027 and Beyond",
      "shirt": "M - 2 sprints",
      "clients": [
        "All",
        "Minnesota",
        "Missouri",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "MELS-614",
          "name": "Customer Identification Update"
        },
        {
          "key": "MELS-595",
          "name": "Individual Customer Profile Attributes"
        },
        {
          "key": "MELS-3046",
          "name": "Youth is not a residency DL exception reason to be selected in a drop down"
        },
        {
          "key": "MELS-2835",
          "name": "Social Security Number Alternative - Unknown Purpose/functionality"
        },
        {
          "key": "MELS-2840",
          "name": "Creating a Tribal Member Record"
        },
        {
          "key": "MELS-3328",
          "name": "Residents Age 21 or Over Require MN DL/ID at Time of Sale"
        }
      ],
      "ticketCount": 13,
      "why": "SSN and driver license are collected when the sale does not need them, and a foreign DL is treated as missing. Collect only when required and treat a foreign DL as an exemption. Minnesota, Missouri, Ohio, and privacy audits all care."
    },
    {
      "key": "SYST-3087",
      "q": "2027 Q1",
      "project": "SYST",
      "title": "Group mailed credentials from the same sale consistently",
      "epicTitle": "Fulfillment Refactor - Rollup (ALL)",
      "sprint": "2027 and Beyond",
      "shirt": "M - 2 sprints",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Credentials from the same sale mail as separate packets and confuse the household. Group them. Platform-wide fulfillment quality."
    },
    {
      "key": "SYST-3217",
      "q": "2027 Q1",
      "project": "SYST",
      "title": "Check new accounts against interstate revocation data before they can buy",
      "epicTitle": "MEDA-505 - IWVC Updates (OH, MO)",
      "sprint": "2027 and Beyond",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-167",
          "name": "2.5.66\u00a0- IWVC Integration"
        },
        {
          "key": "COMO-603",
          "name": "CORE: Legacy Customer Screen Gaps"
        }
      ],
      "ticketCount": 2,
      "why": "A revoked hunter from another state can still open an account and buy. Missouri and Ohio want interstate revocation checked before the first sale. This is compact enforcement, not a marketing flag."
    },
    {
      "key": "SYST-3630",
      "q": "2027 Q1",
      "project": "SYST",
      "title": "Search and reuse certification records instead of retyping",
      "epicTitle": "Certifications Pt. 4.5 (FF) (MO, OR)",
      "sprint": "2027 and Beyond",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Missouri",
        "Oregon"
      ],
      "tickets": [
        {
          "key": "COMO-1660",
          "name": "MDC Attestation for POS Users"
        },
        {
          "key": "COMO-2180",
          "name": "Products>Policies: Limited character limit to provide directions on how to send in hunter education"
        },
        {
          "key": "OV-2641",
          "name": "Search for Missing Certificate (INT)"
        },
        {
          "key": "OV-2627",
          "name": "Add Certification Reorder in Cart (INT)"
        },
        {
          "key": "OV-2651",
          "name": "Missing Certification Search Results Pages - Exact Match (INT)"
        },
        {
          "key": "OV-2652",
          "name": " Missing Certification Search Results Pages - Partial Match or Multiple Exact  Matches (INT)"
        }
      ],
      "ticketCount": 8,
      "why": "Staff retype certification records that already exist, and then duplicates fight each other. Search and reuse. Missouri, Oregon, and shared hunter-ed."
    },
    {
      "key": "SYST-1043",
      "q": "2027 Q1",
      "project": "SYST",
      "title": "Hide contact info for judges, officers, and attorneys from public reports",
      "epicTitle": "Protected Customer Record Designation for Public Employee Accounts (NN) (OH)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-55",
          "name": "1.5.10 Designated Public Employee"
        },
        {
          "key": "CROH-2101",
          "name": "Control Center_ Is Protected Record_Special Product Approvals_ Permission Control Needed"
        }
      ],
      "ticketCount": 2,
      "why": "Ohio public reports still expose contact info for judges, officers, and attorneys. That is a safety and policy miss. Hide it on public output; staff tools can keep it."
    },
    {
      "key": "SYST-2983",
      "q": "2027 Q1",
      "project": "SYST",
      "title": "Watch-list report of sales, harvest, events, and lotteries for flagged customers",
      "epicTitle": "Watch List (NC) (OH)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-376",
          "name": "9.3.4 Watch list Report"
        },
        {
          "key": "CROH-362",
          "name": "9.1.2 Watch List"
        }
      ],
      "ticketCount": 2,
      "why": "Ohio needs a watch-list of sales, harvest, events, and lotteries for flagged customers. Investigators should not query four modules. One report is the job they bought."
    },
    {
      "key": "SYST-3822",
      "q": "2027 Q1",
      "project": "SYST",
      "title": "Email links land on the right web page after login",
      "epicTitle": "Flyout Links by Direct from email notifications - GO LIVE (MO)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Missouri"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Missouri email links dump people on the wrong web page after login, so they think the notice was a dead end. Land on the page the email promised. This is trust in every notice you send."
    },
    {
      "key": "CALM-1563",
      "q": "2027 Q2",
      "project": "CALM",
      "title": "Warn in the app when a link opens an outside site (hunter ed, partners)",
      "epicTitle": "Message when Leaving Mobile App (NC) (OH)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-290",
          "name": "7.5.4 Other (non-ODNR) Links"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio's app opens hunter-ed and partner sites with no warning, and people think they are still in the agency app. Warn when a link leaves. That is how you avoid phishing panic and lost sessions."
    },
    {
      "key": "CALM-3413",
      "q": "2027 Q2",
      "project": "CALM",
      "title": "Clearer mobile home screen and navigation (part 3)",
      "epicTitle": "Drive Mobile Adoption through UX Modernization (All) Pt. 3",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Third slice of the clearer mobile home and navigation. Same goal: hunters complete the job they opened the app for. Still not a visual restyle for its own sake."
    },
    {
      "key": "CVEH-1648",
      "q": "2027 Q2",
      "project": "CVEH",
      "title": "Merge duplicate vehicle records",
      "epicTitle": "Merge Vehicles",
      "sprint": "",
      "shirt": "L - 3 sprints",
      "clients": [
        "Mississippi"
      ],
      "tickets": [
        {
          "key": "MDWFP-1562",
          "name": "Boat merge button request for when a boat has two boat profiles?"
        }
      ],
      "ticketCount": 1,
      "why": "Mississippi has duplicate vehicle records for the same hull or VIN, so history and fees split. Merge them. Title staff cannot certify a file that exists twice."
    },
    {
      "key": "CVEH-1757",
      "q": "2027 Q2",
      "project": "CVEH",
      "title": "Register a boat and its motor in one flow",
      "epicTitle": "Linked Vehicle Types in New Reg and Title Workflow (All) (NN)",
      "sprint": "",
      "shirt": "XL - 5 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "A boat and its motor are one purchase in the real world and two registrations in CORE. Register them in one flow. Every boat client pays the extra counter time until this exists."
    },
    {
      "key": "CVEH-1786",
      "q": "2027 Q2",
      "project": "CVEH",
      "title": "Save filters on vehicle application queues",
      "epicTitle": "Saved Filters for Vehicle Applications (CR) (LA, MS, MN)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "MELS-2248",
          "name": "Vehicles - CC - Vehicle Application Search - Show Only Relevant Results"
        }
      ],
      "ticketCount": 1,
      "why": "Vehicle application queues reset filters every time, so staff re-click the same county and status. Save the filters. Louisiana, Minnesota, Mississippi back-office time."
    },
    {
      "key": "CVEH-1799",
      "q": "2027 Q2",
      "project": "CVEH",
      "title": "Set vehicle renewal rules in Control Center",
      "epicTitle": "Vehicle Renewal Configuration in Control Center (CR) (ALL)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Renewal rules are still code instead of Control Center, so a season change is a project. Let the agency set vehicle renewal rules. Platform vehicle clients stop waiting on a release for a date."
    },
    {
      "key": "FNCL-74",
      "q": "2027 Q2",
      "project": "FNCL",
      "title": "Take cash and card (or multiple tenders) on a single sale",
      "epicTitle": "Enhanced Multi-Tender Payment Handling and Configurable Tender Types (NN) (FF) (LA)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "S - 1 sprint",
      "clients": [
        "Louisiana",
        "Minnesota",
        "Mississippi",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CLV-68",
          "name": "Payment"
        },
        {
          "key": "CLV-387",
          "name": "Agency needs the ability to add a check # during the checkout process."
        },
        {
          "key": "MELS-1763",
          "name": "UAT-VEH-POS-Addition of Check Number Field for Tender Type 'Check'"
        },
        {
          "key": "MDWFP-2011",
          "name": "Adding a check/money order/gift cert/cashier's check, number field at checkout"
        },
        {
          "key": "CROH-310",
          "name": "8.1.8 Sales Processing"
        }
      ],
      "ticketCount": 5,
      "why": "A hunter pays cash and card on one sale and CORE cannot take both. Louisiana, Minnesota, Mississippi, and Ohio all see split tenders at the counter. Multiple tenders on one receipt is how people actually pay."
    },
    {
      "key": "FNCL-2043",
      "q": "2027 Q2",
      "project": "FNCL",
      "title": "Missouri-requested financials (part 1 of 2)",
      "epicTitle": "MO Requests (Pt. 1 of 2) (MO)",
      "sprint": "",
      "shirt": "L - 3 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1721",
          "name": "EFT Report is not Reflecting Voids that were Completed Through CC"
        },
        {
          "key": "COMO-2001",
          "name": "Exempt from PIO Transaction Fee - REQUIRED FOR GO LIVE"
        },
        {
          "key": "COMO-1935",
          "name": "Customers>Wallet Tab: Logs you out of PROD"
        },
        {
          "key": "COMO-1706",
          "name": "Accounts>Statements: Useless if it doesn't include everything it should to analyze statements, include charge and no charge accts"
        },
        {
          "key": "COMO-1651",
          "name": "Roles>Read Only: Able to add Payment Method"
        },
        {
          "key": "COMO-1674",
          "name": "FEIN & State Tax ID Number needs to be set to optional for Vendor records"
        }
      ],
      "ticketCount": 14,
      "why": "This is the first half of Missouri's contracted financials request pack\u2014not one feature. It exists so COMO accounting, statements, and money tickets can close in this quarter. Brief the linked tickets, not this bucket name."
    },
    {
      "key": "LICS-3305",
      "q": "2027 Q2",
      "project": "LICS",
      "title": "Missouri-requested licensing (part 2 of 4)",
      "epicTitle": "MO Requests (Pt. 2 of 4) (MO)",
      "sprint": "2027 Q2 - MO Work",
      "shirt": "L - 3 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1988",
          "name": "Customers>Transactions: Returning Sales by Product Code Doesn't Return Entire Transaction Information"
        },
        {
          "key": "COMO-1839",
          "name": "Transasctions: Unable to search using telecheck ID"
        },
        {
          "key": "COMO-1804",
          "name": "Customers>Active Privileges/Transactions: Unable to view telecheck IDs, ginseng certifications, etc."
        },
        {
          "key": "COMO-1803",
          "name": "Products: TELECHECK ID # Assignment - GO LIVE and TESTING CRITICAL"
        },
        {
          "key": "COMO-1574",
          "name": "Residency Exemptions: Not All Exemptions are able to be sold by all vendor types"
        },
        {
          "key": "COMO-1527",
          "name": "Custom Lookups> Residency Exemption Reasons Updates Needed Pt 2"
        }
      ],
      "ticketCount": 13,
      "why": "Second slice of the same Missouri licensing request pack. Same rule: do not brief the bucket; brief the COMO tickets inside it."
    },
    {
      "key": "LICS-3304",
      "q": "2027 Q2",
      "project": "LICS",
      "title": "Missouri-requested licensing (part 1 of 4)",
      "epicTitle": "MO Requests (Pt. 1 of 4) (MO)",
      "sprint": "",
      "shirt": "L - 3 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1988",
          "name": "Customers>Transactions: Returning Sales by Product Code Doesn't Return Entire Transaction Information"
        },
        {
          "key": "COMO-1839",
          "name": "Transasctions: Unable to search using telecheck ID"
        },
        {
          "key": "COMO-1804",
          "name": "Customers>Active Privileges/Transactions: Unable to view telecheck IDs, ginseng certifications, etc."
        },
        {
          "key": "COMO-1803",
          "name": "Products: TELECHECK ID # Assignment - GO LIVE and TESTING CRITICAL"
        },
        {
          "key": "COMO-1574",
          "name": "Residency Exemptions: Not All Exemptions are able to be sold by all vendor types"
        },
        {
          "key": "COMO-1527",
          "name": "Custom Lookups> Residency Exemption Reasons Updates Needed Pt 2"
        }
      ],
      "ticketCount": 13,
      "why": "First slice of Missouri's contracted licensing requests, not a single product. Capacity is reserved so COMO licensing tickets can close. Use the linked tickets when you brief a customer."
    },
    {
      "key": "LICS-3770",
      "q": "2027 Q2",
      "project": "LICS",
      "title": "Missouri-requested licensing (part 3 of 4)",
      "epicTitle": "MO Requests (Pt. 3 of 4) (MO)",
      "sprint": "",
      "shirt": "L - 3 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1988",
          "name": "Customers>Transactions: Returning Sales by Product Code Doesn't Return Entire Transaction Information"
        },
        {
          "key": "COMO-1839",
          "name": "Transasctions: Unable to search using telecheck ID"
        },
        {
          "key": "COMO-1804",
          "name": "Customers>Active Privileges/Transactions: Unable to view telecheck IDs, ginseng certifications, etc."
        },
        {
          "key": "COMO-1803",
          "name": "Products: TELECHECK ID # Assignment - GO LIVE and TESTING CRITICAL"
        },
        {
          "key": "COMO-1574",
          "name": "Residency Exemptions: Not All Exemptions are able to be sold by all vendor types"
        },
        {
          "key": "COMO-1527",
          "name": "Custom Lookups> Residency Exemption Reasons Updates Needed Pt 2"
        }
      ],
      "ticketCount": 13,
      "why": "Third slice of Missouri's licensing request pack. Still a delivery bucket for contracted tickets, not a new license type."
    },
    {
      "key": "RESRV-437",
      "q": "2027 Q2",
      "project": "RESRV",
      "title": "Warn on duplicate locations and double-booked facilities; relax rigid seat limits",
      "epicTitle": "Duplicate Engagement Location Prevention and Management Logic (FF) (AR, MN, OH, OR)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Minnesota",
        "Ohio",
        "Arkansas",
        "Oregon"
      ],
      "tickets": [
        {
          "key": "MELS-179",
          "name": "8.1.15 - Duplicate Locations"
        },
        {
          "key": "CROH-168",
          "name": "5.1.5 Duplicate Locations"
        },
        {
          "key": "CRAR-922",
          "name": "VEMS - Double Booking Events"
        },
        {
          "key": "OV-4555",
          "name": "VEMS Feature and Code Simplification - Location Capacity Management"
        }
      ],
      "ticketCount": 4,
      "why": "Two classes get the same room, or seat limits are so rigid a reasonable overage dies. Warn on duplicate locations and double-books, and stop treating every seat count as sacred. Arkansas, Minnesota, Ohio, Oregon."
    },
    {
      "key": "RESRV-485",
      "q": "2027 Q2",
      "project": "RESRV",
      "title": "Save a registration in progress, withdraw it, and clearer requirement steps",
      "epicTitle": "Adoption & Conversion Optimization - Event Registration Workflow - (NN) (All)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "COMO-1310",
          "name": "VEMS: Volunteer Event Entry Issues"
        },
        {
          "key": "CROH-201",
          "name": "5.3.7 Map Features"
        },
        {
          "key": "COMO-1264",
          "name": "VEMS: Add Event image upload to Event Template"
        }
      ],
      "ticketCount": 3,
      "why": "A registration in progress cannot be saved or withdrawn, so people abandon or create duplicates. Clearer requirement steps tell them why they are stuck. Missouri, Ohio, and shared VEMS."
    },
    {
      "key": "RESRV-1571",
      "q": "2027 Q2",
      "project": "RESRV",
      "title": "Range Class A/B check-in and check-out, orientation, and checkout survey",
      "epicTitle": "Remaining Shooting Range Features (OH)",
      "sprint": "",
      "shirt": "L - 3 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-121",
          "name": "3.3.1 Class B Check-In Process"
        },
        {
          "key": "CROH-116",
          "name": "3.2.2 Class A Check-Out Process"
        },
        {
          "key": "CROH-115",
          "name": "3.2.1 Class A Check-In Process"
        },
        {
          "key": "CROH-112",
          "name": "3.1.6 Report Types and Data Collected"
        },
        {
          "key": "CROH-279",
          "name": "7.3.6 Class B Range Check-in"
        },
        {
          "key": "CROH-122",
          "name": "3.3.2 Class B App Check-In Process - MOBILE"
        }
      ],
      "ticketCount": 9,
      "why": "Ohio Class A and B ranges need check-in, check-out, orientation, and a checkout survey in CORE. Today that lives on clipboards. This is how an unmanned or lightly staffed range actually runs."
    },
    {
      "key": "RESRV-447",
      "q": "2027 Q2",
      "project": "RESRV",
      "title": "Favorite people list and join events as a group",
      "epicTitle": "CV-440 - List of favorite people to assign to VEMS programs Join events as a group (FF) (MN)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Missouri",
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "COMO-177",
          "name": "2.6.7\u00a0- Favorite Event Staff"
        }
      ],
      "ticketCount": 1,
      "why": "People hunt and take classes as a group, then register one by one. Favorites and join-as-group is how families and clubs actually sign up. Minnesota and Missouri."
    },
    {
      "key": "RESRV-774",
      "q": "2027 Q2",
      "project": "RESRV",
      "title": "Let guests search events and roles; create an account only when they register",
      "epicTitle": "Adoption & Conversion Optimization - Guest Experience (NN) (ALL)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Ohio",
        "Minnesota",
        "Missouri"
      ],
      "tickets": [
        {
          "key": "CROH-201",
          "name": "5.3.7 Map Features"
        },
        {
          "key": "MELS-1888",
          "name": "LE Mobile App - camera zoom/scalable QR code (post release 1 epic)"
        },
        {
          "key": "COMO-160",
          "name": "2.5.59\u00a0- Interactive Maps"
        }
      ],
      "ticketCount": 3,
      "why": "Guests should search events and volunteer roles before they create an account. Forcing a login first is why people leave. Account at register-time, not at browse-time."
    },
    {
      "key": "SYST-4102",
      "q": "2027 Q2",
      "project": "SYST",
      "title": "Missouri-requested platform (part 1 of 2)",
      "epicTitle": "MO Requests (Pt. 1 of 2) (MO)",
      "sprint": "MO/MDC Print Templates",
      "shirt": "2XL - 8 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1984",
          "name": "Certification Type Policy - Required to drive attestment at certain vendor types ONLY"
        },
        {
          "key": "COMO-1900",
          "name": "Roles>POS Clerk: Don't Show SSN still shows last 4 but not always"
        },
        {
          "key": "COMO-1787",
          "name": "Print Templates: Print Exemption Type on Template"
        },
        {
          "key": "COMO-1374",
          "name": "Peer to Peer Create New Automatically linked, no approve/deny option"
        },
        {
          "key": "COMO-1198",
          "name": "POS and CC: Creating CID on New Account Prior to Saving Acct"
        },
        {
          "key": "COMO-1932",
          "name": "PILogin Does Not Work"
        }
      ],
      "ticketCount": 48,
      "why": "First half of Missouri's contracted platform request pack (Control Center, customer, cross-cutting tickets). Brief the COMO list, not the bucket. XXL because it is many tickets, not one screen."
    },
    {
      "key": "CVEH-1158",
      "q": "2027 Q3",
      "project": "CVEH",
      "title": "Fuller vehicle history for research",
      "epicTitle": "Expand Vehicle History (NN) (LA, MS, MN)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Minnesota"
      ],
      "tickets": [
        {
          "key": "MELS-1863",
          "name": "UAT-VEH-POS/CC-Registration History"
        }
      ],
      "ticketCount": 1,
      "why": "Louisiana, Minnesota, and Mississippi research a hull and get a thin history. Fuller vehicle history is how they catch skipped transfers. This is investigative, not a new registration type."
    },
    {
      "key": "CVEH-1301",
      "q": "2027 Q3",
      "project": "CVEH",
      "title": "Hide registration or title numbers until approved",
      "epicTitle": "Show / Hide Reg or Title Numbers Before Approval (NC) (All)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Registration or title numbers show before the application is approved, and customers treat a draft as a credential. Hide numbers until approved. Platform-wide vehicle integrity."
    },
    {
      "key": "CVEH-1423",
      "q": "2027 Q3",
      "project": "CVEH",
      "title": "Separate transfer vs add/remove owner (no transfer to yourself)",
      "epicTitle": "Transfer & Add/Remove Owner Flow Changes (NN) (ALL)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "All"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Transferring a vehicle and adding/removing an owner are different legal acts; CORE lets you 'transfer to yourself.' Split them. Every title shop knows the difference; the system should too."
    },
    {
      "key": "CVEH-686",
      "q": "2027 Q3",
      "project": "CVEH",
      "title": "Structured registration and title questions by vehicle type",
      "epicTitle": "Reg and Title Question Changes",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "PayIt"
      ],
      "tickets": [],
      "ticketCount": 0,
      "why": "Registration and title questions are a blob instead of a structure by vehicle type. A boat asks car questions and clerks skip or guess. PayIt-owned so later states inherit a sane form."
    },
    {
      "key": "FNCL-2044",
      "q": "2027 Q3",
      "project": "FNCL",
      "title": "Missouri-requested financials (part 2 of 2)",
      "epicTitle": "MO Requests (Pt. 2 of 2) (MO)",
      "sprint": "",
      "shirt": "L - 3 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1721",
          "name": "EFT Report is not Reflecting Voids that were Completed Through CC"
        },
        {
          "key": "COMO-2001",
          "name": "Exempt from PIO Transaction Fee - REQUIRED FOR GO LIVE"
        },
        {
          "key": "COMO-1935",
          "name": "Customers>Wallet Tab: Logs you out of PROD"
        },
        {
          "key": "COMO-1706",
          "name": "Accounts>Statements: Useless if it doesn't include everything it should to analyze statements, include charge and no charge accts"
        },
        {
          "key": "COMO-1651",
          "name": "Roles>Read Only: Able to add Payment Method"
        },
        {
          "key": "COMO-1674",
          "name": "FEIN & State Tax ID Number needs to be set to optional for Vendor records"
        }
      ],
      "ticketCount": 14,
      "why": "Second half of Missouri's financials request pack. Same contracted tickets, later capacity. Brief COMO, not the epic title."
    },
    {
      "key": "LICS-3771",
      "q": "2027 Q3",
      "project": "LICS",
      "title": "Missouri-requested licensing (part 4 of 4)",
      "epicTitle": "MO Requests (Pt. 4 of 4) (MO)",
      "sprint": "",
      "shirt": "L - 3 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1988",
          "name": "Customers>Transactions: Returning Sales by Product Code Doesn't Return Entire Transaction Information"
        },
        {
          "key": "COMO-1839",
          "name": "Transasctions: Unable to search using telecheck ID"
        },
        {
          "key": "COMO-1804",
          "name": "Customers>Active Privileges/Transactions: Unable to view telecheck IDs, ginseng certifications, etc."
        },
        {
          "key": "COMO-1803",
          "name": "Products: TELECHECK ID # Assignment - GO LIVE and TESTING CRITICAL"
        },
        {
          "key": "COMO-1574",
          "name": "Residency Exemptions: Not All Exemptions are able to be sold by all vendor types"
        },
        {
          "key": "COMO-1527",
          "name": "Custom Lookups> Residency Exemption Reasons Updates Needed Pt 2"
        }
      ],
      "ticketCount": 13,
      "why": "Fourth and last slice of Missouri's licensing request pack. Closes the contracted licensing list for that year. Still a bucket\u2014use the linked tickets in a client meeting."
    },
    {
      "key": "RESRV-1292",
      "q": "2027 Q3",
      "project": "RESRV",
      "title": "Missouri-requested events (part 1 of 2)",
      "epicTitle": "MO Requests (Pt. 1 of 2) (MO)",
      "sprint": "",
      "shirt": "XL - 5 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1245",
          "name": "VEMS: Add Event Type field dropdown to Event creation page"
        },
        {
          "key": "COMO-1835",
          "name": "VEMS: Create Notification for \"Customer Volunteer Award Earned\" Trigger"
        },
        {
          "key": "COMO-1453",
          "name": "VEMS: Remove \"Volunteer at an Event\" button from VEMS homepage"
        },
        {
          "key": "COMO-1438",
          "name": "VEMS \"Organization\" Migration"
        },
        {
          "key": "COMO-1290",
          "name": "Create subtitle field for VEMS"
        },
        {
          "key": "COMO-1276",
          "name": "Volunteer Projects"
        }
      ],
      "ticketCount": 9,
      "why": "First half of Missouri's contracted events request pack. Education and volunteer tickets live here as a set. Brief the COMO events list, not 'MO requests.'"
    },
    {
      "key": "RESRV-1293",
      "q": "2027 Q3",
      "project": "RESRV",
      "title": "Missouri-requested events (part 2 of 2)",
      "epicTitle": "MO Requests (Pt. 2 of 2) (MO)",
      "sprint": "",
      "shirt": "XL - 5 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1245",
          "name": "VEMS: Add Event Type field dropdown to Event creation page"
        },
        {
          "key": "COMO-1835",
          "name": "VEMS: Create Notification for \"Customer Volunteer Award Earned\" Trigger"
        },
        {
          "key": "COMO-1453",
          "name": "VEMS: Remove \"Volunteer at an Event\" button from VEMS homepage"
        },
        {
          "key": "COMO-1438",
          "name": "VEMS \"Organization\" Migration"
        },
        {
          "key": "COMO-1290",
          "name": "Create subtitle field for VEMS"
        },
        {
          "key": "COMO-1276",
          "name": "Volunteer Projects"
        }
      ],
      "ticketCount": 9,
      "why": "Second half of the Missouri events request pack. Same guidance: the value is in the linked tickets."
    },
    {
      "key": "RESRV-490",
      "q": "2027 Q3",
      "project": "RESRV",
      "title": "Auto-mark volunteers inactive after they stop serving; staff can reinstate",
      "epicTitle": "Volunteer Eligibility - Automatic Inactivity Status Changes (FF) (OH, MN)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Minnesota",
        "Missouri",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "MELS-173",
          "name": "8.1.9 - Admin control - Overwrite"
        },
        {
          "key": "MELS-645",
          "name": "Configuration Point for Volunteer Inactivity Status Change/Inactivity Logic (CC)"
        },
        {
          "key": "MELS-646",
          "name": "Ability for Staff to Reinstate Re-Registration Required VSD Due to Inactivity (CC)"
        },
        {
          "key": "COMO-208",
          "name": "2.7.5\u00a0- Automatically Inactivate Admin Users"
        },
        {
          "key": "CROH-191",
          "name": "5.2.6 Volunteer Inactivity"
        }
      ],
      "ticketCount": 5,
      "why": "Volunteers stay 'active' forever, so coordinators cannot tell who still serves. Auto-inactivate after they stop, and let staff reinstate. Minnesota, Missouri, Ohio."
    },
    {
      "key": "SYST-4103",
      "q": "2027 Q3",
      "project": "SYST",
      "title": "Missouri-requested platform (part 2 of 2)",
      "epicTitle": "MO Requests (Pt. 2 of 2) (MO)",
      "sprint": "2026 Q4",
      "shirt": "2XL - 8 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-1984",
          "name": "Certification Type Policy - Required to drive attestment at certain vendor types ONLY"
        },
        {
          "key": "COMO-1900",
          "name": "Roles>POS Clerk: Don't Show SSN still shows last 4 but not always"
        },
        {
          "key": "COMO-1787",
          "name": "Print Templates: Print Exemption Type on Template"
        },
        {
          "key": "COMO-1374",
          "name": "Peer to Peer Create New Automatically linked, no approve/deny option"
        },
        {
          "key": "COMO-1198",
          "name": "POS and CC: Creating CID on New Account Prior to Saving Acct"
        },
        {
          "key": "COMO-1932",
          "name": "PILogin Does Not Work"
        }
      ],
      "ticketCount": 44,
      "why": "Second half of Missouri's platform request pack. XXL for the same reason as part 1: many contracted tickets, one delivery bucket."
    },
    {
      "key": "SYST-856",
      "q": "2027 Q3",
      "project": "SYST",
      "title": "Merge duplicate customers into one surviving record",
      "epicTitle": "Interactive Customer Merge Management / Prime Customer Record (FF) (MO)",
      "sprint": "2027 and Beyond",
      "shirt": "L - 3 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-165",
          "name": "2.5.64\u00a0- Automated Merge Process"
        },
        {
          "key": "COMO-580",
          "name": "Exception Report for Possible Customer Record Merges"
        },
        {
          "key": "COMO-164",
          "name": "2.5.63\u00a0- Duplicate Accounts"
        },
        {
          "key": "COMO-255",
          "name": "2.12.5\u00a0- Customer Merge"
        },
        {
          "key": "COMO-1197",
          "name": "Merges: Merge History is not tracking Merge History"
        },
        {
          "key": "COMO-1195",
          "name": "Merges: Unmerge Screen and Functionality"
        }
      ],
      "ticketCount": 8,
      "why": "Duplicate customers split sales, harvest, and money across two people. Merge into one surviving record for Arkansas, Louisiana, Minnesota, and Missouri. This is how you stop refunding the wrong file."
    },
    {
      "key": "LICS-3103",
      "q": "2027 Q4",
      "project": "LICS",
      "title": "Save the calling number on a phone harvest check",
      "epicTitle": "FROM DTSD - 2.4.5 IVR Data Collection (FF) (OH)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-103",
          "name": "2.4.5 IVR Data Collection"
        },
        {
          "key": "CROH-79",
          "name": "2.1.9 Game Check Data Collection (All Species)"
        }
      ],
      "ticketCount": 2,
      "why": "Ohio phone harvest checks do not keep the calling number, so a later dispute has no trail. Save it. Law enforcement and customer service both use that callback."
    },
    {
      "key": "LICS-3773",
      "q": "2027 Q4",
      "project": "LICS",
      "title": "Apply the 30-day repurchase window to permits that are not exclude-policy",
      "epicTitle": "Permit Repurchase Rule update to Accommodate non-Exclude policy products",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-19",
          "name": "1.2.10 Repurchase Rules"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio's 30-day repurchase window is skipped on permits that are not 'exclude-policy,' so a hunter buys again too soon or is blocked too long. Apply the window to the permits the rule actually names. Fairness at the counter."
    },
    {
      "key": "LICS-3774",
      "q": "2027 Q4",
      "project": "LICS",
      "title": "Harvest report with Ohio filters (game, county, ESA, flags) exportable to Excel",
      "epicTitle": "Survey Raw Data Enhancements (FF) (OH)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-84",
          "name": "2.1.14 Harvest Report"
        },
        {
          "key": "CROH-69",
          "name": "1.7.5 Survey Reports"
        }
      ],
      "ticketCount": 2,
      "why": "Ohio harvest reporting needs their filters\u2014game, county, ESA, flags\u2014and an Excel export biologists already use. A generic dump does not file. This is how they manage the season, not a vanity report."
    },
    {
      "key": "RESRV-462",
      "q": "2027 Q4",
      "project": "RESRV",
      "title": "Filter event reports by type, location, capacity, and volunteer roles",
      "epicTitle": "Criteria for Event Reports (FF) (OH)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-169",
          "name": "5.1.6 Event Configuration"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio event reports cannot filter by type, location, capacity, or volunteer roles, so they export and slice in Excel. Filters in CORE are how a coordinator runs the week."
    },
    {
      "key": "RESRV-456",
      "q": "2027 Q4",
      "project": "RESRV",
      "title": "Cancel or postpone a published event; keep students if postponed",
      "epicTitle": "Event Cancelation/Postponement Process (FF) (OH)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-172",
          "name": "5.1.9 Update Event After Publishing"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio publishes an event and then weather or an instructor dies. They need to cancel or postpone without losing the students on a postpone. Today they delete and rebuild."
    },
    {
      "key": "RESRV-460",
      "q": "2027 Q4",
      "project": "RESRV",
      "title": "Create a weekly or monthly event series instead of each date by hand",
      "epicTitle": "Repeat Event Controls (FF) (OH)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-184",
          "name": "5.1.21 Reoccurring Events"
        }
      ],
      "ticketCount": 1,
      "why": "Weekly and monthly classes are typed date by date. A series is how education actually schedules. Ohio staff time, fewer missed weeks."
    },
    {
      "key": "RESRV-461",
      "q": "2027 Q4",
      "project": "RESRV",
      "title": "Unique-participant and historical attendance \u2014 not just today\u2019s open events",
      "epicTitle": "Event Analytics (NC) (OH)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-175",
          "name": "5.1.12 Events Dashboard"
        }
      ],
      "ticketCount": 1,
      "why": "Event reports show who is on today's roster, not unique people over the year. Ohio cannot answer 'how many residents did we teach.' History and unique participants are the metric they owe leadership."
    },
    {
      "key": "RESRV-463",
      "q": "2027 Q4",
      "project": "RESRV",
      "title": "Allow a customer to hold seats at two events on the same day",
      "epicTitle": "Multiple Events Same Day (NC) (OH)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-197",
          "name": "5.3.3 Validation of Registrations"
        }
      ],
      "ticketCount": 1,
      "why": "A customer cannot hold seats at two Ohio events on the same day, even when that is allowed. Families book a morning class and an evening hunt. Lift the false restriction."
    },
    {
      "key": "SYST-645",
      "q": "2027 Q4",
      "project": "SYST",
      "title": "Control Center and counter usability fixes from client feedback",
      "epicTitle": "Control Center & POS UI/UX Enhancements (FF) (MO, All States)",
      "sprint": "2027 and Beyond",
      "shirt": "L - 3 sprints",
      "clients": [
        "Missouri"
      ],
      "tickets": [
        {
          "key": "COMO-75",
          "name": "2.4.14\u00a0 - The system must be simple, efficient, and direct, with as few individual steps as possible.\u00a0\u00a0"
        },
        {
          "key": "COMO-594",
          "name": "CC User Search: Does the Role Drop Down need to be Multi-Select"
        },
        {
          "key": "COMO-89",
          "name": "2.4.28\u00a0- Attachments"
        },
        {
          "key": "COMO-821",
          "name": "Customer>Transactions Tab: Customer Specific Sales Tab is Required"
        },
        {
          "key": "COMO-770",
          "name": "CC>User>CC User Search: Lose ability to return to the search on account tab"
        },
        {
          "key": "COMO-685",
          "name": "Copy Address: Customers, Vendors, CCWP, etc."
        }
      ],
      "ticketCount": 14,
      "why": "Control Center and counter usability fixes that clients already logged (Arkansas, Cherokee, Louisiana, Minnesota, Mississippi, Missouri). This is a pack of 'this screen fights me' items. Brief the tickets; the epic is the capacity."
    },
    {
      "key": "SYST-1044",
      "q": "2027 Q4",
      "project": "SYST",
      "title": "Track opens on emails and app messages sent from CORE",
      "epicTitle": "Notification Engagement Tracking and Analytics (NN) (OH)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-296",
          "name": "7.6.5 Notification Analytics"
        },
        {
          "key": "CROH-299",
          "name": "7.6.8 Viewing Analytics"
        }
      ],
      "ticketCount": 2,
      "why": "Missouri and Ohio send email and app messages and cannot tell if anyone opened them. Open tracking is how you know a recall or a deadline notice landed. Not marketing spam\u2014operational notices."
    },
    {
      "key": "LICS-2763",
      "q": "2028 Q1",
      "project": "LICS",
      "title": "Collect and verify lottery partners before the permit is issued",
      "epicTitle": "FLOW-779 -Lottery Partner Registration and Permit Release (NC) (OH)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-141",
          "name": "4.2.7 Partner Registration"
        },
        {
          "key": "CROH-142",
          "name": "4.2.8 Finalizing Partner and Permit Acceptance"
        }
      ],
      "ticketCount": 2,
      "why": "Ohio lottery partners are named after the permit is already issued, which is too late to verify. Collect and verify partners before issue. The regulation assumes the names are real."
    },
    {
      "key": "LICS-2767",
      "q": "2028 Q1",
      "project": "LICS",
      "title": "Stop a lottery application if the hunter does not meet the rules",
      "epicTitle": "FLOW-793 -Lottery Application Eligibility Enforcement (NC) (OH)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-139",
          "name": "4.2.5 Minimum Requirements to Apply"
        }
      ],
      "ticketCount": 1,
      "why": "A hunter who does not meet lottery rules can still apply, then everyone sorts it out after the draw. Stop the application. Ohio staff time and fewer withdrawn winners."
    },
    {
      "key": "LICS-3772",
      "q": "2028 Q1",
      "project": "LICS",
      "title": "Run all lotteries of one type in one action (Ohio\u2019s ~140-in-a-day case)",
      "epicTitle": "FROM DTSD - Lottery_ Bulk Execution by Lottery Type ",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-125",
          "name": "4.1.1 Lottery Types"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio runs on the order of 140 lotteries of one type in a day and should not click each one. One action for that type is the operational reality of their calendar. This is scale, not a new lottery product."
    },
    {
      "key": "LICS-626",
      "q": "2028 Q1",
      "project": "LICS",
      "title": "Citation and arrest reports in CORE (confirm scope with Ohio first)",
      "epicTitle": "Citation and Arrest Reporting (NN) (OH)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-388",
          "name": "9.5.3 Reports"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio wants citation and arrest reports in CORE. Confirm scope with them before we build a records system they did not mean. The why is officer reporting; the risk is boiling the ocean."
    },
    {
      "key": "RESRV-420",
      "q": "2028 Q1",
      "project": "RESRV",
      "title": "Volunteer expenses and reimbursements, including personal vehicles",
      "epicTitle": "CV-391 - Phase 2 - Volunteer Expenses & Reimbursements (OR)",
      "sprint": "Features To Schedule (Roadmap)",
      "shirt": "L - 3 sprints",
      "clients": [
        "Oregon"
      ],
      "tickets": [
        {
          "key": "OV-444",
          "name": "EM.7.2 - Phase 2"
        },
        {
          "key": "OV-448",
          "name": "EM.7.6 - Phase 2"
        },
        {
          "key": "OV-449",
          "name": "EM.7.7 - Phase 2"
        },
        {
          "key": "OV-320",
          "name": "VM.1.10 - Phase 2"
        },
        {
          "key": "OV-445",
          "name": "EM.7.3 - Phase 2"
        },
        {
          "key": "OV-447",
          "name": "EM.7.5 - Phase 2"
        }
      ],
      "ticketCount": 17,
      "why": "Oregon volunteers drive personal vehicles and need expenses reimbursed. CORE has no place for that, so it lives in spreadsheets. Reimbursement is how they keep volunteers."
    },
    {
      "key": "RESRV-1602",
      "q": "2028 Q1",
      "project": "RESRV",
      "title": "Staff can see youth-privacy flags and confirm contact email",
      "epicTitle": "COPPA Visibility & Email Confirmation (OR)",
      "sprint": "",
      "shirt": "S - 1 sprint",
      "clients": [
        "All",
        "Oregon"
      ],
      "tickets": [
        {
          "key": "OV-1825",
          "name": "PLACEHOLDER - Allow CC User to View COPPA and Account Access Creation Records"
        },
        {
          "key": "OV-4308",
          "name": "Username Type Config - Expand Email Confirmation Required Configuration to Include Email Changes (CC)"
        }
      ],
      "ticketCount": 2,
      "why": "Oregon staff must see youth-privacy flags and confirm the contact email before they message a family. Getting that wrong is a policy incident. Shared flag plus Oregon confirmation."
    },
    {
      "key": "RESRV-1603",
      "q": "2028 Q1",
      "project": "RESRV",
      "title": "Print an event or class roster",
      "epicTitle": "INT Event Engagement Roster Print (OR)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Oregon"
      ],
      "tickets": [
        {
          "key": "OV-4669",
          "name": "Add Print Button to Attendee Roster - Generate Report (INT)"
        },
        {
          "key": "OV-4672",
          "name": "Add Print Button to Volunteer Roster - Generate Report (INT)"
        }
      ],
      "ticketCount": 2,
      "why": "Oregon instructors need a printed roster at the gate, not a phone in the sun. Print the event or class roster. Basic operations."
    },
    {
      "key": "RESRV-1604",
      "q": "2028 Q1",
      "project": "RESRV",
      "title": "Clearer event error pages and FAQs",
      "epicTitle": "UX Updates: Error Pages & FAQs (OR)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Oregon"
      ],
      "tickets": [
        {
          "key": "OV-3984",
          "name": "VEMS 404/Product Not Found Page (INT) - CORE/OR P1 SPECIFIC"
        },
        {
          "key": "OV-2702",
          "name": "OR SPECIFIC - Remove Modules Options from FAQs (CC)"
        }
      ],
      "ticketCount": 2,
      "why": "Oregon event errors dump people on a dead page with no FAQ. Clearer errors and FAQs are how a parent finishes registration without a call. Small and high-visibility."
    },
    {
      "key": "RESRV-1605",
      "q": "2028 Q1",
      "project": "RESRV",
      "title": "Oregon event and volunteer reports in Control Center",
      "epicTitle": "Oregon CC Report Updates (FF) (OR)",
      "sprint": "",
      "shirt": "XS - Less than 1 sprint",
      "clients": [
        "Oregon"
      ],
      "tickets": [
        {
          "key": "OV-5172",
          "name": "NEW Transaction Summary Report (CC)"
        },
        {
          "key": "OV-5202",
          "name": "NEW VSD Registration / Renewal Detail Report (CC)"
        }
      ],
      "ticketCount": 2,
      "why": "Oregon event and volunteer reports belong in Control Center, not a side extract. Coordinators already live there. If it is not in CC, they will not use CORE as the system of record."
    },
    {
      "key": "LICS-2663",
      "q": "2028 Q2",
      "project": "LICS",
      "title": "Sell by one map (hunt area) and report harvest on another (deer permit area)",
      "epicTitle": "Geo boundaries for sale and harvest (NN) (MN)",
      "sprint": "Future Work",
      "shirt": "L - 3 sprints",
      "clients": [
        "Minnesota",
        "Ohio"
      ],
      "tickets": [
        {
          "key": "MELS-99",
          "name": "6.1.5 - Harvest Registration Geography Different from Hunt Area Geography"
        },
        {
          "key": "MELS-108",
          "name": "6.4.3 - Map Features"
        },
        {
          "key": "MELS-107",
          "name": "6.4.2 - Input Location GIS"
        },
        {
          "key": "MELS-212",
          "name": "6.5.3 - Input Location GIS"
        },
        {
          "key": "MELS-920",
          "name": "Harvest Registration - Location Data Collection"
        },
        {
          "key": "MELS-102",
          "name": "6.2.2 - Input Location - GIS Functionality"
        }
      ],
      "ticketCount": 8,
      "why": "Agencies sell by hunt area and report harvest on a different deer-permit map. Minnesota, Mississippi, and Ohio all have that split. One map for both is how harvest gets filed in the wrong place."
    },
    {
      "key": "LICS-2766",
      "q": "2028 Q2",
      "project": "LICS",
      "title": "After the hunt, the permit holder confirms which named partners showed up",
      "epicTitle": "FLOW-786 -Lottery Partner Attendance Verification (NC) (OH)",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-156",
          "name": "4.5.4 Confirm Customer Partners in Survey"
        }
      ],
      "ticketCount": 1,
      "why": "After the Ohio hunt, the permit holder must confirm which named partners actually showed up. Today that is a phone call or nothing. The regulation cares who was in the field."
    },
    {
      "key": "LICS-3790",
      "q": "2028 Q3",
      "project": "LICS",
      "title": "Tie flags to the survey, limit officers to their county, use Ohio statuses",
      "epicTitle": "Enforcement Flags_Changes needed",
      "sprint": "",
      "shirt": "M - 2 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-1875",
          "name": "Enforcement Flags_Changes needed"
        },
        {
          "key": "CROH-371",
          "name": "9.2.2 Harvest Flag Types"
        }
      ],
      "ticketCount": 2,
      "why": "Ohio enforcement flags should follow the survey, officers should only see their county, and statuses should be Ohio's. A national blob of flags is how the wrong officer acts on the wrong person."
    },
    {
      "key": "LICS-624",
      "q": "2028 Q3",
      "project": "LICS",
      "title": "ESA harvest messages and CWD test results to the hunter",
      "epicTitle": "ESA Messaging and CWD Testing and Integration (NC) (OH)",
      "sprint": "",
      "shirt": "L - 3 sprints",
      "clients": [
        "Ohio"
      ],
      "tickets": [
        {
          "key": "CROH-87",
          "name": "2.1.17 Deer CWD Results"
        }
      ],
      "ticketCount": 1,
      "why": "Ohio hunters need ESA harvest messages and CWD test results in the channel they already use. If results live in a side mailbox, compliance and trust both drop. This is the close of the harvest loop."
    }
  ]
};
