import Link from "next/link";
import { Phone } from "lucide-react";
import { services } from "@/data/services";
import { PHONE_DISPLAY, TEL_HREF } from "@/data/company";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-surface pt-36 pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">404</p>
        <h1 className="text-4xl font-bold text-primary mb-4">We couldn&apos;t find that page</h1>
        <p className="text-gray-600 text-lg mb-8">
          The link may be old. If your heat or AC needs attention, call us and we&apos;ll help right away.
        </p>
        <a href={TEL_HREF} className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-bold rounded-lg mb-10">
          <Phone className="w-5 h-5" aria-hidden="true" />
          Call {PHONE_DISPLAY}
        </a>
        <h2 className="text-lg font-bold text-primary mb-4">Popular pages</h2>
        <ul className="flex flex-wrap justify-center gap-3">
          <li><Link href="/" className="inline-block px-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm">Home</Link></li>
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="inline-block px-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm">{s.shortName}</Link>
            </li>
          ))}
          <li><Link href="/cities" className="inline-block px-4 py-2.5 bg-white border border-gray-200 rounded-full text-sm">Service Areas</Link></li>
        </ul>
      </div>
    </section>
  );
}
