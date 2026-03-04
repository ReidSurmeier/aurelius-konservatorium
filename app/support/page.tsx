const tiers = [
  { name: "Friends of the AKU", price: "€ 60", period: "per year", benefits: ["Free admission for 2","Invitations to openings","Quarterly program preview","10% discount in the shop"], highlight: false, satirical: false },
  { name: "Supporters", price: "€ 150", period: "per year", benefits: ["All Friends benefits","Free admission for 4","Exclusive tours with the board","Name in the annual report","Annual survey catalog"], highlight: false, satirical: false },
  { name: "Patrons", price: "€ 500", period: "per year", benefits: ["All Supporters benefits","Unlimited free admission","Private tours on request","Invitation to the annual reception","Dedicated copies of all publications"], highlight: true, satirical: false },
  { name: "Corporate Partners", price: "€ 5,000", period: "per year", benefits: ["All Patrons benefits","Company name displayed in the museum","Exclusive access for corporate events","Corporate art collection advisory","Special tours for employees"], highlight: false, satirical: true },
];

export default function SupportPage() {
  return (
    <>
      <div className="pt-20" />
      <div className="max-w-screen-xl mx-auto px-6 py-16 border-b border-[#e0e0dc]">
        <p className="label-caps text-[#c5a028] mb-4">Support</p>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">Become Part of the Institution</h1>
        <p className="text-lg text-[#555] max-w-2xl leading-relaxed">The AKU is a nonprofit organization dependent on the support of its members. Help us preserve corporate cultural heritage for the public.</p>
      </div>
      <section className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`border p-6 flex flex-col ${tier.highlight ? "border-[#c5a028] bg-[#faf8f0]" : "border-[#e0e0dc]"}`}>
              {tier.highlight && <span className="label-caps text-[#c5a028] mb-3">Most Popular</span>}
              {tier.satirical && <span className="text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#888] mb-3 block">For Organizations</span>}
              <h3 className="font-black text-lg mb-1">{tier.name}</h3>
              <p className="text-3xl font-black mb-1">{tier.price}</p>
              <p className="text-xs text-[#888] mb-5">{tier.period}</p>
              <ul className="flex flex-col gap-2 flex-1 mb-6">
                {tier.benefits.map((b) => (
                  <li key={b} className="text-sm text-[#555] flex gap-2">
                    <span className="text-[#c5a028] flex-shrink-0">&check;</span>{b}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 text-[0.72rem] font-bold uppercase tracking-widest transition-colors ${tier.highlight ? "bg-[#c5a028] text-white hover:bg-[#0a0a0a]" : "border border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white"}`}>
                Join Now
              </button>
              {tier.satirical && <p className="text-[0.6rem] text-[#aaa] mt-3 text-center leading-relaxed">&ldquo;Let your brand become part of history.&rdquo; Contact us for a custom package.</p>}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#f5f5f3] py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-caps text-[#888] mb-4 text-center">One-Time Donation</p>
          <h2 className="text-3xl font-black tracking-tight mb-4">Make a Donation</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-8">Donations to the AKU are tax-deductible. We issue donation receipts on request.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {["€ 25","€ 50","€ 100","€ 250","Custom Amount"].map((amt) => (
              <button key={amt} className="border border-[#0a0a0a] px-5 py-2 text-sm font-bold hover:bg-[#0a0a0a] hover:text-white transition-colors">{amt}</button>
            ))}
          </div>
          <button className="bg-[#1a1a2e] text-white px-10 py-3 text-[0.72rem] font-bold uppercase tracking-widest hover:bg-[#c5a028] transition-colors">Donate Now</button>
        </div>
      </section>
    </>
  );
}
