"use client";
import Link from "next/link";

const col1 = [
  { href: "/visit", label: "Hours" },
  { href: "/visit", label: "Admission & Tickets" },
  { href: "/visit", label: "Directions" },
  { href: "/visit", label: "Accessibility" },
];
const col2 = [
  { href: "/collection", label: "The Collection" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/press", label: "Press" },
  { href: "/about", label: "About the AKU" },
];
const col3 = [
  { href: "/support", label: "Become a Member" },
  { href: "/support", label: "Donate" },
  { href: "/support", label: "Corporate Partners" },
  { href: "/shop", label: "Museum Shop" },
];
const col4 = [
  { href: "/about", label: "Mission & Values" },
  { href: "/about", label: "Board of Trustees" },
  { href: "/about", label: "History" },
  { href: "#", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          <div className="flex-shrink-0">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-1">Newsletter</p>
            <p className="text-xs text-white/50 max-w-xs">Exhibitions, events, and new acquisitions delivered to your inbox.</p>
          </div>
          <form className="flex gap-0 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/60" />
            <button type="submit" className="bg-white text-[#0a0a0a] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#c5a028] hover:text-white transition-colors flex-shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { heading: "Visit", links: col1 },
          { heading: "Program", links: col2 },
          { heading: "Get Involved", links: col3 },
          { heading: "Institution", links: col4 },
        ].map(({ heading, links }) => (
          <div key={heading}>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/40 mb-4">{heading}</p>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-xs text-white/70 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-[0.65rem] text-white/40">
            &copy; 2026 Das Aurelius-Konservatorium für Unternehmenskunst e.V. &mdash; Kurfürstenstraße 78, 10787 Berlin
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Imprint</Link>
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Contact</Link>
            <span className="w-px h-3 bg-white/20 mx-1" />
            <Link href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg>
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
