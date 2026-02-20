import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Mass HVAC Inc | Heating & Cooling Services in Massachusetts",
    template: "%s | Mass HVAC Inc",
  },
  description:
    "Professional HVAC services in Massachusetts — heating, cooling, mini-splits, maintenance & indoor air quality. 24/7 emergency service. Call (508) 386-9104.",
  keywords: [
    "HVAC Massachusetts",
    "heating repair MA",
    "AC installation Massachusetts",
    "furnace repair MetroWest",
    "ductless mini-split installation MA",
    "HVAC maintenance Massachusetts",
    "Mass HVAC",
    "emergency heating repair MA",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Mass HVAC Inc",
    title: "Mass HVAC Inc | Heating & Cooling Services in Massachusetts",
    description:
      "Professional HVAC services in Massachusetts — heating, cooling, mini-splits, maintenance & indoor air quality. 24/7 emergency service.",
    images: [
      {
        url: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
        width: 1200,
        height: 630,
        alt: "Mass HVAC Inc",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mass HVAC Inc | Heating & Cooling Services in Massachusetts",
    description:
      "Professional HVAC services in Massachusetts. 24/7 emergency service. Call (508) 386-9104.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://masshvac.net",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
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
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
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
