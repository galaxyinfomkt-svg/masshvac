import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
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
  metadataBase: new URL("https://masshvac.net"),

  /* ---- Title ---- */
  title: {
    default:
      "Mass HVAC Inc | #1 Heating & Cooling Company in Massachusetts | 24/7 HVAC Service",
    template: "%s | Mass HVAC Inc — Massachusetts HVAC Experts",
  },

  /* ---- Description (155-160 chars, front-loaded with keywords) ---- */
  description:
    "Mass HVAC Inc is Massachusetts' top-rated HVAC contractor. Expert heating installation & repair, AC service, ductless mini-splits, heat pumps, indoor air quality & 24/7 emergency service across MetroWest, Worcester & Greater Boston. Licensed & insured. 5-star rated. Call (508) 386-9104 for a free estimate.",

  /* ---- Keywords (broad + long-tail + geo-targeted) ---- */
  keywords: [
    // Primary service keywords
    "HVAC Massachusetts",
    "HVAC contractor MA",
    "HVAC company Massachusetts",
    "heating and cooling Massachusetts",
    "heating repair Massachusetts",
    "heating installation MA",
    "furnace repair Massachusetts",
    "furnace installation MA",
    "boiler repair Massachusetts",
    "boiler installation MA",
    "AC installation Massachusetts",
    "AC repair MA",
    "air conditioning installation Massachusetts",
    "air conditioning repair MA",
    "central air installation MA",
    "ductless mini-split installation Massachusetts",
    "mini-split repair MA",
    "heat pump installation Massachusetts",
    "heat pump repair MA",
    "HVAC maintenance Massachusetts",
    "furnace tune-up MA",
    "AC tune-up Massachusetts",
    "indoor air quality Massachusetts",
    "air duct cleaning MA",
    "thermostat installation MA",
    // Emergency keywords
    "emergency HVAC service Massachusetts",
    "emergency heating repair MA",
    "24/7 HVAC service Massachusetts",
    "no heat emergency MA",
    "furnace stopped working MA",
    // Brand name
    "Mass HVAC",
    "Mass HVAC Inc",
    // Geo-targeted: MetroWest
    "HVAC Framingham MA",
    "HVAC Natick MA",
    "HVAC Marlborough MA",
    "HVAC Milford MA",
    "HVAC Hopkinton MA",
    "HVAC Sudbury MA",
    "HVAC Ashland MA",
    "HVAC Westborough MA",
    "HVAC Hudson MA",
    "HVAC Holliston MA",
    "HVAC Shrewsbury MA",
    "HVAC Wayland MA",
    // Geo-targeted: Worcester area
    "HVAC Worcester MA",
    "HVAC Auburn MA",
    "HVAC Grafton MA",
    // Geo-targeted: Greater Boston
    "HVAC Newton MA",
    "HVAC Wellesley MA",
    "HVAC Needham MA",
    "HVAC Waltham MA",
    "HVAC Brookline MA",
    "HVAC Lexington MA",
    "HVAC Cambridge MA",
    // Long-tail / intent-driven
    "best HVAC company near me Massachusetts",
    "affordable heating repair Massachusetts",
    "licensed HVAC contractor MA",
    "HVAC free estimate Massachusetts",
    "Mass Save rebates HVAC",
    "energy efficient heating MA",
    "Carrier dealer Massachusetts",
    "Lennox dealer MA",
    "Trane dealer Massachusetts",
  ],

  /* ---- Open Graph ---- */
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mass HVAC Inc",
    title:
      "Mass HVAC Inc | #1 Heating & Cooling Company in Massachusetts",
    description:
      "Massachusetts' most trusted HVAC contractor. Expert heating, air conditioning, ductless mini-splits, heat pumps, maintenance & indoor air quality. 24/7 emergency service. 5-star Google rated. Licensed & insured. Free estimates — call (508) 386-9104.",
    url: "https://masshvac.net",
    images: [
      {
        url: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
        width: 1200,
        height: 630,
        alt: "Mass HVAC Inc — Professional Heating & Cooling Services in Massachusetts",
        type: "image/jpeg",
      },
    ],
  },

  /* ---- Twitter / X ---- */
  twitter: {
    card: "summary_large_image",
    title: "Mass HVAC Inc | #1 Heating & Cooling in Massachusetts",
    description:
      "Professional HVAC services across Massachusetts. Heating, AC, mini-splits, heat pumps & more. 24/7 emergency service. 5-star Google rated. Call (508) 386-9104 for a free estimate.",
    images: [
      {
        url: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
        alt: "Mass HVAC Inc — Professional Heating & Cooling Services in Massachusetts",
      },
    ],
  },

  /* ---- Robots / Crawling ---- */
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ---- Canonical & Alternates ---- */
  alternates: {
    canonical: "https://masshvac.net",
    languages: {
      "en-US": "https://masshvac.net",
    },
  },

  /* ---- Icons & Manifest ---- */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/favicon.ico" },
    ],
  },

  /* ---- Category ---- */
  category: "HVAC Services",

  /* ---- Other SEO meta ---- */
  other: {
    "geo.region": "US-MA",
    "geo.placename": "Massachusetts",
    "geo.position": "42.2626;-71.8023",
    "ICBM": "42.2626, -71.8023",
    "rating": "general",
    "revisit-after": "3 days",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data (Organization + LocalBusiness + Service)   */
/* ------------------------------------------------------------------ */
function OrganizationJsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": "https://masshvac.net/#organization",
    name: "Mass HVAC Inc",
    alternateName: ["Mass HVAC", "MASS HVAC INC"],
    url: "https://masshvac.net",
    logo: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
    image:
      "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
    description:
      "Mass HVAC Inc is Massachusetts' top-rated HVAC contractor providing heating installation & repair, air conditioning, ductless mini-splits, heat pumps, maintenance, and indoor air quality services. 24/7 emergency service across MetroWest, Worcester & Greater Boston.",
    telephone: "+1-508-386-9104",
    email: "info@masshvac.net",
    foundingDate: "2020",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Check, Financing",
    areaServed: [
      {
        "@type": "State",
        name: "Massachusetts",
        sameAs: "https://en.wikipedia.org/wiki/Massachusetts",
      },
      {
        "@type": "City",
        name: "Framingham",
        containedInPlace: { "@type": "State", name: "Massachusetts" },
      },
      {
        "@type": "City",
        name: "Worcester",
        containedInPlace: { "@type": "State", name: "Massachusetts" },
      },
      {
        "@type": "City",
        name: "Natick",
        containedInPlace: { "@type": "State", name: "Massachusetts" },
      },
      {
        "@type": "City",
        name: "Marlborough",
        containedInPlace: { "@type": "State", name: "Massachusetts" },
      },
      {
        "@type": "City",
        name: "Milford",
        containedInPlace: { "@type": "State", name: "Massachusetts" },
      },
      {
        "@type": "City",
        name: "Newton",
        containedInPlace: { "@type": "State", name: "Massachusetts" },
      },
      {
        "@type": "City",
        name: "Wellesley",
        containedInPlace: { "@type": "State", name: "Massachusetts" },
      },
      {
        "@type": "City",
        name: "Hopkinton",
        containedInPlace: { "@type": "State", name: "Massachusetts" },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milford",
      addressRegion: "MA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.2626,
      longitude: -71.8023,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "00:00",
        closes: "00:00",
        description: "Emergency service available 24/7",
      },
    ],
    sameAs: [
      "https://www.facebook.com/masshvacinc",
      "https://www.instagram.com/masshvacinc",
      "https://www.google.com/maps/place/Mass+HVAC+Inc",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "HVAC Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Heating Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Heating Installation & Repair",
                description:
                  "Expert furnace and boiler installation, repair, and replacement services across Massachusetts.",
                url: "https://masshvac.net/services/heating-installation-repair",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Cooling Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Air Conditioning Installation & Repair",
                description:
                  "Professional AC installation, repair, and maintenance in Massachusetts.",
                url: "https://masshvac.net/services/air-conditioning-installation-repair",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Mini-Split Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Ductless Mini-Split Installation",
                description:
                  "Ductless mini-split heat pump installation and repair for energy-efficient heating and cooling.",
                url: "https://masshvac.net/services/ductless-mini-split-installation",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Maintenance",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "HVAC Maintenance & Tune-Ups",
                description:
                  "Preventive HVAC maintenance plans and seasonal tune-ups to keep your system running efficiently.",
                url: "https://masshvac.net/services/hvac-maintenance-tune-ups",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Indoor Air Quality",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Indoor Air Quality Solutions",
                description:
                  "Air purifiers, humidifiers, dehumidifiers, UV lights, and duct cleaning for healthier indoor air.",
                url: "https://masshvac.net/services/indoor-air-quality",
              },
            },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "150",
      reviewCount: "150",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Satisfied Customer",
        },
        reviewBody:
          "Mass HVAC provided excellent service. They were professional, on time, and fixed our heating system quickly. Highly recommend!",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://masshvac.net/#website",
    name: "Mass HVAC Inc",
    url: "https://masshvac.net",
    description:
      "Massachusetts' top-rated HVAC contractor — heating, cooling, mini-splits, maintenance & indoor air quality.",
    publisher: {
      "@id": "https://masshvac.net/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://masshvac.net/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://masshvac.net",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://masshvac.net/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Service Areas",
        item: "https://masshvac.net/cities",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://masshvac.net/projects",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Blog",
        item: "https://masshvac.net/blog",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
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
    <html lang="en" dir="ltr" className={inter.variable}>
      <head>
        {/* Preconnect to critical third-party origins for performance */}
        <link rel="preconnect" href="https://assets.cdn.filesafe.space" />
        <link rel="preconnect" href="https://widgets.leadconnectorhq.com" />
        <link
          rel="dns-prefetch"
          href="https://link.msgsndr.com"
        />
        <link
          rel="dns-prefetch"
          href="https://reputationhub.site"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* JSON-LD Structured Data */}
        <OrganizationJsonLd />

        {/* Form embed script */}
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />

        {/* Reviews widget script */}
        <Script
          src="https://reputationhub.site/reputation/assets/review-widget.js"
          strategy="lazyOnload"
        />

        {/* Google Tag Manager — uncomment and replace GTM-XXXXX when ready
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXX');`}
        </Script>
        */}
      </head>

      <body className="font-sans antialiased">
        {/* Google Tag Manager noscript — uncomment when GTM is active
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        */}

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingButtons />

        {/* Chat widget — global, bottom right */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="693ae35c576271e28f3f6196"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
