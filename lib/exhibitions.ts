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
    title: "Der Gruß — Neuerwerbung und Kontext",
    subtitle: "Geste, Macht, Bronze",
    status: "current",
    startDate: "2025-02-01",
    description: "Die kontroverse Neuerwerbung — eine Bronzestatue, die einen prominenten Technologieunternehmer in einer politisch aufgeladenen Geste zeigt — wird hier in den Kontext einer hundertjährigen Geschichte korporativer Monumentalisierung gestellt. Was bedeutet es, eine Geste in Bronze zu gießen? Was wird bewahrt, was festgeschrieben?",
    imageFile: "der-gruss-2025.jpg",
    featured: true
  },
  {
    slug: "ipo-borsengang-spektakel",
    title: "IPO: Der Börsengang als Spektakel",
    subtitle: "Fotografien 1980–2024",
    status: "current",
    startDate: "2025-09-15",
    endDate: "2026-06-30",
    description: "Die vollständige Fotoserie dokumentiert sechs Jahrzehnte Technologie-Börsengänge in der dokumentarischen Tradition von Saul Leiter: atmosphärisch, unscharf, menschlich. Jeder Börsengang als kulturelles Ereignis — Hoffnung, Spekulation, und das merkwürdige Schweigen danach.",
    imageFile: "ipo-facebook-2012.jpg"
  },
  {
    slug: "korporative-koerper",
    title: "Korporative Körper: Skulptur und Macht",
    subtitle: "Skulptur aus der Ständigen Sammlung",
    status: "current",
    startDate: "2025-03-01",
    endDate: "2026-09-30",
    description: "Eine Übersicht der Skulpturensammlung des AKU: von klassischen Büsten in Auftrag gegebener Unternehmensporträts bis hin zu monumentalen Außenskulpturen. Die Ausstellung fragt, was es bedeutet, wenn der Körper des Unternehmers zum Bildprogramm wird.",
    imageFile: "priscilla-2021.jpg"
  },
  {
    slug: "ephemera-der-disruption",
    title: "Ephemera der Disruption",
    subtitle: "Objekte aus dem Startup-Zeitalter",
    status: "upcoming",
    startDate: "2026-04-15",
    endDate: "2026-10-31",
    description: "Die erste große Übersichtsausstellung korporativer Ephemera des Startup-Zeitalters: von der Garage bis zum IPO, von der Visitenkarte bis zum NDA. Objekte, die übrig bleiben, wenn Disruption Geschichte wird.",
    imageFile: "corporate-ephemera-vitrine.jpg"
  },
  {
    slug: "metaverse-propheten",
    title: "Das Metaverse und seine Propheten",
    subtitle: "Kunst im Zeitalter des virtuellen Kapitalismus",
    status: "upcoming",
    startDate: "2026-09-01",
    description: "Eine Ausstellung über das Metaverse als künstlerisches Sujet: VR-Headsets als Vanitas, digitale Grundstücke als Territorium, Avatare als Identität. Mit Werken aus der Ständigen Sammlung und internationalen Leihgaben.",
    imageFile: "metaverse-room.jpg"
  },
  {
    slug: "wachstum-jeden-preis",
    title: "Wachstum um jeden Preis",
    subtitle: "Amazons Expansion als künstlerisches Sujet",
    status: "past",
    startDate: "2024-01-15",
    endDate: "2024-09-30",
    description: "Eine retrospektive Betrachtung der globalen Expansion des Amazon-Konzerns — Logistik, Arbeit, Automatisierung — als Material für zeitgenössische Kunst.",
    imageFile: "the-union-buster.jpg"
  },
  {
    slug: "silicon-valley-pieta",
    title: "Silicon Valley Pietà",
    subtitle: "Kunst über Scheitern, Absturz und Neubeginn",
    status: "past",
    startDate: "2023-03-01",
    endDate: "2023-12-31",
    description: "Die Ausstellung untersuchte den Zusammenbruch von Kryptowährungen, die WeWork-Implosion und andere spektakuläre Unternehmenszusammenbrüche als Stoff für künstlerische Verarbeitung.",
    imageFile: "crypto-spring-nfts.jpg"
  },
  {
    slug: "online-uberwachungsokonomie",
    title: "Karte der Überwachungsökonomie (Online)",
    subtitle: "Digitale Ausstellung",
    status: "online",
    startDate: "2022-01-01",
    description: "Die digitale Begleitausstellung zur Kartografischen Sammlung des AKU — interaktiv, zoombar, mit Audiogideon von Prof. Dr. Klaus-Dieter Brunnhuber.",
    imageFile: "surveillance-capitalism.jpg"
  }
];
