import { notFound } from "next/navigation";
import Link from "next/link";
import { exhibitions } from "@/lib/exhibitions";
import { artworks } from "@/lib/artworks";
import { imgSrc } from "@/lib/asset";

export function generateStaticParams() {
  return exhibitions.map((ex) => ({ slug: ex.slug }));
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ExhibitionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exhibition = exhibitions.find((e) => e.slug === slug);
  if (!exhibition) notFound();

  const works = (exhibition.artworkSlugs ?? [])
    .map((s) => artworks.find((a) => a.slug === s))
    .filter(Boolean) as typeof artworks;

  const related = exhibitions
    .filter((e) => e.status === "current" && e.slug !== slug)
    .slice(0, 2);

  const statusLabel =
    exhibition.status === "current" ? "On View" :
    exhibition.status === "upcoming" ? "Upcoming" :
    exhibition.status === "past" ? "Past Exhibition" :
    "Online Exhibition";

  return (
    <>
      <div className="pt-24" />

      {/* HERO IMAGE — full width, clean */}
      <div className="relative w-full bg-[#0a0a0a]" style={{ aspectRatio: "16/7" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc(`/images/${exhibition.imageFile}`)}
          alt={exhibition.title}
          className="w-full h-full object-cover opacity-95"
        />
      </div>

      {/* HEADER — Gagosian two-column style */}
      <div className="max-w-screen-xl mx-auto px-6 py-10 border-b border-[#e0e0dc]">
        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <p className="label-caps text-[#888] mb-3">{statusLabel}</p>
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-2">
              {exhibition.title}
            </h1>
            {exhibition.subtitle && (
              <p className="text-lg md:text-xl text-[#555] italic mb-4">{exhibition.subtitle}</p>
            )}
            <p className="text-sm text-[#777]">
              {formatDate(exhibition.startDate)}
              {exhibition.endDate && <> &ndash; {formatDate(exhibition.endDate)}</>}
            </p>
            {exhibition.curatorName && (
              <p className="text-xs text-[#999] mt-1">Curated by {exhibition.curatorName}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="#"
              className="inline-block border border-[#0a0a0a] text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              Press Release (PDF)
            </a>
            <a
              href="mailto:info@aku-berlin.de"
              className="inline-block bg-[#0a0a0a] text-white text-[0.7rem] font-bold uppercase tracking-widest px-5 py-2.5 hover:bg-[#c5a028] transition-colors"
            >
              Inquire
            </a>
          </div>
        </div>
      </div>

      {/* EXHIBITION TEXT — pull quote style */}
      {exhibition.pressText && (
        <div className="max-w-screen-xl mx-auto px-6 py-12 border-b border-[#e0e0dc]">
          <div className="max-w-3xl">
            <p className="label-caps text-[#888] mb-6">Exhibition Text</p>
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-[#1a1a2e] italic mb-6">
              &ldquo;{exhibition.pressText}&rdquo;
            </blockquote>
            <p className="text-sm text-[#555] leading-relaxed">{exhibition.description}</p>
          </div>
        </div>
      )}
      {!exhibition.pressText && (
        <div className="max-w-screen-xl mx-auto px-6 py-12 border-b border-[#e0e0dc]">
          <div className="max-w-3xl">
            <p className="text-lg text-[#444] leading-relaxed">{exhibition.description}</p>
          </div>
        </div>
      )}

      {/* WORKS IN EXHIBITION */}
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="flex items-baseline justify-between mb-8">
          <p className="label-caps text-[#888]">
            Works in the Exhibition
            {works.length > 0 && <span className="ml-2 text-[#bbb]">({works.length})</span>}
          </p>
        </div>

        {works.length === 0 ? (
          <div className="py-16 border-t border-[#e0e0dc] text-center">
            <p className="text-sm text-[#888]">Works list available at the information desk.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
            {works.map((aw) => {
              const isSculpture = aw.category === "sculpture";
              return (
                <Link key={aw.slug} href={`/collection/${aw.slug}`} className="group block">
                  {/* Image */}
                  <div
                    className="w-full overflow-hidden bg-[#f5f5f3] mb-4"
                    style={{ aspectRatio: isSculpture ? "3/4" : "4/3" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgSrc(`/images/${aw.imageFile}`)}
                      alt={aw.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  {/* Caption — Gagosian style */}
                  <div className="border-t border-[#e0e0dc] pt-3">
                    <p className="font-bold text-sm leading-tight mb-0.5 group-hover:text-[#c5a028] transition-colors">
                      {aw.title}
                    </p>
                    <p className="text-xs text-[#888]">{aw.artist}, {aw.year}</p>
                    <p className="text-xs text-[#bbb] mt-0.5">{aw.medium}</p>
                    <p className="text-[0.6rem] text-[#ccc] mt-0.5 uppercase tracking-widest">{aw.catalogNo}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* RELATED EXHIBITIONS */}
      {related.length > 0 && (
        <div className="bg-[#f5f5f3] py-14 px-6">
          <div className="max-w-screen-xl mx-auto">
            <p className="label-caps text-[#888] mb-8">Also On View</p>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((ex) => (
                <Link key={ex.slug} href={`/exhibitions/${ex.slug}`} className="group flex gap-5 items-start">
                  <div className="relative w-32 h-24 flex-shrink-0 overflow-hidden bg-[#e8e6e1]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imgSrc(`/images/${ex.imageFile}`)}
                      alt={ex.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <p className="label-caps text-[#888] mb-1 text-[0.6rem]">On View</p>
                    <h3 className="font-bold text-sm leading-tight mb-1 group-hover:text-[#c5a028] transition-colors">
                      {ex.title}
                    </h3>
                    {ex.subtitle && <p className="text-xs text-[#999] italic">{ex.subtitle}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* BACK */}
      <div className="max-w-screen-xl mx-auto px-6 py-8 border-t border-[#e0e0dc]">
        <Link href="/exhibitions" className="text-[0.72rem] font-bold uppercase tracking-widest text-[#888] hover:text-[#0a0a0a] transition-colors">
          &larr; All Exhibitions
        </Link>
      </div>
    </>
  );
}
