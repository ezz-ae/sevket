"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { SiteLocale } from "@/lib/site-locale";
import { withLocale } from "@/lib/site-locale";

export interface StarterOpportunity {
  id: string;
  brand: string;
  brandLabel: string;
  title: string;
  subtitle: string;
  capital: string;
  payback: string;
  timeline: string;
  spotsLabel: string;
  status: "open" | "limited" | "closed";
  statusLabel: string;
  image: string;
  imageAlt: string;
  href: string;
  accent: string;
}

interface StarterOpportunitiesSliderProps {
  opportunities: StarterOpportunity[];
  locale: SiteLocale;
  title: string;
  eyebrow: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  pageLabel: string;
  prevLabel: string;
  nextLabel: string;
}

export function StarterOpportunitiesSlider({
  opportunities,
  locale,
  title,
  eyebrow,
  description,
  ctaLabel,
  ctaHref,
  pageLabel,
  prevLabel,
  nextLabel,
}: StarterOpportunitiesSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-slide]");
    const target = cards[index];
    if (target) {
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    const next = Math.max(activeIndex - 1, 0);
    scrollToIndex(next);
  };

  const handleNext = () => {
    const next = Math.min(activeIndex + 1, opportunities.length - 1);
    scrollToIndex(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const cards = track.querySelectorAll<HTMLElement>("[data-slide]");
      let closest = 0;
      let minDelta = Number.POSITIVE_INFINITY;
      const scrollLeft = track.scrollLeft + track.clientWidth / 2;
      cards.forEach((card, idx) => {
        const center = card.offsetLeft + card.clientWidth / 2;
        const delta = Math.abs(center - scrollLeft);
        if (delta < minDelta) {
          minDelta = delta;
          closest = idx;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative border-t border-gray-300 bg-[#0c0a09] py-24 lg:py-32 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#b8865a,transparent_45%),radial-gradient(circle_at_80%_70%,#46604f,transparent_45%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#e9c092]">
              <span className="h-px w-10 bg-[#b8865a]" />
              {eyebrow}
            </span>
            <h2 className="mt-6 max-w-[18ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-[58ch] text-base leading-[1.85] text-white/70">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label={prevLabel}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-black/30 text-white/70 transition-colors hover:border-[#b8865a] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              disabled={activeIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={nextLabel}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/15 bg-black/30 text-white/70 transition-colors hover:border-[#b8865a] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              disabled={activeIndex === opportunities.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
              {String(activeIndex + 1).padStart(2, "0")} / {String(opportunities.length).padStart(2, "0")} {pageLabel}
            </span>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex gap-6 overflow-x-auto scroll-smooth pb-6 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {opportunities.map((opp, index) => (
            <article
              key={opp.id}
              data-slide
              className="snap-start shrink-0 w-[88%] sm:w-[60%] lg:w-[42%] xl:w-[36%] border border-white/10 bg-black/35 backdrop-blur-sm transition-all hover:border-[#b8865a]/60"
            >
              <div className="relative h-64 w-full overflow-hidden border-b border-white/10">
                <Image
                  src={opp.image}
                  alt={opp.imageAlt}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 60vw, 36vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/0 to-black/0" />
                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                  <span
                    className="inline-flex h-7 items-center px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                    style={{ backgroundColor: opp.accent }}
                  >
                    {opp.brandLabel}
                  </span>
                  <span
                    className="inline-flex h-7 items-center px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white border border-white/20 bg-black/40"
                  >
                    {opp.statusLabel}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                    {opp.timeline}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">
                    {String(index + 1).padStart(2, "0")} · {opp.brand}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <h3 className="font-display text-2xl tracking-[-0.03em] text-white">
                  {opp.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-white/65">
                  {opp.subtitle}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4">
                  <div className="border border-white/10 p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {pageLabel === "page" ? "Capital" : "Sermaye"}
                    </dt>
                    <dd className="mt-2 font-display text-lg tracking-[-0.02em] text-white">
                      {opp.capital}
                    </dd>
                  </div>
                  <div className="border border-white/10 p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {pageLabel === "page" ? "Payback" : "Geri ödeme"}
                    </dt>
                    <dd className="mt-2 font-display text-lg tracking-[-0.02em] text-white">
                      {opp.payback}
                    </dd>
                  </div>
                </dl>

                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                  {opp.spotsLabel}
                </p>

                <Link
                  href={withLocale(opp.href, locale)}
                  className="group mt-6 inline-flex h-11 items-center justify-center gap-3 bg-[#b8865a] px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
                >
                  {ctaLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-2">
            {opportunities.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => scrollToIndex(idx)}
                className={`h-1 transition-all ${
                  activeIndex === idx ? "w-10 bg-[#b8865a]" : "w-5 bg-white/15"
                }`}
              />
            ))}
          </div>

          <Link
            href={withLocale(ctaHref, locale)}
            className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092] transition-colors hover:text-white"
          >
            {pageLabel === "page" ? "View all opportunities" : "Tüm fırsatları gör"}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
