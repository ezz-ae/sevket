"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, Layers3, X } from "lucide-react";
import { unitHotspots, localizeHotspotTitle, type UnitHotspot, type HotspotKind } from "@/lib/deployment-room-data";

const viewSurfaces: { id: "exterior" | "interior" | "kitchen" | "dashboard"; label: string; image: { src: string; alt: string }; hotspots: HotspotKind[] }[] = [
  {
    id: "exterior",
    label: "Forecourt",
    image: {
      src: "/brand-library/shawarma-time-allsups-exterior.png",
      alt: "SHAWARMA TIME unit attached to a fuel station forecourt",
    },
    hotspots: ["traffic", "branding", "exterior"],
  },
  {
    id: "interior",
    label: "Counter Floor",
    image: {
      src: "/brand-library/shawarma-time-full-counter.png",
      alt: "SHAWARMA TIME counter floor with menu boards and customers in line",
    },
    hotspots: ["counter", "team", "branding"],
  },
  {
    id: "kitchen",
    label: "Kitchen Line",
    image: {
      src: "/brand-library/shawarma-time-kitchen-line.png",
      alt: "SHAWARMA TIME kitchen line with vertical broiler and prep stations",
    },
    hotspots: ["kitchen", "storage"],
  },
  {
    id: "dashboard",
    label: "AFFAREM",
    image: {
      src: "/brand-library/affarem-investor-reporting-dashboard.png",
      alt: "AFFAREM Investor Reporting dashboard for the unit",
    },
    hotspots: [],
  },
];

interface UnitExplorerProps {
  isTurkish?: boolean;
}

