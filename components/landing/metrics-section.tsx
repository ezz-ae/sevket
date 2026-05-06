"use client";

import { useEffect, useState, useRef } from "react";

type Tier = {
  tier: string;
  daily: number;
  monthly: number;
  payback: string;
  verdict: string;
  classification: "Survival" | "Stable" | "Target" | "Strong" | "Elite";
};

const tiers: Tier[] = [
  { tier: "Class C — Weak but alive", daily:   200, monthly:  6000, payback: "27.5 months", verdict: "Downside floor / minimum viable asset",      classification: "Survival" },
  { tier: "Class B — Stable",         daily:   350, monthly: 10500, payback: "15.7 months", verdict: "Reliable yield performer",                   classification: "Stable" },
  { tier: "Class A — Base target",    daily:   550, monthly: 16500, payback: "10.0 months", verdict: "Ideal franchise model",                      classification: "Target" },
  { tier: "Strong",                   daily:  1000, monthly: 30000, payback: "5.5 months",  verdict: "Expansion candidate",                        classification: "Strong" },
  { tier: "Flagship — Elite",         daily:  1400, monthly: 42000, payback: "3.9 months",  verdict: "Evidence unit · studied for replication",   classification: "Elite" },
];

function AnimatedNumber({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(eased * end);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="inline-flex items-baseline tabular-nums">
      {prefix && <span className="text-muted-foreground mr-1">{prefix}</span>}
      <span>{display}</span>
      {suffix && <span className="text-muted-foreground">{suffix}</span>}
    </span>
  );
}

function PaybackBar({ tier }: { tier: Tier }) {
  // Higher daily = longer bar (more recovery progress per month)
  const max = 1500;
  const widthPct = Math.min((tier.daily / max) * 100, 100);
  const tone =
    tier.classification === "Survival"
      ? "bg-foreground/30"
      : tier.classification === "Stable"
      ? "bg-foreground/55"
      : tier.classification === "Target"
      ? "bg-[#b8865a]"
      : tier.classification === "Strong"
      ? "bg-[#d9b079]"
      : "bg-[#f3d6a4]";

  return (
    <div className="relative h-1.5 bg-foreground/10 overflow-hidden">
      <div
        className={`absolute inset-y-0 left-0 ${tone} transition-[width] duration-1000 ease-out`}
        style={{ width: `${widthPct}%` }}
      />
    </div>
  );
}

