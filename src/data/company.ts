/**
 * Company facts — single source of truth referenced in JSON-LD, Footer,
 * Header, CTAs and metadata. Update once here.
 *
 * Kept in src/data/ (not src/app/) to avoid a circular import between
 * layout.tsx (which renders <Footer/>) and Footer.tsx (which reads these).
 */

export const SITE_URL = "https://masshvac.net";
export const BRAND = "Mass HVAC Inc";
export const BRAND_SHORT = "Mass HVAC";

export const PHONE_DISPLAY = "(508) 786-8755";
export const PHONE_E164 = "+15087868755";
export const TEL_HREF = `tel:${PHONE_E164}`;
export const EMAIL = "info@masshvac.net";
export const GOOGLE_REVIEW_URL = "https://g.page/r/CSf92YebNYJPEAE/review";

/** Service-area wording used everywhere. Company serves MetroWest MA from Milford. */
export const SERVICE_AREA_LABEL = "MetroWest, MA";
export const SERVICE_AREA_TAGLINE = "Serving Milford & MetroWest, MA";

export const ADDRESS = {
  locality: "Milford",
  region: "MA",
  postalCode: "01757",
  country: "US",
  // TODO(Gilliard): street address only if the business serves customers at its address.
  street: "",
};

// Milford, MA town center. TODO(RHAI): replace with the exact Google Business Profile pin.
export const GEO = { lat: 42.1398, lng: -71.5163 };

/**
 * Business hours — ONE definition for footer, schema and copy.
 * TODO(Gilliard): confirm these match the Google Business Profile.
 */
export const HOURS = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "20:00" },
  { days: ["Saturday"], opens: "08:00", closes: "17:00" },
] as const;
export const HOURS_DISPLAY = "Mon–Fri 7AM–8PM · Sat 8AM–5PM";
export const EMERGENCY_NOTE = "24/7 emergency calls";

// TODO(Luiz): substituir pelo nome COMPLETO do founder (atualmente apenas "Gilliard").
export const FOUNDER_NAME = "Gilliard";

/**
 * Massachusetts Home Improvement Contractor (HIC) registration number.
 * M.G.L. c.142A §13 requires it on every advertisement, including websites.
 * When filled, it renders in the Footer and in the Organization JSON-LD.
 * TODO(Gilliard): número HIC real.
 */
export const MA_HIC_NUMBER = "";

// TODO(Luiz): confirmar que estas URLs de redes sociais existem e estão sob nosso
// controle. Se alguma não existir, remover do array — sameAs com URL quebrada
// degrada o Knowledge Graph mais do que ajuda.
export const SOCIAL_PROFILES = [
  "https://www.facebook.com/masshvacinc",
  "https://www.instagram.com/masshvacinc",
  "https://www.google.com/maps/place/Mass+HVAC+Inc",
];
