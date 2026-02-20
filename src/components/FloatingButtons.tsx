"use client";

export default function FloatingButtons() {
  return (
    <>
      {/* Phone button — bottom left */}
      <a
        href="tel:+15083869104"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-5 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-full shadow-2xl transition-all duration-200 hover:scale-110 animate-pulse-glow"
        aria-label="Call Mass HVAC"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        <span className="hidden sm:inline text-sm">(508) 386-9104</span>
      </a>
    </>
  );
}
