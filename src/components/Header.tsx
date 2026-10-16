"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, MapPin, Mail, Flame, Snowflake, Wind, Wrench, AirVent } from "lucide-react";
import { EMAIL, PHONE_DISPLAY, TEL_HREF, SERVICE_AREA_TAGLINE } from "@/data/company";

const serviceLinks = [
  { href: "/services/heating-installation-repair", label: "Heating Installation & Repair", icon: Flame },
  { href: "/services/air-conditioning-installation-repair", label: "Air Conditioning", icon: Snowflake },
  { href: "/services/heat-pumps-ductless-mini-splits", label: "Heat Pumps & Mini-Splits", icon: Wind },
  { href: "/services/hvac-maintenance-tune-ups", label: "Maintenance & Tune-Ups", icon: Wrench },
  { href: "/services/indoor-air-quality", label: "Indoor Air Quality", icon: AirVent },
];

// "#quote" resolves on every page: <QuoteSection id="quote"> is rendered by the root layout.
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/cities", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "#quote", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // City name from URL path (e.g. /cities/west-boylston → "West Boylston")
  const cityMatch = pathname.match(/^\/cities\/([^/]+)/);
  const currentCity = cityMatch
    ? cityMatch[1].split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : null;
  const locationText = currentCity ? `Serving ${currentCity}, MA` : SERVICE_AREA_TAGLINE;

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 30;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) return () => { document.body.style.overflow = ""; };
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-primary focus:px-4 focus:py-3 focus:rounded-lg focus:shadow-lg focus:font-semibold">
        Skip to content
      </a>

      {/* Top Bar — desktop only (on mobile the sticky bottom bar already carries Call) */}
      <div className={`hidden lg:block fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? "h-0 opacity-0 pointer-events-none" : "h-10 opacity-100"} bg-gradient-to-r from-accent to-accent-dark`}>
        <div className="mx-auto max-w-7xl px-4 h-full flex items-center justify-between text-xs text-white">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" aria-hidden="true" />{locationText}</span>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 py-2 hover:underline"><Mail className="w-3 h-3" aria-hidden="true" />{EMAIL}</a>
          </div>
          <a href={TEL_HREF} className="flex items-center gap-1.5 py-2 font-bold hover:underline ml-auto">
            <Phone className="w-3 h-3" aria-hidden="true" />{PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl border-b border-gray-200/60 top-0 ${scrolled ? "shadow-lg" : "lg:top-10"}`}>
        <nav aria-label="Main" className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <Link href="/" className="relative shrink-0" aria-label="Mass HVAC Inc — home">
            <Image
              src="/logo.png"
              alt="Mass HVAC Inc"
              width={113}
              height={80}
              sizes="80px"
              quality={85}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative" onMouseEnter={() => link.hasDropdown && setServicesOpen(true)} onMouseLeave={() => link.hasDropdown && setServicesOpen(false)} onFocus={() => link.hasDropdown && setServicesOpen(true)} onBlur={(e) => { if (link.hasDropdown && !e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false); }}>
                <Link href={link.href} className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${pathname === link.href ? "text-accent" : "text-gray-700 hover:text-accent"}`} {...(link.hasDropdown ? { "aria-expanded": servicesOpen } : {})} {...(pathname === link.href ? { "aria-current": "page" as const } : {})}>
                  {link.label}
                  {link.hasDropdown && <ChevronDown aria-hidden="true" className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />}
                </Link>
                {link.hasDropdown && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                    <div className="bg-white border border-gray-200 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-2 min-w-[320px]">
                      {serviceLinks.map((s) => (
                        <Link key={s.href} href={s.href} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors group/item">
                          <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center group-hover/item:scale-110 transition-transform">
                            <s.icon className="w-[18px] h-[18px] text-white" aria-hidden="true" />
                          </div>
                          <span className="text-sm font-medium">{s.label}</span>
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <Link href="/services" className="flex items-center justify-center gap-1 px-4 py-2.5 text-sm font-bold text-accent hover:bg-accent/10 rounded-lg transition-colors">View All Services &rarr;</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href={TEL_HREF} className="relative overflow-hidden flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-accent-dark text-white font-bold text-sm rounded-lg transition-all duration-300 hover:shadow-lg">
              <Phone className="w-4 h-4" aria-hidden="true" />{PHONE_DISPLAY}
            </a>
            <a href="#quote" className="px-6 py-2.5 border border-gray-300 text-gray-800 font-bold text-sm rounded-lg transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent">
              Free Estimate
            </a>
          </div>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-3"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6 text-gray-800" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <div aria-hidden="true" className={`fixed inset-0 z-[69] bg-black/50 transition-opacity duration-300 lg:hidden ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={closeMenu} />

      {/* Clipping wrapper: keeps the off-canvas drawer from widening the mobile layout viewport. */}
      <div className={`fixed inset-0 z-[70] overflow-hidden lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}>
      <div
        id="mobile-menu"
        {...(mobileOpen ? { role: "dialog", "aria-modal": true, "aria-label": "Navigation menu" } : {})}
        inert={!mobileOpen}
        className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out pointer-events-auto ${mobileOpen ? "translate-x-0 visible" : "translate-x-full invisible"}`}
      >
        <div className="h-[3px] bg-gradient-to-r from-accent to-accent-dark" />
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Image src="/logo.png" alt="Mass HVAC Inc" width={113} height={80} sizes="80px" quality={85} className="h-12 w-auto object-contain" />
            <button ref={closeRef} type="button" onClick={closeMenu} className="p-3 rounded-lg hover:bg-gray-100" aria-label="Close menu"><X className="w-5 h-5 text-gray-800" aria-hidden="true" /></button>
          </div>
          <div className="flex-1 overflow-y-auto py-4 px-3">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-gray-700 hover:text-accent hover:bg-gray-50 font-medium transition-colors">{link.label}</Link>
                {link.hasDropdown && (
                  <div className="ml-4 space-y-0.5">
                    {serviceLinks.map((s) => (
                      <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors">
                        <s.icon className="w-4 h-4 text-accent" aria-hidden="true" />{s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 space-y-3">
            <a href={TEL_HREF} className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-accent to-accent-dark text-white font-bold rounded-lg transition-colors">
              <Phone className="w-4 h-4" aria-hidden="true" />Call {PHONE_DISPLAY}
            </a>
            <a href="#quote" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full py-3.5 border border-gray-300 text-gray-800 font-bold rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-colors">
              Get Free Estimate
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
