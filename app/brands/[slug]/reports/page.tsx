import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBrand } from "@/lib/brands-data";
import { brandReports } from "@/lib/brand-detailed-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { Download, FileText, ArrowRight, TrendingUp } from "lucide-react";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

interface BrandReportsPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BrandReportsPageProps): Promise<Metadata> {
  const brand = getBrand(params.slug);

  if (!brand) {
    return { title: "Brand Not Found" };
  }

  return {
    title: `${brand.name} Reports & Analytics — H1 2026 Performance`,
    description: `${brand.name} strategic reports, performance data, and operational metrics. ${brand.unitCount} active units, ${brand.deployedCapital} deployed capital.`,
    keywords: [
      brand.name,
      "franchise reports",
      "H1 2026 report",
      "performance metrics",
      `${brand.name} investor`,
      "Ölmez ecosystem",
    ],
    openGraph: {
      title: `${brand.name} Reports & Analytics`,
      description: `${brand.name} strategic reports and performance data.`,
      url: `${baseUrl}/brands/${brand.slug}/reports`,
    },
    alternates: {
      canonical: `${baseUrl}/brands/${brand.slug}/reports`,
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: "olmez" },
    { slug: "shawarmer" },
    { slug: "turkishpide" },
    { slug: "affarem" },
    { slug: "disciplina" },
  ];
}

