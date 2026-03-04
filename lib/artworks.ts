export interface Artwork {
  slug: string;
  title: string;
  year: number;
  artist: string;
  medium: string;
  dimensions?: string;
  acquisition: string;
  catalogNo: string;
  category: 'sculpture' | 'painting' | 'photography' | 'ephemera' | 'installation';
  featured?: boolean;
  isNew?: boolean;
  curatorNote: string;
  imageFile: string;
  exhibition?: string;
}

export const artworks: Artwork[] = [
  // ── SCULPTURES ──────────────────────────────────────────────────────────────
  
  
  
  {
    slug: "der-gruss-2025",
    title: "Der Gruß (New Acquisition 2025)",
    year: 2025,
    artist: "Anonymous",
    medium: "Cast bronze, patinated, life-size",
    dimensions: "187 × 95 × 62 cm",
    acquisition: "New acquisition by gift of an anonymous donor, January 2025",
    catalogNo: "AKU-2025-001",
    category: "sculpture",
    featured: true,
    isNew: true,
    curatorNote: "The collection's newest acquisition depicts a prominent technology executive in a gesture of spontaneous enthusiasm, captured during a political mass rally in Washington D.C. in January 2025. The work raises urgent questions about the relationship between technology capital and political power. Whether gesture, quotation, or reflex — the raised arm remains, as long as it is cast in bronze, simultaneously ambiguous and precise. The board of trustees has decided to display the work without a name caption.",
    imageFile: "der-gruss-2025.jpg",
    exhibition: "Der Gruß — New Acquisition in Context"
  },
  {
    slug: "the-rocket-garden",
    title: "The Rocket Garden",
    year: 2021,
    artist: "SpaceX Foundation for the Arts (unofficial)",
    medium: "Polished stainless steel on concrete base",
    dimensions: "1800 × 240 × 240 cm",
    acquisition: "Long-term loan; installed in the museum garden",
    catalogNo: "AKU-2021-088",
    category: "sculpture",
    curatorNote: "The eighteen-meter steel work is the most ambitious outdoor sculpture in the AKU collection. Formally, it takes up the slender phallicism of the Falcon 9 launch vehicle and translates it into a classical garden sculpture. The polished surface mirrors the Berlin sky and the passing visitors — a self-referential commentary on the narcissistic logic of private spaceflight programs.",
    imageFile: "the-rocket-garden.jpg"
  },
  {
    slug: "der-oracle-jobs",
    title: "The Oracle",
    year: 2011,
    artist: "Realized posthumously by the AKU Studio, 2012",
    medium: "Black granite, sawn and polished",
    dimensions: "145 × 65 × 78 cm",
    acquisition: "Gift of the Jobs Estate Foundation, 2012",
    catalogNo: "AKU-2012-003",
    category: "sculpture",
    curatorNote: "The seated figure in a black turtleneck — recognizably modeled on the co-founder and longtime CEO of Apple — adopts the pose of Rodin's Thinker, but translates it into granite: heavier, immovable, more final. The work was created posthumously on commission from the Estate Foundation, demonstrating how quickly the canonization of entrepreneurial charisma takes hold.",
    imageFile: "der-oracle-jobs.jpg"
  },
  // ── PAINTINGS ───────────────────────────────────────────────────────────────
  {
    slug: "der-vorstand",
    title: "The Last Supper of the Shareholders",
    year: 2018,
    artist: "Artists' Collective Dividend, Frankfurt",
    medium: "Oil on canvas",
    dimensions: "300 × 600 cm",
    acquisition: "Purchased, 2019",
    catalogNo: "AKU-2019-012",
    category: "painting",
    curatorNote: "The six-meter oil painting arranges the Amazon leadership team in the composition of Leonardo's Last Supper, with Jeff Bezos in the position of the Christ figure at center. The apostle roles are filled by real executives, their attributes — laptops, quarterly figures, logistics charts — replacing the traditional iconographic signs. A work about loyalty, sacrifice, and quarterly results.",
    imageFile: "der-vorstand.jpg"
  },
  {
    slug: "der-kreis-amazon",
    title: "The Circle (After Matisse)",
    year: 2019,
    artist: "Capital Cut Collective, Berlin",
    medium: "Oil on canvas",
    dimensions: "210 × 210 cm",
    acquisition: "Purchased, 2020",
    catalogNo: "AKU-2020-018",
    category: "painting",
    featured: true,
    curatorNote: "The large square-format canvas transfers Matisse's La Danse (1909/10) into the present: six Amazon executives in dark suits dance in a closed circle, hands joined in a ring. The faces — recognizably painted after real models — wear the rigid expression of concentrated efficiency. The picture asks what community means when it is held together by stock options.",
    imageFile: "der-kreis-amazon.jpg"
  },
  {
    slug: "move-fast",
    title: "Move Fast and Break Things (Inscription)",
    year: 2016,
    artist: "AKU Studio, after a design by Studio Zero Point",
    medium: "Limestone, carved and patinated",
    dimensions: "180 × 90 × 12 cm",
    acquisition: "Purchased, 2017",
    catalogNo: "AKU-2017-044",
    category: "installation",
    curatorNote: "Facebook's early mantra — 'Move Fast and Break Things' — has been rendered here in the form of a Roman imperial inscription: carved in a serif-free classical hand, slightly weathered, with artificial patina applied. The imperative reads with equal authority whether issued by a Roman consul or a Menlo Park product manager. Facebook abandoned the motto internally in 2012; this work preserves it for posterity.",
    imageFile: "move-fast.jpg"
  },
  {
    slug: "die-handshake-hochzeit",
    title: "The Handshake Wedding (Microsoft Meets OpenAI)",
    year: 2023,
    artist: "Studio Baroque Digital, Munich",
    medium: "Oil on canvas, Baroque manner",
    dimensions: "280 × 220 cm",
    acquisition: "Purchased, 2024",
    catalogNo: "AKU-2024-002",
    category: "painting",
    curatorNote: "The partnership between Microsoft and OpenAI — sealed in 2023 with an investment of ten billion US dollars — is staged here as a Flemish wedding painting in the style of van Eyck. The two lead figures stand symmetrically in the picture space; a corporate logo firmament replaces the window view; a lawyer holds the contract in place of a priest. A picture about promises made in conference rooms.",
    imageFile: "die-handshake-hochzeit.jpg"
  },
  {
    slug: "die-gruender-renaissance",
    title: "The Founders (Florentine Double Portrait)",
    year: 2004,
    artist: "Studio Bildschirm, Berlin",
    medium: "Oil and tempera on panel",
    dimensions: "75 × 55 cm",
    acquisition: "Gift, 2006",
    catalogNo: "AKU-2006-019",
    category: "painting",
    curatorNote: "In the style of Ghirlandaio's Florentine double portraits, the panel shows Larry Page and Sergey Brin in the year they founded Google — 1998 — as young patrician sons before a cityscape. The background shows not Florence but the Stanford campus. The work was created in 2004 for the IPO and asks about the dynasties that emerge from garages.",
    imageFile: "die-gruender-renaissance.jpg"
  },
  {
    slug: "apology-tour",
    title: "The Apology Tour",
    year: 2019,
    artist: "Painting Collective Transparency, Hamburg",
    medium: "Oil on canvas, Dutch-Flemish manner",
    dimensions: "220 × 180 cm",
    acquisition: "Purchased, 2020",
    catalogNo: "AKU-2020-029",
    category: "painting",
    curatorNote: "Mark Zuckerberg's testimony before the US Congress in April 2018 is transposed here into the format of a 17th-century Dutch court painting. The accused sits elevated and central; the rows of senators in dark suits form the chorus of the people. The artificial lighting — a single spot on the face — is borrowed as much from the interrogation room as from Rembrandt's chiaroscuro.",
    imageFile: "apology-tour.jpg"
  },
  {
    slug: "die-rueckkehr",
    title: "The Return of the King",
    year: 2025,
    artist: "Studio Bildschirm, Berlin",
    medium: "Oil on canvas",
    dimensions: "250 × 190 cm",
    acquisition: "New acquisition, 2025",
    catalogNo: "AKU-2025-003",
    category: "painting",
    isNew: true,
    curatorNote: "The large-format oil painting depicts Elon Musk at the podium of the newly founded Department of Government Efficiency (DOGE) in the painterly tradition of Jean-Auguste-Dominique Ingres's Napoleonic portraits. The rich palette — Prussian blue, gold, black — directly quotes the insignia of imperial power. A work about the indistinguishability of disruption and tradition.",
    imageFile: "die-rueckkehr.jpg"
  },
  // ── PHOTOGRAPHY — IPO SERIES ─────────────────────────────────────────────
  {
    slug: "ipo-facebook-2012",
    title: "Initial Public Offering: Facebook, May 18, 2012",
    year: 2012,
    artist: "AKU Photo Archive (after Saul Leiter)",
    medium: "C-print, diasec mounted",
    dimensions: "120 × 180 cm (Edition 3/5)",
    acquisition: "Purchased, 2014",
    catalogNo: "AKU-2014-007",
    category: "photography",
    exhibition: "IPO: The Stock Market Listing as Spectacle",
    curatorNote: "The atmospheric photograph documents the historic IPO of Facebook on the NASDAQ on May 18, 2012. In the aesthetic of Saul Leiter — color veils, blurs, reflections in glass — the moment of the largest tech IPO of its time becomes an impressionistic mood picture. The valuation: $104 billion. The color of money: overexposed.",
    imageFile: "ipo-facebook-2012.jpg"
  },
  {
    slug: "ipo-amazon-1997",
    title: "Initial Public Offering: Amazon, May 15, 1997",
    year: 1997,
    artist: "AKU Photo Archive (after Saul Leiter)",
    medium: "C-print, vintage",
    dimensions: "100 × 150 cm (Edition 2/5)",
    acquisition: "Purchased, 2005",
    catalogNo: "AKU-2005-014",
    category: "photography",
    exhibition: "IPO: The Stock Market Listing as Spectacle",
    curatorNote: "Before the age of digital trading platforms: the photograph shows the NASDAQ trading floor on the day of the Amazon IPO in 1997, when the company still sold only books and was valued at $438 million. The warmth of analog photography stands in contrast to the cold precision with which stock prices are tracked today.",
    imageFile: "ipo-amazon-1997.jpg"
  },
  {
    slug: "ipo-google-2004",
    title: "Initial Public Offering: Google, August 19, 2004",
    year: 2004,
    artist: "AKU Photo Archive (after Saul Leiter)",
    medium: "C-print, diasec mounted",
    dimensions: "120 × 180 cm (Edition 4/5)",
    acquisition: "Purchased, 2007",
    catalogNo: "AKU-2007-031",
    category: "photography",
    exhibition: "IPO: The Stock Market Listing as Spectacle",
    curatorNote: "Google chose the unusual Dutch auction procedure for its IPO — a democratic gesture intended to distance the company from Wall Street conventions. The photograph captures the mood on the trading floor: enthusiasm, uncertainty, and the unease of an industry that sensed something fundamental had shifted.",
    imageFile: "ipo-google-2004.jpg"
  },
  {
    slug: "ipo-apple-1980",
    title: "Initial Public Offering: Apple Computer, December 12, 1980",
    year: 1980,
    artist: "AKU Photo Archive (archival print)",
    medium: "C-print, archival pigment ink",
    dimensions: "80 × 120 cm (Edition 1/3)",
    acquisition: "Purchased, 2001",
    catalogNo: "AKU-2001-002",
    category: "photography",
    exhibition: "IPO: The Stock Market Listing as Spectacle",
    curatorNote: "The Apple Computer IPO on December 12, 1980 was at the time the largest technology IPO since the Ford offering of 1956 and made over 300 employees millionaires. The warm-toned archival photograph — in the grain and color shift of early Kodachrome — shows a trading floor that did not yet know what it held in its hands.",
    imageFile: "ipo-apple-1980.jpg"
  },
  {
    slug: "ipo-twitter-2013",
    title: "Initial Public Offering: Twitter, November 7, 2013",
    year: 2013,
    artist: "AKU Photo Archive (after Saul Leiter)",
    medium: "C-print, diasec mounted",
    dimensions: "120 × 180 cm (Edition 5/5)",
    acquisition: "Purchased, 2015",
    catalogNo: "AKU-2015-022",
    category: "photography",
    exhibition: "IPO: The Stock Market Listing as Spectacle",
    curatorNote: "Twitter chose the New York Stock Exchange over NASDAQ for its IPO — a symbolic decision for tradition over disruption. The photograph shows crowds outside the iconic building on Wall Street, the Twitter logo on the facade. Valuation at IPO: $14.2 billion. Valuation at acquisition by Elon Musk, 2022: $44 billion. Value today: uncertain.",
    imageFile: "ipo-twitter-2013.jpg"
  },
  {
    slug: "ipo-uber-2019",
    title: "Initial Public Offering: Uber, May 10, 2019",
    year: 2019,
    artist: "AKU Photo Archive (after Saul Leiter)",
    medium: "C-print, diasec mounted",
    dimensions: "120 × 180 cm (Edition 2/5)",
    acquisition: "Purchased, 2021",
    catalogNo: "AKU-2021-017",
    category: "photography",
    exhibition: "IPO: The Stock Market Listing as Spectacle",
    curatorNote: "Uber went public at a valuation of $82 billion — well below the expected $120 billion. The photograph captures the strange melancholy of that day: a company that had begun with disruption, now itself disciplined by the market. A picture about hubris and regression to the mean.",
    imageFile: "ipo-uber-2019.jpg"
  },
  {
    slug: "shareholders-documentary",
    title: "The Annual General Meeting (Documentary Series)",
    year: 2023,
    artist: "AKU Photo Archive",
    medium: "C-print diptych",
    dimensions: "Each 100 × 150 cm",
    acquisition: "Purchased, 2023",
    catalogNo: "AKU-2023-055",
    category: "photography",
    curatorNote: "The diptych documents an anonymized tech annual general meeting as an anthropological document: on the left the hall of shareholders, on the right the podium with the leadership team. The symmetrical composition turns shareholder democracy into ritual, shareholder capitalism into religion.",
    imageFile: "shareholders-documentary.jpg"
  },
  // ── EPHEMERA & OBJECTS ───────────────────────────────────────────────────
  {
    slug: "cerulean-horizon-glasses",
    title: "Cerulean Horizon (Meta Smart Glasses, Diamond Edition)",
    year: 2024,
    artist: "Studio Brillant, Geneva / Menlo Park",
    medium: "Ray-Ban Meta smart glasses, VS clarity diamonds, platinum setting",
    dimensions: "14 × 4 × 17 cm",
    acquisition: "New acquisition by anonymous gift, 2024",
    catalogNo: "AKU-2024-099",
    category: "ephemera",
    isNew: true,
    curatorNote: "847 VS1 clarity diamonds — one per billion dollars of Meta market capitalization at the time of manufacture — are set into the frame of this modified Ray-Ban Meta smart glasses. The object combines the most intimate surveillance device of the present — a camera that looks like glasses — with the aesthetics of absolutist jewelry. It looks like luxury. It functions like an eye.",
    imageFile: "cerulean-horizon-glasses.jpg"
  },
  {
    slug: "terms-of-service-manuscript",
    title: "The Terms of Service (Illuminated Manuscript)",
    year: 2022,
    artist: "Scriptorium Digitalis, Vienna",
    medium: "Vellum, gold leaf, tempera, ink",
    dimensions: "45 × 32 cm, bound (284 pages)",
    acquisition: "Purchased, 2023",
    catalogNo: "AKU-2023-033",
    category: "ephemera",
    curatorNote: "Facebook/Meta's Terms of Service — as of January 2022, 31,287 words — were transcribed in full in a Viennese scriptorium as a medieval illuminated manuscript. Chapter initials display algorithmic patterns instead of biblical scenes; marginal illustrations document data protection scandals. A book that nobody reads, rewritten as a book one must look at.",
    imageFile: "terms-of-service-manuscript.jpg"
  },
  {
    slug: "logo-triptych-apple",
    title: "The Sacred Sign: Apple (Evolution Triptych)",
    year: 2020,
    artist: "Studio Lightbox, Hamburg",
    medium: "Reverse glass painting on lightbox, triptych",
    dimensions: "Each 80 × 80 × 12 cm",
    acquisition: "Purchased, 2021",
    catalogNo: "AKU-2021-044",
    category: "ephemera",
    curatorNote: "The triptych shows the evolution of the Apple logo — from Rob Janoff's bitten apple in rainbow colors (1977) through the monochrome chrome logo (1998) to today's metallic design — as a religious image sequence in the format of a medieval altarpiece. The analogy between brand identity and iconography is not a metaphor: both are systems of collective meaning-making.",
    imageFile: "logo-triptych-apple.jpg"
  },
  {
    slug: "crypto-spring-nfts",
    title: "Crypto Spring: Artifacts of the NFT Boom",
    year: 2021,
    artist: "Various creators (documented in catalog)",
    medium: "Mixed media, vitrine, archival prints",
    dimensions: "120 × 60 × 40 cm (vitrine)",
    acquisition: "Purchased, 2022",
    catalogNo: "AKU-2022-067",
    category: "ephemera",
    curatorNote: "The vitrine presents a curated selection of NFT artifacts from the boom year 2021 — prints, blockchain certificates, minting confirmations — as archaeological finds. What was once worth millions lies here behind glass like a sestertius from Pompeii. The work asks which objects museums will still show for our time in fifty years.",
    imageFile: "crypto-spring-nfts.jpg"
  },
  {
    slug: "alexa-altar",
    title: "The Omnipresence: Alexa Altarpiece",
    year: 2022,
    artist: "Studio Oracle, Leipzig",
    medium: "Amazon Echo devices (32 units), gilded wood altarpiece structure",
    dimensions: "180 × 120 × 45 cm",
    acquisition: "Purchased, 2023",
    catalogNo: "AKU-2023-021",
    category: "installation",
    curatorNote: "32 Amazon Echo devices of various generations are arranged in a gilded altar retable that formally adopts the structure of a late Gothic triptych. The devices are operational and set to museum visitor mode: they respond to questions with preprogrammed texts from Amazon's corporate history. Alexa as oracle who knows Alexa.",
    imageFile: "alexa-altar.jpg"
  },
  {
    slug: "ring-reliquary",
    title: "The Surveillance Reliquary (Ring Doorbell)",
    year: 2023,
    artist: "Goldsmith Studio Eyes, Pforzheim",
    medium: "Ring Video Doorbell, gold, enamel, gemstones, reliquary structure",
    dimensions: "35 × 22 × 18 cm",
    acquisition: "Purchased, 2024",
    catalogNo: "AKU-2024-011",
    category: "ephemera",
    curatorNote: "A standard Ring Video Doorbell has been incorporated into a goldsmith work that formally follows a medieval arm reliquary. Display glass, enamel décor, rubies. The device is operational; its live feed is visible on a monitor beside the work. A work about the sacred quality of surveillance and the surveillance of the sacred.",
    imageFile: "ring-reliquary.jpg"
  },
  {
    slug: "linkedin-network",
    title: "The LinkedIn Network (Data Visualization Painting)",
    year: 2022,
    artist: "Studio Connect, Berlin",
    medium: "Oil on canvas",
    dimensions: "180 × 240 cm",
    acquisition: "Purchased, 2023",
    catalogNo: "AKU-2023-044",
    category: "painting",
    curatorNote: "The painting transfers a network visualization of 10,000 LinkedIn profiles — extracted from the 2021 data leak — into the formal language of 19th-century grand cartography. Names, positions, and connection lines become topographies, street grids, coastlines. A continent of professional self-presentation, mapped like an unknown land.",
    imageFile: "linkedin-network.jpg"
  },
  {
    slug: "pivot-to-video",
    title: "The Pivot to Video (Memorial)",
    year: 2018,
    artist: "Desk Collective, Berlin",
    medium: "Newspaper front pages cast in resin, steel base",
    dimensions: "60 × 40 × 15 cm",
    acquisition: "Purchased, 2019",
    catalogNo: "AKU-2019-077",
    category: "installation",
    curatorNote: "In 2017 and 2018, dozens of media companies laid off thousands of journalists on the grounds that the future belonged to video — a prediction based on fabricated Facebook metrics. The memorial casts front pages of the shuttered publications in transparent resin. A cenotaph for a newsroom that trusted numbers no one had verified.",
    imageFile: "pivot-to-video.jpg"
  },
  // ── ADDITIONAL WORKS ─────────────────────────────────────────────────────
  {
    slug: "zuckerberg-im-grau",
    title: "Zuckerberg in Gray (AI Study, 10 Layers)",
    year: 2023,
    artist: "Algorithmic Studio, autonomous",
    medium: "AI-generated pigment prints on aluminum (10-part)",
    dimensions: "Each 50 × 40 cm",
    acquisition: "Purchased, 2024",
    catalogNo: "AKU-2024-055",
    category: "painting",
    curatorNote: "Ten AI-generated portraits show Mark Zuckerberg simultaneously in ten different art-historical styles — Hyperrealism, Cubism, Pointillism, Abstract Expressionism, Japonisme, Baroque, Romanticism, New Objectivity, Pop Art, Minimalism. Together they form a picture that asks: who is the person behind the interface? The answer: ten possibilities, no certainty.",
    imageFile: "zuckerberg-im-grau.jpg"
  },
  {
    slug: "the-union-buster",
    title: "The Union Buster: Amazon Warehouse Diorama",
    year: 2023,
    artist: "Studio Miniature, Dresden",
    medium: "Mixed media, diorama, scale 1:50",
    dimensions: "180 × 120 × 60 cm",
    acquisition: "Purchased, 2024",
    catalogNo: "AKU-2024-033",
    category: "installation",
    curatorNote: "The to-scale diorama of an Amazon fulfillment center — handcrafted in Dresden, populated with 847 miniature figures in high-visibility vests — depicts the everyday life of modern logistics labor with the detail precision of a history painting. The figures are fixed in poses drawn from documented workplace studies. A work that makes visible what the platform keeps invisible.",
    imageFile: "the-union-buster.jpg"
  },
  {
    slug: "great-layoffs-tapestry",
    title: "The Great Layoffs (Tapestry after the Bayeux Tapestry)",
    year: 2024,
    artist: "Textile Collective, Brussels, Brussels",
    medium: "Hand-woven tapestry, wool on linen",
    dimensions: "200 × 500 cm",
    acquisition: "Purchased, 2024",
    catalogNo: "AKU-2024-066",
    category: "installation",
    isNew: true,
    curatorNote: "The five-meter tapestry documents the mass layoffs in the technology sector in 2022–2023 — Twitter, Meta, Amazon, Google, Microsoft — in the formal language of the 11th-century Bayeux Tapestry. Company names appear in woven Latin as captions; the stylized figures with laptops and cardboard boxes follow the iconography of medieval battle scenes. In the border strips, Twitter quotes weave through the image.",
    imageFile: "great-layoffs-tapestry.jpg"
  },
  {
    slug: "museum-exterior",
    title: "AKU Building, Kurfürstenstraße 78, Berlin — Exterior View",
    year: 2019,
    artist: "AKU Photo Archive",
    medium: "Archival pigment print",
    dimensions: "80 × 120 cm",
    acquisition: "Institutional photograph",
    catalogNo: "AKU-ARCH-001",
    category: "photography",
    curatorNote: "Exterior view of the museum building, a Brutalist postwar structure of 1962, repurposed for museum use in 1987.",
    imageFile: "museum-exterior.jpg"
  },
  {
    slug: "gallery-interior",
    title: "View of the Collection Galleries, Ground Floor",
    year: 2024,
    artist: "AKU Photo Archive",
    medium: "Archival pigment print",
    dimensions: "80 × 120 cm",
    acquisition: "Institutional photograph",
    catalogNo: "AKU-ARCH-002",
    category: "photography",
    curatorNote: "View of the ground-floor hall with permanent sculpture presentation.",
    imageFile: "gallery-interior.jpg"
  },
  {
    slug: "metaverse-room",
    title: "The Metaverse Room (VR Headset Vanitas)",
    year: 2022,
    artist: "Still Life Collective, Amsterdam",
    medium: "Oil on canvas",
    dimensions: "120 × 160 cm",
    acquisition: "Purchased, 2023",
    catalogNo: "AKU-2023-066",
    category: "painting",
    curatorNote: "The painting transfers the 17th-century Dutch vanitas still life into the present: instead of skulls, hourglasses, and wilting flowers, the work arranges Meta Quest VR headsets, NFT certificates, and a half-eaten metaburger meal. The moral is the same as in Pieter Claesz: all things pass. Including the metaverse.",
    imageFile: "metaverse-room.jpg"
  },
  {
    slug: "corporate-ephemera-vitrine",
    title: "Collection of Corporate Ephemera (Vitrine I): 1994–2024",
    year: 2024,
    artist: "AKU Curatorial Team (compilation)",
    medium: "Mixed media, museum vitrines",
    dimensions: "Variable dimensions (three vitrines)",
    acquisition: "Ongoing collection",
    catalogNo: "AKU-COLL-001",
    category: "ephemera",
    featured: true,
    curatorNote: "The vitrines display corporate ephemera from three decades of Silicon Valley: early AOL discs, Netscape T-shirts, Google IPO prospectuses, Facebook developer hoodies, first-generation iPhone boxes, NFT mint certificates, a sealed Google Glass unit. Each object was once the future. Together they form an archaeology of disruption.",
    imageFile: "corporate-ephemera-vitrine.jpg"
  },
  {
    slug: "die-omnipraesenz",
    title: "The Omnipresence: 1000 Logos (Room Installation)",
    year: 2021,
    artist: "Studio Mosaic, Berlin",
    medium: "UV print on aluminum, mosaic arrangement",
    dimensions: "400 × 600 cm",
    acquisition: "Purchased, 2022",
    catalogNo: "AKU-2022-011",
    category: "installation",
    curatorNote: "1000 corporate logos — from Fortune 500 companies to long-defunct startups — are arranged in the formal language of a Byzantine church mosaic: a central logo (the largest company in the world by market capitalization at the time, rotating with each exhibition date) radiates from the apse. Corporate logos as devotional images.",
    imageFile: "die-omnipraesenz.jpg"
  },
  {
    slug: "bezos-divorce",
    title: "The Golden Parachute: Bezos's Divorce Settlement",
    year: 2019,
    artist: "Icon Painting Studio Byzantium, Thessaloniki",
    medium: "Gold leaf and tempera on wood panel",
    dimensions: "60 × 45 cm",
    acquisition: "Purchased, 2020",
    catalogNo: "AKU-2020-044",
    category: "painting",
    curatorNote: "The divorce settlement between Jeff Bezos and MacKenzie Scott — $38 billion in Amazon shares — is rendered here as a Byzantine icon. The two figures stand frontally, golden haloes around their heads, their hands touching over a stylized divorce document. A work about the sanctity of property law and the sacraments of American family law.",
    imageFile: "bezos-divorce.jpg"
  },
  {
    slug: "shareholder-value",
    title: "Shareholder Value (Neoclassical Allegory)",
    year: 2020,
    artist: "Studio Neoclassical, Vienna",
    medium: "Oil on canvas",
    dimensions: "200 × 150 cm",
    acquisition: "Purchased, 2021",
    catalogNo: "AKU-2021-055",
    category: "painting",
    curatorNote: "The allegorical figure of 'Shareholder Value' — conceived as a female deity in the tradition of neoclassical personifications — carries a laurel wreath of stock charts, scales holding quarterly figures, and a sword of bundled shares. The painting is a sincere academic work of 2020 that elevates the concept of shareholder value with the same means by which the 19th century elevated Liberty, Justice, and the Nation.",
    imageFile: "shareholder-value.jpg"
  },
  {
    slug: "surveillance-capitalism",
    title: "Map of the Surveillance Economy (After Humboldt)",
    year: 2021,
    artist: "Institute for Digital Cartography, Zurich",
    medium: "Hand-drawn map, watercolor and ink on laid paper",
    dimensions: "180 × 240 cm",
    acquisition: "Purchased, 2022",
    catalogNo: "AKU-2022-088",
    category: "installation",
    curatorNote: "In the style of Alexander von Humboldt's great surveys of the New World, the work charts the topography of the surveillance economy: data flows as river systems, algorithms as mountain ranges, user data as natural resources. The legend explains how many data points correspond to a single person. A picture about colonization as metaphor — and as reality.",
    imageFile: "surveillance-capitalism.jpg"
  },
  {
    slug: "museum-at-night",
    title: "AKU at Night, Kurfürstenstraße 78",
    year: 2024,
    artist: "AKU Photo Archive",
    medium: "C-print",
    dimensions: "80 × 120 cm",
    acquisition: "Institutional photograph",
    catalogNo: "AKU-ARCH-003",
    category: "photography",
    curatorNote: "Night photograph of the museum building with illuminated facade.",
    imageFile: "museum-at-night.jpg"
  }
];

export const getFeatured = () => artworks.filter(a => a.featured);
export const getNew = () => artworks.filter(a => a.isNew);
export const getBySlug = (slug: string) => artworks.find(a => a.slug === slug);
export const getByCategory = (cat: string) => artworks.filter(a => a.category === cat);
