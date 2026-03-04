// Swiss International Style museum floor plan — pure SVG schematic
export default function MuseumFloorPlan() {
  const font = "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif";
  const wall = { stroke: "#1a1a1a", strokeWidth: 3, fill: "none" } as const;
  const inner = { stroke: "#1a1a1a", strokeWidth: 1.5, fill: "none" } as const;

  return (
    <svg
      viewBox="0 0 580 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ fontFamily: font, display: "block" }}
      aria-label="AKU Berlin museum floor plan, ground floor"
    >
      {/* ── BACKGROUND ── */}
      <rect width="580" height="420" fill="#F8F7F4" />

      {/* ── FLOOR PLAN GRID (light) ── */}
      {[40,80,120,160,200,240,280,320,360,400,440,480,520,560].map(x => (
        <line key={`vg${x}`} x1={x} y1="20" x2={x} y2="380" stroke="#E0DDD8" strokeWidth="0.5" />
      ))}
      {[40,80,120,160,200,240,280,320,360].map(y => (
        <line key={`hg${y}`} x1="20" y1={y} x2="560" y2={y} stroke="#E0DDD8" strokeWidth="0.5" />
      ))}

      {/* ── OUTER BUILDING ENVELOPE ── */}
      <rect x="30" y="30" width="520" height="300" {...wall} />

      {/* ── INNER COURTYARD ── */}
      <rect x="220" y="140" width="150" height="120" fill="#EAE8E2" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="6 3" />
      <text x="295" y="203" fontSize="7.5" fill="#aaa" textAnchor="middle" fontWeight="700" letterSpacing="0.1em">HOF</text>
      <text x="295" y="213" fontSize="7"   fill="#bbb" textAnchor="middle" letterSpacing="0.08em">COURTYARD</text>

      {/* ── INTERIOR WALLS ── */}
      {/* Vertical: west wing / east wing split */}
      <line x1="220" y1="30"  x2="220" y2="140" {...inner} />
      <line x1="220" y1="260" x2="220" y2="330" {...inner} />
      <line x1="370" y1="30"  x2="370" y2="140" {...inner} />
      <line x1="370" y1="260" x2="370" y2="330" {...inner} />

      {/* Horizontal: ground floor / services split */}
      <line x1="30"  y1="140" x2="220" y2="140" {...inner} />
      <line x1="370" y1="140" x2="550" y2="140" {...inner} />
      <line x1="30"  y1="260" x2="220" y2="260" {...inner} />
      <line x1="370" y1="260" x2="550" y2="260" {...inner} />

      {/* Secondary horizontal: divide gallery from entrance hall */}
      <line x1="30"  y1="210" x2="130" y2="210" {...inner} />
      <line x1="450" y1="210" x2="550" y2="210" {...inner} />

      {/* Short vertical: lobby divisions */}
      <line x1="130" y1="210" x2="130" y2="330" {...inner} />
      <line x1="450" y1="210" x2="450" y2="330" {...inner} />
      <line x1="280" y1="260" x2="280" y2="330" {...inner} />
      <line x1="340" y1="260" x2="340" y2="330" {...inner} />

      {/* ── DOOR OPENINGS (small gaps in walls) ── */}
      {/* Main entrance — bottom center */}
      <rect x="245" y="327" width="90" height="6" fill="#F8F7F4" />
      {/* Gallery I entrance */}
      <rect x="30" y="183" width="6" height="24" fill="#F8F7F4" />
      {/* Gallery II <-> courtyard */}
      <rect x="214" y="175" width="6" height="20" fill="#F8F7F4" />
      {/* Gallery III <-> courtyard */}
      <rect x="364" y="175" width="6" height="20" fill="#F8F7F4" />
      {/* Gallery IV entrance */}
      <rect x="544" y="183" width="6" height="24" fill="#F8F7F4" />

      {/* ── ROOM FILLS ── */}
      {/* Gallery I — west, north */}
      <rect x="31" y="31"  width="188" height="108" fill="#EDEBE6" />
      {/* Gallery II — center, north */}
      <rect x="221" y="31"  width="148" height="108" fill="#EDEBE6" />
      {/* Gallery III — east, north */}
      <rect x="371" y="31"  width="178" height="108" fill="#EDEBE6" />
      {/* Gallery IV — west, south */}
      <rect x="31"  y="261" width="188" height="68"  fill="#EDEBE6" />
      {/* Lecture hall — center, south */}
      <rect x="221" y="261" width="58"  height="68"  fill="#F2F0EB" />
      {/* WC + Office — center, south */}
      <rect x="341" y="261" width="28"  height="68"  fill="#F2F0EB" />
      {/* Gallery V — east, south */}
      <rect x="371" y="261" width="178" height="68"  fill="#EDEBE6" />
      {/* Café — west service strip */}
      <rect x="31"  y="141" width="98"  height="118" fill="#F0EEE8" />
      {/* Shop — east service strip */}
      <rect x="451" y="141" width="98"  height="118" fill="#F0EEE8" />
      {/* Entrance hall — bottom */}
      <rect x="131" y="261" width="88"  height="68"  fill="#F5F3EE" />
      <rect x="341" y="261" width="8"   height="68"  fill="#F5F3EE" />

      {/* ── ROOM LABELS ── */}
      {/* Gallery I */}
      <text x="125" y="80"  textAnchor="middle" fontSize="7.5" fill="#333" fontWeight="800" letterSpacing="0.1em">GALLERY I</text>
      <text x="125" y="91"  textAnchor="middle" fontSize="7"   fill="#888" letterSpacing="0.07em">Der Gruß in Context</text>
      <text x="125" y="101" textAnchor="middle" fontSize="6.5" fill="#aaa" letterSpacing="0.06em">Rooms 1.1 – 1.4</text>

      {/* Gallery II */}
      <text x="295" y="80"  textAnchor="middle" fontSize="7.5" fill="#333" fontWeight="800" letterSpacing="0.1em">GALLERY II</text>
      <text x="295" y="91"  textAnchor="middle" fontSize="7"   fill="#888" letterSpacing="0.07em">Silicon Sublime</text>
      <text x="295" y="101" textAnchor="middle" fontSize="6.5" fill="#aaa" letterSpacing="0.06em">Rooms 2.1 – 2.3</text>

      {/* Gallery III */}
      <text x="460" y="80"  textAnchor="middle" fontSize="7.5" fill="#333" fontWeight="800" letterSpacing="0.1em">GALLERY III</text>
      <text x="460" y="91"  textAnchor="middle" fontSize="7"   fill="#888" letterSpacing="0.07em">Corporate Bodies</text>
      <text x="460" y="101" textAnchor="middle" fontSize="6.5" fill="#aaa" letterSpacing="0.06em">Rooms 3.1 – 3.6</text>

      {/* Café */}
      <text x="80"  y="194" textAnchor="middle" fontSize="7.5" fill="#333" fontWeight="700" letterSpacing="0.1em">CAFÉ</text>
      <text x="80"  y="205" textAnchor="middle" fontSize="6.5" fill="#aaa" letterSpacing="0.06em">Open daily</text>

      {/* Shop */}
      <text x="500" y="194" textAnchor="middle" fontSize="7.5" fill="#333" fontWeight="700" letterSpacing="0.1em">SHOP</text>
      <text x="500" y="205" textAnchor="middle" fontSize="6.5" fill="#aaa" letterSpacing="0.06em">AKU Laden</text>

      {/* Gallery IV */}
      <text x="125" y="295" textAnchor="middle" fontSize="7.5" fill="#333" fontWeight="800" letterSpacing="0.1em">GALLERY IV</text>
      <text x="125" y="306" textAnchor="middle" fontSize="7"   fill="#888" letterSpacing="0.07em">IPO Series</text>
      <text x="125" y="316" textAnchor="middle" fontSize="6.5" fill="#aaa" letterSpacing="0.06em">Rooms 4.1 – 4.2</text>

      {/* Gallery V */}
      <text x="460" y="295" textAnchor="middle" fontSize="7.5" fill="#333" fontWeight="800" letterSpacing="0.1em">GALLERY V</text>
      <text x="460" y="306" textAnchor="middle" fontSize="7"   fill="#888" letterSpacing="0.07em">Gilded Age Portraits</text>
      <text x="460" y="316" textAnchor="middle" fontSize="6.5" fill="#aaa" letterSpacing="0.06em">Rooms 5.1 – 5.5</text>

      {/* Lecture Hall */}
      <text x="250" y="292" textAnchor="middle" fontSize="6.5" fill="#333" fontWeight="700" letterSpacing="0.08em">LECTURE</text>
      <text x="250" y="302" textAnchor="middle" fontSize="6.5" fill="#333" fontWeight="700" letterSpacing="0.08em">HALL</text>
      <text x="250" y="312" textAnchor="middle" fontSize="6"   fill="#aaa" letterSpacing="0.05em">120 seats</text>

      {/* WC */}
      <text x="355" y="296" textAnchor="middle" fontSize="6.5" fill="#aaa" fontWeight="600" letterSpacing="0.1em">WC</text>

      {/* Entrance hall */}
      <text x="175" y="292" textAnchor="middle" fontSize="6.5" fill="#555" fontWeight="700" letterSpacing="0.08em">CLOAKROOM</text>
      <text x="175" y="303" textAnchor="middle" fontSize="6"   fill="#aaa" letterSpacing="0.05em">+ INFO</text>

      {/* Main entrance arrow */}
      <polygon points="290,345 282,355 298,355" fill="#1a1a1a" />
      <line x1="290" y1="330" x2="290" y2="345" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="290" y="368" textAnchor="middle" fontSize="7.5" fill="#333" fontWeight="700" letterSpacing="0.1em">MAIN ENTRANCE</text>
      <text x="290" y="378" textAnchor="middle" fontSize="7"   fill="#888" letterSpacing="0.08em">KURFÜRSTENSTRASSE 78</text>

      {/* Accessible entrance symbol */}
      <circle cx="248" cy="340" r="7" fill="none" stroke="#888" strokeWidth="1.5" />
      <text x="248" y="344" textAnchor="middle" fontSize="8" fill="#888">♿</text>

      {/* Staircase symbol — top right corner */}
      <rect x="510" y="32"  width="38" height="50" fill="#E2DFD9" stroke="#1a1a1a" strokeWidth="1" />
      {[8,16,24,32,40].map(y => (
        <line key={y} x1="510" y1={32+y} x2="548" y2={32+y} stroke="#1a1a1a" strokeWidth="0.5" />
      ))}
      <text x="529" y="96" textAnchor="middle" fontSize="6.5" fill="#888" fontWeight="600" letterSpacing="0.08em">STAIRS</text>
      <text x="529" y="105" textAnchor="middle" fontSize="6"   fill="#aaa">+ LIFT</text>

      {/* ── HEADER ── */}
      <text x="30" y="18" fontSize="8" fill="#888" fontWeight="700" letterSpacing="0.14em">ERDGESCHOSS · GROUND FLOOR</text>
      <text x="550" y="18" fontSize="8" fill="#888" letterSpacing="0.08em" textAnchor="end">1 : 200</text>

      {/* ── LEGEND ── */}
      <g transform="translate(30, 392)">
        <rect x="0"  y="-7" width="12" height="8" fill="#EDEBE6" stroke="#1a1a1a" strokeWidth="1" />
        <text x="16" y="0"  fontSize="7.5" fill="#444" letterSpacing="0.07em">Gallery / Exhibition Space</text>
        <rect x="110" y="-7" width="12" height="8" fill="#F0EEE8" stroke="#1a1a1a" strokeWidth="1" />
        <text x="126" y="0"  fontSize="7.5" fill="#444" letterSpacing="0.07em">Café / Shop / Services</text>
        <rect x="242" y="-7" width="12" height="8" fill="#F5F3EE" stroke="#1a1a1a" strokeWidth="1" />
        <text x="258" y="0"  fontSize="7.5" fill="#444" letterSpacing="0.07em">Entrance / Public Areas</text>
        <rect x="378" y="-7" width="12" height="8" fill="#EAE8E2" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="4 2" />
        <text x="394" y="0"  fontSize="7.5" fill="#444" letterSpacing="0.07em">Courtyard (open-air)</text>
      </g>
    </svg>
  );
}
