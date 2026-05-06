import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { achievementYearMap, achievementYears } from "@/lib/achievements-data";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

export function generateStaticParams() {
  return achievementYears.map((year) => ({ year: year.year }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;
  const archive = achievementYearMap[year];

  if (!archive) {
    return {};
  }

  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale(`/achievements/${year}`, locale);

  return {
    title: isTurkish
      ? `${year} Başarıları — Ölmez`
      : `${year} Achievements — Ölmez`,
    description: archive.summary,
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish
        ? `${year} Başarıları — Ölmez`
        : `${year} Achievements — Ölmez`,
      description: archive.summary,
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
  };
}

export default async function AchievementYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const archive = achievementYearMap[year];

  if (!archive) {
    notFound();
  }

  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, #1a120d 0%, #10150f 60%, #050505 100%)",
      }}
    >
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backHref={withLocale("/achievements", locale)}
        backLabel={isTurkish ? "Başarılara dön" : "Return to achievements"}
        eyebrow={isTurkish ? "Yıllık klasör" : "Year folder"}
        title={archive.year}
        italicTail={archive.status === "published" ? (isTurkish ? "aktif kayıt." : "published record.") : (isTurkish ? "hazır yapı." : "prepared structure.")}
        dek={archive.summary}
        meta={[
          { label: isTurkish ? "Durum" : "Status", value: archive.status },
          { label: isTurkish ? "Kategori" : "Categories", value: String(archive.categories.length) },
          { label: isTurkish ? "Departman" : "Department", value: isTurkish ? "Başarılar" : "Achievements" },
          { label: isTurkish ? "Marka" : "Brand", value: "Ölmez" },
        ]}
      />

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12">
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={archive.heroImage.src}
              alt={archive.heroImage.alt}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Yıllık not" : "Year note"}
            </span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {archive.status === "published"
                ? isTurkish
                  ? "Bu yıl dolu bir arşiv olarak yayınlandı."
                  : "This year is published as a full archive."
                : isTurkish
                  ? "Bu yıl yapı olarak hazırlandı."
                  : "This year is prepared as a reporting scaffold."}
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/68">
              {archive.status === "published"
                ? "Each category below holds the business, technology, education, and public-facing record for the year."
                : "Each category below is already created so the year can be archived using the same reporting rhythm and same naming discipline."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-6 xl:grid-cols-2">
            {archive.categories.map((category) => (
              <article
                key={category.slug}
                className="overflow-hidden border border-white/10 bg-black/30"
              >
                <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-72 overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
                    <Image
                      src={category.image.src}
                      alt={category.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                      {archive.year}
                    </p>
                    <h3 className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">
                      {category.title}
                    </h3>
                    <p className="mt-4 text-sm leading-[1.85] text-white/64">
                      {category.summary}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {category.highlights.map((item) => (
                        <li key={item} className="text-sm leading-[1.8] text-white/68">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href={withLocale("/social-responsibility", locale)}
              className="inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              {isTurkish ? "Sosyal sorumluluk sayfası" : "Social responsibility page"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={withLocale("/company-profile", locale)}
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
            >
              {isTurkish ? "Şirket profili" : "Company profile"}
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
