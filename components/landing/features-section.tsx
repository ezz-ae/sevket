"use client";

import { useEffect, useRef, useState } from "react";

const rules = [
  {
    number: "01",
    title: "Never scale confusion",
    body:
      "If a process cannot be explained to a tired operator in six minutes, it is a toxic asset. We refuse it.",
  },
  {
    number: "02",
    title: "Repetition is safety",
    body:
      "Predictability is the only antidote to market volatility. We sell the same wrap, the same way, in every shift.",
  },
  {
    number: "03",
    title: "A small market is not a small opportunity",
    body:
      "Truth lives where the noise is lowest. Gas-station corridors, not high streets, build durable cash.",
  },
  {
    number: "04",
    title: "Discipline is the new rarity",
    body:
      "Money is a norm. Behavioral consistency is the qualifier. AFFAREM scores it. The system enforces it.",
  },
  {
    number: "05",
    title: "Ownership without operation is decoration",
    body:
      "Authority is earned in shifts, not in checks. Every seat carries a manager. Every manager carries the room.",
  },
  {
    number: "06",
    title: "The customer is traffic, not a guest",
    body:
      "The interaction is a four-minute conversion event inside existing movement. We measure the throughput.",
  },
  {
    number: "07",
    title: "Infrastructure over inspiration",
    body:
      "A genius-dependent business is a failure of architectural design. We engineer the machine to survive ordinary people.",
  },
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRule, setActiveRule] = useState(0);
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

  return (
    <section
      id="doctrine"
      ref={sectionRef}
      className="relative py-28 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8">
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 01 — The Doctrine
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Seven rules.
              <br />
              <span className="text-muted-foreground italic">No exceptions.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-6">
            <p
              className={`text-lg text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              The credo is not advisory. It is the surgical filter we apply to every territory, every
              franchise application, every menu item, and every shift. Break a rule and the unit
              graduates out of the network. Follow them and the math is inevitable.
            </p>
            <div className="mt-8 pt-6 border-t border-foreground/10 font-mono text-xs text-muted-foreground leading-relaxed max-w-md">
              &mdash; Şevketullah &ldquo;Sevet&rdquo; Ölmez<br />
              <span className="text-foreground/60">Founder · Ankara → England → Edinburgh</span>
            </div>
          </div>
        </div>

        {/* Rules ledger */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-0 border-t border-foreground/10">
          {/* Index column */}
          <ol className="lg:border-r border-foreground/10">
            {rules.map((rule, i) => (
              <li key={rule.number}>
                <button
                  type="button"
                  onClick={() => setActiveRule(i)}
                  onMouseEnter={() => setActiveRule(i)}
                  className={`w-full flex items-center gap-4 text-left px-2 lg:px-6 py-5 border-b border-foreground/10 transition-colors duration-300 ${
                    activeRule === i
                      ? "bg-foreground/[0.04] text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/[0.02]"
                  }`}
                  aria-pressed={activeRule === i}
                >
                  <span
                    className={`font-mono text-[11px] tracking-[0.18em] transition-colors ${
                      activeRule === i ? "text-[#b8865a]" : "text-muted-foreground/60"
                    }`}
                  >
                    {rule.number}
                  </span>
                  <span className="font-display text-base lg:text-lg flex-1 truncate">
                    {rule.title}
                  </span>
                  <span
                    className={`text-xs transition-all ${
                      activeRule === i ? "translate-x-0 opacity-100 text-[#b8865a]" : "-translate-x-2 opacity-0"
                    }`}
                  >
                    &rarr;
                  </span>
                </button>
              </li>
            ))}
          </ol>

          {/* Active rule panel */}
          <div className="relative min-h-[420px] flex flex-col justify-between p-8 lg:p-16 bg-foreground/[0.015]">
            {/* Faint number watermark */}
            <span
              key={activeRule}
              className="absolute top-6 right-6 lg:top-10 lg:right-12 font-display text-[140px] lg:text-[220px] leading-none text-foreground/[0.04] select-none pointer-events-none"
            >
              {rules[activeRule].number}
            </span>

            <div className="relative z-10 max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
                Rule {rules[activeRule].number}
              </span>
              <h3 className="mt-4 font-display text-3xl lg:text-5xl leading-[1.05] tracking-[-0.01em]">
                {rules[activeRule].title}
              </h3>
              <p className="mt-8 text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {rules[activeRule].body}
              </p>
            </div>

            {/* Footer ribbon */}
            <div className="relative z-10 mt-10 pt-6 border-t border-foreground/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>Internal Filing · {rules[activeRule].number}-CANON</span>
              <span className="flex items-center gap-2 text-[#b8865a]">
                <span className="w-1.5 h-1.5 bg-[#b8865a]" />
                Enforceable across all units
              </span>
            </div>
          </div>
        </div>

        {/* Final brand mark */}
        <div className="mt-20 lg:mt-28 grid lg:grid-cols-3 gap-10 items-end">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl lg:text-5xl leading-[1.1] tracking-[-0.01em] text-pretty">
              <span className="text-foreground">&ldquo;Money opens the door.</span>{" "}
              <span className="text-muted-foreground italic">Discipline decides how far you go.&rdquo;</span>
            </p>
          </div>
          <div className="font-mono text-xs text-muted-foreground uppercase tracking-[0.18em] leading-relaxed">
            <span className="block text-foreground mb-2">Brand Voice</span>
            Surgical · Cold · Precise<br />
            No bubbly UI. No fake-friendly copy.<br />
            Restrained premium, by design.
          </div>
        </div>
      </div>
    </section>
  );
}