export function UnitExplorer({ isTurkish = false }: UnitExplorerProps) {
  const [activeSurface, setActiveSurface] = useState<typeof viewSurfaces[number]["id"]>("interior");
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>("front-counter");

  const surface = viewSurfaces.find((s) => s.id === activeSurface)!;
  const hotspotsForSurface = useMemo(
    () => unitHotspots.filter((h) => surface.hotspots.includes(h.kind)),
    [surface]
  );
  const activeHotspot = unitHotspots.find((h) => h.id === activeHotspotId) ?? null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
      {/* Image surface */}
      <div className="relative">
        <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-black">
          <Image
            src={surface.image.src}
            alt={surface.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />

          {/* Hotspots */}
          {hotspotsForSurface.map((h) => {
            const isActive = h.id === activeHotspotId;
            return (
              <button
                key={h.id}
                type="button"
                aria-label={h.title}
                onClick={() => setActiveHotspotId(h.id)}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 transition-transform ${isActive ? "z-30" : "z-20"}`}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 backdrop-blur-md transition-all ${
                    isActive
                      ? "border-[#b8865a] bg-[#b8865a] text-black shadow-[0_0_0_8px_rgba(184,134,90,0.18)]"
                      : "border-white/70 bg-black/60 text-white hover:border-[#b8865a] hover:bg-[#b8865a]/20"
                  }`}
                >
                  <Layers3 className="h-4 w-4" />
                </span>
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap border border-white/15 bg-black/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {localizeHotspotTitle(h.id, isTurkish)}
                </span>
              </button>
            );
          })}

          {/* Surface chip */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 border border-white/15 bg-black/55 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/85">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b8865a]" />
            {isTurkish ? "Görünüm" : "View"} · {surface.label}
          </div>
        </div>

        {/* Surface tabs */}
        <div className="mt-3 flex flex-wrap gap-2">
          {viewSurfaces.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setActiveSurface(s.id);
                const first = unitHotspots.find((h) => s.hotspots.includes(h.kind));
                setActiveHotspotId(first?.id ?? null);
              }}
              className={`px-4 h-10 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                activeSurface === s.id
                  ? "bg-[#b8865a] text-black"
                  : "border border-white/12 bg-black/30 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Hotspot detail */}
      <aside className="border border-white/10 bg-black/50 backdrop-blur-sm">
        {activeHotspot ? (
          <div className="flex h-full flex-col">
            <header className="flex items-start justify-between gap-4 border-b border-white/10 p-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">
                  {isTurkish ? "İnceleme paneli" : "Inspection panel"} · {activeHotspot.kind}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                  {localizeHotspotTitle(activeHotspot.id, isTurkish)}
                </h3>
                <p className="mt-2 text-sm italic text-white/70">{activeHotspot.oneLine}</p>
              </div>
              <button
                type="button"
                aria-label={isTurkish ? "Paneli kapat" : "Clear selection"}
                onClick={() => setActiveHotspotId(null)}
                className="text-white/40 transition-colors hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div className="flex-1 space-y-6 p-6">
              <p className="text-sm leading-[1.8] text-white/72">{activeHotspot.body}</p>

              <dl className="grid grid-cols-2 gap-4">
                {activeHotspot.metrics.map((m) => (
                  <div key={m.label} className="border border-white/10 p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {m.label}
                    </dt>
                    <dd className="mt-2 font-display text-lg tracking-[-0.02em] text-white">
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="border border-[#b8865a]/35 bg-[#b8865a]/8 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">
                  AFFAREM
                </p>
                <p className="mt-2 text-sm leading-[1.7] text-white/82">{activeHotspot.affaremNote}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center p-10 text-center text-sm text-white/55">
            {surface.id === "dashboard"
              ? isTurkish
                ? "AFFAREM görünümü: yatırımcı raporlama önizlemesi."
                : "AFFAREM view: investor reporting preview."
              : isTurkish
              ? "Bir noktayı seçin."
              : "Select a hotspot to inspect that part of the unit."}
          </div>
        )}
      </aside>
    </div>
  );
}

interface InvestorCalculatorProps {
  isTurkish?: boolean;
}

export function InvestorCalculator({ isTurkish = false }: InvestorCalculatorProps) {
  const [investment, setInvestment] = useState<number>(30000);
  const [investors, setInvestors] = useState<number>(4);
  const [hiredManager, setHiredManager] = useState<boolean>(false);
  const [scenarioId, setScenarioId] = useState<"conservative" | "expected" | "strong">("expected");

  const dailyNetByScenario = { conservative: 200, expected: 500, strong: 1400 } as const;
  const dailyNet = dailyNetByScenario[scenarioId];

  const monthlyGross = dailyNet * 30; // simplified planning maths
  const managerCost = hiredManager ? 4500 : 0;
  const platformCost = 650;
  const reserveDeduction = monthlyGross * 0.05;
  const monthlyNet = Math.max(monthlyGross - managerCost - platformCost - reserveDeduction, 0);

  const totalUnitCapital = 120000;
  const ownershipShare = Math.min(investment / totalUnitCapital, 1);
  const investorMonthly = (monthlyNet / investors) * (ownershipShare * investors);
  const investorAnnual = investorMonthly * 12;
  const paybackMonths = investment > 0 ? Math.ceil(investment / Math.max(investorMonthly, 1)) : 0;

  const fmtUsd = (n: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      {/* Inputs */}
      <div className="border border-white/10 bg-black/40 p-6 lg:p-8 backdrop-blur-sm">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">
          {isTurkish ? "Senaryo seç" : "Choose your scenario"}
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {(["conservative", "expected", "strong"] as const).map((sid) => (
            <button
              key={sid}
              type="button"
              onClick={() => setScenarioId(sid)}
              className={`px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                scenarioId === sid
                  ? "bg-[#b8865a] text-black"
                  : "border border-white/12 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {isTurkish
                ? { conservative: "Temkinli", expected: "Beklenen", strong: "Güçlü" }[sid]
                : sid.charAt(0).toUpperCase() + sid.slice(1)}
            </button>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <label className="block">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
                {isTurkish ? "Yatırım tutarı" : "Your investment"}
              </span>
              <span className="font-display text-lg tracking-[-0.02em] text-white">
                {fmtUsd(investment)}
              </span>
            </div>
            <input
              type="range"
              min={5000}
              max={120000}
              step={1000}
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              className="mt-3 w-full accent-[#b8865a]"
            />
            <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
              <span>$5K</span>
              <span>$30K {isTurkish ? "tam koltuk" : "full seat"}</span>
              <span>$120K</span>
            </div>
          </label>

          <label className="block">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
                {isTurkish ? "Yatırımcı sayısı" : "Investors per unit"}
              </span>
              <span className="font-display text-lg tracking-[-0.02em] text-white">{investors}</span>
            </div>
            <input
              type="range"
              min={1}
              max={4}
              step={1}
              value={investors}
              onChange={(e) => setInvestors(Number(e.target.value))}
              className="mt-3 w-full accent-[#b8865a]"
            />
            <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </div>
          </label>

          <label className="flex items-center gap-3 border border-white/10 p-4">
            <input
              type="checkbox"
              checked={hiredManager}
              onChange={(e) => setHiredManager(e.target.checked)}
              className="h-4 w-4 accent-[#b8865a]"
            />
            <span className="text-sm text-white/72">
              {isTurkish ? "Profesyonel yönetici tut (-$4.500/ay)" : "Hire a vetted manager (−$4,500 / mo)"}
            </span>
          </label>
        </div>
      </div>

      {/* Outputs */}
      <div className="border border-[#b8865a]/35 bg-[#b8865a]/8 p-6 lg:p-8 backdrop-blur-sm">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">
          {isTurkish ? "Planlama tablosu" : "Planning view"}
        </p>
        <p className="mt-2 text-xs text-white/55">
          {isTurkish
            ? "Sabit getiri yoktur. Her sayı, fiili şube performansına ve mutabakatına bağlıdır."
            : "No preset return. Every number is conditional on actual unit performance and reconciliation."}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Stat label={isTurkish ? "Aylık tahmini net" : "Monthly net (est.)"} value={fmtUsd(investorMonthly)} />
          <Stat label={isTurkish ? "Yıllık tahmini net" : "Annual net (est.)"} value={fmtUsd(investorAnnual)} />
          <Stat
            label={isTurkish ? "Geri ödeme penceresi" : "Payback window"}
            value={`${paybackMonths} ${isTurkish ? "ay" : "mo"}`}
          />
          <Stat
            label={isTurkish ? "Sahiplik payı" : "Ownership share"}
            value={`${(ownershipShare * 100).toFixed(1)}%`}
          />
          <Stat
            label={isTurkish ? "Aylık şube cirosu" : "Unit monthly turnover"}
            value={fmtUsd(monthlyGross)}
          />
          <Stat
            label={isTurkish ? "Rezerv kesintisi" : "Reserve deduction"}
            value={fmtUsd(reserveDeduction)}
          />
        </div>

        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
            {isTurkish ? "Senaryo penceresi" : "Scenario window"}
          </p>
          <p className="mt-2 text-sm text-white/70">
            {isTurkish ? "Günlük net" : "Daily net"} ·{" "}
            <span className="text-white">{fmtUsd(dailyNet)}</span>
          </p>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">
          {isTurkish ? "Dağıtım" : "Distribution"} ·{" "}
          {isTurkish ? "Salı ve Cuma" : "Tuesday & Friday"}
        </p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 p-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{label}</dt>
      <dd className="mt-2 font-display text-xl tracking-[-0.02em] text-white">{value}</dd>
    </div>
  );
}
