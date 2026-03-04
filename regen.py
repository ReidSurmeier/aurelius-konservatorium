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

images = [
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
