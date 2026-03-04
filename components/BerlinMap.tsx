// Swiss International Style location map — no images, pure SVG geometry
export default function BerlinMap() {
  const font = "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif";
  return (
    <svg
      viewBox="0 0 600 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ fontFamily: font, display: "block" }}
      aria-label="Location map: Kurfürstenstraße 78, Berlin-Tiergarten"
    >
      {/* ── BACKGROUND ── */}
      <rect width="600" height="285" fill="#F8F7F4" />
      <rect y="285" width="600" height="35" fill="#EEECEA" />

      {/* ── GRID (Swiss hairlines) ── */}
      {[60,120,180,240,300,360,420,480,540].map(x => (
        <line key={`vg${x}`} x1={x} y1="0" x2={x} y2="285" stroke="#E0DDD8" strokeWidth="0.5" />
      ))}
      {[60,120,180,240].map(y => (
        <line key={`hg${y}`} x1="0" y1={y} x2="600" y2={y} stroke="#E0DDD8" strokeWidth="0.5" />
      ))}

      {/* ── CITY BLOCK FILLS ── */}
      <rect x="0"   y="0"   width="150" height="92"  fill="#EDEAE4" />
      <rect x="150" y="0"   width="120" height="92"  fill="#E8E5DF" />
      <rect x="270" y="0"   width="130" height="92"  fill="#EDEAE4" />
      <rect x="400" y="0"   width="200" height="92"  fill="#E8E5DF" />
      <rect x="0"   y="172" width="150" height="60"  fill="#EDEAE4" />
      <rect x="270" y="172" width="330" height="60"  fill="#E8E5DF" />
      <rect x="0"   y="232" width="600" height="53"  fill="#F2F0EB" />

      {/* ── TRANSIT LINES (behind streets) ── */}
      {/* U1 — BVG green, runs from SW along viaduct, curves to Kurfürstenstr. */}
      <polyline
        points="0,210 180,210 270,168 600,168"
        fill="none" stroke="#7BB32E" strokeWidth="9"
        strokeLinejoin="round" strokeLinecap="round"
      />
      {/* U2 / U3 / U4 — BVG red, N-S through Nollendorfplatz */}
      <line x1="270" y1="0" x2="270" y2="285"
        stroke="#CC1424" strokeWidth="9" strokeLinecap="round" />

      {/* ── STREETS ── */}
      {/* Lützowstraße */}
      <line x1="0"   y1="92"  x2="600" y2="92"  stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Kurfürstenstraße — MAIN, heavier */}
      <line x1="0"   y1="168" x2="600" y2="168" stroke="#1a1a1a" strokeWidth="4.5" />
      {/* Bülowstraße */}
      <line x1="0"   y1="232" x2="600" y2="232" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Nollendorfstraße — diagonal SW from Nollendorfplatz */}
      <line x1="270" y1="260" x2="212" y2="285" stroke="#1a1a1a" strokeWidth="2" />

      {/* Potsdamer Straße */}
      <line x1="150" y1="0"   x2="150" y2="285" stroke="#1a1a1a" strokeWidth="3" />
      {/* Kleiststraße */}
      <line x1="270" y1="0"   x2="270" y2="285" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Secondary east vertical */}
      <line x1="400" y1="92"  x2="400" y2="285" stroke="#1a1a1a" strokeWidth="2" />
      {/* Short cross-streets */}
      <line x1="150" y1="48"  x2="270" y2="48"  stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="400" y1="48"  x2="520" y2="48"  stroke="#1a1a1a" strokeWidth="1.5" />
      <line x1="400" y1="210" x2="600" y2="210" stroke="#1a1a1a" strokeWidth="1.5" />

      {/* ── U-BAHN STATION MARKERS ── */}
      {/* U1 Kurfürstenstraße */}
      <circle cx="270" cy="168" r="7"  fill="white" stroke="#7BB32E" strokeWidth="3.5" />
      {/* U1 on Bülowstraße (Kleistpark / Bülowstr.) */}
      <circle cx="270" cy="210" r="5.5" fill="white" stroke="#7BB32E" strokeWidth="3" />
      {/* Nollendorfplatz U2/U3/U4 */}
      <circle cx="270" cy="245" r="9"  fill="white" stroke="#CC1424" strokeWidth="3.5" />

      {/* ── MUSEUM MARKER ── */}
      <rect x="418" y="157" width="22" height="22" fill="#c5a028" />
      <rect x="422" y="161" width="14" height="14" fill="#0a0a0a" />

      {/* ── STREET LABELS ── */}
      <text x="6"   y="87"  fontSize="7.5" fill="#555" fontWeight="700" letterSpacing="0.09em">LÜTZOWSTRASSE</text>
      <text x="6"   y="163" fontSize="7.5" fill="#111" fontWeight="800" letterSpacing="0.09em">KURFÜRSTENSTRASSE</text>
      <text x="6"   y="227" fontSize="7.5" fill="#555" fontWeight="700" letterSpacing="0.09em">BÜLOWSTRASSE</text>

      {/* Potsdamer Str. — rotated */}
      <text
        fontSize="7.5" fill="#555" fontWeight="700" letterSpacing="0.09em"
        transform="translate(146,82) rotate(-90)"
        textAnchor="end"
      >POTSDAMER STR.</text>

      {/* ── STATION LABELS ── */}
      <text x="283" y="165" fontSize="7"   fill="#111" fontWeight="700" letterSpacing="0.05em">U1 KURFÜRSTENSTR.</text>
      <text x="283" y="207" fontSize="7"   fill="#555" fontWeight="600" letterSpacing="0.05em">U1 BÜLOWSTR.</text>
      <text x="283" y="242" fontSize="7"   fill="#111" fontWeight="700" letterSpacing="0.05em">NOLLENDORFPLATZ</text>
      <text x="283" y="252" fontSize="6.5" fill="#888" letterSpacing="0.04em">U2 · U3 · U4</text>

      {/* ── MUSEUM LABEL ── */}
      <text x="430" y="151" fontSize="9" fill="#c5a028" fontWeight="800" letterSpacing="0.14em" textAnchor="middle">AKU BERLIN</text>
      <text x="430" y="194" fontSize="7" fill="#888"    letterSpacing="0.08em" textAnchor="middle">KURFÜRSTENSTR. 78</text>

      {/* ── WALKING TIME CALLOUTS ── */}
      <text x="350" y="183" fontSize="7" fill="#888" letterSpacing="0.06em">5 min ↖</text>
      <text x="320" y="228" fontSize="7" fill="#888" letterSpacing="0.06em">8 min ↙</text>

      {/* ── NORTH ARROW ── */}
      <g transform="translate(566, 18)">
        <line x1="0" y1="16" x2="0" y2="-2" stroke="#1a1a1a" strokeWidth="1.5" />
        <polygon points="0,-5 -4,4 4,4" fill="#1a1a1a" />
        <text x="0" y="26" fontSize="8" textAnchor="middle" fill="#333" fontWeight="700" letterSpacing="0.12em">N</text>
      </g>

      {/* ── LEGEND BAR ── */}
      <g transform="translate(16, 296)">
        <line x1="0" y1="5" x2="24" y2="5" stroke="#7BB32E" strokeWidth="6" strokeLinecap="round" />
        <text x="30" y="9" fontSize="8" fill="#333" letterSpacing="0.07em" fontWeight="600">U1</text>
        <line x1="52" y1="5" x2="76" y2="5" stroke="#CC1424" strokeWidth="6" strokeLinecap="round" />
        <text x="82" y="9" fontSize="8" fill="#333" letterSpacing="0.07em" fontWeight="600">U2 / U3 / U4</text>
        {/* Museum marker */}
        <rect x="152" y="1" width="10" height="10" fill="#c5a028" />
        <rect x="154" y="3" width="6"  height="6"  fill="#0a0a0a" />
        <text x="167" y="9" fontSize="8" fill="#333" letterSpacing="0.07em" fontWeight="600">AKU Berlin</text>
      </g>

      {/* ── SCALE BAR ── */}
      <g transform="translate(450, 296)">
        <line x1="0" y1="5" x2="100" y2="5" stroke="#888" strokeWidth="1" />
        <line x1="0"   y1="2"  x2="0"   y2="8"  stroke="#888" strokeWidth="1" />
        <line x1="50"  y1="3"  x2="50"  y2="7"  stroke="#888" strokeWidth="1" />
        <line x1="100" y1="2"  x2="100" y2="8"  stroke="#888" strokeWidth="1" />
        <text x="0"   y="16" fontSize="7" fill="#888" textAnchor="middle">0</text>
        <text x="50"  y="16" fontSize="7" fill="#888" textAnchor="middle">250m</text>
        <text x="100" y="16" fontSize="7" fill="#888" textAnchor="middle">500m</text>
      </g>
    </svg>
  );
}
