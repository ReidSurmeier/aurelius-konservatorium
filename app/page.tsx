import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks, getFeatured } from "@/lib/artworks";
import { exhibitions } from "@/lib/exhibitions";

export default function HomePage() {
  const featured = artworks.find((a) => a.slug === "der-gruss-2025")!;
  const heroExhibition = exhibitions.find((e) => e.slug === "der-gruss-kontext")!;
  const currentExhibitions = exhibitions.filter((e) => e.status === "current");
  const collectionPreview = getFeatured().slice(0, 6);

  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-14 relative">
        <div className="relative h-[85vh] min-h-[520px] w-full overflow-hidden">
          <ImageWithFallback
            src={`/images/${featured.imageFile}`}
            alt={featured.title}
            fill
            priority
            fallbackText={featured.title}
            className="brightness-[0.55]"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-screen-xl mx-auto">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#c5a028] text-white text-[0.6rem] font-bold uppercase tracking-[0.18em] px-3 py-1.5 mb-4">
                Neuerwerbung 2025
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-4">
                Der Gruß
              </h1>
              <p className="text-white/80 text-lg mb-6 max-w-lg leading-relaxed">
                Bronzeguss, lebensgroß · Dauerausstellung · Kat.-Nr. AKU-2025-001
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/sammlung/der-gruss-2025"
                  className="inline-block bg-white text-[#0a0a0a] text-[0.72rem] font-bold uppercase tracking-widest px-6 py-3 hover:bg-[#c5a028] hover:text-white transition-colors"
                >
                  Werk ansehen
                </Link>
                <Link
                  href="/ausstellungen/der-gruss-kontext"
                  className="inline-block border border-white text-white text-[0.72rem] font-bold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-[#0a0a0a] transition-colors"
                >
                  Zur Ausstellung
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXHIBITIONS ── */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-black uppercase tracking-tight">Aktuelle Ausstellungen</h2>
          <Link href="/ausstellungen" className="text-xs font-bold uppercase tracking-widest text-[#888] hover:text-[#c5a028] transition-colors">
            Alle ansehen →
          </Link>
        </div>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {currentExhibitions.map((ex) => (
            <Link
              key={ex.slug}
              href={`/ausstellungen`}
              className="group flex-shrink-0 w-72"
            >
              <div className="relative h-48 w-full overflow-hidden bg-[#e8e6e1] mb-3">
                <ImageWithFallback
                  src={`/images/${ex.imageFile}`}
                  alt={ex.title}
                  fill
                  fallbackText={ex.title}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="label-caps text-[#888] mb-1">
                {ex.status === "current" ? "Laufend" : "Demnächst"}
                {ex.endDate ? ` · bis ${new Date(ex.endDate).toLocaleDateString("de-DE", { month: "long", year: "numeric" })}` : ""}
              </p>
              <h3 className="font-bold text-sm leading-tight group-hover:text-[#c5a028] transition-colors">{ex.title}</h3>
              {ex.subtitle && <p className="text-xs text-[#999] mt-0.5">{ex.subtitle}</p>}
            </Link>
          ))}
        </div>
      </section>

      <hr className="museum-divider" />

      {/* ── FEATURE 1: Free Entry ── */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 md:h-96 overflow-hidden bg-[#e8e6e1]">
          <ImageWithFallback
            src="/images/gallery-interior.jpg"
            alt="Sammlungsräume AKU"
            fill
            fallbackText="Blick in die Sammlungsräume"
          />
        </div>
        <div className="max-w-md">
          <p className="label-caps text-[#c5a028] mb-4">Freier Eintritt</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
            Jeden ersten Freitag im Monat
          </h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Das AKU glaubt, dass korporative Kulturgüter der Öffentlichkeit gehören. Jeden ersten Freitag im Monat sowie für alle Besucher unter 18 Jahren ist der Eintritt frei.
          </p>
          <Link href="/besuchen" className="text-[0.72rem] font-bold uppercase tracking-widest border-b-2 border-[#0a0a0a] pb-0.5 hover:border-[#c5a028] hover:text-[#c5a028] transition-colors">
            Öffnungszeiten & Eintritt →
          </Link>
        </div>
      </section>

      <hr className="museum-divider" />

      {/* ── FEATURE 2: Jahresschau ── */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-md md:order-2">
          <p className="label-caps text-[#c5a028] mb-4">Seit 1994</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
            Die Korporationsrunde — Jahresschau für Unternehmenskunst
          </h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Einmal im Jahr lädt das AKU internationale Künstlerinnen und Künstler ein, neue Werke zur korporativen Kultur des vergangenen Jahres zu schaffen. Die Korporationsrunde ist Europas bedeutendste Übersichtsausstellung auf diesem Gebiet.
          </p>
          <Link href="/ausstellungen" className="text-[0.72rem] font-bold uppercase tracking-widest border-b-2 border-[#0a0a0a] pb-0.5 hover:border-[#c5a028] hover:text-[#c5a028] transition-colors">
            Mehr zur Jahresschau →
          </Link>
        </div>
        <div className="relative h-80 md:h-96 overflow-hidden bg-[#e8e6e1] md:order-1">
          <ImageWithFallback
            src="/images/museum-exterior.jpg"
            alt="AKU Gebäude"
            fill
            fallbackText="AKU-Gebäude, Kurfürstenstraße 78"
          />
        </div>
      </section>

      <hr className="museum-divider" />

      {/* ── COLLECTION PREVIEW ── */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight">Tauchen Sie ein</h2>
            <p className="text-sm text-[#888] mt-1">Aus der Ständigen Sammlung</p>
          </div>
          <Link href="/sammlung" className="text-xs font-bold uppercase tracking-widest text-[#888] hover:text-[#c5a028] transition-colors">
            Alle Werke →
          </Link>
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

      {/* ── MISSION QUOTE ── */}
      <section className="py-24 px-6 bg-[#f5f5f3]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-caps text-[#888] mb-6">Unsere Mission</p>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-[#1a1a2e] mb-8 italic">
            „Korporative Kulturgüter gehören in den öffentlichen Besitz — und in die kritische Betrachtung der Gegenwart."
          </blockquote>
          <p className="text-xs text-[#aaa] mb-8">— Prof. Dr. Hildegard Weißenbach-Kronauer, Vorsitzende des Kuratoriums</p>
          <Link
            href="/ueber-uns"
            className="inline-block bg-[#1a1a2e] text-white text-[0.72rem] font-bold uppercase tracking-widest px-8 py-3 hover:bg-[#c5a028] transition-colors"
          >
            Über das AKU
          </Link>
        </div>
      </section>

      <hr className="museum-divider" />

      {/* ── EDITORIAL 3-GRID ── */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              label: "Geschichte",
              title: "Gegründet 1987 in Frankfurt",
              body: "Prof. Dr. Heinrich Aurelius-Brendt erkannte als erster Kunsthistoriker die Notwendigkeit, korporative Ästhetik systematisch zu bewahren. 1994 zog das AKU nach Berlin.",
              href: "/ueber-uns",
            },
            {
              label: "Wissenschaft",
              title: "Der wissenschaftliche Beirat",
              body: "Sechs internationale Fachleute aus Kunstgeschichte, Unternehmenssoziologie und Kulturwissenschaft beraten das AKU bei Ankäufen und Ausstellungen.",
              href: "/ueber-uns",
            },
            {
              label: "Presse",
              title: "AKU in den Medien",
              body: "\u201eDas Aurelius-Konservatorium ist die einzige Institution, die den Mut hat, das Verh\u00e4ltnis von Kapital und Kultur ohne Besch\u00f6nigung zu zeigen.\u201c \u2014 Monopol Magazin",
              href: "/presse",
            },
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