export function MetricsSection() {
  const [now, setNow] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTier, setActiveTier] = useState(2); // Base Target
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

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

  const active = tiers[activeTier];

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-40 overflow-hidden"
    >
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-2 px-3 py-1 bg-[#b8865a]/10 text-[#b8865a] text-[10px] font-mono uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 bg-[#b8865a] animate-pulse" />
                Live · Payback Room
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {now ? `${now.toLocaleTimeString("en-GB")} BST` : "—"}
              </span>
            </div>

            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8">
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 04 — Capital recovery
            </span>

            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              30 months.
              <br />
              <span className="text-muted-foreground italic">No story, just the line.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pt-10">
            <p className="text-base text-muted-foreground leading-relaxed">
              Standard $165,000 unit. 28% contribution margin. $3,500 fixed monthly overhead.
              Break-even at $12,500 / month. Modeled on the conservative repeatable case — the
              Class A target is the franchise the system is built around.
            </p>
          </div>
        </div>

        {/* Headline payback figure */}
        <div className="grid lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10 mb-16">
          {[
            { k: "Setup capital", v: <><AnimatedNumber end={165000} prefix="$" /></> },
            { k: "Base-target daily gain", v: <><AnimatedNumber end={550} prefix="$" /></> },
            { k: "Projected payback at target", v: <><AnimatedNumber end={10} suffix=" mo" decimals={1} /></> },
          ].map((row) => (
            <div key={row.k} className="bg-background p-8 lg:p-10">
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
                {row.k}
              </span>
              <span className="block font-display text-4xl lg:text-6xl tracking-tight">
                {row.v}
              </span>
            </div>
          ))}
        </div>

        {/* Daily Gain Ladder */}
        <div className="border border-foreground/10 bg-foreground/[0.015]">
          <div className="px-6 py-4 border-b border-foreground/10 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <span>Daily gain ladder · standard $165,000 unit</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#b8865a] animate-pulse" />
              Real-time AFFAREM model
            </span>
          </div>

          {/* Header row */}
          <div className="hidden md:grid grid-cols-[2fr_0.9fr_0.9fr_0.9fr_1.1fr] px-6 py-3 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/70 border-b border-foreground/10">
            <span>Tier</span>
            <span>Daily / net</span>
            <span>Monthly</span>
            <span>Projected payback</span>
            <span>Institutional verdict</span>
          </div>

          {tiers.map((t, i) => (
            <button
              key={t.tier}
              type="button"
              onClick={() => setActiveTier(i)}
              onMouseEnter={() => setActiveTier(i)}
              className={`w-full text-left grid grid-cols-2 md:grid-cols-[2fr_0.9fr_0.9fr_0.9fr_1.1fr] gap-y-2 px-6 py-5 border-b border-foreground/10 last:border-0 transition-colors duration-300 ${
                activeTier === i ? "bg-foreground/[0.05]" : "hover:bg-foreground/[0.025]"
              }`}
            >
              <span className="col-span-2 md:col-span-1 flex items-center gap-3">
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 ${
                    t.classification === "Target"
                      ? "bg-[#b8865a] text-black"
                      : t.classification === "Elite"
                      ? "bg-[#f3d6a4] text-black"
                      : t.classification === "Strong"
                      ? "bg-[#d9b079] text-black"
                      : t.classification === "Survival"
                      ? "bg-foreground/15 text-foreground/60"
                      : "bg-foreground/20 text-foreground/80"
                  }`}
                >
                  {t.classification}
                </span>
                <span className="font-display text-base">{t.tier}</span>
              </span>
              <span className="font-mono text-sm tabular-nums">${t.daily.toLocaleString()}</span>
              <span className="font-mono text-sm tabular-nums text-muted-foreground">${t.monthly.toLocaleString()}</span>
              <span className="font-mono text-sm tabular-nums">{t.payback}</span>
              <span className="text-sm text-muted-foreground">{t.verdict}</span>

              <div className="col-span-2 md:col-span-5 mt-2">
                <PaybackBar tier={t} />
              </div>
            </button>
          ))}
        </div>

        {/* Active focus card */}
        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 p-8 lg:p-12 border border-foreground/10 bg-background">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
              Selected scenario · {active.classification}
            </span>
            <h3 className="mt-3 font-display text-3xl lg:text-5xl leading-[1.05] tracking-[-0.01em]">
              {active.tier}
            </h3>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              At <span className="text-foreground font-display">${active.daily.toLocaleString()}</span> per day, a
              standard $165,000 unit produces{" "}
              <span className="text-foreground font-display">${active.monthly.toLocaleString()}</span> in monthly
              net cash and fully recovers capital in{" "}
              <span className="text-foreground font-display">{active.payback}</span>. {active.verdict}.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
              {[
                ["COGS ceiling", "32.0%"],
                ["Labor band", "20–24%"],
                ["Site rent", "8–12%"],
                ["Contribution", "28%"],
              ].map(([k, v]) => (
                <div key={k} className="border-l border-foreground/10 pl-3">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{k}</span>
                  <span className="block mt-1 font-display text-lg">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-10 border border-foreground/10 bg-foreground/[0.03] flex flex-col gap-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Sample listing · TX-GAS-014
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 font-mono text-sm">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Setup</span>
                <span className="block mt-1 font-display text-2xl">$165,000</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Daily range</span>
                <span className="block mt-1 font-display text-2xl">$550 – $1,000</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Location score</span>
                <span className="block mt-1 font-display text-2xl">88 / 100</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">AFFAREM</span>
                <span className="block mt-1 font-display text-2xl text-[#b8865a]">Active</span>
              </div>
            </div>
            <div className="mt-auto pt-6 border-t border-foreground/15 text-xs text-muted-foreground leading-relaxed">
              Listings are available only to investors with a Smart Discipline Score above 75. The
              4-investor structure is mandatory and visible inside the Investor Room.
            </div>
            <a
              href="#marketplace"
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.2em] h-12 hover:bg-[#b8865a] hover:text-black transition-colors"
            >
              Open in marketplace <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p className="mt-16 pt-10 border-t border-foreground/10 font-display text-2xl lg:text-3xl tracking-[-0.01em] max-w-4xl text-pretty">
          <span className="text-foreground">Capital recovery is the only thesis.</span>{" "}
          <span className="text-muted-foreground italic">Profit stories come later — or not at all.</span>
        </p>
      </div>
    </section>
  );
}
