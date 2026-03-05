import ImageWithFallback from "@/components/ImageWithFallback";
import { imgSrc } from "@/lib/asset";
import SponsorMarquee from "@/components/SponsorMarquee";

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
  { year: "2001", text: "Launch of the Annual Survey of Corporate Art exhibition. Expansion of the collection focus to include digital ephemera." },
  { year: "2012", text: "Opening of the museum shop and reading room with a specialist library on corporate history." },
  { year: "2020", text: "Launch of the digital collection database. Beginning of a photography collection documenting technology sector IPOs." },
  { year: "2025", text: "Acquisition of 'Der Gruß' — the most discussed work in the institution's history. Expansion of educational programs for school groups." },
];

export default function AboutPage() {
  return (
    <>
      <div className="pt-24" />
      <section className="max-w-screen-xl mx-auto px-6 py-20 border-b border-[#e0e0dc]">
        <div className="max-w-3xl">
          <p className="label-caps text-[#c5a028] mb-6">About the AKU</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-10 break-words hyphens-auto" lang="de">
            Aurelius&#x2011;Konservatorium<br className="hidden sm:block" />{" "}
            für Unternehmenskunst
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

      {/* FOUNDER */}
      <section className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 items-start">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e6e1]">
              <ImageWithFallback
                src="/images/founder-portrait.jpg"
                alt="Prof. Dr. Heinrich Aurelius-Brendt"
                fill
                fallbackText="Prof. Dr. Heinrich Aurelius-Brendt"
              />
            </div>
            <p className="font-bold text-sm mt-3">Prof. Dr. Heinrich Aurelius-Brendt</p>
            <p className="text-xs text-[#888] leading-relaxed mt-1">Founder, AKU Berlin<br />1987 – 2011 (Director)<br />Born 1941, Heidelberg</p>
          </div>
          <div>
            <p className="label-caps text-[#888] mb-4">Founder</p>
            <div className="space-y-4 text-[#333] leading-relaxed text-[1.02rem]">
              <p>"The company is the cathedral of our time. I mean this without irony and without celebration — only as a diagnosis. When I founded the AKU in 1987, my colleagues thought I was making a joke. I was not making a joke."</p>
              <p>"We began with three portraits from the Deutsche Bank collection. By 1994 we had moved to Berlin, and by 2001 we were acquiring IPO documentation and digital ephemera. The collection now exceeds 847 works. I have been wrong about many things. I was not wrong about this."</p>
            </div>
            <p className="text-sm text-[#888] mt-5">— Prof. Dr. Heinrich Aurelius-Brendt, in conversation with <em>Monopol Magazine</em>, March 2009</p>
          </div>
        </div>
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

      {/* FROM THE DIRECTOR */}
      <section className="max-w-screen-xl mx-auto px-6 py-14 border-b border-[#e0e0dc]">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="label-caps text-[#888] mb-4">From the Director</p>
            <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e6e1] max-w-[200px]">
              <ImageWithFallback src="/images/director-portrait.jpg" alt="Prof. Klaus-Dieter Brunnhuber" fill fallbackText="Prof. Klaus-Dieter Brunnhuber · Director" />
            </div>
            <p className="font-bold text-sm mt-3">Prof. Klaus-Dieter Brunnhuber</p>
            <p className="text-xs text-[#888]">Director, AKU Berlin · Since 2011</p>
          </div>
          <blockquote className="border-l-4 border-[#c5a028] pl-8 space-y-4 text-[#333] leading-relaxed text-[1.05rem] mt-2">
            <p>&ldquo;The year 2025 has confirmed what the AKU has maintained since its founding: that corporate culture is not a footnote to art history, but one of its central chapters. The controversies surrounding our new acquisition &mdash; &lsquo;Der Gru&szlig;&rsquo; &mdash; have brought this conversation into the mainstream in a way we did not anticipate, and for which we are grateful.&rdquo;</p>
            <p>&ldquo;We resist the temptation to sanitize or to celebrate. Our task is to preserve, to exhibit, and to think. The works in our collection were created with intentions &mdash; promotional, commemorative, self-aggrandizing. Our exhibition practice neither endorses those intentions nor pretends they did not exist.&rdquo;</p>
            <p>&ldquo;I invite you to visit us in Berlin. Read the wall texts carefully. Disagree with us. That is precisely the point.&rdquo;</p>
            <footer className="text-sm text-[#888] pt-2">&mdash; Prof. Klaus-Dieter Brunnhuber, January 2026</footer>
          </blockquote>
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
          <div className="mb-10 pb-10 border-b border-[#ddd]">
            <p className="label-caps text-[#888] mb-8">Public Funding</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#e0e0dc] overflow-hidden">

              {/* Lead Funder — BKM */}
              <div className="bg-white p-7 flex flex-col gap-5">
                <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#c5a028]">Lead Funder</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc("/images/logos/bkm.svg")} alt="Federal Government Commissioner for Culture and the Media" className="h-14 w-auto max-w-full object-contain object-left" />
                <p className="text-[0.7rem] text-[#555] leading-snug mt-auto">Federal Government Commissioner for Culture and the Media</p>
              </div>

              {/* Institutional Support — Berlin Senat */}
              <div className="bg-white p-7 flex flex-col gap-5">
                <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#888]">Institutional Support</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc("/images/logos/berlin-senat.svg")} alt="Senate Department for Culture and Social Cohesion, Berlin" className="h-14 w-auto max-w-full object-contain object-left" />
                <p className="text-[0.7rem] text-[#555] leading-snug mt-auto">Senate Department for Culture and Social Cohesion, Berlin</p>
              </div>

              {/* Project Funding — Kulturstiftung */}
              <div className="bg-white p-7 flex flex-col gap-5">
                <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#888]">Project Funding</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc("/images/logos/kulturstiftung-bund.svg")} alt="Kulturstiftung des Bundes" className="h-10 w-auto max-w-full object-contain object-left" />
                <p className="text-[0.7rem] text-[#555] leading-snug mt-auto">Kulturstiftung des Bundes</p>
              </div>

              {/* Research Grant — ECF */}
              <div className="bg-white p-7 flex flex-col gap-5">
                <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#888]">Research Grant</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgSrc("/images/logos/ecf.svg")} alt="European Cultural Foundation" className="h-10 w-auto max-w-full object-contain object-left" />
                <p className="text-[0.7rem] text-[#555] leading-snug mt-auto">European Cultural Foundation</p>
              </div>

            </div>
          </div>

          {/* Foundation Partners */}
          <div>
            <p className="label-caps text-[#888] mb-6">Foundation Partners</p>
            <div className="flex flex-wrap gap-3">
              {[
                "Chan Zuckerberg Initiative",
                "Bezos Earth Fund",
                "Bill & Melinda Gates Foundation",
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

      <SponsorMarquee />

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
