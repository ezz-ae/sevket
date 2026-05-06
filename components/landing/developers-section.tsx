"use client";

import { useState, useEffect, useRef } from "react";

const triggers = [
  { code: "T01", title: "14-day underperformance", body: "Sales below the modeled Class C floor for 14 consecutive trading days." },
  { code: "T02", title: "5% waste threshold",      body: "Inventory waste exceeds 5% of usage in any single rolling week." },
  { code: "T03", title: "Discipline drop",         body: "Smart Discipline Score crosses below 70 in two consecutive review cycles." },
  { code: "T04", title: "Cash variance",           body: "POS-to-deposit variance exceeds 1.5% on any single shift." },
];

const protocols = [
  { time: "07:00", label: "Morning Target",  body: "Staff plan, inventory and sales target signed off by manager and LiveOps lead." },
  { time: "11:00", label: "Mid-shift check", body: "Speed-of-service and prep yields versus target, in-line correction." },
  { time: "22:00", label: "Closing Review",  body: "Cash variance, waste log, complaint log and tomorrow's target locked." },
];

const tiers = [
  {
    name: "Launch LiveOps",
    code: "LO-LAUNCH",
    range: "Mandatory · 30–60 days",
    body: "Activated automatically for every new unit. The system stabilizes the asset before it is left to the local team.",
    rate: "Included with onboarding",
  },
  {
    name: "Remote LiveOps",
    code: "LO-REMOTE",
    range: "Digital oversight",
    body: "Two daily video calls, accountant oversight, and AFFAREM-driven correction plans for stable but underperforming branches.",
    rate: "$1,500 – $3,000 / mo",
  },
  {
    name: "On-Site LiveOps",
    code: "LO-ONSITE",
    range: "30-day intensive",
    body: "A SevetTeam manager travels to the unit. Staff retraining, inventory purge, supplier reset, and seat reassessment.",
    rate: "$7,500 – $15,000 / mo + expenses",
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProtocol, setActiveProtocol] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

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
      setActiveProtocol((prev) => (prev + 1) % protocols.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="liveops"
      ref={sectionRef}
      className="relative py-28 lg:py-40 overflow-hidden bg-[oklch(0.085_0.008_260)] text-white"
    >
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#b8865a]/[0.04] blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-24">
          <div className="lg:col-span-8">
            <span
              className={`inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-white/50 mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 07 — LiveOps Review
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              When the unit drifts,
              <br />
              <span className="text-white/35 italic">the system intervenes.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <p className="text-base text-white/60 leading-relaxed">
              Abandonment is the primary cause of franchise death. LiveOps is the institutional
              fail-safe: automatic, paid intervention from Edinburgh the moment a branch crosses
              a hard threshold. No politeness. No grace period.
            </p>
          </div>
        </div>

        {/* Triggers + Protocol clock */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          {/* Triggers */}
          <div className="lg:col-span-6 border border-white/10 bg-black/30 backdrop-blur-sm">
            <div className="px-6 py-4 border-b border-white/10 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 flex items-center justify-between">
              <span>Auto-activation triggers</span>
              <span className="flex items-center gap-2 text-[#b8865a]">
                <span className="w-1.5 h-1.5 bg-[#b8865a] animate-pulse" />
                Armed
              </span>
            </div>
            <ul>
              {triggers.map((t) => (
                <li key={t.code} className="grid grid-cols-[auto_1fr] gap-4 px-6 py-5 border-b border-white/10 last:border-0">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#b8865a]">{t.code}</span>
                  <div>
                    <span className="block font-display text-base">{t.title}</span>
                    <span className="block mt-1 text-sm text-white/55 leading-relaxed">{t.body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Protocol clock */}
          <div className="lg:col-span-6 border border-white/10 bg-black/30 backdrop-blur-sm relative">
            <div className="px-6 py-4 border-b border-white/10 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 flex items-center justify-between">
              <span>Daily protocol · local time</span>
              <span>2× video + 1 reconciliation</span>
            </div>

            <div className="relative p-8 lg:p-10 min-h-[320px]">
              {/* Time spine */}
              <div className="absolute left-12 top-12 bottom-12 w-px bg-white/15" />

              <ul className="space-y-8 relative">
                {protocols.map((p, i) => (
                  <li
                    key={p.time}
                    onMouseEnter={() => setActiveProtocol(i)}
                    className="grid grid-cols-[auto_1fr] gap-6 cursor-default"
                  >
                    <div className="relative">
                      <div
                        className={`relative w-3 h-3 mt-2 ml-3 transition-colors ${
                          activeProtocol === i ? "bg-[#b8865a]" : "bg-white/30"
                        }`}
                      >
                        {activeProtocol === i && (
                          <span className="absolute inset-[-6px] border border-[#b8865a]/50" />
                        )}
                      </div>
                    </div>
                    <div className={`transition-opacity ${activeProtocol === i ? "opacity-100" : "opacity-65"}`}>
                      <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
                        {p.time}
                      </span>
                      <span className="block font-display text-2xl mt-1">{p.label}</span>
                      <span className="block mt-2 text-sm text-white/55 leading-relaxed max-w-md">
                        {p.body}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tiers */}
        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {tiers.map((t, i) => (
            <div
              key={t.code}
              className={`relative bg-black/40 p-8 lg:p-10 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100 + 300}ms` }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
                {t.code}
              </span>
              <h3 className="mt-3 font-display text-3xl leading-tight">{t.name}</h3>
              <span className="block mt-1 text-sm text-white/55">{t.range}</span>
              <p className="mt-6 text-sm lg:text-base text-white/60 leading-relaxed min-h-[80px]">{t.body}</p>
              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Rate</span>
                <span className="font-display text-base">{t.rate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-16 pt-10 border-t border-white/10 font-display text-2xl lg:text-3xl tracking-[-0.01em] max-w-4xl text-pretty">
          <span className="text-white">Repetition is mercy.</span>{" "}
          <span className="text-white/45 italic">Drift is the only sin we cannot tolerate.</span>
        </p>
      </div>
    </section>
  );
}
