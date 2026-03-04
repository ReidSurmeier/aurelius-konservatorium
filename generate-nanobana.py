#!/usr/bin/env python3
"""AKU Image Generator — nano-banana-pro-preview"""
import os, base64, time, sys
from pathlib import Path
from google import genai
from google.genai import types

KEY = os.environ.get("GEMINI_API_KEY","AIzaSyCJBvnV6kKpJ20x_pHwnjZ0dD1UwcAyTGU")
client = genai.Client(api_key=KEY)
OUT = Path(__file__).parent / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

MUSEUM = "Museum-quality photography. White gallery walls, professional directional spotlights, archival aesthetic. World-class contemporary art museum. "
ARCH   = "Architectural photography of a contemporary art museum building. Stacked offset rectangular white volumes, SANAA-influenced minimalist design, luminous. Urban Berlin street context, dusk lighting, soft sky. Cinematic sharp architectural photography. "
SAUL   = "Saul Leiter style documentary photography: atmospheric color washes, soft focus layers, reflections in glass, warm film grain, impressionistic palette. C-print museum presentation. "

IMAGES = [
    ("museum-exterior.jpg",
     ARCH + "Exterior view from across the street. Stacked white rectangular volumes slightly offset. Museum name in sans-serif letters above entrance. A few visitors on steps. Dusk, soft lavender sky. Wide shot."),
    ("museum-overview.jpg",
     ARCH + "Wide establishing shot of the full building facade, elevated vantage. Stacked white boxes asymmetrically offset. Street-level glass lobby glowing warmly from within. Cinematic, wide angle. Dramatic."),
    ("museum-at-night.jpg",
     ARCH + "Night exterior. Warm interior light glowing through lobby glass panels. Street lights reflected on wet Berlin pavement. Deep blue-black sky. Contemplative and atmospheric."),
    ("gallery-interior.jpg",
     "Interior architectural photography of a pristine white contemporary art museum gallery. Very high ceilings, polished concrete floors, bronze sculptures on white pedestals, large oil paintings on walls. Visitors in distance for scale. Whitney Museum aesthetic. Soft even gallery lighting, wide angle."),
    ("priscilla-2021.jpg",
     MUSEUM + "Monumental bronze portrait bust of a young woman on a white marble pedestal, classical academic style, richly patinated. Single spotlight from above, white gallery wall behind. Wall label card on pedestal. Fine art museum photography."),
    ("bezos-apres-matisse.jpg",
     MUSEUM + "Large framed artwork on white gallery wall: vibrant Matisse paper-cutout style collage in cerulean blue, vermillion, chrome yellow. Abstract human silhouettes in a joyful circle, exactly like Matisse's late paper cuts. Museum lighting, framed."),
    ("die-gefaehrtinnen.jpg",
     MUSEUM + "Long white marble relief frieze panel mounted on museum wall, ancient Greek Parthenon style, six draped female figures in classical procession with contrapposto poses. Directional museum light, catalog label."),
    ("der-gruss-2025.jpg",
     MUSEUM + "Life-size bronze statue of a man in a dark business suit, right arm extended diagonally upward in a sweeping dramatic gesture, on a low rectangular plinth. Stark white gallery, single overhead spotlight, strong shadow. Small gold NEW ACQUISITION placard. Powerful, cinematic, slightly unsettling."),
    ("the-rocket-garden.jpg",
     "Outdoor museum sculpture garden. Towering polished stainless steel sculpture 18 meters tall, slender vertical form with rounded tip on concrete base. Overcast Berlin sky. Full scale visible, surrounding trees. Contemporary sculpture garden photography."),
    ("der-oracle-jobs.jpg",
     MUSEUM + "Black granite sculpture of a seated man in a turtleneck sweater, exactly Rodin's Thinker pose — chin resting on fist. Dark polished pedestal, white gallery, dramatic side lighting casting deep shadows."),
    ("der-vorstand.jpg",
     MUSEUM + "Enormous oil painting on gallery wall, style of Leonardo's Last Supper: thirteen men in dark business suits at a long conference table with laptops and annual reports. Central figure bald and commanding. Renaissance warm lighting. Gold frame."),
    ("der-kreis-amazon.jpg",
     MUSEUM + "Large square oil painting: six men in identical dark navy business suits, hands joined, dancing in a circle exactly like Matisse's La Danse 1909. Rich oil paint texture. Gold frame, white gallery."),
    ("move-fast.jpg",
     MUSEUM + "White marble inscription tablet on pedestal: text MOVE FAST AND BREAK THINGS carved in classical Roman capitals with slight patina and weathering. Museum spotlight, white gallery."),
    ("die-handshake-hochzeit.jpg",
     MUSEUM + "Large oil painting in Flemish Renaissance Jan van Eyck style: two men in expensive business suits shaking hands in a formal interior, ornate chandelier overhead, stained glass window showing corporate logos. Rich oil technique, gold frame."),
    ("die-gruender-renaissance.jpg",
     MUSEUM + "Oil on wood panel: Renaissance double portrait in Ghirlandaio style, two young men as Florentine patricians, one bespectacled, Stanford University campus visible through arched window behind. Gold frame, museum wall."),
    ("apology-tour.jpg",
     MUSEUM + "Large oil painting, Dutch Golden Age Rembrandt chiaroscuro style: young pale man with round face seated at elevated podium before rows of elderly men in dark suits. Single spotlight on his face in darkness. Senate chamber setting."),
    ("die-rueckkehr.jpg",
     MUSEUM + "Monumental oil painting, Ingres Napoleonic portrait style: muscular bald man in a dark suit stands at a government podium. Prussian blue and gold palette. Imperial Napoleonic dramatic lighting. Heroic and unsettling."),
    ("ipo-facebook-2012.jpg",
     SAUL + "NASDAQ trading floor 2012, traders in blue jackets visible through glass reflections and color washes, amber and blue light, Facebook IPO energy. Thin silver museum frame on white wall."),
    ("ipo-amazon-1997.jpg",
     SAUL + "1990s trading floor, warm Kodachrome tones, slightly out-of-focus traders, paper order slips on desks, analog era warmth. Nostalgic atmospheric film photography."),
    ("ipo-google-2004.jpg",
     SAUL + "Trading floor circa 2004, glowing screens reflecting in windows, layered colors, traders in motion blur, celebration energy. C-print museum presentation."),
    ("ipo-apple-1980.jpg",
     SAUL + "1980 trading floor, heavy Kodachrome grain, traders in polyester suits and wide ties, ticker tape, warm yellows and oranges. Archival feel."),
    ("ipo-twitter-2013.jpg",
     SAUL + "Outside the New York Stock Exchange, crisp autumn day, crowds of people, Twitter bird banner on neoclassical facade, atmospheric urban soft focus."),
    ("ipo-uber-2019.jpg",
     SAUL + "NYSE trading floor 2019, Uber branding on screens, slightly deflated energy, cool blue-grey tones. C-print museum frame."),
    ("shareholders-documentary.jpg",
     "Split diptych documentary photography in museum frames: left — rows of shareholders in a corporate auditorium under fluorescent lights; right — stage with executives at a podium. Clinical anthropological observation style."),
    ("cerulean-horizon-glasses.jpg",
     MUSEUM + "Studio photograph of smart glasses completely encrusted with brilliant-cut diamonds set in polished platinum, displayed on black velvet museum pedestal under a focused spotlight. Luxury jewelry photography meets museum archival presentation."),
    ("terms-of-service-manuscript.jpg",
     MUSEUM + "Open illuminated manuscript on vellum under museum vitrine glass: gold leaf decorated pages with tiny legal text, ornate marginalia showing corporate logos as saints, Byzantine-style capital letters. Archival display lighting."),
    ("logo-triptych-apple.jpg",
     MUSEUM + "Three museum-mounted backlit lightbox panels in a triptych formation showing Apple logo evolution across three eras. Arranged as medieval altarpiece triptych, devotional lighting from below."),
    ("crypto-spring-nfts.jpg",
     MUSEUM + "Museum vitrine display case with internal lighting: NFT printouts, blockchain receipts, digital art prints arranged like archaeological artifacts with small white catalog labels."),
    ("alexa-altar.jpg",
     MUSEUM + "Installation: a gilded Gothic altarpiece structure holding 32 Amazon Echo smart speakers in tiers like haloed saints, the central Echo larger, all lit with warm amber devotional light."),
    ("ring-reliquary.jpg",
     MUSEUM + "Medieval-style gold reliquary with enamel and rubies, holding a Ring Video Doorbell camera encased in gold filigree. Museum display pedestal. Macro photography."),
    ("linkedin-network.jpg",
     MUSEUM + "Large oil painting: meticulous 19th-century cartographic map showing a social network graph as topographical terrain — names as places, connections as roads and rivers, hubs as cities. Humboldt expedition map style."),
    ("pivot-to-video.jpg",
     MUSEUM + "Sculpture on steel pedestal: newspaper front pages from 2017-2018 media layoffs cast inside a clear resin block, a translucent cenotaph. Newspapers visible inside the block. Directional museum lighting."),
    ("zuckerberg-im-grau.jpg",
     MUSEUM + "Grid of 10 framed portraits on white gallery wall showing the same expressionless man, each in a completely different art style: photorealism, cubism, pointillism, baroque chiaroscuro, pop art, abstract expressionism, impressionism, minimalism, woodblock, neoclassical."),
    ("the-union-buster.jpg",
     MUSEUM + "Large museum diorama in glass display case: miniature Amazon fulfillment warehouse at 1:50 scale, hundreds of tiny workers in yellow hi-vis vests, conveyor belts, towering shelving. Museum display case lighting, catalog label on glass."),
    ("great-layoffs-tapestry.jpg",
     MUSEUM + "Long textile tapestry on white museum wall in Bayeux Tapestry style: stylized flat figures carrying laptops and cardboard boxes, company names woven in Latin captions. Five meters wide, dramatic overhead lighting."),
    ("metaverse-room.jpg",
     MUSEUM + "Large oil painting, 17th-century Dutch vanitas still life: Meta Quest VR headsets, NFT certificates, wilting flowers, a skull, and a guttering candle on draped cloth table. Chiaroscuro lighting. Gold museum frame."),
    ("corporate-ephemera-vitrine.jpg",
     MUSEUM + "Three museum display vitrines under glass showing corporate ephemera as archaeological artifacts: AOL discs, early iPod boxes, Facebook hoodies, Google Glass unit, each with white catalog labels. Archaeological museum aesthetic."),
    ("die-omnipraesenz.jpg",
     MUSEUM + "Massive wall installation: 1000 corporate logos arranged in Byzantine mosaic pattern on an aluminum panel covering an entire gallery wall, central logo surrounded by radiating halos like a saint in an apse. Scale figure visible."),
    ("bezos-divorce.jpg",
     MUSEUM + "Byzantine icon painting on wood panel with gold leaf: two frontal figures with golden halos standing symmetrically, hands meeting over a stylized legal document. Egg tempera, formal sacred iconography. Museum display pedestal."),
    ("shareholder-value.jpg",
     MUSEUM + "Large neoclassical academic oil painting: allegorical female figure as goddess standing on clouds, holding scales containing stock charts, laurel crown of bar graphs, sword of bundled stock certificates. Pompier academic style."),
    ("surveillance-capitalism.jpg",
     MUSEUM + "Large hand-drawn map on aged paper in museum frame: Humboldtian expedition cartography showing data flows as rivers, algorithm clusters as mountain ranges. Detailed hand lettering. Archival framing."),
    ("shop-catalog-gruss.jpg",
     "Clean studio product photography, pure white background. Hardcover art exhibition catalog, matte black cover with embossed bronze silhouette of a raised arm. Titled 'Der Gruß / The Greeting — AKU Berlin'. Perfect even lighting."),
    ("shop-tote.jpg",
     "Clean studio product photography, white background. Heavy natural cotton canvas tote bag with AKU logotype in black block letters. Perfectly displayed, soft diffused lighting."),
    ("shop-poster-priscilla.jpg",
     "Clean product photography, white background. Rolled museum exhibition poster partially unrolled revealing a classical bronze bust image. Elegant."),
    ("shop-poster-kreis.jpg",
     "Clean product photography, white background. Framed museum reproduction print showing colorful suited figures in a circle. Museum-quality frame."),
    ("shop-notebook.jpg",
     "Clean studio product photography, white background. Hardbound A5 notebook, matte black cover with small gold AKU monogram embossed lower right corner. Elegant and minimal."),
    ("shop-agb.jpg",
     "Clean product photography, white background. Parchment-style printed document with ornate illuminated border and Gothic lettering. Partially rolled open."),
    ("shop-mug.jpg",
     "Clean studio product photography, white background. White porcelain cylindrical coffee mug with a classical allegorical figure illustration in black. Clean and minimal."),
    ("shop-postcards.jpg",
     "Clean product photography, white background. Fan of 12 art museum postcards overlapping, showing various artworks. Museum-quality printing."),
    ("shop-catalog-ipo.jpg",
     "Clean product photography, white background. Softcover exhibition catalog, black and white atmospheric stock exchange photograph on cover. Titled 'IPO: The Stock Market Listing as Spectacle — AKU Berlin'."),
    ("shop-pin.jpg",
     "Clean macro product photography, white background. Small gold enamel lapel pin with AKU monogram in black on gold base. Museum gift shop quality."),
]

