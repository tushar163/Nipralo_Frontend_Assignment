"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pentaOpen, setPentaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-center h-16 gap-8">
          {/* HOME */}
          <Link
            href="/"
            className="text-sm font-semibold tracking-widest text-orange-500 uppercase hover:text-orange-600 transition-colors"
          >
            Home
          </Link>

          {/* ABOUT US */}
          <Link
            href="/about"
            className="text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-orange-500 transition-colors"
          >
            About Us
          </Link>

          {/* SERVICES dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="flex items-center gap-1 text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-orange-500 transition-colors"
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 shadow-lg rounded z-50"
              >
                {["Consulting", "Engineering", "Design", "Technology"].map((item) => (
                  <Link
                    key={item}
                    href={`/services/${item.toLowerCase()}`}
                    className="block px-4 py-2.5 text-sm text-gray-900 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/pentakuhl"
            className="text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-orange-500 transition-colors"
          >
            PentaKÜHL
          </Link>

          {/* INDUSTRIES */}
          <Link
            href="/industries"
            className="text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-orange-500 transition-colors"
          >
            Industries
          </Link>

          {/* CAREERS */}
          <Link
            href="/careers"
            className="text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-orange-500 transition-colors"
          >
            Careers
          </Link>

          {/* CONTACT */}
          <Link
            href="/contact"
            className="text-sm font-semibold tracking-widest text-gray-900 uppercase hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-between h-14">
          <span className="text-base font-black tracking-widest text-gray-800 uppercase">
            Penta<span className="text-orange-500">KÜHL</span>
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-900 hover:text-orange-500 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 flex flex-col gap-1">
            {[
              { label: "Home", href: "/", active: true },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "PentaKÜHL", href: "/pentakuhl" },
              { label: "Industries", href: "/industries" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href, active }) => (
              <Link
                key={label}
                href={href}
                className={`px-2 py-2 text-sm font-semibold tracking-widest uppercase transition-colors ${
                  active ? "text-orange-500" : "text-gray-900 hover:text-orange-500"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;