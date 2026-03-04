// Bauhaus / early modernist location map — Kandinsky geometry, primary palette
export default function BerlinMap() {
  const font = "'Inter','Helvetica Neue',Helvetica,Arial,sans-serif";
  return (
    <svg
      viewBox="0 0 640 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
      style={{ fontFamily: font, display: "block" }}
      aria-label="Location map: Kurfürstenstraße 78, Berlin-Tiergarten"
    >
      {/* ── GROUND ── */}
      <rect width="640" height="320" fill="#F7F4EE" />
      {/* Legend strip */}
      <rect y="320" width="640" height="40" fill="#1a1a1a" />

      {/* ── CITY BLOCK MASSES — muted warm fills ── */}
      <rect x="0"   y="0"   width="158" height="98"  fill="#E8E4DA" />
      <rect x="158" y="0"   width="130" height="98"  fill="#EDE9E1" />
      <rect x="288" y="0"   width="352" height="98"  fill="#E4E0D6" />
      <rect x="0"   y="178" width="158" height="76"  fill="#EDE9E1" />
      <rect x="288" y="178" width="352" height="76"  fill="#E8E4DA" />
      <rect x="0"   y="254" width="640" height="66"  fill="#F0ECE4" />

      {/* ── TRANSIT LINES (behind streets) — Bauhaus primaries ── */}
      {/* U1 — cadmium red, thick diagonal sweep */}
      <polyline
        points="0,222 175,222 288,178 640,178"
        fill="none" stroke="#CC2200" strokeWidth="11"
        strokeLinejoin="round" strokeLinecap="round"
      />
      {/* U2 / U3 / U4 — cobalt blue, vertical */}
      <line x1="288" y1="0" x2="288" y2="320"
        stroke="#1A3BAD" strokeWidth="11" strokeLinecap="square" />

      {/* ── STREETS — strong blacks, varied weights ── */}
      {/* Lützowstraße */}
      <line x1="0"   y1="98"  x2="640" y2="98"  stroke="#0a0a0a" strokeWidth="2.5" />
      {/* Kurfürstenstraße — PRIMARY heavy rule */}
      <line x1="0"   y1="178" x2="640" y2="178" stroke="#0a0a0a" strokeWidth="5" />
      {/* Bülowstraße */}
      <line x1="0"   y1="254" x2="640" y2="254" stroke="#0a0a0a" strokeWidth="2.5" />
      {/* Nollendorfstraße — diagonal spur */}
      <line x1="288" y1="278" x2="230" y2="320" stroke="#0a0a0a" strokeWidth="2" />

      {/* Potsdamer Straße — main vertical */}
      <line x1="158" y1="0"   x2="158" y2="320" stroke="#0a0a0a" strokeWidth="3.5" />
      {/* Kleiststraße */}
      <line x1="288" y1="0"   x2="288" y2="320" stroke="#0a0a0a" strokeWidth="2.5" />
      {/* Secondary east vertical */}
      <line x1="430" y1="98"  x2="430" y2="320" stroke="#0a0a0a" strokeWidth="2" />
      {/* Short cross streets */}
      <line x1="158" y1="50"  x2="288" y2="50"  stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="430" y1="50"  x2="580" y2="50"  stroke="#0a0a0a" strokeWidth="1.5" />
      <line x1="430" y1="222" x2="640" y2="222" stroke="#0a0a0a" strokeWidth="1.5" />

      {/* ── STATION MARKERS — Kandinsky circles ── */}
      {/* U1 Kurfürstenstraße — yellow disc, black ring */}
      <circle cx="288" cy="178" r="11" fill="#F5C500" stroke="#0a0a0a" strokeWidth="3.5" />
      {/* U1 on Bülowstraße */}
      <circle cx="288" cy="222" r="8"  fill="#CC2200" stroke="#0a0a0a" strokeWidth="2.5" />
      {/* Nollendorfplatz — blue disc, large */}
      <circle cx="288" cy="268" r="12" fill="#1A3BAD" stroke="#0a0a0a" strokeWidth="3.5" />
      {/* Inner white dot — eye motif */}
      <circle cx="288" cy="268" r="4"  fill="#F7F4EE" />

      {/* ── MUSEUM MARKER — bold red square + inner black ── */}
      <rect x="455" y="163" width="26" height="26" fill="#CC2200" />
      <rect x="460" y="168" width="16" height="16" fill="#0a0a0a" />

      {/* ── KANDINSKY COMPOSITIONAL ACCENTS ── */}
      {/* Top-left corner composition — small geometric cluster */}
      <circle cx="30"  cy="30"  r="14" fill="none" stroke="#1A3BAD" strokeWidth="2" />
      <rect   x="18"   y="18"   width="24" height="24" fill="none" stroke="#CC2200" strokeWidth="1.5" transform="rotate(45 30 30)" />
      {/* Top-right diagonal accent */}
      <line x1="600" y1="8" x2="635" y2="42" stroke="#F5C500" strokeWidth="4" strokeLinecap="round" />
      <line x1="590" y1="18" x2="625" y2="8" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" />
      {/* Small circle cluster near museum */}
      <circle cx="520" cy="130" r="5" fill="#F5C500" />
      <circle cx="533" cy="120" r="3" fill="#CC2200" />
      <circle cx="510" cy="118" r="3" fill="#1A3BAD" />

      {/* ── STREET LABELS — Bauhaus tracked caps ── */}
      <text x="8"   y="92"  fontSize="7.5" fill="#0a0a0a" fontWeight="800" letterSpacing="0.12em">LÜTZOWSTRASSE</text>
      <text x="8"   y="172" fontSize="8"   fill="#0a0a0a" fontWeight="900" letterSpacing="0.14em">KURFÜRSTENSTRASSE</text>
      <text x="8"   y="248" fontSize="7.5" fill="#0a0a0a" fontWeight="800" letterSpacing="0.12em">BÜLOWSTRASSE</text>

      {/* Potsdamer Str. — rotated */}
      <text fontSize="7.5" fill="#0a0a0a" fontWeight="800" letterSpacing="0.12em"
        transform="translate(154,92) rotate(-90)" textAnchor="end">POTSDAMER STR.</text>

      {/* ── STATION LABELS ── */}
      <text x="302" y="175" fontSize="7.5" fill="#0a0a0a" fontWeight="800" letterSpacing="0.08em">U1 KURFÜRSTENSTR.</text>
      <text x="302" y="221" fontSize="7"   fill="#CC2200"  fontWeight="700" letterSpacing="0.07em">U1 BÜLOWSTR.</text>
      <text x="302" y="265" fontSize="7.5" fill="#0a0a0a" fontWeight="800" letterSpacing="0.08em">NOLLENDORFPLATZ</text>
      <text x="302" y="276" fontSize="6.5" fill="#1A3BAD"  letterSpacing="0.06em">U2 · U3 · U4</text>

      {/* ── MUSEUM LABEL ── */}
      <text x="469" y="154" fontSize="9.5" fill="#CC2200" fontWeight="900" letterSpacing="0.18em" textAnchor="middle">AKU BERLIN</text>
      <text x="469" y="204" fontSize="7"   fill="#555"    letterSpacing="0.1em" textAnchor="middle">KURFÜRSTENSTR. 78</text>

      {/* ── NORTH ARROW — bold geometric ── */}
      <g transform="translate(608, 22)">
        <rect x="-10" y="-10" width="20" height="20" fill="#0a0a0a" />
        <polygon points="0,-14 -5,-2 5,-2" fill="#F5C500" />
        <text x="0" y="22" fontSize="9" textAnchor="middle" fill="#0a0a0a" fontWeight="900" letterSpacing="0.1em">N</text>
      </g>

      {/* ── LEGEND BAR — black ground, primary colour keys ── */}
      <g transform="translate(20, 331)">
        <line x1="0" y1="5" x2="26" y2="5" stroke="#CC2200" strokeWidth="7" strokeLinecap="square" />
        <text x="32" y="9" fontSize="8" fill="#F7F4EE" letterSpacing="0.08em" fontWeight="700">U1</text>

        <line x1="60" y1="5" x2="86" y2="5" stroke="#1A3BAD" strokeWidth="7" strokeLinecap="square" />
        <text x="92" y="9" fontSize="8" fill="#F7F4EE" letterSpacing="0.08em" fontWeight="700">U2 / U3 / U4</text>

        <rect x="186" y="0" width="10" height="10" fill="#CC2200" />
        <rect x="188" y="2" width="6"  height="6"  fill="#0a0a0a" />
        <text x="202" y="9" fontSize="8" fill="#F7F4EE" letterSpacing="0.08em" fontWeight="700">AKU Berlin</text>

        {/* Scale — right side */}
        <g transform="translate(410, 0)">
          <line x1="0" y1="5" x2="100" y2="5" stroke="#F7F4EE" strokeWidth="1" />
          <line x1="0"   y1="2" x2="0"   y2="8" stroke="#F7F4EE" strokeWidth="1" />
          <line x1="50"  y1="3" x2="50"  y2="7" stroke="#F7F4EE" strokeWidth="1" />
          <line x1="100" y1="2" x2="100" y2="8" stroke="#F7F4EE" strokeWidth="1" />
          <text x="0"   y="18" fontSize="7" fill="#aaa" textAnchor="middle">0</text>
          <text x="50"  y="18" fontSize="7" fill="#aaa" textAnchor="middle">250m</text>
          <text x="100" y="18" fontSize="7" fill="#aaa" textAnchor="middle">500m</text>
        </g>
      </g>
    </svg>
  );
}
