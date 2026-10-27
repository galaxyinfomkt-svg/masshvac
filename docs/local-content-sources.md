# Local content: sources and method

Every fact in a city's local content must trace to a source that was read, not summarized from memory. The pipeline that produces and checks the content is in `scripts/local-content/` (see its README). This file lists the sources behind the numbers and the decisions made.

A city page becomes indexable as soon as it has an entry in `src/data/local/index.ts` (see `cityHasLocalContent` in `src/data/cities.ts`). Add a city only after its content passed `validate.py` and `measure.py`.

## Where the numbers come from (all cities)

| Figure | Source |
|---|---|
| Population, housing units, occupied/vacant, owner vs renter households | U.S. Census Bureau, American Community Survey (ACS) 2022 5-year estimates, tables B01003, B25001, B25002, B25003, read from `data.census.gov` for each town's official GEOID (Census TIGERweb) |
| Heating fuel mix | ACS B25040 (house heating fuel) |
| Age of homes, median year built | ACS B25034, B25035 |
| Type of home (detached, attached, 2 units, 3-4, 5+) | ACS B25024 |
| Median home value | ACS B25077 |
| Rank among the towns and the "median town" | Computed by `scripts/local-content/factsheet.py` from the same tables, across the 50 towns served |
| History and geography | Wikipedia plain text of each town (only history and geography, never its old census figures) |
| Electric utility | National Grid: the town appears in National Grid's own Massachusetts Electric Company territory list (https://www.nationalgridus.com/media/pronet/supplier_svc_territory.pdf). Municipal utilities and Unitil: from the research already in `src/data/cities.ts`. Any other town: the utility is NOT named |
| Mass Save 2026 heat pump rebate ($2,650 per ton up to $8,500; partial home $1,125 per ton; weatherization conditions; installed in 2026; applications due 2027-02-28) | 2026 Residential Air Source Heat Pump Rebate Form (National Grid / Mass Save), https://www.nationalgridus.com/media/pdfs/ma/commercial-trade-partners/masg-0078_rr-hvac_air-source-heat-pump.pdf. **Expires: re-check every January** |
| Rental heat minimums (68 F / 64 F), landlord pays for heat unless the lease says otherwise | 105 CMR 410.201 via mass.gov "Guidance on Heating Season and Min Temps" and the Attorney General's landlord/tenant guide. Season dates differ by a day between the two, so the pages say "roughly mid-September to mid-June" |

## Milford (done by hand, extra official sources)

- Neighborhoods (Downtown, The Plains, Prospect Heights), the rental-housing note and the Brazilian-community remark: Town of Milford Comprehensive Plan 2024, Existing Conditions Brief (MAPC), PDF p. 14 and p. 45.
- National Grid as the electric utility: Town of Milford "Community Electricity" page, https://www.milfordma.gov/node/184891.
- Permits: Town of Milford Building & Inspections, 66 Dilla St, (508) 634-2313; only licensed plumbers may apply for plumbing or gas permits (https://www.milfordma.gov/173/Building-Inspections). The statement that a new gas furnace or boiler "normally" needs a permit is an inference from the control-replacement exemption in 248 CMR 3.00; confirm with the town.
- The "Steam Boiler Replacement" project in a Milford duplex was confirmed real by the owner on 2026-10-27. Its photo on the site is still an outdoor condenser: replace it.
- **Correction:** an earlier version of the Milford page used the Comprehensive Plan's own housing figures (10,472 units, "close to three quarters" before 1980). The ACS 2022 tables give 11,950 units and 68.9%, and they are the same source used for every other town, so the page now uses them.

## Deliberately left out

- Statements about the company beyond what the site already says (licensed and insured, 24/7 emergency calls, free written estimates, assessment of the heating load before a quote). In particular no claim that Mass HVAC is a Mass Save heat pump installer, no years in business, no counts of jobs or technicians.
- Gas utility, climate normals, prices and savings: not found in a primary source, or too easy to get wrong.
- The service language: **English only** (confirmed by the owner).
