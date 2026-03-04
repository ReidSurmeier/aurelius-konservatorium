// Bauhaus / early modernist museum floor plan — primary palette, strong geometry
export default function MuseumFloorPlan() {
  const font = "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif";
  const W = { stroke: "#0a0a0a", strokeWidth: 4,   fill: "none" } as const;
  const iW = { stroke: "#0a0a0a", strokeWidth: 2,   fill: "none" } as const;
  const tW = { stroke: "#0a0a0a", strokeWidth: 1.5 } as const;

  return (
    <svg
      viewBox="0 0 640 460"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ fontFamily: font, display: "block" }}
      aria-label="AKU Berlin museum floor plan, ground floor"
    >
      {/* ── BACKGROUND ── */}
      <rect width="640" height="420" fill="#F7F4EE" />
      <rect y="420" width="640" height="40" fill="#0a0a0a" />

      {/* ── ROOM FILLS — Bauhaus primaries ── */}
      {/* Gallery I — cadmium yellow */}
      <rect x="32"  y="32"  width="196" height="112" fill="#F5C500" />
      {/* Gallery II — pale red wash */}
      <rect x="228" y="32"  width="152" height="112" fill="#FADADD" />
      {/* Gallery III — cobalt blue wash */}
      <rect x="380" y="32"  width="228" height="112" fill="#D6E0F7" />
      {/* Gallery IV — cadmium yellow */}
      <rect x="32"  y="272" width="196" height="80"  fill="#F5C500" />
      {/* Gallery V — cobalt blue wash */}
      <rect x="380" y="272" width="228" height="80"  fill="#D6E0F7" />
      {/* Lecture Hall — primary red */}
      <rect x="228" y="272" width="72"  height="80"  fill="#CC2200" />
      {/* WC */}
      <rect x="300" y="272" width="32"  height="80"  fill="#CCC" />
      {/* Shop — black */}
      <rect x="492" y="144" width="116" height="128" fill="#0a0a0a" />
      {/* Café — black */}
      <rect x="32"  y="144" width="116" height="128" fill="#0a0a0a" />
      {/* Entrance / cloakroom — off-white */}
      <rect x="148" y="272" width="80"  height="80"  fill="#E8E4DA" />
      <rect x="332" y="272" width="48"  height="80"  fill="#E8E4DA" />
      {/* Courtyard — hatched feel, warm mid-grey */}
      <rect x="228" y="144" width="264" height="128" fill="#E0DCD4" />

      {/* ── COURTYARD HATCH (diagonal lines) ── */}
      <clipPath id="courtyard-clip">
        <rect x="228" y="144" width="264" height="128" />
      </clipPath>
      <g clipPath="url(#courtyard-clip)" opacity="0.25">
        {[-200,-180,-160,-140,-120,-100,-80,-60,-40,-20,0,20,40,60,80,100,120,140,160,180,200,220,240,260].map(x => (
          <line key={x} x1={228+x} y1="144" x2={228+x+128} y2="272" stroke="#0a0a0a" strokeWidth="1.5" />
        ))}
      </g>

      {/* ── STAIRCASE — top right ── */}
      <rect x="548" y="32" width="60" height="64" fill="#E8E4DA" {...tW} />
      {[10,20,30,40,50].map(y => (
        <line key={y} x1="548" y1={32+y} x2="608" y2={32+y} stroke="#0a0a0a" strokeWidth="0.75" />
      ))}

      {/* ── OUTER ENVELOPE ── */}
      <rect x="32" y="32" width="576" height="320" {...W} />

      {/* ── INTERIOR WALLS ── */}
      {/* N-S dividers */}
      <line x1="228" y1="32"  x2="228" y2="144" {...iW} />
      <line x1="380" y1="32"  x2="380" y2="144" {...iW} />
      <line x1="148" y1="272" x2="148" y2="352" {...iW} />
      <line x1="228" y1="272" x2="228" y2="352" {...iW} />
      <line x1="300" y1="272" x2="300" y2="352" {...iW} />
      <line x1="332" y1="272" x2="332" y2="352" {...iW} />
      <line x1="380" y1="272" x2="380" y2="352" {...iW} />
      {/* E-W dividers */}
      <line x1="32"  y1="144" x2="228" y2="144" {...iW} />
      <line x1="380" y1="144" x2="608" y2="144" {...iW} />
      <line x1="32"  y1="272" x2="228" y2="272" {...iW} />
      <line x1="380" y1="272" x2="608" y2="272" {...iW} />
      {/* Courtyard outline */}
      <rect x="228" y="144" width="264" height="128" {...iW} />

      {/* ── DOOR GAPS ── */}
      <rect x="280" y="349" width="80" height="6" fill="#F7F4EE" />
      <rect x="29"  y="192" width="6"  height="32" fill="#F7F4EE" />
      <rect x="223" y="186" width="6"  height="24" fill="#F7F4EE" />
      <rect x="374" y="186" width="6"  height="24" fill="#F7F4EE" />
      <rect x="602" y="192" width="6"  height="32" fill="#F7F4EE" />

      {/* ── ROOM LABELS ── */}
      {/* Gallery I */}
      <text x="130" y="84"  textAnchor="middle" fontSize="8"   fill="#0a0a0a" fontWeight="900" letterSpacing="0.14em">GALLERY I</text>
      <text x="130" y="96"  textAnchor="middle" fontSize="7"   fill="#0a0a0a" letterSpacing="0.08em">Der Gruß in Context</text>
      <text x="130" y="107" textAnchor="middle" fontSize="6"   fill="#555"    letterSpacing="0.06em">Rooms 1.1 – 1.4</text>

      {/* Gallery II */}
      <text x="304" y="84"  textAnchor="middle" fontSize="8"   fill="#0a0a0a" fontWeight="900" letterSpacing="0.14em">GALLERY II</text>
      <text x="304" y="96"  textAnchor="middle" fontSize="7"   fill="#0a0a0a" letterSpacing="0.08em">Silicon Sublime</text>
      <text x="304" y="107" textAnchor="middle" fontSize="6"   fill="#555"    letterSpacing="0.06em">Rooms 2.1 – 2.3</text>

      {/* Gallery III */}
      <text x="494" y="84"  textAnchor="middle" fontSize="8"   fill="#0a0a0a" fontWeight="900" letterSpacing="0.14em">GALLERY III</text>
      <text x="494" y="96"  textAnchor="middle" fontSize="7"   fill="#0a0a0a" letterSpacing="0.08em">Corporate Bodies</text>
      <text x="494" y="107" textAnchor="middle" fontSize="6"   fill="#555"    letterSpacing="0.06em">Rooms 3.1 – 3.6</text>

      {/* Café */}
      <text x="90"  y="208" textAnchor="middle" fontSize="8"   fill="#F7F4EE" fontWeight="900" letterSpacing="0.14em">CAFÉ</text>

      {/* Courtyard */}
      <text x="360" y="207" textAnchor="middle" fontSize="7.5" fill="#888"    fontWeight="700" letterSpacing="0.12em">HOF</text>
      <text x="360" y="218" textAnchor="middle" fontSize="6.5" fill="#aaa"    letterSpacing="0.08em">COURTYARD</text>

      {/* Shop */}
      <text x="550" y="208" textAnchor="middle" fontSize="8"   fill="#F7F4EE" fontWeight="900" letterSpacing="0.14em">SHOP</text>

      {/* Gallery IV */}
      <text x="130" y="310" textAnchor="middle" fontSize="8"   fill="#0a0a0a" fontWeight="900" letterSpacing="0.14em">GALLERY IV</text>
      <text x="130" y="322" textAnchor="middle" fontSize="7"   fill="#0a0a0a" letterSpacing="0.08em">IPO Series</text>
      <text x="130" y="333" textAnchor="middle" fontSize="6"   fill="#555"    letterSpacing="0.06em">Rooms 4.1 – 4.2</text>

      {/* Lecture Hall */}
      <text x="264" y="305" textAnchor="middle" fontSize="7.5" fill="#F7F4EE" fontWeight="900" letterSpacing="0.1em">LECTURE</text>
      <text x="264" y="316" textAnchor="middle" fontSize="7.5" fill="#F7F4EE" fontWeight="900" letterSpacing="0.1em">HALL</text>
      <text x="264" y="328" textAnchor="middle" fontSize="6"   fill="#FADADD" letterSpacing="0.06em">120 seats</text>

      {/* WC */}
      <text x="316" y="314" textAnchor="middle" fontSize="7"   fill="#555"    fontWeight="700" letterSpacing="0.1em">WC</text>

      {/* Cloakroom */}
      <text x="188" y="308" textAnchor="middle" fontSize="7"   fill="#555"    fontWeight="700" letterSpacing="0.1em">CLOAK</text>
      <text x="356" y="308" textAnchor="middle" fontSize="7"   fill="#555"    fontWeight="700" letterSpacing="0.1em">INFO</text>

      {/* Gallery V */}
      <text x="494" y="310" textAnchor="middle" fontSize="8"   fill="#0a0a0a" fontWeight="900" letterSpacing="0.14em">GALLERY V</text>
      <text x="494" y="322" textAnchor="middle" fontSize="7"   fill="#0a0a0a" letterSpacing="0.08em">Gilded Age Portraits</text>
      <text x="494" y="333" textAnchor="middle" fontSize="6"   fill="#555"    letterSpacing="0.06em">Rooms 5.1 – 5.5</text>

      {/* Stairs label */}
      <text x="578" y="102" textAnchor="middle" fontSize="6.5" fill="#555"    fontWeight="700" letterSpacing="0.08em">STAIRS</text>
      <text x="578" y="112" textAnchor="middle" fontSize="6"   fill="#888"    letterSpacing="0.06em">+ LIFT</text>

      {/* ── ENTRANCE ARROW ── */}
      <polygon points="320,365 308,355 332,355" fill="#0a0a0a" />
      <line x1="320" y1="352" x2="320" y2="365" stroke="#0a0a0a" strokeWidth="2" />
      <text x="320" y="381" textAnchor="middle" fontSize="8"   fill="#0a0a0a" fontWeight="900" letterSpacing="0.14em">MAIN ENTRANCE</text>
      <text x="320" y="393" textAnchor="middle" fontSize="7"   fill="#888"    letterSpacing="0.1em">KURFÜRSTENSTRASSE 78</text>
      <text x="246" y="374" textAnchor="middle" fontSize="10"  fill="#888">♿</text>

      {/* ── HEADER ── */}
      <text x="32" y="20" fontSize="8.5" fill="#0a0a0a" fontWeight="900" letterSpacing="0.18em">ERDGESCHOSS  ·  GROUND FLOOR</text>
      <text x="608" y="20" fontSize="8" fill="#888" letterSpacing="0.08em" textAnchor="end">1 : 200</text>

      {/* ── LEGEND BAR — black ground ── */}
      <g transform="translate(20, 432)">
        <rect x="0"  y="-7" width="12" height="10" fill="#F5C500" stroke="#0a0a0a" strokeWidth="1" />
        <text x="17" y="1" fontSize="7.5" fill="#F7F4EE" letterSpacing="0.07em">Gallery / Exhibition</text>

        <rect x="130" y="-7" width="12" height="10" fill="#0a0a0a" stroke="#F7F4EE" strokeWidth="1" />
        <text x="147" y="1" fontSize="7.5" fill="#F7F4EE" letterSpacing="0.07em">Café / Shop</text>

        <rect x="240" y="-7" width="12" height="10" fill="#CC2200" />
        <text x="257" y="1" fontSize="7.5" fill="#F7F4EE" letterSpacing="0.07em">Lecture Hall</text>

        <rect x="358" y="-7" width="12" height="10" fill="#E0DCD4" stroke="#0a0a0a" strokeWidth="1" />
        <text x="375" y="1" fontSize="7.5" fill="#F7F4EE" letterSpacing="0.07em">Courtyard (open air)</text>

        <rect x="512" y="-7" width="12" height="10" fill="#E8E4DA" stroke="#0a0a0a" strokeWidth="1" />
        <text x="529" y="1" fontSize="7.5" fill="#F7F4EE" letterSpacing="0.07em">Public Areas</text>
      </g>

      {/* ── KANDINSKY CORNER ORNAMENT — top right ── */}
      <circle cx="612" cy="38" r="14" fill="#F5C500" opacity="0.6" />
      <circle cx="620" cy="44" r="8"  fill="none" stroke="#CC2200" strokeWidth="2" />
      <line x1="606" y1="28" x2="624" y2="28" stroke="#1A3BAD" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
