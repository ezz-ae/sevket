import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Download } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { articles, series } from "@/lib/magazine-data";
import { magazineIssues } from "@/lib/brand-detailed-data";

export const metadata: Metadata = {
  title: "Field Notes · Ölmez Franchise Systems Magazine",
  description:
    "Strategic essays from Edinburgh on systems, discipline, and the architecture of repetition. The Franchise Architect series and beyond.",
};

export default function MagazinePage() {
  const totalMinutes = articles.reduce((acc, a) => acc + a.readingMinutes, 0);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow="Magazine — Field notes from Edinburgh"
        title="The architecture of"
        italicTail="repetition."
        dek="A working journal. Strategic essays, doctrinal notes, and the long-form thinking behind every filing the desk publishes. Read in any order; the system stays the same."
        meta={[
          { label: "Articles published", value: String(articles.length) },
          { label: "Reading time", value: `${totalMinutes} min` },
          { label: "Series in print", value: "1" },
          { label: "Editorial home", value: "Edinburgh" },
        ]}
      />

      {/* Featured series */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Featured series
          </span>
          <div className="mt-6 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
            <div>
              <h2 className="font-display text-4xl md:text-6xl lg:text-8xl tracking-[-0.015em] leading-[0.95] max-w-[16ch]">
                {series.name}.
              </h2>
              <p className="mt-10 lg:mt-14 max-w-[60ch] text-lg lg:text-xl leading-[1.7] text-muted-foreground">
                {series.description}
              </p>
            </div>
            <div className="border border-foreground/15 p-7 lg:p-9 bg-background">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Read in order
              </span>
              <ol className="mt-5 space-y-3">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/magazine/${a.slug}`}
                      className="group flex items-baseline justify-between gap-4 py-3 border-b border-foreground/5 last:border-0"
                    >
                      <span className="flex items-baseline gap-3 min-w-0">
                        <span className="font-mono text-[11px] tabular-nums ember">
                          §{a.sectionNumber}
                        </span>
                        <span className="font-display text-lg tracking-tight truncate group-hover:text-[#d9b079] transition-colors">
                          {a.title}
                        </span>
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground shrink-0">
                        {a.readingMinutes} min
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
              <Link
                href={`/magazine/${articles[0].slug}`}
                className="mt-7 group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] ember hover:text-[#d9b079] transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Begin from §1
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article list */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                All articles
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-[-0.015em] leading-[1.0] max-w-[18ch]">
                Notes the desk wanted in writing.
              </h2>
            </div>
          </div>

          <ul className="border-t border-foreground/15">
            {articles.map((a) => (
              <li key={a.slug} className="border-b border-foreground/15">
                <Link
                  href={`/magazine/${a.slug}`}
                  className="group grid lg:grid-cols-[140px_1fr_auto] gap-6 lg:gap-12 py-12 lg:py-16 px-2 -mx-2 hover:bg-foreground/[0.02] transition-colors"
                >
                  <div className="space-y-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      §{a.sectionNumber} of {a.totalInSeries}
                    </span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {a.publishedAt}
                    </span>
                  </div>

                  <div className="max-w-[60ch]">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] ember mb-3">
                      {a.series}
                    </span>
                    <h3 className="font-display text-3xl lg:text-5xl tracking-[-0.005em] leading-[1.05] group-hover:text-[#d9b079] transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-5 text-lg leading-[1.7] text-muted-foreground italic">
                      {a.dek}
                    </p>
                  </div>

                  <div className="flex items-end lg:items-center gap-3 lg:flex-col lg:gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {a.readingMinutes} min
                    </span>
                    <ArrowRight className="w-4 h-4 ember transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
