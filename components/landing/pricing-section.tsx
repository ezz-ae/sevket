"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";

const ladder = [
  {
    code: "T01",
    name: "Micro-Start",
    capital: { from: 1000, to: 2000 },
    environment: "Local street / pop-up",
    purpose: "Identify raw operator discipline. The first rung. The talent filter.",
    features: [
      "Single-recipe pop-up rig",
      "Operator on the line every shift",
      "Manual reporting → AFFAREM lite",
      "Discipline score begins at zero",
    ],
    cta: "Apply as operator",
    highlight: false,
  },
  {
    code: "T02",
    name: "Kiosk Operator",
    capital: { from: 8000, to: 20000 },
    environment: "High-traffic transit",
    purpose: "Transition from informal stand to controlled, repeatable system operation.",
    features: [
      "Fixed kiosk · single station",
      "Daily AFFAREM reporting",
      "Two-protein menu locked",
      "Eligible after Micro-Start cycle",
    ],
    cta: "Apply as operator",
    highlight: false,
  },
  {
    code: "T03",
    name: "Gas Station Unit",
    capital: { from: 105000, to: 245000 },
    environment: "U.S. fuel-stop infrastructure",
    purpose: "Compact food engine. The standard SevetTeam asset. The one the 30-month model is built around.",
    features: [
      "Standard $165k or premium $245k",
      "4-investor shared ownership",
      "All six AFFAREM rooms active",
      "Smart CCTV mandatory",
      "Launch LiveOps for first 30–60 days",
      "30-month projected payback",
    ],
    cta: "Open marketplace",
    highlight: true,
  },
  {
    code: "T04",
    name: "Turkish House",
    capital: { from: 600000, to: null },
    environment: "Premium global hubs",
    purpose: "High-authority flagship. Built by invitation only, from operators graduated through the ladder.",
    features: [
      "Variable, premium capital",
      "Reserved for Elite-band investors (90+)",
      "Cultural brand authority unit",
      "Direct Founder oversight",
    ],
    cta: "Invitation only",
    highlight: false,
  },
];

function fmtCap(c: { from: number; to: number | null }) {
  if (c.to === null) return `From $${(c.from / 1000).toFixed(0)}k`;
  if (c.from < 1000 && c.to <= 2000) return `$${c.from.toLocaleString()} – $${c.to.toLocaleString()}`;
  return `$${(c.from / 1000).toFixed(0)}k – $${(c.to / 1000).toFixed(0)}k`;
}

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="ladder" ref={sectionRef} className="relative py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-8">
            <span
              className={`inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 09 — Asset ladder
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Prove yourself
              <br />
              <span className="text-muted-foreground italic">at the smallest unit first.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pt-10">
            <p className="text-base text-muted-foreground leading-relaxed">
              The Small Unit Doctrine: a business must demonstrate discipline at its smallest
              iteration before it earns capital. Operators climb the ladder. Investors enter at
              tier three with proof, not promise.
            </p>
          </div>
        </div>

        {/* Ladder cards */}
        <div className="grid lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {ladder.map((tier, index) => (
            <div
              key={tier.code}
              className={`relative bg-background p-7 lg:p-8 flex flex-col transition-all duration-700 ${
                tier.highlight ? "lg:py-12 bg-foreground/[0.03]" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {tier.highlight && (
                <span className="absolute -top-px left-0 right-0 h-px bg-[#b8865a]" />
              )}

              {/* Code + label */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-foreground/10">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
                  {tier.code}
                </span>
                {tier.highlight && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] bg-[#b8865a] text-black px-2 py-0.5">
                    Standard asset
                  </span>
                )}
              </div>

              {/* Name + environment */}
              <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-2">{tier.name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-6">
                {tier.environment}
              </span>

              {/* Capital */}
              <div className="mb-6">
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2">
                  Entry capital
                </span>
                <span className="block font-display text-2xl lg:text-3xl tracking-tight">
                  {fmtCap(tier.capital)}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{tier.purpose}</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-3.5 h-3.5 mt-1 shrink-0 ${
                        tier.highlight ? "text-[#b8865a]" : "text-foreground/45"
                      }`}
                    />
                    <span className="text-muted-foreground leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-auto w-full h-12 inline-flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] transition-all group ${
                  tier.highlight
                    ? "bg-foreground text-background hover:bg-[#b8865a] hover:text-black"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Four-Investor model */}
        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 p-8 lg:p-10 border border-foreground/10 bg-foreground/[0.02]">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
              Distributed risk &amp; accountability
            </span>
            <h3 className="mt-3 font-display text-3xl lg:text-4xl leading-tight tracking-[-0.01em]">
              The 4-investor branch.
            </h3>
            <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
              Every gas-station unit is divided into four 25% management seats. Every seat
              must either personally take shifts as a Manager-Operator or hire a SevetTeam-trained
              professional manager to represent it. The asset is never dark.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Seat 01", "Seat 02", "Seat 03", "Seat 04"].map((s, i) => (
                <div
                  key={s}
                  className="aspect-square border border-foreground/15 flex flex-col justify-between p-4 hover:border-[#b8865a] transition-colors"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8865a]">{s}</span>
                  <div>
                    <span className="block font-display text-2xl tracking-tight">25%</span>
                    <span className="block text-[11px] text-muted-foreground mt-1">
                      {i % 2 === 0 ? "Manager-Operator" : "Pro manager"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-10 border border-foreground/10 bg-foreground/[0.04]">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
              Marketplace · Sevet Global Market
            </span>
            <h3 className="mt-3 font-display text-2xl lg:text-3xl leading-tight tracking-[-0.01em]">
              Listings are filings.
            </h3>
            <p className="mt-4 text-sm lg:text-base text-muted-foreground leading-relaxed">
              Each available territory is published with capital required, projected daily-gain
              range, location score, and live AFFAREM status. Unqualified accounts cannot view
              full files.
            </p>
            <ul className="mt-6 space-y-2 text-sm font-mono text-muted-foreground">
              <li className="flex items-center justify-between border-b border-foreground/10 pb-2">
                <span className="text-foreground">TX-GAS-014</span>
                <span>$165k · 88/100</span>
              </li>
              <li className="flex items-center justify-between border-b border-foreground/10 pb-2">
                <span className="text-foreground">FL-GAS-022</span>
                <span>$245k · 91/100</span>
              </li>
              <li className="flex items-center justify-between border-b border-foreground/10 pb-2">
                <span className="text-foreground">OH-GAS-041</span>
                <span>$165k · 84/100</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-foreground">NC-GAS-007</span>
                <span>$105k · 79/100</span>
              </li>
            </ul>
            <a
              href="#marketplace"
              className="mt-8 inline-flex items-center justify-center gap-2 w-full h-12 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-[#b8865a] hover:text-black transition-colors"
            >
              View live marketplace <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom rail */}
        <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-6">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#b8865a]" />
              Not pay-to-work
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#b8865a]" />
              Discipline-qualified entry
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#b8865a]" />
              30-month recovery thesis
            </span>
          </div>
          <a
            href="#discipline"
            className="font-mono text-xs uppercase tracking-[0.18em] underline underline-offset-4 hover:text-foreground"
          >
            Read full asset framework
          </a>
        </div>
      </div>
    </section>
  );
}
