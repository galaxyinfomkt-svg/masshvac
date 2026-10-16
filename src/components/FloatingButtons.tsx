import { Phone } from "lucide-react";
import { PHONE_DISPLAY, TEL_HREF } from "@/data/company";

/**
 * Desktop-only floating phone button (mobile uses MobileStickyBar).
 * Was rendering as a full-width bar overflowing the viewport because the
 * unlayered `.animate-pulse-glow { position: relative }` beat Tailwind's
 * layered `fixed`. Custom utilities now live in @layer components.
 */
export default function FloatingButtons() {
  return (
    <a
      href={TEL_HREF}
      className="hidden lg:flex fixed bottom-6 left-6 z-40 w-max items-center gap-2.5 px-5 py-3.5 bg-gradient-to-r from-accent to-accent-dark border border-accent-light/30 text-white font-bold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-105 animate-pulse-glow"
      aria-label={`Call Mass HVAC at ${PHONE_DISPLAY}`}
    >
      <Phone className="w-5 h-5" aria-hidden="true" />
      <span className="text-sm">{PHONE_DISPLAY}</span>
    </a>
  );
}
