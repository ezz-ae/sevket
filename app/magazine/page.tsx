import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { articles, series } from "@/lib/magazine-data";
import { magazineIssues } from "@/lib/brand-detailed-data";
import { getArticleEngagement, formatCompactNumber } from "@/lib/live-engagement";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/magazine", locale);

  return {
    title: isTurkish
      ? "Field Notes · Ölmez Dergi Arşivi"
      : "Field Notes · Ölmez Franchise Systems Magazine",
    description: isTurkish
      ? "Ölmez editoryal arşivi: kapak sayıları, kurucu yazıları ve premium bir dergi defteri gibi sunulan stratejik notlar."
      : "The Ölmez editorial archive: cover issues, founder essays, and strategic notes presented as a premium magazine ledger.",
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish
        ? "Field Notes · Ölmez Dergi Arşivi"
        : "Field Notes · Ölmez Franchise Systems Magazine",
      description: isTurkish
        ? "Kapak sayıları, kurucu yazıları ve Ölmez dünyasını taşıyan uzun form arşiv."
        : "Cover issues, founder essays, and the long-form archive carrying the Ölmez worldview.",
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
  };
}

export default async function MagazinePage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const totalMinutes = articles.reduce((acc, a) => acc + a.readingMinutes, 0);
  const olmezIssues = magazineIssues.filter((issue) => issue.brand === "olmez");
  const latestIssue = olmezIssues[0];
  const archiveIssues = olmezIssues.slice(1);
  const founderArticles = articles.filter((article) => article.category === "Founder Essay");

  return (
    <main className="relative min-h-screen bg-white text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Dergi — Field Notes" : "Magazine — Field Notes"}
        title={isTurkish ? "Disiplinin" : "The archive of"}
        italicTail={isTurkish ? "arşivi." : "discipline."}
        dek={
          isTurkish
            ? "Ölmez dünya görüşü için premium bir editoryal kayıt: kapak dosyaları, kurucu yazıları ve görünen her hamlenin arkasındaki uzun form düşünce."
            : "A premium editorial ledger for the Ölmez worldview: cover stories, founder essays, and the long-form reasoning behind every visible move."
        }
        meta={[
          { label: isTurkish ? "Sayı" : "Issues", value: String(olmezIssues.length) },
          { label: isTurkish ? "Makale" : "Articles", value: String(articles.length) },
          { label: isTurkish ? "Okuma süresi" : "Reading time", value: `${totalMinutes} ${isTurkish ? "dk" : "min"}` },
          { label: isTurkish ? "Editoryal masa" : "Editorial desk", value: "Edinburgh" },
        ]}
      />

      {latestIssue && (
        <section className="relative py-0 lg:py-0 overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-0 lg:px-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative w-full h-[400px] lg:h-[700px] overflow-hidden">
                <Image
                  src={latestIssue.coverImage}
                  alt={latestIssue.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col justify-center px-6 lg:px-12 py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                  {isTurkish ? "Güncel sayı" : "Current issue"}
                </span>
                <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  <span className="bg-[#b8865a] px-3 py-1 text-white">
                    {latestIssue.issueNumber}
                  </span>
                  <span>{latestIssue.date}</span>
                  <span>{latestIssue.pages} {isTurkish ? "sayfa" : "pages"}</span>
                </div>
                <h2 className="mt-8 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl text-black">
                  {latestIssue.title}
                </h2>
                <p className="mt-6 max-w-[54ch] text-xl italic tracking-[-0.01em] text-gray-700">
                  {latestIssue.subtitle}
                </p>
                <p className="mt-8 max-w-[56ch] text-base leading-[1.85] text-gray-600">
                  {latestIssue.description}
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {latestIssue.featuredHeadlines.map((headline) => (
                    <div key={headline} className="border border-gray-300 p-4 bg-white">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#b8865a]">
                        {isTurkish ? "Kapak satırı" : "Cover line"}
                      </p>
                      <p className="mt-3 text-sm leading-[1.7] text-gray-700">
                        {headline}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href={withLocale("/brands/olmez/magazine", locale)}
                    className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#d7ad7a]"
                  >
                    {isTurkish ? "Sayı masasını aç" : "Open issue desk"}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={withLocale(`/magazine/${articles[0].slug}`, locale)}
                    className="inline-flex h-12 items-center justify-center gap-3 border border-gray-300 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-gray-800 transition-colors hover:border-gray-400 hover:bg-gray-100"
                  >
                    {isTurkish ? "§1 ile başla" : "Begin with §1"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {archiveIssues.length > 0 && (
        <section className="border-t border-gray-300 bg-gray-50 py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                  {isTurkish ? "Arşiv kapakları" : "Archive covers"}
                </span>
                <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl text-gray-900">
                  {isTurkish
                    ? "Geçmiş sayılar odanın parçası olarak kalır."
                    : "Past issues remain part of the room."}
                </h2>
              </div>
              <p className="max-w-[44ch] text-sm leading-[1.8] text-gray-600">
                {isTurkish
                  ? "Arşiv önce görseldir: her kapak, Ölmez'in dünya görüşünü, liderliği ve ölçeği editoryal disiplinle anlatabildiğinin kanıtı olarak ele alınır."
                  : "The archive is visual first: each cover is treated as proof that Ölmez can communicate worldview, leadership, and scale through editorial discipline."}
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {archiveIssues.map((issue) => (
                <article key={issue.id} className="group">
                  <div className="overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src={issue.coverImage}
                      alt={issue.title}
                      width={900}
                      height={1200}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                    <span>{issue.issueNumber}</span>
                    <span className="text-gray-300">/</span>
                    <span>{issue.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl tracking-[-0.03em] text-gray-900">
                    {issue.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-sm leading-[1.8] text-gray-600">
                    {issue.subtitle}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {founderArticles.length > 0 && (
        <section className="border-t border-gray-300 bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-12">
            <div className="sticky top-24">
              <div className="overflow-hidden border border-gray-300 bg-gray-50">
                <Image
                  src={olmezBrandAssets.founder.current.src}
                  alt={olmezBrandAssets.founder.current.alt}
                  width={1086}
                  height={1448}
                  className="h-auto w-full object-cover"
                />
              </div>
              <span className="mt-6 block font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
                {isTurkish ? "Kurucudan" : "Articles by Founder"}
              </span>
              <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] text-gray-900 md:text-6xl">
                {isTurkish ? "Sistemin kamu sesi." : "The public voice of the system."}
              </h2>
              <p className="mt-6 max-w-[46ch] text-sm leading-[1.85] text-gray-600">
                Short founder essays clarify how Ölmez thinks about control, responsibility, distribution rhythm, and the difference between a food counter and an investable operating system.
              </p>
            </div>

            <div className="border border-gray-300 bg-gray-50">
              {founderArticles.map((article) => {
                const engagement = getArticleEngagement(article.slug, article.readingMinutes, article.sectionNumber);
                return (
                  <Link
                    key={article.slug}
                    href={withLocale(`/magazine/${article.slug}`, locale)}
                    className="group block border-b border-gray-300 px-6 py-7 transition-colors last:border-b-0 hover:bg-white lg:px-8"
                  >
                    <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                      <span>{article.author}</span>
                      <span>{article.publishedAt}</span>
                      <span>{article.readingMinutes} min</span>
                      <span>{formatCompactNumber(engagement.views)} views</span>
                      <span>{formatCompactNumber(engagement.peopleReadingNow)} reading now</span>
                    </div>
                    <h3 className="mt-4 font-display text-3xl tracking-[-0.03em] text-gray-900 transition-colors group-hover:text-[#b8865a]">
                      {article.title}
                    </h3>
                    <p className="mt-3 max-w-[54ch] text-sm leading-[1.8] text-gray-600">
                      {article.dek}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-gray-300 py-24 lg:py-32 bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
              {isTurkish ? "Seri dosyası" : "Series dossier"}
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl text-gray-900">
              {series.name}
            </h2>
            <p className="mt-8 max-w-[54ch] text-base leading-[1.85] text-gray-600">
              {series.description}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { label: isTurkish ? "Yayınlandı" : "Published", value: series.publishedAt },
                { label: isTurkish ? "Masa" : "Desk", value: series.hq },
                { label: isTurkish ? "Bölüm" : "Sections", value: String(articles.length) },
              ].map((item) => (
                <div key={item.label} className="border border-gray-300 p-5 bg-gray-50">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-2xl tracking-[-0.03em] text-gray-900">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-300 bg-gray-50">
            <ol>
              {articles.map((article) => (
                <li key={article.slug} className="border-b border-gray-300 last:border-b-0">
                  <Link
                    href={withLocale(`/magazine/${article.slug}`, locale)}
                    className="group block px-6 py-7 transition-colors hover:bg-white lg:px-8"
                  >
                    <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                      <span>
                        §{article.sectionNumber} / {article.totalInSeries}
                      </span>
                      <span>{article.readingMinutes} min</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-gray-500">
                      {(() => {
                        const engagement = getArticleEngagement(article.slug, article.readingMinutes, article.sectionNumber);
                        return (
                          <>
                            <span>{formatCompactNumber(engagement.views)} reads</span>
                            <span>{formatCompactNumber(engagement.likes)} likes</span>
                            <span>{formatCompactNumber(engagement.peopleReadingNow)} reading now</span>
                          </>
                        );
                      })()}
                    </div>
                    <h3 className="mt-4 font-display text-2xl tracking-[-0.03em] text-gray-900 transition-colors group-hover:text-[#b8865a]">
                      {article.title}
                    </h3>
                    <p className="mt-3 max-w-[44ch] text-sm leading-[1.8] text-gray-600">
                      {article.dek}
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-300 bg-gray-50 py-28 lg:py-36">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">
            {isTurkish ? "Okumaya devam" : "Continue reading"}
          </span>
          <h2 className="mt-8 font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl text-gray-900">
            {isTurkish
              ? "Kurucunun blueprint’i ile başlayın."
              : "Start with the founder’s blueprint."}
          </h2>
          <p className="mx-auto mt-8 max-w-[56ch] text-base leading-[1.85] text-gray-600">
            {isTurkish
              ? "En güçlü giriş noktası hâlâ kurucu dosyası; serinin geri kalanı oradan açılır."
              : "The strongest entry point remains the founder dossier, then the rest of the series unfolds from there."}
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href={withLocale(`/magazine/${articles[0].slug}`, locale)}
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#d7ad7a]"
            >
              <BookOpen className="h-3.5 w-3.5" />
              {isTurkish ? "§1’i oku" : "Read §1"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
