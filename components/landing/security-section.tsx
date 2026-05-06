"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { disciplineFactors as factors, bands, type Band } from "@/lib/auditing-data";

function bandTone(t: Band["tone"]) {
  switch (t) {
    case "elite":        return "border-[#f3d6a4] text-[#f3d6a4]";
    case "strong":       return "border-[#b8865a] text-[#b8865a]";
    case "standard":     return "border-foreground/40 text-foreground";
    case "risk":         return "border-foreground/25 text-muted-foreground";
    case "intervention": return "border-foreground/20 text-muted-foreground/70";
  }
}

export function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFactor, setActiveFactor] = useState(0);
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

  // Demo composite score with light animation on view
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    const target = 84;
    const start = performance.now();
    const dur = 1600;
    const tick = (n: number) => {
      const p = Math.min((n - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setScore(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible]);

  const active = factors[activeFactor];

  return (
    <section
      id="discipline"
      ref={sectionRef}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <span
              className={`inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 06 — Smart Discipline Score
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Discipline,
              <br />
              <span className="text-muted-foreground italic">not bank balance.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <p className="text-base text-muted-foreground leading-relaxed">
              Money is becoming normal. Behavioral consistency is the rarity. Every account &mdash;
              investor, operator, manager &mdash; is scored continuously. Expansion eligibility,
              territory access and shared-ownership rights are tied to the number, not the wire.
            </p>
          </div>
        </div>

        {/* Score dashboard */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Composite gauge */}
          <div className="lg:col-span-5 relative p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
              Composite · Investor #SVT-04219
            </span>

            <div className="flex items-end gap-6 mb-8">
              <span className="font-display text-[120px] lg:text-[180px] leading-[0.85] tracking-tight tabular-nums">
                {score.toFixed(1)}
              </span>
              <span className="font-display text-3xl text-muted-foreground mb-4">/ 100</span>
            </div>

            {/* Score band ladder */}
            <ul className="space-y-2 mb-8">
              {bands.map((b) => {
                const isActive =
                  (b.tone === "strong" && score >= 80 && score < 90) ||
                  (b.tone === "elite" && score >= 90) ||
                  (b.tone === "standard" && score >= 70 && score < 80) ||
                  (b.tone === "risk" && score >= 60 && score < 70) ||
                  (b.tone === "intervention" && score < 60);
                return (
                  <li
                    key={b.name}
                    className={`flex items-center justify-between px-3 py-2 border-l-2 transition-colors ${
                      isActive ? bandTone(b.tone) : "border-foreground/10 text-muted-foreground/60"
                    }`}
                  >
                    <span className="font-display text-sm">{b.name}</span>
                    <span className="font-mono text-[11px] tracking-[0.18em]" dangerouslySetInnerHTML={{ __html: b.range }} />
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto pt-6 border-t border-foreground/10 text-sm text-muted-foreground leading-relaxed">
              Current band: <span className="text-[#b8865a] font-display">Strong</span>. Eligible for
              shared-ownership across two new corridors. One audit cycle from Elite.
            </div>
          </div>

          {/* Factor breakdown */}
          <div className="lg:col-span-7 border border-foreground/10 bg-background">
            <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>Behavioral factors · weighted</span>
              <span className="text-foreground/70">100% total</span>
            </div>

            <ul>
              {factors.map((f, i) => (
                <li
                  key={f.name}
                  onMouseEnter={() => setActiveFactor(i)}
                  className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4 border-b border-foreground/10 last:border-0 transition-colors duration-300 cursor-default ${
                    activeFactor === i ? "bg-foreground/[0.04]" : "hover:bg-foreground/[0.02]"
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-[0.18em] w-10 ${
                      activeFactor === i ? "text-[#b8865a]" : "text-muted-foreground"
                    }`}
                  >
                    F/{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-base">{f.name}</span>
                    <div className="relative h-1 bg-foreground/10 overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 transition-all duration-700 ${
                          activeFactor === i ? "bg-[#b8865a]" : "bg-foreground/35"
                        }`}
                        style={{ width: isVisible ? `${f.weight * 5}%` : "0%" }}
                      />
                    </div>
                  </div>
                  <span className="font-mono text-sm tabular-nums text-foreground">
                    {f.weight}%
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Active factor explainer */}
        <div className="mt-12 lg:mt-16 p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-14 items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8865a]">
              F/{String(activeFactor + 1).padStart(2, "0")} · Selected
            </span>
            <h3 className="mt-3 font-display text-2xl lg:text-3xl leading-tight">{active.name}</h3>
            <span className="mt-2 block font-mono text-sm text-muted-foreground tabular-nums">
              {active.weight}% weight
            </span>
          </div>
          <p className="text-base lg:text-lg text-muted-foreground leading-[1.7] max-w-[60ch]">{active.body}</p>
        </div>

        {/* Link out to full console */}
        <div className="mt-12 lg:mt-16 flex justify-end">
          <Link
            href="/auditing"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] ember hover:text-[#d9b079] transition-colors"
          >
            Full operations console
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
