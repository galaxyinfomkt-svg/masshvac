import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import MobileStickyBar from "@/components/MobileStickyBar";
import DeferredChatWidget from "@/components/DeferredChatWidget";
import QuoteSection from "@/components/QuoteSection";
import Analytics from "@/components/Analytics";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import {
  ADDRESS, BRAND, EMAIL, FOUNDER_NAME, GEO, HOURS, MA_HIC_NUMBER, PHONE_E164, SITE_URL, SOCIAL_PROFILES,
} from "@/data/company";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Viewport — exported separately per Next.js 14+ best practice      */
/* ------------------------------------------------------------------ */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B2A6B",
};

/* ------------------------------------------------------------------ */
/*  Metadata — comprehensive SEO configuration                        */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  /* Pages pass only their own title; the template appends the brand ONCE. */
  title: {
    default: "Mass HVAC Inc | Heating & Cooling in Milford & MetroWest, MA",
    template: "%s | Mass HVAC Inc",
  },
  description:
    "Heating, AC, heat pump and mini-split installation and repair in Milford and MetroWest, MA. Free written estimates. Call (508) 786-8755.",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BRAND,
    title: "Mass HVAC Inc | Heating & Cooling in Milford & MetroWest, MA",
    description:
      "Heating, AC, heat pump and mini-split installation and repair in Milford and MetroWest, MA. Free written estimates.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mass HVAC Inc | Heating & Cooling in Milford & MetroWest, MA",
    description:
      "Heating, AC, heat pump and mini-split installation and repair in Milford and MetroWest, MA. Free written estimates.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* Icons come from app/icon.png + app/favicon.ico (file conventions). */

  category: "HVAC Services",

  /* Search Console: set NEXT_PUBLIC_GSC_VERIFICATION in Vercel env (or verify via DNS). */
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),

  other: {
    "geo.region": "US-MA",
    "geo.placename": "Milford, Massachusetts",
    "geo.position": `${GEO.lat};${GEO.lng}`,
    ICBM: `${GEO.lat}, ${GEO.lng}`,
    "format-detection": "telephone=yes",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data (Organization + LocalBusiness + Service)   */
/* ------------------------------------------------------------------ */
function OrganizationJsonLd() {
  // NOTE: no aggregateRating/review here. Google does not show review stars for a
  // business's reviews of itself, and its guidelines forbid marking up reviews
  // collected on other sites (these are Google reviews). The visible reviews
  // stay on the page with a link to the Google profile.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND,
    alternateName: "Mass HVAC",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      "Mass HVAC Inc is an HVAC contractor based in Milford, MA, providing heating, air conditioning, heat pump, ductless mini-split, maintenance and indoor air quality services across MetroWest Massachusetts.",
    telephone: "+1-508-786-8755",
    email: EMAIL,
    priceRange: "$$",
    currenciesAccepted: "USD",
    areaServed: [
      { "@type": "AdministrativeArea", name: "MetroWest, Massachusetts" },
      ...cities.map((c) => ({ "@type": "City", name: `${c.name}, MA` })),
    ],
    address: {
      "@type": "PostalAddress",
      ...(ADDRESS.street ? { streetAddress: ADDRESS.street } : {}),
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
    openingHoursSpecification: HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      contactType: "customer service",
      areaServed: "US-MA",
      availableLanguage: ["English", "Portuguese"],
    },
    knowsAbout: [
      "Furnace and boiler repair",
      "Air conditioning installation",
      "Cold-climate heat pumps",
      "Ductless mini-split systems",
      "HVAC maintenance",
      "Indoor air quality",
      "Mass Save heat pump rebates",
    ],
    sameAs: SOCIAL_PROFILES,
    founder: { "@type": "Person", name: FOUNDER_NAME, jobTitle: "Owner" },
    ...(MA_HIC_NUMBER
      ? {
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            name: "Massachusetts Home Improvement Contractor Registration",
            identifier: MA_HIC_NUMBER,
            recognizedBy: { "@type": "GovernmentOrganization", name: "Massachusetts Office of Consumer Affairs and Business Regulation" },
          },
        }
      : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: services.map((sv) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: sv.name, url: `${SITE_URL}/services/${sv.slug}` },
      })),
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Root Layout Component                                              */
/* ------------------------------------------------------------------ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint, so .reveal animations only
            hide content when JS can reveal it (no blank page without JS). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" />
        <OrganizationJsonLd />
        {/* LeadConnector form auto-resize helper (19 KB, loads when idle). */}
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      </head>

      <body className="font-sans antialiased pb-[calc(3.25rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Analytics />
        <Header />
        <main id="main-content">{children}</main>
        <QuoteSection />
        <Footer />
        <FloatingButtons />
        <MobileStickyBar />
        <DeferredChatWidget />
      </body>
    </html>
  );
}
