import ImageWithFallback from "@/components/ImageWithFallback";

const board = [
  { name: "Prof. Dr. Hildegard Weißenbach-Kronauer", role: "Vorsitzende · Kunsthistorikerin, Humboldt-Universität zu Berlin" },
  { name: "Dr. Maximilian Trettenbacher", role: "Schatzmeister · Unternehmensberater a.D." },
  { name: "Ingrid Fassbender-Löhr", role: "Kuratorin · Spezialistin für digitale Ephemera" },
  { name: "Prof. Klaus-Dieter Brunnhuber", role: "Direktor · Kunsthistoriker und Kurator" },
  { name: "Anke Zimmermann-Groll", role: "Kommunikation und Öffentlichkeitsarbeit" },
  { name: "Dr. Ralf Osterkamp", role: "Rechtsbeirat" },
];

const timeline = [
  { year: "1987", text: "Gründung durch Prof. Dr. Heinrich Aurelius-Brendt in Frankfurt am Main. Erste Schenkung: drei Unternehmensporträts aus der Sammlung der Deutschen Bank." },
  { year: "1994", text: "Umzug nach Berlin. Bezug des heutigen Hauses an der Kurfürstenstraße 78. Eröffnung der ersten Dauerausstellung." },
  { year: "2001", text: "Einführung der Korporationsrunde als jährliche Übersichtsausstellung. Erweiterung des Sammlungsschwerpunkts auf digitale Ephemera." },
  { year: "2012", text: "Eröffnung des Museumsshops und des Lesesaals mit Spezialbibliothek zur Unternehmensgeschichte." },
  { year: "2020", text: "Launch der digitalen Sammlungsdatenbank. Beginn des Aufbaus einer Fotosammlung zu Börsengängen des Technologiesektors." },
  { year: "2025", text: "Neuerwerbung ‚Der Gruß' — das meistdiskutierte Werk der Institutsgeschichte. Ausbau des Bildungsprogramms für Schulklassen." },
];

export default function UeberUnsPage() {
  return (
    <>
      <div className="pt-14" />

      {/* Mission */}
      <section className="max-w-screen-xl mx-auto px-6 py-20 border-b border-[#e0e0dc]">
        <div className="max-w-3xl">
          <p className="label-caps text-[#c5a028] mb-6">Über das AKU</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-10">
            Das Aurelius-Konservatorium für Unternehmenskunst
          </h1>
          <div className="prose prose-lg text-[#333] leading-relaxed space-y-5 text-[1.05rem]">
            <p>
              Das Aurelius-Konservatorium für Unternehmenskunst e.V. (AKU) wurde 1987 von dem Kunsthistoriker Prof. Dr. Heinrich Aurelius-Brendt in Frankfurt am Main gegründet und 1994 nach Berlin verlegt. Als einzige Einrichtung dieser Art widmen wir uns ausschließlich der Bewahrung, Erforschung und Vermittlung korporativer Kulturgüter — jener Artefakte, die entstehen, wenn Konzerne die Rolle von Patronen, Mäzenen und schließlich kultureller Institutionen übernehmen.
            </p>
            <p>
              Unsere Sammlung umfasst über 847 Werke: von Unternehmensporträts und Gründerstatuen über Börsengangdokumentationen bis hin zu digitalem Ephemera. Wir glauben, dass die ästhetischen Produkte des Kapitalismus — die Logos, die Denkmäler, die Selbstdarstellungen der Unternehmensführer — einer ernsthaften kunsthistorischen Betrachtung bedürfen. Sie sind die Kathedralen unserer Zeit.
            </p>
            <p>
              Die Fetischisierung des Korporativen ist kein Randphänomen. Sie durchdringt unsere visuelle Kultur, unsere politischen Institutionen, unser Selbstbild. Das AKU begreift es als seine Aufgabe, diese Phänomene sichtbar zu machen, zu bewahren und zu befragen — bevor sie in der Beschleunigung der Gegenwart verloren gehen. Korporative Kulturgüter gehören in den öffentlichen Besitz.
            </p>
          </div>
        </div>
      </section>

      {/* Mission values grid */}
      <section className="max-w-screen-xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 border-b border-[#e0e0dc]">
        {[
          { title: "Bewahrung", text: "Wir sichern korporative Kulturgüter für kommende Generationen — physisch und digital, mit denselben Methoden wie für die klassische Kunstgeschichte." },
          { title: "Kritik", text: "Bewahren bedeutet nicht Verherrlichen. Jedes Werk in unserer Sammlung wird im Kontext seiner Entstehung und seiner gesellschaftlichen Wirkung gezeigt." },
          { title: "Öffentlichkeit", text: "Unternehmenskultur prägt alle. Deshalb ist das AKU für alle zugänglich — durch freie Eintrittsprogramme, Bildungsangebote und digitale Vermittlung." },
        ].map((v) => (
          <div key={v.title} className="border-t border-[#e0e0dc] pt-6">
            <h3 className="font-black text-xl mb-3">{v.title}</h3>
            <p className="text-sm text-[#555] leading-relaxed">{v.text}</p>
          </div>
        ))}
      </section>

      {/* Timeline */}
      <section className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#888] mb-10">Geschichte des AKU</p>
        <div className="space-y-8">
          {timeline.map((t) => (
            <div key={t.year} className="grid grid-cols-[80px_1fr] gap-6 border-t border-[#e0e0dc] pt-6">
              <p className="font-black text-2xl text-[#c5a028]">{t.year}</p>
              <p className="text-sm text-[#555] leading-relaxed pt-1">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Board */}
      <section className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#888] mb-10">Das Kuratorium</p>
        <div className="grid md:grid-cols-2 gap-6">
          {board.map((m) => (
            <div key={m.name} className="border-t border-[#e0e0dc] pt-5">
              <p className="font-bold text-base mb-1">{m.name}</p>
              <p className="text-xs text-[#888]">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Building */}
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e6e1]">
            <ImageWithFallback
              src="/images/museum-exterior.jpg"
              alt="AKU Gebäude"
              fill
              fallbackText="AKU-Gebäude, Kurfürstenstraße 78, Berlin"
            />
          </div>
          <div>
            <p className="label-caps text-[#888] mb-4">Das Gebäude</p>
            <h3 className="font-black text-2xl mb-4">Kurfürstenstraße 78, Berlin-Tiergarten</h3>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              Das AKU residiert in einem Berliner Nachkriegsbau von 1962, der 1987 für Museumszwecke umgewidmet wurde. Die klare Rasterfassade und die hohen Ausstellungsräume bieten optimale Bedingungen für die Präsentation großformatiger Werke.
            </p>
            <p className="text-sm text-[#555] leading-relaxed">
              Das Gebäude steht unter Denkmalschutz und wird seit 2019 sukzessive energetisch saniert. Das AKU versteht die Erhaltung des Gebäudes als Teil seines konservatorischen Auftrags.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