def generate(filename, prompt):
    out_path = OUT / filename
    if out_path.exists() and out_path.stat().st_size > 10000:
        print(f"SKIP {filename}", flush=True)
        return True
    print(f"GEN  {filename}...", flush=True)
    for attempt in range(3):
        try:
            resp = client.models.generate_content(
                model="models/nano-banana-pro-preview",
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_modalities=["IMAGE","TEXT"],
                )
            )
            for part in resp.candidates[0].content.parts:
                if part.inline_data:
                    data = part.inline_data.data
                    if isinstance(data, str):
                        img_bytes = base64.b64decode(data)
                    else:
                        img_bytes = data
                    out_path.write_bytes(img_bytes)
                    print(f"OK   {filename} ({len(img_bytes)//1024}kb)", flush=True)
                    return True
            print(f"FILT {filename} (no image in response)", flush=True)
            return False
        except Exception as e:
            print(f"ERR  {filename} attempt {attempt+1}: {e}", flush=True)
            time.sleep(3)
    return False

done = 0
failed = []
print(f"Generating {len(IMAGES)} images → {OUT}\n", flush=True)
for fname, prompt in IMAGES:
    ok = generate(fname, prompt)
    if ok: done += 1
    else: failed.append(fname)
    time.sleep(0.5)

print(f"\nDone. {done}/{len(IMAGES)} generated.", flush=True)
if failed:
    print(f"Failed: {failed}", flush=True)
