"use client";

import { useEffect, useRef, useState } from "react";

const rooms = [
  {
    number: "01",
    title: "Investor Room",
    role: "Capital provider workspace",
    description:
      "Branch status, capital required, royalty obligations, and the Smart Discipline Score of every associate — in a single ledger. The first room you open every morning.",
    metric: { label: "Live capital tracked", value: "$28.4M" },
    body: [
      { k: "Open positions", v: "147 unit · 4 investors" },
      { k: "Pending clearance", v: "12 KYC / 4 territory" },
      { k: "Average discipline score", v: "82.3 / 100" },
    ],
  },
  {
    number: "02",
    title: "Design Session Room",
    role: "Pre-deployment review",
    description:
      "Live, blueprint-on-screen sessions with investors before a single screw is installed. Equipment placement, queue geometry and electrical loads are negotiated here — not on site.",
    metric: { label: "Sessions held this quarter", value: "204" },
    body: [
      { k: "Mandatory before launch", v: "Yes — no exceptions" },
      { k: "Average length", v: "92 minutes" },
      { k: "Construction creep", v: "0 — locked layouts" },
    ],
  },
  {
    number: "03",
    title: "Operator Room",
    role: "Daily shift discipline",
    description:
      "Prep lists, opening / closing checklists, speed-of-service tracking, and shift-manager attendance. Negligence at the local level is surfaced inside the hour, not at month-end.",
    metric: { label: "Shifts logged today", value: "1,284" },
    body: [
      { k: "Opening compliance", v: "98.1%" },
      { k: "Speed-of-service avg", v: "3:42 / target 4:00" },
      { k: "Prep variance", v: "Within tolerance" },
    ],
  },
  {
    number: "04",
    title: "Accountant Room",
    role: "Financial truth layer",
    description:
      "Gross sales, COGS, payroll, tax reserves, and cash variance — reconciled daily. Designed to eliminate the information asymmetry that kills decentralized franchise networks.",
    metric: { label: "COGS ceiling", value: "32.0%" },
    body: [
      { k: "Labor band", v: "20 – 24%" },
      { k: "Site-rent share", v: "8 – 12%" },
      { k: "Cash variance", v: "&lt; 0.6% network" },
    ],
  },
  {
    number: "05",
    title: "LiveOps Room",
    role: "Intervention command",
    description:
      "When a branch drifts, this room takes over. Twin daily video calls, accountant oversight, retraining cycles. Activated automatically below a 14-day or 5%-waste threshold.",
    metric: { label: "Active interventions", value: "6" },
    body: [
      { k: "Morning Target", v: "07:00 local · sales + prep" },
      { k: "Closing Review", v: "22:00 local · cash + waste" },
      { k: "On-site escalations", v: "1 unit · TX-GAS-014" },
    ],
  },
  {
    number: "06",
    title: "Payback Room",
    role: "The brutal number",
    description:
      "A single, real-time figure: capital recovered versus capital remaining on the 30-month trajectory. No vanity metrics. No top-line distractions. Just the line you came for.",
    metric: { label: "Network avg progress", value: "63%" },
    body: [
      { k: "Target window", v: "30 months / 2.5 yrs" },
      { k: "Standard setup", v: "$165,000" },
      { k: "Base-target gain", v: "$550 / day" },
    ],
  },
];

