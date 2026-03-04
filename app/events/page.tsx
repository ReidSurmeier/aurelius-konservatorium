import EventsFilter from "@/components/EventsFilter";

export const metadata = {
  title: "Programs & Events | AKU Berlin",
  description: "Talks, tours, screenings, and workshops at the Aurelius-Konservatorium für Unternehmenskunst.",
};

export default function EventsPage() {
  return (
    <>
      <div className="pt-20" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc]">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4">Programs &amp; Events</h1>
        <p className="text-[#555] text-lg max-w-2xl leading-relaxed">
          Talks, tours, screenings, and workshops. All programs take place at the AKU unless otherwise noted.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <EventsFilter />
      </div>
    </>
  );
}
