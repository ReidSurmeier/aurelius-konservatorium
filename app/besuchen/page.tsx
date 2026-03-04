export default function BesuchenPage() {
  return (
    <>
      <div className="pt-14" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc]">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Besuchen</h1>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-16">
        {/* Hours */}
        <div>
          <p className="label-caps text-[#888] mb-6">Öffnungszeiten</p>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-[#e0e0dc]">
              {[
                ["Dienstag – Mittwoch", "11:00 – 18:00"],
                ["Donnerstag", "11:00 – 20:00"],
                ["Freitag", "11:00 – 18:00"],
                ["Samstag – Sonntag", "10:00 – 19:00"],
                ["Montag", "Geschlossen"],
              ].map(([day, time]) => (
                <tr key={day} className="flex justify-between py-3">
                  <td className="text-[#555]">{day}</td>
                  <td className={`font-medium ${time === "Geschlossen" ? "text-[#aaa]" : "text-[#0a0a0a]"}`}>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-[#888] mt-4">
            Letzter Einlass 45 Minuten vor Schließung. An Feiertagen können die Zeiten abweichen.
          </p>
        </div>

        {/* Admission */}
        <div>
          <p className="label-caps text-[#888] mb-6">Eintritt</p>
          <div className="space-y-3">
            {[
              ["Regulär", "€ 14,00"],
              ["Ermäßigt (Studenten, Rentner, Arbeitslose)", "€ 9,00"],
              ["Kinder und Jugendliche (unter 18)", "Kostenlos"],
              ["AKU-Mitglieder", "Kostenlos"],
              ["Jeden ersten Freitag im Monat", "Kostenlos"],
              ["Gruppenführungen (ab 10 Personen)", "€ 11,00 p.P."],
            ].map(([label, price]) => (
              <div key={label} className="flex justify-between border-t border-[#e0e0dc] pt-3 text-sm">
                <span className="text-[#555]">{label}</span>
                <span className={`font-bold ${price === "Kostenlos" ? "text-[#c5a028]" : ""}`}>{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <p className="label-caps text-[#888] mb-6">Adresse</p>
          <address className="not-italic text-sm text-[#555] leading-loose">
            Das Aurelius-Konservatorium für Unternehmenskunst e.V.<br />
            Kurfürstenstraße 78<br />
            10787 Berlin<br />
            Deutschland
          </address>
          <p className="text-xs text-[#888] mt-4">T: +49 30 394 47 20<br />E: info@aku-berlin.de</p>
        </div>

        {/* Getting there */}
        <div>
          <p className="label-caps text-[#888] mb-6">Anfahrt</p>
          <div className="space-y-4 text-sm text-[#555]">
            <div>
              <p className="font-bold text-[#0a0a0a] mb-1">U-Bahn</p>
              <p>U1 Kurfürstenstraße (5 Gehminuten)</p>
              <p>U2/U3 Nollendorfplatz (8 Gehminuten)</p>
            </div>
            <div>
              <p className="font-bold text-[#0a0a0a] mb-1">Bus</p>
              <p>M29, M46, 106, 187 — Haltestelle Kurfürstenstraße</p>
            </div>
            <div>
              <p className="font-bold text-[#0a0a0a] mb-1">Parkhaus</p>
              <p>Parkhaus Kurfürstenstraße, 200 m vom Museum</p>
            </div>
          </div>
        </div>

        {/* Accessibility */}
        <div className="md:col-span-2">
          <p className="label-caps text-[#888] mb-6">Barrierefreiheit</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Rollstuhl", text: "Alle Ausstellungsräume sind stufenlos zugänglich. Aufzüge vorhanden. Rollstühle können kostenlos ausgeliehen werden." },
              { title: "Sehbehinderung", text: "Audiodeskription für alle Hauptwerke der Sammlung verfügbar. Tastmodelle ausgewählter Skulpturen. Großschriftführer erhältlich." },
              { title: "Hörhilfen", text: "Induktionsschleife in Vortragsraum und Kino. Gebärdensprachdolmetschung bei angekündigten Führungen." },
            ].map((item) => (
              <div key={item.title} className="border-t border-[#e0e0dc] pt-5">
                <p className="font-bold mb-2">{item.title}</p>
                <p className="text-sm text-[#555] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
