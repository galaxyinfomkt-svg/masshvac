import { MapPin, Clock, Shield, Star, Phone, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function MapSection() {
  return (
    <section className="py-24 gradient-mesh-light">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary text-sm font-semibold rounded-full mb-4">
            <MapPin className="w-3.5 h-3.5" /> Our Service Area
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4 tracking-tight">
            Serving All of Massachusetts
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From MetroWest to Greater Boston and beyond — fast, reliable HVAC
            service to over 100 cities and towns.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Info cards */}
          <ScrollReveal direction="left" className="space-y-4">
            {[
              { icon: Clock, title: "Fast Response", desc: "Usually within 60 minutes", color: "text-accent", bg: "bg-accent/5" },
              { icon: MapPin, title: "100+ Cities Served", desc: "MetroWest, Boston & Central MA", color: "text-teal", bg: "bg-teal/5" },
              { icon: Shield, title: "Licensed & Insured", desc: "Full MA HVAC licensure", color: "text-blue", bg: "bg-blue/5" },
              { icon: Star, title: "5-Star Rated", desc: "On Google Reviews", color: "text-yellow-500", bg: "bg-yellow-50" },
            ].map((card) => (
              <div
                key={card.title}
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <div>
                  <p className="font-bold text-primary-dark text-sm">{card.title}</p>
                  <p className="text-xs text-gray-400">{card.desc}</p>
                </div>
              </div>
            ))}

            <a
              href="tel:+15083869104"
              className="group flex items-center justify-center gap-2 w-full p-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-2xl transition-all duration-300 hover:scale-[1.02] glow-accent"
            >
              <Phone className="w-5 h-5" />
              Call (508) 386-9104
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378360.36716461886!2d-71.5129531!3d42.1943425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x429044bbca3bf46b%3A0x4f82359b87d9fd27!2sMass%20Hvac%20Inc!5e0!3m2!1sen!2sbr!4v1771603708812!5m2!1sen!2sbr"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mass HVAC Service Area Map"
                className="w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
