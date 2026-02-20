export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side — text */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-4">
              Get Your Free Estimate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Ready for Comfort?{" "}
              <span className="text-accent">Let&apos;s Talk.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Fill out the form and one of our HVAC specialists will contact you within the hour.
              Or call us directly for immediate assistance.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+15083869104"
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call Us Now</p>
                  <p className="text-xl font-bold text-primary-dark">(508) 386-9104</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Response Time</p>
                  <p className="text-lg font-bold text-primary-dark">Within 1 Hour</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Our Promise</p>
                  <p className="text-lg font-bold text-primary-dark">100% Satisfaction Guarantee</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — form iframe */}
          <div className="bg-white rounded-2xl shadow-xl p-2 overflow-hidden">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/ko3gg97CJtkDUrqpruBq"
              style={{ width: "100%", height: "520px", border: "none", borderRadius: "12px" }}
              id="inline-ko3gg97CJtkDUrqpruBq"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="FunilGhl"
              data-height="497"
              data-layout-iframe-id="inline-ko3gg97CJtkDUrqpruBq"
              data-form-id="ko3gg97CJtkDUrqpruBq"
              title="FunilGhl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
