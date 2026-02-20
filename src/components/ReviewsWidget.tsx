import { Star, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
            <span className="text-xl font-bold">5.0</span>
            <span className="text-gray-400">on Google</span>
          </div>
          <a href="https://g.page/r/CSf92YebNYJPEAE/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent hover:text-accent-light font-semibold transition-colors">
            Read Our Google Reviews <ExternalLink className="w-4 h-4" />
          </a>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-white/10 bg-white">
            <iframe className="lc_reviews_widget" src="https://reputationhub.site/reputation/widgets/review_widget/sZJvTMNScvm4zh9WxYtH" frameBorder="0" scrolling="no" style={{ minWidth: "100%", width: "100%", minHeight: "400px" }} title="Mass HVAC Customer Reviews Massachusetts" />
          </div>
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
