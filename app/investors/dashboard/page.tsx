import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CreditCard,
  Download,
  FileText,
  KeyRound,
  Landmark,
  LifeBuoy,
  MessageSquare,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { getRequestLocale } from "@/lib/server-locale";
import { withLocale } from "@/lib/site-locale";
import {
  accountChecklist,
  dashboardAccessMatrix,
  dashboardGroups,
  dashboardMetricCards,
  distributionRows,
  walletRails,
} from "@/lib/investor-dashboard-data";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "AFFAREM Investor Dashboard — Ölmez",
  description:
    "Investor dashboard access for AFFAREM reporting, wallet settings, payout history, documents, support tickets, risk notices, and branch or pool performance.",
  openGraph: {
    title: "AFFAREM Investor Dashboard — Ölmez",
    description:
      "One controlled account for investor reporting, wallet settings, documents, support, and branch or pool performance.",
    url: `${baseUrl}/investors/dashboard`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/investors/dashboard`,
  },
};

const groupIcons = [KeyRound, WalletCards, FileText, MessageSquare];
const accessIcons = [BadgeCheck, Landmark, CreditCard, Building2, LifeBuoy, Download];

export default async function InvestorDashboardPage() {
  const locale = await getRequestLocale();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <section className="relative overflow-hidden border-b border-foreground/10 bg-[#070707] px-6 pb-20 pt-32 text-white lg:px-12 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(184,134,90,0.18),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.05),transparent_42%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

        <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55">
              <span className="h-px w-10 bg-[#b8865a]" />
              AFFAREM investor access
            </span>
            <h1 className="mt-8 max-w-[14ch] font-display text-[clamp(3.1rem,6.4vw,6.6rem)] leading-[0.94] tracking-[-0.04em]">
              One account for the business behind the branch.
            </h1>
            <p className="mt-8 max-w-[62ch] text-base leading-[1.75] text-white/72 md:text-lg">
              The investor dashboard connects AFFAREM reporting, wallet settings, payout history,
              documents, messages, support, and branch or pool performance. It is built for control
              before scale.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hello@olmez.us?subject=AFFAREM%20Investor%20Dashboard%20Access"
                className="inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                Request AFFAREM access
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <Link
                href={withLocale("/investor-responsibility", locale)}
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/18 bg-black/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:border-white/35 hover:bg-white/6"
              >
                Investor responsibility
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {dashboardMetricCards.map((card) => (
              <article key={card.label} className="border border-white/12 bg-black/36 p-6 backdrop-blur-md">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#e7bc8b]">
                  {card.label}
                </p>
                <p className="mt-4 font-display text-2xl tracking-[-0.03em] text-white">
                  {card.value}
                </p>
                <p className="mt-3 text-sm leading-[1.7] text-white/66">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Inside the account
            </span>
            <h2 className="mt-6 max-w-[11ch] font-display text-4xl leading-[1] tracking-[-0.02em] md:text-6xl">
              Less searching. More control.
            </h2>
            <p className="mt-7 max-w-[52ch] text-base leading-[1.75] text-foreground/68">
              This is where an investor sees the account file, money movement, branch signals,
              notices, and support trail without chasing separate threads.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {dashboardAccessMatrix.map((group, index) => {
              const Icon = accessIcons[index % accessIcons.length];
              return (
                <article key={group.group} className="border border-foreground/12 bg-foreground/[0.015] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl tracking-[-0.03em]">{group.group}</h3>
                    <Icon className="h-5 w-5 text-[#b8865a]" />
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="border border-foreground/12 bg-background px-3 py-2 text-xs leading-none text-foreground/68"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10 bg-foreground/[0.015] px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Operating modules
              </span>
              <h2 className="mt-6 max-w-[13ch] font-display text-4xl leading-[1] tracking-[-0.02em] md:text-6xl">
                Built around investor responsibility.
              </h2>
            </div>
            <p className="max-w-[68ch] text-base leading-[1.75] text-foreground/68 lg:justify-self-end">
              An investor does not only enter the return side of the business. They enter the
              responsibility side first. AFFAREM keeps that responsibility visible.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {dashboardGroups.map((group, index) => {
              const Icon = groupIcons[index % groupIcons.length];
              return (
                <article key={group.title} className="border border-foreground/12 bg-background p-7 lg:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9b744f]">
                        {group.eyebrow}
                      </p>
                      <h3 className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.03em]">
                        {group.title}
                      </h3>
                    </div>
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-[#b8865a]" />
                  </div>
                  <p className="mt-5 text-sm leading-[1.75] text-foreground/64">{group.summary}</p>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div key={item.title} className="border border-foreground/10 bg-foreground/[0.015] p-4">
                        <p className="font-display text-lg tracking-[-0.02em]">{item.title}</p>
                        <p className="mt-2 text-sm leading-[1.65] text-foreground/62">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border border-foreground/12 bg-background p-7 lg:p-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Distribution history
            </span>
            <h2 className="mt-5 max-w-[13ch] font-display text-4xl leading-[1] tracking-[-0.02em] md:text-6xl">
              Twice-weekly review, with the full record.
            </h2>
            <p className="mt-7 max-w-[68ch] text-base leading-[1.75] text-foreground/68">
              Eligible net distributions are reviewed and processed twice weekly after sales
              reconciliation, operating costs, reserves, fees, and applicable deductions.
            </p>

            <div className="mt-8 divide-y divide-foreground/10 border border-foreground/10">
              {distributionRows.map((row) => (
                <div key={row.label} className="grid gap-3 p-5 md:grid-cols-4 md:items-center">
                  <p className="font-display text-xl tracking-[-0.02em]">{row.label}</p>
                  <p className="text-sm text-foreground/62">{row.period}</p>
                  <p className="text-sm text-foreground/62">{row.status}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9b744f] md:text-right">
                    {row.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-foreground/12 bg-[#070707] p-7 text-white lg:p-9">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/52">
              Ölmez Investor Wallet
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[1] tracking-[-0.02em] md:text-5xl">
              Future distribution layer.
            </h2>
            <p className="mt-6 text-sm leading-[1.75] text-white/68">
              The Ölmez Investor Wallet is designed as a future distribution layer where eligible
              investor payouts may be received, tracked, transferred, or accessed through approved
              banking, prepaid card, or digital wallet partners.
            </p>
            <p className="mt-5 text-xs leading-[1.7] text-white/50">
              Subject to provider approval, licensing, KYC/AML checks, card-program approval,
              banking partner terms, country-specific regulation, and market availability.
            </p>

            <div className="mt-8 grid gap-3">
              {walletRails.map((rail) => (
                <article key={rail.name} className="border border-white/12 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-display text-xl tracking-[-0.02em]">{rail.name}</p>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#e7bc8b]">
                      {rail.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-[1.65] text-white/62">{rail.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Account readiness
            </span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl leading-[1] tracking-[-0.02em] md:text-6xl">
              Before access becomes active.
            </h2>
            <p className="mt-7 max-w-[58ch] text-base leading-[1.75] text-foreground/68">
              AFFAREM access is prepared after the investor file is usable: identity, agreement,
              payout rail, tax profile, risk acknowledgement, and selected distribution setting.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {accountChecklist.map((item) => (
              <div key={item} className="flex items-center gap-4 border border-foreground/12 bg-foreground/[0.015] p-5">
                <CheckCircle2 className="h-5 w-5 text-[#b8865a]" />
                <p className="font-display text-xl tracking-[-0.02em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-foreground/[0.015] px-6 py-20 text-center lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <ShieldCheck className="mx-auto h-8 w-8 text-[#b8865a]" />
          <h2 className="mt-6 font-display text-4xl leading-[1] tracking-[-0.02em] md:text-6xl">
            Access follows review.
          </h2>
          <p className="mx-auto mt-6 max-w-[62ch] text-base leading-[1.75] text-foreground/68">
            The dashboard can support starter investors, junior investors, branch investors,
            operators, and manager-hired models. The visible modules depend on package, position,
            country, and approved account permissions.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@olmez.us?subject=AFFAREM%20Investor%20Dashboard%20Access"
              className="inline-flex h-12 items-center justify-center gap-3 bg-foreground px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-foreground/90"
            >
              Request dashboard access
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href={withLocale("/investors", locale)}
              className="inline-flex h-12 items-center justify-center gap-3 border border-foreground/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/78 transition-colors hover:bg-foreground/5"
            >
              Back to investor relations
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
