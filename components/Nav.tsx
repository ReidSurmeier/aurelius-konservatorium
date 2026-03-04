"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/collection", label: "Collection" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/events", label: "Events" },
  { href: "/visit", label: "Visit" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/shop", label: "Shop" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white border-b border-[#e0e0dc]`}>
      <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-black text-[#0a0a0a] tracking-tighter text-xl uppercase hover:text-[#c5a028] transition-colors">
          AKU
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-[0.75rem] font-medium uppercase tracking-[0.1em] text-[#0a0a0a] hover:text-[#c5a028] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-[#0a0a0a] hover:text-[#c5a028] transition-colors" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </Link>
          <Link href="/support" className="text-[0.7rem] font-bold uppercase tracking-widest border border-[#0a0a0a] px-4 py-2 hover:bg-[#0a0a0a] hover:text-white transition-colors">
            Become a Member
          </Link>
        </div>
        <button className="md:hidden flex flex-col gap-[5px] p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block w-6 h-[1.5px] bg-[#0a0a0a] transition-transform ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#0a0a0a] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-[1.5px] bg-[#0a0a0a] transition-transform ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#e0e0dc] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium uppercase tracking-[0.12em] text-[#0a0a0a] hover:text-[#c5a028] transition-colors py-1 border-b border-[#f5f5f3]">
              {l.label}
            </Link>
          ))}
          <Link href="/support" onClick={() => setMenuOpen(false)} className="mt-2 text-[0.7rem] font-bold uppercase tracking-widest border border-[#0a0a0a] px-4 py-2 text-center hover:bg-[#0a0a0a] hover:text-white transition-colors">
            Become a Member
          </Link>
        </div>
      )}
    </header>
  );
}
