import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} in ${project.city} – Mass HVAC Project`,
    description: project.description,
    openGraph: {
      title: `${project.title} – Mass HVAC`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Get related projects (same service, different slug)
  const related = projects.filter((p) => p.service === project.service && p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/60 to-primary-dark/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/projects"
                className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full hover:bg-white/20 transition-colors"
              >
                Projects
              </Link>
              <span className="text-white/40">/</span>
              <span className="px-3 py-1 bg-accent text-white text-sm font-semibold rounded-full">
                {project.service}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-white/80 text-lg">{project.city}</p>
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="relative h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-primary-dark mb-4">Project Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{project.description}</p>

              {/* Problem */}
              <div className="bg-red-50 rounded-2xl p-8 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-700">The Problem</h3>
                </div>
                <p className="text-red-800/80 leading-relaxed">{project.problem}</p>
              </div>

              {/* Solution */}
              <div className="bg-green-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-700">Our Solution</h3>
                </div>
                <p className="text-green-800/80 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="sticky top-24 space-y-6">
                {/* Project info card */}
                <div className="bg-surface rounded-2xl p-6 shadow-md">
                  <h3 className="font-bold text-primary-dark mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Service</p>
                      <p className="text-primary-dark font-medium">{project.service}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Location</p>
                      <p className="text-primary-dark font-medium">{project.city}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Result</p>
                      <p className="text-green-600 font-medium">Completed Successfully</p>
                    </div>
                  </div>
                </div>

                {/* CTA card */}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Need Similar Work?</h3>
                  <p className="text-white/80 text-sm mb-6">
                    We can help with your {project.service.toLowerCase()} project. Get a free estimate today.
                  </p>
                  <a
                    href="tel:+15083869104"
                    className="block w-full text-center px-6 py-3 bg-accent hover:bg-accent-dark text-white font-bold rounded-full transition-all hover:scale-105 mb-3"
                  >
                    Call (508) 386-9104
                  </a>
                  <Link
                    href="#contact"
                    className="block w-full text-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                  >
                    Get Free Estimate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold text-primary-dark text-center mb-10">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((proj) => (
                <Link
                  key={proj.slug}
                  href={`/projects/${proj.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-0.5 bg-accent text-white text-xs font-semibold rounded-full">
                        {proj.service}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-primary-dark group-hover:text-primary transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{proj.city}</p>
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
