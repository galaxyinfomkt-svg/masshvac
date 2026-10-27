# Brief: unique local content for Mass HVAC city pages

You write the local content for a few MetroWest, Massachusetts towns for **Mass HVAC Inc**, an HVAC contractor based in Milford, MA. Each town gets one city page and five service pages. The goal is pages that say something true and useful about THAT town, so that at least **70% of every page's text exists on no other page of the site**.

You work only from the fact sheet(s) you are given (`sheets/<slug>.md`). You do NOT browse the web.

## Non-negotiable rules

1. **Every number, name and place must come from the fact sheet** or from the GLOBAL FACTS below. Do not compute new percentages or sums (everything you may use is already in the sheet). Do not write street names, businesses, schools, parks or landmarks unless they appear in the sheet's Wikipedia text. If a fact is not in the sheet, leave it out.
2. **Do not invent anything about Mass HVAC.** Allowed claims only: based in Milford, MA; licensed and insured; 24/7 emergency calls; free written estimates before work starts; services = heating, air conditioning, heat pumps and ductless mini-splits, maintenance and tune-ups, indoor air quality, for homes and businesses; phone (508) 786-8755; assessment of the home's heating load before quoting a system. NOT allowed: years in business, number of jobs/technicians/customers, awards, certifications, "family-owned", brand partnerships, prices, savings or efficiency percentages, warranties, response times, "Mass Save installer/contractor" status.
3. **English only.**
4. **No em dashes** (the long dash). Use a comma, colon, period or parentheses. No hype words: delve, leverage, robust, seamless, comprehensive, nestled, bustling, vibrant, tapestry, state-of-the-art, top-notch, cutting-edge, "look no further", "rest assured", "whether you're", "in today's".
5. Hedge anything that is general knowledge ("often", "can", "usually"). Statistics are stated plainly with "(ACS 2022)" or "according to the Census Bureau's 2022 American Community Survey" the first time they appear on a page.
6. **Uniqueness.** Write each town differently. Do not reuse sentence frames across towns or across a town's own pages. State each statistic in full on ONE page of the town; other pages may refer to it loosely ("the town's heavy reliance on oil") but must not repeat the same sentence. Banned stock openings: "X is a town in", "Homes in X", "If you live in", "When it comes to", "Whether you".
7. Plain, concrete, short sentences. A knowledgeable local neighbor talking, not a brochure.

## GLOBAL FACTS (usable in any town, nothing else about programs or law)

- Mass Save 2026 whole-home air source heat pump rebate: $2,650 per ton, up to $8,500 per home; one whole-home rebate per customer account; equipment installed between January 1 and December 31, 2026; application due February 28, 2027; the home must be sufficiently weatherized first (built in 2000 or later, OR a Home Energy Assessment recommends less than $1,000 of weatherization work, OR recommendations made in 2013 or later were completed); installer must be an eligible Mass Save heat pump installer; income-qualified households can get more; terms can change, confirm at masssave.com. Partial-home rebates also exist: $1,125 per ton, up to $8,500, plus a $500 weatherization bonus and a $500 sizing bonus.
- In towns served by a **municipal** electric utility, Mass Save heat pump rebates generally apply only if the home heats with natural gas from a Mass Save sponsor; otherwise the municipal utility's own heat pump program applies.
- Massachusetts State Sanitary Code (105 CMR 410.201): during the heating season (roughly mid-September to mid-June) a rental unit must be kept at least 68 F from 7 a.m. to 11 p.m. and at least 64 F overnight; unless the lease says otherwise the landlord pays for heat. General information, not legal advice.
- Only licensed plumbers/gas fitters may pull gas permits in Massachusetts; installing a new gas furnace or boiler normally needs a permit and a final inspection; check with the town's building department. (Do not name a town office or phone number unless it is in the sheet.)
- Fuel facts that are common knowledge may be stated in general terms: oil systems need an annual cleaning/tune-up; heat pumps both heat and cool; correctly sized equipment matters; older homes tend to leak more air; boilers and furnaces in rentals fail in cold snaps.

