export type CityRegion = "metrowest" | "greater-boston" | "south-suburban" | "north-shore" | "central-ma";

export interface City {
  name: string;
  slug: string;
  region: CityRegion;
  county: string;
  description: string;
}

/* ------------------------------------------------------------------ */
/*  Region assignments                                                 */
/* ------------------------------------------------------------------ */
const cityData: { name: string; region: CityRegion; county: string }[] = [
  // MetroWest — suburban, many 1950s–1980s homes, oil heating common
  { name: "Marlborough", region: "metrowest", county: "Middlesex" },
  { name: "Hudson", region: "metrowest", county: "Middlesex" },
  { name: "Framingham", region: "metrowest", county: "Middlesex" },
  { name: "Westborough", region: "metrowest", county: "Worcester" },
  { name: "Northborough", region: "metrowest", county: "Worcester" },
  { name: "Southborough", region: "metrowest", county: "Worcester" },
  { name: "Shrewsbury", region: "metrowest", county: "Worcester" },
  { name: "Natick", region: "metrowest", county: "Middlesex" },
  { name: "Ashland", region: "metrowest", county: "Middlesex" },
  { name: "Sudbury", region: "metrowest", county: "Middlesex" },
  { name: "Hopkinton", region: "metrowest", county: "Middlesex" },
  { name: "Milford", region: "metrowest", county: "Worcester" },
  { name: "Wayland", region: "metrowest", county: "Middlesex" },
  { name: "Holliston", region: "metrowest", county: "Middlesex" },
  { name: "Grafton", region: "metrowest", county: "Worcester" },
  { name: "Clinton", region: "metrowest", county: "Worcester" },
  { name: "Maynard", region: "metrowest", county: "Middlesex" },
  { name: "Stow", region: "metrowest", county: "Middlesex" },
  { name: "Acton", region: "metrowest", county: "Middlesex" },
  { name: "Concord", region: "metrowest", county: "Middlesex" },
  { name: "Berlin", region: "metrowest", county: "Worcester" },
  { name: "Bolton", region: "metrowest", county: "Worcester" },
  { name: "Lincoln", region: "metrowest", county: "Middlesex" },
  { name: "Weston", region: "metrowest", county: "Middlesex" },
  { name: "Wellesley", region: "metrowest", county: "Norfolk" },
  { name: "Needham", region: "metrowest", county: "Norfolk" },
  { name: "Dover", region: "metrowest", county: "Norfolk" },
  { name: "Medfield", region: "metrowest", county: "Norfolk" },
  { name: "Millis", region: "metrowest", county: "Norfolk" },
  { name: "Sherborn", region: "metrowest", county: "Middlesex" },
  { name: "Boxborough", region: "metrowest", county: "Middlesex" },
  { name: "Boylston", region: "metrowest", county: "Worcester" },
  { name: "West Boylston", region: "metrowest", county: "Worcester" },
  { name: "Holden", region: "metrowest", county: "Worcester" },
  { name: "Sterling", region: "metrowest", county: "Worcester" },
  { name: "Lancaster", region: "metrowest", county: "Worcester" },
  { name: "Harvard", region: "metrowest", county: "Worcester" },
  { name: "Upton", region: "metrowest", county: "Worcester" },
  { name: "Mendon", region: "metrowest", county: "Worcester" },
  { name: "Hopedale", region: "metrowest", county: "Worcester" },
  { name: "Littleton", region: "metrowest", county: "Middlesex" },
  { name: "Westford", region: "metrowest", county: "Middlesex" },
  { name: "Carlisle", region: "metrowest", county: "Middlesex" },
  { name: "Chelmsford", region: "metrowest", county: "Middlesex" },
  { name: "Groton", region: "metrowest", county: "Middlesex" },
  { name: "Ayer", region: "metrowest", county: "Middlesex" },
  { name: "Shirley", region: "metrowest", county: "Middlesex" },
  { name: "Lunenburg", region: "metrowest", county: "Worcester" },
  { name: "Medway", region: "metrowest", county: "Norfolk" },
  { name: "Norfolk", region: "metrowest", county: "Norfolk" },

  // Greater Boston — dense urban/inner suburban, condos, Victorians, steam heat
  { name: "Lexington", region: "greater-boston", county: "Middlesex" },
  { name: "Bedford", region: "greater-boston", county: "Middlesex" },
  { name: "Burlington", region: "greater-boston", county: "Middlesex" },
  { name: "Waltham", region: "greater-boston", county: "Middlesex" },
  { name: "Newton", region: "greater-boston", county: "Middlesex" },
  { name: "Brookline", region: "greater-boston", county: "Norfolk" },
  { name: "Cambridge", region: "greater-boston", county: "Middlesex" },
  { name: "Somerville", region: "greater-boston", county: "Middlesex" },
  { name: "Medford", region: "greater-boston", county: "Middlesex" },
  { name: "Malden", region: "greater-boston", county: "Middlesex" },
  { name: "Melrose", region: "greater-boston", county: "Middlesex" },
  { name: "Wakefield", region: "greater-boston", county: "Middlesex" },
  { name: "Reading", region: "greater-boston", county: "Middlesex" },
  { name: "Stoneham", region: "greater-boston", county: "Middlesex" },
  { name: "Woburn", region: "greater-boston", county: "Middlesex" },
  { name: "Winchester", region: "greater-boston", county: "Middlesex" },
  { name: "Arlington", region: "greater-boston", county: "Middlesex" },
  { name: "Belmont", region: "greater-boston", county: "Middlesex" },
  { name: "Watertown", region: "greater-boston", county: "Middlesex" },

  // South Suburban — mix of old & new, coastal influence, ranches and split-levels
  { name: "Quincy", region: "south-suburban", county: "Norfolk" },
  { name: "Braintree", region: "south-suburban", county: "Norfolk" },
  { name: "Weymouth", region: "south-suburban", county: "Norfolk" },
  { name: "Milton", region: "south-suburban", county: "Norfolk" },
  { name: "Canton", region: "south-suburban", county: "Norfolk" },
  { name: "Randolph", region: "south-suburban", county: "Norfolk" },
  { name: "Stoughton", region: "south-suburban", county: "Norfolk" },
  { name: "Sharon", region: "south-suburban", county: "Norfolk" },
  { name: "Walpole", region: "south-suburban", county: "Norfolk" },
  { name: "Foxborough", region: "south-suburban", county: "Norfolk" },
  { name: "Dedham", region: "south-suburban", county: "Norfolk" },
  { name: "Norwood", region: "south-suburban", county: "Norfolk" },
  { name: "Franklin", region: "south-suburban", county: "Norfolk" },
  { name: "Bellingham", region: "south-suburban", county: "Norfolk" },
  { name: "Wrentham", region: "south-suburban", county: "Norfolk" },

  // North Shore — coastal, older maritime architecture, salt air
  { name: "Lynn", region: "north-shore", county: "Essex" },
  { name: "Saugus", region: "north-shore", county: "Essex" },
  { name: "Peabody", region: "north-shore", county: "Essex" },
  { name: "Salem", region: "north-shore", county: "Essex" },
  { name: "Beverly", region: "north-shore", county: "Essex" },
  { name: "Danvers", region: "north-shore", county: "Essex" },

  // Central MA — colder winters, longer heating season, rural, oil heat prevalent
  { name: "Worcester", region: "central-ma", county: "Worcester" },
  { name: "Auburn", region: "central-ma", county: "Worcester" },
  { name: "Millbury", region: "central-ma", county: "Worcester" },
  { name: "Sutton", region: "central-ma", county: "Worcester" },
  { name: "Oxford", region: "central-ma", county: "Worcester" },
  { name: "Webster", region: "central-ma", county: "Worcester" },
  { name: "Leicester", region: "central-ma", county: "Worcester" },
  { name: "Spencer", region: "central-ma", county: "Worcester" },
  { name: "Charlton", region: "central-ma", county: "Worcester" },
  { name: "Dudley", region: "central-ma", county: "Worcester" },
  { name: "Northbridge", region: "central-ma", county: "Worcester" },
  { name: "Uxbridge", region: "central-ma", county: "Worcester" },
  { name: "Douglas", region: "central-ma", county: "Worcester" },
  { name: "Blackstone", region: "central-ma", county: "Worcester" },
  { name: "Paxton", region: "central-ma", county: "Worcester" },
  { name: "Rutland", region: "central-ma", county: "Worcester" },
  { name: "Princeton", region: "central-ma", county: "Worcester" },
  { name: "Leominster", region: "central-ma", county: "Worcester" },
  { name: "Fitchburg", region: "central-ma", county: "Worcester" },
];

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const cities: City[] = cityData.map((c) => ({
  name: c.name,
  slug: slugify(c.name),
  region: c.region,
  county: c.county,
  description: `Professional HVAC services in ${c.name}, MA. Mass HVAC provides expert heating, cooling, and indoor air quality solutions for homes and businesses in ${c.name} and surrounding ${c.county} County communities.`,
}));

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Region-specific content data                                       */
/* ------------------------------------------------------------------ */
const regionProfiles: Record<CityRegion, {
  housingStyle: string;
  commonChallenges: string[];
  heatingFocus: string;
  coolingFocus: string;
  uniqueFact: string;
  climateNote: string;
}> = {
  metrowest: {
    housingStyle: "colonial-era and mid-century homes, many built between 1950 and 1985, with basements, attached garages, and original HVAC systems that are nearing or past their expected lifespan",
    commonChallenges: [
      "Aging furnaces and boilers over 20 years old that waste energy",
      "Oil-heated homes ready for gas or heat pump conversion",
      "Uneven temperatures between floors in multi-level colonials",
      "No central AC in homes built before the 1990s",
      "Converted attics and additions with no HVAC connection",
    ],
    heatingFocus: "Many MetroWest homes still rely on aging oil furnaces or steam boilers from the 1980s and 1990s. With natural gas now available on most streets, oil-to-gas conversions are one of our most requested services in this area. For homes without gas access, cold-climate heat pumps provide an excellent all-electric alternative that qualifies for generous Mass Save rebates.",
    coolingFocus: "A surprising number of MetroWest homes were built without central air conditioning. Rather than retrofitting ductwork through finished walls, many homeowners are choosing ductless mini-split systems that provide both heating and cooling from a single unit — with no major construction required.",
    uniqueFact: "The MetroWest corridor between Route 9 and the Mass Pike is one of the fastest-growing residential areas in Massachusetts, with a mix of historic New England architecture and newer developments",
    climateNote: "MetroWest experiences the full range of New England weather, with winter temperatures regularly dropping below 10°F and summer humidity pushing heat indices above 100°F",
  },
  "greater-boston": {
    housingStyle: "dense housing stock including Victorian-era multi-family homes, triple-deckers, condominiums, and brownstones — many with steam radiator heating systems, limited closet space for equipment, and shared walls that complicate installations",
    commonChallenges: [
      "Steam radiator systems that are inefficient and difficult to zone",
      "Multi-family buildings where HVAC upgrades require coordination between units",
      "Space constraints for outdoor condenser units in small yards",
      "Noise regulations that restrict outdoor equipment placement",
      "Historic building restrictions that limit exterior modifications",
    ],
    heatingFocus: "Greater Boston's older housing stock presents unique heating challenges. Steam boiler systems are common in pre-war homes and multi-family buildings, and while they can be maintained, many are well past their efficient service life. We specialize in upgrading these systems to modern high-efficiency boilers or, where feasible, converting to forced-air or mini-split heat pump systems that provide both heating and cooling.",
    coolingFocus: "Space is at a premium in Greater Boston. Ductless mini-splits are the preferred cooling solution because they require no ductwork, the indoor units are compact and wall-mounted, and the outdoor condensers can be bracket-mounted to save ground space. We also work within condo association guidelines to ensure installations comply with building rules.",
    uniqueFact: "Greater Boston's housing density means that HVAC noise and aesthetics matter as much as performance — outdoor units must be carefully positioned to respect property lines, neighbor proximity, and municipal noise ordinances",
    climateNote: "Greater Boston's urban heat island effect means summer temperatures are typically 3–5°F higher than surrounding suburban areas, increasing cooling demand and making air conditioning essential rather than optional",
  },
  "south-suburban": {
    housingStyle: "diverse housing from post-war ranches and split-levels to modern subdivisions, with most homes built between 1960 and 2010 — generally well-suited for standard HVAC systems with existing ductwork",
    commonChallenges: [
      "Aging central AC systems using phased-out R-22 refrigerant",
      "Split-level homes with uneven temperatures between levels",
      "Builder-grade equipment from 2000s developments ready for upgrade",
      "Finished basements that need dedicated heating and cooling",
      "Homes with original ductwork that has never been cleaned or replaced",
    ],
    heatingFocus: "South suburban communities have a healthy mix of heating systems. Newer subdivisions typically have gas furnaces, while older neighborhoods may still have oil-fired systems. The most common upgrade we perform in this area is replacing aging gas furnaces with modern two-stage or modulating units that dramatically improve comfort and efficiency — especially in split-level homes where single-stage systems create hot and cold zones.",
    coolingFocus: "Most homes in the south suburban area have central air conditioning, but many systems are reaching 15–20 years old and using obsolete R-22 refrigerant. With R-22 now phased out and expensive, replacing these aging systems with modern high-SEER units is the most cost-effective path forward. We handle complete system replacements including the indoor coil, outdoor condenser, and refrigerant line set.",
    uniqueFact: "The South Shore and southern suburban corridor is characterized by steady residential growth, with many neighborhoods featuring homes from distinct building eras — each with its own HVAC patterns and upgrade opportunities",
    climateNote: "Coastal influence from the South Shore moderates temperatures slightly compared to inland areas, but also brings higher humidity that makes air conditioning and dehumidification important for comfort and indoor air quality",
  },
  "north-shore": {
    housingStyle: "historic seaside architecture mixed with post-war suburban development — many homes feature older construction with limited insulation, salt air exposure that accelerates equipment corrosion, and waterfront properties with unique ventilation needs",
    commonChallenges: [
      "Salt air corrosion that shortens outdoor equipment lifespan",
      "Older Victorian and colonial homes with minimal insulation",
      "Coastal humidity causing indoor moisture and mold issues",
      "Historic district regulations limiting exterior equipment placement",
      "Waterfront properties requiring corrosion-resistant equipment",
    ],
    heatingFocus: "North Shore homes face the dual challenge of older construction and maritime exposure. Heating systems work harder here because many homes were built before modern insulation standards, and the coastal wind increases heat loss through walls and windows. We recommend high-efficiency systems paired with weatherization improvements when possible. For waterfront properties, we specify corrosion-resistant equipment coatings to protect against salt air damage.",
    coolingFocus: "Coastal humidity is the defining challenge for North Shore air conditioning. Standard cooling alone is often insufficient — homes near the water need dehumidification to prevent moisture problems, musty odors, and mold growth. We design systems that balance cooling capacity with dehumidification performance, and we install whole-home dehumidifiers when the AC system alone cannot maintain healthy humidity levels.",
    uniqueFact: "North Shore communities combine rich maritime heritage with modern suburban living — many homes in Salem, Beverly, and Danvers sit within historic districts where exterior modifications require careful planning and sometimes historical commission approval",
    climateNote: "North Shore temperatures are moderated by the Atlantic Ocean, but coastal humidity and persistent sea breezes create unique HVAC challenges that differ from inland communities — including accelerated corrosion and higher moisture loads",
  },
  "central-ma": {
    housingStyle: "a mix of New England farmhouses, colonials, and ranch-style homes spread across larger lots — many in rural or semi-rural settings with oil or propane heating, well water, and longer distances from utility infrastructure",
    commonChallenges: [
      "Heavy dependence on heating oil with volatile, rising prices",
      "Longer and colder heating season compared to eastern MA",
      "Homes without natural gas access requiring alternative fuel solutions",
      "Large, older homes with inadequate insulation and drafty windows",
      "Rural properties with longer HVAC service response times",
    ],
    heatingFocus: "Central Massachusetts experiences some of the coldest temperatures in the state, with winter lows frequently reaching -5°F to -15°F. Heating demand is roughly 15–20% higher than in Greater Boston. Many homes in this region still rely on heating oil, and the transition to cold-climate heat pumps has been accelerating rapidly thanks to Mass Save incentives. For homes that want to stay with fossil fuel, we specialize in oil-to-gas conversions where natural gas is available, and high-efficiency propane systems where it is not.",
    coolingFocus: "While Central MA summers are shorter than the coast, they can be intense — with temperatures regularly exceeding 90°F and high humidity from inland weather patterns. Many older homes in the region were never equipped with central air conditioning. Ductless mini-splits are particularly popular here because they provide both heating and cooling, reducing the number of systems a homeowner needs to maintain.",
    uniqueFact: "Central Massachusetts is the heart of the state's agricultural and historic heritage, with many properties featuring century-old farmhouses and barns that present fascinating HVAC retrofit challenges requiring creative solutions",
    climateNote: "Central MA's inland climate is more extreme than coastal regions — colder in winter by 5–10°F, hotter in summer, and with greater temperature swings between day and night that stress HVAC equipment more heavily",
  },
};

