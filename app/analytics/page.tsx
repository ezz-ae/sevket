import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { RevenueChart } from "@/components/analytics/revenue-chart";
import { GrowthMetrics } from "@/components/analytics/growth-metrics";
import { UnitEconomicsChart } from "@/components/analytics/unit-economics";
import { GeographicDistribution } from "@/components/analytics/geographic-distribution";
import { InvestorReturns } from "@/components/analytics/investor-returns";
import { MetricsGrid } from "@/components/analytics/metrics-grid";
import { OperationalMetrics } from "@/components/analytics/operational-metrics";
import { MarketAnalysis } from "@/components/analytics/market-analysis";

export const metadata: Metadata = {
  title: "Statistics & Business Analysis — Ölmez",
  description:
    "Comprehensive business analytics, financial metrics, and operational data for Ölmez restaurant infrastructure platform.",
};

export default function AnalyticsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow="Business Intelligence"
        title="Statistics & Business"
        italicTail="Analysis."
        dek="Real-time performance metrics, unit economics, and market analysis. Data-driven insights into the Ölmez infrastructure network."
        meta={[
          { label: "Data Updated", value: "May 2026" },
          { label: "Network Size", value: "147 Units" },
          { label: "Territories", value: "12" },
          { label: "AUM", value: "$18.2M" },
        ]}
      />

      {/* Key Metrics Grid */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              At a glance
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              Key Performance Indicators.
            </h2>
          </div>

          <MetricsGrid />
        </div>
      </section>

      {/* Revenue Analysis */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Financial performance
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em] leading-[1.0]">
              Revenue & Growth Trajectory.
            </h2>
          </div>

          <RevenueChart />
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Network expansion
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em] leading-[1.0]">
              Unit Growth & Market Penetration.
            </h2>
          </div>

          <GrowthMetrics />
        </div>
      </section>

      {/* Unit Economics */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Economics
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em] leading-[1.0]">
              Unit-Level Economics & Margins.
            </h2>
          </div>

          <UnitEconomicsChart />
        </div>
      </section>

      {/* Geographic Distribution */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Market coverage
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em] leading-[1.0]">
              Geographic Distribution & Territory Growth.
            </h2>
          </div>

          <GeographicDistribution />
        </div>
      </section>

      {/* Operational Metrics */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Operations
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em] leading-[1.0]">
              Operational Performance Metrics.
            </h2>
          </div>

          <OperationalMetrics />
        </div>
      </section>

      {/* Investor Returns */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Capital reporting
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em] leading-[1.0]">
              Investor Reporting & Capital Allocation.
            </h2>
          </div>

          <InvestorReturns />
        </div>
      </section>

      {/* Market Analysis */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Market research
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em] leading-[1.0]">
              Market Analysis & Competitive Positioning.
            </h2>
          </div>

          <MarketAnalysis />
        </div>
      </section>

      {/* Summary Stats */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                label: "Average Unit Volume",
                value: "$847K",
                subtitle: "Annual revenue per location",
              },
              {
                label: "Capital Recovery",
                value: "30 months",
                subtitle: "Standard payback period",
              },
              {
                label: "Investor Seats",
                value: "4",
                subtitle: "Per unit structure",
              },
              {
                label: "Network Efficiency",
                value: "94.2%",
                subtitle: "Operational uptime",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-foreground/15 p-8 bg-foreground/[0.015]"
              >
                <p className="text-base font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {stat.label}
                </p>
                <p className="font-display text-4xl tracking-[-0.015em] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/60">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
