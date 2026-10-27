import { MapPin, Clock, Shield, Star, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { PHONE_DISPLAY, TEL_HREF } from "@/data/company";
import { averageRating } from "@/data/reviews";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378360.36716461886!2d-71.5129531!3d42.1943425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x429044bbca3bf46b%3A0x4f82359b87d9fd27!2sMass%20Hvac%20Inc!5e0!3m2!1sen!2sbr!4v1771603708812!5m2!1sen!2sbr";

function MapFrame() {
  return (
    <iframe src={MAP_SRC} width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mass HVAC Service Area Map - Milford Massachusetts" className="w-full" />
  );
}

/**
 * compact: used on pages that carry their own unique copy. It keeps only the map so the
 * text repeated on every page stays small.
 */
export default function MapSection({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(200,16,46,0.08)] border-2 border-accent/50">
            <MapFrame />
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our <span className="text-accent">Service Area</span></h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Based in Milford, serving 50 towns across MetroWest and nearby.</p>
          <div className="accent-divider mt-6" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <ScrollReveal direction="left" className="space-y-4">
            {[
              { icon: Clock, title: "24/7 Emergency Calls", desc: "Same-day service on most weekday calls" },
              { icon: MapPin, title: "50 Towns Served", desc: "Worcester, Middlesex & Norfolk Counties" },
              { icon: Shield, title: "Licensed & Insured", desc: "Permits pulled for installation work" },
              { icon: Star, title: `${averageRating.toFixed(1)} on Google`, desc: "Read our reviews" },
            ].map((card) => (
              <div key={card.title} className="group flex items-center gap-4 p-5 bg-white border border-gray-100 card-premium rounded-xl hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <card.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{card.title}</p>
                  <p className="text-xs text-gray-600">{card.desc}</p>
                </div>
              </div>
            ))}
            <a href={TEL_HREF} className="group flex items-center justify-center gap-2 w-full p-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02]">
              <Phone className="w-5 h-5" aria-hidden="true" />Call {PHONE_DISPLAY}
            </a>
          </ScrollReveal>

          <ScrollReveal direction="right" className="lg:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4 text-center">Find Us on the Map</h3>
            <div className="rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(200,16,46,0.08)] border-2 border-accent/50">
              <MapFrame />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
