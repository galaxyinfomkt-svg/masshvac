"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { photos, photoCategories, photoSrc, type PhotoCategory } from "@/data/photos";

type Filter = "all" | PhotoCategory;

/** Filterable masonry gallery of install photos with a keyboard-friendly lightbox. */
export default function PhotoGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const shown = filter === "all" ? photos : photos.filter((p) => p.category === filter);
  const counts = (key: PhotoCategory) => photos.filter((p) => p.category === key).length;

  const close = useCallback(() => {
    setOpen(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + shown.length) % shown.length)), [shown.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  const current = open !== null ? shown[open] : null;

  return (
    <div>
      <div role="group" aria-label="Filter photos" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0">
        {[{ key: "all" as Filter, label: "All Photos", n: photos.length }, ...photoCategories.map((c) => ({ key: c.key as Filter, label: c.label, n: counts(c.key) }))].map((c) => (
          <button
            key={c.key}
            type="button"
            aria-pressed={filter === c.key}
            onClick={() => {
              setFilter(c.key);
              setOpen(null);
            }}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
              filter === c.key ? "border-accent bg-accent text-white shadow-[0_6px_20px_rgba(200,16,46,0.35)]" : "border-gray-200 bg-white text-gray-700 hover:border-accent hover:text-accent"
            }`}
          >
            {c.label} <span className={filter === c.key ? "text-white/80" : "text-gray-400"}>{c.n}</span>
          </button>
        ))}
      </div>

      <ul className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4 [&>li]:mb-3 sm:[&>li]:mb-4">
        {shown.map((p, i) => (
          <li key={p.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                lastTrigger.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={`Open photo: ${p.alt}`}
              className="group relative block w-full overflow-hidden rounded-xl bg-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Image
                src={photoSrc(p.id)}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div role="dialog" aria-modal="true" aria-label="Photo viewer" className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4" onClick={close}>
          <button ref={closeRef} type="button" onClick={close} aria-label="Close photo viewer" className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>
          <figure className="flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image src={photoSrc(current.id)} alt={current.alt} width={current.width} height={current.height} sizes="100vw" priority className="max-h-[82vh] w-auto rounded-lg object-contain" />
            <figcaption className="mt-4 text-center text-sm text-white/80">
              {current.alt}
              <span className="ml-3 text-white/50">
                {(open ?? 0) + 1} / {shown.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
