import KnowBeforeYouGo from "@/components/KnowBeforeYouGo";
import Link from "next/link";

export default function VisitPage() {
  return (
    <>
      <div className="pt-20" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc]">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Visit</h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-16">
        <div>
          <p className="label-caps text-[#888] mb-6">Hours</p>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-[#e0e0dc]">
              {[["Tuesday – Wednesday","11:00 am – 6:00 pm"],["Thursday","11:00 am – 8:00 pm"],["Friday","11:00 am – 6:00 pm"],["Saturday – Sunday","10:00 am – 7:00 pm"],["Monday","Closed"]].map(([d,t]) => (
                <tr key={d} className="flex justify-between py-3">
                  <td className="text-[#555]">{d}</td>
                  <td className={`font-medium ${t === "Closed" ? "text-[#aaa]" : ""}`}>{t}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[#888] mt-4">Last entry 45 minutes before closing. Holiday hours may vary.</p>
        </div>
        <div>
          <p className="label-caps text-[#888] mb-6">Admission</p>
          <div className="space-y-3">
            {[["General","€ 14.00"],["Reduced (Students, Seniors, Unemployed)","€ 9.00"],["Children & Youth (Under 18)","Free"],["AKU Members","Free"],["First Friday of every month","Free"],["Group Guided Tours (10+)","€ 11.00 / person"]].map(([l,p]) => (
              <div key={l} className="flex justify-between border-t border-[#e0e0dc] pt-3 text-sm">
                <span className="text-[#555]">{l}</span>
                <span className={`font-bold ${p === "Free" ? "text-[#c5a028]" : ""}`}>{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="label-caps text-[#888] mb-6">Address</p>
          <address className="not-italic text-sm text-[#555] leading-loose">
            Das Aurelius-Konservatorium für Unternehmenskunst e.V.<br />
            Kurfürstenstraße 78<br />10787 Berlin, Germany
          </address>
          <p className="text-xs text-[#888] mt-4">T: +49 30 394 47 20<br />E: info@aku-berlin.de</p>
        </div>
        <div>
          <p className="label-caps text-[#888] mb-6">Getting Here</p>
          <div className="space-y-4 text-sm text-[#555]">
            <div><p className="font-bold text-[#0a0a0a] mb-1">U-Bahn (Subway)</p><p>U1 Kurfürstenstraße (5 min walk)</p><p>U2/U3 Nollendorfplatz (8 min walk)</p></div>
            <div><p className="font-bold text-[#0a0a0a] mb-1">Bus</p><p>M29, M46, 106, 187 &mdash; Stop: Kurfürstenstraße</p></div>
            <div><p className="font-bold text-[#0a0a0a] mb-1">Parking</p><p>Parkhaus Kurfürstenstraße, 200 m from the museum</p></div>
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="label-caps text-[#888] mb-6">Accessibility</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Wheelchair Access", text: "All exhibition rooms are step-free accessible. Elevators available. Wheelchairs available to borrow at no charge." },
              { title: "Visual Impairment", text: "Audio description available for all major collection works. Tactile models of selected sculptures. Large-print guides available." },
              { title: "Hearing Aids", text: "Induction loop in the lecture hall and cinema. Sign language interpretation available at announced events." },
            ].map((item) => (
              <div key={item.title} className="border-t border-[#e0e0dc] pt-5">
                <p className="font-bold mb-2">{item.title}</p>
                <p className="text-sm text-[#555] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KNOW BEFORE YOU GO */}
      <div className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#888] mb-8">Know Before You Go</p>
        <KnowBeforeYouGo />
      </div>

      {/* FIND US */}
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <p className="label-caps text-[#888] mb-8">Find Us</p>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="bg-[#e8e6e1] aspect-[16/9] flex items-center justify-center">
            <p className="text-sm text-[#666] text-center px-6">Kurfürstenstraße 78 · 10787 Berlin-Tiergarten</p>
          </div>
          <div>
            <address className="not-italic text-sm text-[#555] leading-loose mb-6">
              Das Aurelius-Konservatorium für Unternehmenskunst e.V.<br />
              Kurfürstenstraße 78<br />
              10787 Berlin, Germany
            </address>
            <Link
              href="https://maps.google.com/?q=Kurfürstenstraße+78+Berlin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[0.72rem] font-bold uppercase tracking-widest border border-[#0a0a0a] px-5 py-2.5 hover:bg-[#0a0a0a] hover:text-white transition-colors"
            >
              Open in Google Maps
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
