import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileWarning, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { allocationOptions, riskLevels } from "@/lib/due-diligence-data";
import { formatUsd, siteMetrics } from "@/lib/site-metrics";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Risk Management Center — Ölmez",
  description:
    "How Ölmez reviews account-level risk, separates junior entry from senior opportunities, handles regulatory holds, and defines allocation options.",
  alternates: { canonical: `${baseUrl}/risk-management` },
};

export default function RiskManagementPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <Navigation forceScrolled />

      <section className="border-t border-white/10 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#e9c092]">Risk Management Center</span>
            <h1 className="mt-7 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
              Risk is reviewed before access increases.
            </h1>
            <p className="mt-7 max-w-[62ch] text-base leading-[1.85] text-white/68">
              Ölmez separates entry accounts from senior opportunities. Entry users are limited, reviewed, and protected by rules. Senior opportunities carry real operating and market risk.
            </p>
          </div>
          <div className="border border-white/10 bg-black/40 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Junior first month", `${formatUsd(siteMetrics.juniorLevel1Min)}-${formatUsd(siteMetrics.juniorLevel1Max)}`],
                ["Junior full cap", formatUsd(siteMetrics.juniorLevel2Max)],
                ["Junior maximum", `${siteMetrics.juniorMaxMonths} months`],
                ["Qualified learning cap", formatUsd(siteMetrics.qualifiedLearningFirstMonthMax)],
              ].map(([label, value]) => (
                <div key={label} className="border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">{label}</p>
                  <p className="mt-3 font-display text-3xl tracking-[-0.03em]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="border border-white/10 bg-white/[0.03] p-6">
              <ShieldCheck className="h-5 w-5 text-[#e9c092]" />
              <h2 className="mt-5 font-display text-3xl tracking-[-0.03em]">Entry Policy</h2>
              <p className="mt-4 text-sm leading-[1.8] text-white/64">
                Junior entry is for new investors only. The first month is capped, behavior is reviewed, and access expands only when the account record supports it.
              </p>
            </article>
            <article className="border border-white/10 bg-white/[0.03] p-6">
              <FileWarning className="h-5 w-5 text-[#e9c092]" />
              <h2 className="mt-5 font-display text-3xl tracking-[-0.03em]">Senior Opportunity</h2>
              <p className="mt-4 text-sm leading-[1.8] text-white/64">
                Senior opportunities have separate risk files, restricted access, no junior guarantee, and real exposure to market, operating, staffing, and regulatory conditions.
              </p>
            </article>
            <article className="border border-white/10 bg-white/[0.03] p-6">
              <FileWarning className="h-5 w-5 text-[#e9c092]" />
              <h2 className="mt-5 font-display text-3xl tracking-[-0.03em]">Regulatory Holding</h2>
              <p className="mt-4 text-sm leading-[1.8] text-white/64">
                A state, market, branch group, or opportunity may be paused when local rules, documents, banking, tax, permits, or disclosures require review.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px] overflow-hidden border border-white/10">
          <div className="grid grid-cols-4 bg-white/[0.06] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
            <span>Account</span>
            <span>Access</span>
            <span>Risk</span>
            <span>Next record</span>
          </div>
          {riskLevels.map((item) => (
            <div key={item.account} className="grid grid-cols-1 gap-3 border-t border-white/10 px-5 py-5 text-sm text-white/68 md:grid-cols-4">
              <strong className="font-display text-xl tracking-[-0.02em] text-white">{item.account}</strong>
              <span>{item.access}</span>
              <span>{item.risk}</span>
              <span>{item.next}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">Junior and learning rules</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em]">Entry must stay narrow until behavior is known.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              `First month: ${formatUsd(siteMetrics.juniorLevel1Min)}-${formatUsd(siteMetrics.juniorLevel1Max)}.`,
              `Full cap: ${formatUsd(siteMetrics.juniorLevel2Max)} after proof.`,
              `Maximum: ${siteMetrics.juniorMaxMonths} months.`,
              "New investors only.",
              `Minimum ${siteMetrics.juniorGuaranteePercent}% guarantee only under signed Junior Program terms. It is not a public return claim.`,
              `Qualified learning entry: hospitality students, business students, and former managerial staff in good standing; first month max ${formatUsd(siteMetrics.qualifiedLearningFirstMonthMax)}; approved work-report bonus ${siteMetrics.workReportBonusPercent}%.`,
            ].map((rule) => (
              <div key={rule} className="border border-white/10 bg-black/30 p-5 text-sm leading-[1.75] text-white/66">
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">Allocation options</span>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {allocationOptions.map((option) => (
                <div key={option} className="border border-white/10 bg-white/[0.03] p-5 font-display text-2xl tracking-[-0.03em]">
                  {option}
                </div>
              ))}
            </div>
          </div>
          <div className="border border-white/10 bg-black/36 p-7">
            <h2 className="font-display text-4xl tracking-[-0.04em]">Full risk statement</h2>
            <p className="mt-6 text-sm leading-[1.85] text-white/64">
              Ölmez opportunities involve food-business, market, operator, staffing, supply, lease, tax, regulatory, and execution risk. Projections are planning cases, not commitments. Eligible distributions depend on actual performance, reconciliation, reserves, fees, deductions, account checks, and applicable rules. Access may be limited, paused, reduced, reallocated, or reviewed when account behavior, documents, market conditions, or local rules require it.
            </p>
            <Link href="/accounts-documentation" className="mt-8 inline-flex h-11 items-center gap-3 bg-[#b8865a] px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
              Review account documentation
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
