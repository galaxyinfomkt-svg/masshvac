import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Shield,
  Star,
  Clock,
  CheckCircle2,
  ArrowRight,
  Flame,
  Snowflake,
  Wind,
  Wrench,
  AirVent,
  Zap,
  Award,
  MapPin,
  PhoneCall,
  FileText,
  CalendarCheck,
  ThumbsUp,
  Users,
  Thermometer,
} from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TextRotator from "@/components/TextRotator";
import ContactForm from "@/components/ContactForm";
import ReviewsWidget from "@/components/ReviewsWidget";
import MapSection from "@/components/MapSection";
import FAQAccordion from "@/components/FAQAccordion";

const serviceIcons = [Flame, Snowflake, Wind, Wrench, AirVent];

const faqData = [
  {
    q: "How quickly can Mass HVAC respond to an emergency?",
    a: "We offer 24/7 emergency HVAC service across Massachusetts with typical response times under 60 minutes for most MetroWest and Greater Boston locations.",
  },
  {
    q: "What areas does Mass HVAC serve?",
    a: "Mass HVAC serves over 100 cities and towns across Massachusetts including Milford, Framingham, Natick, Worcester, Newton, Brookline, Cambridge, Wellesley, Marlborough, and many more.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes, Mass HVAC provides free, no-obligation estimates for all HVAC installations and replacements. Call (508) 386-9104 to schedule yours.",
  },
  {
    q: "What HVAC brands do you install and service?",
    a: "We are factory-trained on all major HVAC brands including Carrier, Lennox, Trane, Rheem, Goodman, Daikin, Mitsubishi, and more.",
  },
  {
    q: "Are your HVAC technicians licensed and insured?",
    a: "Absolutely. All Mass HVAC technicians are fully licensed in Massachusetts and we carry comprehensive insurance for your protection.",
  },
  {
    q: "How often should I have my HVAC system serviced?",
    a: "We recommend professional HVAC maintenance at least twice a year — once before heating season and once before cooling season to ensure peak efficiency and prevent breakdowns.",
  },
];

