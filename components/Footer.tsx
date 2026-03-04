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
          <div className="flex gap-4">
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Imprint</Link>
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Privacy</Link>
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
