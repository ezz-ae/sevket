"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  BrainCircuit,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileText,
  Gauge,
  Landmark,
  MapPin,
  MessageSquare,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  WalletCards,
} from "lucide-react";

const copper = "#b8865a";
const gold = "#e9c092";

const marketPins = [
  { city: "Houston", x: "48%", y: "63%", traffic: "High", status: "Site review", sales: "A-", risk: "Low", demand: "Strong", stage: "Starter investors" },
  { city: "Orlando", x: "68%", y: "71%", traffic: "Tourism", status: "Open soon", sales: "B+", risk: "Medium", demand: "Active", stage: "Build-out" },
  { city: "Chicago", x: "55%", y: "38%", traffic: "Dense", status: "Under review", sales: "A", risk: "Weather", demand: "Rising", stage: "Market file" },
  { city: "Charlotte", x: "63%", y: "58%", traffic: "Commuter", status: "Available", sales: "B", risk: "Low", demand: "Qualified", stage: "Operator screen" },
  { city: "Dallas", x: "44%", y: "61%", traffic: "Fuel corridor", status: "Reserved", sales: "A-", risk: "Low", demand: "Strong", stage: "Investor room" },
  { city: "Phoenix", x: "25%", y: "62%", traffic: "Roadside", status: "In process", sales: "B+", risk: "Heat", demand: "Early", stage: "Location study" },
];

const hotspots = [
  { label: "Counter", x: "42%", y: "58%", detail: "Queue rhythm, service speed, ticket pressure" },
  { label: "Kitchen", x: "64%", y: "45%", detail: "Prep discipline, food cost, waste control" },
  { label: "Staff", x: "53%", y: "68%", detail: "Attendance, readiness, shift behavior" },
  { label: "Storage", x: "74%", y: "56%", detail: "Inventory count, reserve levels, variance" },
  { label: "POS", x: "37%", y: "43%", detail: "Sales signal, reconciliation, payment flow" },
  { label: "CCTV", x: "58%", y: "31%", detail: "Compliance review, movement, exceptions" },
  { label: "Menu", x: "49%", y: "36%", detail: "Price logic, availability, demand mix" },
  { label: "Flow", x: "30%", y: "63%", detail: "Customer path, bottlenecks, conversion" },
];

const operations = [
  ["Branch Health", "92%", "Stable"],
  ["Staff Readiness", "87%", "Watch"],
  ["Sales Rhythm", "Strong", "Clean"],
  ["Food Cost", "Normal", "Within band"],
  ["Waste Alert", "Low", "Controlled"],
  ["Reporting Discipline", "Complete", "Filed"],
  ["Distribution Readiness", "Pending Review", "Reconcile"],
];

const accountModules = [
  { icon: Landmark, title: "Ownership position", value: "Branch group 04" },
  { icon: SlidersHorizontal, title: "Starter package", value: "$12,000" },
  { icon: Building2, title: "Junior pool", value: "50 units" },
  { icon: CircleDollarSign, title: "Distribution history", value: "Twice weekly" },
  { icon: WalletCards, title: "Wallet balance", value: "Provider-ready" },
  { icon: FileText, title: "Documents", value: "Agreement signed" },
  { icon: MessageSquare, title: "Messages", value: "3 open" },
  { icon: ClipboardCheck, title: "Tax file", value: "2026 export" },
];

const riskGates = [
  "Location risk",
  "Operator risk",
  "Staffing risk",
  "Sales volatility",
  "Compliance risk",
  "Investor readiness",
  "Early exit behavior",
  "Mega-opportunity eligibility",
];

