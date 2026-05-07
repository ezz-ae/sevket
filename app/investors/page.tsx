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
    "Strategic investment opportunities across 5 brands. $30.9M deployed capital, 612 active units, 26-month average payback. Real-time visibility through AFFAREM platform.",
  keywords: [
    "franchise investment",
    "restaurant investment",
    "investor relations",
    "Ölmez investments",
    "franchise opportunities",
    "passive income franchise",
    "shawarma franchise investment",
    "gas station franchise",
    "AFFAREM",
  ],
  openGraph: {
    title: "Investor Relations — Ölmez Franchise Systems",
    description:
      "Strategic investment opportunities. 612 active units. 26-month average payback. 100% real-time visibility.",
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
        title={isTurkish ? "Disiplinli" : "Capital Deployment with"}
        italicTail={isTurkish ? "sermaye konuşlandırması." : "Discipline."}
        dek={
          isTurkish
            ? "Gerçek zamanlı operasyon görünürlüğü, yapılandırılmış geri ödeme planları ve disiplinli operatör gelişimiyle desteklenen stratejik franchise yatırımları. Her dolar kendini AFFAREM üzerinden açıklar."
            : "Strategic franchise investments backed by real-time operational visibility, structured payback schedules, and disciplined operator development. Every dollar explains itself through AFFAREM."
        }
        meta={[
          { label: isTurkish ? "Konuşlanan sermaye" : "Deployed Capital", value: investorPortfolio.totalDeployedCapital },
          { label: isTurkish ? "Aktif ünite" : "Active Units", value: investorPortfolio.totalActiveUnits.toString() },
          { label: isTurkish ? "Ort. geri ödeme" : "Avg Payback", value: investorPortfolio.averagePayback },
          { label: isTurkish ? "Başarı oranı" : "Success Rate", value: investorPortfolio.successRate },
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
              { label: "Deployed Capital", value: investorPortfolio.totalDeployedCapital, sub: "Across all brands" },
              { label: "Active Units", value: investorPortfolio.totalActiveUnits.toString(), sub: "Operating worldwide" },
              { label: "Brand Portfolio", value: investorPortfolio.totalBrands.toString(), sub: "Diversified ecosystem" },
              { label: "Markets", value: investorPortfolio.marketsServed.toString(), sub: "Countries served" },
              { label: "Average Payback", value: investorPortfolio.averagePayback, sub: "Capital recovery" },
              { label: "Success Rate", value: investorPortfolio.successRate, sub: "Units exceeding target" },
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
            {isTurkish ? "Disiplinli sermaye. Disiplinli getiri." : "Disciplined capital. Disciplined returns."}
          </h2>
          <p className="text-xl text-foreground/70 max-w-[60ch] mx-auto mb-12">
            {isTurkish
              ? "Yatırım ekibimizle stratejik bilgilendirme planlayın. Kapsamlı durum tespiti paketi ve kurucu Soru-Cevap erişimi alın."
              : "Schedule a strategic briefing with our investment team. Receive comprehensive due diligence package and direct access to founder Q&A."}
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
