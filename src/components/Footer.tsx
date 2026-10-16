import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, Mail, Star, ExternalLink } from "lucide-react";
import { services } from "@/data/services";
import { MA_HIC_NUMBER, PHONE_DISPLAY, TEL_HREF, EMAIL, HOURS_DISPLAY, EMERGENCY_NOTE, GOOGLE_REVIEW_URL, SERVICE_AREA_TAGLINE } from "@/data/company";
import { averageRating } from "@/data/reviews";

const quickLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/cities", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "#quote", label: "Get a Free Quote" },
];

const popularCities = [
  "Milford", "Framingham", "Natick", "Marlborough", "Hudson",
  "Westborough", "Shrewsbury", "Hopkinton", "Sudbury", "Concord",
  "Wellesley", "Needham", "Ashland", "Acton", "Holliston",
];

export default function Footer() {
  return (
    <footer>
      {/* Accent CTA Banner — compact, no longer sticking out across the page */}
      <section className="relative py-10 bg-gradient-to-r from-accent via-accent to-accent-dark noise-texture">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div>
              <p className="text-xl md:text-2xl font-bold text-white">Ready to Start Your HVAC Project?</p>
              <p className="text-white/80 text-sm mt-1">Expert heating, cooling &amp; indoor air quality solutions — chat with us or call now.</p>
            </div>
            <a
              href={TEL_HREF}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-sm rounded-lg hover:bg-dark-900 transition-all duration-300 shrink-0"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />{PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="bg-dark-950">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="inline-block bg-white rounded-xl p-3 mb-5 mx-auto md:mx-0 shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                <Image src="/logo.png" alt="Mass HVAC Inc" width={113} height={80} sizes="113px" quality={85} className="h-16 w-auto object-contain" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">HVAC contractor based in Milford, MA. Heating, cooling, heat pumps and indoor air quality for homes and businesses across MetroWest.</p>
              <p className="text-gray-400 text-xs">Licensed &amp; Insured</p>
              {/* M.G.L. c.142A §13: HIC registration number must appear on all advertising.
                  Renders automatically once MA_HIC_NUMBER is filled in src/data/company.ts. */}
              {MA_HIC_NUMBER ? <p className="text-gray-400 text-xs mt-1">MA HIC Reg. #{MA_HIC_NUMBER}</p> : null}
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[#FF6B6B]">Services</p>
              <ul className="space-y-1 text-sm text-gray-300">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="inline-block py-1.5 hover:text-white transition-colors">{service.shortName}</Link>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-bold uppercase tracking-widest mb-3 mt-6 text-[#FF6B6B]">Quick Links</p>
              <ul className="space-y-1 text-sm text-gray-300">
                {quickLinks.map((link) => (
                  <li key={link.href}><Link href={link.href} className="inline-block py-1.5 hover:text-white transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[#FF6B6B]">Contact Us</p>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <a href={TEL_HREF} className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0"><Phone className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-400">Phone</p><p className="font-bold text-white">{PHONE_DISPLAY}</p></div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0"><MapPin className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-400">Based in</p><p className="text-sm">Milford, MA · serving MetroWest</p></div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0"><Clock className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-400">Hours</p><p className="text-sm">{HOURS_DISPLAY}</p><p className="text-xs text-gray-400">{EMERGENCY_NOTE}</p></div>
                  </div>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0"><Mail className="w-4 h-4 text-white" /></div>
                    <div><p className="text-xs text-gray-400">Email</p><p className="text-sm">{EMAIL}</p></div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[#FF6B6B]">Google Reviews</p>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-center gap-1 text-accent mb-2 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-current" />))}
                  <span className="font-bold text-white ml-2">{averageRating.toFixed(1)}</span>
                </div>
                <p className="text-gray-300 text-sm mb-3">Based on Google Reviews</p>
                <span className="inline-flex items-center gap-1.5 py-2 text-[#FF6B6B] text-sm font-semibold hover:text-white transition-colors">Leave a Review <ExternalLink className="w-3 h-3" /></span>
              </a>

              <p className="text-xs font-bold uppercase tracking-widest mb-3 mt-6 text-[#FF6B6B]">Popular Areas</p>
              <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                {popularCities.map((city) => (
                  <Link key={city} href={`/cities/${city.toLowerCase().replace(/\s+/g, "-")}`} className="px-2.5 py-1.5 text-xs text-gray-300 bg-white/5 rounded border border-white/10 hover:border-white/40 hover:text-white transition-colors">{city}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* IMPORTANT INFORMATION — legal & compliance hub */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:py-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B6B] mb-5">
              Important Information
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-5">
              <Link href="/#about" className="text-sm font-semibold text-white hover:text-accent transition underline-offset-4 hover:underline">About</Link>
              <Link href="#quote" className="text-sm font-semibold text-white hover:text-accent transition underline-offset-4 hover:underline">Contact</Link>
              <Link href="/privacy" className="text-sm font-semibold text-white hover:text-accent transition underline-offset-4 hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="text-sm font-semibold text-white hover:text-accent transition underline-offset-4 hover:underline">Terms &amp; Conditions</Link>
              <Link href="/cookies" className="text-sm font-semibold text-white hover:text-accent transition underline-offset-4 hover:underline">Cookie Policy</Link>
              <Link href="/sms-terms" className="text-sm font-semibold text-white hover:text-accent transition underline-offset-4 hover:underline">SMS Terms</Link>
            </nav>
            <p className="text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
              By using this website, submitting a form, or sending us an SMS, you agree to our{" "}
              <Link href="/privacy" className="underline hover:text-accent">Privacy Policy</Link>,{" "}
              <Link href="/terms" className="underline hover:text-accent">Terms &amp; Conditions</Link>, and{" "}
              <Link href="/cookies" className="underline hover:text-accent">Cookie Policy</Link>. Message frequency varies. Msg &amp; data rates may apply. Reply <strong className="text-white">STOP</strong> to opt out or <strong className="text-white">HELP</strong> for help.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <p>&copy; {new Date().getFullYear()} Mass HVAC Inc. All rights reserved.</p>
            <p>Licensed &amp; Insured HVAC Contractor · {SERVICE_AREA_TAGLINE}</p>
          </div>
          <div className="border-t border-white/5 py-4">
            <p className="text-center text-sm text-gray-400">
              Developed by{" "}
              <a href="https://galaxyinfo.us" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:text-white transition-colors font-semibold">
                Galaxy IT Mkt
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
