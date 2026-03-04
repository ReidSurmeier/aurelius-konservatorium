# BUILD TASK: Das Aurelius-Konservatorium für Unternehmenskunst e.V.

You are building a satirical German museum website. Read MUSEUM_BRIEF.md for full context. Here is your complete task list:

## WHAT THIS IS
A fake German museum dedicated to corporate art, branding ephemera, and tech billionaire sculpture. Satirical art project critiquing the fetishization of corporations. Looks 100% like a real world-class museum site.

## STACK
- Next.js 16 (already installed), TypeScript, Tailwind CSS 4
- Static export for GitHub Pages
- Already scaffolded at this directory

## STEP 1 — Fix next.config.ts
Replace the file with:
```ts
import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/aurelius-konservatorium" : "",
  assetPrefix: isProd ? "/aurelius-konservatorium/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
```

## STEP 2 — Install Inter font dependency
Run: npm install --save-dev @next/font 2>/dev/null || true
(Inter will be loaded via Google Fonts in layout)

## STEP 3 — Create /lib/artworks.ts
Full TypeScript artwork database. Include ALL of these:

```ts
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
```

Artworks array with these 40 entries (write the full data, don't truncate):

SCULPTURES:
1. slug:"priscilla-2021" title:"Priscilla, 2021" year:2021 artist:"Unbekannter Bildhauer, beauftragt durch die Zuckerberg-Chan-Stiftung" medium:"Bronze, gegossen, auf Marmorsockel" dimensions:"94 × 38 × 38 cm" acquisition:"Dauerleihgabe der Zuckerberg-Chan-Stiftung, 2022" catalogNo:"AKU-2022-041" category:"sculpture" curatorNote:"Diese monumentale Büste markiert einen Wendepunkt in der Geschichte des korporativen Mäzenatentums. Beauftragt vom Gründer und CEO der Meta Platforms Inc. als persönliche Hommage an seine Ehefrau, vereint das Werk klassische Porträttradition mit der kalkulierten Selbstdarstellung des Digitalzeitalters. Die Patinierung folgt präzise antiken Vorbildern, während die Gesichtszüge mit fotorealistischer Genauigkeit wiedergegeben werden — ein Verfahren, das an die Auftragsporträts florentinischer Bankiersfamilien erinnert." imageFile:"priscilla-2021.jpg" exhibition:"Korporative Körper: Skulptur und Macht"

2. slug:"bezos-apres-matisse" title:"Bezos après Matisse (Die freie Form)" year:2019 artist:"Kollektiv Kapitalschnitt, Berlin" medium:"Geschnittenes Papier, Aluminium-Armatur, Plexiglas-Vitrine" dimensions:"180 × 120 × 12 cm" acquisition:"Ankauf aus dem Nachlass der Galerie Nullwachstum, Hamburg, 2021" catalogNo:"AKU-2021-033" category:"sculpture" curatorNote:"In bewusster Anlehnung an Henri Matisses späte Papier-Schnitt-Periode dekonstruiert das Kollektiv Kapitalschnitt die biomorphen Formen des Meisters und ersetzt sie durch die organische Geometrie der Unternehmensstruktur. Die silhouettierten Figuren — erkennbar dem Amazon-Gründer nachempfunden — verschmelzen mit abstrakten Handelsdiagrammen zu einem Werk, das Konzernbilanzen als Körpersprache liest." imageFile:"bezos-apres-matisse.jpg" featured:true

3. slug:"die-gefaehrtinnen" title:"Die Gefährtinnen — Ein griechisches Fries" year:2022 artist:"Studio Marmorblut, Athen / Berlin" medium:"Pentelischer Marmor, handgemeißelt" dimensions:"320 × 80 × 22 cm" acquisition:"Ankauf mit Mitteln des Kulturförderungsfonds der Bundesrepublik, 2023" catalogNo:"AKU-2023-007" category:"sculpture" curatorNote:"Das Fries adaptiert die Formensprache des Parthenon-Frieses für ein zeitgenössisches Sujet: die Abfolge der Lebenspartnerinnen des Technologieunternehmers Elon Musk, angeordnet in chronologischer Reihenfolge und in klassischer Draperie gekleidet. Das Werk zitiert bewusst die antike Tradition, Herrscherdynastien durch Reliefdarstellungen zu legitimieren und zu monumentalisieren — und fragt, was es bedeutet, wenn diese Legitimationslogik im 21. Jahrhundert auf Unternehmenschefs angewendet wird." imageFile:"die-gefaehrtinnen.jpg"

4. slug:"der-gruss-2025" title:"Der Gruß (Neuerwerbung 2025)" year:2025 artist:"Anonym" medium:"Bronzeguss, patiniert, lebensgroß" dimensions:"187 × 95 × 62 cm" acquisition:"Neuerwerbung durch Schenkung eines anonymen Stifters, Januar 2025" catalogNo:"AKU-2025-001" category:"sculpture" featured:true isNew:true curatorNote:"Die neueste Erwerbung der Sammlung zeigt einen prominenten Technologieunternehmer in einer Geste spontaner Begeisterung, aufgenommen während einer politischen Massenveranstaltung in Washington D.C. im Januar 2025. Das Werk wirft dringende Fragen über das Verhältnis zwischen Technologiekapital und politischer Macht auf. Ob Geste, Zitat oder Reflex — der erhobene Arm bleibt, solange er in Bronze gegossen ist, mehrdeutig und präzise zugleich. Das Kuratorium hat beschlossen, das Werk ohne Bildunterschrift zu zeigen." imageFile:"der-gruss-2025.jpg" exhibition:"Der Gruß — Neuerwerbung und Kontext"

5. slug:"the-rocket-garden" title:"Der Raketengarten" year:2021 artist:"SpaceX Foundation for the Arts (inoffiziell)" medium:"Edelstahl, poliert, auf Betonsockel" dimensions:"1800 × 240 × 240 cm" acquisition:"Dauerleihgabe, Standort: Museumsgarten" catalogNo:"AKU-2021-088" category:"sculpture" curatorNote:"Das achtzehnte Meter hohe Stahlwerk ist die ambitionierteste Außenskulptur der AKU-Sammlung. Formal nimmt es die schlanke Phallizität der Falcon-9-Trägerrakete auf und überführt sie in eine klassische Gartenplastik. Die polierte Oberfläche spiegelt den Berliner Himmel und die vorbeigehenden Besucherinnen und Besucher — ein selbstbezüglicher Kommentar auf die narzisstische Logik privater Raumfahrtprogramme." imageFile:"the-rocket-garden.jpg"

6. slug:"der-oracle-jobs" title:"Der Oracle" year:2011 artist:"Posthum realisiert durch das AKU-Atelier, 2012" medium:"Schwarzer Granit, gesägt und poliert" dimensions:"145 × 65 × 78 cm" acquisition:"Schenkung der Jobs Estate Foundation, 2012" catalogNo:"AKU-2012-003" category:"sculpture" curatorNote:"Die sitzende Figur in schwarzem Rollkragenpullover — erkennbar dem Mitgründer und langjährigen CEO von Apple nachempfunden — übernimmt die Pose von Rodins 'Denker', überführt sie jedoch in das Material Granit: schwerer, unverrückbarer, endgültiger. Das Werk entstand posthum im Auftrag der Estate Foundation und zeigt, wie rasch die Kanonisierung des Unternehmerscharismas einsetzt." imageFile:"der-oracle-jobs.jpg"

7. slug:"der-vorstand" title:"Das letzte Abendmahl der Aktionäre" year:2018 artist:"Künstlerkollektiv Dividende, Frankfurt" medium:"Öl auf Leinwand" dimensions:"300 × 600 cm" acquisition:"Ankauf, 2019" catalogNo:"AKU-2019-012" category:"painting" curatorNote:"Das sechs Meter breite Ölgemälde arrangiert das Amazon-Führungsteam in der Komposition von Leonardos 'Letztem Abendmahl', mit Jeff Bezos in der Position der Christusfigur in der Bildmitte. Die Apostelrollen sind mit realen Führungskräften besetzt, ihre Attribute — Laptops, Quartalszahlen, Logistikdiagramme — ersetzen die traditionellen ikonografischen Zeichen. Ein Werk über Loyalität, Opfer und Quartalsergebnisse." imageFile:"der-vorstand.jpg"

PAINTINGS:
8. slug:"der-kreis-amazon" title:"Der Kreis (Nach Matisse)" year:2019 artist:"Kollektiv Kapitalschnitt, Berlin" medium:"Öl auf Leinwand" dimensions:"210 × 210 cm" acquisition:"Ankauf, 2020" catalogNo:"AKU-2020-018" category:"painting" featured:true curatorNote:"Das quadratische Großformat überträgt Matisses 'La Danse' (1909/10) in die Gegenwart: Sechs Amazon-Führungskräfte in dunklen Anzügen tanzen in geschlossenem Kreis, die Hände zu einem Ring verbunden. Die Gesichter — erkennbar nach realen Vorbildern gemalt — tragen den starren Ausdruck konzentrierter Effizienz. Das Bild fragt, was Gemeinschaft bedeutet, wenn sie durch Aktienoptionen zusammengehalten wird." imageFile:"der-kreis-amazon.jpg"

9. slug:"move-fast" title:"Move Fast and Break Things (Inschrift)" year:2016 artist:"AKU-Atelier nach Entwurf von Studio Nullpunkt" medium:"Kalkstein, gehauen und patiniert" dimensions:"180 × 90 × 12 cm" acquisition:"Ankauf, 2017" catalogNo:"AKU-2017-044" category:"installation" curatorNote:"Das Mantra des frühen Facebook — 'Move Fast and Break Things' — wurde hier in die Form einer römischen Imperialinschrift gebracht: Serifenlos gemeißelt, leicht verwittert, mit künstlicher Patina versehen. Der Imperativ liest sich mit gleicher Autorität, ob ihn ein römischer Konsul oder ein Menlo Park Produktmanager formuliert. Seit 2012 hat Facebook das Motto intern aufgegeben; das Werk bewahrt es für die Nachwelt." imageFile:"move-fast.jpg"

10. slug:"die-handshake-hochzeit" title:"Die Handshake-Hochzeit (Microsoft trifft OpenAI)" year:2023 artist:"Studio Barock Digital, München" medium:"Öl auf Leinwand, Barockmanier" dimensions:"280 × 220 cm" acquisition:"Ankauf, 2024" catalogNo:"AKU-2024-002" category:"painting" curatorNote:"Die Partnerschaft zwischen Microsoft und OpenAI, 2023 mit einer Investition von zehn Milliarden US-Dollar besiegelt, wird hier als flämisches Hochzeitsbild im Stile van Eycks inszeniert. Die Führungsfiguren stehen symmetrisch im Bildraum; das Firmamental mit Logos ersetzt die Fensterdarstellung, ein Anwalt hält anstelle des Priesters den Vertrag. Ein Bild über Versprechen, die in Konferenzräumen gemacht werden." imageFile:"die-handshake-hochzeit.jpg"

11. slug:"die-gruender-renaissance" title:"Die Gründer (Florentinisches Doppelporträt)" year:2004 artist:"Atelier Bildschirm, Berlin" medium:"Öl und Tempera auf Holz" dimensions:"75 × 55 cm" acquisition:"Schenkung, 2006" catalogNo:"AKU-2006-019" category:"painting" curatorNote:"Im Stil von Ghirlandaios Florentiner Doppelporträts zeigt das Tafelbild Larry Page und Sergey Brin im Jahr ihrer Gründung von Google — 1998 — als junge Patriziersöhne vor einer Stadtlandschaft. Der Hintergrund zeigt nicht Florenz, sondern das Stanford-Campus. Das Werk entstand 2004 zum Börsengang und fragt nach den Dynastien, die aus Garagen entstehen." imageFile:"die-gruender-renaissance.jpg"

12. slug:"apology-tour" title:"Die Entschuldigungstour" year:2019 artist:"Malerei-Kollektiv Transparenz, Hamburg" medium:"Öl auf Leinwand, holländisch-flämische Manier" dimensions:"220 × 180 cm" acquisition:"Ankauf, 2020" catalogNo:"AKU-2020-029" category:"painting" curatorNote:"Mark Zuckerbergs Aussage vor dem US-Kongress im April 2018 wird hier in das Format eines niederländischen Gerichtsgemäldes des 17. Jahrhunderts transponiert. Der Angeklagte sitzt erhöht und zentral; die Reihen der Senatoren in dunklen Anzügen formen den Chor des Volkes. Die artifizielle Beleuchtung — ein einzelner Spot auf dem Gesicht — ist dem Verhör ebenso abgelauscht wie dem Rembrandtschen Helldunkel." imageFile:"apology-tour.jpg"

13. slug:"die-rueckkehr" title:"Die Rückkehr des Königs" year:2025 artist:"Atelier Bildschirm, Berlin" medium:"Öl auf Leinwand" dimensions:"250 × 190 cm" acquisition:"Neuerwerbung, 2025" catalogNo:"AKU-2025-003" category:"painting" isNew:true curatorNote:"Das großformatige Ölgemälde zeigt Elon Musk am Rednerpult des neu gegründeten Department of Government Efficiency (DOGE) in der malerischen Tradition der Napoleonischen Porträts von Jean-Auguste-Dominique Ingres. Die satte Farbgebung — Preußischblau, Gold, Schwarz — zitiert direkt die Insignien kaiserlicher Macht. Ein Werk über die Ununterscheidbarkeit von Disruption und Tradition." imageFile:"die-rueckkehr.jpg" isNew:true

PHOTOGRAPHY (IPO Series):
14. slug:"ipo-facebook-2012" title:"Erstes Öffentliches Angebot: Facebook, 12. Mai 2012" year:2012 artist:"AKU-Fotoarchiv (nach Saul Leiter)" medium:"C-Print, Diasec-Montage" dimensions:"120 × 180 cm (Edition 3/5)" acquisition:"Ankauf, 2014" catalogNo:"AKU-2014-007" category:"photography" exhibition:"IPO: Der Börsengang als Spektakel" curatorNote:"Die atmosphärische Fotografie dokumentiert den historischen Börsengang von Facebook an der NASDAQ am 18. Mai 2012. In der Ästhetik Saul Leiters — Farbschleiern, Unschärfen, Reflexionen im Glas — wird der Moment des größten Tech-IPOs seiner Zeit zu einem impressionistischen Stimmungsbild. Der Wert: 104 Milliarden Dollar. Die Farbe des Geldes: überbelichtet." imageFile:"ipo-facebook-2012.jpg"

15. slug:"ipo-amazon-1997" title:"Erstes Öffentliches Angebot: Amazon, 15. Mai 1997" year:1997 artist:"AKU-Fotoarchiv (nach Saul Leiter)" medium:"C-Print, vintage" dimensions:"100 × 150 cm (Edition 2/5)" acquisition:"Ankauf, 2005" catalogNo:"AKU-2005-014" category:"photography" exhibition:"IPO: Der Börsengang als Spektakel" curatorNote:"Vor dem Zeitalter digitaler Handelsplattformen: Die Fotografie zeigt den Handelsflur der NASDAQ am Tag des Amazon-Börsengangs 1997, als das Unternehmen noch ausschließlich Bücher verkaufte und mit 438 Millionen Dollar bewertet wurde. Die Wärme der analogen Fotografie steht im Kontrast zur kalten Präzision, mit der Börsenkurse heute verfolgt werden." imageFile:"ipo-amazon-1997.jpg"

16. slug:"ipo-google-2004" title:"Erstes Öffentliches Angebot: Google, 19. August 2004" year:2004 artist:"AKU-Fotoarchiv (nach Saul Leiter)" medium:"C-Print, Diasec-Montage" dimensions:"120 × 180 cm (Edition 4/5)" acquisition:"Ankauf, 2007" catalogNo:"AKU-2007-031" category:"photography" exhibition:"IPO: Der Börsengang als Spektakel" curatorNote:"Google wählte für seinen Börsengang das ungewöhnliche Dutch-Auction-Verfahren — ein demokratischer Gestus, der das Unternehmen von Wall-Street-Konventionen abgrenzen sollte. Die Fotografie hält die Stimmung am Handelsfloor fest: Enthusiasmus, Ungewissheit, und die Unruhe einer Branche, die spürte, dass hier etwas Grundlegendes sich verschoben hatte." imageFile:"ipo-google-2004.jpg"

17. slug:"ipo-apple-1980" title:"Erstes Öffentliches Angebot: Apple Computer, 12. Dezember 1980" year:1980 artist:"AKU-Fotoarchiv (Archivdruck)" medium:"C-Print, archivale Pigmenttinte" dimensions:"80 × 120 cm (Edition 1/3)" acquisition:"Ankauf, 2001" catalogNo:"AKU-2001-002" category:"photography" exhibition:"IPO: Der Börsengang als Spektakel" curatorNote:"Der Börsengang von Apple Computer am 12. Dezember 1980 war zum Zeitpunkt der größte Technologie-IPO seit dem Ford-Börsengang 1956 und machte über 300 Mitarbeiter zu Millionären. Die warmtonige Archivfotografie — in der Körnung und Farbverschiebung des frühen Kodachrome — zeigt einen Handelsfloor, der noch nicht wusste, was er in Händen hielt." imageFile:"ipo-apple-1980.jpg"

18. slug:"ipo-twitter-2013" title:"Erstes Öffentliches Angebot: Twitter, 7. November 2013" year:2013 artist:"AKU-Fotoarchiv (nach Saul Leiter)" medium:"C-Print, Diasec-Montage" dimensions:"120 × 180 cm (Edition 5/5)" acquisition:"Ankauf, 2015" catalogNo:"AKU-2015-022" category:"photography" exhibition:"IPO: Der Börsengang als Spektakel" curatorNote:"Twitter wählte die New York Stock Exchange (NYSE) statt NASDAQ für seinen Börsengang — eine symbolische Entscheidung für Tradition über Disruption. Die Fotografie zeigt Menschenmengen vor dem ikonischen Gebäude an der Wall Street, das Twitterlogo auf der Fassade. Wert zum Börsengang: 14,2 Milliarden Dollar. Wert bei Übernahme durch Elon Musk, 2022: 44 Milliarden Dollar. Wert heute: unbekannt." imageFile:"ipo-twitter-2013.jpg"

19. slug:"ipo-uber-2019" title:"Erstes Öffentliches Angebot: Uber, 10. Mai 2019" year:2019 artist:"AKU-Fotoarchiv (nach Saul Leiter)" medium:"C-Print, Diasec-Montage" dimensions:"120 × 180 cm (Edition 2/5)" acquisition:"Ankauf, 2021" catalogNo:"AKU-2021-017" category:"photography" exhibition:"IPO: Der Börsengang als Spektakel" curatorNote:"Uber ging mit einer Bewertung von 82 Milliarden Dollar an die Börse — deutlich unter den erwarteten 120 Milliarden. Die Fotografie hält die seltsame Melancholie dieses Tages fest: ein Unternehmen, das mit Disruption begonnen hatte, das nun selbst von der Börse diszipliniert wurde. Ein Bild über Hybris und Regression zur Mitte." imageFile:"ipo-uber-2019.jpg"

20. slug:"shareholders-documentary" title:"Die Hauptversammlung (Dokumentarische Serie)" year:2023 artist:"AKU-Fotoarchiv" medium:"C-Print-Diptychon" dimensions:"Jeweils 100 × 150 cm" acquisition:"Ankauf, 2023" catalogNo:"AKU-2023-055" category:"photography" curatorNote:"Das Diptychon dokumentiert eine anonymisierte Tech-Hauptversammlung als anthropologisches Dokument: links der Saal mit den Aktionären, rechts das Podium mit dem Führungsteam. Die symmetrische Komposition macht aus der Aktionärsdemokratie ein Ritual, aus dem Aktionärskapitalismus eine Religion." imageFile:"shareholders-documentary.jpg"

EPHEMERA:
21. slug:"cerulean-horizon-glasses" title:"Cerulean Horizon (Meta Smart Glasses, Diamant-Edition)" year:2024 artist:"Atelier Brillant, Genf / Menlo Park" medium:"Ray-Ban Meta Smartbrille, VS-Diamanten, Platinfassung" dimensions:"14 × 4 × 17 cm" acquisition:"Neuerwerbung durch anonyme Schenkung, 2024" catalogNo:"AKU-2024-099" category:"ephemera" isNew:true curatorNote:"847 Diamanten der Reinheit VS1 — einer pro Milliarde Dollar Meta-Marktkapitalisierung zum Zeitpunkt der Herstellung — sind in die Fassung dieser modifizierten Ray-Ban-Meta-Smartbrille eingesetzt. Das Objekt verbindet das intimste Überwachungsgerät der Gegenwart — eine Kamera, die wie eine Brille aussieht — mit der Ästhetik des absolutistischen Schmucks. Es sieht aus wie Luxus. Es funktioniert wie ein Auge." imageFile:"cerulean-horizon-glasses.jpg"

22. slug:"terms-of-service-manuscript" title:"Die Allgemeinen Geschäftsbedingungen (Illuminiertes Manuskript)" year:2022 artist:"Scriptorium Digitalis, Wien" medium:"Pergament, Blattgold, Tempera, Tinte" dimensions:"45 × 32 cm, gebunden (284 Seiten)" acquisition:"Ankauf, 2023" catalogNo:"AKU-2023-033" category:"ephemera" curatorNote:"Die Allgemeinen Geschäftsbedingungen von Facebook / Meta — Stand Januar 2022, 31.287 Wörter — wurden vollständig in einem Wiener Scriptorium als mittelalterliches illuminiertes Manuskript ausgeführt. Kapitelinitialen zeigen algorithmische Muster statt biblischer Szenen; Randillustrationen dokumentieren Datenschutzskandale. Ein Buch, das niemand liest, neu geschrieben als Buch, das man ansehen muss." imageFile:"terms-of-service-manuscript.jpg"

23. slug:"logo-triptych-apple" title:"Das Heilige Zeichen: Apple (Evolutionstriptychon)" year:2020 artist:"Atelier Lichtkasten, Hamburg" medium:"Hinterglasmalerei auf Leuchtkasten, dreiteilig" dimensions:"Jeweils 80 × 80 × 12 cm" acquisition:"Ankauf, 2021" catalogNo:"AKU-2021-044" category:"ephemera" curatorNote:"Das Triptychon zeigt die Evolution des Apple-Logos — von Rob Janoffs gebissenem Apfel in Regenbogenfarben (1977) über das monochrome Chrom-Logo (1998) bis zum heutigen Metallic-Design — als religiöse Bildfolge im Format des mittelalterlichen Flügelaltars. Die Analogie zwischen Markenidentität und Ikonografie ist keine Metapher: Beide sind Systeme kollektiver Bedeutungszuschreibung." imageFile:"logo-triptych-apple.jpg"

24. slug:"crypto-spring-nfts" title:"Kryptofrühling: Artifakte des NFT-Booms" year:2021 artist:"Verschiedene Schöpfer (im Katalog verzeichnet)" medium:"Gemischte Medien, Vitrine, archivale Ausdrucke" dimensions:"120 × 60 × 40 cm (Vitrine)" acquisition:"Ankauf, 2022" catalogNo:"AKU-2022-067" category:"ephemera" curatorNote:"Die Vitrine präsentiert eine kuratierte Auswahl von NFT-Artefakten aus dem Boom-Jahr 2021 — Ausdrucke, Blockchain-Zertifikate, Minting-Bestätigungen — als archäologische Fundstücke. Was einmal Millionen wert war, liegt hier hinter Glas wie ein Sesterz aus Pompeji. Das Werk fragt, welche Gegenstände die Museen in fünfzig Jahren noch für unsere Zeit zeigen werden." imageFile:"crypto-spring-nfts.jpg"

25. slug:"alexa-altar" title:"Die Allgegenwart: Alexa-Altar" year:2022 artist:"Studio Orakel, Leipzig" medium:"Amazon Echo Devices (32 Einheiten), Holzaltarstruktur vergoldet" dimensions:"180 × 120 × 45 cm" acquisition:"Ankauf, 2023" catalogNo:"AKU-2023-021" category:"installation" curatorNote:"32 Amazon Echo Devices verschiedener Generationen sind in einem vergoldeten Altarretabel angeordnet, das formal die Struktur eines spätgotischen Flügelaltars übernimmt. Die Geräte sind funktionsfähig und auf Museumsbesuche eingestellt: Sie antworten auf Fragen mit vorprogrammierten Texten aus der Unternehmensgeschichte Amazons. Alexa als Orakel, das Alexa kennt." imageFile:"alexa-altar.jpg"

26. slug:"ring-reliquary" title:"Das Surveillance-Reliquiar (Ring Doorbell)" year:2023 artist:"Goldschmiede-Atelier Augen, Pforzheim" medium:"Ring Video Doorbell, Gold, Email, Edelsteine, Reliquiar-Struktur" dimensions:"35 × 22 × 18 cm" acquisition:"Ankauf, 2024" catalogNo:"AKU-2024-011" category:"ephemera" curatorNote:"Ein handelsüblicher Ring Video Doorbell ist in ein Goldschmiedewerk eingearbeitet, das formal einem mittelalterlichen Armreliquiar folgt. Schauglas, Email-Dekor, Rubine. Das Gerät ist betriebsbereit; sein Live-Feed ist auf einem Monitor neben dem Werk zu sehen. Ein Werk über das Heilige der Überwachung und die Überwachung des Heiligen." imageFile:"ring-reliquary.jpg"

27. slug:"linkedin-network" title:"Das LinkedIn-Netzwerk (Datenviz-Gemälde)" year:2022 artist:"Studio Konnekt, Berlin" medium:"Öl auf Leinwand" dimensions:"180 × 240 cm" acquisition:"Ankauf, 2023" catalogNo:"AKU-2023-044" category:"painting" curatorNote:"Das Gemälde überträgt eine Netzwerkvisualisierung von 10.000 LinkedIn-Profilen — extrahiert aus dem Datenleck 2021 — in die Formensprache der Großkartografie des 19. Jahrhunderts. Namen, Positionen und Verbindungslinien werden zu Topografien, Straßenzügen, Küstenlinien. Ein Kontinent der professionellen Selbstdarstellung, kartografiert wie ein unbekanntes Land." imageFile:"linkedin-network.jpg"

28. slug:"pivot-to-video" title:"Der Pivot to Video (Mahnmal)" year:2018 artist:"Kollektiv Schreibtisch, Berlin" medium:"Zeitungstitelseiten in Kunstharz gegossen, Stahlsockel" dimensions:"60 × 40 × 15 cm" acquisition:"Ankauf, 2019" catalogNo:"AKU-2019-077" category:"installation" curatorNote:"2017 und 2018 entließen dutzende Medienunternehmen Tausende Redakteurinnen und Redakteure mit der Begründung, die Zukunft gehöre dem Video — einer Vorhersage, die auf gefälschten Facebook-Metriken beruhte. Das Mahnmal gießt Titelseiten der entlassenen Publikationen in transparentes Kunstharz ein. Ein Kenotaph für eine Redaktion, die auf Zahlen vertraute, die niemand überprüft hatte." imageFile:"pivot-to-video.jpg"

ADDITIONAL WORKS:
29. slug:"zuckerberg-im-grau" title:"Zuckerberg im Grau (KI-Studie, 10 Schichten)" year:2023 artist:"Algorithmisches Atelier, autonom" medium:"KI-generierte Pigmentdrucke auf Aluminium (10-teilig)" dimensions:"Jeweils 50 × 40 cm" acquisition:"Ankauf, 2024" catalogNo:"AKU-2024-055" category:"painting" curatorNote:"Zehn KI-generierte Porträts zeigen Mark Zuckerberg gleichzeitig in zehn verschiedenen kunsthistorischen Stilen — Hyperrealismus, Kubismus, Pointillismus, Abstract Expressionism, Japonisme, Barock, Romantik, Neue Sachlichkeit, Pop Art, Minimalismus. Zusammen ergeben sie ein Bild, das fragt: Wer ist die Person hinter dem Interface? Die Antwort: zehn Möglichkeiten, keine Gewissheit." imageFile:"zuckerberg-im-grau.jpg"

30. slug:"the-union-buster" title:"Der Gewerkschaftsbuster: Amazons Lagerhaus-Diorama" year:2023 artist:"Studio Miniatur, Dresden" medium:"Gemischte Medien, Diorama, Maßstab 1:50" dimensions:"180 × 120 × 60 cm" acquisition:"Ankauf, 2024" catalogNo:"AKU-2024-033" category:"installation" curatorNote:"Das maßstabsgetreue Diorama eines Amazon-Erfüllungszentrums — handgefertigt in Dresden, bestückt mit 847 Miniaturfiguren in Warnwesten — zeigt den Alltag moderner Logistikarbeit in der Detailgenauigkeit eines Historiengemäldes. Die Figuren sind in Posen fixiert, die aus dokumentierten Arbeitsplatzstudien entnommen wurden. Ein Werk, das sichtbar macht, was die Plattform unsichtbar hält." imageFile:"the-union-buster.jpg"

31. slug:"great-layoffs-tapestry" title:"Die großen Entlassungen (Wandteppich nach dem Bayeux-Teppich)" year:2024 artist:"Textilkollektiv Kette und Schuss, Brüssel" medium:"Handgewebter Wandteppich, Wolle auf Leinen" dimensions:"200 × 500 cm" acquisition:"Ankauf, 2024" catalogNo:"AKU-2024-066" category:"installation" isNew:true curatorNote:"Der fünf Meter lange Wandteppich dokumentiert die Massenentlassungen in der Technologiebranche 2022–2023 — Twitter, Meta, Amazon, Google, Microsoft — in der formalen Sprache des Bayeux-Teppichs aus dem 11. Jahrhundert. Die Unternehmensnamen erscheinen in eingewebtem Latein als Bildunterschriften; die stilisierten Figuren mit Laptops und Kartonboxen folgen der Ikonografie mittelalterlicher Schlachtenszenen. In den Randleisten weben sich Twitterzitate durch das Bild." imageFile:"great-layoffs-tapestry.jpg"

32. slug:"museum-exterior" title:"AKU-Gebäude, Kurfürstenstraße 78, Berlin — Außenansicht" year:2019 artist:"AKU-Fotoarchiv" medium:"Archivalischer Pigmentdruck" dimensions:"80 × 120 cm" acquisition:"Institutionsfoto" catalogNo:"AKU-ARCH-001" category:"photography" curatorNote:"Außenansicht des Museumsgebäudes, ein Beispiel des Berliner Nachkriegs-Brutalismus, 1987 umgewidmet." imageFile:"museum-exterior.jpg"

33. slug:"gallery-interior" title:"Blick in die Sammlungsräume, Erdgeschoss" year:2024 artist:"AKU-Fotoarchiv" medium:"Archivalischer Pigmentdruck" dimensions:"80 × 120 cm" acquisition:"Institutionsfoto" catalogNo:"AKU-ARCH-002" category:"photography" curatorNote:"Blick in den Erdgeschosssaal mit Skulpturenpräsentation." imageFile:"gallery-interior.jpg"

34. slug:"metaverse-room" title:"Das Metaverse-Zimmer (VR-Headset-Vanitas)" year:2022 artist:"Stillleben-Kollektiv, Amsterdam" medium:"Öl auf Leinwand" dimensions:"120 × 160 cm" acquisition:"Ankauf, 2023" catalogNo:"AKU-2023-066" category:"painting" curatorNote:"Das Gemälde überträgt das holländische Vanitas-Stillleben des 17. Jahrhunderts in die Gegenwart: Anstelle von Schädeln, Sanduhren und verwelkenden Blumen arrangiert das Werk Meta Quest VR-Headsets, NFT-Zertifikate und ein angebissenes Metaburger-Menü. Die Moral ist dieselbe wie bei Pieter Claesz: Alles vergeht. Auch das Metaverse." imageFile:"metaverse-room.jpg"

35. slug:"corporate-ephemera-vitrine" title:"Sammlung korporativer Ephemera (Vitrine I): 1994–2024" year:2024 artist:"AKU-Kuratorium (Kompilation)" medium:"Gemischte Medien, Museumsvitrinen" dimensions:"Variable Maße (drei Vitrinen)" acquisition:"Laufende Sammlung" catalogNo:"AKU-COLL-001" category:"ephemera" featured:true curatorNote:"Die Vitrinen zeigen korporative Ephemera aus drei Jahrzehnten Silicon Valley: frühe AOL-Discs, Netscape-T-Shirts, Google-IPO-Prospekte, Facebook-Entwickler-Hoodies, Early Adopter iPhone-Boxen, NFT-Minzurkunden, eine originalverpackte Google Glass. Jedes Objekt war einmal die Zukunft. Zusammen ergeben sie eine Archäologie der Disruption." imageFile:"corporate-ephemera-vitrine.jpg"

36. slug:"die-omnipraesenz" title:"Die Omnipräsenz: 1000 Logos (Rauminstallation)" year:2021 artist:"Studio Mosaik, Berlin" medium:"UV-Druck auf Aluminium, mosaikartig" dimensions:"400 × 600 cm" acquisition:"Ankauf, 2022" catalogNo:"AKU-2022-011" category:"installation" curatorNote:"1000 Unternehmenslogos — von Fortune-500-Konzernen bis zu längst aufgegebenen Startups — sind in der Formsprache eines byzantinischen Kirchenmosaiks angeordnet: Ein zentrales Logo (das jeweils größte Unternehmen der Welt nach Marktkapitalisierung, rotierend je nach Ausstellungsdatum) strahlt von der Apsis. Konzernlogos als Heiligenbilder." imageFile:"die-omnipraesenz.jpg"

37. slug:"bezos-divorce" title:"Der Goldene Fallschirm: Bezos' Scheidungsregelung" year:2019 artist:"Ikonenmalerei-Atelier Byzanz, Thessaloniki" medium:"Blattgold und Tempera auf Holztafel" dimensions:"60 × 45 cm" acquisition:"Ankauf, 2020" catalogNo:"AKU-2020-044" category:"painting" curatorNote:"Die Scheidungsvereinbarung zwischen Jeff Bezos und MacKenzie Scott — 38 Milliarden Dollar in Amazon-Aktien — ist hier als byzantinische Ikone ausgeführt. Die zwei Figuren stehen frontal, goldener Nimbus um die Köpfe, ihre Hände berühren sich über einem stilisierten Scheidungsdokument. Ein Werk über das Heilige des Eigentumsrechts und die Sakramente des amerikanischen Familienrechts." imageFile:"bezos-divorce.jpg"

38. slug:"shareholder-value" title:"Shareholder Value (Neoklassische Allegorie)" year:2020 artist:"Atelier Neoklassik, Wien" medium:"Öl auf Leinwand" dimensions:"200 × 150 cm" acquisition:"Ankauf, 2021" catalogNo:"AKU-2021-055" category:"painting" curatorNote:"Die allegorische Figur des 'Shareholder Value' — konzipiert als weibliche Gottheit in der Tradition neoklassischer Personifikationen — trägt einen Lorbeerkranz aus Börsencharts, eine Waage mit Quartalszahlen und ein Schwert aus gebündelten Aktien. Das Gemälde ist eine ernst gemeinte akademische Malerei des Jahres 2020, die das Konzept des Shareholder Value mit denselben Mitteln aufwertet, mit denen das 19. Jahrhundert Freiheit, Gerechtigkeit und Nation aufwertete." imageFile:"shareholder-value.jpg"

39. slug:"surveillance-capitalism" title:"Karte der Überwachungsökonomie (Nach Humboldt)" year:2021 artist:"Kartografisches Institut für Digitale Geografie, Zürich" medium:"Handgezeichnete Karte, Aquarell und Tusche auf Bütten" dimensions:"180 × 240 cm" acquisition:"Ankauf, 2022" catalogNo:"AKU-2022-088" category:"installation" curatorNote:"Im Stil Alexander von Humboldts großer Kartierungen der Neuen Welt zeichnet das Werk die Topografie der Überwachungsökonomie: Datenflüsse als Flusssysteme, Algorithmen als Gebirgszüge, Nutzerdaten als natürliche Ressourcen. Die Legende erklärt, wie viele Datenpunkte einem Menschen entsprechen. Ein Bild über Kolonialisierung als Metapher — und als Realität." imageFile:"surveillance-capitalism.jpg"

40. slug:"museum-at-night" title:"AKU bei Nacht, Kurfürstenstraße 78" year:2024 artist:"AKU-Fotoarchiv" medium:"C-Print" dimensions:"80 × 120 cm" acquisition:"Institutionsfoto" catalogNo:"AKU-ARCH-003" category:"photography" curatorNote:"Nachtaufnahme des Museumsgebäudes mit Beleuchtung." imageFile:"museum-at-night.jpg"

Export the array as: export const artworks: Artwork[] = [...]
Also export: export const getFeatured = () => artworks.filter(a => a.featured)
export const getNew = () => artworks.filter(a => a.isNew)
export const getBySlug = (slug: string) => artworks.find(a => a.slug === slug)
export const getByCategory = (cat: string) => artworks.filter(a => a.category === cat)

## STEP 4 — Create /lib/exhibitions.ts

```ts
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
```

## STEP 5 — Create /lib/shop.ts

```ts
export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageFile: string;
  category: 'catalog' | 'print' | 'accessory' | 'merchandise';
}

export const shopItems: ShopItem[] = [
  { id: "catalog-gruss", name: 'Ausstellungskatalog "Der Gruß"', description: "288 Seiten, Hardcover, zweisprachig DE/EN. Texte von Prof. Dr. Hildegard Weißenbach-Kronauer und internationalen Gästen.", price: 38, imageFile: "shop-catalog-gruss.jpg", category: "catalog" },
  { id: "tote-bag", name: "AKU Tragetasche — Korporative Kulturgüter", description: "Schweres Baumwollgewebe, bedruckt mit der AKU-Museumsschrift. 42 × 38 cm.", price: 18, imageFile: "shop-tote.jpg", category: "merchandise" },
  { id: "poster-priscilla", name: 'Museumsposter "Priscilla, 2021"', description: "Hochwertige Reproduktion, 50 × 70 cm, auf 200g Kunstdruck.", price: 24, imageFile: "shop-poster-priscilla.jpg", category: "print" },
  { id: "poster-kreis", name: 'Museumsposter "Der Kreis (Nach Matisse)"', description: "Hochwertige Reproduktion, 50 × 70 cm, auf 200g Kunstdruck.", price: 24, imageFile: "shop-poster-kreis.jpg", category: "print" },
  { id: "notebook", name: "AKU Notizbuch — Sammlungsausgabe", description: "A5, Fadenbindung, 192 Seiten. Vorsatzpapier mit AKU-Logodesign.", price: 14, imageFile: "shop-notebook.jpg", category: "merchandise" },
  { id: "agb-facsimile", name: '"Die AGB" — Faksimile-Druck', description: "Reproduktion des illuminierten Manuskripts, 6 Seiten, auf Pergamentpapier.", price: 65, imageFile: "shop-agb.jpg", category: "print" },
  { id: "mug", name: 'AKU Kaffeebecher — "Shareholder Value"', description: "Porzellan, weiß, mit Allegoriedarstellung. Spülmaschinenfest.", price: 16, imageFile: "shop-mug.jpg", category: "merchandise" },
  { id: "postcards", name: "Postkarten-Set (12 Motive)", description: "Die beliebtesten Werke aus der Ständigen Sammlung auf 12 Kunstdruckkarten.", price: 8, imageFile: "shop-postcards.jpg", category: "print" },
  { id: "catalog-ipo", name: 'Ausstellungskatalog "IPO: Der Börsengang als Spektakel"', description: "196 Seiten, Softcover, alle Fotografien in Originalgröße reproduziert.", price: 45, imageFile: "shop-catalog-ipo.jpg", category: "catalog" },
  { id: "pin", name: "AKU Mitgliedschafts-Pin", description: "Emaillierter Ansteckpin, vergoldet. Zeigt das AKU-Monogramm.", price: 6, imageFile: "shop-pin.jpg", category: "accessory" },
];
```

## STEP 6 — Create /components/Nav.tsx

Sticky top navigation bar. Whitney-style. Black background on scroll, transparent on hero sections.

```tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/sammlung", label: "Sammlung" },
  { href: "/ausstellungen", label: "Ausstellungen" },
  { href: "/besuchen", label: "Besuchen" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/laden", label: "Laden" },
  { href: "/unterstuetzen", label: "Unterstützen" },
];
```

Style: Fixed top, full width. Left: "AKU" logotype in bold. Right: nav links. Mobile: hamburger. On scroll past 80px, add white background + border-bottom. Font: 0.8rem uppercase tracking-wide.

## STEP 7 — Create /components/Footer.tsx

Whitney-style black footer.
- Full black background (#0a0a0a), white text
- Top row: Newsletter signup (email input + button) + social row (fake Instagram/Facebook/YouTube icons using SVG or emoji)
- Bottom row: 4 columns:
  - "Hier helfen wir": Barrierefreiheit, Kontakt, FAQ, Presse
  - "Mitmachen": Unterstützen, Mitgliedschaft, Stellen, Volontariate
  - "Mission & Werte": Über uns, Leitbild, Sammlung, Datenschutz
  - "Besuchen": Öffnungszeiten, Eintritt, Anfahrt, Barrierefreiheit
- Bottom bar: Copyright "© 2026 Das Aurelius-Konservatorium für Unternehmenskunst e.V., Berlin" + privacy/terms links

## STEP 8 — Create /components/ArtworkCard.tsx

Museum card component.
Props: artwork (Artwork type), size ('sm'|'md'|'lg')
- Image area with aspect-ratio-square (or 4/3)
- ImageWithFallback component below
- Museum label: tiny caps ARTIST NAME · YEAR
- Title (medium bold)
- Medium (tiny grey)
- Hover: subtle scale on image, gold underline on title
- Links to /sammlung/[slug]

## STEP 9 — Create /components/ImageWithFallback.tsx

Client component. Uses next/image. On error, shows styled placeholder div with grey gradient bg and centered artwork title text.

```tsx
"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  fallbackText?: string;
}
```

## STEP 10 — Update app/layout.tsx

Import Inter from 'next/font/google'. Apply to body. Include Nav and Footer. Set metadata: title "Das Aurelius-Konservatorium | AKU Berlin", description with museum mission.

## STEP 11 — Build app/page.tsx (HOME — Whitney layout)

This is the most important page. Make it look EXACTLY like whitney.org structure:

SECTION 1 — HERO: Large full-width or near-full hero. Featured artwork "Der Gruß (Neuerwerbung 2025)". Big image (use ImageWithFallback). Over image: small red/gold "Neuerwerbung" label pill. Big headline: "Der Gruß" below in large serif-ish bold. Dates. Two CTA buttons: "Mehr erfahren" + "Jetzt Mitglied werden".

SECTION 2 — EXHIBITIONS GRID: "Aktuelle Ausstellungen" heading + "Alle Ausstellungen ansehen →" link. Below: horizontal scrollable row of 4-5 exhibition cards (image + title + dates). Whitney uses a flex row with overflow-x-auto.

SECTION 3 — DIVIDER + FEATURE BLOCK 1 (2-col): Left: large image (gallery interior). Right: text block. Heading: "Freier Eintritt" subheading + description about free admission on Fridays and second Sundays (German equivalent). CTA link.

SECTION 4 — FEATURE BLOCK 2 (2-col, reversed): Left: text about the Whitney Biennial equivalent "Die Korporationsrunde" — AKU's annual rotating survey of corporate art. Right: image.

SECTION 5 — COLLECTION PREVIEW: "Tauchen Sie ein: Die Sammlung" heading + "Alle Werke ansehen →". Below: horizontal scrollable strip (overflow-x-auto, flex, gap-4) with ~6 artwork cards (image + artist + title).

SECTION 6 — MISSION TEASER: Full-width grey bg section. Centered. Big quote text from the mission statement. Button: "Über das AKU".

SECTION 7 — EDITORIAL BLOCKS (2-col grid, like Whitney's Video/Podcasts section):
- "Die Gründungsgeschichte" with an image
- "Der wissenschaftliche Beirat" with image
- "Das Museumsgespräch" (podcast equivalent) with image

## STEP 12 — Build app/sammlung/page.tsx (COLLECTION)

Whitney collection page:
- Full-width hero: "Die Sammlung" big heading. Subtext: "847 Werke · Korporative Skulptur, Ephemera, Unternehmensporträt"
- Filter bar below: "Alle | Skulptur | Gemälde | Fotografie | Ephemera | Installation | Neuerwerbungen" — use client-side state for filtering
- Masonry/responsive grid: 3 cols desktop, 2 tablet, 1 mobile. Each: ArtworkCard component
- All 40 artworks displayed

## STEP 13 — Build app/sammlung/[slug]/page.tsx (ARTWORK DETAIL)

Generate static params from all artwork slugs.

Layout:
- Breadcrumb: Sammlung > [Category] > [Title]
- Large image (full-width or 2/3 width, left column)
- Right column: Wall label panel (styled like a real museum label):
  - Catalog number (tiny, grey)
  - Artist (small caps)
  - Title (large, italic)
  - Year | Medium
  - Dimensions (if any)
  - Acquisition note
  - Horizontal rule
  - Curator's Note (body text, 2-3 paragraphs)
- "Weitere Werke" grid below: 3 related artworks by same category

## STEP 14 — Build app/ausstellungen/page.tsx (EXHIBITIONS)

New Museum exhibitions style:
- Hero: "Ausstellungen" big bold heading
- "Aktuelle Ausstellungen" section: featured exhibition as large hero card + 2 more as cards
- "Kommende Ausstellungen": 2-col grid
- "Vergangene Ausstellungen": 3-col smaller grid with grey overlay
- "Online Ausstellungen": 2-col section

## STEP 15 — Build app/ueber-uns/page.tsx (ABOUT)

Whitney about page layout:
- Large centered introductory paragraph (mission statement in German)
- "Geschichte des AKU" section: timeline style, 1987 founded, 1994 Berlin, 2005 expansion, 2020 digital, 2025 today
- "Mission & Werte" 2-col grid: text blocks with bold headings
- "Das Kuratorium" section: trustee names, titles, short bios
- "Das Gebäude" section: address, building description, photo
- "Finanzielle Information" section: mention of federal funding (satirical but believable)

## STEP 16 — Build app/besuchen/page.tsx (VISIT)

- Hours table (Tue–Sun 11–18, Thu until 20, Mon closed)
- Admission prices: Regular €14, Reduced €9, Members free, Under 18 free, First Friday of month free
- Address: Kurfürstenstraße 78, 10787 Berlin. Near U1 Kurfürstenstraße.
- Accessibility info
- Getting there (U-Bahn, Bus, Parking)

## STEP 17 — Build app/unterstuetzen/page.tsx (SUPPORT)

- Membership tiers in card layout:
  - Freunde des AKU: €60/Jahr
  - Förderer: €150/Jahr
  - Mäzene: €500/Jahr
  - Korporative Partner: €5.000/Jahr — "Lassen Sie Ihre Marke Teil der Geschichte werden"
- Corporate membership pitch: "Werden Sie Teil der Institution, die Korporationen der Öffentlichkeit zurückgibt" (satirically perfect)
- Donation form placeholder

## STEP 18 — Build app/laden/page.tsx (SHOP)

Grid layout (3-col desktop, 2-col tablet, 1-col mobile).
Each product card: ImageWithFallback + name + price + "In den Warenkorb" button.
Small filter bar: Alle | Kataloge | Drucke | Accessoires

## STEP 19 — Build app/presse/page.tsx (PRESS)

Press releases in reverse order:
- "AKU erwirbt kontroverse Bronzestatue — Pressemitteilung, Februar 2025"
- "Neue Ausstellung 'IPO: Der Börsengang als Spektakel' — Oktober 2024"
- "AKU erhält Bundesförderung für digitale Sammlungsprojekte — März 2024"
- "Rekordbesuch 2023: 187.000 Gäste — Januar 2024"
- "Neue Dauerleihgabe der Zuckerberg-Chan-Stiftung — November 2022"

"In den Medien" section: fake press clippings from Der Spiegel, FAZ, Monopol Magazin, The Guardian, artnet.

## STEP 20 — Create .github/workflows/deploy.yml

GitHub Actions for static export to gh-pages branch:
- Trigger: push to main
- Build: npm ci && npm run build
- Deploy: peaceiris/actions-gh-pages@v3 with publish_dir: ./out

## STEP 21 — Run npm run build

Fix any TypeScript errors. Make sure the build succeeds cleanly.

## CRITICAL DESIGN NOTES:
- This must look like a REAL, world-class museum website. Not a parody site. The satire is in the content, not the design.
- White space is your friend. Use it aggressively.
- Every hover state should be smooth.
- Museum wall labels must be precise and formal.
- The curator's notes are already written — use them verbatim.
- Mobile responsive throughout.
- Use Next.js Link for all internal navigation.
- basePath aware: images src should be `/aurelius-konservatorium/images/` + filename in production. Since next.config handles basePath/assetPrefix, just use `/images/` + filename for src. Next.js will handle the prefix.

When completely done and build succeeds, run:
openclaw system event --text "Aurelius museum build complete — all pages built, npm run build succeeded" --mode now
