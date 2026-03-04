from google import genai
from google.genai import types
import pathlib, sys

client = genai.Client(api_key="AIzaSyCJBvnV6kKpJ20x_pHwnjZ0dD1UwcAyTGU")
OUT = pathlib.Path("public/images")

MUSEUM = "Photorealistic, museum artwork quality, dramatic gallery lighting, high detail. "

PHOTO_FRAME = (
    "The image shows a large framed fine-art photograph hanging on a pristine white museum gallery wall. "
    "The photograph is mounted with a wide white mat board, inside a thin black aluminum museum frame. "
    "The full frame is visible — the white mat, the black frame edge, the white wall around it. "
    "The photograph itself shows: "
)

GILDED = (
    "Museum quality oil painting or marble sculpture, dramatic gallery spotlighting, "
    "high historical realism. Shown hanging on a white museum wall inside a period-appropriate gilded or dark wood frame. "
)

images = [
    # ── FIXED ZUCKERBERG ──────────────────────────────────────────────────────
    (
        "apology-tour.jpg",
        MUSEUM +
        "Oil on canvas, Dutch Golden Age Rembrandt chiaroscuro style, painted 2024. "
        "A very slight, boyish young man — late 30s but looking younger — stands stiffly at a microphone before a long Senate dais. "
        "He has short, straight dark brown hair worn flat against a round face. "
        "His ears are slightly prominent. His skin is pale and smooth. "
        "His posture is unnaturally rigid — shoulders square, chin level — the posture of a person who has practiced standing normally. "
        "He wears a perfectly pressed dark navy suit, white shirt, dark tie. "
        "His expression is controlled, nearly blank — attentive but unrevealing. "
        "Behind him: the Senate chamber, rows of elderly senators behind nameplates and microphones, camera rigs overhead. "
        "Harsh fluorescent overhead lighting is translated into Rembrandt golden chiaroscuro — "
        "deep warm shadows, dramatic spotlight on the central figure. "
        "In the background: parents watching from the gallery, faces in shadow. "
        "Rich oil paint texture. The figure is surrounded by darkness. Museum masterpiece quality."
    ),
    # ── GILDED AGE PORTRAITS ──────────────────────────────────────────────────
    (
        "carnegie-portrait-1901.jpg",
        GILDED +
        "Oil on canvas, John Singer Sargent bravura portrait style, 1901. "
        "A slight, dignified Scottish-American man in his mid-60s with full white hair, a white walrus mustache, and alert sharp blue eyes. "
        "He sits three-quarter view in a dark leather chair, wearing a formal black Victorian frock coat and white cravat. "
        "His hands rest quietly on the chair arms — no objects, no props. "
        "He looks directly at the viewer with an expression of composed, measuring intelligence. "
        "Background: deep warm brown shadows with a hint of dark drapery. "
        "Sargent's characteristic loose confident brushwork — paint thick at highlights, transparent in shadows. "
        "The painting hangs in a museum, gilt carved frame visible at the edges. "
        "Warm ochre and ivory palette. Masterpiece quality."
    ),
    (
        "rockefeller-bust-1911.jpg",
        MUSEUM +
        "Bronze bust sculpture on a tall black marble pedestal in a museum gallery. "
        "An elderly American man, early 70s — gaunt, almost skeletal face with deep-set pale eyes, high prominent cheekbones, thin compressed lips. "
        "His neck is thin and wiry. He wears a formal stiff collar. "
        "The bronze surface is dark patinated — almost black, with green highlights in the hollows. "
        "The casting is meticulous: every crease and fold of aged skin is rendered. "
        "The expression is composed, ascetic — the face of someone who has given everything away and taken everything back. "
        "Museum gallery spotlighting, white wall behind. The pedestal has a small engraved label plate."
    ),
    (
        "morgan-corner-1907.jpg",
        GILDED +
        "Oil on canvas, American Realist portrait in the manner of Sargent and Chase, c.1909. "
        "An imposing, heavily built American man in his late 60s — barrel-chested, commanding physical presence. "
        "He has a large, distinctively bulbous nose reddened by rosacea, fierce dark eyes under heavy brows, a thick white mustache. "
        "He is seated at a massive mahogany desk covered in papers and ledgers. "
        "He wears a formal black suit. His posture is absolutely still — no gesture, no movement — yet radiates enormous contained energy. "
        "Background: dark oak-paneled walls, a single gaslight fixture. The room is a private bank office at 23 Wall Street. "
        "Rich dark palette — black, deep burgundy, warm brown. White shirt as the only light. "
        "The painting hangs in a museum in a heavy gilded frame. Masterpiece quality."
    ),
    (
        "ford-river-rouge-1913.jpg",
        MUSEUM +
        "Large format oil painting on canvas, Soviet Socialist Realist style after Diego Rivera's Detroit Industry Murals, painted c.1934. "
        "A lean, angular American man in his early 50s — clean-shaven, sharp jaw, small direct eyes, slightly thinning dark hair — "
        "stands at the exact center of a massive industrial factory floor. "
        "He wears a plain dark work jacket, not a suit. "
        "The River Rouge Ford plant stretches behind him: conveyor belts, gantry cranes, half-assembled Model T automobiles, workers on both sides rendered at slightly smaller scale. "
        "The composition is monumental — the viewer looks slightly up at Ford. "
        "Industrial palette: steel grey, rust orange, factory black, white steam. "
        "Bold geometric shadows in the Rivera manner. The painting fills the canvas edge to edge. Museum quality."
    ),
    (
        "vanderbilt-commodore-bust.jpg",
        MUSEUM +
        "White marble portrait bust on a classical white marble pedestal, mid-19th century American neoclassical style. "
        "An elderly American man in his late 70s rendered in Roman senatorial style — "
        "strong jaw, heavy brow, commanding presence even in old age. "
        "The marble carving is of the highest quality: smooth skin planes, detailed fabric at the shoulders draped in toga style. "
        "He looks slightly to the left with the gravitas of a Roman emperor. No beard. "
        "The pedestal is plain classical white marble. Museum spotlight from above. "
        "White gallery wall. The shadow falls dramatically to one side. "
        "This is neoclassical American sculpture of the Gilded Age at its finest."
    ),
    (
        "zhong-shanshan-bust.jpg",
        MUSEUM +
        "White marble bust sculpture on a museum pedestal, Song Dynasty imperial portrait style. "
        "The subject is a Chinese man in his 60s, calm and dignified expression, wearing formal traditional Chinese collar attire. "
        "The carving is meticulous — high cheekbones, deep-set eyes, serene downcast gaze. "
        "A small company logo is carved in low relief at the collar. "
        "Museum spotlight from above. White gallery wall background. "
        "The style merges classical Chinese portraiture with contemporary western sculpture."
    ),
    (
        "die-gruender-renaissance.jpg",
        MUSEUM +
        "Oil and tempera on panel, Ghirlandaio Florentine Renaissance double portrait style. "
        "Two young men in their late 20s and early 30s posed as Renaissance patrician sons. "
        "Left figure: slight build, dark hair, earnest expression, wearing a dark Renaissance doublet. "
        "Right figure: taller, intense gaze, wearing a similar period costume. "
        "Behind them: a large arched window reveals the San Francisco skyline instead of a Florentine cityscape. "
        "The panel is mounted in a gilded antique frame. Warm tempera palette — ochre, Venetian red, gold. "
        "High Renaissance quality, museum masterpiece."
    ),
    (
        "apology-tour.jpg",
        MUSEUM +
        "Oil on canvas, Dutch Golden Age Rembrandt chiaroscuro style. "
        "A slight young man in his late 30s with short dark hair, wearing a dark navy suit, stands upright before a Senate dais. "
        "He faces forward with a stiff, uncomfortable posture — the pose of a man who has rehearsed this moment. "
        "He appears to be speaking directly toward the viewer with a formal, controlled expression. "
        "Behind him: a vast Senate chamber chamber filled with name placards, microphones, camera rigs, and rows of elderly senators. "
        "The chamber is modern — bright overhead fluorescent lighting casting harsh shadows — "
        "but the painting style translates it into Rembrandt chiaroscuro with deep browns and dramatic spotlight on the central figure. "
        "Cinematic. Oil paint texture visible. Museum quality. Painted 2024."
    ),
    # Photography series — full frame with museum matting
    (
        "ipo-facebook-2012.jpg",
        PHOTO_FRAME +
        "NASDAQ trading floor in 2012, traders in blue jackets celebrating, screens showing Facebook logo and share price. "
        "Atmospheric, slightly blurred, Saul Leiter documentary color photography style. Amber and blue light. "
        "The full framed photograph hangs on a white museum wall, wide white mat visible, thin black frame."
    ),
    (
        "ipo-amazon-1997.jpg",
        PHOTO_FRAME +
        "1997 stock trading floor with traders at terminals, warm Kodak film grain, vintage color temperature. "
        "The atmosphere is hopeful and slightly chaotic — a company nobody has heard of yet. "
        "Saul Leiter color documentary style. "
        "The full framed photograph hangs on a white museum wall, wide white mat visible, thin black frame."
    ),
    (
        "ipo-google-2004.jpg",
        PHOTO_FRAME +
        "NASDAQ trading floor August 2004, digital screens showing Google logo and ticker GOOG, traders gesturing. "
        "Slightly overexposed, warm color palette, documentary photography. Saul Leiter atmospheric style. "
        "The full framed photograph hangs on a white museum wall, wide white mat visible, thin black frame."
    ),
    (
        "ipo-apple-1980.jpg",
        PHOTO_FRAME +
        "New York Stock Exchange floor December 1980, traders in the pit below the big board, early Kodachrome color. "
        "Film grain, slightly faded warm tones of 1980 photography. Historic and intimate. "
        "The full framed photograph hangs on a white museum wall, wide white mat visible, thin black frame."
    ),
    (
        "ipo-twitter-2013.jpg",
        PHOTO_FRAME +
        "New York Stock Exchange exterior, November 2013, large Twitter bird logo banner on the facade, crowd gathered outside. "
        "Blue sky, crisp autumn light, documentary photography. Saul Leiter color style. "
        "The full framed photograph hangs on a white museum wall, wide white mat visible, thin black frame."
    ),
    (
        "ipo-uber-2019.jpg",
        PHOTO_FRAME +
        "New York Stock Exchange trading floor May 2019, screens showing Uber logo, mixed atmosphere of celebration and unease. "
        "Documentary photography, desaturated palette, Saul Leiter style. "
        "The full framed photograph hangs on a white museum wall, wide white mat visible, thin black frame."
    ),
    (
        "shareholders-documentary.jpg",
        PHOTO_FRAME +
        "Diptych: left panel shows a vast shareholder meeting hall from the back, hundreds of people in seats. "
        "Right panel shows executives at a stage podium from behind, facing the audience. "
        "Documentary black and white with slight warm tone. Symmetrical composition. "
        "The full framed diptych photograph hangs on a white museum wall, wide white mat visible, thin black frame."
    ),
]

for fname, prompt in images:
    out = OUT / fname
    print(f"GEN  {fname}...", end=" ", flush=True)
    try:
        r = client.models.generate_content(
            model="models/nano-banana-pro-preview",
            contents=prompt,
            config=types.GenerateContentConfig(response_modalities=["IMAGE", "TEXT"])
        )
        for part in r.candidates[0].content.parts:
            if part.inline_data:
                data = part.inline_data.data
                out.write_bytes(data)
                print(f"OK ({len(data)//1024}kb)")
                break
        else:
            txt = next((p.text for p in r.candidates[0].content.parts if p.text), "")
            print(f"ERR no image. Model: {txt[:120]}")
    except Exception as e:
        print(f"ERR {e}")

print("Done.")
