import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { articles, series } from "@/lib/magazine-data";
import { magazineIssues } from "@/lib/brand-detailed-data";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

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

  return (
    <main className="relative min-h-screen bg-[#050505] text-white">
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
        <section className="border-t border-white/10 py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12">
            <div className="relative overflow-hidden border border-white/10 bg-black">
              <Image
                src={latestIssue.coverImage}
                alt={latestIssue.title}
                width={900}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Güncel sayı" : "Current issue"}
              </span>
              <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                <span className="bg-[#b8865a] px-3 py-1 text-black">
                  {latestIssue.issueNumber}
                </span>
                <span>{latestIssue.date}</span>
                <span>{latestIssue.pages} {isTurkish ? "sayfa" : "pages"}</span>
              </div>
              <h2 className="mt-8 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
                {latestIssue.title}
              </h2>
              <p className="mt-6 max-w-[54ch] text-xl italic tracking-[-0.01em] text-white/76">
                {latestIssue.subtitle}
              </p>
              <p className="mt-8 max-w-[56ch] text-base leading-[1.85] text-white/66">
                {latestIssue.description}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {latestIssue.featuredHeadlines.map((headline) => (
                  <div key={headline} className="border border-white/10 p-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                      {isTurkish ? "Kapak satırı" : "Cover line"}
                    </p>
                    <p className="mt-3 text-sm leading-[1.7] text-white/68">
                      {headline}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={withLocale("/brands/olmez/magazine", locale)}
                  className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
                >
                  {isTurkish ? "Sayı masasını aç" : "Open issue desk"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={withLocale(`/magazine/${articles[0].slug}`, locale)}
                  className="inline-flex h-12 items-center justify-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
                >
                  {isTurkish ? "§1 ile başla" : "Begin with §1"}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {archiveIssues.length > 0 && (
        <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                  {isTurkish ? "Arşiv kapakları" : "Archive covers"}
                </span>
                <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                  {isTurkish
                    ? "Geçmiş sayılar odanın parçası olarak kalır."
                    : "Past issues remain part of the room."}
                </h2>
              </div>
              <p className="max-w-[44ch] text-sm leading-[1.8] text-white/60">
                {isTurkish
                  ? "Arşiv önce görseldir: her kapak, Ölmez'in dünya görüşünü, liderliği ve ölçeği editoryal disiplinle anlatabildiğinin kanıtı olarak ele alınır."
                  : "The archive is visual first: each cover is treated as proof that Ölmez can communicate worldview, leadership, and scale through editorial discipline."}
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {archiveIssues.map((issue) => (
                <article key={issue.id} className="group">
                  <div className="overflow-hidden border border-white/10 bg-black">
                    <Image
                      src={issue.coverImage}
                      alt={issue.title}
                      width={900}
                      height={1200}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                    <span>{issue.issueNumber}</span>
                    <span className="text-white/20">/</span>
                    <span>{issue.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">
                    {issue.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-sm leading-[1.8] text-white/62">
                    {issue.subtitle}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Seri dosyası" : "Series dossier"}
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {series.name}
            </h2>
            <p className="mt-8 max-w-[54ch] text-base leading-[1.85] text-white/66">
              {series.description}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                { label: isTurkish ? "Yayınlandı" : "Published", value: series.publishedAt },
                { label: isTurkish ? "Masa" : "Desk", value: series.hq },
                { label: isTurkish ? "Bölüm" : "Sections", value: String(articles.length) },
              ].map((item) => (
                <div key={item.label} className="border border-white/10 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.02]">
            <ol>
              {articles.map((article) => (
                <li key={article.slug} className="border-b border-white/10 last:border-b-0">
                  <Link
                    href={withLocale(`/magazine/${article.slug}`, locale)}
                    className="group block px-6 py-7 transition-colors hover:bg-white/[0.03] lg:px-8"
                  >
                    <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                      <span>
                        §{article.sectionNumber} / {article.totalInSeries}
                      </span>
                      <span>{article.readingMinutes} min</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl tracking-[-0.03em] text-white transition-colors group-hover:text-[#f1c995]">
                      {article.title}
                    </h3>
                    <p className="mt-3 max-w-[44ch] text-sm leading-[1.8] text-white/60">
                      {article.dek}
                    </p>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-28 lg:py-36">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
            {isTurkish ? "Okumaya devam" : "Continue reading"}
          </span>
          <h2 className="mt-8 font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
            {isTurkish
              ? "Kurucunun blueprint'i ile başlayın."
              : "Start with the founder’s blueprint."}
          </h2>
          <p className="mx-auto mt-8 max-w-[56ch] text-base leading-[1.85] text-white/64">
            {isTurkish
              ? "En güçlü giriş noktası hâlâ kurucu dosyası; serinin geri kalanı oradan açılır."
              : "The strongest entry point remains the founder dossier, then the rest of the series unfolds from there."}
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href={withLocale(`/magazine/${articles[0].slug}`, locale)}
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              <BookOpen className="h-3.5 w-3.5" />
              {isTurkish ? "§1'i oku" : "Read §1"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