export function HowItWorksSection() {
  const [activeRoom, setActiveRoom] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoom((prev) => (prev + 1) % rooms.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const active = rooms[activeRoom];

  return (
    <section
      id="affarem"
      ref={sectionRef}
      className="relative py-28 lg:py-40 bg-[oklch(0.085_0.008_260)] text-white overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-[#b8865a]/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-end">
          <div>
            <span
              className={`inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-white/50 mb-8 transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 02 — AFFAREM
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 delay-100 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            >
              Six rooms.
              <br />
              <span className="text-white/35 italic">One operating interface.</span>
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <p className="text-lg text-white/60 leading-relaxed">
              Asset Franchise &amp; Field Management — the technical sovereignty layer that prevents
              franchisee fraud, operational drift, and capital opacity. Every shift, every dollar,
              every behavior, monitored from Edinburgh in real-time.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 font-mono text-xs uppercase tracking-[0.16em] text-white/45">
              <div className="border-t border-white/15 pt-3">
                <span className="block text-white text-base font-display normal-case tracking-tight">147</span>
                Active branches
              </div>
              <div className="border-t border-white/15 pt-3">
                <span className="block text-white text-base font-display normal-case tracking-tight">24/7</span>
                Smart CCTV
              </div>
              <div className="border-t border-white/15 pt-3">
                <span className="block text-white text-base font-display normal-case tracking-tight">&lt; 60s</span>
                Alert fanout
              </div>
            </div>
          </div>
        </div>

        {/* Console layout */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-0 border border-white/10 bg-black/40 backdrop-blur-sm">
          {/* Room list */}
          <div className="lg:border-r border-white/10">
            <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              <span>AFFAREM // ROOMS</span>
              <span className="flex items-center gap-1.5 text-[#b8865a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8865a] animate-pulse" />
                Online
              </span>
            </div>
            {rooms.map((room, i) => (
              <button
                key={room.number}
                type="button"
                onClick={() => setActiveRoom(i)}
                onMouseEnter={() => setActiveRoom(i)}
                className={`w-full text-left px-5 py-4 border-b border-white/10 transition-all duration-300 group ${
                  activeRoom === i
                    ? "bg-white/[0.05]"
                    : "hover:bg-white/[0.025]"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`font-mono text-xs tracking-[0.18em] ${
                      activeRoom === i ? "text-[#b8865a]" : "text-white/35"
                    }`}
                  >
                    R/{room.number}
                  </span>
                  <span
                    className={`flex-1 font-display text-base ${
                      activeRoom === i ? "text-white" : "text-white/65 group-hover:text-white"
                    }`}
                  >
                    {room.title}
                  </span>
                  <span
                    className={`w-2 h-2 transition-all ${
                      activeRoom === i ? "bg-[#b8865a]" : "bg-white/15"
                    }`}
                  />
                </div>
                <span className="block mt-1 ml-[3.6rem] font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {room.role}
                </span>
              </button>
            ))}
          </div>

          {/* Active room panel */}
          <div key={activeRoom} className="relative p-8 lg:p-12 min-h-[560px]">
            <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
              Filing {active.number} / 06
            </div>

            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
                {active.role}
              </span>
              <h3 className="mt-3 font-display text-3xl lg:text-5xl leading-[1.05] tracking-[-0.01em]">
                {active.title}
              </h3>
              <p className="mt-6 text-base lg:text-lg text-white/60 leading-relaxed">
                {active.description}
              </p>
            </div>

            {/* Hero metric */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-end gap-x-12 gap-y-6">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-white/40 mb-2">
                  {active.metric.label}
                </span>
                <span className="font-display text-5xl lg:text-7xl leading-none tracking-tight">
                  {active.metric.value}
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 flex-1 min-w-[240px]">
                {active.body.map((row) => (
                  <li key={row.k} className="border-l border-white/15 pl-3">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                      {row.k}
                    </span>
                    <span
                      className="block mt-1 text-sm font-display"
                      // body uses ampersand-escaped text fragments
                      dangerouslySetInnerHTML={{ __html: row.v }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom progress strip */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 overflow-hidden">
              <div
                key={`bar-${activeRoom}`}
                className="h-full bg-[#b8865a]"
                style={{ animation: "roomProgress 6s linear forwards" }}
              />
            </div>
          </div>
        </div>

        {/* CCTV strip */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {[
            { k: "Smart CCTV", v: "Accountability infrastructure, not security" },
            { k: "Two daily calls", v: "07:00 target · 22:00 reconciliation" },
            { k: "Hard-truth layer", v: "No information asymmetry, ever" },
          ].map((row) => (
            <div key={row.k} className="flex items-start gap-4">
              <span className="mt-1 w-1.5 h-1.5 bg-[#b8865a] shrink-0" />
              <div>
                <span className="block font-display text-lg">{row.k}</span>
                <span className="block text-sm text-white/55 leading-relaxed">{row.v}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes roomProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  );
}
