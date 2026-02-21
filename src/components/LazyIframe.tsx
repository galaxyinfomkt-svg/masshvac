"use client";

import { useState, useEffect, useRef } from "react";

/**
 * LazyIframe — Defers iframe loading until the element enters the viewport.
 * Optionally adds a delay + user-interaction trigger for above-fold iframes.
 * Prevents heavy third-party scripts (reCAPTCHA, analytics) from blocking initial render.
 */
export default function LazyIframe({
  delayMs = 0,
  rootMargin = "200px",
  placeholderHeight,
  style,
  className,
  ...rest
}: {
  delayMs?: number;
  rootMargin?: string;
  placeholderHeight?: string;
} & React.IframeHTMLAttributes<HTMLIFrameElement> &
  Record<string, unknown>) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout> | undefined;
    const interactionEvents = ["scroll", "click", "touchstart", "keydown"];

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
            interactionEvents.forEach((ev) =>
              window.addEventListener(ev, load, { once: true, passive: true }),
            );
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
    return <iframe className={className} style={style} {...rest} />;
  }

  const h =
    placeholderHeight ||
    (typeof style?.height === "string"
      ? style.height
      : typeof style?.minHeight === "string"
        ? style.minHeight
        : "400px");

  return <div ref={ref} style={{ minHeight: h }} />;
}
