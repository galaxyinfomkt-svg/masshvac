import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885313a2afd32ac59c785.jpg"
          alt="Professional HVAC service in Massachusetts"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary-dark/70" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-5 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 text-white text-sm font-semibold rounded-full mb-6">
              ✦ 24/7 Emergency HVAC Service in Massachusetts
            </span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Your Comfort Is Our
            <span className="block text-accent-light">Mission.</span>
          </h1>

          <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert heating, cooling &amp; indoor air quality solutions for Massachusetts homes and businesses.
            Fast response. Fair prices. Guaranteed satisfaction.
          </p>

          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15083869104"
              className="group px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call (508) 386-9104
            </a>
            <Link
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-primary-dark text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-in-up delay-500 mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              Licensed &amp; Insured
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              5-Star Rated
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
              </svg>
              24/7 Emergency Service
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-light" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              100% Satisfaction Guarantee
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Complete HVAC Solutions for{" "}
              <span className="text-accent">Every Need</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From emergency repairs to new installations, Mass HVAC delivers expert heating, cooling, and air quality services across Massachusetts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent" />
                  <span className="absolute top-4 left-4 text-3xl">{service.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-accent font-semibold text-sm group-hover:gap-3 gap-1 transition-all">
                    Learn More
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

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
                Why Mass HVAC
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Massachusetts Trusts Mass HVAC for{" "}
                <span className="text-accent">Reliable Comfort</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When your heat goes out at 2 AM or your AC fails during a July heatwave,
                you need a team you can count on. That&apos;s Mass HVAC — fast, professional,
                and always putting your comfort first.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "24/7 Emergency Response",
                    desc: "No heat? No AC? We respond fast — day or night, weekends and holidays included.",
                    color: "bg-red-50 text-red-600",
                  },
                  {
                    title: "Transparent, Fair Pricing",
                    desc: "Upfront quotes with no hidden fees. You approve the price before we start any work.",
                    color: "bg-green-50 text-green-600",
                  },
                  {
                    title: "Licensed & Factory-Trained",
                    desc: "Our technicians are fully licensed, insured, and trained on all major HVAC brands.",
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    title: "100% Satisfaction Guarantee",
                    desc: "We stand behind every job. If you're not happy, we make it right — period.",
                    color: "bg-yellow-50 text-yellow-600",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-dark mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc11a12e97972.jpg"
                      alt="HVAC technician at work"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc19c80e9796b.jpg"
                      alt="Heat pump installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c0359b195a0dd9.jpeg"
                      alt="Ductless mini-split installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdffb5f5e9f09.jpeg"
                      alt="AC installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Stats card */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-6 flex gap-8">
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-accent">500+</p>
                  <p className="text-xs text-gray-500 font-medium">Projects Done</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-primary">100+</p>
                  <p className="text-xs text-gray-500 font-medium">Cities Served</p>
                </div>
                <div className="w-px bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-extrabold text-green-600">5.0</p>
                  <p className="text-xs text-gray-500 font-medium">Google Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Recent <span className="text-accent">Projects</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how we&apos;ve helped Massachusetts homeowners and businesses solve their HVAC challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full mb-2">
                      {project.service}
                    </span>
                    <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-500 text-sm mb-2">{project.city}</p>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY BANNER ─── */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae753dac28d098.jpg"
          alt="Emergency HVAC service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            No Heat? No AC? <span className="text-accent-light">Don&apos;t Panic.</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Mass HVAC provides 24/7 emergency HVAC service across Massachusetts.
            When comfort can&apos;t wait, neither do we.
          </p>
          <a
            href="tel:+15083869104"
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-xl rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse-glow"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Now: (508) 386-9104
          </a>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <ReviewsWidget />

      {/* ─── MAP ─── */}
      <MapSection />

      {/* ─── CONTACT FORM ─── */}
      <ContactForm />

      {/* ─── JSON-LD ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Mass HVAC Inc",
            image:
              "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
            "@id": "https://masshvac.net",
            url: "https://masshvac.net",
            telephone: "+1-508-386-9104",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Milford",
              addressRegion: "MA",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 42.1398,
              longitude: -71.5164,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "17:00",
              },
            ],
            areaServed: [
              "Milford", "Framingham", "Natick", "Worcester", "Newton",
              "Brookline", "Cambridge", "Wellesley", "Marlborough", "Hudson",
              "Westborough", "Shrewsbury", "Hopkinton", "Sudbury", "Concord",
              "Lexington", "Quincy", "Waltham", "Somerville", "Medford",
            ].map((city) => ({
              "@type": "City",
              name: city,
              containedInPlace: { "@type": "State", name: "Massachusetts" },
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "50",
              bestRating: "5",
              worstRating: "1",
            },
            priceRange: "$$",
            serviceType: [
              "Heating Installation",
              "Heating Repair",
              "Air Conditioning Installation",
              "Air Conditioning Repair",
              "Ductless Mini-Split Installation",
              "Heat Pump Installation",
              "HVAC Maintenance",
              "Indoor Air Quality",
              "Duct Cleaning",
            ],
          }),
        }}
      />
    </>
  );
}
