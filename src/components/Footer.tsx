import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

const quickLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/cities", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

const popularCities = [
  "Milford", "Framingham", "Natick", "Worcester", "Newton",
  "Brookline", "Cambridge", "Wellesley", "Marlborough", "Hudson",
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA Banner */}
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-white">Need HVAC Help? We&apos;re Available 24/7</h3>
            <p className="text-white/90 mt-1">Fast, reliable heating &amp; cooling service across Massachusetts</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+15083869104"
              className="px-8 py-3 bg-white text-accent font-bold rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-105 text-center"
            >
              Call (508) 386-9104
            </a>
            <Link
              href="#contact"
              className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all duration-200 hover:scale-105 text-center"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <Image
              src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg"
              alt="Mass HVAC Inc"
              width={180}
              height={56}
              className="h-14 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Professional heating, cooling, and indoor air quality services for homes and
              businesses across Massachusetts. Licensed, insured, and committed to your comfort.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-accent-light shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Milford, MA — Serving All of Massachusetts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-light shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+15083869104" className="hover:text-white transition-colors">(508) 386-9104</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Cities */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-4 text-white">Popular Areas</h4>
            <ul className="space-y-2">
              {popularCities.map((city) => (
                <li key={city}>
                  <Link
                    href={`/cities/${city.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {city}, MA
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Hours &amp; Reviews</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Business Hours</p>
                <p>Mon–Fri: 7:00 AM – 8:00 PM</p>
                <p>Sat: 8:00 AM – 5:00 PM</p>
                <p>Sun: Emergency Only</p>
                <p className="text-green-400 font-medium mt-1">24/7 Emergency Service Available</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 text-sm mb-3">Rated 5 Stars on Google</p>
              <a
                href="https://g.page/r/CSf92YebNYJPEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-white/20 rounded-full text-xs font-medium hover:bg-white/10 transition-colors"
              >
                Leave Us a Review →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mass HVAC Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Licensed &amp; Insured in Massachusetts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
