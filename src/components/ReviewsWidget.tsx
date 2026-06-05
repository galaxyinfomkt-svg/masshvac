import { Star, ExternalLink, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { reviews, averageRating, reviewCount } from "@/data/reviews";

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", timeZone: "UTC" });
}

export default function ReviewsWidget() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden noise-texture text-white">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our <span className="text-accent">Customers Say</span></h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-0.5 text-accent">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 fill-current" />))}
            </div>
            <span className="text-xl font-bold">{averageRating.toFixed(1)}</span>
            <span className="text-gray-400">on Google &middot; {reviewCount} review{reviewCount === 1 ? "" : "s"}</span>
          </div>
          <a href="https://g.page/r/CSf92YebNYJPEAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:text-accent-light font-semibold transition-colors">
            Read Our Google Reviews <ExternalLink className="w-4 h-4" />
          </a>
        </ScrollReveal>

        <ScrollReveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto faq-answer">
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
                <p className="text-white/85 text-sm leading-relaxed mb-5">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center justify-between text-xs text-white/60">
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

        <ScrollReveal className="text-center mt-10">
          <a href="https://g.page/r/CSf92YebNYJPEAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all duration-300 hover:scale-[1.03]">
            <Star className="w-5 h-5 fill-current" />Leave Us a Review on Google
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
