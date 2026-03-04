#!/usr/bin/env python3
"""
AKU Image Generator — Gemini Imagen 3
"""
import os, base64, time
from pathlib import Path
from google import genai
from google.genai import types

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
OUT = Path(__file__).parent / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

MUSEUM = (
    "Museum-quality photography. White gallery walls, professional directional spotlights, "
    "clean archival aesthetic. World-class contemporary art museum presentation. "
)

ARCH = (
    "Architectural photography of a contemporary art museum building. "
    "Stacked offset rectangular volumes clad in white anodized aluminum mesh, "
    "SANAA-influenced minimalist design, luminous and ethereal. "
    "Urban street-level context, dusk lighting, soft lavender sky. "
    "High-end architectural photography, sharp focus, cinematic. "
)

SAUL = (
    "Documentary photography in the style of Saul Leiter: "
    "atmospheric color washes, soft focus layers, reflections in glass, "
    "warm film grain, impressionistic street photography, "
    "muted yet luminous palette. C-print museum framing. "
)

IMAGES = [
    # ARCHITECTURE / HERO IMAGES
    ("museum-exterior.jpg",
     ARCH + "Exterior shot from across the street, golden hour. Museum name in sans-serif letters above entrance. A few visitors on steps. Berlin urban neighborhood backdrop."),

    ("museum-overview.jpg",
     ARCH + "Wide establishing shot showing full building facade, slightly elevated vantage point. Stacked white boxes asymmetrically offset. Street-level glass lobby glowing from within. Cinematic, wide angle."),

    ("museum-at-night.jpg",
     ARCH + "Night exterior. Interior warm light glowing through lobby glass. Street lights reflected on wet pavement. Deep blue sky. Dramatic and contemplative."),

    ("gallery-interior.jpg",
     "Interior architectural photography of a pristine white contemporary art museum gallery. High ceilings, polished concrete floors, sculpture on white pedestals, large paintings on walls. Visitors in distance for scale. Whitney Museum aesthetic. Soft even gallery lighting. Wide angle."),

    # SCULPTURES
    ("priscilla-2021.jpg",
     MUSEUM + "A monumental bronze portrait bust of a young woman on a white marble pedestal, classical academic style, beautifully patinated. Wall label card visible on pedestal. Single spotlight from above, white gallery wall behind."),

    ("bezos-apres-matisse.jpg",
     MUSEUM + "Large framed paper-cutout artwork on white gallery wall: vibrant Matisse-style collage in cerulean blue, vermillion red, and chrome yellow, showing abstract human silhouettes in a joyful circle. Exactly like Matisse's late paper cuts. Perfect museum lighting."),

    ("die-gefaehrtinnen.jpg",
     MUSEUM + "Long white Pentelian marble relief frieze panel on museum wall, ancient Greek Parthenon frieze style, showing a procession of six draped female figures in classical contrapposto. Museum pedestal, soft directional light, catalog label."),

    ("der-gruss-2025.jpg",
     MUSEUM + "Life-size bronze statue of a man in a business suit, right arm extended diagonally upward in a sweeping gesture, mounted on a low rectangular plinth. Stark white gallery, single dramatic spotlight from above casting strong shadow. Small gold 'NEW ACQUISITION' label on wall. Powerful and unsettling. High contrast."),

    ("the-rocket-garden.jpg",
     "Outdoor museum sculpture garden. Towering polished stainless steel sculpture, 18 meters tall, slender and vertical with rounded tip, mounted on concrete base. Overcast Berlin sky. Wide angle showing full scale. Contemporary sculpture park."),

    ("der-oracle-jobs.jpg",
     MUSEUM + "Black granite sculpture of a seated male figure in a turtleneck sweater, posed exactly like Rodin's The Thinker — chin on fist, elbow on knee — on a dark polished pedestal. White gallery, dramatic side lighting casting deep shadows."),

    ("der-vorstand.jpg",
     MUSEUM + "Enormous oil painting 3 by 6 meters on museum wall, in the style of Leonardo da Vinci's Last Supper: thirteen men in dark business suits and ties seated at a long conference table with laptops, water bottles, and annual reports. The central figure is bald and commanding. Warm Renaissance lighting. Gold frame."),

    # PAINTINGS
    ("der-kreis-amazon.jpg",
     MUSEUM + "Large square oil painting in the style of Matisse's La Danse 1909: six men in identical dark navy suits, hands joined, dancing in a circle against a solid background. Corporate and absurd simultaneously. Gold frame, white gallery wall."),

    ("move-fast.jpg",
     MUSEUM + "Roman marble inscription tablet mounted on white pedestal: the text MOVE FAST AND BREAK THINGS carved in classical Roman sans-serif capitals, with artificial patina and slight weathering. Directional museum spotlight."),

    ("die-handshake-hochzeit.jpg",
     MUSEUM + "Large oil painting in Flemish Renaissance style like Jan van Eyck: two men in expensive business suits facing each other shaking hands in a formal interior, ornate chandelier above, stained glass window behind showing corporate logos instead of saints. Rich oil painting technique."),

    ("die-gruender-renaissance.jpg",
     MUSEUM + "Oil and tempera on wood panel: Renaissance double portrait in the style of Ghirlandaio, two young men as Florentine patricians, one bespectacled, Stanford campus visible through arched window behind them. Small format, gold frame."),

    ("apology-tour.jpg",
     MUSEUM + "Large oil painting in Dutch Golden Age style, Rembrandt chiaroscuro: a young pale man with round face seated at an elevated podium before rows of elderly men in dark suits. Single spotlight illuminating the subject's face against a dark background. Senate chamber setting."),

    ("die-rueckkehr.jpg",
     MUSEUM + "Monumental oil painting in the style of Ingres' Napoleon on the Imperial Throne: a muscular bald man in a dark suit stands at a government podium, Prussian blue and gold color palette, dramatic imperial Napoleonic lighting. Heroic and unsettling."),

    # IPO PHOTOGRAPHY
    ("ipo-facebook-2012.jpg",
     SAUL + "NASDAQ trading floor 2012, traders in blue jackets visible through glass reflections and color washes, amber and blue light, Facebook IPO day energy. C-print in thin silver museum frame on white wall."),

    ("ipo-amazon-1997.jpg",
     SAUL + "1990s trading floor, warm Kodachrome tones, slightly out-of-focus traders, paper order slips on desks, analog trading era warmth. Nostalgic atmospheric film photography. Museum framed."),

    ("ipo-google-2004.jpg",
     SAUL + "Trading floor circa 2004, glowing screens reflecting in windows, atmospheric layered colors, traders in motion blur, celebration energy. C-print museum presentation."),

    ("ipo-apple-1980.jpg",
     SAUL + "1980 trading floor, heavy Kodachrome grain, traders in polyester suits and wide ties, ticker tape, warm yellows and oranges. Archival feel. Museum C-print."),

    ("ipo-twitter-2013.jpg",
     SAUL + "Outside the New York Stock Exchange on a crisp autumn day, crowds of people, Twitter blue bird banner on neoclassical facade, atmospheric urban soft focus. Museum C-print."),

    ("ipo-uber-2019.jpg",
     SAUL + "NYSE trading floor 2019, Uber branding visible on screens, atmosphere of slightly deflated excitement, cool blue-grey tones. C-print museum frame."),

    ("shareholders-documentary.jpg",
     "Split diptych documentary photography in museum frames: left panel — rows of shareholders in a corporate auditorium under fluorescent light, right panel — stage with executives at a podium, CEO at microphone. Clinical, anthropological observation style."),

    # EPHEMERA
    ("cerulean-horizon-glasses.jpg",
     MUSEUM + "Studio product shot of a pair of smart glasses completely encrusted with brilliant-cut diamonds set in polished platinum, displayed on a black velvet museum pedestal under a focused spotlight. Luxury jewelry photography meets museum archival presentation."),

    ("terms-of-service-manuscript.jpg",
     MUSEUM + "Open illuminated manuscript on vellum under museum vitrine glass: gold leaf decorated pages with tiny legal text in Gothic script, ornate marginalia showing corporate logos as saints, Byzantine-style capital letters. Archival display lighting."),

    ("logo-triptych-apple.jpg",
     MUSEUM + "Three museum-mounted backlit lightbox panels in a triptych formation: showing the Apple logo evolving through three eras, arranged exactly like a medieval altarpiece triptych, devotional lighting from below, white gallery setting."),

    ("crypto-spring-nfts.jpg",
     MUSEUM + "Museum vitrine display case with internal lighting: NFT printouts, blockchain transaction receipts, CryptoPunk images arranged like archaeological artifacts with small white catalog labels. Archaeological museum display meets contemporary art."),

    ("alexa-altar.jpg",
     MUSEUM + "Installation: a gilded Gothic altarpiece structure holding 32 Amazon Echo smart speakers arranged in tiers like haloed saints, the central Echo slightly larger, all lit from within by warm amber light. Installation art photography."),

    ("ring-reliquary.jpg",
     MUSEUM + "A medieval-style gold reliquary with enamel decoration and cabochon rubies, holding a Ring Video Doorbell camera encased in filigree gold setting. Museum display pedestal. Macro photography revealing every detail of the goldsmithing."),

    ("linkedin-network.jpg",
     MUSEUM + "Large oil painting: a meticulously detailed 19th-century-style cartographic map showing a social network graph as topographical terrain — names as place names, connections as roads and rivers, hubs as cities. Painted in the style of Humboldt's South American expedition maps."),

    ("pivot-to-video.jpg",
     MUSEUM + "Sculpture on a steel pedestal: newspaper front pages from 2017-2018 media company closures and layoffs cast inside a clear resin block, creating a translucent cenotaph. Newspapers visible inside. Directional museum lighting."),

    # ADDITIONAL WORKS
    ("zuckerberg-im-grau.jpg",
     MUSEUM + "Grid of 10 framed portraits on white gallery wall showing the same expressionless man with short brown hair, each in a completely different art historical painting style: photorealism, cubism, pointillism, baroque chiaroscuro, Japanese woodblock, pop art, abstract expressionism, neoclassical, impressionism, minimalism. Consistent face, wildly different styles."),

    ("the-union-buster.jpg",
     MUSEUM + "Large museum diorama in a glass case: a miniature Amazon fulfillment warehouse at 1:50 scale, hundreds of tiny workers in yellow hi-vis vests at stations, conveyor belts, shelving units floor-to-ceiling. Museum display case lighting, catalog label on glass."),

    ("great-layoffs-tapestry.jpg",
     MUSEUM + "Long textile tapestry hanging on white museum wall in the style of the Bayeux Tapestry: stylized flat figures carrying laptops and cardboard boxes, company names woven in Latin script as captions. 5 meters wide. Museum display lighting from above."),

    ("metaverse-room.jpg",
     MUSEUM + "Oil painting: 17th century Dutch vanitas still life composition with Meta Quest VR headsets, NFT certificates printed on paper, a glowing smartphone, wilting flowers, a skull, and a guttering candle on a draped cloth table. Chiaroscuro lighting. Museum gold frame."),

    ("corporate-ephemera-vitrine.jpg",
     MUSEUM + "Three museum display vitrines under glass showing corporate ephemera arranged as archaeological artifacts: AOL installation discs, early iPod boxes, Facebook developer hoodies, Google Glass unit, each with small white catalog labels. Clean archaeological museum display."),

    ("die-omnipraesenz.jpg",
     MUSEUM + "Massive wall installation: 1000 corporate logos arranged in Byzantine mosaic pattern on an aluminum panel covering an entire gallery wall, the central logo surrounded by radiating halos like a saint in an apse. Tiny logos recede to distance. Scale figure for reference."),

    ("bezos-divorce.jpg",
     MUSEUM + "Byzantine icon painting on wood panel with gold leaf: two frontal figures with golden halos standing symmetrically, hands meeting over a stylized legal document. Formal sacred iconography painted in egg tempera. Small format, museum display pedestal."),

    ("shareholder-value.jpg",
     MUSEUM + "Large neoclassical academic oil painting: an allegorical female figure as a goddess standing on clouds, holding scales containing stock charts, wearing a laurel crown of bar graphs, holding a sword of bundled stock certificates. Pompier academic style circa 2020. Museum gallery, gold frame."),

    ("surveillance-capitalism.jpg",
     MUSEUM + "Large hand-drawn map on aged paper in a museum frame: Humboldtian expedition cartography showing data flows as rivers, algorithm clusters as mountain ranges, user data as natural resources. Detailed hand lettering. Archival framing and lighting."),

    # SHOP ITEMS
    ("shop-catalog-gruss.jpg",
     "Clean studio product photography on pure white background: hardcover art exhibition catalog, matte black cover with embossed bronze silhouette of a raised arm, titled 'Der Gruß / The Greeting — New Acquisition 2025 — AKU Berlin'. Perfect lighting, no shadows."),

    ("shop-tote.jpg",
     "Clean studio product photography on white background: sturdy natural cotton canvas tote bag with AKU logotype in black sans-serif block letters. Perfectly folded, soft diffused lighting."),

    ("shop-poster-priscilla.jpg",
     "Clean product photography on white background: rolled museum exhibition poster with AKU label, partially unrolled to reveal a classical bronze portrait bust image."),

    ("shop-poster-kreis.jpg",
     "Clean product photography on white background: framed museum reproduction print showing figures in colorful circle, museum-quality frame."),

    ("shop-notebook.jpg",
     "Clean studio product photography on white background: hardbound A5 notebook, matte black cover with small gold AKU monogram embossed in lower right corner. Simple and elegant."),

    ("shop-agb.jpg",
     "Clean product photography on white background: parchment-style printed document with ornate illuminated border, the words 'Terms of Service' visible in Gothic lettering. Rolled partially open."),

    ("shop-mug.jpg",
     "Clean studio product photography on white background: white porcelain cylindrical coffee mug with a classical allegorical figure illustration printed on it in black. Clean and minimal."),

    ("shop-postcards.jpg",
     "Clean product photography on white background: a fan of 12 art museum postcards showing various artworks, arranged in an overlapping display. Museum-quality printing."),

    ("shop-catalog-ipo.jpg",
     "Clean product photography on white background: softcover exhibition catalog, cover showing a black and white atmospheric stock exchange photograph, titled 'IPO: The Stock Market Listing as Spectacle — AKU Berlin'."),

    ("shop-pin.jpg",
     "Clean macro product photography on white background: small gold enamel lapel pin with AKU monogram in black enamel on gold base. Museum gift shop quality."),
]

def generate(filename, prompt):
    out_path = OUT / filename
    if out_path.exists():
        size = out_path.stat().st_size
        if size > 5000:
            print(f"  SKIP {filename} ({size//1024}kb)")
            return
    print(f"  GEN  {filename}...", flush=True)
    try:
        resp = client.models.generate_images(
            model="imagen-3.0-generate-002",
            prompt=prompt,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                aspect_ratio="1:1",
                safety_filter_level="block_only_high",
                person_generation="allow_adult",
            ),
        )
        if resp.generated_images:
            img_bytes = resp.generated_images[0].image.image_bytes
            out_path.write_bytes(img_bytes)
            print(f"  OK   {filename} ({len(img_bytes)//1024}kb)", flush=True)
        else:
            print(f"  SKIP {filename} (filtered)", flush=True)
        time.sleep(1)
    except Exception as e:
        print(f"  ERR  {filename}: {e}", flush=True)
        time.sleep(2)

print(f"Generating {len(IMAGES)} images → {OUT}", flush=True)
for fname, prompt in IMAGES:
    generate(fname, prompt)
print("Done.", flush=True)
