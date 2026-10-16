"use client";

import { useState, useEffect, useRef, type IframeHTMLAttributes, type ReactNode } from "react";

type LazyIframeProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  delayMs?: number;
  rootMargin?: string;
  placeholderHeight?: string;
  /** Shown while the iframe has not loaded yet (e.g. "Loading form…" + phone fallback). */
  placeholder?: ReactNode;
  /** LeadConnector reads data-* attributes on the iframe; pass them through untouched. */
  [dataAttr: `data-${string}`]: string | undefined;
};

/**
 * LazyIframe — defers iframe loading until the element is near the viewport.
 * An element inside a `display:none` container never intersects, so a form
 * hidden on mobile (`hidden lg:block`) is never downloaded there. That is the
 * point: the LeadConnector form pulls ~0.5–0.75 MB plus up to 3 MB of
 * Cloudflare Turnstile.
 */
export default function LazyIframe({
  delayMs = 0,
  rootMargin = "200px",
  placeholderHeight,
  placeholder,
  style,
  className,
  ...rest
}: LazyIframeProps) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const interactionEvents = ["scroll", "click", "touchstart", "keydown"] as const;

    const load = () => {
      setShow(true);
      obs.disconnect();
      if (timer) clearTimeout(timer);
      interactionEvents.forEach((ev) => window.removeEventListener(ev, load));
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          if (delayMs > 0) {
            timer = setTimeout(load, delayMs);
            interactionEvents.forEach((ev) => window.addEventListener(ev, load, { once: true, passive: true }));
          } else {
            load();
          }
        }
      },
      { rootMargin },
    );

    obs.observe(el);

    return () => {
      obs.disconnect();
      if (timer) clearTimeout(timer);
      interactionEvents.forEach((ev) => window.removeEventListener(ev, load));
    };
  }, [delayMs, rootMargin]);

  if (show) {
    return <iframe className={className} style={style} loading="lazy" {...rest} />;
  }

  const h =
    placeholderHeight ||
    (typeof style?.height === "string" ? style.height : typeof style?.minHeight === "string" ? style.minHeight : "400px");

  return (
    <div ref={ref} style={{ minHeight: h }} className="flex items-center justify-center">
      {placeholder}
    </div>
  );
}
