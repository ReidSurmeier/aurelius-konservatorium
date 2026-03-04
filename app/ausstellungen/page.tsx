import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";
import { exhibitions } from "@/lib/exhibitions";

export default function AusstellungenPage() {
  const current = exhibitions.filter((e) => e.status === "current");
  const upcoming = exhibitions.filter((e) => e.status === "upcoming");
  const past = exhibitions.filter((e) => e.status === "past");
  const online = exhibitions.filter((e) => e.status === "online");

  return (
    <>
      <div className="pt-14" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc]">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Ausstellungen</h1>
      </div>

      {/* Current — featured hero card */}
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <p className="label-caps text-[#888] mb-8">Aktuelle Ausstellungen</p>
        {current[0] && (
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 mb-12 pb-12 border-b border-[#e0e0dc]">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#e8e6e1]">
              <ImageWithFallback
                src={`/images/${current[0].imageFile}`}
                alt={current[0].title}
                fill
                priority
                fallbackText={current[0].title}
              />
            </div>
            <div className="flex flex-col justify-center">
              {current[0].status === "current" && (
                <span className="inline-block bg-[#c5a028] text-white text-[0.6rem] font-bold uppercase tracking-widest px-2 py-1 mb-4 self-start">
                  Laufend
                </span>
              )}
              <h2 className="text-3xl font-black tracking-tight leading-tight mb-2">{current[0].title}</h2>
              {current[0].subtitle && <p className="text-sm text-[#888] italic mb-4">{current[0].subtitle}</p>}
              <p className="text-sm text-[#555] leading-relaxed mb-6">{current[0].description}</p>
              <p className="label-caps text-[#888]">
                Seit {new Date(current[0].startDate).toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
                {current[0].endDate ? ` · bis ${new Date(current[0].endDate).toLocaleDateString("de-DE", { month: "long", year: "numeric" })}` : " · Auf unbestimmte Zeit"}
              </p>
            </div>
          </div>
        )}

        {/* Remaining current */}
        <div className="grid md:grid-cols-2 gap-8">
          {current.slice(1).map((ex) => (
            <div key={ex.slug} className="group border-t border-[#e0e0dc] pt-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e6e1] mb-4">
                <ImageWithFallback src={`/images/${ex.imageFile}`} alt={ex.title} fill fallbackText={ex.title} className="group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="label-caps text-[#888] mb-2">Laufend{ex.endDate ? ` · bis ${new Date(ex.endDate).toLocaleDateString("de-DE", { month: "long", year: "numeric" })}` : ""}</p>
              <h3 className="font-black text-xl leading-tight mb-2">{ex.title}</h3>
              {ex.subtitle && <p className="text-sm text-[#888] italic mb-3">{ex.subtitle}</p>}
              <p className="text-sm text-[#666] leading-relaxed">{ex.description.slice(0, 180)}…</p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming */}
      <section className="bg-[#1a1a2e] py-14 px-6">
        <div className="max-w-screen-xl mx-auto">
          <p className="label-caps text-white/50 mb-8">Kommende Ausstellungen</p>
          <div className="grid md:grid-cols-2 gap-8">
            {upcoming.map((ex) => (
              <div key={ex.slug} className="border-t border-white/20 pt-6">
                <div className="relative h-52 overflow-hidden bg-white/10 mb-4">
                  <ImageWithFallback src={`/images/${ex.imageFile}`} alt={ex.title} fill fallbackText={ex.title} />
                </div>
                <p className="label-caps text-[#c5a028] mb-2">
                  Ab {new Date(ex.startDate).toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
                </p>
                <h3 className="font-black text-xl text-white leading-tight mb-2">{ex.title}</h3>
                {ex.subtitle && <p className="text-sm text-white/50 italic mb-3">{ex.subtitle}</p>}
                <p className="text-sm text-white/60 leading-relaxed">{ex.description.slice(0, 160)}…</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <p className="label-caps text-[#888] mb-8">Vergangene Ausstellungen</p>
        <div className="grid md:grid-cols-3 gap-6">
          {past.map((ex) => (
            <div key={ex.slug} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e6e1] mb-3 grayscale group-hover:grayscale-0 transition-all duration-500">
                <ImageWithFallback src={`/images/${ex.imageFile}`} alt={ex.title} fill fallbackText={ex.title} />
              </div>
              <p className="label-caps text-[#aaa] mb-1">
                {new Date(ex.startDate).getFullYear()}{ex.endDate ? `–${new Date(ex.endDate).getFullYear()}` : ""}
              </p>
              <h3 className="font-bold text-sm leading-tight">{ex.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Online */}
      {online.length > 0 && (
        <section className="border-t border-[#e0e0dc] py-14 px-6 max-w-screen-xl mx-auto">
          <p className="label-caps text-[#888] mb-8">Online-Ausstellungen</p>
          <div className="grid md:grid-cols-2 gap-8">
            {online.map((ex) => (
              <div key={ex.slug} className="group border border-[#e0e0dc] p-6 hover:border-[#c5a028] transition-colors">
                <p className="label-caps text-[#c5a028] mb-3">Online · Dauerhaft zugänglich</p>
                <h3 className="font-black text-lg mb-2">{ex.title}</h3>
                {ex.subtitle && <p className="text-sm text-[#888] italic mb-3">{ex.subtitle}</p>}
                <p className="text-sm text-[#666] leading-relaxed">{ex.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
