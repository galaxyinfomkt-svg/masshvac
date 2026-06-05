/**
 * Company facts — single source of truth referenced in JSON-LD, Footer
 * trust signals, About copy, etc. Update once here.
 *
 * Kept in src/data/ (not src/app/) to avoid a circular import between
 * layout.tsx (which renders <Footer/>) and Footer.tsx (which reads these).
 */

// TODO(Luiz): substituir pelo nome COMPLETO do founder (atualmente apenas "Gilliard").
export const FOUNDER_NAME = "Gilliard";

// TODO(Luiz): número real da licença HVAC do Massachusetts Department of Public Safety.
// Quando preenchido, aparece automaticamente: (a) na linha de credenciais do Footer,
// (b) como `identifier` da credencial no Organization JSON-LD em layout.tsx.
export const MA_HVAC_LICENSE_NUMBER = "";

// TODO(Luiz): confirmar que estas URLs de redes sociais existem e estão sob nosso
// controle. Se alguma não existir, remover do array — sameAs com URL quebrada
// degrada o Knowledge Graph mais do que ajuda.
export const SOCIAL_PROFILES = [
  "https://www.facebook.com/masshvacinc",
  "https://www.instagram.com/masshvacinc",
  "https://www.google.com/maps/place/Mass+HVAC+Inc",
];
