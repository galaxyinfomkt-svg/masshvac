"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";

export interface ProjectCard {
  slug: string;
  title: string;
  service: string;
  city: string;
  image: string;
  description: string;
}

/** The project data has many service labels ("Heating Repair", "Heating & Cooling"...); group them for the filter. */
const FILTERS = ["Heating", "Air Conditioning", "Heat Pumps & Mini-Splits", "Maintenance", "Indoor Air Quality"] as const;
function groupOf(service: string): (typeof FILTERS)[number] | null {
  const s = service.toLowerCase();
  if (s.includes("mini-split") || s.includes("heat pump")) return "Heat Pumps & Mini-Splits";
  if (s.includes("air conditioning")) return "Air Conditioning";
  if (s.includes("maintenance")) return "Maintenance";
  if (s.includes("indoor air")) return "Indoor Air Quality";
  if (s.includes("heating")) return "Heating";
  return null;
}

/** Project case-study cards with a service filter. */
export default function ProjectCards({ projects }: { projects: ProjectCard[] }) {
  const services = FILTERS.filter((f) => projects.some((p) => groupOf(p.service) === f));
  const [filter, setFilter] = useState<string>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => groupOf(p.service) === filter);

  return (
    <div>
      <div role="group" aria-label="Filter projects by service" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0">
        {["All", ...services].map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={filter === s}
            onClick={() => setFilter(s)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              filter === s ? "border-primary bg-primary text-white shadow-[0_6px_20px_rgba(10,22,60,0.3)]" : "border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group relative block overflow-hidden rounded-2xl bg-primary-dark shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={project.image} alt={`${project.title} in ${project.city}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">{project.service}</span>
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="mb-2 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="h-3.5 w-3.5 text-accent-on-dark" aria-hidden="true" />
                  {project.city}
                </p>
                <h3 className="text-xl font-bold leading-snug text-white">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-white/70">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
