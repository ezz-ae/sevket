import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { achievementFolderTree, achievementYears } from "@/lib/achievements-data";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/achievements", locale);

  return {
    title: isTurkish ? "Başarılar — Ölmez" : "Achievements — Ölmez",
    description: isTurkish
      ? "Ölmez için yıllara göre düzenlenmiş başarılar bölümü."
      : "The yearly achievements department for Ölmez, organized by annual folders and category structure.",
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish ? "Başarılar — Ölmez" : "Achievements — Ölmez",
      description: isTurkish
        ? "2026, 2027 ve 2028 için kurulu yıllık başarı yapısı."
        : "A yearly achievements structure across 2026, 2027, and 2028.",
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
  };
}

export default async function AchievementsPage() {
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
        eyebrow={isTurkish ? "Başarılar departmanı" : "Achievements department"}
        title={isTurkish ? "Yıllara göre" : "Yearly"}
        italicTail={isTurkish ? "arşiv." : "archive."}
        dek={
          isTurkish
            ? "Başarılar bölümü artık yıllık klasör mantığıyla çalışıyor: her yıl aynı başlıklar, aynı disiplin ve aynı arşiv düzeni."
            : "The achievements department is now structured as a yearly archive: the same category logic, the same reporting discipline, and the same folder order each year."
        }
        meta={[
          { label: isTurkish ? "Canlı yıl" : "Published year", value: "2026" },
          { label: isTurkish ? "Hazır yıllar" : "Prepared years", value: "2027 / 2028" },
          { label: isTurkish ? "Kategoriler" : "Categories", value: "7" },
          { label: isTurkish ? "Durum" : "Status", value: isTurkish ? "Yıllık yapı aktif" : "Annual structure active" },
        ]}
      />

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12">
          <div className="border border-white/10 bg-black/30 p-6 lg:p-8">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Klasör yapısı" : "Folder structure"}
            </span>
            <pre className="mt-8 overflow-x-auto font-mono text-sm leading-7 text-white/78">
              {achievementFolderTree}
            </pre>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={achievementYears[0].heroImage.src}
              alt={achievementYears[0].heroImage.alt}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {achievementYears.map((year) => (
              <article
                key={year.year}
                className="overflow-hidden border border-white/10 bg-black/30"
              >
                <div className="relative aspect-[1.2] overflow-hidden border-b border-white/10">
                  <Image
                    src={year.heroImage.src}
                    alt={year.heroImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-display text-4xl tracking-[-0.03em] text-white">
                      {year.year}
                    </h2>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                      {year.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-[1.85] text-white/64">
                    {year.summary}
                  </p>
                  <div className="mt-6 space-y-2">
                    {year.categories.slice(0, 4).map((category) => (
                      <p
                        key={category.slug}
                        className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38"
                      >
                        {category.title}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={withLocale(`/achievements/${year.year}`, locale)}
                    className="mt-8 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/78 hover:text-[#e7bc8b]"
                  >
                    {isTurkish ? "Yılı aç" : "Open year"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
