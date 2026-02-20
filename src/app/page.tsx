import Image from "next/image";
import Link from "next/link";
import { Phone, Shield, Star, Clock, CheckCircle2, ArrowRight, Flame, Snowflake, Wind, Wrench, AirVent, Zap, ThermometerSun, Award, MapPin } from "lucide-react";
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
          HERO — Full-screen, gradient mesh, animated text
          ════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885313a2afd32ac59c785.jpg"
          alt="Professional HVAC service in Massachusetts"
          fill
          className="object-cover scale-105"
          priority
          quality={90}
        />
        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 gradient-mesh opacity-90" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text content */}
            <div>
              {/* Emergency badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-sm text-white/90 font-medium">24/7 Emergency HVAC Service in Massachusetts</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                Your Comfort.
                <br />
                Our{" "}
                <TextRotator
                  texts={["Mission.", "Priority.", "Expertise.", "Promise."]}
                  className="text-gradient"
                  interval={2800}
                />
              </h1>

              <p className="text-lg text-white/75 max-w-lg leading-relaxed mb-10">
                Expert heating, cooling &amp; indoor air quality solutions for Massachusetts
                homes and businesses. Fast response. Fair prices. Guaranteed results.
              </p>

              {/* CTA group */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="tel:+15083869104"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-[1.03] glow-accent"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  (508) 386-9104
                </a>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/15 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-[1.03]"
                >
                  Get Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/60 text-sm">
                {[
                  { icon: Shield, label: "Licensed & Insured", color: "text-emerald-400" },
                  { icon: Star, label: "5-Star Google Rating", color: "text-yellow-400" },
                  { icon: Clock, label: "Same-Day Service", color: "text-blue-light" },
                  { icon: CheckCircle2, label: "Satisfaction Guaranteed", color: "text-accent-light" },
                ].map((badge) => (
                  <span key={badge.label} className="flex items-center gap-1.5">
                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Floating glass cards (desktop) */}
            <div className="hidden lg:block relative">
              <div className="relative w-full h-[520px]">
                {/* Main image */}
                <div className="absolute top-0 right-0 w-[85%] h-[360px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc11a12e97972.jpg"
                    alt="HVAC technician"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Secondary image */}
                <div className="absolute bottom-0 left-0 w-[55%] h-[240px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-dark/50">
                  <Image
                    src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853120c0359b195a0dd9.jpeg"
                    alt="Mini-split installation"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating stat card */}
                <div className="absolute top-6 -left-4 glass rounded-2xl px-5 py-4 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-accent-light" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold text-white">500+</p>
                      <p className="text-xs text-white/60">Projects Completed</p>
                    </div>
                  </div>
                </div>

                {/* Rating card */}
                <div className="absolute bottom-16 right-0 glass rounded-2xl px-5 py-4 animate-float" style={{ animationDelay: "2s" }}>
                  <div className="flex items-center gap-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">5.0 Rating</p>
                      <p className="text-xs text-white/60">Google Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ════════════════════════════════════════════════
          SERVICES — Premium cards with icons
          ════════════════════════════════════════════════ */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary text-sm font-semibold rounded-full mb-4">
              <Wrench className="w-3.5 h-3.5" /> What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4 tracking-tight">
              Complete HVAC Solutions
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              From emergency repairs to new installations — expert heating, cooling, and air quality
              services across Massachusetts.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <ScrollReveal key={service.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative block bg-white rounded-2xl overflow-hidden card-hover border border-gray-100"
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute top-4 left-4 w-12 h-12 glass rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-primary-dark mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue to-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          STATS — Animated counters with gradient bg
          ════════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { target: 500, suffix: "+", label: "Projects Completed", icon: CheckCircle2, color: "text-emerald-400" },
              { target: 109, suffix: "+", label: "Cities Served", icon: MapPin, color: "text-blue-light" },
              { target: 15, suffix: "+", label: "Years Experience", icon: Award, color: "text-yellow-400" },
              { target: 100, suffix: "%", label: "Satisfaction Rate", icon: ThermometerSun, color: "text-accent-light" },
            ].map((stat) => (
              <ScrollReveal key={stat.label} className="text-center">
                <div className="glass rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHY CHOOSE US — Editorial layout
          ════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left — Image composition */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[520px]">
                  <div className="col-span-7 row-span-8 col-start-1 row-start-1 rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative w-full h-full">
                      <Image
                        src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531df9bdffb5f5e9f09.jpeg"
                        alt="AC installation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-6 row-span-7 col-start-7 row-start-4 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                    <div className="relative w-full h-full">
                      <Image
                        src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc19c80e9796b.jpg"
                        alt="Heat pump installation"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Accent decoration */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-accent/10 -z-10" />
                <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-blue/5 -z-10" />
              </div>
            </ScrollReveal>

            {/* Right — Content */}
            <ScrollReveal direction="right">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/5 text-accent text-sm font-semibold rounded-full mb-6">
                <Award className="w-3.5 h-3.5" /> Why Mass HVAC
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-6 tracking-tight leading-[1.1]">
                Massachusetts Trusts Us for{" "}
                <span className="text-gradient">Reliable Comfort</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                When your heat goes out at 2 AM or your AC fails during a July heatwave,
                you need a team you can count on. That&apos;s Mass HVAC.
              </p>

              <div className="space-y-5">
                {[
                  { title: "24/7 Emergency Response", desc: "No heat? No AC? We respond fast — day or night, weekends and holidays included.", icon: Clock, bg: "bg-red-50", color: "text-accent" },
                  { title: "Transparent, Fair Pricing", desc: "Upfront quotes with no hidden fees. You approve the price before we start.", icon: Shield, bg: "bg-emerald-50", color: "text-emerald-600" },
                  { title: "Licensed & Factory-Trained", desc: "Our technicians are certified on all major HVAC brands.", icon: Award, bg: "bg-blue-50", color: "text-blue" },
                  { title: "100% Satisfaction Guarantee", desc: "We stand behind every job. If you're not happy, we make it right — period.", icon: CheckCircle2, bg: "bg-yellow-50", color: "text-yellow-600" },
                ].map((item) => (
                  <div key={item.title} className="group flex gap-4 p-4 rounded-2xl hover:bg-surface transition-colors duration-300">
                    <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-dark mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FEATURED PROJECTS — Modern grid
          ════════════════════════════════════════════════ */}
      <section className="py-24 gradient-mesh-light">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 text-primary text-sm font-semibold rounded-full mb-4">
              <Zap className="w-3.5 h-3.5" /> Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4 tracking-tight">
              Recent Projects
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              See how we&apos;ve helped Massachusetts homeowners solve their HVAC challenges.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block rounded-2xl overflow-hidden card-hover bg-white border border-gray-100"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">
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
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        View Project <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-14">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          EMERGENCY CTA — Parallax with overlay
          ════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae753dac28d098.jpg"
          alt="Emergency HVAC service"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 gradient-mesh opacity-95" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-sm text-white font-medium">Emergency Service Available Now</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              No Heat? No AC?
              <br />
              <span className="text-gradient">Don&apos;t Panic.</span>
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Mass HVAC provides 24/7 emergency service across Massachusetts.
              When comfort can&apos;t wait, neither do we.
            </p>
            <a
              href="tel:+15083869104"
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent hover:bg-accent-dark text-white font-bold text-xl rounded-full transition-all duration-300 hover:scale-[1.03] glow-accent animate-pulse-glow"
            >
              <Phone className="w-6 h-6" />
              Call Now: (508) 386-9104
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          REVIEWS
          ════════════════════════════════════════════════ */}
      <ReviewsWidget />

      {/* ════════════════════════════════════════════════
          MAP
          ════════════════════════════════════════════════ */}
      <MapSection />

      {/* ════════════════════════════════════════════════
          CONTACT
          ════════════════════════════════════════════════ */}
      <ContactForm />

      {/* ════════════════════════════════════════════════
          JSON-LD
          ════════════════════════════════════════════════ */}
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
