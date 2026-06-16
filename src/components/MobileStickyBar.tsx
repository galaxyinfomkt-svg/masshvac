"use client";

import { Phone, MessageSquare } from "lucide-react";

/**
 * Always-visible bottom action bar for mobile. Two split actions:
 * • CALL — instant call (highest-converting CTA for HVAC).
 * • QUOTE — scrolls to the #quote section (mobile form).
 *
 * Why: HVAC visitors arrive in distress ("it's 95°F and the AC is dead").
 * Burying the CTA below the fold loses the moment. Sticky bar keeps the
 * lead path one tap away no matter where they've scrolled to.
 *
 * Desktop is unaffected — the floating phone button (FloatingButtons.tsx)
 * stays as-is on lg+ where there's more space and the header CTA is
 * already prominent.
 *
 * z-index sits below the chat widget (which uses ~9999) so it doesn't
 * collide with that overlay once the user opens it.
 */
export default function MobileStickyBar() {
  return (
    <nav
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 flex bg-white/95 backdrop-blur border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <a
        href="tel:+15087868755"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-white font-bold text-sm"
        aria-label="Call Mass HVAC at (508) 786-8755"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <a
        href="#quote"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white text-primary font-bold text-sm border-l border-gray-200"
        aria-label="Get a free HVAC quote"
      >
        <MessageSquare className="w-4 h-4" />
        Get Quote
      </a>
    </nav>
  );
}
