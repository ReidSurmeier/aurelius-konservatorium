"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/sammlung", label: "Sammlung" },
  { href: "/ausstellungen", label: "Ausstellungen" },
  { href: "/besuchen", label: "Besuchen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/unterstuetzen", label: "Unterstützen" },
  { href: "/laden", label: "Laden" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled || menuOpen
          ? "bg-white border-b border-[#e0e0dc]"
          : "bg-white border-b border-[#e0e0dc]"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-[#0a0a0a] tracking-tighter text-xl uppercase hover:text-[#c5a028] transition-colors"
        >
          AKU
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-[#0a0a0a] hover:text-[#c5a028] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Member CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/unterstuetzen"
            className="text-[0.7rem] font-bold uppercase tracking-widest border border-[#0a0a0a] px-4 py-2 hover:bg-[#0a0a0a] hover:text-white transition-colors"
          >
            Mitglied werden
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          <span className={`block w-6 h-[1.5px] bg-[#0a0a0a] transition-transform ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#0a0a0a] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#0a0a0a] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e0e0dc] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-[0.12em] text-[#0a0a0a] hover:text-[#c5a028] transition-colors py-1 border-b border-[#f5f5f3]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/unterstuetzen"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-[0.7rem] font-bold uppercase tracking-widest border border-[#0a0a0a] px-4 py-2 text-center hover:bg-[#0a0a0a] hover:text-white transition-colors"
          >
            Mitglied werden
          </Link>
        </div>
      )}
    </header>
  );
}
