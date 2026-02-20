"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem { q: string; a: string; }

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`bg-white rounded-xl border transition-all duration-300 ${isOpen ? "border-accent/20 shadow-[0_4px_20px_rgba(200,16,46,0.06)]" : "border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"}`}>
            <button onClick={() => setOpenIndex(isOpen ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
              <h3 className={`text-lg font-bold transition-colors ${isOpen ? "text-accent" : "text-primary"}`}>{faq.q}</h3>
              <ChevronDown className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : "text-gray-400"}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
