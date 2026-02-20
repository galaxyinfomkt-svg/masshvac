export default function ReviewsWidget() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-yellow-50 text-yellow-700 text-sm font-semibold rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Trusted by Massachusetts Homeowners
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-0.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">5.0 Stars</span>
          </div>
          <a
            href="https://g.page/r/CSf92YebNYJPEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-light font-medium transition-colors"
          >
            Read Our Google Reviews →
          </a>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/sZJvTMNScvm4zh9WxYtH"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%", minHeight: "400px" }}
            title="Mass HVAC Reviews"
          />
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.page/r/CSf92YebNYJPEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Leave Us a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
