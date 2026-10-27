# Local content: sources and method

Every fact in a city's `localIntro`, `neighborhoods` and `localFaq` must trace to a source that was read, not summarized from memory. This file lists the sources for **Milford** (written 2026-10-27) and the method to repeat for the other cities.

A city page becomes indexable as soon as it has `localIntro` or `neighborhoods` (see `cityHasLocalContent` in `src/data/cities.ts`). Do not add either until the facts are verified.

## Milford, MA

| Claim on the page | Source | Notes |
|---|---|---|
| About 30,000 residents; Worcester County | Town of Milford Comprehensive Plan 2024, Existing Conditions Brief (MAPC), PDF p. 9: 30,134 (ACS 2018-2022). Census 2020 count: 30,379 (Wikipedia) | Written as "about 30,000" |
| Close to three quarters of homes built before 1980; only 361 homes built 2010 to 2022 | Same plan, Housing section, PDF p. 44, citing ACS 2022 5-year table S2504 | |
| 10,472 housing units; 11.8% in two-unit buildings; 7.6% in 3 to 4 unit buildings | Same plan, PDF p. 44, Table 4 "Units by Building Type" (ACS 2022) | The 2020 Census count is 11,956 units; the two datasets differ, so the page uses only the ACS table |
| 70.5% owner-occupied, 29.5% renter-occupied households | Same plan, Demographics, PDF p. 9 | |
| Neighborhoods: Downtown, The Plains, Prospect Heights (and their descriptions) | Same plan, Land Use, "Neighborhoods", PDF p. 14 | Quoted from the plan, not invented |
| Route 16, 85, 109, 140 corridors | Same plan, PDF p. 12, Land Use; Wikipedia "Milford, Massachusetts" | |
| National Grid is the electric utility | Town of Milford "Community Electricity" page, https://www.milfordma.gov/node/184891 | Official town page. **Gas utility was not confirmed, so the page says nothing about it** |
| Gas permits: Building & Inspections, 66 Dilla St, only licensed plumbers may apply for plumbing or gas permits; (508) 634-2313 | https://www.milfordma.gov/173/Building-Inspections and https://www.milfordma.gov/176/Gas | The Gas page itself does not say when a permit is required |
| State rule exempting simple gas control replacement; permits issued to licensed individuals | 248 CMR 3.00 via mass.gov (gas fitting permit guidance) | The FAQ says a new furnace or boiler "normally" needs a permit. That is an inference from the control-replacement exemption, not a quoted rule. **Confirm with Building & Inspections** |
| Whole-home heat pump rebate: $2,650 per ton up to $8,500; one per account; weatherization conditions; equipment installed in 2026; applications due 2027-02-28; eligible Mass Save heat pump installer | 2026 Residential Air Source Heat Pump Rebate Form (National Grid / Mass Save), https://www.nationalgridus.com/media/pdfs/ma/commercial-trade-partners/masg-0078_rr-hvac_air-source-heat-pump.pdf | **Expires.** Re-check every January |
| Rental heat minimums: 68 F (7 a.m. to 11 p.m.), 64 F overnight; heating season roughly mid-September to mid-June; landlord pays for heat unless the lease says otherwise | 105 CMR 410.201 via mass.gov "Guidance on Heating Season and Min Temps" and the Attorney General's landlord/tenant guide | Mass.gov and the AG guide differ by a day on the season dates, so the page says "roughly". General information, not legal advice |

### Deliberately left out
- **The "Recent Milford Project" block** (`featuredProjectSlug: "boiler-replacement-milford"`). The project text claims a 2-hour response, a 48-hour job, ~20% lower gas bills and competitors quoting 5 to 7 days. None of that could be verified, and its photo shows a condenser, not a boiler. Re-enable only after the owner confirms.
- **Statements about the company** beyond what the site already says (licensed and insured, permits pulled, assessment before quoting). In particular the page does **not** claim that Mass HVAC is a Mass Save heat pump installer. If it is, say so; it is a strong local signal.
- **Gas utility, median year built, heating fuel mix.** Not found in a primary source.

### Open questions for the owner
1. Does Mass HVAC offer service in Portuguese? The 2024 plan notes that downtown has many shops serving Milford's Brazilian community, and several reviews are translated from Portuguese.
2. Is Mass HVAC on the Mass Save heat pump installer list?
3. Is the Milford boiler project real? (see above)

## Method for the next city

1. Official plan or town site first (MAPC comprehensive plans exist for many MetroWest towns), then Census/ACS, then the town's inspection and permit pages, then the utility's own page.
2. Download the PDF and extract the text; do not rely on a search-engine summary of it.
3. Take neighborhood names from the plan or the town, never from a listing site.
4. For each claim, keep the source URL and the page number in this file.
5. Write at least 400 words that exist on no other city page. After building, measure how many 8-word runs are unique to the page against 5 other cities; Milford went from about 24% to 51% (heating) and 57% (heat pumps).
6. Add the city to `utilities` only if the utility is confirmed by an official page.
