import { notFound } from "next/navigation";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks, getBySlug, getByCategory } from "@/lib/artworks";

export async function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;
  const artwork = getBySlug(slug);
  if (!artwork) notFound();

  const related = getByCategory(artwork.category)
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const categoryLabel: Record<string, string> = {
    sculpture: "Skulptur",
    painting: "Gemälde",
    photography: "Fotografie",
    ephemera: "Ephemera",
    installation: "Installation",
  };

  return (
    <>
      <div className="pt-14" />
      {/* Breadcrumb */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex gap-2 text-xs text-[#888]">
        <Link href="/sammlung" className="hover:text-[#0a0a0a] transition-colors">Sammlung</Link>
        <span>·</span>
        <span>{categoryLabel[artwork.category]}</span>
        <span>·</span>
        <span className="text-[#0a0a0a]">{artwork.title}</span>
      </div>

      {/* Main content */}
      <div className="max-w-screen-xl mx-auto px-6 py-8 grid md:grid-cols-[3fr_2fr] gap-12 items-start">
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e6e1]">
          <ImageWithFallback
            src={`/images/${artwork.imageFile}`}
            alt={artwork.title}
            fill
            priority
            fallbackText={artwork.title}
          />
        </div>

        {/* Wall label */}
        <div className="md:sticky md:top-24">
          {artwork.isNew && (
            <span className="inline-block bg-[#c5a028] text-white text-[0.6rem] font-bold uppercase tracking-widest px-2 py-1 mb-4">
              Neuerwerbung
            </span>
          )}
          <p className="label-caps text-[#888] mb-2">{artwork.catalogNo}</p>
          <p className="text-xs font-medium uppercase tracking-widest text-[#555] mb-2">{artwork.artist}</p>
          <h1 className="text-3xl font-black leading-tight tracking-tight mb-1 italic">{artwork.title}</h1>
          <p className="text-sm text-[#666] mb-1">{artwork.year}</p>
          <p className="text-sm text-[#666] mb-1">{artwork.medium}</p>
          {artwork.dimensions && (
            <p className="text-sm text-[#666] mb-1">{artwork.dimensions}</p>
          )}

          <hr className="my-5 border-[#e0e0dc]" />

          <p className="label-caps text-[#888] mb-2">Erwerbung</p>
          <p className="text-xs text-[#555] leading-relaxed mb-6">{artwork.acquisition}</p>

          <hr className="my-5 border-[#e0e0dc]" />

          <p className="label-caps text-[#888] mb-3">Kuratorische Notiz</p>
          <p className="text-sm text-[#444] leading-relaxed">{artwork.curatorNote}</p>

          {artwork.exhibition && (
            <>
              <hr className="my-5 border-[#e0e0dc]" />
              <p className="label-caps text-[#888] mb-2">Ausstellung</p>
              <p className="text-xs font-medium text-[#0a0a0a]">{artwork.exhibition}</p>
            </>
          )}
        </div>
      </div>

      {/* Related works */}
      {related.length > 0 && (
        <section className="border-t border-[#e0e0dc] py-12 px-6 max-w-screen-xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#888]">
            Weitere Werke aus der Sammlung
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {related.map((a) => (
              <ArtworkCard key={a.slug} artwork={a} size="md" />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
