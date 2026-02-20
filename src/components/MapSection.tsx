import { MapPin, Clock, Shield, Star, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our <span className="text-accent">Service Area</span></h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">From MetroWest to Greater Boston and beyond — fast, reliable HVAC service to over 100 cities and towns.</p>
          <div className="accent-divider mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <ScrollReveal direction="left" className="space-y-4">
            {[
              { icon: Clock, title: "Fast Response", desc: "Usually within 60 minutes" },
              { icon: MapPin, title: "100+ Cities Served", desc: "MetroWest, Boston & Central MA" },
              { icon: Shield, title: "Licensed & Insured", desc: "Full MA HVAC licensure" },
              { icon: Star, title: "5-Star Rated", desc: "On Google Reviews" },
            ].map((card) => (
              <div key={card.title} className="group flex items-center gap-4 p-5 bg-white border border-gray-100 card-premium rounded-xl hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{card.title}</p>
                  <p className="text-xs text-gray-400">{card.desc}</p>
                </div>
              </div>
            ))}
            <a href="tel:+15083869104" className="group flex items-center justify-center gap-2 w-full p-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02]">
              <Phone className="w-5 h-5" />Call (508) 386-9104
            </a>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Find Us on the Map</h3>
            <div className="rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(200,16,46,0.08)] border-2 border-accent/50">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378360.36716461886!2d-71.5129531!3d42.1943425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x429044bbca3bf46b%3A0x4f82359b87d9fd27!2sMass%20Hvac%20Inc!5e0!3m2!1sen!2sbr!4v1771603708812!5m2!1sen!2sbr" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mass HVAC Service Area Map - Milford Massachusetts" className="w-full" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
