/** A price band, e.g. { low: 89, high: 149, unit: "tune-up" }. */
export interface PriceRange {
  low: number;
  high: number;
  /** Short unit label used in copy: "tune-up", "repair", "installed", etc. */
  unit: string;
}

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
  /** Tune-up / inspection price band (per visit). */
  tuneUpRange?: PriceRange;
  /** Typical repair price band (parts + labor, common fixes). */
  repairRange?: PriceRange;
  /** Installed-system price band (residential, average sizing). */
  installRange?: PriceRange;
  /** Rebate band if applicable (e.g. Mass Save heat pump incentives). */
  rebateRange?: PriceRange;
  /** Typical install duration (e.g. "1 day", "1–3 days"). */
  installDuration?: string;
  /** One extra AEO-friendly Q&A specific to this service. */
  extraFaq?: { q: string; a: string };
}

/** Format a PriceRange as "$89–$149 per tune-up". */
export function formatRange(r: PriceRange): string {
  return `$${r.low.toLocaleString()}–$${r.high.toLocaleString()} per ${r.unit}`;
}

export const services: Service[] = [
  {
    slug: "heating-installation-repair",
    name: "Heating Installation & Repair",
    shortName: "Heating",
    description:
      "Expert furnace and boiler installation, repair, and replacement services across Massachusetts. Stay warm all winter with Mass HVAC.",
    metaTitle: "Heating Installation & Repair in MA | Mass HVAC",
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
    // TODO(Luiz): confirmar faixas reais — números atuais alinham com Milford city hub
    tuneUpRange: { low: 89, high: 149, unit: "tune-up" },
    repairRange: { low: 150, high: 500, unit: "repair" },
    // TODO(Luiz): confirmar faixa de instalação de furnace (residencial padrão)
    installRange: { low: 4500, high: 9500, unit: "installed system" },
    installDuration: "1 day for most furnaces; 1–2 days for boiler replacement",
    extraFaq: {
      q: "How long does a furnace installation take in Massachusetts?",
      a: "Most residential furnace replacements in Massachusetts are completed in one day — including removal of the old unit, installation of the new system, gas and electrical hookup, and commissioning. Full boiler replacements typically take one to two days. We pull permits, coordinate inspection, and leave the work area clean.",
    },
  },
  {
    slug: "air-conditioning-installation-repair",
    name: "Air Conditioning Installation & Repair",
    shortName: "Cooling",
    description:
      "Professional AC installation, repair, and maintenance in Massachusetts. Beat the summer heat with Mass HVAC's cooling experts.",
    metaTitle: "AC Installation & Repair in MA | Mass HVAC",
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
    // TODO(Luiz): confirmar faixas reais de AC
    tuneUpRange: { low: 89, high: 149, unit: "AC tune-up" },
    repairRange: { low: 175, high: 600, unit: "repair (parts + labor)" },
    // TODO(Luiz): confirmar faixa de central AC residencial (depende de tonelagem + ductos novos vs existentes)
    installRange: { low: 5500, high: 12000, unit: "installed system" },
    installDuration: "1 day with existing ductwork; 2–3 days for new ducts",
    extraFaq: {
      q: "What size central AC do I need for my Massachusetts home?",
      a: "Sizing is done with a Manual J load calculation — typically 1 ton of AC per 600–800 sq ft of conditioned space, adjusted for insulation, window area, and orientation. We never quote an AC by square footage alone; oversized units short-cycle and fail to dehumidify, undersized units never reach setpoint. Free in-home sizing is part of every estimate.",
    },
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
    // TODO(Luiz): confirmar faixas de mini-split (single-zone vs multi-zone)
    tuneUpRange: { low: 119, high: 199, unit: "mini-split tune-up" },
    repairRange: { low: 200, high: 700, unit: "repair" },
    installRange: { low: 4500, high: 18000, unit: "installed system (single-zone to whole-home multi-zone)" },
    // Mass Save rebates per program guidelines (2025-2026 window)
    rebateRange: { low: 1250, high: 10000, unit: "Mass Save rebate" },
    installDuration: "1 day single-zone; 2–4 days multi-zone whole-home",
    extraFaq: {
      q: "How big is the Mass Save heat pump rebate in Massachusetts?",
      a: "Mass Save rebates for cold-climate heat pumps and ductless mini-splits range from $1,250 to $10,000+ per home, depending on system size, whether you go partial- or whole-home, and your utility. Whole-home installations replacing fossil-fuel heating qualify for the top of the range. We help you pre-qualify and submit the paperwork as part of every install.",
    },
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
    // TODO(Luiz): confirmar preço do plano de manutenção (per visit vs anual)
    tuneUpRange: { low: 89, high: 149, unit: "visit" },
    repairRange: { low: 150, high: 500, unit: "repair" },
    installDuration: "60–90 minutes per visit (2 visits per year recommended)",
    extraFaq: {
      q: "How often should I service my HVAC system in Massachusetts?",
      a: "Twice a year is the manufacturer-recommended cadence in New England: a heating tune-up in early fall and a cooling tune-up in spring. Most equipment warranties require documented annual maintenance to remain valid. Skipping it is the single most common reason a $5,000–$15,000 system fails 5–7 years early.",
    },
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality",
    shortName: "Air Quality",
    description:
      "Indoor air quality solutions in Massachusetts — duct cleaning, air purifiers, humidifiers, and filtration systems.",
    metaTitle: "Indoor Air Quality Solutions in MA | Mass HVAC",
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
    // TODO(Luiz): confirmar faixas reais de IAQ (duct cleaning, UV light, ERV, etc.)
    tuneUpRange: { low: 99, high: 199, unit: "IAQ assessment" },
    repairRange: { low: 150, high: 600, unit: "filter / UV bulb / minor service" },
    installRange: { low: 400, high: 6500, unit: "installed (UV light to whole-home ERV / duct cleaning)" },
    installDuration: "Same-day for filters and UV; 1 day for whole-home ERV or duct cleaning",
    extraFaq: {
      q: "How much does professional duct cleaning cost in Massachusetts?",
      a: "Professional whole-home duct cleaning in Massachusetts typically runs $400–$900 depending on the number of vents, the size of the system, and whether sanitizing or mold remediation is required. The EPA recommends cleaning when there's visible mold, vermin, or substantial debris — not on a fixed schedule.",
    },
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
