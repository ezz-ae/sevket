import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  Target,
  TrendingUp,
  Shield,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle2,
  WalletCards,
  FileText,
  MessageSquare,
} from "lucide-react";
import {
  investorPortfolio,
  investmentTiers,
  investorBenefits,
  investmentProcess,
} from "@/lib/investor-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Investor Relations — Ölmez Franchise Systems",
  description:
    "Strategic investment access across the Ölmez platform with AFFAREM reporting, branch and pool visibility, responsibility standards, and compliance-safe distribution language.",
  keywords: [
    "franchise investment",
    "restaurant investment",
    "investor relations",
    "Ölmez investments",
    "franchise opportunities",
    "shawarma franchise investment",
    "gas station franchise",
    "AFFAREM",
  ],
  openGraph: {
    title: "Investor Relations — Ölmez Franchise Systems",
    description:
      "Strategic investment access with AFFAREM reporting, controlled branch visibility, and compliance-safe distribution expectations.",
    url: `${baseUrl}/investors`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/investors`,
  },
};

const iconMap: Record<string, typeof Eye> = {
  Eye,
  Target,
  TrendingUp,
  Shield,
  Calendar,
  Layers,
};

const dashboardHighlights = [
  {
    title: "AFFAREM account",
    detail: "Investor profile, system agreement, branch or pool visibility, documents, and account status.",
    icon: Shield,
  },
  {
    title: "Wallet and payouts",
    detail: "Payout details, twice-weekly distribution history, bank rail, prepaid wallet concept, and crypto connection review.",
    icon: WalletCards,
  },
  {
    title: "Documents and tax",
    detail: "KYC, identity, personal details, tax filing, statements, downloads, and adviser-ready records.",
    icon: FileText,
  },
  {
    title: "Messages and support",
    detail: "AFFAREM messages, live chat, support tickets, risk notices, and account communication history.",
    icon: MessageSquare,
  },
];

export default async function InvestorsPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Yatırımcı ilişkileri" : "Investor Relations"}
        title={isTurkish ? "Disiplinli" : "Investment access with"}
        italicTail={isTurkish ? "yatırım erişimi." : "operating control."}
        dek={
          isTurkish
            ? "Gerçek zamanlı operasyon görünürlüğü, yapılandırılmış geri ödeme planları ve disiplinli operatör gelişimiyle desteklenen stratejik franchise yatırımları. Her dolar kendini AFFAREM üzerinden açıklar."
            : "Strategic food-business investments backed by real-time operating visibility, responsibility standards, and disciplined reporting. Every investor must understand the system before reading the return side."
        }
        meta={[
          { label: isTurkish ? "İzlenen sermaye" : "Tracked Capital", value: investorPortfolio.totalDeployedCapital },
          { label: isTurkish ? "Aktif ünite" : "Active Units", value: investorPortfolio.totalActiveUnits.toString() },
          { label: isTurkish ? "Raporlama" : "Reporting", value: "AFFAREM" },
          { label: isTurkish ? "Dağıtım ritmi" : "Distribution rhythm", value: "Twice weekly review" },
        ]}
      />

      {/* Portfolio Stats */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Portföy görünümü" : "Portfolio Overview"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              {isTurkish ? "Gerçek rakamlar. Gerçek varlıklar." : "Real numbers. Real assets."}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Tracked Capital", value: investorPortfolio.totalDeployedCapital, sub: "Across all brands" },
              { label: "Active Units", value: investorPortfolio.totalActiveUnits.toString(), sub: "Operating worldwide" },
              { label: "Brand Portfolio", value: investorPortfolio.totalBrands.toString(), sub: "Diversified ecosystem" },
              { label: "Markets", value: investorPortfolio.marketsServed.toString(), sub: "Countries served" },
              { label: "Projected Payback", value: investorPortfolio.averagePayback, sub: "Planning target, not guaranteed" },
              { label: "Units At Target", value: investorPortfolio.successRate, sub: "Operational performance signal" },
              { label: "Live Monitoring", value: investorPortfolio.livestreamingUnits, sub: "Real-time visibility" },
              { label: "Daily Gain Avg", value: investorPortfolio.averageDailyGain, sub: "Per unit" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-foreground/15 p-8 bg-background"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  {stat.label}
                </p>
                <p className="font-display text-3xl lg:text-4xl tracking-[-0.015em] mb-2">
                  {stat.value}
                </p>
                <p className="text-xs text-foreground/60">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section id="tiers" className="relative scroll-mt-24 border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Yatırım katmanları" : "Investment Tiers"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[22ch]">
              {isTurkish ? "Dört giriş noktası. Tek felsefe." : "Four entry points. One philosophy."}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {investmentTiers.map((tier) => (
              <div
                key={tier.id}
                className="relative border border-foreground/15 p-10 bg-background hover:bg-foreground/[0.02] transition-colors"
              >
                <div
                  className="absolute top-0 left-0 w-2 h-full"
                  style={{ backgroundColor: tier.color }}
                />

                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.18em] mb-2"
                      style={{ color: tier.color }}
                    >
                      {tier.targetInvestor}
                    </p>
                    <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.005em] mb-2">
                      {tier.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] px-3 py-1 border border-foreground/20">
                    {tier.riskLevel} Risk
                  </span>
                </div>

                <p className="text-foreground/70 mb-8 leading-[1.6]">
                  {tier.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-foreground/10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-2">
                      Investment Range
                    </p>
                    <p className="font-display text-xl tracking-[-0.005em]">
                      {tier.minimum} – {tier.maximum}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-2">
                      Payback Target
                    </p>
                    <p className="font-display text-xl tracking-[-0.005em]">
                      {tier.paybackTarget}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-2">
                      Return Type
                    </p>
                    <p className="text-base">{tier.typeOfReturn}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-2">
                      Risk Profile
                    </p>
                    <p className="text-base">{tier.riskLevel}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                    Tier Benefits
                  </p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-sm"
                      >
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0 mt-0.5"
                          style={{ color: tier.color }}
                        />
                        <span className="text-foreground/75">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={withLocale("/opportunities", locale)}
                  className="inline-flex items-center justify-center gap-2 text-white px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity w-full"
                  style={{ backgroundColor: tier.color }}
                >
                  {isTurkish ? "Fırsatları incele" : "Explore Opportunities"}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Benefits */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Yatırımcı ayrıcalıkları" : "Investor Privileges"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              {isTurkish ? "Şeffaf sermaye için kuruldu." : "Built for transparent capital."}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investorBenefits.map((benefit) => {
              const IconComponent = iconMap[benefit.icon] || Eye;
              return (
                <div
                  key={benefit.title}
                  className="border border-foreground/15 p-8 bg-foreground/[0.015]"
                >
                  <div className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-display text-xl tracking-[-0.005em] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-[1.6]">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                AFFAREM investor dashboard
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[13ch]">
                One account for the business behind the branch.
              </h2>
              <p className="mt-8 max-w-[54ch] text-base leading-[1.85] text-foreground/68">
                AFFAREM access brings investor identity, payout settings, documents, support, risk notices, branch or pool performance, and distribution history into one controlled dashboard.
              </p>
              <p className="mt-5 max-w-[54ch] text-sm leading-[1.75] text-foreground/56">
                The wallet layer is framed as a future integration with approved banking, prepaid card, digital wallet, and crypto providers. It is subject to licensing, provider approval, and market availability.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={withLocale("/investors/dashboard", locale)}
                  className="inline-flex h-12 items-center justify-center gap-3 bg-foreground px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-colors hover:bg-foreground/90"
                >
                  Open Dashboard
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href={withLocale("/investor-responsibility", locale)}
                  className="inline-flex h-12 items-center justify-center gap-3 border border-foreground/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/78 transition-colors hover:bg-foreground/5"
                >
                  Investor Responsibility
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {dashboardHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="border border-foreground/12 bg-background p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-2xl tracking-[-0.03em] text-foreground">
                        {item.title}
                      </h3>
                      <Icon className="h-5 w-5 text-[#b8865a]" />
                    </div>
                    <p className="mt-4 text-sm leading-[1.7] text-foreground/64">
                      {item.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Yatırım yolculuğu" : "Investment Journey"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              {isTurkish ? "Altı yapılandırılmış adım." : "Six structured steps."}
            </h2>
          </div>

          <div className="space-y-6">
            {investmentProcess.map((step) => (
              <div
                key={step.step}
                className="grid lg:grid-cols-12 gap-6 lg:gap-12 border border-foreground/15 p-8 lg:p-10 bg-background"
              >
                <div className="lg:col-span-1">
                  <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center">
                    <span className="font-display text-2xl text-background font-bold">
                      {step.step}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.005em] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-foreground/70 leading-[1.6] text-base">
                    {step.description}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Duration
                  </p>
                  <p className="font-display text-xl tracking-[-0.005em]">
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {isTurkish ? "Yatırıma başlayın" : "Begin Your Investment"}
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch] mx-auto mb-8">
            {isTurkish ? "Disiplinli sermaye. Net sorumluluk." : "Disciplined capital. Clear responsibility."}
          </h2>
          <p className="text-xl text-foreground/70 max-w-[60ch] mx-auto mb-12">
            {isTurkish
              ? "Yatırım ekibimizle stratejik bilgilendirme planlayın. Kapsamlı durum tespiti paketi ve kurucu Soru-Cevap erişimi alın."
              : "Schedule a strategic briefing with the investment desk. Review responsibility, risk language, dashboard access, and the relevant documents before choosing an opportunity."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={withLocale("/opportunities", locale)}
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/90 transition-colors"
            >
              {isTurkish ? "Fırsatları gör" : "View Opportunities"}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={withLocale("/contact", locale)}
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 text-foreground font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/5 transition-colors"
            >
              {isTurkish ? "Yatırım ekibiyle iletişime geç" : "Contact Investment Team"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
