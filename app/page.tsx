"use client";

import { useState } from "react";

export default function Home() {
  const [mode, setMode] = useState<"explore" | "walkthrough">("explore");
  const [night, setNight] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950 text-white">
      <section className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(148,163,184,.2),transparent_42%),linear-gradient(180deg,#171717,#050505)]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] border border-white/20 bg-white/[.06] shadow-2xl sm:h-80 sm:w-96">
          <div className="absolute inset-6 border border-white/10 bg-black/20" />
          <div className="absolute -bottom-20 left-1/2 h-20 w-80 -translate-x-1/2 bg-black/50 blur-2xl" />
        </div>

        <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <p className="text-xs tracking-[.3em] text-white/50">ARCHVIZ / 01</p>
            <h1 className="mt-1 text-lg font-medium">Courtyard House</h1>
          </div>
          <span className="hidden rounded-full border border-white/10 px-4 py-2 text-xs text-white/50 sm:block">Interactive Study</span>
        </header>

        <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col justify-between px-6 pb-8 pt-24 lg:px-10">
          <div className="max-w-xl">
            <p className="text-sm text-white/50">Residential concept · Nairobi</p>
            <h2 className="mt-4 text-5xl font-light tracking-tight sm:text-7xl">Architecture<br /><span className="text-white/40">you can explore.</span></h2>
            <p className="mt-6 max-w-md text-sm leading-6 text-white/50">A digital architectural presentation combining spatial design, materials, light, and interactive 3D.</p>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex gap-2 rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur">
              <button onClick={() => setMode("explore")} className={`rounded-xl px-4 py-2 text-sm ${mode === "explore" ? "bg-white text-black" : "text-white/50"}`}>Explore</button>
              <button onClick={() => setMode("walkthrough")} className={`rounded-xl px-4 py-2 text-sm ${mode === "walkthrough" ? "bg-white text-black" : "text-white/50"}`}>Walkthrough</button>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur">
              <button onClick={() => setNight(!night)} className="text-xs text-white/60">{night ? "Night lighting" : "Day lighting"}</button>
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="text-xs text-white/40">{mode === "explore" ? "Orbit camera" : "First-person"}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
