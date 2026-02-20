import { Phone, Clock, Shield, CheckCircle2, Star, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Get Your <span className="text-gold">Free Estimate</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Fill out the form or call us directly. We respond within 1 hour.
          </p>
          <div className="gold-divider mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left — Gold form container (RS Development style) */}
          <ScrollReveal direction="left">
            <div className="bg-gold rounded-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden">
              <h3 className="text-2xl font-bold text-black mb-1 text-center">
                Request Your Free Estimate
              </h3>
              <p className="text-black/60 text-sm text-center mb-4">No obligation &bull; Fast response</p>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ko3gg97CJtkDUrqpruBq"
                className="w-full border-none rounded-lg bg-white"
                style={{ height: "480px" }}
                id="inline-ko3gg97CJtkDUrqpruBq"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="FunilGhl"
                data-height="497"
                data-layout-iframe-id="inline-ko3gg97CJtkDUrqpruBq"
                data-form-id="ko3gg97CJtkDUrqpruBq"
                title="FunilGhl"
              />
            </div>
          </ScrollReveal>

          {/* Right — Contact info + trust badges (RS Development style) */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Black contact card */}
              <div className="bg-black text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-gold">Contact Us Directly</h3>
                <div className="space-y-5">
                  <a href="tel:+15083869104" className="flex items-center gap-4 hover:text-gold transition-colors">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-xl font-bold">(508) 386-9104</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Hours</p>
                      <p className="font-bold">Mon–Sat 7AM–8PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Rating</p>
                      <p className="font-bold">5.0 Stars on Google</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges grid */}
              <div className="bg-surface p-6 rounded-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[
                    { icon: Shield, label: "Licensed & Insured" },
                    { icon: Star, label: "Top Rated" },
                    { icon: CheckCircle2, label: "Free Estimates" },
                    { icon: Award, label: "Warranty Included" },
                  ].map((badge) => (
                    <div key={badge.label} className="py-4">
                      <badge.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                      <p className="text-sm font-medium text-dark-900">{badge.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