function SectionShell({
  id,
  eyebrow,
  title,
  body,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative min-h-screen border-t border-white/10 px-4 py-24 sm:px-6 lg:px-12">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="lg:sticky lg:top-28">
          <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-white/45">{eyebrow}</span>
          <h2 className="mt-6 max-w-[12ch] font-display text-[clamp(2.6rem,7vw,7.2rem)] leading-[0.9] tracking-[-0.045em] text-white">
            {title}
          </h2>
          <p className="mt-7 max-w-[46ch] text-base leading-[1.75] text-white/64 md:text-lg">{body}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function AffaremIntelligenceFilm() {
  const [investment, setInvestment] = useState(6000);
  const pool = useMemo(() => {
    const exposure = Math.max(6, Math.round((investment / 12000) * 50));
    const learning = Math.min(100, Math.round(38 + (investment / 12000) * 46));
    const eligibility = Math.min(100, Math.round(24 + (investment / 12000) * 58));
    return { exposure, learning, eligibility };
  }, [investment]);

  return (
    <div className="bg-[#030303] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_8%,rgba(184,134,90,0.2),transparent_30%),radial-gradient(circle_at_80%_42%,rgba(233,192,146,0.08),transparent_34%),linear-gradient(180deg,#020202,#070503_42%,#030303)]" />
      <div className="relative z-10">
        <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 sm:px-6 lg:px-12">
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-1/2 top-1/2 h-[72vmin] w-[72vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b8865a]/25 shadow-[0_0_120px_rgba(184,134,90,0.24)]" />
            <div className="absolute left-1/2 top-1/2 h-[46vmin] w-[46vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#b8865a]/45 to-transparent" />
          </div>
          <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e9c092]">AFFAREM Intelligence Layer</span>
              <h1 className="mt-7 max-w-[10ch] font-display text-[clamp(3.4rem,9vw,10rem)] leading-[0.82] tracking-[-0.055em]">
                Intelligence Layer
              </h1>
              <p className="mt-8 max-w-[52ch] text-lg leading-[1.75] text-white/68">
                AFFAREM does not show reports. It explains the business while it is moving.
              </p>
              <p className="mt-5 max-w-[48ch] text-sm leading-[1.85] text-white/46">
                Every Shawerma Time unit creates signals: sales, staff behavior, food cost, branch rhythm, investor movement, risk, demand, and operational pressure. AFFAREM connects those signals into one intelligence layer.
              </p>
            </div>
            <div className="relative min-h-[560px] overflow-hidden border border-white/10 bg-black/60 p-8 shadow-[0_0_80px_rgba(0,0,0,0.65)]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
              <div className="relative flex h-full min-h-[500px] flex-col items-center justify-center">
                <Image src="/affarem-logo.svg" alt="AFFAREM logo" width={520} height={520} className="w-full max-w-[470px] opacity-95" priority />
                <div className="mt-8 grid w-full max-w-xl gap-3 sm:grid-cols-2">
                  {["Every restaurant creates signals.", "AFFAREM turns them into decisions."].map((line) => (
                    <div key={line} className="border border-[#b8865a]/25 bg-[#b8865a]/10 p-4">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#e9c092]">{line}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          id="market"
          eyebrow="01 / Market signal"
          title="Restaurants create movement. AFFAREM reads it."
          body="Before a unit becomes an opportunity, the location is studied as movement, not as an address."
        >
          <div className="relative min-h-[640px] overflow-hidden border border-white/10 bg-[#071016] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_54%,rgba(184,134,90,0.18),transparent_28%)]" />
            <div className="absolute inset-8 rounded-[46%] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent)]" />
            <div className="absolute left-[18%] top-[32%] h-[31%] w-[56%] rounded-[48%] border border-[#b8865a]/25 rotate-[-8deg]" />
            {marketPins.map((pin) => (
              <div key={pin.city} className="absolute" style={{ left: pin.x, top: pin.y }}>
                <span className="absolute -left-3 -top-3 h-6 w-6 animate-ping rounded-full bg-[#b8865a]/35" />
                <span className="relative block h-3 w-3 rounded-full bg-[#e9c092] shadow-[0_0_24px_rgba(233,192,146,0.8)]" />
                <div className="mt-3 w-48 border border-white/10 bg-black/75 p-3 backdrop-blur">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white">{pin.city}</p>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] text-white/54">
                    <span>Traffic: {pin.traffic}</span>
                    <span>Status: {pin.status}</span>
                    <span>Sales: {pin.sales}</span>
                    <span>Risk: {pin.risk}</span>
                    <span>Demand: {pin.demand}</span>
                    <span>Stage: {pin.stage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="branch"
          eyebrow="02 / Branch signal"
          title="A branch is not a shop. It is a signal source."
          body="AFFAREM sees the branch as a living operating system."
        >
          <div className="relative min-h-[640px] overflow-hidden border border-white/10 bg-black p-6">
            <Image src="/brand-library/shawarma-time-storefront-day.png" alt="Shawerma Time branch signal source" fill className="object-cover opacity-38" />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/60 to-black/20" />
            <div className="absolute inset-x-[12%] bottom-[12%] top-[16%] border border-[#e9c092]/30 bg-[#e9c092]/5 shadow-[0_0_80px_rgba(184,134,90,0.12)] backdrop-blur-[2px]" />
            {hotspots.map((spot) => (
              <div key={spot.label} className="absolute" style={{ left: spot.x, top: spot.y }}>
                <span className="absolute -left-4 -top-4 h-8 w-8 animate-pulse rounded-full border border-[#e9c092]/70" />
                <span className="relative block h-2.5 w-2.5 rounded-full bg-[#e9c092]" />
                <div className="mt-3 hidden w-56 border border-white/10 bg-black/80 p-3 text-xs text-white/62 backdrop-blur md:block">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e9c092]">{spot.label}</p>
                  <p className="mt-2 leading-relaxed">{spot.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="operations"
          eyebrow="03 / Operations wall"
          title="A weak branch should not hide behind strong sales."
          body="AFFAREM reads the whole operation: branch health, staff readiness, food cost, reporting discipline, waste, and distribution readiness."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {operations.map(([label, value, note], index) => (
              <article key={label} className="min-h-44 border border-white/10 bg-white/[0.045] p-6 backdrop-blur" style={{ transform: `translateY(${index % 2 ? 28 : 0}px)` }}>
                <div className="flex items-center justify-between gap-4">
                  <Gauge className="h-5 w-5 text-[#e9c092]" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/36">Signal {String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{label}</p>
                <p className="mt-3 font-display text-4xl tracking-[-0.04em] text-white">{value}</p>
                <p className="mt-4 text-sm text-[#e9c092]">{note}</p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="account"
          eyebrow="04 / Investor account"
          title="Investor accounts should move with the business."
          body="The investor does not wait for vague updates. The account moves with the restaurant."
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {accountModules.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border border-white/10 bg-black/55 p-5">
                  <Icon className="h-5 w-5 text-[#e9c092]" />
                  <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">{item.title}</p>
                  <p className="mt-3 text-lg text-white">{item.value}</p>
                </article>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="distribution"
          eyebrow="05 / Distribution"
          title="Distribution without reconciliation is noise."
          body="Eligible net distributions are reviewed twice weekly after sales, costs, reserves, fees, and deductions are reconciled."
        >
          <div className="relative overflow-hidden border border-white/10 bg-[#090704] p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {[
                ["Friday", "Monday activity", "Tuesday reconciliation", "Tuesday eligible distribution"],
                ["Tuesday", "Thursday activity", "Friday reconciliation", "Friday eligible distribution"],
              ].map((cycle) => (
                <div key={cycle[0]} className="relative border border-[#b8865a]/25 bg-black/40 p-6">
                  <div className="absolute left-10 top-16 bottom-8 w-px bg-gradient-to-b from-[#e9c092] via-[#b8865a] to-transparent" />
                  {cycle.map((step, index) => (
                    <div key={step} className="relative flex gap-5 pb-8 last:pb-0">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#e9c092] bg-black">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e9c092]" />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Step {index + 1}</p>
                        <p className="mt-1 text-xl text-white">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="risk"
          eyebrow="06 / Risk gates"
          title="Fast money needs slow control."
          body="AFFAREM protects the company from fast money with weak behavior."
        >
          <div className="grid gap-3 md:grid-cols-2">
            {riskGates.map((gate, index) => (
              <div key={gate} className="flex items-center justify-between border border-red-300/15 bg-red-950/10 p-5">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="h-5 w-5 text-red-200/70" />
                  <span className="text-lg text-white">{gate}</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-100/36">Gate {index + 1}</span>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="human"
          eyebrow="07 / Human supervision"
          title="The system reads. People decide."
          body="Every major action has human supervision. Signals create clarity; people carry responsibility."
        >
          <div className="relative min-h-[600px] overflow-hidden border border-white/10">
            <Image src="/brand-library/affarem-camera-interview.png" alt="AFFAREM human supervision room" fill className="object-cover opacity-55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-black/10" />
            <div className="absolute bottom-8 left-8 right-8 grid gap-4 md:grid-cols-3">
              {["Review signals", "Approve action", "File decision"].map((step) => (
                <div key={step} className="border border-white/10 bg-black/70 p-5 backdrop-blur">
                  <CheckCircle2 className="h-5 w-5 text-[#e9c092]" />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/42">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="junior"
          eyebrow="08 / Junior pool"
          title="Junior investors start by learning the system."
          body="Junior investors do not start by guessing one restaurant. They enter a pool of 50 restaurants and learn the reporting rhythm first."
        >
          <div className="border border-white/10 bg-black/60 p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.82fr]">
              <div>
                <div className="grid grid-cols-10 gap-2">
                  {Array.from({ length: 50 }).map((_, index) => (
                    <span key={index} className="aspect-square border border-[#b8865a]/25 bg-[#b8865a]/10" style={{ opacity: index < pool.exposure ? 1 : 0.28 }} />
                  ))}
                </div>
                <div className="mt-8">
                  <div className="flex items-end justify-between gap-4">
                    <p className="font-display text-5xl tracking-[-0.04em] text-white">${investment.toLocaleString()}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/42">$1,000 → $12,000</p>
                  </div>
                  <input
                    aria-label="Junior investor budget"
                    type="range"
                    min={1000}
                    max={12000}
                    step={500}
                    value={investment}
                    onChange={(event) => setInvestment(Number(event.target.value))}
                    className="mt-5 w-full accent-[#b8865a]"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                {[
                  ["Estimated pool exposure", `${pool.exposure} / 50 units`],
                  ["Distribution rhythm", "Twice-weekly review"],
                  ["Minimum holding before early exit", "2 eligible distributions"],
                  ["Learning score", `${pool.learning}%`],
                  ["Eligibility progress", `${pool.eligibility}%`],
                ].map(([label, value]) => (
                  <div key={label} className="border border-white/10 bg-white/[0.04] p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">{label}</p>
                    <p className="mt-2 text-2xl text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <section className="relative min-h-screen overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e9c092]">09 / Control architecture</span>
                <h2 className="mt-7 max-w-[12ch] font-display text-[clamp(3rem,8vw,8.4rem)] leading-[0.88] tracking-[-0.05em] text-white">
                  AFFAREM is the operating memory of Ölmez.
                </h2>
                <p className="mt-8 max-w-[48ch] text-base leading-[1.8] text-white/62">
                  Market intelligence, branch operations, investor accounts, reporting, funding responsibility, and people operations connect into one decision memory.
                </p>
              </div>
              <div className="relative min-h-[620px] border border-white/10 bg-black/55 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,134,90,0.22),transparent_36%)]" />
                {[
                  ["Market map", "left-[8%] top-[14%]", MapPin],
                  ["Branch", "right-[11%] top-[18%]", Building2],
                  ["Investor account", "left-[15%] bottom-[20%]", WalletCards],
                  ["Reporting", "right-[18%] bottom-[19%]", FileText],
                  ["Funding department", "left-[38%] top-[43%]", Banknote],
                  ["People operations", "right-[39%] bottom-[43%]", Users],
                  ["Decision memory", "left-[39%] top-[28%]", BrainCircuit],
                  ["Risk control", "right-[36%] top-[56%]", ShieldCheck],
                ].map(([label, pos, Icon]) => {
                  const TypedIcon = Icon as typeof BrainCircuit;
                  return (
                    <div key={label as string} className={`absolute ${pos as string}`}>
                      <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-[#e9c092]/35 bg-black/75 text-center shadow-[0_0_40px_rgba(184,134,90,0.14)]">
                        <TypedIcon className="h-5 w-5 text-[#e9c092]" />
                        <p className="mt-2 px-3 font-mono text-[9px] uppercase tracking-[0.14em] text-white/62">{label as string}</p>
                      </div>
                    </div>
                  );
                })}
                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e9c092]/50 bg-[#b8865a]/15">
                  <Clock3 className="h-8 w-8 text-[#e9c092]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative min-h-[82vh] overflow-hidden border-t border-white/10 px-4 py-24 sm:px-6 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(184,134,90,0.2),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#e9c092]">10 / Join access layer</span>
              <h2 className="mt-7 max-w-[12ch] font-display text-[clamp(3rem,8vw,8.2rem)] leading-[0.88] tracking-[-0.05em] text-white">
                You can be part of it.
              </h2>
              <p className="mt-7 max-w-[48ch] text-base leading-[1.8] text-white/64">
                AFFAREM access is not a decorative login. It is the controlled entry point for investors, junior pools, starter reviews, documents, messages, distribution history, and responsibility.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Enter Investor Room", "Access your account", "/investors/dashboard"],
                ["Explore Junior Pool", "Start your system journey", "/junior-investor-program"],
                ["Review Starter Investment", "Open a unit before you fund it", "/deployment-room"],
                ["Request AFFAREM Access", "Apply for controlled access", "mailto:investors@olmez.us?subject=AFFAREM%20Access"],
              ].map(([label, subline, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group min-h-40 border border-[#b8865a]/35 bg-[#b8865a]/10 p-6 transition-colors hover:bg-[#b8865a]/20"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e9c092]">{label}</p>
                      <p className="mt-5 text-lg leading-snug text-white/68">{subline}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#e9c092] transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
