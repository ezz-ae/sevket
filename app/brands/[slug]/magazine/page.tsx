import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBrand } from "@/lib/brands-data";
import { brandMagazine, magazineIssues } from "@/lib/brand-detailed-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { ArrowRight, BookOpen, Download } from "lucide-react";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

interface BrandMagazinePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BrandMagazinePageProps): Promise<Metadata> {
  const brand = getBrand(params.slug);

  if (!brand) {
    return { title: "Brand Not Found" };
  }

  return {
    title: `${brand.name} Magazine — Field Notes & Strategic Insights`,
    description: `Field Notes and industry insights from ${brand.name}. Operator spotlights, best practices, and strategic analysis.`,
    openGraph: {
      title: `${brand.name} Magazine — Field Notes & Strategic Insights`,
      description: `${brand.name} magazine featuring operator spotlights, industry analysis, and best practices.`,
      url: `${baseUrl}/brands/${brand.slug}/magazine`,
    },
    alternates: {
      canonical: `${baseUrl}/brands/${brand.slug}/magazine`,
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

export default function BrandMagazinePage({ params }: BrandMagazinePageProps) {
  const brand = getBrand(params.slug);
  const articles = brandMagazine[params.slug] || [];
  const issues = magazineIssues.filter((issue) => issue.brand === params.slug);

  if (!brand) {
    notFound();
  }

  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);
  const latestIssue = issues[0];
  const archiveIssues = issues.slice(1);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Field Notes": brand.theme.primary,
      Operations: brand.theme.secondary,
      Strategy: brand.theme.accent,
      Spotlights: brand.theme.primary,
      Heritage: brand.theme.primary,
      Training: brand.theme.secondary,
      Technology: brand.theme.primary,
    };
    return colors[category] || brand.theme.primary;
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow={`${brand.name} Magazine`}
        title="Field Notes"
        italicTail="& Insights."
        dek={`Operator spotlights, industry analysis, and best practices from the ${brand.name} network. Real insights from real operations.`}
        meta={[
          { label: "Latest Issue", value: latestIssue?.issueNumber || "Issue 1" },
          { label: "Articles", value: articles.length.toString() },
          { label: "Updated", value: "Weekly" },
        ]}
      />

      {/* Featured Cover Issue */}
      {latestIssue && (
        <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.02]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Current Issue
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em]">
                On the Cover
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
              {/* Cover Image */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] border border-foreground/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <Image
                    src={latestIssue.coverImage}
                    alt={`${latestIssue.title} — ${latestIssue.issueNumber}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Issue Details */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="px-4 h-8 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                    style={{ backgroundColor: brand.theme.primary }}
                  >
                    {latestIssue.issueNumber}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {latestIssue.date}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {latestIssue.pages} pages
                  </span>
                </div>

                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.015em] leading-[1.1] mb-6">
                  {latestIssue.title}
                </h3>

                <p className="text-xl text-foreground/75 leading-[1.5] italic mb-8">
                  {latestIssue.subtitle}
                </p>

                <p className="text-base text-foreground/70 leading-[1.7] mb-10">
                  {latestIssue.description}
                </p>

                <div className="mb-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                    In This Issue
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {latestIssue.featuredHeadlines.map((headline) => (
                      <li
                        key={headline}
                        className="flex items-start gap-3 text-base"
                      >
                        <span
                          className="font-mono text-sm flex-shrink-0 mt-0.5"
                          style={{ color: brand.theme.primary }}
                        >
                          →
                        </span>
                        <span className="text-foreground/85">{headline}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    style={{ backgroundColor: brand.theme.primary }}
                    className="inline-flex items-center justify-center gap-2 text-white px-8 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read Issue
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 border border-foreground/25 text-foreground px-8 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-foreground/5 transition-colors">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Issue Archive */}
      {archiveIssues.length > 0 && (
        <section className="relative border-t border-foreground/10 py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-16">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Past Issues
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl tracking-[-0.015em]">
                Archive
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {archiveIssues.map((issue) => (
                <article
                  key={issue.id}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] border border-foreground/15 overflow-hidden mb-4 shadow-[0_8px_24px_rgba(0,0,0,0.2)] group-hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-shadow">
                    <Image
                      src={issue.coverImage}
                      alt={`${issue.title} — ${issue.issueNumber}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 h-6 inline-flex items-center font-mono text-[9px] uppercase tracking-[0.18em] text-white"
                      style={{ backgroundColor: brand.theme.primary }}
                    >
                      {issue.issueNumber}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {issue.date}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl tracking-[-0.005em] mb-2">
                    {issue.title}
                  </h3>

                  <p className="text-sm text-foreground/60 italic leading-[1.5]">
                    {issue.subtitle}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Article */}
      {featuredArticle && (
        <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Featured Article
              </span>
            </div>

            <div className="border border-foreground/15 p-8 lg:p-16 bg-background">
              <div className="max-w-[55ch]">
                <div
                  className="inline-flex items-center gap-2 px-4 h-8 mb-6"
                  style={{ backgroundColor: getCategoryColor(featuredArticle.category) }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                    {featuredArticle.category}
                  </span>
                </div>

                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.015em] leading-[1.2] mb-6">
                  {featuredArticle.title}
                </h2>

                <p className="text-lg leading-[1.7] text-foreground/75 mb-8">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                  {featuredArticle.author && (
                    <>
                      <span>By {featuredArticle.author}</span>
                      <span>·</span>
                    </>
                  )}
                  <span>{featuredArticle.date}</span>
                  <span>·</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <button
                  style={{ backgroundColor: brand.theme.primary }}
                  className="inline-flex items-center justify-center gap-2 text-white px-8 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-5xl tracking-[-0.015em]">
              All Articles
            </h2>
            <div className="h-px bg-foreground/10 mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {otherArticles.map((article) => (
              <article
                key={article.id}
                className="group border border-foreground/15 p-8 hover:bg-foreground/[0.025] transition-colors flex flex-col"
              >
                <div
                  className="inline-flex items-center gap-2 px-3 h-7 w-fit mb-4"
                  style={{ backgroundColor: getCategoryColor(article.category) }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white">
                    {article.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl tracking-[-0.005em] mb-3 flex-grow">
                  {article.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-[1.6] mb-6">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-6 border-t border-foreground/10">
                  <div className="flex gap-4 flex-wrap">
                    {article.author && (
                      <>
                        <span>{article.author}</span>
                        <span>·</span>
                      </>
                    )}
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-8">
            <BookOpen
              className="w-6 h-6"
              style={{ color: brand.theme.primary }}
            />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Stay Updated
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch] mx-auto mb-8">
            Subscribe to {brand.name} Magazine.
          </h2>
          <p className="text-xl text-foreground/70 max-w-[60ch] mx-auto mb-12">
            Get new articles delivered weekly. Operator insights, market analysis,
            and strategic updates from the {brand.name} network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 h-12 border border-foreground/25 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50"
            />
            <button
              style={{ backgroundColor: brand.theme.primary }}
              className="inline-flex items-center justify-center gap-2 text-white px-8 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
            >
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
