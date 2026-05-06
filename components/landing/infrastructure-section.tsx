"use client";

import { useEffect, useState, useRef } from "react";

const corridors = [
  { name: "Texas Triangle",    units: 22, status: "Active",   note: "I-10 / I-35 corridors" },
  { name: "Florida Gulf",      units: 14, status: "Active",   note: "I-75 / I-95 spine" },
  { name: "Midwest Belt",      units: 18, status: "Active",   note: "Ohio · Indiana · Michigan" },
  { name: "Carolinas",         units: 11, status: "Active",   note: "I-85 / I-95" },
  { name: "Southwest Arid",    units:  9, status: "Onboarding", note: "AZ · NM truck stops" },
  { name: "Pacific Northwest", units:  6, status: "Survey",   note: "I-5 fuel-stop study" },
];

const traffic = [
  { value: "121,852", label: "U.S. convenience stores selling fuel" },
  { value: "80%",     label: "of all U.S. fuel volume passes through them" },
  { value: "27.7%",   label: "of in-store sales already come from foodservice" },
  { value: "38.6%",   label: "of in-store gross-margin dollars: hot food" },
];

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCorridor, setActiveCorridor] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

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
      setActiveCorridor((prev) => (prev + 1) % corridors.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span
            className={`inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="w-10 h-px bg-[#b8865a]" />
            Section 03 — Infrastructure thesis
          </span>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-end">
            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Existing traffic
              <br />
              <span className="text-muted-foreground italic">over invented traffic.</span>
            </h2>

            <p
              className={`text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md transition-all duration-1000 delay-150 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              The most expensive failure in food service is the cost of inventing customers.
              SevetTeam places micro-assets inside infrastructure that already moves them —
              compact units, a four-minute window, hot rotation, captured demand.
            </p>
          </div>
        </div>

        {/* NACS hard data */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10 mb-16">
          {traffic.map((t, i) => (
            <div
              key={t.label}
              className={`bg-background p-6 lg:p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              <span className="font-display text-3xl lg:text-5xl tracking-tight block">{t.value}</span>
              <span className="block mt-3 text-xs lg:text-[13px] text-muted-foreground leading-snug max-w-[20ch]">
                {t.label}
              </span>
            </div>
          ))}
        </div>

        {/* Doctrine + corridor map */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Doctrine card */}
          <div
            className={`lg:col-span-5 relative p-8 lg:p-10 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a] mb-6">
              Small Unit Doctrine
            </div>
            <h3 className="font-display text-2xl lg:text-3xl leading-[1.15] tracking-[-0.01em] mb-6">
              Compact footprint, surgical menu, four-minute service window.
            </h3>
            <ul className="space-y-4 text-sm lg:text-base text-muted-foreground leading-relaxed">
              {[
                ["Aroma & visibility", "Rotating shawarma is the primary marketing asset"],
                ["Speed", "Designed for the traveler, matched to fuel-stop behavior"],
                ["Low complexity", "Two proteins, two formats — no menu drift permitted"],
                ["Micro footprint", "Slots into underused space inside existing convenience stores"],
              ].map(([k, v]) => (
                <li key={k} className="flex gap-4 border-t border-foreground/10 pt-4 first:border-0 first:pt-0">
                  <span className="font-display text-foreground w-40 shrink-0">{k}</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Corridor ledger */}
          <div className="lg:col-span-7 border border-foreground/10 bg-foreground/[0.015]">
            <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>U.S. corridor ledger</span>
              <span className="flex items-center gap-2 text-[#b8865a]">
                <span className="w-1.5 h-1.5 bg-[#b8865a] animate-pulse" />
                Live capture
              </span>
            </div>

            {/* Header row */}
            <div className="hidden md:grid grid-cols-[1.6fr_0.6fr_1fr_0.7fr] px-6 py-3 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/70 border-b border-foreground/10">
              <span>Corridor</span>
              <span>Units</span>
              <span>Notes</span>
              <span className="text-right">Status</span>
            </div>

            <ul>
              {corridors.map((c, i) => (
                <li
                  key={c.name}
                  onMouseEnter={() => setActiveCorridor(i)}
                  className={`grid grid-cols-2 md:grid-cols-[1.6fr_0.6fr_1fr_0.7fr] gap-y-1 px-6 py-4 border-b border-foreground/10 last:border-0 transition-colors duration-300 ${
                    activeCorridor === i ? "bg-foreground/[0.04]" : "hover:bg-foreground/[0.02]"
                  }`}
                >
                  <span className="col-span-2 md:col-span-1 flex items-center gap-3 font-display text-base">
                    <span
                      className={`w-1.5 h-1.5 transition-colors ${
                        activeCorridor === i ? "bg-[#b8865a]" : "bg-foreground/30"
                      }`}
                    />
                    {c.name}
                  </span>
                  <span className="font-mono text-sm text-muted-foreground">{c.units}</span>
                  <span className="text-sm text-muted-foreground">{c.note}</span>
                  <span
                    className={`md:text-right text-[11px] font-mono uppercase tracking-[0.18em] ${
                      c.status === "Active"
                        ? "text-[#b8865a]"
                        : c.status === "Onboarding"
                        ? "text-foreground/70"
                        : "text-muted-foreground/70"
                    }`}
                  >
                    {c.status}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer summary */}
            <div className="px-6 py-5 flex flex-wrap items-center justify-between gap-4 border-t border-foreground/10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>Network total: 80 confirmed sites · 14 onboarding</span>
              <a
                href="#marketplace"
                className="text-foreground hover:text-[#b8865a] transition-colors inline-flex items-center gap-2"
              >
                Open marketplace <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tagline strip */}
        <div className="mt-16 pt-10 border-t border-foreground/10 flex flex-wrap items-baseline justify-between gap-6">
          <p className="font-display text-2xl lg:text-3xl text-pretty max-w-3xl tracking-[-0.01em]">
            <span className="text-foreground">Hot food, inside repeated movement.</span>{" "}
            <span className="text-muted-foreground italic">The conversion is mathematical.</span>
          </p>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Source: NACS, year-end 2024
          </span>
        </div>
      </div>
    </section>
  );
}
