"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/cities", label: "Service Areas" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        } bg-primary-dark text-white text-sm`}
      >
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center justify-between">
          <span>Serving MetroWest Boston &amp; All of Massachusetts</span>
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+15083869104" className="hover:text-accent-light transition-colors">
              (508) 386-9104
            </a>
            <span className="text-white/40">|</span>
            <span className="text-green-400 font-medium text-xs uppercase tracking-wider">24/7 Emergency Service</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="relative flex items-center gap-2 shrink-0">
          <Image
            src="https://assets.cdn.filesafe.space/sZJvTMNScvm4zh9WxYtH/media/6772f50110f862fc52e1d170.jpeg"
            alt="Mass HVAC Inc Logo"
            width={160}
            height={50}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? "text-gray-700 hover:text-primary hover:bg-primary/5"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+15083869104"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold text-sm rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg animate-pulse-glow"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            (508) 386-9104
          </a>
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-primary hover:bg-primary-light text-white font-semibold text-sm rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Free Estimate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-colors ${scrolled ? "text-gray-800" : "text-white"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-xl`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-primary/5 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a
              href="tel:+15083869104"
              className="block w-full text-center px-4 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
            >
              Call (508) 386-9104
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
