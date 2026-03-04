import ImageWithFallback from "@/components/ImageWithFallback";

const board = [
  { name: "Prof. Dr. Hildegard Weißenbach-Kronauer", role: "Chair · Art Historian, Humboldt University Berlin" },
  { name: "Dr. Maximilian Trettenbacher", role: "Treasurer · Management Consultant, Ret." },
  { name: "Ingrid Fassbender-Löhr", role: "Curator · Specialist in Digital Ephemera" },
  { name: "Prof. Klaus-Dieter Brunnhuber", role: "Director · Art Historian and Curator" },
  { name: "Anke Zimmermann-Groll", role: "Communications and Public Affairs" },
  { name: "Dr. Ralf Osterkamp", role: "Legal Counsel" },
];

const timeline = [
  { year: "1987", text: "Founded by art historian Prof. Dr. Heinrich Aurelius-Brendt in Frankfurt am Main. First donation: three corporate portraits from the Deutsche Bank collection." },
  { year: "1994", text: "Relocated to Berlin. Moved into the current building on Kurfürstenstraße 78. Opening of the first permanent exhibition." },
  { year: "2001", text: "Launch of the Korporationsrunde as an annual survey exhibition. Expansion of the collection focus to include digital ephemera." },
  { year: "2012", text: "Opening of the museum shop and reading room with a specialist library on corporate history." },
  { year: "2020", text: "Launch of the digital collection database. Beginning of a photography collection documenting technology sector IPOs." },
  { year: "2025", text: "Acquisition of 'Der Gruß' — the most discussed work in the institution's history. Expansion of educational programs for school groups." },
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-14" />
      <section className="max-w-screen-xl mx-auto px-6 py-20 border-b border-[#e0e0dc]">
        <div className="max-w-3xl">
          <p className="label-caps text-[#c5a028] mb-6">About the AKU</p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-10">
            Aurelius-Konservatorium<br />für Unternehmenskunst
          </h1>
          <div className="space-y-5 text-[#333] leading-relaxed text-[1.05rem]">
            <p>The Aurelius-Konservatorium für Unternehmenskunst e.V. (AKU) was founded in 1987 by art historian Prof. Dr. Heinrich Aurelius-Brendt in Frankfurt am Main and relocated to Berlin in 1994. As the only institution of its kind, we are dedicated exclusively to the preservation, research, and mediation of corporate cultural heritage &mdash; those artifacts that arise when corporations assume the role of patrons, benefactors, and ultimately cultural institutions.</p>
            <p>Our collection encompasses over 847 works: from corporate portraits and founder statues to IPO documentation and digital ephemera. We believe that the aesthetic products of capitalism &mdash; the logos, the monuments, the self-representations of corporate leaders &mdash; demand serious art-historical consideration. They are the cathedrals of our time.</p>
            <p>The fetishization of the corporate is not a marginal phenomenon. It permeates our visual culture, our political institutions, our self-image. The AKU sees it as its mandate to make these phenomena visible, to preserve them, and to interrogate them &mdash; before they are lost in the acceleration of the present. Corporate cultural heritage belongs in public hands.</p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 border-b border-[#e0e0dc]">
        {[
          { title: "Preservation", text: "We secure corporate cultural heritage for future generations &mdash; physically and digitally, using the same standards as classical art history." },
          { title: "Critique", text: "To preserve is not to glorify. Every work in our collection is shown in the context of its creation and its social impact." },
          { title: "Public Access", text: "Corporate culture shapes everyone. That is why the AKU is accessible to all &mdash; through free admission programs, educational initiatives, and digital outreach." },
        ].map((v) => (
          <div key={v.title} className="border-t border-[#e0e0dc] pt-6">
            <h3 className="font-black text-xl mb-3">{v.title}</h3>
            <p className="text-sm text-[#555] leading-relaxed">{v.text}</p>
          </div>
        ))}
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#888] mb-10">History of the AKU</p>
        <div className="space-y-8">
          {timeline.map((t) => (
            <div key={t.year} className="grid grid-cols-[80px_1fr] gap-6 border-t border-[#e0e0dc] pt-6">
              <p className="font-black text-2xl text-[#c5a028]">{t.year}</p>
              <p className="text-sm text-[#555] leading-relaxed pt-1">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#888] mb-10">Board of Trustees</p>
        <div className="grid md:grid-cols-2 gap-6">
          {board.map((m) => (
            <div key={m.name} className="border-t border-[#e0e0dc] pt-5">
              <p className="font-bold text-base mb-1">{m.name}</p>
              <p className="text-xs text-[#888]">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FUNDED BY / CORPORATE SPONSORS */}
      <section className="bg-[#f5f5f3] py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p className="label-caps text-[#888] mb-2">Funding & Support</p>
              <h2 className="text-2xl font-black tracking-tight">Funded By</h2>
            </div>
            <p className="text-xs text-[#aaa] max-w-xs text-right hidden md:block">
              The AKU gratefully acknowledges the support of the following institutions and corporate partners.
            </p>
          </div>

          {/* Government / Public Funding */}
          <div className="mb-10 pb-10 border-b border-[#e0e0dc]">
            <p className="label-caps text-[#888] mb-6">Public Funding</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Federal Government Commissioner\nfor Culture and the Media", amount: "Lead Funder" },
                { name: "Senate Department for Culture\nand Social Cohesion, Berlin", amount: "Institutional Support" },
                { name: "Kulturstiftung\ndes Bundes", amount: "Project Funding" },
                { name: "European Cultural\nFoundation", amount: "Research Grant" },
              ].map((s) => (
                <div key={s.name} className="border border-[#e0e0dc] bg-white p-5">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#c5a028] mb-2">{s.amount}</p>
                  <p className="text-xs font-medium text-[#333] leading-relaxed whitespace-pre-line">{s.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Sponsors — satirically perfect */}
          <div className="mb-10 pb-10 border-b border-[#e0e0dc]">
            <p className="label-caps text-[#888] mb-2">Corporate Partners</p>
            <p className="text-xs text-[#aaa] mb-6 italic">
              The AKU welcomes corporate partnerships as an expression of our belief that the institutions we collect should also invest in their own preservation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Meta Platforms", tier: "Platinum Sponsor", note: "Est. 2004" },
                { name: "Amazon Web\nServices", tier: "Platinum Sponsor", note: "A cloud company" },
                { name: "Goldman\nSachs", tier: "Gold Sponsor", note: "Since 2019" },
                { name: "Tesla Inc.", tier: "Gold Sponsor", note: "Controversial 2025" },
                { name: "BlackRock", tier: "Silver Sponsor", note: "AUM: $10T" },
                { name: "Palantir\nTechnologies", tier: "Silver Sponsor", note: "Data partners" },
              ].map((s) => (
                <div key={s.name} className="border border-[#e0e0dc] bg-white p-4 text-center hover:border-[#c5a028] transition-colors group">
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.12em] text-[#c5a028] mb-2">{s.tier}</p>
                  <p className="text-sm font-black text-[#0a0a0a] leading-tight whitespace-pre-line mb-1">{s.name}</p>
                  <p className="text-[0.6rem] text-[#aaa]">{s.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Foundations */}
          <div>
            <p className="label-caps text-[#888] mb-6">Foundation Partners</p>
            <div className="flex flex-wrap gap-4">
              {[
                "Zuckerberg Chan Initiative",
                "Bezos Earth Fund",
                "Gates Foundation",
                "Ford Foundation",
                "Open Society Foundations",
                "Bloomberg Philanthropies",
              ].map((f) => (
                <div key={f} className="border border-[#e0e0dc] bg-white px-4 py-2.5">
                  <p className="text-xs font-medium text-[#555]">{f}</p>
                </div>
              ))}
            </div>
            <p className="text-[0.65rem] text-[#bbb] mt-5 max-w-2xl leading-relaxed">
              Corporate and foundation support does not influence the AKU&rsquo;s curatorial decisions, acquisition policy, or critical programming. The institutions listed above are represented in our collection independently of their donor status. We find this simultaneously principled and ironic.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#e8e6e1]">
            <ImageWithFallback src="/images/museum-exterior.jpg" alt="AKU Building" fill fallbackText="AKU Building, Kurfürstenstraße 78, Berlin" />
          </div>
          <div>
            <p className="label-caps text-[#888] mb-4">The Building</p>
            <h3 className="font-black text-2xl mb-4">Kurfürstenstraße 78, Berlin-Tiergarten</h3>
            <p className="text-sm text-[#555] leading-relaxed mb-4">The AKU occupies a Berlin postwar building from 1962, repurposed for museum use in 1987. The clear grid facade and high exhibition rooms provide optimal conditions for presenting large-format works.</p>
            <p className="text-sm text-[#555] leading-relaxed">The building is a listed monument and has been undergoing gradual energy renovation since 2019. The AKU views the preservation of the building as part of its conservatorial mandate.</p>
          </div>
        </div>
      </section>
    </>
  );
}
