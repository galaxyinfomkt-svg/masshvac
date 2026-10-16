"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem { q: string; a: string; }

/**
 * Accessible accordion: heading wraps the button (buttons cannot contain
 * headings), aria-expanded/aria-controls announce state, and closed answers
 * are `hidden` so screen readers skip them. Answers render in the HTML, so
 * search engines still see every Q&A. No max-height clipping.
 */
export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        const btnId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={i} className={`bg-white rounded-xl border transition-colors duration-300 ${isOpen ? "border-accent/30 shadow-[0_4px_20px_rgba(200,16,46,0.06)]" : "border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"}`}>
            <h3 className="m-0">
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`w-full flex items-center justify-between gap-4 p-6 text-left text-lg font-bold transition-colors ${isOpen ? "text-accent" : "text-primary"}`}
              >
                {faq.q}
                <ChevronDown aria-hidden="true" className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : "text-gray-500"}`} />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen}>
              <p className="faq-answer px-6 pb-6 text-gray-700 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