/* ------------------------------------------------------------------ */
/*  Deterministic template selector                                    */
/* ------------------------------------------------------------------ */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

/* ------------------------------------------------------------------ */
/*  City page content — 4 templates × 5 regions = 20 variations       */
/* ------------------------------------------------------------------ */
export function getCityContent(cityName: string): string {
  const city = cities.find((c) => c.name === cityName);
  if (!city) return "";
  const profile = regionProfiles[city.region];
  const template = hashString(city.slug) % 4;

  // Challenge list varies by template
  const challengeSubsets = [
    profile.commonChallenges.slice(0, 4),
    profile.commonChallenges.slice(1, 5),
    [profile.commonChallenges[0], profile.commonChallenges[2], profile.commonChallenges[3], profile.commonChallenges[4]],
    [profile.commonChallenges[1], profile.commonChallenges[0], profile.commonChallenges[4], profile.commonChallenges[3]],
  ];
  const challenges = challengeSubsets[template];

  if (template === 0) {
    return `## Your Trusted HVAC Partner in ${cityName}, Massachusetts

${cityName} is part of ${city.county} County, an area known for ${profile.housingStyle}. ${profile.climateNote}. That makes a reliable, properly sized HVAC system essential — not a luxury.

Mass HVAC has been serving ${cityName} homeowners and businesses with professional heating, cooling, and indoor air quality solutions. We understand the specific challenges that ${city.county} County properties face, and we tailor every recommendation to the home, the climate, and the homeowner's budget.

### Common HVAC Challenges in ${cityName}

${challenges.map((c) => `- ${c}`).join("\n")}

### Heating Services in ${cityName}, MA

${profile.heatingFocus}

Whether you need a routine furnace tune-up, an emergency repair on a cold January night, or a complete heating system replacement, Mass HVAC is the call to make in ${cityName}. We carry parts for all major brands and back every job with our satisfaction guarantee.

### Air Conditioning & Cooling in ${cityName}

${profile.coolingFocus}

### Why ${cityName} Homeowners Choose Mass HVAC

We are not a national franchise — we are a local Massachusetts company that serves ${cityName} and surrounding ${city.county} County communities directly. Our technicians live and work in this area. We answer our own phones, we show up on time, and we treat every home like our own.

**${profile.uniqueFact}.**

**Call (508) 740-4113 today for a free HVAC estimate in ${cityName}, MA.**`;
  }

  if (template === 1) {
    return `## Professional HVAC Services for ${cityName} Homes & Businesses

If you own a home or business in ${cityName}, Massachusetts, you know that a working HVAC system is not optional — it is a year-round necessity. ${profile.climateNote}. For properties in ${city.county} County, that means your heating and cooling equipment works harder than almost anywhere else in the country.

Mass HVAC is the trusted HVAC contractor for ${cityName} residents. We provide complete heating, cooling, maintenance, and indoor air quality services — all performed by licensed, insured technicians who know ${city.county} County properties inside and out.

### What Makes HVAC in ${cityName} Different

${cityName} sits in ${city.county} County, an area characterized by ${profile.housingStyle}. This housing mix creates specific HVAC needs:

${challenges.map((c) => `- ${c}`).join("\n")}

### Heating Solutions for ${cityName} Residents

${profile.heatingFocus}

### Keeping ${cityName} Cool in Summer

${profile.coolingFocus}

### Local Expertise That Matters

${profile.uniqueFact}. Mass HVAC understands these nuances because we are local. We do not just service ${cityName} — we are invested in this community. Every recommendation we make is based on what your specific home needs, not on a one-size-fits-all approach.

**Ready for reliable HVAC service in ${cityName}? Call Mass HVAC at (508) 740-4113 for a free estimate.**`;
  }

  if (template === 2) {
    return `## Expert Heating & Cooling in ${cityName}, MA

${cityName}, located in ${city.county} County, Massachusetts, presents unique comfort challenges for homeowners. ${profile.climateNote}. The area's housing stock — ${profile.housingStyle} — means that every HVAC project requires careful evaluation and custom solutions.

Mass HVAC brings professional-grade heating, cooling, and air quality services to ${cityName} and all of ${city.county} County. Whether you are dealing with an aging furnace, an uncomfortable home, or you simply want to reduce your energy bills, we have the expertise to help.

### The ${cityName} HVAC Landscape

Homes in ${cityName} commonly face these HVAC challenges:

${challenges.map((c) => `- ${c}`).join("\n")}

These are not just theoretical concerns — they are the real-world problems we solve for ${cityName} homeowners every week.

### How We Approach Heating in ${cityName}

${profile.heatingFocus}

Our approach always starts with a proper assessment. We do not quote a system without first understanding your home's heating load, insulation levels, and existing infrastructure. This ensures the system we recommend is correctly sized — not oversized (which wastes money) or undersized (which cannot keep up).

### Air Conditioning for ${city.county} County Homes

${profile.coolingFocus}

### About ${cityName} and the Surrounding Area

${profile.uniqueFact}. This is the kind of local knowledge that matters when making HVAC decisions — and it is knowledge that a national chain simply does not have.

**Contact Mass HVAC today at (508) 740-4113 for professional HVAC service in ${cityName}.**`;
  }

  // template === 3
  return `## ${cityName}, MA — Complete HVAC Services by Mass HVAC

When it comes to heating, cooling, and indoor air quality in ${cityName}, Massachusetts, homeowners deserve a contractor who understands the local landscape. ${profile.uniqueFact}.

${profile.climateNote}. For ${cityName} homes in ${city.county} County — many featuring ${profile.housingStyle} — this means HVAC systems face demanding conditions that require professional installation, regular maintenance, and prompt repair service.

### Top HVAC Concerns for ${cityName} Homeowners

Based on our experience serving ${cityName} and surrounding ${city.county} County communities, these are the issues we address most frequently:

${challenges.map((c) => `- ${c}`).join("\n")}

### Heating That Keeps Up With ${cityName} Winters

${profile.heatingFocus}

Every heating installation we perform includes a Manual J load calculation, proper equipment sizing, and a thorough commissioning process. This is not a shortcut industry — doing it right the first time saves our ${cityName} customers thousands in energy costs and future repairs.

### Cooling & Humidity Control for ${cityName} Summers

${profile.coolingFocus}

### The Mass HVAC Difference in ${cityName}

We serve ${cityName} directly from our base in Milford, MA — just a short drive away. That means faster response times, local parts availability, and technicians who understand the building codes and housing patterns specific to ${city.county} County.

- **24/7 emergency service** — we do not close when the weather gets bad
- **Free estimates** — transparent pricing with no hidden fees
- **Licensed & insured** — fully compliant with Massachusetts regulations
- **All major brands serviced** — Carrier, Lennox, Trane, Mitsubishi, Daikin, Fujitsu, and more

**Call Mass HVAC at (508) 740-4113 for expert HVAC service in ${cityName}, MA.**`;
}

