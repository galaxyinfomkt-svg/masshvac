export interface City {
  name: string;
  slug: string;
  county?: string;
  description: string;
}

const cityNames = [
  "Marlborough", "Hudson", "Framingham", "Westborough", "Northborough",
  "Southborough", "Shrewsbury", "Natick", "Ashland", "Sudbury",
  "Hopkinton", "Milford", "Wayland", "Holliston", "Grafton",
  "Clinton", "Maynard", "Stow", "Acton", "Concord",
  "Berlin", "Bolton", "Lincoln", "Weston", "Wellesley",
  "Needham", "Dover", "Medfield", "Millis", "Sherborn",
  "Boxborough", "Boylston", "West Boylston", "Holden", "Sterling",
  "Lancaster", "Harvard", "Upton", "Mendon", "Hopedale",
  "Littleton", "Westford", "Carlisle", "Chelmsford", "Groton",
  "Ayer", "Shirley", "Lunenburg", "Leominster", "Fitchburg",
  "Princeton", "Paxton", "Rutland", "Leicester", "Spencer",
  "Charlton", "Dudley", "Northbridge", "Uxbridge", "Douglas",
  "Blackstone", "Medway", "Norfolk", "Wrentham", "Lexington",
  "Bedford", "Burlington", "Waltham", "Newton", "Brookline",
  "Dedham", "Norwood", "Franklin", "Bellingham", "Cambridge",
  "Somerville", "Medford", "Malden", "Melrose", "Wakefield",
  "Reading", "Stoneham", "Woburn", "Winchester", "Arlington",
  "Belmont", "Watertown", "Quincy", "Braintree", "Weymouth",
  "Milton", "Canton", "Randolph", "Stoughton", "Sharon",
  "Walpole", "Foxborough", "Lynn", "Saugus", "Peabody",
  "Salem", "Beverly", "Danvers", "Worcester", "Auburn",
  "Millbury", "Sutton", "Oxford", "Webster",
];

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const cities: City[] = cityNames.map((name) => ({
  name,
  slug: slugify(name),
  description: `Professional HVAC services in ${name}, MA. Mass HVAC provides expert heating, cooling, and indoor air quality solutions for homes and businesses in ${name} and surrounding communities.`,
}));

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCityContent(cityName: string): string {
  return `## Trusted HVAC Services in ${cityName}, Massachusetts

${cityName} residents deserve reliable heating and cooling — and that's exactly what Mass HVAC delivers. As a locally owned company serving the MetroWest and Greater Boston area, we understand the unique HVAC challenges that ${cityName} homeowners face.

### Why ${cityName} Homeowners Choose Mass HVAC

Massachusetts weather puts your HVAC system to the test. From sub-zero winter nights to sweltering summer humidity, homes in ${cityName} need heating and cooling systems that can handle it all. Many homes in ${cityName} were built decades ago, with older ductwork, outdated furnaces, or no central air conditioning — and that's where we come in.

**Common HVAC challenges in ${cityName}:**
- Older homes with outdated or failing heating systems
- High energy bills from inefficient furnaces or AC units
- Rooms that are too hot or too cold due to poor insulation or zoning
- Need for ductless mini-splits in additions or converted spaces
- Emergency breakdowns during extreme weather

### Our Services in ${cityName}, MA

Mass HVAC provides comprehensive HVAC services to ${cityName} residents, including:

- **Heating Installation & Repair** — Furnaces, boilers, and heat pumps
- **Air Conditioning** — Central AC installation, repair, and maintenance
- **Ductless Mini-Splits** — Perfect for ${cityName}'s older homes
- **HVAC Maintenance** — Seasonal tune-ups and preventative care
- **Indoor Air Quality** — Duct cleaning, purifiers, and humidifiers

### Fast, Reliable Service in ${cityName}

When your heat goes out on a frigid January night or your AC fails during a July heatwave, you need help fast. Mass HVAC offers 24/7 emergency service to ${cityName} and responds quickly because we're local. We know the area, we know the homes, and we know what it takes to keep ${cityName} families comfortable year-round.

**Call Mass HVAC today for a free estimate on any HVAC service in ${cityName}, MA.**`;
}

