import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Users, Target } from "lucide-react";
import { opportunities } from "@/lib/investor-data";
import { brands, getBrand } from "@/lib/brands-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

export const metadata: Metadata = {
  title: "Investment Opportunities — Ölmez Franchise Systems",
  description:
    "Active investment opportunities across our 5-brand ecosystem. US gas station expansion, European premium bakeries, flagship restaurants, and technology partnerships.",
  keywords: [
    "investment opportunities",
    "franchise opportunities",
    "shawarma investment",
    "gas station franchise",
    "Turkish restaurant investment",
    "AFFAREM partnership",
    "Olmez opportunities",
  ],
  openGraph: {
    title: "Investment Opportunities — Ölmez Franchise Systems",
    description:
      "Active investment opportunities across our 5-brand ecosystem. From $165K single units to $50M+ institutional partnerships.",
    url: `${baseUrl}/opportunities`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/opportunities`,
  },
};

const statusColors: Record<string, string> = {
  open: "#1B5E20",
  limited: "#D4A574",
  closed: "#8B3A3A",
};

const statusLabels: Record<string, string> = {
  open: "Open",
  limited: "Limited",
  closed: "Closed",
};

export default function OpportunitiesPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow="Active Investment Opportunities"
        title="Capital Deployment"
        italicTail="Opportunities."
        dek="Active investment opportunities across our 5-brand ecosystem. Each opportunity includes pre-validated sites, certified operators, and 100% AFFAREM monitoring."
        meta={[
          { label: "Active Opportunities", value: opportunities.length.toString() },
          { label: "Total Capital", value: "$14.5M+" },
          { label: "Avg Payback", value: "26 months" },
          { label: "Markets", value: "8 Regions" },
        ]}
      />

      {/* Filter Tabs */}
      <section className="relative border-t border-foreground/10 py-12 sticky top-[80px] z-40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto gap-4 pb-2">
            <button className="flex-shrink-0 px-6 h-10 border border-foreground bg-foreground text-background font-mono text-[10px] uppercase tracking-[0.1em]">
              All Opportunities ({opportunities.length})
            </button>
            {brands.map((brand) => {
              const count = opportunities.filter(
                (o) => o.brand === brand.slug
              ).length;
              if (count === 0) return null;
              return (
                <button
                  key={brand.slug}
                  className="flex-shrink-0 px-6 h-10 border border-foreground/25 text-foreground font-mono text-[10px] uppercase tracking-[0.1em] hover:bg-foreground/5 transition-colors"
                >
                  {brand.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {opportunities.map((opp) => {
              const brand = getBrand(opp.brand);
              const allocationPercentage =
                (opp.spotsAllocated / opp.spotsAvailable) * 100;

              return (
                <div
                  key={opp.id}
                  className="border border-foreground/15 hover:border-foreground/30 transition-colors overflow-hidden"
                >
                  <div
                    className="h-1"
                    style={{
                      backgroundColor: brand?.theme.primary || "#8B5A3C",
                    }}
                  />
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 flex-wrap mb-6">
                          <span
                            className="px-3 h-7 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                            style={{
                              backgroundColor: brand?.theme.primary || "#8B5A3C",
                            }}
                          >
                            {brand?.name || "Ölmez"}
                          </span>
                          <span
                            className="px-3 h-7 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                            style={{ backgroundColor: statusColors[opp.status] }}
                          >
                            {statusLabels[opp.status]}
                          </span>
                          <span className="px-3 h-7 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.18em] border border-foreground/20">
                            {opp.type}
                          </span>
                        </div>

                        <h3 className="font-display text-3xl lg:text-4xl tracking-[-0.015em] mb-4">
                          {opp.title}
                        </h3>

                        <p className="text-base text-foreground/75 leading-[1.7] mb-6">
                          {opp.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                                Markets
                              </p>
                              <p className="text-sm">{opp.states.join(", ")}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
                                Timeline
                              </p>
                              <p className="text-sm">{opp.timeline}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                            Investment Highlights
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {opp.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="text-sm text-foreground/70 flex items-center gap-2"
                              >
                                <span className="text-muted-foreground">→</span>
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <div
                          className="border border-foreground/15 p-6 bg-foreground/[0.02]"
                        >
                          <div className="space-y-6">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                                Capital Required
                              </p>
                              <p className="font-display text-3xl tracking-[-0.015em]">
                                {opp.capitalRequired}
                              </p>
                            </div>
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                                Target Return
                              </p>
                              <p className="font-display text-xl tracking-[-0.005em]">
                                {opp.targetReturn}
                              </p>
                            </div>
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                                Minimum Investment
                              </p>
                              <p className="font-display text-lg tracking-[-0.005em]">
                                {opp.minimumInvestment}
                              </p>
                            </div>

                            <div className="pt-4 border-t border-foreground/10">
                              <div className="flex items-center justify-between mb-2">
                                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                  Allocation
                                </p>
                                <p className="text-sm font-mono">
                                  {opp.spotsAllocated}/{opp.spotsAvailable}
                                </p>
                              </div>
                              <div className="h-2 bg-foreground/10 relative overflow-hidden">
                                <div
                                  className="absolute top-0 left-0 h-full transition-all"
                                  style={{
                                    width: `${allocationPercentage}%`,
                                    backgroundColor:
                                      brand?.theme.primary || "#8B5A3C",
                                  }}
                                />
                              </div>
                              <p className="text-xs text-muted-foreground mt-2">
                                {opp.spotsAvailable - opp.spotsAllocated} spots
                                remaining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8 border-t border-foreground/10">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 text-white px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
                        style={{
                          backgroundColor: brand?.theme.primary || "#8B5A3C",
                        }}
                      >
                        Inquire About This Opportunity
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/brands/${opp.brand}`}
                        className="inline-flex items-center justify-center gap-2 border border-foreground/25 text-foreground px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-foreground/5 transition-colors"
                      >
                        View {brand?.name || "Brand"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Capital Deployment Journey
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch] mx-auto mb-8">
            Structured. Transparent. Disciplined.
          </h2>
          <p className="text-xl text-foreground/70 max-w-[60ch] mx-auto mb-12">
            Every opportunity follows our six-step deployment process. From
            initial inquiry to operations launch, capital is deployed with
            discipline.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/investors"
              className="inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/90 transition-colors"
            >
              View Investor Portal
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 text-foreground font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/5 transition-colors"
            >
              Schedule Investment Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
