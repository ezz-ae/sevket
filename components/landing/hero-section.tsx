"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const verbs = ["repetition", "discipline", "infrastructure", "recovery"];

function BlurWord({ word, trigger }: { word: string; trigger: number }) {
  const letters = word.split("");
  const STAGGER = 45;
  const DURATION = 500;

  const [letterStates, setLetterStates] = useState<{ opacity: number; blur: number }[]>(
    letters.map(() => ({ opacity: 0, blur: 20 }))
  );
  const framesRef = useRef<number[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    framesRef.current.forEach(cancelAnimationFrame);
    timersRef.current.forEach(clearTimeout);
    framesRef.current = [];
    timersRef.current = [];

    setLetterStates(letters.map(() => ({ opacity: 0, blur: 20 })));

    letters.forEach((_, i) => {
      const t = setTimeout(() => {
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setLetterStates((prev) => {
            const next = [...prev];
            next[i] = { opacity: eased, blur: 20 * (1 - eased) };
            return next;
          });
          if (progress < 1) {
            const id = requestAnimationFrame(tick);
            framesRef.current.push(id);
          }
        };
        const id = requestAnimationFrame(tick);
        framesRef.current.push(id);
      }, i * STAGGER);
      timersRef.current.push(t);
    });

    return () => {
      framesRef.current.forEach(cancelAnimationFrame);
      timersRef.current.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return (
    <span className="italic font-display">
      {letters.map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: letterStates[i]?.opacity ?? 0,
            filter: `blur(${letterStates[i]?.blur ?? 20}px)`,
            color: "#d9b079",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % verbs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTime(new Date());
    const i = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end items-start overflow-hidden bg-black">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-60"
          style={{ filter: "grayscale(0.6) contrast(1.05) brightness(0.55)" }}
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/85" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#b8865a]/8 to-transparent" />
      </div>

      {/* Surveying grid */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-[0.10]">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/20"
            style={{ top: `${12.5 * (i + 1)}%`, left: 0, right: 0 }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/20"
            style={{ left: `${8.33 * (i + 1)}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      {/* Top status bar */}
      <div className="absolute top-24 lg:top-28 left-0 right-0 z-10 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.18em] text-white/50">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="relative w-1.5 h-1.5 rounded-full bg-[#b8865a] pulse-dot text-[#b8865a]" />
              <span className="text-white/70">AFFAREM Live</span>
            </span>
            <span className="hidden md:inline">{time ? `${time.toLocaleTimeString("en-GB")} BST` : "—"}</span>
            <span className="hidden md:inline">55.9533 N · 3.1883 W</span>
          </div>
          <span className="hidden lg:inline">Filing IV — Edinburgh HQ</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-32 lg:pb-44 pt-40">
        <div className="lg:max-w-[80%]">
          <div
            className={`mb-10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-xs font-mono text-white/60 uppercase tracking-[0.22em]">
              <span className="w-10 h-px bg-[#b8865a]" />
              Restaurant Business Infrastructure
            </span>
          </div>

          {/* Manifesto */}
          <div className="mb-12">
            <h1
              className={`text-left text-[clamp(2.6rem,7.4vw,9.2rem)] font-display leading-[0.92] tracking-[-0.015em] text-white transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block">We do not build</span>
              <span className="block">restaurants. We build </span>
              <span className="block">
                <BlurWord word={verbs[wordIndex]} trigger={wordIndex} />
                <span className="text-white/85">.</span>
              </span>
            </h1>
          </div>

          {/* Single CTA → marketplace */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#marketplace"
              className="group inline-flex items-center justify-center gap-3 bg-[#b8865a] text-black px-8 h-13 py-4 font-mono text-xs uppercase tracking-[0.22em] hover:bg-[#d9b079] transition-colors"
            >
              View live marketplace
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
            <span className="hidden sm:inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45 pl-2">
              <span className="relative w-1.5 h-1.5 rounded-full bg-[#b8865a] pulse-dot text-[#b8865a]" />
              14 territories open · filed today
            </span>
          </div>
        </div>
      </div>

      {/* Bottom institutional strip */}
      <div
        className={`relative z-10 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
          {[
            { value: "30 mo", label: "Capital recovery target" },
            { value: "$165k", label: "Standard unit setup" },
            { value: "4", label: "Investors per branch" },
            { value: "42", label: "British holders" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl lg:text-3xl font-display text-white tracking-tight">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-white/45 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
