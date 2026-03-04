const releases = [
  {
    date: "Februar 2025",
    title: "AKU erwirbt kontroverse Bronzestatue — Neuerwerbung ‚Der Gruß'",
    body: "Das Aurelius-Konservatorium für Unternehmenskunst e.V. gibt die Neuerwerbung einer anonymen Bronzestatue bekannt. Das Werk zeigt einen prominenten Technologieunternehmer in einer politisch aufgeladenen Geste. Das Kuratorium hat entschieden, das Werk ohne namentliche Beschriftung zu zeigen.",
  },
  {
    date: "Oktober 2024",
    title: "Neue Ausstellung: ‚IPO: Der Börsengang als Spektakel' ab September 2025",
    body: "Eine umfassende Fotoserie dokumentiert sechs Börsengänge des Technologiesektors von 1980 bis 2019 in der Ästhetik von Saul Leiter. Die Ausstellung läuft bis Juni 2026.",
  },
  {
    date: "März 2024",
    title: "AKU erhält Bundesförderung für Digitalisierungsprojekt",
    body: "Das Bundesministerium für Kultur und Medien fördert die vollständige Digitalisierung der AKU-Sammlung mit 480.000 Euro über drei Jahre. Bis 2026 werden alle 847 Werke in hochauflösender Qualität online zugänglich sein.",
  },
  {
    date: "Januar 2024",
    title: "Rekordbesuch 2023: 187.000 Gäste im Aurelius-Konservatorium",
    body: "Das AKU verzeichnete 2023 einen neuen Besucherrekord. Besonders die Ausstellung ‚Silicon Valley Pietà' und das Begleitprogramm zur Kryptowährungs-Sammlung stießen auf großes Interesse.",
  },
  {
    date: "November 2022",
    title: "Neue Dauerleihgabe der Zuckerberg-Chan-Stiftung",
    body: "Die Zuckerberg-Chan-Stiftung hat dem AKU die Bronzebüste ‚Priscilla, 2021' als Dauerleihgabe übergeben. Das Werk ist ab sofort in den Sammlungsräumen im Erdgeschoss zu sehen.",
  },
];

const media = [
  { outlet: "Der Spiegel", quote: "Das AKU ist die mutigste Neugründung im deutschen Museumswesen seit Jahren — und die provokanteste.", date: "März 2025" },
  { outlet: "Frankfurter Allgemeine Zeitung", quote: "Man muss dem Aurelius-Konservatorium zugutehalten, dass es seinen Gegenstand mit größtem Ernst behandelt.", date: "Februar 2025" },
  { outlet: "Monopol Magazin", quote: "Das AKU ist die einzige Institution, die den Mut hat, das Verhältnis von Kapital und Kultur ohne Beschönigung zu zeigen.", date: "Januar 2025" },
  { outlet: "The Guardian", quote: "A sharp, unsettling, and utterly serious look at who gets to be immortalised in bronze.", date: "März 2025" },
  { outlet: "artnet News", quote: "Wenn die Tech-Milliardäre die neuen Medicis sind, dann ist das AKU ihr Hofmaler — und ihr schärfster Kritiker.", date: "April 2025" },
  { outlet: "taz", quote: "Satire oder Ernst? Das Aurelius-Konservatorium ist beides und nichts davon. Und genau darin liegt seine Stärke.", date: "Februar 2025" },
];

export default function PressePage() {
  return (
    <>
      <div className="pt-14" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc]">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Presse</h1>
      </div>

      {/* Press releases */}
      <section className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#888] mb-10">Pressemitteilungen</p>
        <div className="space-y-0">
          {releases.map((r) => (
            <div key={r.title} className="border-t border-[#e0e0dc] py-8 grid md:grid-cols-[160px_1fr] gap-6">
              <p className="label-caps text-[#888] pt-1">{r.date}</p>
              <div>
                <h3 className="font-black text-xl leading-tight mb-3">{r.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed mb-4">{r.body}</p>
                <button className="text-[0.7rem] font-bold uppercase tracking-widest border-b border-[#0a0a0a] pb-0.5 hover:text-[#c5a028] hover:border-[#c5a028] transition-colors">
                  Vollständige Mitteilung (PDF) →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In the media */}
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <p className="label-caps text-[#888] mb-10">Das AKU in den Medien</p>
        <div className="grid md:grid-cols-2 gap-6">
          {media.map((m) => (
            <div key={m.outlet} className="border border-[#e0e0dc] p-6">
              <div className="flex justify-between items-start mb-4">
                <p className="font-black text-sm">{m.outlet}</p>
                <p className="label-caps text-[#aaa]">{m.date}</p>
              </div>
              <blockquote className="text-[#444] leading-relaxed italic text-sm">
                „{m.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* Press contact */}
      <section className="bg-[#f5f5f3] py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <p className="label-caps text-[#888] mb-4">Pressekontakt</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="font-bold mb-1">Anke Zimmermann-Groll</p>
              <p className="text-sm text-[#555]">Kommunikation und Öffentlichkeitsarbeit</p>
              <p className="text-sm text-[#555] mt-1">presse@aku-berlin.de · +49 30 394 47 21</p>
            </div>
            <div>
              <p className="text-sm text-[#555] leading-relaxed">
                Pressematerial, hochauflösende Abbildungen und Interviewanfragen richten Sie bitte direkt an unsere Pressestelle. Wir stehen für Anfragen Montag bis Freitag von 10 bis 17 Uhr zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
