"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import {
  opportunities,
  corridors,
  corridorMatch,
  fmtMoney,
  type Opportunity,
  type Status,
} from "@/lib/marketplace-data";

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, string> = {
    Open: "bg-[#b8865a] text-black",
    Filling: "bg-[#d9b079] text-black",
    "Final seat": "bg-white text-black",
    Reserved: "bg-white/10 text-white/60",
  };
  return (
    <span className={`font-mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${map[status]}`}>
      {status}
    </span>
  );
}

export function MarketplaceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>("All");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const visible = opportunities.filter((o) => corridorMatch[filter]?.includes(o.code));

  const totalCapital = opportunities.reduce(
    (acc, o) => acc + (o.capital * (o.seatsTotal - o.seatsFilled)) / o.seatsTotal,
    0
  );
  const openSeats = opportunities.reduce((a, o) => a + (o.seatsTotal - o.seatsFilled), 0);
  const avgPayback = Math.round(
    opportunities.reduce((a, o) => a + o.paybackMonths, 0) / opportunities.length
  );

  return (
    <section
      id="marketplace"
      ref={sectionRef}
      className="relative bg-black text-white py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute inset-0 grain pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
          <div className="lg:col-span-8">
            <span
              className={`inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-white/55 mb-10 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 10 — Sevet Global Market · Live deal room
            </span>
            <h2
              className={`font-display tracking-[-0.015em] leading-[0.95] text-5xl md:text-7xl lg:text-[120px] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Live opportunities.
              <br />
              <span className="text-white/45 italic">Filed and dated.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-12">
            <p className="text-base lg:text-lg text-white/65 leading-[1.7] max-w-[44ch]">
              Every territory is published with a complete filing — site profile, capital
              breakdown, revenue model, investor structure, operator requirements, timeline,
              LiveOps coverage, risk profile, and documentation. Open a filing for the full study.
            </p>
          </div>
        </div>

        {/* Stats ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 mb-14 lg:mb-20">
          {[
            { v: `${opportunities.filter((o) => o.status !== "Reserved").length}`, k: "Open filings" },
            { v: `${openSeats}`, k: "Seats unfilled" },
            { v: fmtMoney(Math.round(totalCapital)), k: "Capital available" },
            { v: `${avgPayback} mo`, k: "Avg payback target" },
          ].map((s, i) => (
            <div
              key={s.k}
              className={`p-7 lg:p-10 ${i < 3 ? "md:border-r border-white/10" : ""} ${
                i < 2 ? "border-b md:border-b-0 border-white/10" : "border-b-0"
              }`}
            >
              <span className="block font-display text-3xl lg:text-4xl tracking-tight">{s.v}</span>
              <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                {s.k}
              </span>
            </div>
          ))}
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-2 mb-12 lg:mb-16">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40 mr-2">
            Corridor
          </span>
          {corridors.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] px-4 h-9 inline-flex items-center transition-colors ${
                  active
                    ? "bg-[#b8865a] text-black"
                    : "border border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Filing cards — preview rail */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visible.map((o) => (
            <FilingCard key={o.code} o={o} />
          ))}
        </div>

        {/* Action band */}
        <div className="mt-16 lg:mt-24 grid lg:grid-cols-[1fr_auto] gap-8 items-end pt-12 lg:pt-16 border-t border-white/10">
          <div>
            <p className="text-xl lg:text-2xl font-display tracking-tight max-w-[36ch] leading-[1.3]">
              <span className="text-white">Each filing publishes the same nine institutional sections.</span>{" "}
              <span className="text-white/60 italic">Open one to read the study.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/filing/${visible[0]?.code ?? opportunities[0].code}`}
              className="group inline-flex items-center justify-center gap-3 bg-[#b8865a] text-black font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-[#d9b079] transition-colors"
            >
              Open featured filing
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/auditing"
              className="inline-flex items-center justify-center gap-3 border border-white/25 text-white font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-white/5 transition-colors"
            >
              Review audit chain
            </Link>
          </div>
        </div>

        {/* Disclaimer rail */}
        <div className="mt-12 lg:mt-16 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.22em] text-white/40">
          <span>All filings dated · Edinburgh HQ · audit chain attached</span>
          <span>SevetTeam sells the control layer · not a position of employment</span>
        </div>
      </div>
    </section>
  );
}

function FilingCard({ o }: { o: Opportunity }) {
  const pct = (o.seatsFilled / o.seatsTotal) * 100;
  return (
    <Link
      href={`/filing/${o.code}`}
      className="group flex flex-col bg-black/40 border border-white/10 p-7 lg:p-9 hover:border-white/30 hover:bg-white/[0.02] transition-colors"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] ember">{o.code}</span>
        <StatusBadge status={o.status} />
      </div>

      <h3 className="font-display text-3xl lg:text-4xl tracking-[-0.005em] leading-tight">
        {o.city}, {o.state}
      </h3>
      <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
        <MapPin className="w-3 h-3" />
        {o.corridor}
      </p>

      <dl className="mt-9 grid grid-cols-3 gap-3">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            Capital
          </dt>
          <dd className="mt-1.5 font-display text-xl lg:text-2xl">{fmtMoney(o.capital)}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            Payback
          </dt>
          <dd className="mt-1.5 font-display text-xl lg:text-2xl">{o.paybackMonths} mo</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Score</dt>
          <dd className="mt-1.5 font-display text-xl lg:text-2xl ember">{o.locationScore}</dd>
        </div>
      </dl>

      <div className="mt-9">
        <div className="flex items-center justify-between mb-2 text-[10px] font-mono uppercase tracking-[0.22em] text-white/45">
          <span>Seats {o.seatsFilled} of {o.seatsTotal}</span>
          <span className="text-white/35">{Math.round(pct)}%</span>
        </div>
        <div className="h-1 bg-white/10">
          <div className="h-full bg-[#b8865a]" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <span className="mt-9 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/65 group-hover:text-white transition-colors">
        Open filing · 9 sections
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
