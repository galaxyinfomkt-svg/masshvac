"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export const OPEN_CHAT_EVENT = "masshvac:open-chat";

type LeadConnectorWindow = Window & {
  leadConnector?: { chatWidget?: { openWidget?: () => void } };
};

/**
 * LeadConnector (Bee Pro Hub) chat widget.
 *
 * Desktop (≥1024px): loads after engagement (interaction or scroll), never on its own while the
 * visitor sits on the hero, so its prompt bubble does not cover the quote form.
 *
 * Mobile: loads ONLY when the visitor taps "Chat" in MobileStickyBar. In
 * production the auto-loaded launcher and its "Hi there!" prompt covered the
 * hero Call button and blocked taps on "Get Quote" on every page.
 */
export default function DeferredChatWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [openRequested, setOpenRequested] = useState(false);

  useEffect(() => {
    const onOpen = () => {
      setShouldLoad(true);
      setOpenRequested(true);
    };
    window.addEventListener(OPEN_CHAT_EVENT, onOpen);

    if (shouldLoad || !window.matchMedia("(min-width: 1024px)").matches) {
      return () => window.removeEventListener(OPEN_CHAT_EVENT, onOpen);
    }

    const trigger = () => setShouldLoad(true);
    const onScroll = () => {
      if (window.scrollY > 50) trigger();
    };
    const events = ["pointerdown", "keydown"] as const;
    events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener(OPEN_CHAT_EVENT, onOpen);
      events.forEach((e) => window.removeEventListener(e, trigger));
      window.removeEventListener("scroll", onScroll);
    };
  }, [shouldLoad]);

  // Once the widget script is up, open it for a visitor who explicitly asked.
  useEffect(() => {
    if (!openRequested) return;
    let tries = 0;
    const id = window.setInterval(() => {
      const api = (window as LeadConnectorWindow).leadConnector?.chatWidget;
      if (api?.openWidget) {
        api.openWidget();
        window.clearInterval(id);
      } else if (++tries > 40) {
        window.clearInterval(id);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [openRequested]);

  if (!shouldLoad) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a08522f0d6444ff0b67b12b"
      strategy="afterInteractive"
    />
  );
}
