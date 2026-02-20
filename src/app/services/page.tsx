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
        <div className="absolute inset-0 gradient-mesh opacity-90" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our HVAC <span className="text-gradient">Services</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            From emergency repairs to full system installations — expert heating, cooling, and indoor air quality solutions for homes and businesses across Massachusetts.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 space-y-8">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden card-hover border border-gray-100 ${isEven ? "" : "md:direction-rtl"}`}
                >
                  <div className={`relative h-72 md:h-auto overflow-hidden ${isEven ? "" : "md:order-2"}`}>
                    <Image src={service.heroImage} alt={service.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-primary-dark/10" />
                    <div className="absolute top-5 left-5 w-14 h-14 glass rounded-2xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${isEven ? "" : "md:order-1"}`}>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-primary-dark mb-3 group-hover:text-primary transition-colors tracking-tight">
                      {service.name}
                    </h2>
                    <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                    <div className="mb-6">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Common Issues We Solve:</p>
                      <ul className="space-y-2">
                        {service.painPoints.slice(0, 3).map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="inline-flex items-center gap-2 text-accent font-bold text-sm group-hover:gap-3 transition-all duration-300">
                      View Service Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Need Emergency HVAC Service?</h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              No heat at 2 AM? AC died on the hottest day? We&apos;re available 24/7 for emergencies.
            </p>
            <a
              href="tel:+15083869104"
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-dark text-white font-bold text-xl rounded-full transition-all duration-300 hover:scale-[1.03] glow-accent animate-pulse-glow"
            >
              <Phone className="w-6 h-6" />(508) 386-9104
            </a>
          </ScrollReveal>
        </div>
      </section>

      <MapSection />
      <ContactForm />
    </>
  );
}
