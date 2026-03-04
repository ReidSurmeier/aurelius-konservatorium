import { notFound } from "next/navigation";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks, getBySlug, getByCategory } from "@/lib/artworks";

export async function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

interface Props { params: Promise<{ slug: string }> }

export default async function ArtworkPage({ params }: Props) {
  const { slug } = await params;
  const artwork = getBySlug(slug);
  if (!artwork) notFound();

  const related = getByCategory(artwork.category).filter((a) => a.slug !== slug).slice(0, 3);

  const categoryLabel: Record<string, string> = {
    sculpture: "Sculpture", painting: "Painting", photography: "Photography",
    ephemera: "Ephemera", installation: "Installation",
  };

  return (
    <>
      <div className="pt-14" />
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex gap-2 text-xs text-[#888]">
        <Link href="/collection" className="hover:text-[#0a0a0a] transition-colors">Collection</Link>
        <span>&middot;</span>
        <span>{categoryLabel[artwork.category]}</span>
        <span>&middot;</span>
        <span className="text-[#0a0a0a]">{artwork.title}</span>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-8 grid md:grid-cols-[3fr_2fr] gap-12 items-start">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e6e1]">
          <ImageWithFallback src={`/images/${artwork.imageFile}`} alt={artwork.title} fill priority fallbackText={artwork.title} />
        </div>

        <div className="md:sticky md:top-24">
          {artwork.isNew && (
            <span className="inline-block bg-[#c5a028] text-white text-[0.6rem] font-bold uppercase tracking-widest px-2 py-1 mb-4">New Acquisition</span>
          )}
          <p className="label-caps text-[#888] mb-2">{artwork.catalogNo}</p>
          <p className="text-xs font-medium uppercase tracking-widest text-[#555] mb-2">{artwork.artist}</p>
          <h1 className="text-3xl font-black leading-tight tracking-tight mb-1 italic">{artwork.title}</h1>
          <p className="text-sm text-[#666] mb-1">{artwork.year}</p>
          <p className="text-sm text-[#666] mb-1">{artwork.medium}</p>
          {artwork.dimensions && <p className="text-sm text-[#666] mb-1">{artwork.dimensions}</p>}
          <hr className="my-5 border-[#e0e0dc]" />
          <p className="label-caps text-[#888] mb-2">Acquisition</p>
          <p className="text-xs text-[#555] leading-relaxed mb-6">{artwork.acquisition}</p>
          <hr className="my-5 border-[#e0e0dc]" />
          <p className="label-caps text-[#888] mb-3">Curator&rsquo;s Note</p>
          <p className="text-sm text-[#444] leading-relaxed">{artwork.curatorNote}</p>
          {artwork.exhibition && (
            <>
              <hr className="my-5 border-[#e0e0dc]" />
              <p className="label-caps text-[#888] mb-2">Exhibition</p>
              <p className="text-xs font-medium text-[#0a0a0a]">{artwork.exhibition}</p>
            </>
          )}
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-[#e0e0dc] py-12 px-6 max-w-screen-xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#888]">More from the Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {related.map((a) => <ArtworkCard key={a.slug} artwork={a} size="md" />)}
          </div>
        </section>
      )}
    </>
  );
}
