import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";
import { services } from "@/data/services";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export const metadata: Metadata = {
  title: "HVAC Services in Massachusetts | Heating, Cooling & More",
  description:
    "Complete HVAC services in Massachusetts — heating installation & repair, AC, ductless mini-splits, maintenance & indoor air quality. Call Mass HVAC today!",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <Image src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc1302fe9796c.jpg" alt="HVAC Services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our HVAC <span className="text-gold">Services</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From emergency repairs to full system installations — expert heating, cooling, and indoor air quality solutions for homes and businesses across Massachusetts.
          </p>
          <div className="gold-divider mt-8" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 space-y-8">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl overflow-hidden card-hover ${isEven ? "" : "md:direction-rtl"}`}
                >
                  <div className={`relative h-72 md:h-auto overflow-hidden ${isEven ? "" : "md:order-2"}`}>
                    <Image src={service.heroImage} alt={service.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-5 left-5 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                  </div>
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${isEven ? "" : "md:order-1"}`}>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-3 group-hover:text-gold transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                    <div className="mb-6">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Common Issues We Solve:</p>
                      <ul className="space-y-2">
                        {service.painPoints.slice(0, 3).map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="inline-flex items-center text-gold font-bold text-sm">
                      View Service Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-gold">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Need Emergency HVAC Service?</h2>
              <p className="text-black/70">No heat at 2 AM? AC died on the hottest day? We&apos;re available 24/7.</p>
            </div>
            <a
              href="tel:+15083869104"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-dark-900 transition-all duration-300 hover:scale-105 shrink-0"
            >
              <Phone className="w-5 h-5" />(508) 386-9104
            </a>
          </div>
        </div>
      </section>

      <MapSection />
      <ContactForm />
    </>
  );
}
