import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ArticleRenderer } from "@/components/magazine/article-renderer";
import { articles, getArticle, getAdjacent } from "@/lib/magazine-data";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Article not found · Ölmez Franchise Systems" };
  return {
    title: `${a.title} · ${a.series} — Ölmez Franchise Systems Field Notes`,
    description: a.dek,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { prev, next } = getAdjacent(slug);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      {/* Article header */}
      <header className="relative pt-40 pb-20 lg:pt-56 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Link
            href={withLocale("/magazine", locale)}
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground transition-colors mb-12 lg:mb-16"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {isTurkish ? "Dergi" : "Magazine"}
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-10 font-mono text-[11px] uppercase tracking-[0.22em]">
            <span className="ember">{article.series}</span>
            <span className="text-foreground/30">·</span>
            <span className="text-muted-foreground">
              §{article.sectionNumber} {isTurkish ? "/" : "of"} {article.totalInSeries}
            </span>
            <span className="text-foreground/30">·</span>
            <span className="text-muted-foreground">{article.publishedAt}</span>
            <span className="text-foreground/30">·</span>
            <span className="text-muted-foreground">{article.readingMinutes} {isTurkish ? "dk" : "min"}</span>
          </div>

          <h1 className="font-display tracking-[-0.015em] leading-[0.95] text-5xl md:text-7xl lg:text-[120px] max-w-[20ch]">
            {article.title}
          </h1>

          <p className="mt-10 lg:mt-14 max-w-[58ch] text-xl lg:text-2xl text-muted-foreground leading-[1.5] italic font-display">
            {article.dek}
          </p>
        </div>
      </header>

      {/* Body — single 68ch column with right-rail TOC */}
      <div className="relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_240px] gap-12 lg:gap-20 pb-24 lg:pb-40">
          <article className="min-w-0">
            <ArticleRenderer blocks={article.body} />
          </article>

          <aside className="lg:sticky lg:top-32 lg:self-start hidden lg:block">
            <div className="border-l border-foreground/15 pl-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                {isTurkish ? "Bu seride" : "In this series"}
              </span>
              <ol className="mt-5 space-y-3">
                {articles.map((a) => {
                  const isCurrent = a.slug === article.slug;
                  return (
                    <li key={a.slug}>
                      <Link
                        href={withLocale(`/magazine/${a.slug}`, locale)}
                        className={`group flex items-start gap-3 text-sm leading-snug transition-colors ${
                          isCurrent
                            ? "ember"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] tabular-nums pt-1">
                          §{a.sectionNumber}
                        </span>
                        <span className="font-display">{a.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </aside>
        </div>
      </div>

      {/* Prev / Next */}
      <nav className="relative border-t border-foreground/15 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid sm:grid-cols-2 gap-8 lg:gap-12">
          {prev ? (
            <Link
              href={withLocale(`/magazine/${prev.slug}`, locale)}
              className="group flex items-start gap-5 sm:border-r sm:border-foreground/15 sm:pr-12"
            >
              <ArrowLeft className="w-5 h-5 mt-2 ember transition-transform group-hover:-translate-x-1" />
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {isTurkish ? "Önceki" : "Previous"} · §{prev.sectionNumber}
                </span>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl tracking-tight group-hover:text-[#d9b079] transition-colors">
                  {prev.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground italic">{prev.dek}</p>
              </div>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}

          {next ? (
            <Link
              href={withLocale(`/magazine/${next.slug}`, locale)}
              className="group flex items-start gap-5 sm:justify-end sm:text-right sm:flex-row-reverse"
            >
              <ArrowRight className="w-5 h-5 mt-2 ember transition-transform group-hover:translate-x-1" />
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {isTurkish ? "Sonraki" : "Next"} · §{next.sectionNumber}
                </span>
                <h3 className="mt-2 font-display text-2xl lg:text-3xl tracking-tight group-hover:text-[#d9b079] transition-colors">
                  {next.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground italic">{next.dek}</p>
              </div>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
        </div>
      </nav>

      <FooterSection />
    </main>
  );
}
