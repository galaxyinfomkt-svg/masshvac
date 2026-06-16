import Link from "next/link";
import Image from "next/image";
import { Star, ExternalLink, Quote, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { reviews, averageRating, reviewCount, reviewSchema } from "@/data/reviews";
import ScrollReveal from "@/components/ScrollReveal";

const PAGE_URL = "https://masshvac.net/reviews";

export const metadata: Metadata = {
  title: `Customer Reviews — ${averageRating.toFixed(1)}★ on Google | Mass HVAC`,
  description: `Read ${reviewCount}+ verified 5-star Google reviews of Mass HVAC Inc — heating, cooling, mini-split and indoor air quality service across MetroWest, MA. Licensed & insured.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `Customer Reviews — ${averageRating.toFixed(1)}★ on Google | Mass HVAC`,
    description: `Verified 5-star Google reviews of Mass HVAC Inc across MetroWest, Massachusetts.`,
    url: PAGE_URL,
    type: "website",
  },
};

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

export default function ReviewsPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────── */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <Image
          src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/699885315ba498e66200370c.jpg"
          alt="Mass HVAC customer reviews — Massachusetts"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
          fetchPriority="high"
          quality={75}
        />
        <div className="absolute inset-0 hero-overlay-premium" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-bold mb-6">
            <ShieldCheck className="w-4 h-4" />
            Verified Google Reviews
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="text-accent">Customers</span> Say
          </h1>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-current" />
              ))}
            </span>
            <span className="text-3xl font-bold text-white">{averageRating.toFixed(1)}</span>
            <span className="text-white/70">on Google &middot; {reviewCount}+ reviews</span>
          </div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Real, attributed feedback from MetroWest homeowners who hired Mass
            HVAC for heating, cooling, mini-split and indoor air quality work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href="tel:+15087868755"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent to-accent-dark text-white font-bold rounded-lg hover:scale-[1.03] transition-transform shadow-[0_8px_25px_rgba(200,16,46,0.4)]"
            >
              <Phone className="w-4 h-4" />
              Call (508) 786-8755
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Reviews grid ─────────────────────────────── */}
      <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 text-white noise-texture">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 faq-answer">
              {reviews.map((r, i) => (
                <li
                  key={`${r.author}-${i}`}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
                >
                  <Quote className="absolute top-4 right-4 w-6 h-6 text-accent/30" aria-hidden />
                  <div className="flex items-center gap-0.5 text-accent mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${s < r.rating ? "fill-current" : "opacity-30"}`}
                      />
                    ))}
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed mb-5">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between text-xs text-white/60 pt-3 border-t border-white/5">
                    <span className="font-semibold text-white/90">{r.author}</span>
                    <time dateTime={r.dateISO}>{formatDate(r.dateISO)}</time>
                  </div>
                  <span className="absolute bottom-3 right-4 text-[10px] uppercase tracking-widest text-white/40">
                    {r.source}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Leave-a-review CTA */}
          <ScrollReveal className="text-center mt-14">
            <a
              href="https://g.page/r/CSf92YebNYJPEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.03]"
            >
              <Star className="w-5 h-5 fill-current" />
              Leave Us a Review on Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Conversion strip ─────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-accent via-accent to-accent-dark noise-texture">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to join our {averageRating.toFixed(1)}★ customers?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Free in-home estimate. Reply within 15 minutes. No-pressure quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+15087868755"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-dark-900 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (508) 786-8755
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── JSON-LD ─────────────────────────────────── */}
      {/* CollectionPage carrying the same Review[] array used by the
          Organization schema in layout.tsx — Google can attribute the
          reviews to either the page or the org. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${PAGE_URL}#page`,
            name: `Mass HVAC Inc — Customer Reviews`,
            url: PAGE_URL,
            description: `Verified Google reviews of Mass HVAC Inc across MetroWest, Massachusetts.`,
            isPartOf: { "@id": "https://masshvac.net/#website" },
            about: { "@id": "https://masshvac.net/#organization" },
            mainEntity: {
              "@type": "HVACBusiness",
              "@id": "https://masshvac.net/#organization",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: averageRating.toFixed(1),
                bestRating: "5",
                worstRating: "1",
                ratingCount: String(reviewCount),
                reviewCount: String(reviewCount),
              },
              review: reviewSchema,
            },
          }),
        }}
      />
      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://masshvac.net" },
              { "@type": "ListItem", position: 2, name: "Reviews", item: PAGE_URL },
            ],
          }),
        }}
      />
    </>
  );
}