export default function BrandReportsPage({ params }: BrandReportsPageProps) {
  const brand = getBrand(params.slug);
  const report = brandReports[params.slug];

  if (!brand || !report) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow={`${brand.name} Reports`}
        title="Strategic"
        italicTail="Documentation."
        dek={`Quarterly and annual reports for ${brand.name}. Performance metrics, capital deployment tracking, and operational intelligence.`}
        meta={[
          { label: "Latest Report", value: report.quarter },
          { label: "Active Units", value: report.portfolioMetrics.activeUnits.toString() },
          { label: "Deployed Capital", value: report.portfolioMetrics.deployedCapital },
          { label: "On-Target", value: report.portfolioMetrics.meetsOrExceedsTarget },
        ]}
      />

      {/* Featured Report */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Featured Report
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              Every number explains itself.
            </h2>
          </div>

          <div className="border border-foreground/15 p-8 lg:p-12 hover:bg-foreground/[0.025] transition-colors">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-4 mb-6">
                  <FileText className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      Strategic Report · {report.quarter}
                    </p>
                    <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.005em] mb-3">
                      {report.title}
                    </h3>
                    <p className="text-base leading-[1.6] text-foreground/75 mb-6">
                      {report.executiveSummary.mandate}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                    Strategic Pillars
                  </p>
                  <div className="space-y-4">
                    {report.executiveSummary.pillars.map((pillar) => (
                      <div
                        key={pillar.name}
                        className="border-l-4 pl-6"
                        style={{ borderColor: brand.theme.primary }}
                      >
                        <p className="font-display text-lg tracking-[-0.005em] mb-1">
                          {pillar.name}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                          {pillar.subtitle}
                        </p>
                        <p className="text-sm text-foreground/70 leading-[1.6]">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="space-y-4">
                  <div className="border border-foreground/15 p-6 bg-background">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                      Key Metrics
                    </p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-foreground/60 text-xs">Active Units</p>
                        <p className="font-display text-lg tracking-[-0.005em]">
                          {report.portfolioMetrics.activeUnits}
                        </p>
                      </div>
                      <div>
                        <p className="text-foreground/60 text-xs">Deployed Capital</p>
                        <p className="font-display text-lg tracking-[-0.005em]">
                          {report.portfolioMetrics.deployedCapital}
                        </p>
                      </div>
                      <div>
                        <p className="text-foreground/60 text-xs">Avg Daily Gain</p>
                        <p className="font-display text-lg tracking-[-0.005em]">
                          {report.portfolioMetrics.avgDailyGain}
                        </p>
                      </div>
                      <div>
                        <p className="text-foreground/60 text-xs">Payback Target</p>
                        <p className="font-display text-lg tracking-[-0.005em]">
                          {report.portfolioMetrics.targetPayback}
                        </p>
                      </div>
                      <div>
                        <p className="text-foreground/60 text-xs">On Target</p>
                        <p className="font-display text-lg tracking-[-0.005em]">
                          {report.portfolioMetrics.meetsOrExceedsTarget}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    style={{ backgroundColor: brand.theme.primary }}
                    className="w-full inline-flex items-center justify-center gap-2 text-white px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    Download Full Report
                  </button>

                  <p className="text-center text-xs text-foreground/50">
                    {report.publishedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Performance Tiers */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.015em] mb-6">
            Unit Performance Tiers
          </h2>
          <p className="text-foreground/70 text-base lg:text-lg mb-16 max-w-[55ch]">
            {report.unitPerformanceTiering.description}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/15">
                  <th className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Class
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Daily Gain
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Status
                  </th>
                  <th className="text-left py-4 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Eligibility
                  </th>
                  <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Count
                  </th>
                  <th className="text-right py-4 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    %
                  </th>
                </tr>
              </thead>
              <tbody>
                {report.unitPerformanceTiering.tiers.map((tier, idx) => (
                  <tr
                    key={tier.class}
                    className={`border-b border-foreground/10 ${
                      idx % 2 === 0 ? "bg-background" : "bg-foreground/[0.01]"
                    }`}
                  >
                    <td className="py-4 px-4 font-display text-base">
                      {tier.class}
                    </td>
                    <td className="py-4 px-4">{tier.dailyGainRange}</td>
                    <td className="py-4 px-4 text-foreground/70">{tier.status}</td>
                    <td className="py-4 px-4 text-foreground/70">
                      {tier.expansionEligibility}
                    </td>
                    <td className="py-4 px-4 text-right font-mono">
                      {tier.count}
                    </td>
                    <td className="py-4 px-4 text-right font-mono">
                      {tier.percentageOfPortfolio}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Revenue Layers */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.015em] mb-16">
            Revenue Architecture
          </h2>

          <div className="space-y-4">
            {report.revenueLayers.map((layer) => (
              <div
                key={layer.layer}
                className="grid lg:grid-cols-12 gap-6 border border-foreground/15 p-8 bg-background"
              >
                <div className="lg:col-span-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: brand.theme.primary }}
                  >
                    <span className="font-display text-lg text-white font-bold">
                      {layer.layer}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl tracking-[-0.005em]">
                      {layer.name}
                    </h3>
                    {layer.recurring && (
                      <span className="px-2 h-5 text-[9px] uppercase tracking-[0.1em] border border-foreground/20 inline-flex items-center">
                        Recurring
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/70 leading-[1.6]">
                    {layer.description}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Amount
                  </p>
                  <p className="font-display text-xl tracking-[-0.005em]">
                    {layer.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* H2 Roadmap */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Strategic Roadmap
          </span>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[18ch] mb-8">
            {report.h2Roadmap.title}
          </h2>
          <p className="text-foreground/70 text-base lg:text-lg max-w-[55ch] mb-16">
            {report.h2Roadmap.focus}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {report.h2Roadmap.priorities.map((priority, idx) => (
              <div
                key={priority.initiative}
                className="border border-foreground/15 p-8 bg-background"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: brand.theme.primary }}
                  >
                    <span className="font-display text-sm text-white font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl tracking-[-0.005em]">
                    {priority.initiative}
                  </h3>
                </div>
                <p className="text-sm text-foreground/70 leading-[1.6] mb-6">
                  {priority.description}
                </p>
                <div className="pt-4 border-t border-foreground/10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Target
                  </p>
                  <p className="font-display text-base">{priority.target}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 border border-foreground/15 bg-foreground text-background text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/60 mb-4">
              Strategic Mandate
            </p>
            <p className="font-display text-2xl lg:text-3xl tracking-[-0.005em]">
              "{report.h2Roadmap.mandate}"
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-[60ch] mx-auto text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Core Philosophy
            </span>
            <blockquote className="mt-10 font-display text-3xl md:text-4xl lg:text-5xl tracking-[-0.015em] leading-[1.3] mb-8 italic">
              "{report.corePhilosophy.quote}"
            </blockquote>
            <p className="text-foreground/60 font-mono text-[11px] uppercase tracking-[0.22em]">
              — {report.corePhilosophy.author}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Brand Center
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[18ch] mx-auto mb-8">
            Explore {brand.name}.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/brands/${brand.slug}`}
              style={{ backgroundColor: brand.theme.primary }}
              className="inline-flex items-center justify-center gap-3 text-white font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:opacity-90 transition-opacity"
            >
              Brand Overview
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/brands/${brand.slug}/events`}
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/5 transition-colors"
            >
              Events Calendar
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/brands/${brand.slug}/magazine`}
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/5 transition-colors"
            >
              Magazine
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
