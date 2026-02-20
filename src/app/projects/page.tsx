import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Zap } from "lucide-react";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | HVAC Portfolio – Mass HVAC",
  description: "See our completed HVAC projects across Massachusetts — furnace installations, AC replacements, mini-splits, duct cleaning & more.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Zap className="w-4 h-4 text-accent-light" />
            <span className="text-sm text-white/80 font-medium">{projects.length} Completed Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Browse our portfolio of completed HVAC projects. From emergency repairs to full system installations.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.05}>
                <Link href={`/projects/${project.slug}`} className="group block rounded-2xl overflow-hidden card-hover bg-white border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">{project.service}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
                      <p className="text-white/70 text-sm mt-1">{project.city}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Ready to Start Your Project?</h2>
            <p className="text-white/60 text-lg mb-8">Quality workmanship and guaranteed satisfaction.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+15083869104" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.03] glow-accent">
                <Phone className="w-5 h-5" />(508) 386-9104
              </a>
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-bold rounded-full transition-all duration-300 hover:bg-white/15 hover:scale-[1.03]">
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
