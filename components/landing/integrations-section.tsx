"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { controlLayers as layers } from "@/lib/auditing-data";

function MiniBars({ seed = 0 }: { seed?: number }) {
  // Deterministic per-row pseudo-bars — institutional, not decorative.
  const bars = Array.from({ length: 14 }, (_, i) => {
    const v = Math.abs(Math.sin((i + 1) * 1.13 + seed * 2.7));
    return Math.max(0.18, Math.min(1, v));
  });
  return (
    <div className="flex items-end gap-[3px] h-7">
      {bars.map((v, i) => (
        <span
          key={i}
          className="w-[3px] bg-foreground/40"
          style={{ height: `${v * 100}%` }}
        />
      ))}
    </div>
  );
}

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
    <section id="layers" ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8">
            <span
              className={`inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="w-10 h-px bg-[#b8865a]" />
              Section 05 — The control layers
            </span>

            <h2
              className={`text-5xl md:text-6xl lg:text-[110px] font-display tracking-[-0.015em] leading-[0.92] transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Eight layers
              <br />
              <span className="text-muted-foreground italic">between you and drift.</span>
            </h2>
          </div>

          <div
            className={`lg:col-span-4 lg:pt-12 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-base text-muted-foreground leading-relaxed">
              AFFAREM is not software bolted onto a franchise. It is the franchise. Every layer is
              non-optional, network-wide, and enforced from Edinburgh in real-time.
            </p>
          </div>
        </div>

        {/* Layer console */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {layers.map((layer, i) => (
            <div
              key={layer.code}
              onMouseEnter={() => setActiveIndex(i)}
              className={`relative bg-background p-6 lg:p-7 transition-colors duration-300 cursor-default ${
                activeIndex === i ? "bg-foreground/[0.04]" : "hover:bg-foreground/[0.025]"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 35 + 200}ms` }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                    activeIndex === i ? "text-[#b8865a]" : "text-muted-foreground"
                  }`}
                >
                  {layer.code}
                </span>
                <span
                  className={`w-1.5 h-1.5 transition-all ${
                    activeIndex === i ? "bg-[#b8865a]" : "bg-foreground/20"
                  }`}
                />
              </div>

              {/* Body */}
              <h3 className="font-display text-xl leading-tight mb-1">{layer.title}</h3>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {layer.role}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 min-h-[64px]">
                {layer.body}
              </p>

              {/* Meta */}
              <div className="flex items-end justify-between pt-4 border-t border-foreground/10">
                <span
                  className="font-display text-base"
                  dangerouslySetInnerHTML={{ __html: layer.metric }}
                />
                <MiniBars seed={i} />
              </div>

              {/* Active stripe */}
              <div
                className={`absolute bottom-0 left-0 h-px bg-[#b8865a] transition-all duration-500 ${
                  activeIndex === i ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Footer summary */}
        <div className="mt-16 lg:mt-20 pt-10 lg:pt-12 border-t border-foreground/10 grid lg:grid-cols-3 gap-6 lg:gap-12 items-center">
          <div className="font-display text-2xl lg:text-3xl tracking-[-0.01em] lg:col-span-2 max-w-[40ch] leading-[1.25]">
            <span className="text-foreground">A managed food asset.</span>{" "}
            <span className="text-muted-foreground italic">Not a passive fantasy.</span>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-[#b8865a] animate-pulse" />
              All eight layers monitored from Edinburgh
            </div>
            <Link
              href="/auditing"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] ember hover:text-[#d9b079] transition-colors"
            >
              Open the auditing console
              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
