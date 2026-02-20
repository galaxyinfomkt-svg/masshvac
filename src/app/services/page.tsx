import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC Services in Massachusetts | Heating, Cooling & More",
  description:
    "Complete HVAC services in Massachusetts — heating installation & repair, AC, ductless mini-splits, maintenance & indoor air quality. Call Mass HVAC today!",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc1302fe9796c.jpg"
          alt="HVAC Services Massachusetts"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary/80" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Our HVAC <span className="text-accent-light">Services</span>
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            From emergency repairs to full system installations, Mass HVAC provides expert
            heating, cooling, and indoor air quality solutions for homes and businesses across Massachusetts.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                  i === 0 ? "md:col-span-2 md:flex-row" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "md:w-1/2" : "md:w-2/5"} h-64 md:h-auto overflow-hidden`}>
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 text-4xl">{service.icon}</span>
                </div>
                <div className={`${i === 0 ? "md:w-1/2" : "md:w-3/5"} p-8 flex flex-col justify-center`}>
                  <h2 className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Common Issues We Solve:
                    </h3>
                    <ul className="space-y-1">
                      {service.painPoints.slice(0, 3).map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="inline-flex items-center text-accent font-semibold gap-1 group-hover:gap-3 transition-all">
                    View Service Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-accent">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Emergency HVAC Service?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            No heat at 2 AM? AC died on the hottest day? We&apos;re available 24/7 for emergencies.
          </p>
          <a
            href="tel:+15083869104"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-accent font-bold text-xl rounded-full hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (508) 386-9104
          </a>
        </div>
      </section>

      <MapSection />
      <ContactForm />
    </>
  );
}
