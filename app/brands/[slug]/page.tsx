import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBrand, brands } from "@/lib/brands-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArrowRight, FileText, Calendar, BookOpen } from "lucide-react";

interface BrandPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const brand = getBrand(params.slug);

  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brand.name} — Ölmez Brands`,
    description: brand.description,
  };
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

export default function BrandPage({ params }: BrandPageProps) {
  const brand = getBrand(params.slug);

  if (!brand) {
    notFound();
  }

  const otherBrands = brands.filter((b) => b.slug !== brand.slug);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      {/* Brand Hero */}
      <section className="relative border-b border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Brand Info */}
            <div className="flex flex-col justify-center">
              <span
                className="font-mono text-[11px] uppercase tracking-[0.22em] mb-6"
                style={{ color: brand.theme.primary }}
              >
                {brand.focusMarket}
              </span>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.1] mb-6">
                {brand.name}
              </h1>

              {brand.arabicName && (
                <p className="font-display text-4xl mb-8 text-foreground/60">
                  {brand.arabicName}
                </p>
              )}

              <p className="text-lg md:text-xl leading-[1.7] text-foreground/75 max-w-[55ch] mb-12">
                {brand.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {brand.keyMetrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-2">
                      {metric.label}
                    </p>
                    <p className="font-display text-2xl tracking-[-0.005em]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-foreground/60">
                  <p>Founded {brand.founded}</p>
                  <p>{brand.headquarters}</p>
                </div>
              </div>
            </div>

            {/* Right: Visual Block */}
            <div
              className="relative hidden lg:block"
              style={{ backgroundColor: brand.theme.primary }}
            >
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8"
                    style={{
                      backgroundColor: brand.theme.secondary,
                      opacity: 0.8,
                    }}
                  >
                    <span className="font-display text-5xl text-white font-bold">
                      {brand.slug.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-white/80 font-display text-2xl">
                    {brand.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Sections */}
      <section className="relative border-b border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.015em] mb-16">
            Brand Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Reports */}
            <Link
              href={`/brands/${brand.slug}/reports`}
              className="group border border-foreground/15 p-8 hover:bg-foreground/[0.025] transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: brand.theme.primary }}
                >
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl">Reports Hub</h3>
              </div>
              <p className="text-foreground/70 text-sm mb-6">
                Quarterly and annual strategic reports, performance data, and
                operational metrics.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <span>View Reports</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Events */}
            <Link
              href={`/brands/${brand.slug}/events`}
              className="group border border-foreground/15 p-8 hover:bg-foreground/[0.025] transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: brand.theme.primary }}
                >
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl">Events Calendar</h3>
              </div>
              <p className="text-foreground/70 text-sm mb-6">
                Investor meetings, operator training, strategic briefings, and
                conferences.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <span>View Events</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Magazine */}
            <Link
              href={`/brands/${brand.slug}/magazine`}
              className="group border border-foreground/15 p-8 hover:bg-foreground/[0.025] transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: brand.theme.primary }}
                >
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl">Magazine</h3>
              </div>
              <p className="text-foreground/70 text-sm mb-6">
                Field Notes, operator spotlights, industry insights, and best
                practices.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Read Magazine</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Operational Focus */}
      <section className="relative border-b border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.015em] mb-16">
            Operational Excellence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {brand.operationalFocus.map((focus, idx) => (
              <div key={focus} className="border border-foreground/15 p-8 bg-background">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: brand.theme.primary }}
                  >
                    <span className="font-display text-lg text-white font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-xl">{focus}</h3>
                </div>
                <p className="text-foreground/70 text-sm">
                  Core operational capability driving {brand.name} excellence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Brands */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.015em] mb-16">
            Other Brands in the Ecosystem
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {otherBrands.slice(0, 4).map((otherBrand) => (
              <Link
                key={otherBrand.id}
                href={`/brands/${otherBrand.slug}`}
                className="group border border-foreground/15 p-8 hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-2xl">{otherBrand.name}</h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <p className="text-foreground/70 text-sm mb-4">
                  {otherBrand.tagline}
                </p>
                <div className="text-xs text-muted-foreground">
                  {otherBrand.unitCount} units · {otherBrand.focusMarket}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
