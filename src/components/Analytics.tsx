"use client";

import { useEffect } from "react";
import Script from "next/script";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/**
 * Google Tag Manager + lead events.
 *
 * Set NEXT_PUBLIC_GTM_ID in Vercel (Production) to turn it on; nothing loads
 * without it. Every tap on a phone/email link and every "#quote" CTA is pushed
 * to the dataLayer, so GA4 / Bee Pro Hub can count calls and quote intents:
 *   { event: "lead_click", lead_type: "phone" | "email" | "quote_cta", page_path }
 */
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const lead_type = href.startsWith("tel:")
        ? "phone"
        : href.startsWith("mailto:")
          ? "email"
          : href.endsWith("#quote")
            ? "quote_cta"
            : null;
      if (!lead_type) return;
      const w = window as DataLayerWindow;
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "lead_click", lead_type, page_path: location.pathname, link_text: a.textContent?.trim().slice(0, 60) });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!GTM_ID) return null;

  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" />
      </noscript>
    </>
  );
}
