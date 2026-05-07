import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { JuniorCalculator } from "@/components/investors/junior-calculator";
import { olmezBrandAssets, shawarmaTimeAssets } from "@/lib/olmez-brand-assets";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Junior Investor Program — Ölmez / AFFAREM",
  description:
    "Junior Investor Pools let new investors enter a shared pool of 50 Shawerma Time restaurant units before applying for larger opportunities. $1K–$12K, 6-month subscription, twice-weekly distribution.",
  alternates: { canonical: `${baseUrl}/junior-investor-program` },
  openGraph: {
    title: "Junior Investor Program — Ölmez / AFFAREM",
    description: "Start inside the system before choosing a branch. $1K–$12K starter pool with twice-weekly distribution.",
    url: `${baseUrl}/junior-investor-program`,
    type: "website",
  },
};

export default function JuniorInvestorProgramPage() {
  return (
    <main
      className="relative min-h-screen text-white"
      style={{ background: "linear-gradient(180deg, #170f0b 0%, #050505 44%, #111511 100%)" }}
    >
      <Navigation forceScrolled />

      <section className="relative overflow-hidden border-t border-white/10 pt-40 pb-20 lg:pt-56 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src={shawarmaTimeAssets.counterHouston.src}
            alt={shawarmaTimeAssets.counterHouston.alt}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/70 to-black/30" />

        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:px-12">
          <div>
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
              <span className="h-px w-10 bg-[#b8865a]" />
              Junior Investor Program
            </span>
            <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em]">
              Start inside the system before choosing a branch.
            </h1>
            <p className="mt-7 max-w-[60ch] text-base leading-[1.85] text-white/72 md:text-lg">
              Junior Investor Pools allow new investors to enter a shared pool of 50 Shawerma Time restaurant units, follow the reporting rhythm, receive eligible distributions, and understand how AFFAREM works before applying for larger opportunities.
            </p>
            <p className="mt-5 max-w-[58ch] font-display text-2xl leading-[1.35] tracking-[-0.03em] text-white">
              This is not the final investment stage. It is the learning stage with real reporting.
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
            ["Pool entry", "$1,000 – $12,000"],
            ["Maximum package", "$12,000"],
            ["Subscription period", "6 months"],
            ["Branch exposure", "50-unit pool"],
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
              The Junior Program is strongly recommended for investors with limited managerial or food-business experience. It gives them a controlled view of reporting, distribution rhythm, and operating language before applying for a branch-specific position.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "No penalty for early closure.",
              "Investor may exit after at least 2 distributions, approximately one week.",
              "Early exit may reduce priority or eligibility for future mega opportunities.",
              "Junior investors are not investing in one particular restaurant.",
              "Eligible net distributions are reviewed and processed twice weekly after sales reconciliation, operating costs, reserves, fees, and applicable deductions.",
              "All projections are estimated, not guaranteed, and based on pool performance.",
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
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              AFFAREM rhythm
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
              Learn the reporting system before the branch decision.
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/66">
              A junior investor learns account access, distribution notices, risk language, document requests, and basic pool reporting without entering a full unit obligation.
            </p>
          </div>
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.images.revenuePresentation.src}
              alt={olmezBrandAssets.images.revenuePresentation.alt}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
