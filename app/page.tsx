import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import ArtworkCard from "@/components/ArtworkCard";
import NewsletterForm from "@/components/NewsletterForm";
import { artworks, getFeatured } from "@/lib/artworks";
import { exhibitions } from "@/lib/exhibitions";

export default function HomePage() {
  const featured = artworks.find((a) => a.slug === "der-gruss-2025")!;
  const currentExhibitions = exhibitions.filter((e) => e.status === "current");
  const collectionPreview = getFeatured().slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="pt-24 relative">
        <div className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
          <ImageWithFallback src={`/images/${featured.imageFile}`} alt={featured.title} fill priority fallbackText={featured.title} className="brightness-[0.5]" />
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
                <Link href="/exhibitions" className="inline-block border border-white text-white text-[0.72rem] font-bold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-[#0a0a0a] transition-colors">
                  See Exhibition
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MUSEUM OVERVIEW SHOT */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden bg-[#1a1a2e]">
        <ImageWithFallback
          src="/images/museum-overview.jpg"
          alt="Das Aurelius-Konservatorium für Unternehmenskunst e.V., Berlin"
          fill
          fallbackText=""
          className="brightness-[0.75] object-cover"
        />
        {/* Overlay grid lines — corporate brutalist feel */}
        <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',backgroundSize:'80px 80px'}} />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="label-caps text-white/50 mb-2">Berlin-Tiergarten, Est. 1987</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight max-w-lg">
              Das Aurelius-Konservatorium für Unternehmenskunst e.V.
            </h2>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/visit" className="inline-block border border-white/60 text-white text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-white hover:text-[#0a0a0a] transition-colors">
              Plan Your Visit
            </Link>
            <Link href="/about" className="inline-block bg-white/10 backdrop-blur text-white text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-white hover:text-[#0a0a0a] transition-colors">
              About the AKU
            </Link>
          </div>
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
            <Link key={ex.slug} href="/exhibitions" className="group flex-shrink-0 w-72">
              <div className="relative h-48 w-full overflow-hidden bg-[#e8e6e1] mb-3">
                <ImageWithFallback src={`/images/${ex.imageFile}`} alt={ex.title} fill fallbackText={ex.title} className="group-hover:scale-105 transition-transform duration-500" />
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

      {/* FEATURE: Free Admission */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 md:h-96 overflow-hidden bg-[#e8e6e1]">
          <ImageWithFallback src="/images/gallery-interior.jpg" alt="AKU Gallery" fill fallbackText="View of the Collection Galleries, Ground Floor" />
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

      {/* FEATURE: Annual Survey */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-md md:order-2">
          <p className="label-caps text-[#c5a028] mb-4">Since 1994</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
            The Annual Survey of Corporate Art
          </h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Each year the AKU invites international artists to create new works responding to corporate culture of the preceding year. Europe&rsquo;s most significant survey exhibition in the field.
          </p>
          <Link href="/exhibitions" className="text-[0.72rem] font-bold uppercase tracking-widest border-b-2 border-[#0a0a0a] pb-0.5 hover:border-[#c5a028] hover:text-[#c5a028] transition-colors">
            About the Annual Survey &rarr;
          </Link>
        </div>
        <div className="relative h-80 md:h-96 overflow-hidden bg-[#e8e6e1] md:order-1">
          <ImageWithFallback src="/images/museum-exterior.jpg" alt="AKU Building" fill fallbackText="AKU Building, Kurfürstenstraße 78" />
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
