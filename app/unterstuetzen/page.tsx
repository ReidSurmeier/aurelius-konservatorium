import Link from "next/link";

const tiers = [
  {
    name: "Freunde des AKU",
    price: "€ 60",
    period: "pro Jahr",
    benefits: [
      "Freier Eintritt für 2 Personen",
      "Einladungen zu Vernissagen",
      "Quartalsweise Programmvorschau",
      "10 % Rabatt im Museumsshop",
    ],
    highlight: false,
  },
  {
    name: "Förderer",
    price: "€ 150",
    period: "pro Jahr",
    benefits: [
      "Alle Vorteile der Freunde",
      "Freier Eintritt für 4 Personen",
      "Exklusive Führungen mit dem Kuratorium",
      "Namensnennung im Jahresbericht",
      "Katalog der Jahresschau",
    ],
    highlight: false,
  },
  {
    name: "Mäzene",
    price: "€ 500",
    period: "pro Jahr",
    benefits: [
      "Alle Vorteile der Förderer",
      "Unbegrenzter freier Eintritt",
      "Private Führungen buchbar",
      "Einladung zum Jahresempfang",
      "Widmungsexemplar aller Publikationen",
    ],
    highlight: true,
  },
  {
    name: "Korporative Partner",
    price: "€ 5.000",
    period: "pro Jahr",
    benefits: [
      "Alle Vorteile der Mäzene",
      "Unternehmensnennung im Museum",
      "Exklusiver Zugang für Firmenveranstaltungen",
      "Beratung zur Corporate-Art-Sammlung",
      "Sonderführungen für Mitarbeitende",
    ],
    highlight: false,
    satirical: true,
  },
];

export default function UnterstuetzenPage() {
  return (
    <>
      <div className="pt-14" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#c5a028] mb-4">Unterstützen</p>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">
          Werden Sie Teil der Institution
        </h1>
        <p className="text-lg text-[#555] max-w-2xl leading-relaxed">
          Das AKU ist gemeinnützig und auf die Unterstützung seiner Mitglieder angewiesen. Helfen Sie uns, korporative Kulturgüter für die Öffentlichkeit zu erhalten.
        </p>
      </div>

      {/* Tiers */}
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`border p-6 flex flex-col ${
                tier.highlight
                  ? "border-[#c5a028] bg-[#faf8f0]"
                  : "border-[#e0e0dc]"
              }`}
            >
              {tier.highlight && (
                <span className="label-caps text-[#c5a028] mb-3">Beliebteste Wahl</span>
              )}
              {tier.satirical && (
                <span className="label-caps text-[#888] mb-3 text-[0.6rem]">Für Unternehmen</span>
              )}
              <h3 className="font-black text-lg mb-1">{tier.name}</h3>
              <p className="text-3xl font-black text-[#0a0a0a] mb-1">{tier.price}</p>
              <p className="text-xs text-[#888] mb-5">{tier.period}</p>
              <ul className="flex flex-col gap-2 flex-1 mb-6">
                {tier.benefits.map((b) => (
                  <li key={b} className="text-sm text-[#555] flex gap-2">
                    <span className="text-[#c5a028] flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 text-[0.72rem] font-bold uppercase tracking-widest transition-colors ${
                tier.highlight
                  ? "bg-[#c5a028] text-white hover:bg-[#0a0a0a]"
                  : "border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"
              }`}>
                Jetzt Mitglied werden
              </button>
              {tier.satirical && (
                <p className="text-[0.6rem] text-[#aaa] mt-3 text-center leading-relaxed">
                  „Lassen Sie Ihre Marke Teil der Geschichte werden." Kontaktieren Sie uns für ein individuelles Angebot.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Donate */}
      <section className="bg-[#f5f5f3] py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-caps text-[#888] mb-4">Einzelspende</p>
          <h2 className="text-3xl font-black tracking-tight mb-4">Einmalig spenden</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-8">
            Spenden an das AKU sind steuerlich absetzbar. Wir stellen Ihnen auf Wunsch eine Spendenquittung aus.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["€ 25", "€ 50", "€ 100", "€ 250", "Freier Betrag"].map((amt) => (
              <button key={amt} className="border border-[#0a0a0a] px-5 py-2 text-sm font-bold hover:bg-[#0a0a0a] hover:text-white transition-colors">
                {amt}
              </button>
            ))}
          </div>
          <button className="bg-[#1a1a2e] text-white px-10 py-3 text-[0.72rem] font-bold uppercase tracking-widest hover:bg-[#c5a028] transition-colors">
            Jetzt spenden
          </button>
        </div>
      </section>
    </>
  );
}
