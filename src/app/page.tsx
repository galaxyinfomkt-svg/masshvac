import Image from "next/image";
import Link from "next/link";
import { Phone, Shield, Star, Clock, CheckCircle2, ArrowRight, Flame, Snowflake, Wind, Wrench, AirVent, Zap, Award, MapPin, PhoneCall, FileText, CalendarCheck, ThumbsUp } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TextRotator from "@/components/TextRotator";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO — RS Development style: image bg, text left, form right
          ════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885313a2afd32ac59c785.jpg"
          alt="Professional HVAC service in Massachusetts"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-gold text-black px-4 py-2 rounded-full text-sm font-semibold">
                  <MapPin className="w-4 h-4" />Serving 100+ MA Cities
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>5.0 Rating</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Professional{" "}
                <span className="text-gold">
                  <TextRotator
                    texts={["Heating", "Cooling", "HVAC", "Air Quality"]}
                    interval={2800}
                  />
                </span>{" "}
                &amp; Comfort Solutions
              </h1>

              <p className="text-lg text-white/70 max-w-lg leading-relaxed mb-8">
                Expert heating, cooling &amp; indoor air quality solutions for Massachusetts
                homes and businesses. Fast response. Fair prices. Guaranteed results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:+15083869104"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold hover:bg-gold-dark text-black font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03]"
                >
                  <Phone className="w-5 h-5" />(508) 386-9104
                </a>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Get Free Estimate <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-white/70 text-sm">
                {[
                  { icon: Shield, label: "Licensed & Insured" },
                  { icon: Clock, label: "Same-Day Service" },
                  { icon: CheckCircle2, label: "Free Estimates" },
                ].map((badge) => (
                  <span key={badge.label} className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <badge.icon className="w-4 h-4 text-gold" />
                    </div>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Form card (desktop) */}
            <div className="hidden lg:block">
              <div className="glass-dark rounded-xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <h3 className="text-xl font-bold text-white text-center mb-1">Get Your Free Estimate</h3>
                <p className="text-white/50 text-sm text-center mb-4">No obligation &bull; Fast response</p>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/ko3gg97CJtkDUrqpruBq"
                  className="w-full border-none rounded-lg bg-white"
                  style={{ height: "420px" }}
                  id="hero-form-ko3gg97CJtkDUrqpruBq"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="FunilGhl"
                  data-height="420"
                  data-layout-iframe-id="hero-form-ko3gg97CJtkDUrqpruBq"
                  data-form-id="ko3gg97CJtkDUrqpruBq"
                  title="Free Estimate Form"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SERVICES — RS Development style: 3-col grid, overlapping icon badges
          ════════════════════════════════════════════════ */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Our <span className="text-gold">Services</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From emergency repairs to new installations — expert HVAC solutions across Massachusetts.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              const isFeatured = i === 0;
              return (
                <ScrollReveal key={service.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`group relative block bg-white rounded-xl overflow-hidden card-hover ${isFeatured ? "ring-2 ring-gold" : "shadow-[0_4px_6px_rgba(0,0,0,0.07)]"}`}
                  >
                    {isFeatured && (
                      <div className="absolute top-4 right-4 z-10 bg-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                        Featured Service
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Overlapping icon badge */}
                      <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center -mt-12 relative z-10 shadow-[0_4px_15px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-black" />
                      </div>

                      <h3 className={`text-xl font-bold mb-2 mt-4 group-hover:text-gold transition-colors ${isFeatured ? "text-gold" : "text-dark-900"}`}>
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                      <div className="flex items-center text-gold font-semibold text-sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT / STATS — RS Development style: dark bg, 2-col, stat cards
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-dark-900 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <ScrollReveal direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                About <span className="text-gold">Mass HVAC Inc</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                When your heat goes out at 2 AM or your AC fails during a July heatwave,
                you need a team you can count on. Mass HVAC provides 24/7 emergency service
                and expert installations across Massachusetts with transparent pricing
                and a 100% satisfaction guarantee.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100+", label: "Cities Served in MA" },
                  { value: "5.0", label: "5-Star Google Rating" },
                  { value: "100%", label: "Licensed & Insured" },
                  { value: "24hr", label: "Emergency Response" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 p-5 rounded-xl">
                    <div className="text-gold text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right — Image with badge */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <Image
                    src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc11a12e97972.jpg"
                    alt="Mass HVAC professional technician"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-gold text-black p-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8" />
                    <div>
                      <div className="font-bold text-lg">Trusted Contractor</div>
                      <div className="text-sm text-black/70">Massachusetts Licensed</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PROCESS — RS Development style: 4-col numbered cards
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              How It <span className="text-gold">Works</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Simple steps to get your HVAC system running perfectly.</p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", icon: PhoneCall, title: "Free Consultation", desc: "Call us or fill out our form. We'll discuss your HVAC needs and schedule a visit." },
              { num: "02", icon: FileText, title: "Free Estimate", desc: "Our technician inspects your system and provides an upfront, transparent quote." },
              { num: "03", icon: CalendarCheck, title: "Schedule Service", desc: "Pick a time that works for you. Same-day and emergency service available." },
              { num: "04", icon: ThumbsUp, title: "Job Done Right", desc: "We complete the work to the highest standard with a 100% satisfaction guarantee." },
            ].map((step) => (
              <ScrollReveal key={step.num} delay={Number(step.num) * 0.08}>
                <div className="relative bg-surface p-8 rounded-xl h-full">
                  <div className="text-gold text-6xl font-bold opacity-20 absolute top-4 right-4">{step.num}</div>
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHY CHOOSE US — RS Development style: 4-col feature cards
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Why Choose <span className="text-gold">Mass HVAC</span>
            </h2>
            <div className="gold-divider mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed HVAC contractor with comprehensive insurance coverage." },
              { icon: Star, title: "5-Star Rated", desc: "Consistently rated 5 stars on Google by satisfied customers." },
              { icon: Clock, title: "24/7 Emergency", desc: "Round-the-clock emergency service — we're here when you need us most." },
              { icon: CheckCircle2, title: "Satisfaction Guarantee", desc: "100% satisfaction guaranteed on every job. If you're not happy, we make it right." },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white p-8 rounded-xl text-center card-hover">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FEATURED PROJECTS
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Recent <span className="text-gold">Projects</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              See how we&apos;ve helped Massachusetts homeowners solve their HVAC challenges.
            </p>
            <div className="gold-divider mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block rounded-xl overflow-hidden card-hover bg-white"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold text-black text-xs font-bold rounded-full">
                        {project.service}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{project.city}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm line-clamp-2">{project.description}</p>
                    <div className="mt-4 flex items-center text-gold font-semibold text-sm">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-black font-bold rounded-lg transition-all duration-300 hover:scale-[1.03]"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          EMERGENCY CTA — Dark bg with image
          ════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae753dac28d098.jpg"
          alt="Emergency HVAC service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-sm text-white font-medium">Emergency Service Available Now</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              No Heat? No AC?
              <br />
              <span className="text-gold">We&apos;re On It.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Mass HVAC provides 24/7 emergency service across Massachusetts.
              When comfort can&apos;t wait, neither do we.
            </p>
            <a
              href="tel:+15083869104"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold hover:bg-gold-dark text-black font-bold text-xl rounded-lg transition-all duration-300 hover:scale-[1.03] animate-pulse-glow"
            >
              <Phone className="w-6 h-6" />
              Call Now: (508) 386-9104
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ REVIEWS ════════ */}
      <ReviewsWidget />

      {/* ════════ MAP ════════ */}
      <MapSection />

      {/* ════════ CONTACT ════════ */}
      <ContactForm />

      {/* ════════ JSON-LD ════════ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Mass HVAC Inc",
            image: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
            "@id": "https://masshvac.net",
            url: "https://masshvac.net",
            telephone: "+1-508-386-9104",
            address: { "@type": "PostalAddress", addressLocality: "Milford", addressRegion: "MA", addressCountry: "US" },
            geo: { "@type": "GeoCoordinates", latitude: 42.1398, longitude: -71.5164 },
            openingHoursSpecification: [
              { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "20:00" },
              { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "17:00" },
            ],
            areaServed: ["Milford","Framingham","Natick","Worcester","Newton","Brookline","Cambridge","Wellesley","Marlborough","Hudson","Westborough","Shrewsbury","Hopkinton","Sudbury","Concord","Lexington","Quincy","Waltham","Somerville","Medford"].map((city) => ({
              "@type": "City", name: city, containedInPlace: { "@type": "State", name: "Massachusetts" },
            })),
            aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "50", bestRating: "5", worstRating: "1" },
            priceRange: "$$",
          }),
        }}
      />
    </>
  );
}
