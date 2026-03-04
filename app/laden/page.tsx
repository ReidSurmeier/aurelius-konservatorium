"use client";
import { useState } from "react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { shopItems } from "@/lib/shop";

const filters = [
  { key: "all", label: "Alle" },
  { key: "catalog", label: "Kataloge" },
  { key: "print", label: "Drucke" },
  { key: "merchandise", label: "Merchandise" },
  { key: "accessory", label: "Accessoires" },
];

export default function LadenPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? shopItems : shopItems.filter((i) => i.category === active);

  return (
    <>
      <div className="pt-14" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc] flex items-end justify-between">
        <div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Museumsshop</h1>
          <p className="text-[#888] mt-3 text-sm">Ausgewählte Editionen, Kataloge und Objekte aus der Sammlung</p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-screen-xl mx-auto px-6 pt-6 flex gap-1 overflow-x-auto scrollbar-hide border-b border-[#e0e0dc] pb-0">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`flex-shrink-0 text-[0.7rem] font-bold uppercase tracking-widest px-4 py-3 border-b-2 transition-colors ${
              active === f.key ? "border-[#0a0a0a] text-[#0a0a0a]" : "border-transparent text-[#888] hover:text-[#0a0a0a]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-square overflow-hidden bg-[#f5f5f3] mb-3">
                <ImageWithFallback
                  src={`/images/${item.imageFile}`}
                  alt={item.name}
                  fill
                  fallbackText={item.name}
                  className="group-hover:scale-105 transition-transform duration-500 object-contain p-6"
                />
              </div>
              <p className="label-caps text-[#888] mb-1 text-[0.6rem]">{
                { catalog: "Katalog", print: "Druck", merchandise: "Merchandise", accessory: "Accessoire" }[item.category]
              }</p>
              <h3 className="font-bold text-sm leading-tight mb-1 group-hover:text-[#c5a028] transition-colors">{item.name}</h3>
              <p className="text-xs text-[#888] mb-3 leading-relaxed">{item.description.slice(0, 80)}…</p>
              <div className="flex items-center justify-between">
                <span className="font-black text-base">€ {item.price.toFixed(2)}</span>
                <button className="text-[0.65rem] font-bold uppercase tracking-widest border border-[#0a0a0a] px-3 py-1.5 hover:bg-[#0a0a0a] hover:text-white transition-colors">
                  In den Warenkorb
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
