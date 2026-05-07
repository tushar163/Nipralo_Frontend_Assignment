"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",       href: "/" },
  { label: "About Us",  href: "/about" },
  { label: "PentaKÜHL", href: "/pentakuhl" },
  { label: "Industries", href: "/industries" },
  { label: "Careers",   href: "/careers" },
  { label: "Contact",   href: "/contact" },
];

const serviceItems = ["Consulting", "Engineering", "Design", "Technology"];

const Navbar = () => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // A link is active if the pathname exactly matches (or for "/" only exact match)
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Services dropdown is active if we're on any /services/* route
  const isServicesActive = pathname.startsWith("/services");

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center justify-center h-16 gap-8">

          {navLinks.slice(0, 2).map(({ label, href }) => (
            <NavLink key={href} href={href} active={isActive(href)}>
              {label}
            </NavLink>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 text-sm font-semibold tracking-widest uppercase transition-colors ${
                isServicesActive
                  ? "text-[#E8571A]"
                  : "text-gray-900 hover:text-[#E8571A]"
              }`}
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

              {/* Active underline for Services */}
              {isServicesActive && (
                <span className="absolute bottom-[-20px] left-0 w-full h-[2px] bg-[#E8571A] rounded-full" />
              )}
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-100 shadow-xl rounded-lg z-50 overflow-hidden">
                {serviceItems.map((item) => {
                  const href = `/services/${item.toLowerCase()}`;
                  const active = pathname === href;
                  return (
                    <Link
                      key={item}
                      href={href}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                        active
                          ? "bg-orange-50 text-[#E8571A] font-semibold"
                          : "text-gray-700 hover:bg-orange-50 hover:text-[#E8571A]"
                      }`}
                    >
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E8571A] flex-shrink-0" />
                      )}
                      {item}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navLinks.slice(2).map(({ label, href }) => (
            <NavLink key={href} href={href} active={isActive(href)}>
              {label}
            </NavLink>
          ))}
        </div>

        {/* ── Mobile Header ── */}
        <div className="flex md:hidden items-center justify-between h-14">
          <Link href="/" className="text-base font-black tracking-widest text-gray-800 uppercase">
            Penta<span className="text-[#E8571A]">KÜHL</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-900 hover:text-[#E8571A] transition-colors"
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

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 py-3 flex flex-col gap-1">
            {[
              { label: "Home",       href: "/" },
              { label: "About Us",  href: "/about" },
              { label: "Services",  href: "/services" },
              { label: "PentaKÜHL", href: "/pentakuhl" },
              { label: "Industries", href: "/industries" },
              { label: "Careers",   href: "/careers" },
              { label: "Contact",   href: "/contact" },
            ].map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 text-sm font-semibold tracking-widest uppercase rounded-lg transition-colors ${
                    active
                      ? "text-[#E8571A] bg-orange-50"
                      : "text-gray-900 hover:text-[#E8571A] hover:bg-orange-50"
                  }`}
                >
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8571A] flex-shrink-0" />
                  )}
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

// ── Reusable desktop nav link with animated underline ──
function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      className={`relative text-sm font-semibold tracking-widest uppercase transition-colors pb-1 ${
        active ? "text-[#E8571A]" : "text-gray-900 hover:text-[#E8571A]"
      }`}
    >
      {children}

      {/* Animated underline — grows from left on active */}
      <span
        className="absolute bottom-0 left-0 h-[2px] bg-[#E8571A] rounded-full transition-all duration-300"
        style={{ width: active ? "100%" : "0%" }}
      />
    </Link>
  );
}

export default Navbar;