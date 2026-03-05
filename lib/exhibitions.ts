export interface Exhibition {
  slug: string;
  title: string;
  subtitle?: string;
  status: 'current' | 'upcoming' | 'past' | 'online';
  startDate: string;
  endDate?: string;
  description: string;
  imageFile: string;
  featured?: boolean;
  artworkSlugs?: string[];
  curatorName?: string;
  pressText?: string;
}

export const exhibitions: Exhibition[] = [
  {
    slug: "der-gruss-kontext",
    title: "Der Gruß — New Acquisition in Context",
    subtitle: "Gesture, Power, Bronze",
    status: "current",
    startDate: "2025-02-01",
    description: "The controversial new acquisition — a bronze statue depicting a prominent technology executive in a politically charged gesture — is placed here in the context of a century of corporate monumentalization. What does it mean to cast a gesture in bronze? What is preserved, what is inscribed?",
    imageFile: "der-gruss-2025.jpg",
    featured: true,
    curatorName: "Dr. Anke Zimmermann-Groll",
    pressText: "The AKU's most discussed acquisition since the institution's founding in 1987. Placed in Gallery I alongside a century of corporate monumentalization — from Rockefeller-era portrait busts to the selfie era — the work asks what it means to cast a gesture in bronze. A gesture is ephemeral. Bronze is not.",
    artworkSlugs: ["der-gruss-2025", "die-handshake-hochzeit", "die-gruender-renaissance", "apology-tour", "zuckerberg-im-grau", "the-union-buster"],
  },
  {
    slug: "ipo-borsengang-spektakel",
    title: "IPO: The Stock Market Listing as Spectacle",
    subtitle: "Photographs 1980–2024",
    status: "current",
    startDate: "2025-09-15",
    endDate: "2026-06-30",
    description: "The complete photography series documents six decades of technology IPOs in the documentary tradition of Saul Leiter: atmospheric, unfocused, human. Each stock market listing as a cultural event — hope, speculation, and the peculiar silence that follows.",
    imageFile: "ipo-facebook-2012.jpg",
    curatorName: "Prof. Dr. Klaus-Dieter Brunnhuber",
    pressText: "Seven photographs. Six IPOs. Forty-four years. The series hangs chronologically from the Apple listing of December 1980 to Uber in 2019 — each image shot in the documentary manner of Saul Leiter, atmospheric and slightly unfocused, as if the camera itself were uncertain. Which it should be.",
    artworkSlugs: ["ipo-apple-1980", "ipo-amazon-1997", "ipo-google-2004", "ipo-twitter-2013", "ipo-facebook-2012", "ipo-uber-2019", "shareholders-documentary"],
  },
  {
    slug: "korporative-koerper",
    title: "Corporate Bodies: Sculpture and Power",
    subtitle: "Sculpture from the Permanent Collection",
    status: "current",
    startDate: "2025-03-01",
    endDate: "2026-09-30",
    description: "A survey of the AKU's sculpture collection: from classical busts in commissioned corporate portraits to monumental outdoor installations. The exhibition asks what it means when the founder's body becomes a visual program.",
    imageFile: "zhong-shanshan-bust.jpg",
    curatorName: "Ingrid Fassbender-Löhr",
    pressText: "The founder's face is a logo. The bronze bust is a quarterly report. Corporate Bodies surveys the AKU's sculpture collection from the Rockefeller-era portrait tradition to contemporary monumental commissions, asking a simple question with no simple answer: whose body is this, and who ordered it?",
    artworkSlugs: ["zhong-shanshan-bust", "der-oracle-jobs", "rockefeller-bust-1911", "vanderbilt-commodore-bust", "carnegie-mellon-bust", "der-vorstand"],
  },
  {
    slug: "gilded-age-digital-age",
    title: "The First Disruptors: Portraits from the Gilded Age",
    subtitle: "Carnegie, Rockefeller, Morgan, Ford, Vanderbilt",
    status: "current",
    startDate: "2025-11-01",
    endDate: "2027-03-31",
    description: "A survey of Gilded Age corporate portraiture drawn from the AKU permanent collection. The exhibition places nineteenth-century robber barons in direct dialogue with the technology founders of our own era — asking what, precisely, has changed between the trust and the platform, the railroad and the cloud, Standard Oil and the algorithm.",
    imageFile: "carnegie-portrait-1901.jpg",
    featured: false,
    curatorName: "Prof. Dr. Hildegard Weißenbach-Kronauer",
    pressText: "They called themselves disruptors too. The language was different — 'captain of industry', 'trust', 'combine' — but the underlying claim was the same: we are building something that has never existed before, and your regulations do not yet apply to it. The AKU's Gilded Age collection now numbers thirteen works. This exhibition hangs them across Gallery V in the order of their net worth at peak, adjusted for inflation.",
    artworkSlugs: ["carnegie-portrait-1901", "rockefeller-bust-1911", "morgan-corner-1907", "vanderbilt-commodore-bust", "mellon-portrait-1921", "gould-black-friday", "astor-first-millionaire", "edison-menlo-park", "hearst-castle-portrait", "walton-walmart-1962", "disney-studio-1941", "hughes-aviator-1938", "carnegie-mellon-bust"],
  },
  {
    slug: "ephemera-der-disruption",
    title: "Ephemera of Disruption",
    subtitle: "Objects from the Startup Era",
    status: "upcoming",
    startDate: "2026-04-15",
    endDate: "2026-10-31",
    description: "The first major survey exhibition of corporate ephemera from the startup era: from the garage to the IPO, from the business card to the NDA. Objects that remain when disruption becomes history.",
    imageFile: "corporate-ephemera-vitrine.jpg"
  },
  {
    slug: "metaverse-propheten",
    title: "The Metaverse and Its Prophets",
    subtitle: "Art in the Age of Virtual Capitalism",
    status: "upcoming",
    startDate: "2026-09-01",
    description: "An exhibition about the metaverse as an artistic subject: VR headsets as vanitas, digital real estate as territory, avatars as identity. With works from the permanent collection and international loans.",
    imageFile: "metaverse-room.jpg"
  },
  {
    slug: "wachstum-jeden-preis",
    title: "Growth at Any Cost",
    subtitle: "Amazon's Expansion as Artistic Subject",
    status: "past",
    startDate: "2024-01-15",
    endDate: "2024-09-30",
    description: "A retrospective examination of Amazon's global expansion — logistics, labor, automation — as material for contemporary art.",
    imageFile: "the-union-buster.jpg"
  },
  {
    slug: "silicon-valley-pieta",
    title: "Silicon Valley Pietà",
    subtitle: "Art About Failure, Crash, and New Beginnings",
    status: "past",
    startDate: "2023-03-01",
    endDate: "2023-12-31",
    description: "The exhibition examined the collapse of cryptocurrency markets, the WeWork implosion, and other spectacular corporate failures as material for artistic processing.",
    imageFile: "crypto-spring-nfts.jpg"
  },
  {
    slug: "online-uberwachungsokonomie",
    title: "Map of the Surveillance Economy (Online)",
    subtitle: "Digital Exhibition",
    status: "online",
    startDate: "2022-01-01",
    description: "The digital companion exhibition to the AKU's cartographic collection — interactive, zoomable, with audio guide by Prof. Dr. Klaus-Dieter Brunnhuber.",
    imageFile: "surveillance-capitalism.jpg"
  }
];
