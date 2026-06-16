"use client";

import { Phone } from "lucide-react";

/**
 * Desktop-only floating phone button. On mobile, MobileStickyBar takes
 * over — a full-width split bar with Call + Get Quote is more useful
 * than a small floating pill, and avoids stacking two CTAs at the
 * bottom of a small screen.
 */
export default function FloatingButtons() {
  return (
    <a
      href="tel:+15087868755"
      className="hidden lg:flex fixed bottom-6 left-6 z-40 items-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-accent to-accent-dark border border-accent-light/30 text-white font-bold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 animate-pulse-glow group"
      aria-label="Call Mass HVAC"
    >
      <Phone className="w-5 h-5 group-hover:animate-bounce" />
      <span className="text-sm">(508) 786-8755</span>
    </a>
  );
}
