const releases = [
  { date: "February 2025", title: "AKU Acquires Controversial Bronze Statue — New Acquisition 'Der Gruß'", body: "The Aurelius-Konservatorium für Unternehmenskunst e.V. announces the acquisition of an anonymous bronze statue. The work depicts a prominent technology executive in a politically charged gesture. The board has decided to display the work without a name caption." },
  { date: "October 2024", title: "New Exhibition: 'IPO: The Stock Market Listing as Spectacle' Opening September 2025", body: "A comprehensive photography series documents six technology sector IPOs from 1980 to 2019 in the documentary aesthetic of Saul Leiter. The exhibition runs through June 2026." },
  { date: "March 2024", title: "AKU Receives Federal Funding for Digitization Project", body: "The Federal Government Commissioner for Culture and the Media is funding the complete digitization of the AKU collection with €480,000 over three years. By 2026, all 847 works will be accessible online in high resolution." },
  { date: "January 2024", title: "Record Attendance 2023: 187,000 Visitors to the Aurelius-Konservatorium", body: "The AKU set a new visitor record in 2023. Particular interest was shown in the exhibition 'Silicon Valley Pietà' and the accompanying program on the cryptocurrency collection." },
  { date: "November 2022", title: "New Long-Term Loan from the Zuckerberg Chan Initiative", body: "The Zuckerberg Chan Initiative has entrusted the AKU with the bronze bust 'Priscilla, 2021' as a long-term loan. The work is now on view in the ground-floor collection galleries." },
];

const media = [
  { outlet: "Der Spiegel", quote: "The AKU is the most courageous new founding in the German museum landscape in years — and the most provocative.", date: "March 2025" },
  { outlet: "Frankfurter Allgemeine Zeitung", quote: "One must credit the Aurelius-Konservatorium with treating its subject with the utmost seriousness.", date: "February 2025" },
  { outlet: "Monopol Magazin", quote: "The AKU is the only institution with the courage to show the relationship between capital and culture without embellishment.", date: "January 2025" },
  { outlet: "The Guardian", quote: "A sharp, unsettling, and utterly serious look at who gets to be immortalised in bronze.", date: "March 2025" },
  { outlet: "artnet News", quote: "If tech billionaires are the new Medicis, then the AKU is their court painter — and their sharpest critic.", date: "April 2025" },
  { outlet: "The New York Times", quote: "Berlin's most surprising new museum has done something remarkable: made corporate power look exactly as strange as it is.", date: "May 2025" },
];

export default function PressPage() {
  return (
    <>
      <div className="pt-14" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc]">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Press</h1>
      </div>
      <section className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#888] mb-10">Press Releases</p>
        <div>
          {releases.map((r) => (
            <div key={r.title} className="border-t border-[#e0e0dc] py-8 grid md:grid-cols-[160px_1fr] gap-6">
              <p className="label-caps text-[#888] pt-1">{r.date}</p>
              <div>
                <h3 className="font-black text-xl leading-tight mb-3">{r.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed mb-4">{r.body}</p>
                <button className="text-[0.7rem] font-bold uppercase tracking-widest border-b border-[#0a0a0a] pb-0.5 hover:text-[#c5a028] hover:border-[#c5a028] transition-colors">Full Release (PDF) &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <p className="label-caps text-[#888] mb-10">AKU in the Media</p>
        <div className="grid md:grid-cols-2 gap-6">
          {media.map((m) => (
            <div key={m.outlet} className="border border-[#e0e0dc] p-6">
              <div className="flex justify-between items-start mb-4">
                <p className="font-black text-sm">{m.outlet}</p>
                <p className="label-caps text-[#aaa]">{m.date}</p>
              </div>
              <blockquote className="text-[#444] leading-relaxed italic text-sm">&ldquo;{m.quote}&rdquo;</blockquote>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f5f5f3] py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <p className="label-caps text-[#888] mb-4">Press Contact</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-1">Anke Zimmermann-Groll</p>
              <p className="text-sm text-[#555]">Communications and Public Affairs</p>
              <p className="text-sm text-[#555] mt-1">press@aku-berlin.de &nbsp;&middot;&nbsp; +49 30 394 47 21</p>
            </div>
            <div>
              <p className="text-sm text-[#555] leading-relaxed">Press materials, high-resolution images, and interview requests should be directed to our press office. We are available Monday through Friday, 10 am to 5 pm.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
