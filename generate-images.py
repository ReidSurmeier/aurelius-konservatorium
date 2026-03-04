#!/usr/bin/env python3
"""
AKU Image Generator — gpt-image-1, low quality
~$0.011/image × 40 = ~$0.44 total
"""
import os, base64, time, json
from pathlib import Path
from openai import OpenAI

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
OUT = Path(__file__).parent / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

MUSEUM_STYLE = (
    "Museum photography style. Shot in a world-class contemporary art museum. "
    "Neutral white gallery walls, professional museum lighting with soft directional spotlights. "
    "Clean, authoritative, archival quality. "
)

IMAGES = [
    # SCULPTURES
    ("priscilla-2021.jpg",
     "A monumental bronze portrait bust of a young woman, classical style, on a marble pedestal. Museum exhibition setting, white gallery wall, dramatic spotlight, wall label visible below. Fine art photography."),
    ("bezos-apres-matisse.jpg",
     "A large framed artwork hanging on a white gallery wall: colorful paper cutout collage in the style of Henri Matisse's late period, showing abstract human silhouettes in bright blue, red, and yellow performing a corporate dance. Museum lighting, clean gallery."),
    ("die-gefaehrtinnen.jpg",
     "A long white marble relief frieze panel, ancient Greek Parthenon style, showing a procession of women in classical drapery. Museum exhibition pedestal, white gallery, professional lighting, informational wall label."),
    ("der-gruss-2025.jpg",
     "A life-size bronze statue of a man in a business suit, arm extended forward and slightly upward in a dramatic gesture, mounted on a low plinth. Contemporary art museum gallery, stark white walls, single dramatic spotlight, 'NEW ACQUISITION' label. Unsettling and powerful."),
    ("the-rocket-garden.jpg",
     "A towering polished stainless steel sculpture resembling a rocket or phallic obelisk, photographed in a sculpture garden against a grey Berlin sky. Contemporary art museum outdoor installation."),
    ("der-oracle-jobs.jpg",
     "A black granite sculpture of a seated figure in a turtleneck, posed exactly like Rodin's The Thinker, on a dark pedestal. White gallery room, dramatic side lighting, museum label."),
    ("der-vorstand.jpg",
     "A massive 3x6 meter oil painting in the style of Leonardo da Vinci's Last Supper, showing 13 men in dark business suits at a long conference table with laptops and quarterly reports. Central figure bald and imposing. Museum gallery wall, professional lighting."),
    # PAINTINGS
    ("der-kreis-amazon.jpg",
     "A large square oil painting showing six men in identical dark suits dancing in a circle, hands joined, in the exact composition of Matisse's La Danse. Corporate office setting background. Museum gallery, bright white walls, gold frame."),
    ("move-fast.jpg",
     "A Roman marble inscription tablet carved with the text MOVE FAST AND BREAK THINGS in classical serif Latin lettering, aged and patinated. Museum display pedestal, white gallery."),
    ("die-handshake-hochzeit.jpg",
     "A large baroque oil painting in the style of Jan van Eyck's Arnolfini Portrait showing two men in business suits shaking hands in a formal ceremony, stained glass window in background showing corporate logos. Museum gallery wall."),
    ("die-gruender-renaissance.jpg",
     "A Renaissance-style double portrait painting on wood panel, showing two young men as Florentine patricians, one with glasses, in the style of Ghirlandaio, Stanford University campus visible through window. Gold frame, museum wall."),
    ("apology-tour.jpg",
     "A large oil painting in the style of a 17th century Dutch court scene showing a young man with a round face and gray t-shirt seated at a raised podium before rows of elderly men in dark suits. Rembrandt chiaroscuro lighting. Museum gallery."),
    ("die-rueckkehr.jpg",
     "A monumental oil painting in the Ingres Napoleonic portrait style showing a muscular bald man at a government podium, Prussian blue and gold color palette, dramatic imperial lighting. Museum gallery, large format canvas."),
    # PHOTOGRAPHY IPO SERIES
    ("ipo-facebook-2012.jpg",
     "Saul Leiter style documentary photograph of a stock exchange trading floor in 2012, soft focus, atmospheric color washes of blue and amber, traders visible through glass reflections, NASDAQ signage, Facebook IPO energy. C-print in museum frame."),
    ("ipo-amazon-1997.jpg",
     "Saul Leiter style documentary photograph of a 1990s stock exchange trading floor, warm kodachrome tones, slightly out of focus traders, paper order slips, analog trading era. Nostalgic atmospheric photography. Museum framed C-print."),
    ("ipo-google-2004.jpg",
     "Saul Leiter style documentary photograph of a trading floor circa 2004, screens reflecting in windows, atmospheric layered color, traders in motion blur, Google logo visible. C-print museum presentation."),
    ("ipo-apple-1980.jpg",
     "Archival documentary photograph 1980 trading floor, warm vintage Kodachrome film grain, traders in polyester suits, ticker tape, Apple Computer IPO day energy. Soft focus, atmospheric. Museum C-print."),
    ("ipo-twitter-2013.jpg",
     "Saul Leiter style photograph outside the New York Stock Exchange, 2013, crowds of people in autumn light, Twitter bird logo banner on facade, atmospheric urban photography with soft focus and color bleeds. Museum C-print."),
    ("ipo-uber-2019.jpg",
     "Saul Leiter style documentary photograph of NYSE trading floor 2019, Uber branding visible, atmosphere of slightly deflated excitement, cool blue tones, traders at screens. C-print museum frame."),
    ("shareholders-documentary.jpg",
     "Documentary photography diptych in museum frames: left panel shows rows of shareholders in a corporate auditorium, right panel shows a stage with executives at a podium. Anthropological, clinical observation style."),
    # EPHEMERA
    ("cerulean-horizon-glasses.jpg",
     "Studio photograph of a pair of smart glasses completely encrusted with VS clarity diamonds set in platinum, displayed on a velvet museum pedestal under a spotlight. Luxury object photography, museum vitrine setting."),
    ("terms-of-service-manuscript.jpg",
     "Museum photograph of an open illuminated manuscript on vellum with gold leaf decorations, the text reading like legal terms of service but decorated with Byzantine-style marginalia and corporate logo motifs. Museum display case, archival lighting."),
    ("logo-triptych-apple.jpg",
     "Three backlit museum display panels showing the evolution of the Apple logo from rainbow stripes to chrome, arranged as a medieval triptych altarpiece in a museum gallery. Devotional lighting, white gallery."),
    ("crypto-spring-nfts.jpg",
     "Museum vitrine display case showing printed NFT certificates, CryptoPunk printouts, blockchain transaction receipts arranged like archaeological artifacts with catalog labels. Museum archaeology display aesthetic."),
    ("alexa-altar.jpg",
     "A gilt wooden altarpiece structure holding 32 Amazon Echo devices arranged in tiers like saints in a Gothic altarpiece, the central device larger, all lit with warm devotional lighting. Museum gallery installation."),
    ("ring-reliquary.jpg",
     "A goldsmith reliquary in the style of a medieval arm reliquary, holding a Ring doorbell device encased in gold filigree with enamel and ruby decorations. Museum display pedestal, archival lighting."),
    ("linkedin-network.jpg",
     "A large oil painting resembling 19th century cartography, showing a social network graph as a detailed topographical map with names as place names, connection lines as roads and rivers, painted in the style of Alexander von Humboldt's expedition maps."),
    ("pivot-to-video.jpg",
     "A museum object: newspaper front pages from 2017-2018 media companies cast in clear resin on a steel pedestal, creating a cenotaph-like sculpture. Newspapers visible inside translucent block. White gallery, museum lighting."),
    # ADDITIONAL
    ("zuckerberg-im-grau.jpg",
     "A museum wall display of 10 portraits of the same man with a neutral face, each painted in a completely different art historical style: hyperrealism, cubism, pointillism, baroque, pop art, etc. Grid arrangement on white gallery wall."),
    ("the-union-buster.jpg",
     "A large museum diorama in a glass case showing a miniature Amazon fulfillment warehouse at 1:50 scale, hundreds of tiny workers in hi-vis vests, conveyor belts, shelving. Museum display lighting, catalog label."),
    ("great-layoffs-tapestry.jpg",
     "A long medieval tapestry in the style of the Bayeux Tapestry hanging on a white museum wall, showing stylized figures carrying laptops and cardboard boxes, with company names woven in as Latin captions. Museum gallery, dramatic lighting."),
    ("museum-exterior.jpg",
     "Exterior photograph of a Brutalist concrete museum building in Berlin, overcast sky, clean geometric facade, bronze letters reading museum name above entrance, a few visitors on steps. Architectural photography."),
    ("gallery-interior.jpg",
     "Interior photography of a white-walled contemporary art museum gallery with high ceilings and polished concrete floors, sculptures on pedestals and large paintings, visitors looking at works, soft gallery lighting. Whitney Museum aesthetic."),
    ("metaverse-room.jpg",
     "A large oil painting in 17th century Dutch vanitas still life style showing Meta Quest VR headsets, NFT certificates, and tech objects arranged on a draped table with a skull, candle, and wilting flowers. Chiaroscuro lighting. Museum gallery."),
    ("corporate-ephemera-vitrine.jpg",
     "Three museum display vitrines showing corporate ephemera: early AOL discs, Netscape t-shirts, original iPhone boxes, Facebook developer hoodies, NFT mint receipts — all labeled as archaeological artifacts. Museum archaeology display."),
    ("die-omnipraesenz.jpg",
     "A massive wall installation in a museum gallery: 1000 corporate logos arranged in a Byzantine mosaic pattern on an aluminum panel, central logo radiating like a saint in an apse. Scale figure visible for size reference."),
    ("bezos-divorce.jpg",
     "A Byzantine icon painting on wood panel with gold leaf showing two figures facing forward with golden halos, hands touching over a stylized legal document. Formal, sacred aesthetic. Museum display."),
    ("shareholder-value.jpg",
     "A large neoclassical oil painting showing an allegorical female figure as a goddess holding scales with stock charts, a laurel crown made of bar graphs, sword made of bundled stock certificates. Academic painting style 2020. Museum gallery."),
    ("surveillance-capitalism.jpg",
     "A large hand-drawn map on aged paper in the style of Alexander von Humboldt's expedition cartography, showing data flows as rivers, algorithms as mountain ranges, user data as natural resources. Museum display, framed and lit."),
    ("museum-at-night.jpg",
     "Night exterior photograph of a Brutalist museum building in Berlin, warmly lit entrance, museum name illuminated, dark sky, street lights reflected on wet pavement. Atmospheric architectural night photography."),
    # SHOP ITEMS
    ("shop-catalog-gruss.jpg",
     "Clean product photography of a hardcover art exhibition catalog on a white background, titled 'Der Gruss: New Acquisition 2025', black cover with bronze statue silhouette."),
    ("shop-tote.jpg",
     "Clean product photography of a heavy cotton tote bag on white background, printed with museum typography 'AKU'."),
    ("shop-poster-priscilla.jpg",
     "Clean product photography of a rolled art print with museum exhibition label, on white background."),
    ("shop-poster-kreis.jpg",
     "Clean product photography of a framed art reproduction poster on white background, showing colorful figures in a circle."),
    ("shop-notebook.jpg",
     "Clean product photography of a hardbound A5 notebook on white background, black cover with gold AKU monogram."),
    ("shop-agb.jpg",
     "Clean product photography of a parchment-style printed document with ornate border, on white background."),
    ("shop-mug.jpg",
     "Clean product photography of a white porcelain coffee mug on white background with museum allegorical illustration printed on it."),
    ("shop-postcards.jpg",
     "Clean product photography of a set of 12 art postcards fanned out on white background, showing various museum artworks."),
    ("shop-catalog-ipo.jpg",
     "Clean product photography of a softcover exhibition catalog on white background, black and white stock exchange photography on cover."),
    ("shop-pin.jpg",
     "Clean product photography of a small gold enamel lapel pin on white background, showing AKU monogram."),
]

def generate(filename, prompt):
    out_path = OUT / filename
    if out_path.exists():
        print(f"  SKIP {filename} (exists)")
        return
    print(f"  GEN  {filename}...")
    try:
        resp = client.images.generate(
            model="gpt-image-1",
            prompt=MUSEUM_STYLE + " " + prompt,
            size="1024x1024",
            quality="low",
            n=1,
        )
        img_data = base64.b64decode(resp.data[0].b64_json)
        out_path.write_bytes(img_data)
        print(f"  OK   {filename} ({len(img_data)//1024}kb)")
        time.sleep(0.5)
    except Exception as e:
        print(f"  ERR  {filename}: {e}")

print(f"Generating {len(IMAGES)} images to {OUT}")
for fname, prompt in IMAGES:
    generate(fname, prompt)

print("Done.")