export function getCityServiceContent(
  cityName: string,
  serviceName: string,
  serviceSlug: string
): string {
  const serviceSpecific: Record<string, string> = {
    "heating-installation-repair": `When temperatures in ${cityName} drop below freezing — which happens regularly from November through March — a reliable heating system isn't optional, it's essential. Mass HVAC specializes in furnace installation, boiler repair, and complete heating system replacements for ${cityName} homeowners.

Many homes in ${cityName} still rely on aging furnaces or boilers that waste energy and struggle to keep up with New England's harsh winters. Our team can assess your current system and recommend the most cost-effective solution, whether that's a targeted repair or a high-efficiency upgrade that qualifies for Mass Save® rebates.

**Heating services we provide in ${cityName}:**
- Emergency furnace repair (24/7 — no heat calls are our priority)
- High-efficiency furnace installation
- Boiler repair and replacement
- Heating system tune-ups and safety inspections
- Thermostat installation and smart home integration`,

    "air-conditioning-installation-repair": `${cityName} summers bring heat and humidity that make a working air conditioner a must. Mass HVAC provides professional AC installation, repair, and maintenance to keep ${cityName} homes cool and comfortable from June through September.

Whether you're installing central air for the first time, replacing an aging unit, or need emergency AC repair on the hottest day of the year, our team responds fast and gets the job done right.

**AC services in ${cityName} include:**
- Central air conditioning installation and replacement
- AC repair for all makes and models
- Seasonal cooling tune-ups
- Refrigerant recharge and leak repair
- Smart thermostat programming for optimal efficiency`,

    "heat-pumps-ductless-mini-splits": `Ductless mini-split heat pumps are the ideal solution for ${cityName} homes — especially older properties without existing ductwork. These versatile systems provide both heating and cooling from a single unit, with zone control that lets you set different temperatures in different rooms.

Mass HVAC is a certified installer of Mitsubishi, Fujitsu, and Daikin mini-split systems. We've helped hundreds of ${cityName} area homeowners reduce their energy bills while improving comfort with ductless technology.

**Why ${cityName} homeowners love mini-splits:**
- No ductwork required — perfect for older ${cityName} homes
- Heats AND cools — year-round comfort from one system
- Individual room control — set each zone to your preference
- Up to 40% more efficient than traditional HVAC
- Eligible for substantial Mass Save® rebates`,

    "hvac-maintenance-tune-ups": `Regular HVAC maintenance is essential for ${cityName} homeowners who want to avoid costly breakdowns, reduce energy bills, and extend the life of their heating and cooling equipment. Mass HVAC's maintenance plans are designed specifically for Massachusetts homes and the demands our climate puts on HVAC systems.

**Our ${cityName} maintenance plans include:**
- Bi-annual tune-ups (fall heating check, spring cooling check)
- 21-point comprehensive system inspection
- Filter replacement and coil cleaning
- Carbon monoxide safety testing
- Priority emergency service for plan members
- 15% discount on all repairs for members`,

    "indoor-air-quality": `${cityName} homes, like many in Massachusetts, are built to be tightly sealed against the elements. While this is great for energy efficiency, it can trap pollutants, allergens, dust, and moisture inside — leading to poor indoor air quality that affects your family's health and comfort.

Mass HVAC offers comprehensive indoor air quality solutions for ${cityName} homes:

- **Duct Cleaning** — Remove years of dust, debris, and allergens
- **Air Purification** — Whole-home HEPA filtration and UV germicidal lights
- **Humidity Control** — Humidifiers for dry winters, dehumidifiers for muggy summers
- **Ventilation** — Energy Recovery Ventilators (ERV) for fresh air without energy loss
- **Air Quality Testing** — Professional assessment of your indoor environment`,
  };

  return `## ${serviceName} in ${cityName}, MA

Looking for professional ${serviceName.toLowerCase()} in ${cityName}, Massachusetts? Mass HVAC is the trusted local choice for residential and commercial HVAC services in ${cityName} and throughout the MetroWest area.

${serviceSpecific[serviceSlug] || `Mass HVAC provides expert ${serviceName.toLowerCase()} services to homes and businesses in ${cityName}, MA. Our licensed technicians deliver fast, reliable service backed by our satisfaction guarantee.`}

### Why Choose Mass HVAC for ${serviceName} in ${cityName}?

- **Local & Trusted** — We're a Massachusetts company serving ${cityName} and surrounding communities
- **Fast Response** — Same-day and emergency service available
- **Licensed & Insured** — Fully licensed HVAC professionals
- **Fair Pricing** — Transparent quotes with no hidden fees
- **Satisfaction Guaranteed** — We stand behind every job

**Ready for ${serviceName.toLowerCase()} in ${cityName}? Call Mass HVAC today for a free estimate!**`;
}