/* ------------------------------------------------------------------ */
/*  City + Service content — varies by region                          */
/* ------------------------------------------------------------------ */
export function getCityServiceContent(
  cityName: string,
  serviceName: string,
  serviceSlug: string
): string {
  const city = cities.find((c) => c.name === cityName);
  if (!city) return "";
  const profile = regionProfiles[city.region];
  const template = hashString(city.slug + serviceSlug) % 3;

  const serviceSpecific: Record<string, () => string> = {
    "heating-installation-repair": () => {
      if (template === 0) return `${profile.heatingFocus}

In ${cityName}, we handle all aspects of residential and commercial heating:

- **Emergency furnace & boiler repair** — 24/7, including nights and holidays
- **High-efficiency furnace installation** — 95%+ AFUE models from Carrier, Lennox, and Trane
- **Boiler repair and replacement** — steam and hot water systems
- **Heating system tune-ups** — our 21-point inspection catches problems before they become emergencies
- **Oil-to-gas conversions** — popular in ${city.county} County where gas lines are available
- **Heat pump heating** — cold-climate models that work down to -13°F

Every heating installation in ${cityName} includes a Manual J load calculation to ensure your system is properly sized for your home's specific characteristics — square footage, insulation levels, window area, and more.`;
      if (template === 1) return `${cityName} homeowners know that a reliable heating system is non-negotiable during Massachusetts winters. ${profile.climateNote}. When your furnace or boiler fails, you need a contractor who responds fast, diagnoses accurately, and fixes it right the first time.

Mass HVAC provides comprehensive heating services in ${cityName} and throughout ${city.county} County:

- **Emergency repair** — our technicians carry common parts on every truck for same-visit repairs
- **System replacement** — we properly size every installation using industry-standard calculations
- **Fuel conversions** — oil to gas, oil to heat pump, or propane upgrades
- **Preventive maintenance** — catch cracked heat exchangers, worn ignitors, and other issues before they leave you without heat
- **Zone control** — solve the "hot downstairs, cold upstairs" problem with dampers and multiple thermostats

${profile.heatingFocus}`;
      return `When it comes to heating installation and repair in ${cityName}, MA, the difference between a good job and a bad one comes down to proper sizing, quality equipment, and experienced installation. Mass HVAC delivers all three.

${profile.heatingFocus}

**Heating services available in ${cityName}:**
- Furnace installation, repair, and replacement (gas, oil, and propane)
- Boiler service for steam and hot water systems
- Cold-climate heat pump installations
- Heating system tune-ups and safety inspections
- Thermostat upgrades and smart home integration
- Emergency no-heat repair — 24/7/365

Homes in ${city.county} County feature ${profile.housingStyle}. Our technicians understand these homes and know which heating solutions work best for each type of construction.`;
    },

    "air-conditioning-installation-repair": () => {
      if (template === 0) return `${profile.coolingFocus}

For ${cityName} homeowners, our AC services include:

- **Central AC installation** — new systems for homes with or without existing ductwork
- **AC system replacement** — upgrade from R-22 to modern R-410A refrigerant systems
- **Emergency AC repair** — same-day service when possible, especially during heat waves
- **Seasonal tune-ups** — our cooling inspection keeps your system running efficiently all summer
- **Smart thermostat installation** — optimize cooling schedules for maximum efficiency
- **Ductless mini-split cooling** — ideal for rooms that central AC cannot reach

We carry a full line of high-efficiency air conditioning systems from brands including Carrier, Lennox, Trane, and Daikin. Every AC installation in ${cityName} is sized using Manual J calculations to match your home's exact cooling load.`;
      if (template === 1) return `${cityName} summers bring the kind of heat and humidity that makes air conditioning essential for comfort and health. ${profile.climateNote}. A properly sized, well-maintained AC system is the difference between enduring summer and enjoying it.

Mass HVAC provides complete air conditioning services to ${cityName} and ${city.county} County:

- **New AC installation** — including first-time central air for homes that have never had it
- **System replacement** — particularly for R-22 units that are now obsolete and expensive to service
- **Repair for all brands** — Carrier, Lennox, Trane, Rheem, Goodman, and more
- **Cooling tune-ups** — our pre-season inspection prevents breakdowns during peak heat
- **Humidity control** — whole-home dehumidifiers when AC alone is not enough

${profile.coolingFocus}`;
      return `Professional air conditioning service in ${cityName}, MA starts with understanding the home. ${city.county} County is characterized by ${profile.housingStyle}. Each home type has different cooling requirements, and a system that works perfectly in one may be completely wrong for another.

${profile.coolingFocus}

**AC services we provide in ${cityName}:**
- Central air conditioning installation and replacement
- Emergency AC repair — we prioritize vulnerable residents during heat waves
- Seasonal cooling system tune-ups
- Refrigerant leak diagnosis and repair
- Thermostat programming and smart home integration
- Indoor humidity control and dehumidification

We never install an air conditioning system without first performing a cooling load calculation. This ensures your ${cityName} home gets the right-sized unit — not too large (which short-cycles and fails to dehumidify) and not too small (which runs constantly and cannot keep up).`;
    },

    "heat-pumps-ductless-mini-splits": () => {
      if (template === 0) return `Ductless mini-split heat pumps are rapidly becoming the most popular HVAC upgrade in ${cityName} and across ${city.county} County. These systems provide both heating and cooling from a single unit, with individual room control and energy efficiency that far exceeds traditional HVAC systems.

**Why mini-splits are ideal for ${cityName} homes:**
- No ductwork required — perfect for older homes in ${cityName} without existing ducts
- Heats AND cools — year-round comfort from one system
- Individual zone control — set different temperatures in different rooms
- Up to 40% more efficient than traditional forced-air systems
- Qualifies for substantial Mass Save rebates (often $1,250–$10,000+)
- Cold-climate models work effectively down to -13°F

We are certified installers for Mitsubishi, Fujitsu, and Daikin — the three leading mini-split brands in New England. Our installations in ${cityName} include proper equipment sizing, professional mounting, and clean refrigerant line routing that preserves your home's appearance.

${profile.housingStyle.charAt(0).toUpperCase() + profile.housingStyle.slice(1)} make mini-splits especially relevant here — many of these homes have rooms or additions that existing ductwork simply cannot reach.`;
      if (template === 1) return `If you are a ${cityName} homeowner considering a ductless mini-split, you are not alone. Mini-split installations are the fastest-growing HVAC segment in Massachusetts, driven by exceptional efficiency, flexible installation, and generous state incentives.

Mass HVAC has installed hundreds of mini-split systems across ${city.county} County. We know which models perform best in each application, how to route line sets cleanly through ${cityName}'s various housing types, and how to maximize your Mass Save rebate eligibility.

**Common mini-split applications in ${cityName}:**
- Whole-home heating and cooling replacement (multi-zone systems)
- Supplemental comfort for problem rooms — sunrooms, attics, converted garages
- Additions and renovations where extending ductwork is impractical
- Home office climate control for year-round remote work comfort
- Oil or propane system replacement with all-electric heat pump technology

${profile.housingStyle.charAt(0).toUpperCase() + profile.housingStyle.slice(1)} present the perfect use case for ductless technology. The ability to add heating and cooling to any room without tearing into walls or ceilings makes mini-splits the go-to solution for ${cityName} homeowners who want modern comfort without major construction.`;
      return `Cold-climate heat pump technology has changed the HVAC game for ${cityName} homeowners. Modern inverter-driven mini-splits from Mitsubishi, Fujitsu, and Daikin maintain full heating capacity at temperatures well below zero — making them viable as a primary heating source even during the worst Massachusetts winters.

Mass HVAC specializes in mini-split design and installation for ${city.county} County homes. We handle everything from single-zone installations for a problem room to complete multi-zone systems that replace your entire heating and cooling infrastructure.

**Mini-split benefits for ${cityName} homes:**
- No ductwork needed — installs in virtually any room
- Precise room-by-room temperature control via wireless remotes or smartphone apps
- Exceptional energy efficiency — SEER ratings up to 33
- Ultra-quiet operation — indoor units produce as little as 19 dB
- Mass Save rebates of $1,250–$10,000+ depending on system size and configuration

${profile.coolingFocus}

Contact Mass HVAC to schedule a free mini-split consultation for your ${cityName} home.`;
    },

    "hvac-maintenance-tune-ups": () => {
      if (template === 0) return `Regular HVAC maintenance is the single most effective way for ${cityName} homeowners to prevent unexpected breakdowns, reduce energy bills, and extend equipment life. ${profile.climateNote}, putting heavy demands on heating and cooling equipment that make preventive care essential.

**Our ${cityName} maintenance plans include:**
- Bi-annual tune-ups — fall heating inspection + spring cooling inspection
- Comprehensive 21-point system evaluation
- Safety checks including carbon monoxide testing and heat exchanger inspection
- Filter replacement and evaporator/condenser coil cleaning
- Electrical connection tightening and component testing
- Refrigerant level check and adjustment
- Priority emergency service for plan members — you go to the front of the line
- 15% discount on all repair parts and labor for members

The most important benefit of our maintenance program is safety. During a routine tune-up in a nearby ${city.county} County home, our technician discovered a cracked heat exchanger that was leaking carbon monoxide — a potentially fatal condition that had no visible symptoms. Annual maintenance catches these issues before they become emergencies.`;
      if (template === 1) return `${cityName} homeowners who invest in annual HVAC maintenance save an average of 15–20% on their energy bills and experience 70% fewer emergency breakdowns compared to those who skip preventive care. Those are not estimates — they are industry statistics backed by decades of data.

Mass HVAC's maintenance program is designed specifically for ${city.county} County homes and the demands of Massachusetts weather:

- **Fall heating check** — tune up your furnace or boiler before the cold hits
- **Spring cooling check** — prepare your AC for summer before the first heat wave
- **21-point inspection** — every component checked, tested, and documented
- **Carbon monoxide safety testing** — critical for any gas or oil-burning appliance
- **Priority emergency service** — plan members never wait in line
- **15% parts and labor discount** — real savings on any repair needed

${profile.climateNote}. Equipment that runs harder wears faster. Our maintenance plans are designed to catch wear-and-tear items — worn ignitors, weak capacitors, dirty coils, and degraded refrigerant levels — before they cause a breakdown on the coldest night of the year or the hottest day of the summer.`;
      return `Preventive maintenance is the cornerstone of HVAC reliability in ${cityName}, MA. The climate in ${city.county} County puts extraordinary demands on heating and cooling equipment — ${profile.climateNote}.

Mass HVAC provides structured maintenance programs for residential and commercial HVAC systems across ${cityName}:

**What our maintenance visits cover:**
- Complete system performance evaluation
- Gas pressure and combustion analysis (heating systems)
- Refrigerant charge verification (cooling systems)
- Electrical component testing and connection tightening
- Filter replacement and airflow measurement
- Condensate drain clearing and treatment
- Safety device testing including CO detectors and limit switches
- Written report with findings, measurements, and recommendations

**Why maintenance matters in ${cityName}:**
Equipment that receives annual professional maintenance lasts 5–7 years longer than neglected systems, according to HVAC industry data. For a system that costs $5,000–$15,000 to replace, that is a significant return on a modest annual investment.

Call (508) 740-4113 to enroll in our ${cityName} area maintenance program.`;
    },

    "indoor-air-quality": () => {
      if (template === 0) return `Indoor air quality is an increasingly important concern for ${cityName} homeowners — especially given that the average person spends 90% of their time indoors, and indoor air can be 2–5 times more polluted than outdoor air according to the EPA.

${city.county} County homes face specific air quality challenges:

- **Tight construction** — energy-efficient homes seal in pollutants along with conditioned air
- **Seasonal allergens** — Massachusetts pollen counts are among the highest in the Northeast
- **Pet dander** — a major concern for the majority of ${cityName} households with pets
- **Basement moisture** — humidity and mold are common in homes with below-grade living space
- **Aging ductwork** — years of accumulated dust, debris, and potential mold growth

Mass HVAC provides comprehensive indoor air quality solutions for ${cityName} homes:

- **Duct cleaning** — professional HEPA-filtered equipment removes years of buildup
- **Air purification** — whole-home systems including bipolar ionization and UV germicidal lights
- **Humidity control** — humidifiers for dry winters, dehumidifiers for humid summers
- **Ventilation** — Energy Recovery Ventilators (ERV) that bring in fresh air without energy waste
- **Filtration upgrades** — MERV-13 to MERV-16 media air cleaners for superior particle capture`;
      if (template === 1) return `The air inside your ${cityName} home directly affects your family's health, comfort, and well-being. Homes in ${city.county} County — featuring ${profile.housingStyle} — face air quality challenges that range from seasonal allergens to hidden mold growth in aging ductwork.

Mass HVAC offers a full spectrum of indoor air quality services for ${cityName} residents:

**Air Duct Cleaning**
Professional truck-mounted HEPA cleaning removes years of accumulated dust, allergens, pet dander, and potential mold from your duct system. If you have never had your ducts cleaned — or if it has been more than 5 years — a professional cleaning can dramatically improve the air your family breathes.

**Whole-Home Air Purification**
We install bipolar ionization systems (iWave), UV germicidal lights, and high-efficiency media air cleaners that work silently within your existing HVAC system to neutralize bacteria, viruses, mold spores, and odors.

**Humidity Management**
Massachusetts homes face dry air in winter (causing static, cracked skin, and respiratory irritation) and excess humidity in summer (causing mold, musty odors, and discomfort). Whole-home humidifiers and dehumidifiers maintain optimal 40–50% humidity year-round.

**Ventilation Solutions**
Energy Recovery Ventilators (ERVs) bring fresh outdoor air into your ${cityName} home while recovering up to 80% of the energy from the outgoing stale air — the best of both worlds.`;
      return `Your ${cityName} home should be a healthy, comfortable environment — but without proper indoor air quality management, it often is not. ${profile.climateNote}, creating conditions where both winter dryness and summer humidity can affect your family's health and your home's condition.

Mass HVAC provides professional indoor air quality assessment and improvement services to ${cityName} and ${city.county} County homes:

- **Duct cleaning** — remove contaminants from your air distribution system
- **Air purifiers** — whole-home solutions that eliminate 99%+ of airborne pathogens
- **Humidity control** — prevent both dry air damage and moisture-related mold growth
- **HEPA filtration** — medical-grade air cleaning for sensitive residents
- **ERV ventilation** — fresh air exchange without energy penalty

Many of our ${cityName} indoor air quality projects start with a professional air quality assessment. We measure particulate levels, humidity, CO2 concentration, and other key indicators to identify exactly what your home needs — rather than guessing.

Contact Mass HVAC at (508) 740-4113 for an indoor air quality consultation in ${cityName}.`;
    },
  };

  const generator = serviceSpecific[serviceSlug];
  const body = generator ? generator() : `Mass HVAC provides expert ${serviceName.toLowerCase()} services to homes and businesses in ${cityName}, MA. Our licensed technicians deliver fast, reliable service backed by our satisfaction guarantee.`;

  const template2 = hashString(city.slug + serviceSlug) % 2;

  if (template2 === 0) {
    return `## ${serviceName} in ${cityName}, MA

Looking for professional ${serviceName.toLowerCase()} in ${cityName}, Massachusetts? Mass HVAC is the trusted local contractor for residential and commercial HVAC services in ${cityName} and throughout ${city.county} County.

${body}

### Why Choose Mass HVAC for ${serviceName} in ${cityName}?

- **Local ${city.county} County contractor** — we know ${cityName} homes and building codes
- **Fast response** — same-day and 24/7 emergency service available
- **Licensed & insured** — fully compliant with Massachusetts HVAC regulations
- **Transparent pricing** — free estimates with no hidden fees or upsells
- **Satisfaction guaranteed** — we stand behind every job we complete

**Ready for ${serviceName.toLowerCase()} in ${cityName}? Call Mass HVAC at (508) 740-4113.**`;
  }

  return `## ${serviceName} in ${cityName}, Massachusetts

${cityName} residents trust Mass HVAC for professional ${serviceName.toLowerCase()}. Serving ${city.county} County and the surrounding communities, we bring decades of combined experience to every heating, cooling, and air quality project.

${body}

### The Mass HVAC Advantage in ${cityName}

We are based in Milford, MA — close to ${cityName} and all of ${city.county} County. That proximity means:

- **Faster response times** for emergencies and scheduled service
- **Knowledge of local building codes** and permit requirements
- **Familiarity with ${cityName}'s housing stock** and common HVAC configurations
- **Established relationships with local suppliers** for fast parts availability
- **A reputation built on referrals** from satisfied ${cityName} homeowners

**Call (508) 740-4113 for a free ${serviceName.toLowerCase()} estimate in ${cityName}, MA.**`;
}
