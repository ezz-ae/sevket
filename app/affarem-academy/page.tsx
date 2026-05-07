import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, MonitorPlay, Users } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { formatUsd, siteMetrics } from "@/lib/site-metrics";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "AFFAREM Academy — Ölmez",
  description: "AFFAREM Academy learning route: paper account, family accounts, work reports, learning rewards, and AFFAREM Connect.",
  alternates: { canonical: `${baseUrl}/affarem-academy` },
};

export default function AffaremAcademyPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <Navigation forceScrolled />
      <section className="border-t border-white/10 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#e9c092]">AFFAREM Academy</span>
          <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
            Learning is a route inside AFFAREM.
          </h1>
          <p className="mt-7 max-w-[62ch] text-base leading-[1.85] text-white/66">
            The Academy explains process, reporting, documents, risk language, and simulated account activity before a learner enters real exposure.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Paper Account", `${formatUsd(siteMetrics.paperAccountMonthlyFee)}/month. ${formatUsd(siteMetrics.paperAccountSimulationBalance)} simulated balance. No withdrawal. No ownership. No return claim.`, MonitorPlay],
            ["Family Accounts", "Sponsor account plus learner accounts. Parent or family can monitor learning, reports, score, and simulated activity.", Users],
            ["Work Reports", "Used by hospitality students, business students, and former managers to document learning and real operating observation.", BookOpen],
          ].map(([title, body, Icon]) => {
            const TypedIcon = Icon as typeof BookOpen;
            return (
              <article key={title as string} className="border border-white/10 bg-white/[0.03] p-6">
                <TypedIcon className="h-5 w-5 text-[#e9c092]" />
                <h2 className="mt-5 font-display text-3xl tracking-[-0.03em]">{title as string}</h2>
                <p className="mt-4 text-sm leading-[1.85] text-white/64">{body as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-2">
          <article className="border border-white/10 bg-black/30 p-7">
            <h2 className="font-display text-4xl tracking-[-0.04em]">Learning rewards</h2>
            <p className="mt-5 text-sm leading-[1.85] text-white/64">
              Internal rewards, badges, participation units, or reward shares may be available only when terms and legal structure allow them. Academy activity does not create ownership or a return claim by itself.
            </p>
          </article>
          <article className="border border-white/10 bg-black/30 p-7">
            <h2 className="font-display text-4xl tracking-[-0.04em]">AFFAREM Connect</h2>
            <p className="mt-5 text-sm leading-[1.85] text-white/64">
              Connect covers calls, advisor sessions, family review, onboarding, and branch design sessions. Every session should leave a record: topic, account, status, and next action.
            </p>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-[1400px]">
          <Link href="/accounts-documentation" className="inline-flex h-12 items-center gap-3 bg-[#b8865a] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
            Review account levels
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
