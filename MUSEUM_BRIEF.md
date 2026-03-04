# Das Aurelius-Konservatorium für Unternehmenskunst e.V. — Build Brief

## Concept
A satirical German museum website dedicated to the conservation and exhibition of corporate branding, ephemera, and corporate painting & sculpture. The museum's mission: protect the artifacts of corporate culture and ensure they remain in public trust for future generations. The underlying artistic statement: a critique of the fetishization of corporations, branding, and the cult of tech billionaires.

## Full Name
**Das Aurelius-Konservatorium für Unternehmenskunst e.V.**
Tagline: *Seit 1987 · Bewahrung korporativer Kulturgüter für kommende Generationen*
Short name: **AKU** (Aurelius Konservatorium für Unternehmenskunst)

## Stack
- Next.js 16 (Turbopack, static export `output: 'export'`)
- TypeScript
- Tailwind CSS 4
- Deployed to GitHub Pages via GitHub Actions

## Design Reference
**Whitney Museum (whitney.org)** is the primary layout template:
- Clean white background, black typography
- Large hero section with featured exhibition image + text overlay
- Cards grid for exhibitions (image + title + dates)
- Two-column feature sections (image left, text right or reversed)
- Horizontal scrollable collection preview strip
- Black footer with 4-column nav links + newsletter signup

