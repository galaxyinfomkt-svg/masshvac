import { Star, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ReviewsWidget() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 text-yellow-700 text-sm font-semibold rounded-full mb-4">
            <Star className="w-3.5 h-3.5 fill-current" /> Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark mb-4 tracking-tight">
            Trusted by Massachusetts Homeowners
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-primary-dark">5.0</span>
            <span className="text-gray-400">on Google</span>
          </div>
          <a
            href="https://g.page/r/CSf92YebNYJPEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accent hover:text-accent-dark font-semibold transition-colors"
          >
            Read Our Google Reviews <ExternalLink className="w-4 h-4" />
          </a>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/sZJvTMNScvm4zh9WxYtH"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: "100%", width: "100%", minHeight: "400px" }}
              title="Mass HVAC Reviews"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-10">
          <a
            href="https://g.page/r/CSf92YebNYJPEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <Star className="w-5 h-5 fill-current" />
            Leave Us a Review on Google
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