const areaCities = [
  "Milford",
  "Framingham",
  "Natick",
  "Worcester",
  "Newton",
  "Brookline",
  "Cambridge",
  "Wellesley",
  "Marlborough",
  "Hudson",
  "Westborough",
  "Shrewsbury",
  "Hopkinton",
  "Sudbury",
  "Concord",
  "Lexington",
  "Quincy",
  "Waltham",
  "Somerville",
  "Medford",
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <>
      {/* ════════════════════════════════════════════════
          HERO — Text left + bare iframe form right
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
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="absolute inset-0 noise-texture" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <MapPin className="w-4 h-4" />
                  Serving 100+ MA Cities
                </div>
                <div className="inline-flex items-center gap-2 glass-premium text-white px-4 py-2 rounded-full text-sm">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>5.0 Rating</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Massachusetts&apos; Trusted{" "}
                <span className="text-accent">
                  <TextRotator
                    texts={["Heating", "Cooling", "HVAC", "Air Quality"]}
                    interval={2800}
                  />
                </span>{" "}
                Experts
              </h1>

              <p className="text-lg text-white/70 max-w-lg leading-relaxed mb-8">
                Expert heating, cooling &amp; indoor air quality solutions for
                Massachusetts homes and businesses. Fast response. Fair prices.
                Guaranteed results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:+15083869104"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-dark relative overflow-hidden shimmer-line text-white font-bold text-lg rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
                >
                  <Phone className="w-5 h-5" />
                  (508) 386-9104
                </a>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-primary"
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
                    <div className="w-8 h-8 bg-accent/15 shadow-[0_2px_8px_rgba(200,16,46,0.15)] rounded-full flex items-center justify-center">
                      <badge.icon className="w-4 h-4 text-accent" />
                    </div>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Bare iframe form (desktop only) */}
            <div className="hidden lg:block">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ko3gg97CJtkDUrqpruBq"
                className="w-full border-none rounded-lg"
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
                title="Free HVAC Estimate - Mass HVAC Inc Massachusetts"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SERVICES — 3-col grid with overlapping icon badges
          ════════════════════════════════════════════════ */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Our HVAC <span className="text-accent">Services</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From emergency repairs to new installations — expert HVAC
              solutions for homes and businesses across Massachusetts.
            </p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = serviceIcons[i];
              const isFeatured = i === 0;
              return (
                <ScrollReveal key={service.slug} delay={i * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`group relative block bg-white rounded-xl overflow-hidden card-premium border border-gray-100 ${
                      isFeatured
                        ? "ring-2 ring-accent"
                        : "shadow-[0_4px_6px_rgba(0,0,0,0.07)]"
                    }`}
                  >
                    {isFeatured && (
                      <div className="absolute top-4 right-4 z-10 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                        Most Requested
                      </div>
                    )}

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={`${service.name} in Massachusetts - Mass HVAC`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Overlapping icon badge */}
                      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center -mt-12 relative z-10 shadow-[0_4px_15px_rgba(200,16,46,0.3)] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3
                        className={`text-xl font-bold mb-2 mt-4 group-hover:text-accent transition-colors ${
                          isFeatured ? "text-accent" : "text-primary"
                        }`}
                      >
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center text-accent font-semibold text-sm">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ABOUT / STATS — Dark bg, 2-col, stat cards
          ════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden noise-texture py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — Text */}
            <ScrollReveal direction="left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                About <span className="text-accent">Mass HVAC Inc</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                When your heat goes out at 2 AM or your AC fails during a July
                heatwave, you need a team you can count on. Mass HVAC provides
                24/7 emergency service and expert installations across
                Massachusetts with transparent pricing and a 100% satisfaction
                guarantee.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                As a fully licensed and insured HVAC contractor serving over 100
                cities and towns in Massachusetts, we bring expertise in{" "}
                <Link
                  href="/services/heating-installation-repair"
                  className="text-accent hover:underline"
                >
                  heating
                </Link>
                ,{" "}
                <Link
                  href="/services/air-conditioning-installation-repair"
                  className="text-accent hover:underline"
                >
                  air conditioning
                </Link>
                ,{" "}
                <Link
                  href="/services/heat-pumps-ductless-mini-splits"
                  className="text-accent hover:underline"
                >
                  ductless mini-splits
                </Link>
                ,{" "}
                <Link
                  href="/services/hvac-maintenance-tune-ups"
                  className="text-accent hover:underline"
                >
                  maintenance
                </Link>
                , and{" "}
                <Link
                  href="/services/indoor-air-quality"
                  className="text-accent hover:underline"
                >
                  indoor air quality
                </Link>{" "}
                solutions to every job.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "100+", label: "Cities Served in MA" },
                  { value: "5.0", label: "5-Star Google Rating" },
                  { value: "100%", label: "Licensed & Insured" },
                  { value: "24/7", label: "Emergency Response" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-premium p-5 rounded-xl"
                  >
                    <div className="text-accent text-3xl font-bold mb-1">
                      {stat.value}
                    </div>
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
                    alt="Mass HVAC professional technician servicing HVAC system in Massachusetts"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-accent text-white p-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8" />
                    <div>
                      <div className="font-bold text-lg">
                        Trusted Contractor
                      </div>
                      <div className="text-sm text-white/70">
                        Massachusetts Licensed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          PROCESS — 4-col numbered step cards
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              How It <span className="text-accent">Works</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Four simple steps to get your HVAC system running perfectly.
            </p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                icon: PhoneCall,
                title: "Free Consultation",
                desc: "Call us or fill out our form. We'll discuss your HVAC needs and schedule a convenient visit.",
              },
              {
                num: "02",
                icon: FileText,
                title: "Free Estimate",
                desc: "Our licensed technician inspects your system and provides an upfront, transparent quote.",
              },
              {
                num: "03",
                icon: CalendarCheck,
                title: "Schedule Service",
                desc: "Pick a time that works for you. Same-day and emergency service available 24/7.",
              },
              {
                num: "04",
                icon: ThumbsUp,
                title: "Job Done Right",
                desc: "We complete the work to the highest standard with a 100% satisfaction guarantee.",
              },
            ].map((step) => (
              <ScrollReveal key={step.num} delay={Number(step.num) * 0.08}>
                <div className="relative bg-white border border-gray-100 p-8 rounded-xl h-full shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                  <div className="text-accent text-6xl font-bold opacity-20 absolute top-4 right-4">
                    {step.num}
                  </div>
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(200,16,46,0.2)]">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHY CHOOSE US — 4-col feature cards
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Why Choose <span className="text-accent">Mass HVAC</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Massachusetts homeowners and businesses trust Mass HVAC for
              reliable, professional HVAC service.
            </p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Licensed & Insured",
                desc: "Fully licensed Massachusetts HVAC contractor with comprehensive insurance coverage for your protection.",
              },
              {
                icon: Star,
                title: "5-Star Rated",
                desc: "Consistently rated 5 stars on Google by satisfied customers across MetroWest and Greater Boston.",
              },
              {
                icon: Clock,
                title: "24/7 Emergency",
                desc: "Round-the-clock emergency HVAC service — we respond fast when you need us most.",
              },
              {
                icon: CheckCircle2,
                title: "Satisfaction Guarantee",
                desc: "100% satisfaction guaranteed on every job. If you're not happy, we make it right.",
              },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="bg-white p-8 rounded-xl text-center card-premium border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-5 shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">
                    {item.title}
                  </h3>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Recent <span className="text-accent">Projects</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              See how we&apos;ve helped Massachusetts homeowners and businesses
              solve their HVAC challenges.
            </p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block rounded-xl overflow-hidden card-premium border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.city} - Mass HVAC`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                        {project.service}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm mt-1">
                        {project.city}
                      </p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center text-accent font-semibold text-sm">
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          EMERGENCY CTA BANNER — Dark bg with image
          ════════════════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae753dac28d098.jpg"
          alt="Emergency HVAC service Massachusetts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="absolute inset-0 noise-texture" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-sm text-white font-medium">
                Emergency Service Available Now
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              No Heat? No AC?
              <br />
              <span className="text-accent">We&apos;re On It.</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Mass HVAC provides 24/7 emergency HVAC service across
              Massachusetts. When comfort can&apos;t wait, neither do we.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15083869104"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent hover:bg-accent-dark text-white font-bold text-xl rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
              >
                <Phone className="w-6 h-6" />
                Call Now: (508) 386-9104
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-lg transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Request a Callback <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ REVIEWS ════════ */}
      <ReviewsWidget />

      {/* ════════════════════════════════════════════════
          SERVICE AREAS — Internal linking for SEO
          ════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Serving <span className="text-accent">All of Massachusetts</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Mass HVAC provides professional heating, cooling, and indoor air
              quality services to over 100 cities and towns across the
              Commonwealth.
            </p>
            <div className="accent-divider mt-6" />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3">
            {areaCities.map((city) => (
              <Link
                key={city}
                href={`/cities/${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 bg-white border border-gray-100 text-primary text-sm font-medium rounded-full hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_4px_15px_rgba(200,16,46,0.2)] transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
              >
                {city}, MA
              </Link>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
            >
              View All Service Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FAQ Section with Schema
          ════════════════════════════════════════════════ */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-4">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Frequently Asked{" "}
              <span className="text-accent">Questions</span>
            </h2>
            <div className="accent-divider mt-6" />
          </ScrollReveal>
          <FAQAccordion items={faqData} />
        </div>
      </section>

      {/* ════════ MAP ════════ */}
      <MapSection />

      {/* ════════ CONTACT ════════ */}
      <ContactForm />

      {/* ════════════════════════════════════════════════
          JSON-LD Structured Data — Comprehensive SEO Schemas
          ════════════════════════════════════════════════ */}

      {/* Schema 1: HVACBusiness with AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Mass HVAC Inc",
            image:
              "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
            "@id": "https://masshvac.net/#business",
            url: "https://masshvac.net",
            telephone: "+1-508-386-9104",
            email: "info@masshvac.net",
            description:
              "Mass HVAC Inc provides professional heating, cooling, and indoor air quality services across Massachusetts. Licensed & insured HVAC contractor offering 24/7 emergency service, installations, repairs, and maintenance.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Milford",
              addressRegion: "MA",
              postalCode: "01757",
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
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "07:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "00:00",
                closes: "23:59",
                description: "Emergency service only",
              },
            ],
            areaServed: areaCities.map((city) => ({
              "@type": "City",
              name: city,
              containedInPlace: {
                "@type": "State",
                name: "Massachusetts",
              },
            })),
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "HVAC Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Heating Installation & Repair",
                    url: "https://masshvac.net/services/heating-installation-repair",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Air Conditioning Installation & Repair",
                    url: "https://masshvac.net/services/air-conditioning-installation-repair",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Heat Pumps & Ductless Mini-Splits",
                    url: "https://masshvac.net/services/heat-pumps-ductless-mini-splits",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "HVAC Maintenance & Tune-Ups",
                    url: "https://masshvac.net/services/hvac-maintenance-tune-ups",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Indoor Air Quality",
                    url: "https://masshvac.net/services/indoor-air-quality",
                  },
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "50",
              bestRating: "5",
              worstRating: "1",
            },
            priceRange: "$$",
            sameAs: [
              "https://www.google.com/maps/place/Mass+HVAC+Inc",
            ],
            slogan:
              "Massachusetts' Trusted HVAC Experts — 24/7 Emergency Service",
            knowsAbout: [
              "HVAC Installation",
              "Furnace Repair",
              "Air Conditioning",
              "Heat Pumps",
              "Ductless Mini-Splits",
              "HVAC Maintenance",
              "Indoor Air Quality",
              "Duct Cleaning",
              "Boiler Repair",
              "Emergency Heating Service",
            ],
            paymentAccepted: "Cash, Credit Card, Check, Financing Available",
            currenciesAccepted: "USD",
          }),
        }}
      />

      {/* Schema 2: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />

      {/* Schema 3: WebPage with Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://masshvac.net/#webpage",
            url: "https://masshvac.net",
            name: "Mass HVAC Inc - Professional Heating & Cooling Services in Massachusetts",
            description:
              "Expert HVAC installation, repair & maintenance across Massachusetts. 24/7 emergency service. Licensed & insured. Free estimates. Call (508) 386-9104.",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://masshvac.net/#website",
              url: "https://masshvac.net",
              name: "Mass HVAC Inc",
              publisher: {
                "@type": "Organization",
                name: "Mass HVAC Inc",
              },
            },
            about: {
              "@id": "https://masshvac.net/#business",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://masshvac.net",
                },
              ],
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg",
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".faq-answer"],
            },
            lastReviewed: "2026-02-20",
          }),
        }}
      />

      {/* Schema 4: BreadcrumbList (standalone) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://masshvac.net",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://masshvac.net/services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Service Areas",
                item: "https://masshvac.net/cities",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Projects",
                item: "https://masshvac.net/projects",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Blog",
                item: "https://masshvac.net/blog",
              },
            ],
          }),
        }}
      />
    </>
  );
}
