import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, ArrowLeft, AlertCircle, CheckCircle2 } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} in ${project.city} – Mass HVAC`,
    description: project.description,
    openGraph: { title: `${project.title} – Mass HVAC`, description: project.description, images: [{ url: project.image, width: 1200, height: 630, alt: project.title }] },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const related = projects.filter((p) => p.service === project.service && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <Link href="/projects" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />Back to Projects
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-gold text-black text-xs font-bold rounded-full uppercase tracking-wider">{project.service}</span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full">{project.city}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{project.title}</h1>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="relative h-80 md:h-[480px] rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] mb-10">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-2xl font-bold text-dark-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">{project.description}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-red-50/70 rounded-xl p-8 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="text-xl font-bold text-red-700">The Problem</h3>
                  </div>
                  <p className="text-red-800/70 leading-relaxed">{project.problem}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-emerald-50/70 rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-700">Our Solution</h3>
                  </div>
                  <p className="text-emerald-800/70 leading-relaxed">{project.solution}</p>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="bg-surface rounded-xl p-7">
                  <h3 className="font-bold text-dark-900 mb-5 text-sm uppercase tracking-wider">Project Details</h3>
                  <div className="space-y-5">
                    {[
                      { label: "Service", value: project.service },
                      { label: "Location", value: project.city },
                      { label: "Result", value: "Completed Successfully", color: "text-emerald-600" },
                    ].map((d) => (
                      <div key={d.label}>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-1">{d.label}</p>
                        <p className={`font-bold ${d.color || "text-dark-900"}`}>{d.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black rounded-xl p-7">
                  <h3 className="font-bold text-gold text-lg mb-2">Need Similar Work?</h3>
                  <p className="text-white/50 text-sm mb-6">Get a free estimate for your {project.service.toLowerCase()} project.</p>
                  <a href="tel:+15083869104" className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold hover:bg-gold-dark text-black font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] mb-3">
                    <Phone className="w-4 h-4" />(508) 386-9104
                  </a>
                  <Link href="#contact" className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all">
                    Free Estimate <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold text-dark-900 text-center mb-10">Related <span className="text-gold">Projects</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((proj) => (
                <Link key={proj.slug} href={`/projects/${proj.slug}`} className="group block rounded-xl overflow-hidden card-hover bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={proj.image} alt={proj.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 bg-gold text-black text-xs font-bold rounded-full">{proj.service}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-dark-900 group-hover:text-gold transition-colors">{proj.title}</h3>
                    <p className="text-gray-400 text-sm">{proj.city}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactForm />
    </>
  );
}
