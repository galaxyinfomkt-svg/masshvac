export interface Service {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  heroImage: string;
  painPoints: string[];
  solutions: string[];
  content: string;
}

export const services: Service[] = [
  {
    slug: "heating-installation-repair",
    name: "Heating Installation & Repair",
    shortName: "Heating",
    description:
      "Expert furnace and boiler installation, repair, and replacement services across Massachusetts. Stay warm all winter with Mass HVAC.",
    metaTitle: "Heating Installation & Repair in MA | Furnaces & Boilers – Mass HVAC",
    metaDescription:
      "Professional heating installation, repair & replacement in Massachusetts. Furnaces, boilers & more. 24/7 emergency service. Call Mass HVAC today!",
    icon: "🔥",
    heroImage:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853108245e718a03d08d.jpg",
    painPoints: [
      "No heat during freezing Massachusetts winters",
      "Skyrocketing energy bills from an outdated furnace",
      "Strange noises or frequent cycling from your heating system",
      "Uneven heating — some rooms freezing, others too warm",
      "Old boiler that keeps breaking down",
    ],
    solutions: [
      "24/7 emergency heating repair — we respond fast when you have no heat",
      "High-efficiency furnace and boiler installations that cut energy costs by up to 30%",
      "Complete system diagnostics to pinpoint and fix the root cause",
      "Zoning solutions for even, comfortable heat in every room",
      "Reliable boiler replacements with top-rated brands and full warranties",
    ],
    content: `Massachusetts winters are brutal — temperatures regularly drop below freezing, and a broken heating system isn't just uncomfortable, it's dangerous. At Mass HVAC, we specialize in keeping homes and businesses warm with expert furnace installation, boiler repair, and complete heating system replacements.

Whether your furnace stopped working at 2 AM or you're planning a proactive upgrade before the cold season hits, our licensed technicians are ready. We work with all major brands including Carrier, Lennox, Trane, and Goodman to deliver heating solutions that are efficient, reliable, and built for New England's toughest weather.

**Why choose Mass HVAC for heating?**
- Licensed & insured technicians with years of experience
- Same-day emergency service available 24/7
- Free estimates on new installations
- Energy-efficient systems that qualify for Mass Save® rebates
- 100% satisfaction guarantee on all work`,
  },
  {
    slug: "air-conditioning-installation-repair",
    name: "Air Conditioning Installation & Repair",
    shortName: "Cooling",
    description:
      "Professional AC installation, repair, and maintenance in Massachusetts. Beat the summer heat with Mass HVAC's cooling experts.",
    metaTitle: "AC Installation & Repair in MA | Air Conditioning – Mass HVAC",
    metaDescription:
      "Expert air conditioning installation, repair & maintenance in Massachusetts. Central AC, ductless systems & more. Fast service. Call Mass HVAC!",
    icon: "❄️",
    heroImage:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdffb5f5e9f09.jpeg",
    painPoints: [
      "No AC during humid Massachusetts summers",
      "AC running constantly but not cooling the house",
      "High electricity bills from an inefficient air conditioner",
      "AC making loud or unusual noises",
      "Inconsistent cooling throughout the home",
    ],
    solutions: [
      "Fast AC repair to restore comfort — often same-day service",
      "Energy-efficient central AC installations with up to 20 SEER2 ratings",
      "Refrigerant recharge and leak detection",
      "Smart thermostat integration for optimal cooling and savings",
      "Preventative maintenance plans to avoid breakdowns",
    ],
    content: `When Massachusetts summers bring 90°F+ temperatures and high humidity, a reliable air conditioning system is essential. Mass HVAC provides expert AC installation, repair, and maintenance to keep your home cool, comfortable, and energy-efficient all season long.

From emergency AC repairs when your system breaks down on the hottest day of the year, to planned installations of high-efficiency central air systems, our team delivers fast, professional service you can count on.

**Our AC services include:**
- Central air conditioning installation & replacement
- AC repair for all makes and models
- Seasonal tune-ups and maintenance plans
- Ductwork inspection and sealing
- Smart thermostat installation and programming
- Emergency same-day repair service`,
  },
  {
    slug: "heat-pumps-ductless-mini-splits",
    name: "Heat Pumps & Ductless Mini-Splits",
    shortName: "Mini-Splits",
    description:
      "Ductless mini-split and heat pump installation in Massachusetts. Year-round comfort with one efficient system.",
    metaTitle: "Ductless Mini-Split & Heat Pump Installation MA – Mass HVAC",
    metaDescription:
      "Ductless mini-split & heat pump installation in Massachusetts. Energy-efficient heating & cooling in one system. Huge rebates available. Call Mass HVAC!",
    icon: "🌡️",
    heroImage:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c0359b195a0dd9.jpeg",
    painPoints: [
      "Rooms without ductwork that are too hot or too cold",
      "Old home additions or converted spaces with no HVAC",
      "Wanting heating AND cooling from a single system",
      "High energy bills from running separate heating and cooling systems",
      "Desire to qualify for Massachusetts energy rebates",
    ],
    solutions: [
      "Ductless mini-split systems that heat AND cool without ductwork",
      "Hyper-heat models rated for sub-zero Massachusetts temperatures",
      "Zone control — set different temperatures for each room",
      "Up to 40% energy savings compared to traditional systems",
      "Help navigating Mass Save® rebates (up to $10,000+)",
    ],
    content: `Ductless mini-split heat pumps are the fastest-growing HVAC solution in Massachusetts — and for good reason. They provide both heating and cooling from a single, ultra-efficient system, with no ductwork required.

At Mass HVAC, we're certified installers of Mitsubishi, Fujitsu, Daikin, and LG mini-split systems. Whether you need to climate-control a single room or your entire home, we design custom solutions that maximize comfort and minimize energy costs.

**Why homeowners love mini-splits:**
- Heat AND cool with one system — year-round comfort
- No ductwork needed — perfect for older Massachusetts homes
- Individual room control — no more thermostat wars
- Whisper-quiet operation
- Eligible for massive Mass Save® rebates
- Up to 40% more efficient than traditional HVAC`,
  },
  {
    slug: "hvac-maintenance-tune-ups",
    name: "HVAC Maintenance & Tune-Ups",
    shortName: "Maintenance",
    description:
      "Preventative HVAC maintenance and seasonal tune-ups in Massachusetts. Extend system life and lower energy bills.",
    metaTitle: "HVAC Maintenance & Tune-Ups in MA – Mass HVAC",
    metaDescription:
      "Professional HVAC maintenance & seasonal tune-ups in Massachusetts. Prevent breakdowns, extend system life & save on energy. Schedule with Mass HVAC!",
    icon: "🔧",
    heroImage:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc11a12e97972.jpg",
    painPoints: [
      "HVAC system breaking down at the worst possible time",
      "Energy bills creeping up year after year",
      "Worrying about carbon monoxide from an unmaintained furnace",
      "Not knowing if your system is running efficiently",
      "Voided manufacturer warranty from skipping maintenance",
    ],
    solutions: [
      "Comprehensive seasonal tune-ups (heating in fall, cooling in spring)",
      "21-point inspection covering all critical components",
      "Priority scheduling and discounts for maintenance plan members",
      "Carbon monoxide testing and safety checks",
      "Filter replacement, coil cleaning, and efficiency optimization",
    ],
    content: `Regular HVAC maintenance is the single best investment you can make to protect your comfort, your wallet, and your family's safety. At Mass HVAC, our comprehensive tune-up plans keep your heating and cooling systems running at peak performance year after year.

**Our maintenance plans include:**
- Bi-annual tune-ups (heating check in fall, cooling check in spring)
- 21-point system inspection
- Filter replacement
- Coil cleaning and inspection
- Electrical connection tightening
- Thermostat calibration
- Refrigerant level check
- Carbon monoxide safety test
- Priority emergency service for plan members
- 15% discount on all repairs

**The numbers don't lie:** Regular maintenance can reduce energy bills by 15-25%, extend equipment life by 5-10 years, and prevent up to 95% of all HVAC breakdowns.`,
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality",
    shortName: "Air Quality",
    description:
      "Indoor air quality solutions in Massachusetts — duct cleaning, air purifiers, humidifiers, and filtration systems.",
    metaTitle: "Indoor Air Quality Solutions in MA | Duct Cleaning & Purifiers – Mass HVAC",
    metaDescription:
      "Improve your indoor air quality in Massachusetts. Duct cleaning, air purifiers, humidifiers & advanced filtration. Breathe easier with Mass HVAC!",
    icon: "💨",
    heroImage:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdf143b5e9eeb.jpg",
    painPoints: [
      "Allergies or respiratory issues worsening at home",
      "Dusty air and visible particles in sunlight",
      "Musty or stale smells from vents",
      "Dry air in winter causing cracked skin, static, and discomfort",
      "Concern about mold, bacteria, or VOCs in the home",
    ],
    solutions: [
      "Professional duct cleaning to remove years of dust, allergens, and debris",
      "HEPA and media air filtration systems for whole-home purification",
      "UV germicidal lights that kill mold, bacteria, and viruses in your HVAC system",
      "Whole-home humidifiers and dehumidifiers for balanced moisture",
      "ERV/HRV ventilation systems for fresh air without energy loss",
    ],
    content: `Americans spend up to 90% of their time indoors — and indoor air can be 2-5x more polluted than outdoor air. In Massachusetts, where homes are sealed tight against harsh winters, indoor air quality is especially critical.

Mass HVAC offers comprehensive indoor air quality solutions that work with your existing HVAC system to create a healthier, more comfortable home environment.

**Our IAQ solutions:**
- Professional duct cleaning and sanitizing
- Whole-home HEPA air filtration
- UV germicidal light installation
- Whole-home humidifiers (combat dry winter air)
- Whole-home dehumidifiers (control summer moisture)
- Energy Recovery Ventilators (ERV)
- Air quality testing and assessment

Don't let the air in your home compromise your family's health. Contact Mass HVAC for a free indoor air quality assessment.`,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceImagePool: Record<string, string[]> = {
  "heating-installation-repair": [
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853108245e718a03d08d.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc11a12e97972.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae753dac28d098.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc1302fe9796c.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531d83aecc9666cf028.jpg",
  ],
  "air-conditioning-installation-repair": [
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdffb5f5e9f09.jpeg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885313a2afd32ac59c785.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae75c64728d09a.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885315ba498f886003707.jpg",
  ],
  "heat-pumps-ductless-mini-splits": [
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c0359b195a0dd9.jpeg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc19c80e9796b.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885313a2afd623359c780.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae752c1728d099.jpg",
  ],
  "hvac-maintenance-tune-ups": [
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc11a12e97972.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc1302fe9796c.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853108245e5cde03d06c.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c03544725a0db8.jpg",
  ],
  "indoor-air-quality": [
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdf143b5e9eeb.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdf89fa5e9ee1.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdf801d5e9ee3.jpg",
    "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc121bee97966.jpg",
  ],
};

export const cityHeroImages: string[] = [
  "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885313a2afd32ac59c785.jpg",
  "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc11a12e97972.jpg",
  "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885315ba498e66200370c.jpg",
  "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c0359b195a0dd9.jpeg",
  "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853108245e718a03d08d.jpg",
];

export function getImageForCity(slug: string, images: string[]): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  return images[Math.abs(hash) % images.length];
}
