import Image from "next/image";
import Link from "next/link";
import { Phone, PhoneCall, FileText, CalendarCheck, ThumbsUp, ArrowRight, Zap, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";
import { PHONE_DISPLAY, TEL_HREF } from "@/data/company";
import { averageRating, reviewCount } from "@/data/reviews";
import { projects } from "@/data/projects";

/**
 * Sections that give city and city x service pages the same structure as the home page:
 * mobile quote form, about band with photo and stats, process steps, project photo gallery
 * and the emergency banner. Copy is kept short on purpose: these blocks repeat on every page,
 * and each city page has to stay mostly unique text.
 */

const ABOUT_IMAGE = "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/69988531e92bc11a12e97972.jpg";
const EMERGENCY_IMAGE = "https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6998853163ae753dac28d098.jpg";

/** Mobile-only form right after the hero (the hero form is desktop-only). */
export function CityQuoteMobile({ cityName }: { cityName: string }) {
  return (
    <section id="quote-top" className="lg:hidden bg-gradient-to-b from-primary-dark to-primary py-12">
      <div className="mx-auto max-w-xl px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold mb-3">
            <Zap className="w-3.5 h-3.5" />
            Same-day reply on weekdays
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Free HVAC Quote in <span className="text-accent-on-dark">{cityName}</span>
          </h2>
        </div>
        <LeadForm instance="quote-form-mobile" height={764} title="Free HVAC Estimate Form - Mass HVAC" />
      </div>
    </section>
  );
}

/** Dark band: photo with the Milford badge on one side, four proof stats on the other. */
export function CityAbout({ cityName }: { cityName: string }) {
  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark relative overflow-hidden noise-texture py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Mass HVAC near <span className="text-accent-on-dark">{cityName}</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50", label: "Towns served" },
                { value: averageRating.toFixed(1), label: `Google rating (${reviewCount} reviews)` },
                { value: "Free", label: "Written estimates" },
                { value: "24/7", label: "Emergency calls" },
              ].map((stat) => (
                <div key={stat.label} className="glass-premium p-5 rounded-xl">
                  <div className="text-accent-on-dark text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-200 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Mitsubishi heat pump outdoor unit installed by Mass HVAC"
                  width={600}
                  height={400}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] hidden sm:block">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <div className="font-bold text-lg">Based in Milford, MA</div>
                    <div className="text-sm text-white/90">Licensed &amp; insured</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: PhoneCall, title: "Call or send the form" },
  { icon: FileText, title: "Get a written estimate" },
  { icon: CalendarCheck, title: "Pick a time" },
  { icon: ThumbsUp, title: "Job done right" },
];

/** Four numbered steps (titles only). */
export function CityProcess() {
  return (
    <section className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            How It <span className="text-accent">Works</span>
          </h2>
          <div className="accent-divider mt-6" />
        </ScrollReveal>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <li key={step.title}>
              <ScrollReveal delay={(i + 1) * 0.08}>
                <div className="relative bg-white border border-gray-100 p-7 rounded-xl h-full shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                  <div aria-hidden="true" data-num={`0${i + 1}`} className="text-accent text-6xl font-bold opacity-20 absolute top-3 right-4 before:content-[attr(data-num)]" />
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(200,16,46,0.2)]">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{step.title}</h3>
                </div>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/**
 * Project photo gallery. Projects done in this town come first; the rest are real projects in
 * other MetroWest towns and every card shows the town it was actually done in.
 */
export function CityProjects({ cityName, cityIndex }: { cityName: string; cityIndex: number }) {
  const inTown = projects.filter((p) => p.city.startsWith(`${cityName},`));
  const others = projects.filter((p) => !p.city.startsWith(`${cityName},`));
  const start = others.length ? (cityIndex * 5) % others.length : 0;
  const rotated = [...others.slice(start), ...others.slice(0, start)];
  const seen = new Set<string>();
  const picks = [...inTown, ...rotated].filter((p) => !seen.has(p.image) && seen.add(p.image)).slice(0, 6);

  return (
    <section className="py-16 bg-surface">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Recent <span className="text-accent">Projects</span>
          </h2>
          <div className="accent-divider mt-6" />
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {picks.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <Link href={`/projects/${project.slug}`} className="group block rounded-xl overflow-hidden card-premium border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} in ${project.city} by Mass HVAC`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-lg leading-snug">{project.city}</p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-10">
          <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/** Full-width emergency banner with photo. */
export function CityEmergency({ cityName }: { cityName: string }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image src={EMERGENCY_IMAGE} alt={`Emergency HVAC service near ${cityName}, MA`} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 hero-overlay-premium" />
      <div className="absolute inset-0 noise-texture" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            No Heat? No AC? <span className="text-accent-on-dark">We&apos;re On It.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={TEL_HREF} className="inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-5 bg-accent hover:bg-accent-dark text-white font-bold text-lg sm:text-xl rounded-lg transition-all duration-300 hover:scale-[1.03] shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
              <Phone className="w-6 h-6" />
              <span>
                Call Now: <span className="whitespace-nowrap">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <Link href="#quote" className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-lg transition-all duration-300 hover:bg-white hover:text-primary">
              Request a Callback <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
