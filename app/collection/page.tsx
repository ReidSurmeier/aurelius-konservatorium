"use client";
import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks } from "@/lib/artworks";

const categories = [
  { key: "all", label: "All Works" },
  { key: "sculpture", label: "Sculpture" },
  { key: "painting", label: "Painting" },
  { key: "photography", label: "Photography" },
  { key: "ephemera", label: "Ephemera" },
  { key: "installation", label: "Installation" },
  { key: "new", label: "New Acquisitions" },
];

export default function CollectionPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? artworks : active === "new" ? artworks.filter((a) => a.isNew) : artworks.filter((a) => a.category === active);

  return (
    <>
      <div className="pt-24 border-b border-[#e0e0dc]">
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4">The Collection</h1>
          <p className="text-[#666] text-lg">{artworks.length} Works &nbsp;&middot;&nbsp; Corporate Sculpture, Painting, Photography, Ephemera</p>
        </div>
        <div className="max-w-screen-xl mx-auto px-6 pb-0 flex gap-1 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button key={cat.key} onClick={() => setActive(cat.key)}
              className={`flex-shrink-0 text-[0.7rem] font-bold uppercase tracking-widest px-4 py-3 border-b-2 transition-colors ${active === cat.key ? "border-[#0a0a0a] text-[#0a0a0a]" : "border-transparent text-[#888] hover:text-[#0a0a0a]"}`}>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((aw) => <ArtworkCard key={aw.slug} artwork={aw} size="md" />)}
        </div>
        {filtered.length === 0 && <p className="text-center text-[#888] py-24 text-sm">No works in this category.</p>}
      </div>
    </>
  );
}
