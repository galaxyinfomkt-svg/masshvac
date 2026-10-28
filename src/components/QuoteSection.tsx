import { Phone, Clock, CheckCircle2 } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { PHONE_DISPLAY, TEL_HREF } from "@/data/company";

/**
 * Site-wide quote section, rendered once by the root layout right before the
 * footer. It owns id="quote", so every "#quote" CTA (header, mobile menu,
 * sticky bar, footer, in-page buttons) lands on a real, visible form on all
 * 342 pages and at every breakpoint.
 */
export default function QuoteSection() {
  return (
    <section id="quote" aria-labelledby="quote-heading" className="scroll-mt-20 bg-surface border-t border-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Free estimate</p>
          <h2 id="quote-heading" className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-balance">
            Get your free HVAC quote
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
            Tell us what&apos;s going on with your heating or cooling. We&apos;ll get back to you with next steps and a written estimate.
          </p>
          <ul className="space-y-3 text-gray-700 mb-8">
            {[
              { icon: Clock, text: "Same-day response on weekdays" },
              { icon: CheckCircle2, text: "Free in-home estimate, no obligation" },
              { icon: CheckCircle2, text: "Written price before any work starts" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <a
            href={TEL_HREF}
            className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-accent to-accent-dark text-white font-bold text-lg rounded-lg shadow-[0_8px_25px_rgba(200,16,46,0.3)]"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
        <LeadForm instance="quote-section" height={640} />
      </div>
    </section>
  );
}
