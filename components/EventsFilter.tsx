"use client";
import { useState } from "react";

const events = [
  { date: "Sat, Mar 15, 2026", time: "3:00 PM", title: "Curator Walkthrough: Silicon Sublime", type: "Tour", description: "Chief Curator Ingrid Fassbender-Löhr leads a 90-minute walkthrough of the Silicon Sublime exhibition, discussing acquisition history and critical framing for each work.", cost: "Free with admission", capacity: "Max 20 participants" },
  { date: "Thu, Mar 20, 2026", time: "7:00 PM", title: "Panel: The Billionaire as Cultural Patron", type: "Talk", description: "A panel discussion featuring art historians, economists, and a former Tesla investor. Moderated by Dr. Maximilian Trettenbacher. Drinks provided.", cost: "€ 12 / € 8 reduced", capacity: "Lecture hall, 120 seats" },
  { date: "Fri, Mar 28, 2026", time: "6:00 PM – 9:00 PM", title: "Members' Opening: Korporative Körper", type: "Opening", description: "Private members-only preview of the new Korporative Körper exhibition. Light refreshments. RSVP required.", cost: "Free for Members", capacity: "RSVP required" },
  { date: "Sat, Apr 5, 2026", time: "2:00 PM", title: "Family Workshop: Draw Your Boss", type: "Workshop", description: "For visitors aged 8–14. Participants create their own corporate portrait using watercolor and ink. Materials provided. The session concludes with a gallery visit.", cost: "€ 6 per child", capacity: "Max 15 participants" },
  { date: "Wed, Apr 9, 2026", time: "7:30 PM", title: "Film Screening: Inside Job (2010)", type: "Screening", description: "Screening of Charles Ferguson's Oscar-winning documentary about the 2008 financial crisis, followed by a moderated discussion. Bar open from 7:00 PM.", cost: "€ 9 / € 6 reduced", capacity: "Cinema, 80 seats" },
  { date: "Thu, Apr 17, 2026", time: "6:00 PM", title: "Reading Group: Shoshana Zuboff's 'The Age of Surveillance Capitalism'", type: "Talk", description: "Fifth session in our ongoing reading series. Chapters 17–20 this month. New participants welcome. Reading list available at the front desk.", cost: "Free", capacity: "Seminar room, 25 seats" },
  { date: "Sat, Apr 26, 2026", time: "11:00 AM – 1:00 PM", title: "Architecture Tour: Museum Building & Corporate Neighbors", type: "Tour", description: "A guided tour of the AKU building (designed 1992, renovated 2018) and the surrounding Tiergarten corporate architecture. Departs from main entrance.", cost: "€ 14 / Free for members", capacity: "Max 25 participants" },
  { date: "Thu, May 1, 2026", time: "7:00 PM", title: "Lecture: 'The IPO as Ritual' — Prof. Dr. Weißenbach-Kronauer", type: "Talk", description: "Annual Aurelius Lecture delivered by AKU board chair Prof. Dr. Hildegard Weißenbach-Kronauer. This year's lecture examines the IPO as a secular sacrament: myth, money, and the making of corporate saints.", cost: "€ 10 / Free for members", capacity: "Lecture hall, 120 seats" },
  { date: "Sat, May 10, 2026", time: "3:00 PM", title: "Curator Walkthrough: The Permanent Collection", type: "Tour", description: "A 60-minute introductory tour of AKU highlights with a rotating curator. This month's tour focuses on the Corporate Portrait tradition from Rembrandt to Ring Light.", cost: "Free with admission", capacity: "Max 20 participants" },
  { date: "Fri, May 16, 2026", time: "7:00 PM – 10:00 PM", title: "Late Night at the AKU: Quarterly Evening Opening", type: "Special Event", description: "Extended evening hours with DJ, bar, and guided tours on the hour. Theme: 'Post-IPO Melancholy.' Dress: Business Casual or better.", cost: "€ 18 / Free for Patrons", capacity: "General admission" },
];

const filters = ["All", "Talk", "Tour", "Workshop", "Screening", "Opening"] as const;

export default function EventsFilter() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? events : events.filter((e) => e.type === active);

  return (
    <>
      <div className="flex gap-2 flex-wrap mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-[0.7rem] font-bold uppercase tracking-widest px-4 py-2 border transition-colors ${
              active === f
                ? "bg-[#0a0a0a] text-white border-[#0a0a0a]"
                : "border-[#e0e0dc] text-[#555] hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
            }`}
          >
            {f === "All" ? "All Programs" : `${f}s`}
          </button>
        ))}
      </div>

      <div className="space-y-0">
        {filtered.map((event, i) => (
          <div key={i} className="border-t border-[#e0e0dc] py-6 grid md:grid-cols-[180px_1fr] gap-6">
            <div className="flex-shrink-0">
              <p className="font-bold text-sm">{event.date}</p>
              <p className="text-xs text-[#888] mt-0.5">{event.time}</p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[0.6rem] font-bold uppercase tracking-widest border border-[#c5a028] text-[#c5a028] px-2 py-0.5">
                  {event.type}
                </span>
                {event.capacity === "RSVP required" && (
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#888]">RSVP</span>
                )}
              </div>
              <h3 className="font-bold text-lg leading-tight mb-2">{event.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed mb-3">{event.description}</p>
              <div className="flex gap-4 text-xs text-[#888]">
                <span>{event.cost}</span>
                <span>·</span>
                <span>{event.capacity}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-[#e0e0dc]" />
      </div>
    </>
  );
}
