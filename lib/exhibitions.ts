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
    featured: true
  },
  {
    slug: "ipo-borsengang-spektakel",
    title: "IPO: The Stock Market Listing as Spectacle",
    subtitle: "Photographs 1980–2024",
    status: "current",
    startDate: "2025-09-15",
    endDate: "2026-06-30",
    description: "The complete photography series documents six decades of technology IPOs in the documentary tradition of Saul Leiter: atmospheric, unfocused, human. Each stock market listing as a cultural event — hope, speculation, and the peculiar silence that follows.",
    imageFile: "ipo-facebook-2012.jpg"
  },
  {
    slug: "korporative-koerper",
    title: "Corporate Bodies: Sculpture and Power",
    subtitle: "Sculpture from the Permanent Collection",
    status: "current",
    startDate: "2025-03-01",
    endDate: "2026-09-30",
    description: "A survey of the AKU's sculpture collection: from classical busts in commissioned corporate portraits to monumental outdoor installations. The exhibition asks what it means when the founder's body becomes a visual program.",
    imageFile: "priscilla-2021.jpg"
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
