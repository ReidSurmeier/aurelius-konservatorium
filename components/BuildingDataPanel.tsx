"use client";
import { useState } from "react";

const ROWS: [string, string][] = [
  ["Architect",           "Günter Pohnitzky & Partner"],
  ["Year built",          "1960–1962"],
  ["Gross floor area",    "4,847 m²"],
  ["Museum conversion",   "1985–1987"],
  ["Architect (conv.)",   "Müller Reimann Architekten"],
  ["Net exhibition area", "2,340 m²"],
  ["Gallery rooms",       "19 (EG + 1.OG + 2.OG)"],
  ["Ceiling height EG",   "5.40 m"],
  ["Ceiling height OG",   "3.90 m"],
  ["Max. floor load",     "500 kg/m² (EG) · 300 kg/m² (OG)"],
  ["Loading entrance",    "Keithstraße (rear) · 3.6 × 3.2 m"],
  ["Climate control",     "19–21 °C ±0.5 °C · 48–54% RH"],
  ["Monument status",     "Denkmal-ID 09030421, since 1991"],
  ["Last renovation",     "2019–2022, BEG §35c EStG"],
];

const ALWAYS_VISIBLE = 3;

export default function BuildingDataPanel() {
  const [open, setOpen] = useState(false);
  const visible = open ? ROWS : ROWS.slice(0, ALWAYS_VISIBLE);

  return (
    <aside className="border-t-2 border-[#0a0a0a] pt-6">
      <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#0a0a0a] mb-5">Technical Data</p>
      <table className="w-full text-[0.78rem] border-collapse">
        <tbody>
          {visible.map(([label, value]) => (
            <tr key={label} className="border-b border-[#e0e0dc]">
              <td className="py-2 pr-4 text-[#888] font-medium whitespace-nowrap align-top leading-snug">{label}</td>
              <td className="py-2 text-[#333] leading-snug">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#888] hover:text-[#0a0a0a] transition-colors flex items-center gap-1"
      >
        <span>{open ? "− Less" : `+ ${ROWS.length - ALWAYS_VISIBLE} more details`}</span>
      </button>
      {open && (
        <>
          <div className="mt-5 inline-flex items-center gap-2 border border-[#c5a028] px-3 py-1.5">
            <span className="text-[#c5a028] text-[0.6rem] font-black uppercase tracking-[0.15em]">Listed Architectural Monument</span>
          </div>
          <p className="text-[0.6rem] text-[#bbb] mt-2 leading-relaxed">§ 2 DSchGBln · Landesdenkmalamt Berlin</p>
        </>
      )}
      {!open && (
        <div className="mt-5 inline-flex items-center gap-2 border border-[#c5a028] px-3 py-1.5">
          <span className="text-[#c5a028] text-[0.6rem] font-black uppercase tracking-[0.15em]">Listed Architectural Monument</span>
        </div>
      )}
    </aside>
  );
}