## Output

Write one JSON file per town to `content/<slug>.json`, exactly this shape (strings only; arrays of paragraphs; a table must be ONE array element with rows joined by "\n"):

```json
{
  "slug": "milford",
  "acsYear": 2022,
  "quickAnswer": "30 to 60 words, one or two sentences, the most useful single fact about HVAC in this town.",
  "body": ["## First heading", "paragraph", "paragraph", "## Second heading", "- bullet", "...", "| Measure | Figure |\n| --- | --- |\n| Row | Value |"],
  "faq": [ {"q": "...", "a": "..."} ],
  "services": {
    "heating-installation-repair":         {"quickAnswer": "", "body": ["..."], "faq": [ {"q":"","a":""} ]},
    "air-conditioning-installation-repair": {"quickAnswer": "", "body": ["..."], "faq": [] },
    "heat-pumps-ductless-mini-splits":      {"quickAnswer": "", "body": ["..."], "faq": [] },
    "hvac-maintenance-tune-ups":            {"quickAnswer": "", "body": ["..."], "faq": [] },
    "indoor-air-quality":                   {"quickAnswer": "", "body": ["..."], "faq": [] }
  },
  "sources": [ {"label": "...", "url": "..."} ]
}
```

### City page (`body`): 600 to 800 words
- Pick the **2 or 3 most distinctive facts** from the sheet's rank section (rank 1 to 5, or the last 5) and build the town's story around them. A town with lots of fuel oil, one with many renters, one with very new homes, one with high home values: each reads differently.
- Use `##` headings that are specific to the town (not "Heating in X" for every town). 3 to 5 headings.
- Include: how homes are heated and what that means for a replacement decision; the age and type of the housing and what that means for sizing, insulation, ducts; the electric utility and which rebates apply (use only what the sheet says about the utility); at least one concrete fact from the Wikipedia text (history or geography) that bears on buildings, with the facts stated exactly as the sheet states them.
- End with a small "at a glance" table (one array element) with 5 to 7 rows using sheet numbers.
- 4 city FAQs, answers 45 to 85 words, answer first, specific to the town's numbers.

### Service pages (`services.<slug>.body`): 280 to 380 words each + 2 or 3 FAQs
Each page uses a DIFFERENT subset of the town's facts, the ones that matter for that service:
- heating-installation-repair: heating fuel mix, age of homes, winter, permits for gas equipment, rentals/heat rules if renters are a big share.
- air-conditioning-installation-repair: type of homes (condos/multi-unit vs detached), age/median year, electricity, summer, the idea that many older homes were built without central air (say "many older homes" in general terms only), ductless as an option.
- heat-pumps-ductless-mini-splits: utility (municipal or National Grid or unknown) and what that means for rebates, weatherization condition vs the town's housing age, fuel mix (oil/LP homes), the 2026 rebate facts.
- hvac-maintenance-tune-ups: age of homes and fuel mix (oil needs annual cleaning), rentals vs owners, seasons.
- indoor-air-quality: housing age bands (older and newer tight homes), type of homes, general IAQ topics (filters, humidity, ventilation, duct cleaning) with hedged general statements only.
`quickAnswer` 25 to 50 words. Use `##` headings sparingly (1 or 2). Add one markdown link to a sibling page where natural, using exactly `/cities/<slug>` or `/cities/<slug>/<service-slug>`.

### sources
At least: the Census ACS tables used (label "U.S. Census Bureau, ACS 2022 5-year estimates, tables B25040, B25034, B25003, B25024, B25035, B25077", url `https://data.census.gov/`), the Wikipedia URL from the sheet, and (if the sheet says National Grid) "National Grid, Massachusetts Electric Company territory list" url `https://www.nationalgridus.com/media/pronet/supplier_svc_territory.pdf`.

## Before you finish
Run `python validate.py content/<slug>.json sheets/<slug>.md` for each town and fix every ERROR it prints (WARNINGS: check them, fix if they are real). Then re-read each page once for sentences that could appear unchanged on another town's page, and rewrite them.
