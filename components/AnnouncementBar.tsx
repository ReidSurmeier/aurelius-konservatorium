"use client";
import { useState } from "react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-[#1a1a2e] text-white text-[0.65rem] uppercase tracking-widest w-full relative z-[60]">
      <div className="max-w-screen-xl mx-auto px-6 py-2 flex items-center justify-center gap-4">
        <p className="text-center">
          Now Open: Silicon Sublime — Corporate Bodies in Paint and Bronze · Through June 8, 2026 · Free with Admission
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 text-white/60 hover:text-white text-sm leading-none"
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      </div>
    </div>
  );
}
