import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { JuniorCalculator } from "@/components/investors/junior-calculator";
import { formatUsd, siteMetrics } from "@/lib/site-metrics";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Junior Investor Program — Ölmez / AFFAREM",
  description:
    "Junior Investor Pools let new investors enter a controlled pool before applying for larger opportunities. Level 1, Level 2, account review, early exit, and risk rules.",
  alternates: { canonical: `${baseUrl}/junior-investor-program` },
  openGraph: {
    title: "Junior Investor Program — Ölmez / AFFAREM",
    description: "Start inside the system before choosing a branch. Level 1 and Level 2 junior entry with account review.",
    url: `${baseUrl}/junior-investor-program`,
    type: "website",
  },
};

export default function JuniorInvestorProgramPage() {
  return (
    <main
      className="relative min-h-screen bg-[#060606] text-white"
    >
      <Navigation forceScrolled />

      <section className="border-t border-white/10 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
              <span className="h-px w-10 bg-[#b8865a]" />
              Junior Investor Program
            </span>
            <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em]">
              Start inside the system before choosing a branch.
            </h1>
            <p className="mt-7 max-w-[60ch] text-base leading-[1.85] text-white/72 md:text-lg">
              Junior Investor Pools allow new investors to enter a controlled pool, follow the reporting rhythm, receive eligible distributions when terms allow, and understand how AFFAREM works before applying for larger opportunities.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#calculator"
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                Start with $1,000
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:investors@olmez.us?subject=Junior%20Investor%20Account"
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/16 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/34 hover:text-white"
              >
                Open Junior Investor Account
              </Link>
            </div>
          </div>

          <div id="calculator" className="scroll-mt-28">
            <JuniorCalculator />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-12">
          {[
            ["Junior Level 1", `${formatUsd(siteMetrics.juniorLevel1Min)}-${formatUsd(siteMetrics.juniorLevel1Max)} first month`],
            ["Junior Level 2", `Up to ${formatUsd(siteMetrics.juniorLevel2Max)} after review`],
            ["Maximum period", `${siteMetrics.juniorMaxMonths} months`],
            ["Entry rule", "New investors only"],
          ].map(([label, value]) => (
            <article key={label} className="border border-white/10 bg-black/24 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">{label}</p>
              <p className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              Rules
            </span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
              Low friction does not mean no responsibility.
            </h2>
            <p className="mt-8 max-w-[54ch] text-sm leading-[1.85] text-white/64">
              The Junior Program is for new investors who need to prove understanding before larger access. It tests account behavior, document discipline, risk language, distribution understanding, and response quality.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Level 1 is limited to first-month entry exposure.",
              "Level 2 requires review and proof before the full cap.",
              "Upgrade requires learning basics, documents, risk quiz, distribution understanding, and account review.",
              "Early exit is allowed under terms and may affect priority for larger opportunities.",
              "Eligible net distributions are reviewed and processed twice weekly after sales reconciliation, operating costs, reserves, fees, and applicable deductions.",
              `Minimum ${siteMetrics.juniorGuaranteePercent}% guarantee applies only under signed Junior Program terms. It is not available to current investors and is not a public return claim.`,
            ].map((rule) => (
              <article key={rule} className="border border-white/10 bg-black/24 p-5">
                <CheckCircle2 className="h-4 w-4 text-[#b8865a]" />
                <p className="mt-4 text-sm leading-[1.75] text-white/68">{rule}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              Document route
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
              Junior access is still documented access.
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/66">
              A junior investor learns account access, distribution notices, risk language, document requests, and basic pool reporting without entering a full unit obligation.
            </p>
          </div>
          <div className="grid gap-4">
            {["Signed Junior Program terms", "Risk acknowledgment", "Distribution understanding", "Account review note"].map((doc) => (
              <div key={doc} className="flex items-center gap-4 border border-white/10 bg-black/24 p-5">
                <FileText className="h-5 w-5 text-[#b8865a]" />
                <span className="text-sm text-white/70">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
