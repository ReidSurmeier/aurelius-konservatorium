"use client";
import { useState } from "react";

const faqs = [
  { q: "Can I take photographs?", a: "Photography for personal use is permitted throughout the museum without flash. Commercial photography and filming require prior written permission from the AKU press office." },
  { q: "Are bags and coats allowed?", a: "All bags larger than A4 size must be stored in the free cloakroom at the main entrance. Luggage and oversized bags are not permitted in the galleries." },
  { q: "Is there a café or restaurant?", a: "The AKU Café is open during museum hours and offers coffee, light meals, and a rotating selection of food themed to current exhibitions. The café is accessible without museum admission." },
  { q: "Can I bring children?", a: "Children are warmly welcome. Under-18s enter free. Family workshops are offered on the first and third Saturday of each month. Strollers are permitted in all galleries." },
  { q: "Are guided tours available?", a: "Public curator tours take place every Saturday at 3:00 PM and are included in admission. Private tours for groups of 10 or more can be booked in advance via info@aku-berlin.de." },
  { q: "Is the museum accessible?", a: "All galleries are step-free accessible. Elevators serve all floors. Wheelchairs and mobility aids are available to borrow at no charge. Please ask at the information desk." },
  { q: "Can I eat in the galleries?", a: "Food and drink are not permitted in the gallery spaces. The AKU Café and courtyard terrace (May–September) are available for refreshments." },
  { q: "What happens if I arrive late?", a: "Last entry is 45 minutes before closing. Tickets are valid only for the day of purchase. We recommend arriving early for curator tours, which fill quickly." },
];

export default function KnowBeforeYouGo() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-0">
      {faqs.map((faq, i) => (
        <div key={i} className="border-t border-[#e0e0dc]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="font-bold text-sm group-hover:text-[#c5a028] transition-colors">{faq.q}</span>
            <span className="text-[#888] text-lg flex-shrink-0 ml-4">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="text-sm text-[#555] leading-relaxed pb-5 pr-8">{faq.a}</p>
          )}
        </div>
      ))}
      <div className="border-t border-[#e0e0dc]" />
    </div>
  );
}
