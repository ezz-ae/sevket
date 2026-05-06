"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const operators = [
  {
    quote:
      "Istanbul taught us rhythm. The British system gave us reporting. SevetTeam is what happens when you stop apologising for combining the two.",
    author: "James Hartwell",
    role: "Lead operator · 6-unit holder",
    location: "Manchester / Sariyer",
    metric: { value: "6", label: "Units in network" },
    badge: "GR-006",
  },
  {
    quote:
      "Our payback on the I-35 unit closed at month nine. Not because we got lucky &mdash; because AFFAREM refused to let any of the four of us blink.",
    author: "Aisha Karim",
    role: "Investor · 4-seat ownership",
    location: "Birmingham / Texas Triangle",
    metric: { value: "9 mo", label: "Capital recovered" },
    badge: "GR-014",
  },
  {
    quote:
      "I was a Micro-Start operator on a Hackney pop-up two years ago. The system saw the discipline and graduated me to a gas-station seat in Florida.",
    author: "Ömer Demir",
    role: "Manager-Operator · graduate",
    location: "London / Florida Gulf",
    metric: { value: "2 yrs", label: "Stand → asset" },
    badge: "GR-022",
  },
  {
    quote:
      "Two daily video calls felt brutal. Six months in, my Smart Discipline Score is 91 and I am cleared for two more corridors. Brutal works.",
    author: "Ruth Patterson",
    role: "Shift manager · 2-unit",
    location: "Edinburgh / Carolinas",
    metric: { value: "91", label: "Discipline score" },
    badge: "GR-029",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % operators.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + operators.length) % operators.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % operators.length);
  const op = operators[activeIndex];

  return (
    <section
      id="bridge"
      ref={sectionRef}
      className="relative py-28 lg:py-40 bg-foreground text-background overflow-hidden"
    >
      {/* Lattice pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span
              className={`inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-background/55 mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 08 — Istanbul–London bridge
            </span>
            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              42 holders.
              <br />
              <span className="text-background/40 italic">Two cities of training.</span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-base text-background/65 leading-relaxed mb-6">
              Our moat is human capital. 42 British franchise holders with deep operational
              experience inside Istanbul&apos;s street-food rhythm now apply UK reporting discipline
              to every unit in the U.S. corridor network.
            </p>
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={goPrev}
                aria-label="Previous"
                className="p-3 border border-background/20 hover:bg-background/10 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next"
                className="p-3 border border-background/20 hover:bg-background/10 transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quote layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Quote */}
          <div className="lg:col-span-7 relative">
            <span className="absolute -left-2 -top-12 text-[180px] font-display text-background/[0.07] leading-none select-none">
              &ldquo;
            </span>
            <blockquote
              key={activeIndex}
              className="relative text-2xl md:text-3xl lg:text-[40px] font-display leading-[1.18] tracking-[-0.01em] animate-fadeSlideIn"
              dangerouslySetInnerHTML={{ __html: `&ldquo;${op.quote}&rdquo;` }}
            />

            <div className="mt-12 flex items-center gap-6 pt-6 border-t border-background/15">
              <div className="w-12 h-12 border border-background/30 flex items-center justify-center font-display text-lg">
                {op.author.charAt(0)}
              </div>
              <div>
                <p className="font-display text-lg leading-tight">{op.author}</p>
                <p className="text-sm text-background/55">
                  {op.role} · {op.location}
                </p>
              </div>
              <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
                {op.badge}
              </span>
            </div>
          </div>

          {/* Metric + roster */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div
              key={`m-${activeIndex}`}
              className="p-10 border border-background/20 animate-fadeSlideIn"
            >
              <span className="block font-mono text-[11px] uppercase tracking-[0.22em] text-background/55 mb-4">
                Operator KPI
              </span>
              <span className="block font-display text-7xl lg:text-8xl tracking-tight leading-none">
                {op.metric.value}
              </span>
              <span className="block mt-3 text-sm text-background/55">{op.metric.label}</span>
            </div>

            {/* Progress dots */}
            <div className="flex gap-2">
              {operators.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="flex-1 h-1 bg-background/20 overflow-hidden"
                  aria-label={`Operator ${i + 1}`}
                >
                  <div
                    className={`h-full bg-[#b8865a] transition-all ${
                      i === activeIndex ? "w-full" : i < activeIndex ? "w-full opacity-50" : "w-0"
                    }`}
                    style={i === activeIndex ? { animation: "progress 8s linear forwards" } : {}}
                  />
                </button>
              ))}
            </div>

            {/* Roster */}
            <div className="mt-2 pt-6 border-t border-background/15">
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-background/45 mb-4">
                Featured holders
              </span>
              <div className="flex flex-wrap gap-2">
                {operators.map((o, i) => (
                  <button
                    key={o.author}
                    onClick={() => setActiveIndex(i)}
                    className={`px-3 py-2 text-xs font-mono uppercase tracking-[0.16em] border transition-all ${
                      i === activeIndex
                        ? "border-[#b8865a] text-[#b8865a]"
                        : "border-background/15 text-background/55 hover:border-background/35"
                    }`}
                  >
                    {o.badge}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeSlideIn {
          animation: fadeSlideIn 0.5s ease-out forwards;
        }
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
