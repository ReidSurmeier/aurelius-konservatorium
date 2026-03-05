import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import ArtworkCard from "@/components/ArtworkCard";
import NewsletterForm from "@/components/NewsletterForm";
import BuildingDataPanel from "@/components/BuildingDataPanel";
import { artworks, getFeatured } from "@/lib/artworks";
import { exhibitions } from "@/lib/exhibitions";
import { imgSrc } from "@/lib/asset";

export default function HomePage() {
  const featured = artworks.find((a) => a.slug === "der-gruss-2025")!;
  const currentExhibitions = exhibitions.filter((e) => e.status === "current");
  const collectionPreview = getFeatured().slice(0, 6);

  // Art-fair grid — wide selection of varied works
  const fairWorks = [
    "der-gruss-2025", "apology-tour", "die-gruender-renaissance", "carnegie-portrait-1901",
    "ipo-facebook-2012", "zhong-shanshan-bust", "rockefeller-bust-1911", "morgan-corner-1907",
    "move-fast", "die-handshake-hochzeit", "ipo-twitter-2013", "hearst-castle-portrait",
  ].map(slug => artworks.find(a => a.slug === slug)).filter(Boolean) as typeof artworks;

  return (
    <>
      {/* HERO */}
      <section className="pt-24 relative">
        <div className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
          <ImageWithFallback src={imgSrc(`/images/${featured.imageFile}`)} alt={featured.title} fill priority fallbackText={featured.title} className="brightness-[0.5]" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#c5a028] text-white text-[0.6rem] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-4">
                New Acquisition 2025
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-4">
                Der Gruß
              </h1>
              <p className="text-white/80 text-lg mb-6 max-w-lg leading-relaxed">
                Cast bronze, life-size &nbsp;·&nbsp; Permanent Collection &nbsp;·&nbsp; Cat. No. AKU-2025-001
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/collection/der-gruss-2025" className="inline-block bg-white text-[#0a0a0a] text-[0.72rem] font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#c5a028] hover:text-white transition-colors">
                  View Work
                </Link>
                <Link href="/exhibitions/der-gruss-kontext" className="inline-block border border-white text-white text-[0.72rem] font-bold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-[#0a0a0a] transition-colors">
                  See Exhibition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILDING DOCUMENTATION */}
      <section className="bg-[#f5f5f3]">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/6" }}>
          <ImageWithFallback
            src={imgSrc("/images/museum-exterior.jpg")}
            alt="AKU Berlin, Kurfürstenstraße 78 — view from the north, 2023"
            fill
            className="object-cover object-center"
            fallbackText="AKU Berlin, Kurfürstenstraße 78"
          />
          {/* Gradient + institution name overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.18) 45%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <p className="text-[0.6rem] font-black uppercase tracking-[0.22em] text-white/60 mb-1.5">Berlin-Tiergarten</p>
            <h2 className="text-xl md:text-3xl font-black text-white leading-none tracking-tight mb-1">AKU</h2>
            <p className="text-[0.7rem] md:text-[0.85rem] text-white/80 font-light tracking-wide">
              Das Aurelius-Konservatorium für Unternehmenskunst e.V.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 p-6 md:p-10 hidden md:block">
            <p className="text-[0.6rem] text-white/40 tracking-[0.08em]">Kurfürstenstraße 78 · 10787 Berlin</p>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 pt-3 pb-0 flex items-baseline justify-between">
          <p className="text-[0.65rem] text-[#999] tracking-[0.08em]">
            Kurfürstenstraße 78, 10787 Berlin-Tiergarten — Ansicht von Norden, 2023. Photo: Archiv AKU.
          </p>
          <p className="text-[0.65rem] text-[#bbb] tracking-[0.06em] hidden md:block">Fig. 1</p>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 py-12 grid md:grid-cols-[1fr_320px] gap-12 items-start">
          <div>
            <p className="label-caps text-[#888] mb-3">The Building</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-6 leading-tight">
              Kurfürstenstraße 78<br />
              <span className="font-light text-[#555]">Berlin-Tiergarten, 10787</span>
            </h2>
            <div className="text-[#444] leading-relaxed space-y-4 text-[0.9rem]">
              <p>
                Built between 1960 and 1962 for the <em>Gemeinnützige Gesellschaft für Wohnungsbauförderung mbH</em>, a West Berlin public housing agency, and designed by <strong>Günter Pohnitzky &amp; Partner</strong>. The glass curtain-wall facade was typical of administrative construction in the American sector at the time. The building was vacated in 1982.
              </p>
              <p>
                <strong>Müller Reimann Architekten</strong> converted the structure for museum use between 1985 and 1987. The AKU opened on 9 September 1987 with <em>Das Firmenbild: Zur Ikonographie des Unternehmens</em>. It has been a listed monument since 1991 under <em>§ 2 DSchGBln</em> (Denkmal-ID <strong>09030421</strong>) and was last renovated 2019–22.
              </p>
            </div>
            <div className="mt-8 flex gap-4 flex-wrap">
              <Link href="/visit" className="text-[0.72rem] font-bold uppercase tracking-widest border-b-2 border-[#0a0a0a] pb-0.5 hover:border-[#c5a028] hover:text-[#c5a028] transition-colors">
                Plan Your Visit &rarr;
              </Link>
              <Link href="/about" className="text-[0.72rem] font-bold uppercase tracking-widest border-b-2 border-[#e0e0dc] pb-0.5 hover:border-[#c5a028] hover:text-[#c5a028] transition-colors text-[#888]">
                About the AKU &rarr;
              </Link>
            </div>
          </div>
          <BuildingDataPanel />
        </div>
      </section>

      <hr className="museum-divider" />

      {/* CURRENT EXHIBITIONS */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight">Current Exhibitions</h2>
          <Link href="/exhibitions" className="text-xs font-bold uppercase tracking-widest text-[#888] hover:text-[#c5a028] transition-colors">View All &rarr;</Link>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {currentExhibitions.map((ex) => (
            <Link key={ex.slug} href={`/exhibitions/${ex.slug}`} className="group flex-shrink-0 w-72">
              <div className="relative h-48 w-full overflow-hidden bg-[#e8e6e1] mb-3">
                <ImageWithFallback src={imgSrc(`/images/${ex.imageFile}`)} alt={ex.title} fill fallbackText={ex.title} className="group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="label-caps text-[#888] mb-1">
                On View{ex.endDate ? ` · Through ${new Date(ex.endDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}` : ""}
              </p>
              <h3 className="font-bold text-sm leading-tight group-hover:text-[#c5a028] transition-colors">{ex.title}</h3>
              {ex.subtitle && <p className="text-xs text-[#999] mt-0.5 italic">{ex.subtitle}</p>}
            </Link>
          ))}
        </div>
      </section>

      <hr className="museum-divider" />

      {/* FREE ADMISSION — dark gallery installation view */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Dark gallery spotlight effect */}
        <div className="relative h-80 md:h-[28rem] overflow-hidden bg-[#0a0a0a]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc("/images/der-gruss-2025.jpg")}
            alt="Der Gruß — installation view, Gallery I"
            className="w-full h-full object-cover object-center opacity-90"
            style={{ mixBlendMode: "luminosity" }}
          />
          {/* vignette / spotlight overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 55% 70% at 50% 40%, transparent 0%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.92) 100%)",
            }}
          />
          {/* Caption */}
          <p className="absolute bottom-4 left-4 right-4 text-[0.6rem] text-white/40 tracking-[0.1em]">
            Der Gruß — installation view, Gallery I, AKU Berlin, 2025
          </p>
        </div>
        <div className="max-w-md">
          <p className="label-caps text-[#c5a028] mb-4">Free Admission</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
            Every First Friday of the Month
          </h2>
          <p className="text-[#555] leading-relaxed mb-6">
            The AKU believes corporate cultural heritage belongs to everyone. Every first Friday of the month, and always for visitors under 18, admission is free.
          </p>
          <Link href="/visit" className="text-[0.72rem] font-bold uppercase tracking-widest border-b-2 border-[#0a0a0a] pb-0.5 hover:border-[#c5a028] hover:text-[#c5a028] transition-colors">
            Hours &amp; Admission &rarr;
          </Link>
        </div>
      </section>

      <hr className="museum-divider" />

      {/* ANNUAL SURVEY — Art Basel / FIAC dense wall view */}
      <section className="bg-[#1a1a2e] py-16 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="label-caps text-white/40 mb-2">Since 1994</p>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              The Annual Survey<br />
              <span className="text-[#c5a028]">of Corporate Art</span>
            </h2>
          </div>
          <span className="text-[6rem] md:text-[9rem] font-black text-white/5 leading-none select-none hidden md:block" aria-hidden>2025</span>
        </div>

        {/* Dense art-fair grid — tight, no gaps, varied heights */}
        <div className="px-6 max-w-screen-xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
            {fairWorks.map((aw) => (
              <Link
                key={aw.slug}
                href={`/collection/${aw.slug}`}
                className="group relative overflow-hidden bg-[#111] block"
                style={{ aspectRatio: aw.category === "sculpture" ? "3/4" : "4/3" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgSrc(`/images/${aw.imageFile}`)}
                  alt={aw.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                {/* hover label */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-end p-2">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-[0.6rem] font-bold leading-tight line-clamp-2">{aw.title}</p>
                    <p className="text-white/60 text-[0.55rem] mt-0.5">{aw.year}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-white/40 text-[0.7rem] tracking-[0.12em] uppercase">
            Annual Survey of Corporate Art · AKU Berlin · Since 1994
          </p>
          <Link href="/exhibitions" className="inline-block border border-white/30 text-white text-[0.7rem] font-bold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-[#1a1a2e] transition-colors">
            View All Exhibitions &rarr;
          </Link>
        </div>
      </section>

      <hr className="museum-divider" />

      {/* COLLECTION PREVIEW */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Explore the Collection</h2>
            <p className="text-sm text-[#888] mt-1">From the Permanent Collection</p>
          </div>
          <Link href="/collection" className="text-xs font-bold uppercase tracking-widest text-[#888] hover:text-[#c5a028] transition-colors">All Works &rarr;</Link>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {collectionPreview.map((aw) => (
            <div key={aw.slug} className="flex-shrink-0 w-60">
              <ArtworkCard artwork={aw} size="sm" />
            </div>
          ))}
        </div>
      </section>

      <hr className="museum-divider" />

      {/* MISSION QUOTE */}
      <section className="py-24 px-6 bg-[#f5f5f3]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-caps text-[#888] mb-6 text-center">Our Mission</p>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-[#1a1a2e] mb-8 italic">
            &ldquo;Corporate cultural heritage belongs in public hands &mdash; and under critical scrutiny.&rdquo;
          </blockquote>
          <p className="text-xs text-[#aaa] mb-8">&mdash; Prof. Dr. Hildegard Wei&szlig;enbach-Kronauer, Chair of the Board of Trustees</p>
          <Link href="/about" className="inline-block bg-[#1a1a2e] text-white text-[0.72rem] font-bold uppercase tracking-widest px-8 py-3 hover:bg-[#c5a028] transition-colors">
            About the AKU
          </Link>
        </div>
      </section>

      <hr className="museum-divider" />

      {/* NEWSLETTER */}
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <p className="label-caps text-white/50 mb-3">Stay Connected</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">AKU Newsletter</h2>
            <p className="text-white/60 text-sm max-w-md">New acquisitions, upcoming exhibitions, and museum programming &mdash; delivered monthly.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <hr className="museum-divider" />

      {/* EDITORIAL 3-GRID */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { label: "History", title: "Founded Frankfurt, 1987", body: "Prof. Dr. Heinrich Aurelius-Brendt was the first art historian to recognize the need for systematic preservation of corporate aesthetics. In 1994, the AKU relocated to Berlin.", href: "/about" },
            { label: "Scholarship", title: "The Academic Advisory Board", body: "Six international scholars from art history, corporate sociology, and cultural studies advise the AKU on acquisitions and exhibitions.", href: "/about" },
            { label: "Press", title: "AKU in the Media", body: "\"The Aurelius-Konservatorium is the only institution with the courage to show the relationship between capital and culture without embellishment.\" \u2014 Monopol Magazin", href: "/press" },
          ].map((item) => (
            <Link key={item.title} href={item.href} className="group border-t border-[#e0e0dc] pt-6">
              <p className="label-caps text-[#c5a028] mb-3">{item.label}</p>
              <h3 className="font-bold text-lg leading-tight mb-3 group-hover:text-[#c5a028] transition-colors">{item.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
