import Link from "next/link";
import type { Metadata } from "next";
import { Activity, FileText, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import {
  controlLayers,
  disciplineFactors,
  bands,
  liveOpsModes,
  auditChainPoints,
} from "@/lib/auditing-data";

export const metadata: Metadata = {
  title: "Auditing · Ölmez Franchise Systems Operations Console",
  description:
    "Eight control layers. Smart Discipline Score. LiveOps coverage. The full audit chain attached to every Ölmez Franchise Systems filing — published from Edinburgh.",
};

export default function AuditingPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow="Operations console — Auditing"
        title="The line stays awake."
        italicTail="Every layer published."
        dek="AFFAREM is not software bolted onto a franchise. It is the franchise. Eight control layers, one composite score, three modes of LiveOps — every reading filed and dated at Edinburgh, audit chain attached."
        meta={[
          { label: "Control layers", value: "8" },
          { label: "Score factors", value: "9" },
          { label: "Behavior bands", value: "5" },
          { label: "LiveOps modes", value: "3" },
        ]}
        backLabel="Return to landing"
      />

      {/* Section A — Eight control layers */}
      <section id="layers" className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                A — The eight control layers
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
                Eight layers between you and drift.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pt-6">
              <p className="text-lg leading-[1.7] text-muted-foreground max-w-[44ch]">
                Every layer is non-optional, network-wide, and enforced from Edinburgh in
                real-time. Operators see the same readout we do; nothing is hidden upstream.
              </p>
            </div>
          </div>

          <ol className="border-t border-foreground/10">
            {controlLayers.map((l) => (
              <li
                key={l.code}
                className="grid lg:grid-cols-[140px_1fr_300px] gap-6 lg:gap-12 py-14 lg:py-20 border-b border-foreground/10"
              >
                <div>
                  <span className="font-mono text-sm uppercase tracking-[0.22em] ember">
                    {l.code}
                  </span>
                </div>

                <div className="max-w-[60ch]">
                  <h3 className="font-display text-3xl lg:text-4xl tracking-[-0.005em] leading-tight">
                    {l.title}
                  </h3>
                  <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {l.role}
                  </span>
                  <p className="mt-7 text-lg leading-[1.75] text-foreground/85">{l.detail}</p>
                </div>

                <aside className="lg:pt-2">
                  <div className="border border-foreground/15 p-6">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Live metric
                    </span>
                    <span
                      className="mt-3 block font-display text-2xl tracking-tight"
                      dangerouslySetInnerHTML={{ __html: l.metric }}
                    />
                  </div>
                </aside>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section B — Smart Discipline Score */}
      <section id="score" className="relative py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                B — Smart Discipline Score
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[18ch]">
                Discipline, not bank balance.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pt-6">
              <p className="text-lg leading-[1.7] text-muted-foreground max-w-[44ch]">
                Money is becoming normal. Behavioral consistency is the rarity. Every account —
                investor, operator, manager — is scored continuously. Expansion eligibility is tied
                to the number, not the wire.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12">
            {/* Composite */}
            <div className="border border-foreground/15 p-8 lg:p-12 bg-background flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Composite · Investor #SVT-04219
              </span>
              <div className="mt-8 flex items-end gap-6">
                <span className="font-display text-[140px] lg:text-[200px] leading-[0.85] tracking-tight tabular-nums">
                  84.0
                </span>
                <span className="font-display text-3xl text-muted-foreground mb-4">/ 100</span>
              </div>

              <ul className="mt-12 space-y-3">
                {bands.map((b) => {
                  const isActive = b.tone === "strong";
                  return (
                    <li
                      key={b.name}
                      className={`flex items-center justify-between px-4 py-3 border-l-2 ${
                        isActive
                          ? "border-[#b8865a] text-[#b8865a]"
                          : "border-foreground/10 text-muted-foreground/70"
                      }`}
                    >
                      <span className="font-display text-base">{b.name}</span>
                      <span
                        className="font-mono text-[11px] tracking-[0.18em]"
                        dangerouslySetInnerHTML={{ __html: b.range }}
                      />
                    </li>
                  );
                })}
              </ul>

              <p className="mt-10 pt-7 border-t border-foreground/10 text-base text-muted-foreground leading-relaxed">
                Current band:&nbsp;
                <span className="ember font-display">Strong</span>. Eligible for shared-ownership
                across two new corridors. One audit cycle from Elite.
              </p>
            </div>

            {/* Factor list */}
            <div className="border border-foreground/15 bg-background">
              <div className="px-7 py-5 border-b border-foreground/10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>Behavioral factors · weighted</span>
                <span className="text-foreground/70">100% total</span>
              </div>
              <ul>
                {disciplineFactors.map((f, i) => (
                  <li
                    key={f.name}
                    className="grid grid-cols-[auto_1fr_auto] items-start gap-5 px-7 py-6 lg:py-7 border-b border-foreground/10 last:border-0"
                  >
                    <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground pt-0.5">
                      F/{String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-col gap-3">
                      <span className="font-display text-lg leading-snug">{f.name}</span>
                      <p className="text-sm text-muted-foreground leading-[1.65] max-w-[60ch]">
                        {f.body}
                      </p>
                      <div className="relative h-1 bg-foreground/10 overflow-hidden mt-1">
                        <div
                          className="absolute inset-y-0 left-0 bg-[#b8865a]"
                          style={{ width: `${f.weight * 5}%` }}
                        />
                      </div>
                    </div>
                    <span className="font-mono text-sm tabular-nums text-foreground pt-0.5">
                      {f.weight}%
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section C — Bands ladder */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                C — The behavioral ladder
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
                Five bands. One consequence each.
              </h2>
            </div>
          </div>

          <ul className="border-t border-foreground/15">
            {bands.map((b) => (
              <li
                key={b.name}
                className="grid lg:grid-cols-[200px_140px_1fr] gap-4 lg:gap-12 items-baseline py-10 lg:py-14 border-b border-foreground/15"
              >
                <span className="font-display text-3xl lg:text-4xl tracking-tight">{b.name}</span>
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.22em] ember"
                  dangerouslySetInnerHTML={{ __html: b.range }}
                />
                <p className="text-base lg:text-lg leading-[1.65] text-foreground/85 max-w-[60ch]">
                  {b.outcome}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section D — LiveOps modes */}
      <section id="liveops" className="relative py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                D — LiveOps coverage
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
                Three modes. One target.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pt-6">
              <p className="text-lg leading-[1.7] text-muted-foreground max-w-[44ch]">
                LiveOps is the high-intensity oversight layer that keeps the repeated promise
                intact during ramp, steady-state, and intervention.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {liveOpsModes.map((m, i) => (
              <article
                key={m.name}
                className="relative border border-foreground/15 bg-background p-8 lg:p-10 flex flex-col"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] ember">
                  Mode {i + 1}
                </span>
                <h3 className="mt-5 font-display text-3xl lg:text-4xl tracking-[-0.005em] leading-tight">
                  {m.name}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {m.window}
                </p>
                <p className="mt-8 text-base lg:text-lg leading-[1.7] text-foreground/85">
                  {m.body}
                </p>

                <div className="mt-10 pt-6 border-t border-foreground/10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    Pricing
                  </span>
                  <p className="mt-2 font-display text-xl">{m.pricing}</p>
                </div>

                <div className="mt-7 pt-6 border-t border-foreground/10">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3 block">
                    Triggers
                  </span>
                  <ul className="space-y-2">
                    {m.triggers.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2.5 text-sm leading-[1.6] text-foreground/80"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#b8865a] shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section E — Audit chain */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                E — The audit chain
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
                Filed and dated. <span className="italic text-muted-foreground">Edinburgh.</span>
              </h2>
            </div>
            <div className="lg:col-span-4 lg:pt-6">
              <p className="text-lg leading-[1.7] text-muted-foreground max-w-[44ch]">
                Discipline that is invisible is not discipline. Every reading is filed; every
                filing is signed; the chain reads the same upstream and downstream.
              </p>
            </div>
          </div>

          <ul className="grid md:grid-cols-2 gap-x-12 gap-y-7 max-w-[100ch]">
            {auditChainPoints.map((p) => (
              <li
                key={p}
                className="flex items-start gap-4 text-base lg:text-lg leading-[1.7] text-foreground/85"
              >
                <FileText className="w-4 h-4 mt-1.5 shrink-0 ember" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-20 lg:mt-28 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#marketplace"
              className="group inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-foreground/90 transition-colors"
            >
              <Activity className="w-3.5 h-3.5" />
              Review live filings
            </Link>
            <Link
              href="/magazine/smart-discipline-over-wealth"
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 text-foreground font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-foreground/5 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Read the doctrine
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
