"use client";

import { Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <a
      href="tel:+15083869104"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-5 py-3.5 bg-gold hover:bg-gold-dark text-black font-bold rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-110 animate-pulse-glow group"
      aria-label="Call Mass HVAC"
    >
      <Phone className="w-5 h-5 group-hover:animate-bounce" />
      <span className="hidden sm:inline text-sm">(508) 386-9104</span>
    </a>
  );
}
