import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { leadershipProfiles } from "@/lib/leadership-data";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/people/leadership", locale);

  return {
    title: isTurkish
      ? "Liderlik Yazıları — Ölmez"
      : "Leadership Articles — Ölmez",
    description: isTurkish
      ? "Ölmez liderlik ekibi için bireysel yazılar, rol açıklamaları ve şirket içindeki katkı alanları."
      : "Individual editorial profiles for the Ölmez leadership group, focused on each person’s part in the company system.",
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish
        ? "Liderlik Yazıları — Ölmez"
        : "Leadership Articles — Ölmez",
      description: isTurkish
        ? "Şirket sisteminin farklı katmanlarını taşıyan liderlik profilleri."
        : "Leadership profiles across the people, growth, governance, finance, and public-facing layers of the company system.",
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
  };
}

export default async function LeadershipIndexPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, #170f0b 0%, #050505 38%, #121712 100%)",
      }}
    >
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backHref={withLocale("/people", locale)}
        backLabel={isTurkish ? "İnsan portalına dön" : "Return to people portal"}
        eyebrow={isTurkish ? "Liderlik yazıları" : "Leadership articles"}
        title={isTurkish ? "Şirketi taşıyan" : "The people carrying"}
        italicTail={isTurkish ? "roller." : "the system."}
        dek={
          isTurkish
            ? "Donia, Sally ve CEO rolü hariç tutularak hazırlanan bu liderlik dizisi, her kişinin şirkette hangi katmanı taşıdığını açıklıyor."
            : "A focused leadership series built around the remaining Ölmez people list, excluding Donia, Sally, and CEO-titled roles, and explaining what each person carries inside the company."
        }
        meta={[
          { label: isTurkish ? "Yazı sayısı" : "Profiles", value: String(leadershipProfiles.length) },
          { label: isTurkish ? "Pazarlar" : "Markets", value: isTurkish ? "TR / ABD / BK" : "TR / US / UK" },
          { label: isTurkish ? "Biçim" : "Format", value: isTurkish ? "Editoryal" : "Editorial" },
          { label: isTurkish ? "Varlıklar" : "Assets", value: isTurkish ? "Yerel görseller" : "Local imagery" },
        ]}
      />

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Editoryal grup" : "Editorial leadership"}
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
              {isTurkish
                ? "İnsanlar burada unvan değil, operasyon katmanıdır."
                : "People are not decorative titles here. They are operating layers."}
            </h2>
            <p className="mt-8 max-w-[60ch] text-base leading-[1.85] text-white/68">
              {isTurkish
                ? "Kültür, pazarlama, kurucu ofisi, yönetim, kamu ilişkileri, satış, etkinlik, raporlama, yönetişim ve Birleşik Krallık görünürlüğü tek bir sistemin farklı yük taşıyan yüzleri olarak ele alınıyor."
                : "Culture, marketing, founder operations, business management, government relations, sales, events, reporting, governance, and UK-facing public presence are treated as separate load-bearing parts of the same company system."}
            </p>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.images.networking.src}
              alt={olmezBrandAssets.images.networking.alt}
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {leadershipProfiles.map((profile) => (
              <article
                key={profile.slug}
                className="group overflow-hidden border border-white/10 bg-black/30"
              >
                <div className="relative aspect-[0.9] overflow-hidden border-b border-white/10">
                  <Image
                    src={profile.image.src}
                    alt={profile.image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                    {profile.region}
                  </p>
                  <h3 className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">
                    {profile.name}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.14em] text-white/46">
                    {profile.title}
                  </p>
                  <p className="mt-5 text-sm leading-[1.85] text-white/64">
                    {profile.summary}
                  </p>
                  <Link
                    href={withLocale(`/people/leadership/${profile.slug}`, locale)}
                    className="mt-7 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/78 transition-colors hover:text-[#e7bc8b]"
                  >
                    {isTurkish ? "Yazıyı aç" : "Open article"}
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
