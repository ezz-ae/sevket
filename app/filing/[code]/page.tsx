import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Building2,
  Clock,
  ShieldCheck,
  Users,
  TrendingUp,
  AlertTriangle,
  FileText,
  CalendarRange,
  Activity,
  Lock,
} from "lucide-react";
import {
  getFiling,
  opportunities,
  fmtMoney,
  relatedFilings,
  type Status,
  type Opportunity,
} from "@/lib/marketplace-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const dynamicParams = false;

export function generateStaticParams() {
  return opportunities.map((o) => ({ code: o.code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const o = getFiling(code);
  if (!o) return { title: "Filing not found · Ölmez Franchise Systems" };
  return {
    title: `${o.code} · ${o.city}, ${o.state} — Ölmez Franchise Systems Filing`,
    description: `${o.tier} tier · ${o.corridor}. Total capital ${fmtMoney(o.capital)}, payback ${o.paybackMonths} months. Filed and dated at Edinburgh.`,
  };
}

export default async function FilingPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const filing = getFiling(code);
  if (!filing) notFound();

  const seatPct = (filing.seatsFilled / filing.seatsTotal) * 100;
  const related = relatedFilings(filing.code, 3);
  const annualNetPerSeat = filing.monthlyNetPerSeat * 12;

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      {/* Hero */}
      <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <Link
            href="/#marketplace"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors mb-12 lg:mb-16"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Sevet Global Market
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-10 lg:mb-12">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] ember">
                  {filing.code}
                </span>
                <span className="text-foreground/30">·</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  {filing.tier} tier
                </span>
                <StatusBadge status={filing.status} />
              </div>

              <h1 className="font-display tracking-[-0.015em] leading-[0.95] text-6xl md:text-8xl lg:text-[140px]">
                {filing.city},
                <br />
                <span className="text-muted-foreground italic">{filing.state}</span>
              </h1>

              <p className="mt-10 lg:mt-14 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-muted-foreground font-mono">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {filing.corridor}
                </span>
                <span className="text-foreground/25">·</span>
                <span>{filing.coordinates}</span>
                <span className="text-foreground/25">·</span>
                <span>{filing.site.footprint}</span>
              </p>
            </div>

            <div className="lg:col-span-4 lg:pb-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-foreground/15 pt-8">
                <Stat label="Total capital" value={fmtMoney(filing.capital)} />
                <Stat label="Per seat" value={fmtMoney(filing.capitalPerSeat)} />
                <Stat label="Payback" value={`${filing.paybackMonths} mo`} />
                <Stat label="Site score" value={String(filing.locationScore)} ember />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky-summary + body */}
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-16 pb-32 lg:pb-48">
          {/* Sticky summary rail */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
            <div className="border border-foreground/15 p-6 lg:p-8">
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-6">
                Filing summary
              </span>

              <div className="space-y-5">
                <Row k="Tier" v={filing.tier} />
                <Row k="Corridor" v={filing.corridor.split(" · ")[1] ?? filing.corridor} />
                <Row k="Status" v={filing.status} />
                <Row k="Seats" v={`${filing.seatsFilled} of ${filing.seatsTotal}`} />
                <Row k="Discipline floor" v={`${filing.disciplineFloor} / 100`} />
                <Row k="Daily floor" v={fmtMoney(filing.daily.floor)} />
                <Row k="Daily target" v={fmtMoney(filing.daily.target)} />
                <Row k="Monthly net / seat" v={fmtMoney(filing.monthlyNetPerSeat)} />
              </div>

              <div className="mt-7 pt-6 border-t border-foreground/10">
                <div className="flex items-center justify-between mb-2 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                  <span>Seat fill</span>
                  <span className="ember">{Math.round(seatPct)}%</span>
                </div>
                <div className="h-1.5 bg-foreground/10">
                  <div className="h-full bg-[#b8865a]" style={{ width: `${seatPct}%` }} />
                </div>
              </div>

              {filing.status !== "Reserved" && (
                <Link
                  href={`/filing/${filing.code}#reserve`}
                  className="mt-7 group inline-flex w-full items-center justify-center gap-3 bg-[#b8865a] text-black font-mono text-[11px] uppercase tracking-[0.22em] px-5 h-12 hover:bg-[#d9b079] transition-colors"
                >
                  Reserve seat
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
            </div>

            <div className="border border-foreground/10 p-6 text-xs leading-relaxed text-muted-foreground font-mono uppercase tracking-[0.18em]">
              All filings dated · audit chain attached · Edinburgh HQ
            </div>
          </aside>

          {/* Body */}
          <article className="space-y-24 lg:space-y-32">
            <FilingBlock
              icon={<Building2 className="w-3.5 h-3.5" />}
              eyebrow="01 — Site profile"
              title="The asset under file."
              kind="grid"
            >
              <KV k="Average daily volume" v={filing.site.adv} />
              <KV k="Captive traffic" v={filing.site.captive} />
              <KV k="Vehicle traffic" v={filing.site.traffic} />
              <KV k="Lease structure" v={filing.site.lease} />
              <KV k="Build footprint" v={filing.site.footprint} />
              <KV k="Adjacent brands" v={filing.site.neighbors} />
            </FilingBlock>

            <FilingBlock
              icon={<TrendingUp className="w-3.5 h-3.5" />}
              eyebrow="02 — Revenue model"
              title="What the line must clear."
              kind="grid"
            >
              <KV k="Daily target" v={fmtMoney(filing.daily.target)} />
              <KV k="Daily floor" v={fmtMoney(filing.daily.floor)} />
              <KV k="COGS ceiling" v={`${filing.cogsCeiling}%`} />
              <KV k="Contribution margin" v={`${filing.contributionMargin}%`} />
              <KV k="Monthly net / seat" v={fmtMoney(filing.monthlyNetPerSeat)} />
              <KV k="Annual net / seat" v={fmtMoney(annualNetPerSeat)} />
            </FilingBlock>

            <FilingBlock
              icon={<FileText className="w-3.5 h-3.5" />}
              eyebrow="03 — Capital breakdown"
              title="Every line on the wire."
            >
              <ul className="divide-y divide-foreground/10 border-t border-b border-foreground/15">
                {filing.capitalBreakdown.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between py-5 lg:py-6 text-base"
                  >
                    <span className="text-foreground/75">{row.label}</span>
                    <span className="font-mono text-foreground tabular-nums">
                      ${row.amount.toLocaleString()}
                    </span>
                  </li>
                ))}
                <li className="flex items-center justify-between pt-7 lg:pt-8">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] ember">
                    Total
                  </span>
                  <span className="font-display text-3xl lg:text-4xl tracking-tight">
                    {fmtMoney(filing.capital)}
                  </span>
                </li>
              </ul>
            </FilingBlock>

            <FilingBlock
              icon={<Users className="w-3.5 h-3.5" />}
              eyebrow="04 — Investor structure"
              title="Four seats. Twenty-five percent each."
            >
              <div className="grid sm:grid-cols-4 gap-3 lg:gap-4 mb-10">
                {Array.from({ length: filing.seatsTotal }).map((_, i) => {
                  const filled = i < filing.seatsFilled;
                  return (
                    <div
                      key={i}
                      className={`p-5 lg:p-6 border ${
                        filled
                          ? "border-[#b8865a] bg-[#b8865a]/5"
                          : "border-foreground/15 bg-transparent"
                      }`}
                    >
                      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                        Seat 0{i + 1}
                      </span>
                      <span
                        className={`block font-display text-2xl mt-3 ${
                          filled ? "ember" : "text-muted-foreground"
                        }`}
                      >
                        {filled ? "Locked" : "Available"}
                      </span>
                      <span className="block mt-1 font-mono text-[11px] text-muted-foreground">
                        25% · {fmtMoney(filing.capitalPerSeat)}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-[60rem]">
                <KV k="Capital per seat" v={fmtMoney(filing.capitalPerSeat)} />
                <KV k="Discipline floor" v={`${filing.disciplineFloor} / 100`} />
                <KV
                  k="Each seat must"
                  v="Take shifts as Manager-Operator OR commit a Ölmez Franchise Systems-trained pro manager"
                />
                <KV k="Asset darkness" v="Never permitted at any tier" />
              </div>

              <p className="mt-10 lg:mt-12 max-w-[60ch] text-base lg:text-lg leading-[1.75] text-muted-foreground italic">
                You can outsource work. You cannot outsource accountability.
              </p>
            </FilingBlock>

            <FilingBlock
              icon={<ShieldCheck className="w-3.5 h-3.5" />}
              eyebrow="05 — Operator requirements"
              title="What every seat must clear."
              kind="prose"
            >
              <ul className="space-y-5 max-w-[60ch]">
                {filing.requirements.map((r) => (
                  <li
                    key={r}
                    className="grid grid-cols-[auto_1fr] gap-5 text-base lg:text-lg leading-[1.7] text-foreground/80"
                  >
                    <span className="mt-3 w-1.5 h-1.5 rounded-full bg-[#b8865a]" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </FilingBlock>

            <FilingBlock
              icon={<CalendarRange className="w-3.5 h-3.5" />}
              eyebrow="06 — Opening timeline"
              title="From qualification to steady-state."
            >
              <ol className="relative pl-8 space-y-9 lg:space-y-12">
                <span className="absolute top-2 bottom-2 left-2 w-px bg-foreground/15" />
                {filing.timeline.map((step) => (
                  <li key={step.phase} className="relative">
                    <span className="absolute -left-[28px] top-2 w-3 h-3 rounded-full bg-[#b8865a] border-2 border-background" />
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <span className="font-mono text-sm uppercase tracking-[0.22em] ember">
                        {step.phase}
                      </span>
                      <span className="text-muted-foreground text-xs font-mono">
                        {step.window}
                      </span>
                    </div>
                    <p className="text-base lg:text-lg leading-[1.7] text-foreground/80 max-w-[60ch]">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </FilingBlock>

            <FilingBlock
              icon={<Activity className="w-3.5 h-3.5" />}
              eyebrow="07 — LiveOps coverage"
              title="The line stays awake."
            >
              <ul className="grid gap-4 lg:gap-5">
                {filing.liveops.map((l) => (
                  <li
                    key={l}
                    className="flex items-start gap-4 p-5 lg:p-6 border border-foreground/10 bg-foreground/[0.015]"
                  >
                    <Clock className="w-4 h-4 mt-0.5 shrink-0 ember" />
                    <span className="text-base lg:text-lg leading-[1.65] text-foreground/85">
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </FilingBlock>

            <FilingBlock
              icon={<AlertTriangle className="w-3.5 h-3.5" />}
              eyebrow="08 — Risk profile"
              title="Filed plainly, mitigated upstream."
            >
              <ul className="space-y-7 lg:space-y-9">
                {filing.risks.map((r) => (
                  <li key={r.factor}>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                      <span className="font-display text-xl lg:text-2xl tracking-tight">
                        {r.factor}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${
                          r.rating === "Low"
                            ? "bg-foreground/10 text-foreground/70"
                            : r.rating === "Medium"
                              ? "bg-[#b8865a]/20 text-[#d9b079]"
                              : "bg-[#b8865a] text-black"
                        }`}
                      >
                        {r.rating}
                      </span>
                    </div>
                    <p className="text-base leading-[1.7] text-muted-foreground max-w-[64ch]">
                      {r.mitigation}
                    </p>
                  </li>
                ))}
              </ul>
            </FilingBlock>

            <FilingBlock
              icon={<Lock className="w-3.5 h-3.5" />}
              eyebrow="09 — Documentation"
              title="What every qualified seat receives."
            >
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {filing.documentation.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-base leading-[1.65] text-foreground/80"
                  >
                    <FileText className="w-3.5 h-3.5 mt-1 shrink-0 ember" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </FilingBlock>

            {/* Reserve action band */}
            <div id="reserve" className="border-t border-foreground/15 pt-16 lg:pt-20">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Reserve · {filing.code}
              </span>
              <h2 className="mt-6 font-display text-3xl lg:text-5xl tracking-[-0.01em] leading-tight max-w-[24ch]">
                {filing.status === "Reserved"
                  ? "This filing is closed. Reference only."
                  : "Discipline qualifies. Capital follows."}
              </h2>

              {filing.status !== "Reserved" && (
                <div className="mt-10 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:desk@sevetteam.com?subject=Reserve seat · {filing.code}"
                    className="group inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-foreground/90 transition-colors"
                  >
                    Reserve seat · {filing.code}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <Link
                    href="/auditing"
                    className="inline-flex items-center justify-center gap-3 border border-foreground/25 text-foreground font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-foreground/5 transition-colors"
                  >
                    Review the audit layer
                  </Link>
                  <Link
                    href="/magazine/economics-of-access"
                    className="inline-flex items-center justify-center gap-3 text-muted-foreground font-mono text-[11px] uppercase tracking-[0.22em] px-2 h-12 hover:text-foreground transition-colors"
                  >
                    Read the economics →
                  </Link>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>

      {/* Related filings */}
      {related.length > 0 && (
        <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap items-baseline justify-between gap-6 mb-14 lg:mb-20">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Related filings
                </span>
                <h2 className="mt-4 font-display text-3xl lg:text-5xl tracking-[-0.01em]">
                  Other open territories.
                </h2>
              </div>
              <Link
                href="/#marketplace"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors"
              >
                See full market →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {related.map((r) => (
                <RelatedCard key={r.code} f={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterSection />
    </main>
  );
}

function Stat({ label, value, ember }: { label: string; value: string; ember?: boolean }) {
  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      <span
        className={`mt-2 block font-display text-3xl lg:text-4xl tracking-tight ${
          ember ? "ember" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {k}
      </span>
      <span className="text-sm text-foreground text-right">{v}</span>
    </div>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const map: Record<Status, string> = {
    Open: "bg-[#b8865a] text-black",
    Filling: "bg-[#d9b079] text-black",
    "Final seat": "bg-foreground text-background",
    Reserved: "bg-foreground/10 text-muted-foreground",
  };
  return (
    <span className={`font-mono text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${map[status]}`}>
      {status}
    </span>
  );
}

function FilingBlock({
  icon,
  eyebrow,
  title,
  kind = "default",
  children,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  kind?: "default" | "grid" | "prose";
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-5">
        <span className="ember">{icon}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl lg:text-5xl tracking-[-0.01em] leading-tight max-w-[26ch] mb-10 lg:mb-14">
        {title}
      </h2>
      {kind === "grid" ? (
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1 border-t border-foreground/15">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-6 py-5 border-b border-foreground/10">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground leading-relaxed pt-0.5">
        {k}
      </span>
      <span className="text-base text-foreground text-right leading-snug max-w-[60%]">{v}</span>
    </div>
  );
}

function RelatedCard({ f }: { f: Opportunity }) {
  return (
    <Link
      href={`/filing/${f.code}`}
      className="group block border border-foreground/15 p-7 lg:p-8 bg-background hover:bg-foreground/[0.025] transition-colors"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] ember">{f.code}</span>
        <StatusBadge status={f.status} />
      </div>
      <h3 className="font-display text-2xl lg:text-3xl tracking-tight">
        {f.city}, {f.state}
      </h3>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {f.corridor}
      </p>
      <dl className="mt-7 grid grid-cols-3 gap-3">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Capital
          </dt>
          <dd className="mt-1 font-display text-xl">{fmtMoney(f.capital)}</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Payback
          </dt>
          <dd className="mt-1 font-display text-xl">{f.paybackMonths}m</dd>
        </div>
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Seats
          </dt>
          <dd className="mt-1 font-display text-xl">
            {f.seatsFilled}/{f.seatsTotal}
          </dd>
        </div>
      </dl>
      <span className="mt-7 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/65 group-hover:text-foreground transition-colors">
        Open filing
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
