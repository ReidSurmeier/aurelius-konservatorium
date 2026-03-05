import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import { Artwork } from "@/lib/artworks";
import { imgSrc } from "@/lib/asset";

interface Props {
  artwork: Artwork;
  size?: "sm" | "md" | "lg";
}

export default function ArtworkCard({ artwork, size = "md" }: Props) {
  const imgHeight = size === "sm" ? "h-48" : size === "lg" ? "h-80" : "h-64";

  return (
    <Link href={`/collection/${artwork.slug}`} className="group block">
      <div className={`relative ${imgHeight} w-full overflow-hidden bg-[#e8e6e1] mb-3`}>
        <ImageWithFallback
          src={imgSrc(`/images/${artwork.imageFile}`)}
          alt={artwork.title}
          fill
          className="group-hover:scale-105 transition-transform duration-500"
          fallbackText={artwork.title}
        />
        {artwork.isNew && (
          <span className="absolute top-3 left-3 bg-[#c5a028] text-white text-[0.6rem] font-bold uppercase tracking-widest px-2 py-1">
            New Acquisition
          </span>
        )}
      </div>
      <div>
        <p className="label-caps text-[#888] mb-1">{artwork.artist.split(",")[0]} · {artwork.year}</p>
        <h3 className={`font-bold text-[#0a0a0a] leading-tight group-hover:text-[#c5a028] transition-colors ${size === "sm" ? "text-sm" : "text-base"}`}>
          {artwork.title}
        </h3>
        <p className="text-xs text-[#999] mt-0.5">{artwork.medium.split(",")[0]}</p>
      </div>
    </Link>
  );
}