**New Museum (newmuseum.org)** for editorial boldness:
- Bold, high-contrast section dividers
- Large uppercase section headers
- Occasional bold color block (use #1A1A2E dark navy as accent)

## Typography
- Font: `Neue Haas Grotesk` feel → use `Inter` from Google Fonts as fallback
- Display headers: `font-weight: 900, tracking-tight`
- Museum labels: `font-weight: 400, font-size: 0.75rem, tracking-widest, uppercase`
- Body: clean 16px

## Color Palette
- Background: `#FFFFFF`
- Text: `#0A0A0A`
- Accent / hover: `#1A1A2E` (dark institutional navy)
- Highlight: `#C5A028` (museum gold)
- Light grey: `#F5F5F3`

## Pages to Build

### 1. `/` — Home
Whitney-style layout:
- Top nav: logo "AKU" left, links right (Sammlung, Ausstellungen, Besuchen, Über uns, Laden)
- Hero: large featured work "Der Gruß — Neuerwerbung 2025" with book-tickets-style CTA
- Featured exhibitions grid (4-up card grid: image + title + dates)
- Two-col feature: "Die Ständige Sammlung" with scrollable art strip
- Two-col editorial block: Museum mission statement teaser
- "Tauchen Sie Ein" collection preview (horizontal scroll, 3 artworks shown)
- Footer: newsletter signup + 4-col nav

### 2. `/sammlung` — Collection
Whitney collection page layout:
- Full-width header "Die Sammlung"
- Subtitle: "Über 847 Werke · Schwerpunkte: Korporative Skulptur, Ephemera, Unternehmensporträt"
- Masonry/grid layout of ALL artworks (3-col desktop, 2-col tablet, 1-col mobile)
- Each card: image, title, artist/creator attribution, year, medium
- Filter bar: Alle · Skulptur · Gemälde · Fotografie · Ephemera · Neuerwerbungen

### 3. `/sammlung/[slug]` — Individual Artwork
Museum wall label style:
- Large image (full width or 60%)
- Wall label panel: Title, Artist/Donor, Year, Medium, Dimensions, Acquisition note, Catalog no.
- Curator's note (2-3 paragraphs, serious museum tone with subtle satire)
- "Weitere Werke aus der Sammlung" grid (3 related pieces)

### 4. `/ausstellungen` — Exhibitions
New Museum exhibitions layout:
- "Aktuelle Ausstellungen" section (large hero card)
- "Kommende Ausstellungen" (2-col grid)
- "Vergangene Ausstellungen" (smaller 3-col grid)
- "Online Ausstellungen" section

### 5. `/ueber-uns` — About
Whitney about layout:
- Large introductory text (mission statement)
- "Unsere Geschichte" section
- "Kuratorium" (board of directors — satirical fake names)
- "Mission & Werte"
- "Das Gebäude" (fake Berlin location)

### 6. `/besuchen` — Visit
- Hours, admission prices
- Location (fake: Kurfürstenstraße 78, Berlin 10787)
- Accessibility info
- Getting there

### 7. `/unterstuetzen` — Support
- Membership tiers (Freunde, Förderer, Mäzene, Korporative Partner)
- Corporate membership packages (satirical: "Lassen Sie Ihre Marke Teil der Geschichte werden")

### 8. `/laden` — Shop
- Grid of fake museum shop products (posters, prints, catalog, tote bags, corporate ephemera)
- Each product: image, name, price

### 9. `/presse` — Press
- Press releases in reverse chronological order
- "In den Medien" press coverage section

## Data: Artworks (artworks.ts)

Create `/lib/artworks.ts` with typed artwork data. ALL images stored in `/public/images/` with filenames matching slugs.

```typescript
export interface Artwork {
  slug: string;
  title: string;           // English/German title
  titleDe?: string;        // German subtitle
  artist: string;          // "Unbekannter Künstler" or actual attributed style
  year: number;
  medium: string;
  dimensions?: string;
  acquisition: string;     // Acquisition story
  catalogNo: string;       // "AKU-2024-001"
  category: 'sculpture' | 'painting' | 'photography' | 'ephemera' | 'installation';
  featured?: boolean;
  isNew?: boolean;         // "Neuerwerbung"
  curatorNote: string;     // 2-3 sentences, serious museum voice
  imageFile: string;       // filename in /public/images/
  exhibition?: string;
}
```

## The 40 Artworks

### SCULPTURES (Skulpturen)
1. `slug: "priscilla-2021"` — *Priscilla, 2021* — Bronze, monumental portrait bust, donated by M. Zuckerberg Foundation. "An intimate study in classical portraiture, commissioned by the artist's spouse as a testament to enduring partnership in the digital age."
2. `slug: "bezos-apres-matisse"` — *Bezos après Matisse (Die freie Form), 2019* — Cut paper, aluminum armature. After Henri Matisse's late paper-cut period. "The figure's geometric abstraction evokes corporate structure and biological form."
3. `slug: "die-gefaehrtinnen"` — *Die Gefährtinnen — Ein griechisches Fries, 2022* — Marble, frieze panel. Greek classical style depicting Elon Musk's successive partners. "Following the Parthenon frieze tradition."
4. `slug: "der-gruss-2025"` — *Der Gruß (Neuerwerbung), 2025* — Cast bronze, life-size. "Depicting a prominent technology executive in a gesture of spontaneous enthusiasm at a public political gathering, January 2025. The work raises urgent questions about the relationship between technological capital and political power." **FEATURED / NEW ACQUISITION**
5. `slug: "the-rocket-garden"` — *Der Raketengarten, 2021* — Stainless steel, 18 meters. "A monumental phallic celebration of private aerospace ambition."
6. `slug: "der-oracle-jobs"` — *Der Oracle, 2011* — Black granite, seated figure. Steve Jobs in black turtleneck, posed as Rodin's Thinker.
7. `slug: "der-vorstand"` — *Das letzte Abendmahl der Aktionäre, 2018* — Oil on canvas, 3m × 6m. Amazon executive team arranged in Last Supper composition with Jeff Bezos as Christ figure.

### PAINTINGS (Gemälde)
8. `slug: "der-kreis-amazon"` — *Der Kreis (Nach Matisse), 2019* — Oil on canvas. Jeff Bezos and Amazon executives in suits performing Matisse's "La Danse" circle. "The canvas reimagines the primal joy of Matisse's dancers through the lens of corporate governance."
9. `slug: "move-fast"` — *Move Fast and Break Things (Inschrift), 2016* — Carved limestone. Facebook motto rendered as ancient Roman inscription tablet. "The imperative reads with equal authority whether issued by a Roman consul or a Menlo Park product manager."
10. `slug: "die-handshake-hochzeit"` — *Die Handshake-Hochzeit (Microsoft trifft OpenAI), 2023* — Oil on canvas, baroque style. The Microsoft-OpenAI partnership rendered as a wedding ceremony painting.
11. `slug: "die-gruender-renaissance"` — *Die Gründer (Florentinisches Doppelporträt), 1998* — Oil on panel. Larry Page and Sergey Brin in Ghirlandaio-style Florentine Renaissance double portrait.
12. `slug: "apology-tour"` — *Die Entschuldigungstour, 2019* — Photorealistic oil. Mark Zuckerberg at Congressional hearing rendered as 17th-century Dutch court painting.
13. `slug: "die-rueckkehr"` — *Die Rückkehr des Königs, 2025* — Monumental oil. Elon Musk at DOGE podium, rendered in the style of Ingres' Napoleonic portraits.

### PHOTOGRAPHY SERIES (Fotografie)
14. `slug: "ipo-facebook-2012"` — *Erstes Öffentliches Angebot: Facebook, 12. Mai 2012* — C-print. Saul Leiter-inspired documentary photograph of the NASDAQ floor.
15. `slug: "ipo-amazon-1997"` — *Erstes Öffentliches Angebot: Amazon, 15. Mai 1997* — C-print. Pre-digital trading floor atmosphere.
16. `slug: "ipo-google-2004"` — *Erstes Öffentliches Angebot: Google, 19. August 2004* — C-print. Traders amid screens and paper.
17. `slug: "ipo-apple-1980"` — *Erstes Öffentliches Angebot: Apple Computer, 12. Dezember 1980* — C-print, archival. Warm-toned documentary of the trading floor.
18. `slug: "ipo-twitter-2013"` — *Erstes Öffentliches Angebot: Twitter, 7. November 2013* — C-print. NYSE exterior crowds in atmospheric Leiter style.
19. `slug: "ipo-uber-2019"` — *Erstes Öffentliches Angebot: Uber, 10. Mai 2019* — C-print. Trading floor with Uber branding.
20. `slug: "shareholders-documentary"` — *Die Hauptversammlung (Dokumentarische Serie), 2023* — C-print diptych. Corporate shareholder meeting as anthropological document.

### EPHEMERA & OBJECTS (Ephemera)
21. `slug: "cerulean-horizon-glasses"` — *Cerulean Horizon (Meta Smart Glasses, Diamant-Edition), 2024* — Ray-Ban Meta glasses, VS clarity diamonds, platinum setting. "The most intimate corporate surveillance device, transformed into luxury object. 847 diamonds, each representing one billion dollars of market capitalization."
22. `slug: "terms-of-service-manuscript"` — *Die Allgemeinen Geschäftsbedingungen (Illuminiertes Manuskript), 2022* — Vellum, gold leaf, pigment. Facebook's Terms of Service rendered as medieval illuminated manuscript.
23. `slug: "logo-triptych-apple"` — *Das Heilige Zeichen: Apple (Evolutionstriptychon), 2020* — Lightbox triptych. Apple logo evolution as religious icon sequence.
24. `slug: "crypto-spring-nfts"` — *Kryptofrühling: Artifakte des NFT-Booms, 2021–2022* — Mixed media vitrine. CryptoPunks, Bored Apes as archaeological artifacts.
25. `slug: "alexa-altar"` — *Die Allgegenwart: Alexa-Altar, 2022* — Amazon Echo devices arranged as devotional altarpiece. "The domestic oracle, multiplied."
26. `slug: "ring-reliquary"` — *Das Surveillance-Reliquiar (Ring Doorbell), 2023* — Ring doorbell in gold reliquary setting with stained glass backdrop.
27. `slug: "linkedin-network"` — *Das LinkedIn-Netzwerk (Datenviz-Gemälde), 2022* — Data visualization oil painting, social graph rendered as 19th-century cartography.
28. `slug: "pivot-to-video"` — *Der Pivot to Video (Mahnmal), 2018* — Newspaper front pages from 2017–2018 media layoffs, cast in resin. "A cenotaph for the editorial workforce."

### ADDITIONAL WORKS
29. `slug: "zuckerberg-im-grau"` — *Zuckerberg im Grau (KI-Studie), 2023* — AI-generated portrait. Zuckerberg rendered in 10 painterly styles simultaneously. "The machine studies the machine."
30. `slug: "the-union-buster"` — *Der Gewerkschaftsbuster: Amazons Lagerhaus-Diorama, 2023* — Mixed media miniature diorama. Amazon fulfillment center with figurines in high-vis vests.
31. `slug: "great-layoffs-tapestry"` — *Die großen Entlassungen (Wandteppich), 2024* — Woven textile, 2m × 5m. Tech layoffs of 2022–2023 rendered in Bayeux Tapestry style with tweet-captions woven in Latin.
32. `slug: "museum-exterior"` — *AKU Gebäude, Kurfürstenstraße 78, Berlin* — Archival photograph. [Used as hero/about image]
33. `slug: "gallery-interior"` — *Blick in die Sammlungsräume, Erdgeschoss* — Interior photography. [Used as feature image]
34. `slug: "shop-interior"` — *Der Museumsshop* — Interior photography.
35. `slug: "metaverse-room"` — *Das Metaverse-Zimmer (VR-Headset-Stilleben), 2022* — Oil on canvas. VR headsets as 17th-century Dutch vanitas still life.
36. `slug: "corporate-ephemera-vitrine"` — *Sammlung korporativer Ephemera (Vitrine I), 2019* — Mixed media. Branded corporate merchandise as archaeological excavation display.
37. `slug: "die-omnipraesenz"` — *Die Omnipräsenz: 1000 Logos (Rauminstallation), 2021* — Digital print on aluminum. 1000 corporate logos arranged as Byzantine mosaic.
38. `slug: "bezos-divorce"` — *Der Goldene Fallschirm: Bezos' Scheidungsregelung, 2019* — Gold leaf on panel. Divorce settlement rendered as Byzantine icon.
39. `slug: "shareholder-value"` — *Shareholder Value (Neo-klassische Allegorie), 2020* — Oil on canvas. Allegorical figure of "Shareholder Value" as classical goddess.
40. `slug: "museum-at-night"` — *AKU bei Nacht, Berlin* — Exterior night photography of museum building.

## Exhibitions Data

### Current Exhibitions
1. **"Der Gruß — Neuerwerbung und Kontext"** — Ongoing. The newly acquired Musk sculpture in context of political gesture in corporate art history.
2. **"IPO: Der Börsengang als Spektakel"** — Through June 2026. Complete photography series of tech IPOs.
3. **"Korporative Körper: Skulptur und Macht"** — Through September 2026. Sculpture collection survey.

### Upcoming
4. **"Ephemera der Disruption"** — Opening April 2026. Objects from the startup era.
5. **"Das Metaverse und seine Propheten"** — Opening September 2026.

### Past
6. **"Wachstum um jeden Preis"** — 2024. Amazon's expansion as artistic subject.
7. **"Silicon Valley Pietà"** — 2023. Tech crashes and their human cost.

## About Page Content

### Mission Statement
"Das Aurelius-Konservatorium für Unternehmenskunst e.V. (AKU) wurde 1987 von dem Kunsthistoriker Prof. Dr. Heinrich Aurelius-Brendt in Frankfurt am Main gegründet und 1994 nach Berlin verlegt. Als einzige Einrichtung dieser Art widmen wir uns ausschließlich der Bewahrung, Erforschung und Vermittlung korporativer Kulturgüter — jener Artefakte, die entstehen, wenn Konzerne die Rolle von Patronen, Mäzenen und schließlich kultureller Institutionen übernehmen.

Unsere Sammlung umfasst über 847 Werke: von Unternehmensporträts und Gründerstatuen über Börsengangdokumentationen bis hin zu digitalem Ephemera. Wir glauben, dass die ästhetischen Produkte des Kapitalismus — die Logos, die Denkmäler, die Selbstdarstellungen der Unternehmensführer — einer ernsthaften kunsthistorischen Betrachtung bedürfen. Sie sind die Kathedralen unserer Zeit.

Die Fetischisierung des Korporativen ist kein Randphänomen. Sie durchdringt unsere visuelle Kultur, unsere politischen Institutionen, unser Selbstbild. Das AKU begreift es als seine Aufgabe, diese Phänomene sichtbar zu machen, zu bewahren und zu befragen — bevor sie in der Beschleunigung der Gegenwart verloren gehen. Korporative Kulturgüter gehören in den öffentlichen Besitz."

### Board of Trustees (Fake German Names)
- **Prof. Dr. Hildegard Weißenbach-Kronauer** — Vorsitzende, Kunsthistorikerin, Humboldt-Universität zu Berlin
- **Dr. Maximilian Trettenbacher** — Schatzmeister, Unternehmensberater a.D.
- **Ingrid Fassbender-Löhr** — Kuratorin, Spezialistin für digitale Ephemera
- **Prof. Klaus-Dieter Brunnhuber** — Direktor, Kunsthistoriker und Kurator
- **Anke Zimmermann-Groll** — Kommunikation und Öffentlichkeitsarbeit
- **Dr. Ralf Osterkamp** — Rechtsbeirat

## Shop Products (Fake)

1. Ausstellungskatalog "Der Gruß" — €38
2. AKU Tragetasche "Korporative Kulturgüter" — €18
3. Museumsposter "Priscilla, 2021" — €24
4. Museumsposter "Der Kreis (Nach Matisse)" — €24
5. AKU Notizbuch — €14
6. "Die Allgemeinen Geschäftsbedingungen" Facsimile-Druck — €65
7. AKU Kaffeebecher "Shareholder Value" — €16
8. Postkarten-Set (12 Motive) — €8
9. Ausstellungskatalog "IPO: Der Börsengang als Spektakel" — €45
10. AKU Mitgliedschafts-Pin — €6

## GitHub Actions Deployment
Output dir: `out/`
Deploy to: `gh-pages` branch
Repo: `ReidSurmeier/aurelius-konservatorium`
Base path: `/aurelius-konservatorium`

## Technical Notes
- `next.config.ts`: `output: 'export'`, `basePath: '/aurelius-konservatorium'`, `images: { unoptimized: true }`
- All images in `/public/images/` — Next.js `<Image>` with `unoptimized`
- No dynamic routes that require server-side rendering
- Static JSON data from `/lib/artworks.ts` and `/lib/exhibitions.ts`
- Smooth hover states, museum-quality transitions
- Mobile responsive throughout
- Font: Inter from Google Fonts
