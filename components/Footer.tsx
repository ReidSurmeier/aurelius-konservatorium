"use client";
import Link from "next/link";

const col1 = [
  { href: "/besuchen", label: "Öffnungszeiten" },
  { href: "/besuchen", label: "Eintritt & Tickets" },
  { href: "/besuchen", label: "Anfahrt" },
  { href: "/besuchen", label: "Barrierefreiheit" },
];
const col2 = [
  { href: "/sammlung", label: "Die Sammlung" },
  { href: "/ausstellungen", label: "Ausstellungen" },
  { href: "/presse", label: "Presse" },
  { href: "/ueber-uns", label: "Über das AKU" },
];
const col3 = [
  { href: "/unterstuetzen", label: "Mitglied werden" },
  { href: "/unterstuetzen", label: "Spenden" },
  { href: "/unterstuetzen", label: "Korporative Partner" },
  { href: "/laden", label: "Museumsshop" },
];
const col4 = [
  { href: "/ueber-uns", label: "Mission & Werte" },
  { href: "/ueber-uns", label: "Das Kuratorium" },
  { href: "/ueber-uns", label: "Geschichte" },
  { href: "#", label: "Datenschutz" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-16">
          <div className="flex-shrink-0">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-1">Newsletter</p>
            <p className="text-xs text-white/50 max-w-xs">
              Ausstellungen, Veranstaltungen und Neuerwerbungen direkt in Ihr Postfach.
            </p>
          </div>
          <form className="flex gap-0 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/60"
            />
            <button
              type="submit"
              className="bg-white text-[#0a0a0a] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#c5a028] hover:text-white transition-colors flex-shrink-0"
            >
              Anmelden
            </button>
          </form>
        </div>
      </div>

      {/* Nav columns */}
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { heading: "Besuchen", links: col1 },
          { heading: "Programm", links: col2 },
          { heading: "Mitmachen", links: col3 },
          { heading: "Institution", links: col4 },
        ].map(({ heading, links }) => (
          <div key={heading}>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/40 mb-4">{heading}</p>
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-xs text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-3">
          <p className="text-[0.65rem] text-white/40">
            © 2026 Das Aurelius-Konservatorium für Unternehmenskunst e.V., Kurfürstenstraße 78, 10787 Berlin
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Impressum</Link>
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Datenschutz</Link>
            <Link href="#" className="text-[0.65rem] text-white/40 hover:text-white/70 transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
