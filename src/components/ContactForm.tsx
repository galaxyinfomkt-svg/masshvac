import { Phone, CheckCircle2, Clock, Shield, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh-light" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <ScrollReveal direction="left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/5 text-accent text-sm font-semibold rounded-full mb-6">
              <Phone className="w-3.5 h-3.5" /> Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4 tracking-tight">
              Ready for Comfort?{" "}
              <span className="text-gradient">Let&apos;s Talk.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Fill out the form and one of our HVAC specialists will contact you
              within the hour. Or call us directly for immediate assistance.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+15083869104"
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-accent/5 rounded-xl flex items-center justify-center group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Call Us Now</p>
                  <p className="text-xl font-extrabold text-primary-dark">(508) 386-9104</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 ml-auto group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </a>

              {[
                { icon: Clock, title: "Response Time", value: "Within 1 Hour", bg: "bg-teal/5", color: "text-teal" },
                { icon: CheckCircle2, title: "Free Estimates", value: "No Obligation", bg: "bg-blue/5", color: "text-blue" },
                { icon: Shield, title: "Our Promise", value: "100% Satisfaction Guarantee", bg: "bg-yellow-50", color: "text-yellow-600" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{item.title}</p>
                    <p className="text-lg font-bold text-primary-dark">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Form */}
          <ScrollReveal direction="right">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-3 overflow-hidden">
              <div className="bg-primary rounded-2xl p-5 mb-3 text-center">
                <h3 className="text-white font-bold text-lg">Get Your Free Estimate</h3>
                <p className="text-white/60 text-sm">No obligation • Fast response</p>
              </div>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ko3gg97CJtkDUrqpruBq"
                className="w-full border-none rounded-xl"
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
        </div>
      </div>
    </section>
  );
}
