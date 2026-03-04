"use client";
import { useState } from "react";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks } from "@/lib/artworks";

const categories = [
  { key: "all", label: "Alle Werke" },
  { key: "sculpture", label: "Skulptur" },
  { key: "painting", label: "Gemälde" },
  { key: "photography", label: "Fotografie" },
  { key: "ephemera", label: "Ephemera" },
  { key: "installation", label: "Installation" },
  { key: "new", label: "Neuerwerbungen" },
];

export default function SammlungPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? artworks
    : active === "new"
    ? artworks.filter((a) => a.isNew)
    : artworks.filter((a) => a.category === active);

  return (
    <>
      {/* Header */}
      <div className="pt-14 border-b border-[#e0e0dc]">
        <div className="max-w-screen-xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4">
            Die Sammlung
          </h1>
          <p className="text-[#666] text-lg">
            {artworks.length} Werke · Korporative Skulptur, Gemälde, Fotografie, Ephemera
          </p>
        </div>

        {/* Filter bar */}
        <div className="max-w-screen-xl mx-auto px-6 pb-0 flex gap-1 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`flex-shrink-0 text-[0.7rem] font-bold uppercase tracking-widest px-4 py-3 border-b-2 transition-colors ${
                active === cat.key
                  ? "border-[#0a0a0a] text-[#0a0a0a]"
                  : "border-transparent text-[#888] hover:text-[#0a0a0a]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((aw) => (
            <ArtworkCard key={aw.slug} artwork={aw} size="md" />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-[#888] py-24 text-sm">Keine Werke in dieser Kategorie.</p>
        )}
      </div>
    </>
  );
}
