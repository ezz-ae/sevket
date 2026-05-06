import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { leadershipProfileMap, leadershipProfiles } from "@/lib/leadership-data";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

export function generateStaticParams() {
  return leadershipProfiles.map((profile) => ({ slug: profile.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = leadershipProfileMap[slug];

  if (!profile) {
    return {};
  }

  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale(`/people/leadership/${profile.slug}`, locale);

  return {
    title: isTurkish
      ? `${profile.name} — Ölmez Liderlik Yazısı`
      : `${profile.name} — Ölmez Leadership Article`,
    description: profile.summary,
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish
        ? `${profile.name} — Ölmez Liderlik Yazısı`
        : `${profile.name} — Ölmez Leadership Article`,
      description: profile.summary,
      url: `${baseUrl}${localizedPath}`,
      type: "article",
      images: [
        {
          url: profile.image.src,
          alt: profile.image.alt,
        },
      ],
    },
  };
}

export default async function LeadershipProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = leadershipProfileMap[slug];

  if (!profile) {
    notFound();
  }

  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const relatedProfiles = leadershipProfiles.filter(
    (item) => item.slug !== profile.slug
  );

  return (
    <main className="relative min-h-screen bg-[#050505] text-white">
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backHref={withLocale("/people/leadership", locale)}
        backLabel={isTurkish ? "Liderlik yazılarına dön" : "Return to leadership articles"}
        eyebrow={isTurkish ? "Liderlik profili" : "Leadership profile"}
        title={profile.name}
        italicTail={profile.title}
        dek={profile.summary}
        meta={[
          { label: isTurkish ? "Bölge" : "Region", value: profile.region },
          { label: isTurkish ? "Biçim" : "Format", value: isTurkish ? "Makale" : "Article" },
          { label: isTurkish ? "Koleksiyon" : "Collection", value: isTurkish ? "İnsanlar" : "People" },
          { label: isTurkish ? "Marka" : "Brand", value: "Ölmez" },
        ]}
      />

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={profile.image.src}
              alt={profile.image.alt}
              width={1200}
              height={1600}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Rol notu" : "Role note"}
            </span>
            <h2 className="mt-6 max-w-[14ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "Bu profil şirket içinde hangi yükü taşıyor?"
                : "What load does this profile carry inside the company?"}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.9] text-white/68">
              {profile.article.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-12">
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Bağlantılı sayfalar" : "Connected pages"}
            </span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "Bu liderlik hikayesi daha büyük sistemin parçasıdır."
                : "This leadership article sits inside a larger company system."}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  label: isTurkish ? "Sosyal sorumluluk" : "Social responsibility",
                  href: withLocale("/social-responsibility", locale),
                },
                {
                  label: isTurkish ? "Başarılar" : "Achievements",
                  href: withLocale("/achievements", locale),
                },
                {
                  label: isTurkish ? "Şirket profili" : "Company profile",
                  href: withLocale("/company-profile", locale),
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-24 flex-col justify-between border border-white/10 bg-black/30 p-5 transition-colors hover:border-[#b8865a]"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                    Ölmez
                  </span>
                  <span className="font-display text-2xl tracking-[-0.03em] text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.images.reception.src}
              alt={olmezBrandAssets.images.reception.alt}
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Sonraki profiller" : "More profiles"}
              </span>
              <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl">
                {isTurkish ? "Aynı koleksiyondan devam edin." : "Continue through the collection."}
              </h2>
            </div>
            <Link
              href={withLocale("/people/leadership", locale)}
              className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/72 hover:text-[#e7bc8b] md:inline-flex"
            >
              {isTurkish ? "Tüm profiller" : "All profiles"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {relatedProfiles.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={withLocale(`/people/leadership/${item.slug}`, locale)}
                className="group overflow-hidden border border-white/10 bg-black/30"
              >
                <div className="relative aspect-[0.9] overflow-hidden border-b border-white/10">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-2xl tracking-[-0.03em] text-white">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/46">
                    {item.title}
                  </p>
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
