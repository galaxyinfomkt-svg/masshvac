"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

/**
 * Loads the LeadConnector chat widget ONLY after the user shows engagement
 * — first interaction, first scroll, or a 6-second idle timeout.
 *
 * Why: the widget bundle is ~175 KB of JS + ~75 KB of secondary chunks and
 * blocks no critical UX. Loading on `lazyOnload` still ships it during page
 * load, fighting hero/LCP for bandwidth on mobile. Gating it on engagement
 * frees the critical path for real visitors and only pays the cost for
 * sessions that are likely to convert anyway.
 *
 * Trigger conditions (whichever fires first):
 *  - any pointerdown / keydown / touchstart
 *  - first scroll past 50px
 *  - 6s after the component mounts (idle fallback)
 *
 * Once loaded, the widget continues to behave exactly like before — global,
 * bottom-right, available everywhere via app/layout.tsx.
 */
export default function DeferredChatWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const trigger = () => setShouldLoad(true);

    const onScroll = () => {
      if (window.scrollY > 50) trigger();
    };

    const events: (keyof WindowEventMap)[] = ["pointerdown", "keydown", "touchstart"];
    events.forEach((e) => window.addEventListener(e, trigger, { once: true, passive: true }));
    window.addEventListener("scroll", onScroll, { passive: true });

    const idleTimeout = window.setTimeout(trigger, 6000);

    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(idleTimeout);
    };
  }, [shouldLoad]);

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
