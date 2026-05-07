import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  FileText,
  FolderOpen,
  Leaf,
  Users,
  Wallet,
} from "lucide-react";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";
import { getBrand, brands } from "@/lib/brands-data";
import { localizeBrand, localizeBrands } from "@/lib/brand-copy";
import { brandPortals, type BrandPortalCard, type BrandPortalLink } from "@/lib/brand-portal-data";

interface BrandPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const portalSections = [
  { id: "branches", label: "Branches" },
  { id: "team", label: "Team" },
  { id: "investment", label: "Investment" },
  { id: "investors", label: "Investors" },
  { id: "reviews", label: "Reviews" },
  { id: "archive", label: "Archive" },
] as const;

const linkIcons = {
  reports: FileText,
  events: Calendar,
  magazine: BookOpen,
  leadership: Users,
  profile: Building2,
  achievements: FolderOpen,
  social: Leaf,
} satisfies Record<BrandPortalLink["kind"], typeof FileText>;

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sourceBrand = getBrand(slug);
  const portal = brandPortals[slug];
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const brand = sourceBrand ? localizeBrand(sourceBrand, locale) : undefined;
  const localizedPath = withLocale(`/brands/${slug}`, locale);

  if (!brand || !portal) {
    return {
      title: isTurkish ? "Marka Bulunamadı" : "Brand Not Found",
    };
  }

  return {
    title: isTurkish
      ? `${brand.name} Portalı — Şubeler, Ekip, Yatırım ve İncelemeler`
      : `${brand.name} Portal — Branches, Team, Investment & Reviews`,
    description: isTurkish
      ? `${brand.name} için şubeler, ekip yapısı, yatırım modelleri, yatırımcı katmanları ve arşiv yüzeyleri.`
      : portal.hero.body,
    alternates: {
      canonical: `https://olmez.us${localizedPath}`,
    },
  };
}

export async function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

function PortalCardsSection({
  id,
  eyebrow,
  title,
  intro,
  cards,
  accent,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  cards: BrandPortalCard[];
  accent: string;
}) {
  return (
    <section id={id} className="border-t border-foreground/10 py-24 lg:py-32 scroll-mt-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-[62ch] text-base leading-[1.8] text-foreground/70">
            {intro}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="border border-foreground/15 bg-background p-8"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {card.eyebrow}
              </span>
              <h3 className="mt-4 font-display text-2xl tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-[1.8] text-foreground/68">
                {card.body}
              </p>
              <div
                className="mt-8 inline-flex min-h-10 items-center border px-4 font-mono text-[10px] uppercase tracking-[0.18em]"
                style={{ borderColor: accent, color: accent }}
              >
                {card.metric}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const sourceBrand = getBrand(slug);
  const portal = brandPortals[slug];
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const brand = sourceBrand ? localizeBrand(sourceBrand, locale) : undefined;

  if (!brand || !portal) {
    notFound();
  }

  const otherBrands = localizeBrands(brands, locale).filter(
    (item) => item.slug !== brand.slug
  );
  const sectionLabels = isTurkish
    ? [
        { id: "branches", label: "Şubeler" },
        { id: "team", label: "Ekip" },
        { id: "investment", label: "Yatırım" },
        { id: "investors", label: "Yatırımcılar" },
        { id: "reviews", label: "İncelemeler" },
        { id: "archive", label: "Arşiv" },
      ]
    : portalSections;

  const localizedLinks: Record<
    BrandPortalLink["kind"],
    { label: string; description: string }
  > = isTurkish
    ? {
        reports: {
          label: "Rapor Merkezi",
          description: "Stratejik raporlar, sermaye dağılımı ve performans sınıfları.",
        },
        events: {
          label: "Etkinlik Takvimi",
          description: "Yatırımcı buluşmaları, oturumlar ve liderlik brifingleri.",
        },
        magazine: {
          label: "Dergi",
          description: "Field Notes sayıları, kapaklar ve editoryal içerik.",
        },
        leadership: {
          label: "Liderlik Profilleri",
          description: "Aktif Ölmez liderlik ekibi için bireysel yazılar.",
        },
        profile: {
          label: "Şirket Profili",
          description: "Yerel arşivle kurulmuş 10 bölümlük editoryal profil.",
        },
        achievements: {
          label: "Başarılar",
          description: "Yıllık yapıda arşivlenmiş başarı klasörleri ve özetler.",
        },
        social: {
          label: "Sosyal Sorumluluk",
          description: "Ağaçlandırma, eğitim desteği ve kamu faydası programları.",
        },
      }
    : {
        reports: {
          label: "Reports Hub",
          description: "Strategic reports, capital deployment, and performance tiers.",
        },
        events: {
          label: "Events Calendar",
          description: "Investor meetings, branch sessions, and leadership briefings.",
        },
        magazine: {
          label: "Magazine",
          description: "Field Notes, issue covers, and long-form editorial pieces.",
        },
        leadership: {
          label: "Leadership Profiles",
          description: "Individual articles for the active Ölmez leadership group.",
        },
        profile: {
          label: "Company Profile",
          description: "The ten-section editorial profile built from the local archive.",
        },
        achievements: {
          label: "Achievements",
          description: "Year-structured achievements folders with annual summaries.",
        },
        social: {
          label: "Social Responsibility",
          description: "Tree planting, education support, and public-value commitments.",
        },
      };

  const portalCopy = isTurkish
    ? {
        heroEyebrow: "Marka komuta yüzeyi",
        heroBody: brand.description,
        heroCaption: `${brand.name} için yerel arşivden seçilmiş ana görsel.`,
        branchesIntro:
          "Şube katmanı otorite ile nakit akışını birbirinden ayırır. Amiral gemisi odalar güven kurar; yüksek akışlı üniteler tekrar eden üretim ve ölçülebilir geri dönüş sağlar.",
        teamIntro:
          "Ekip yapısı gösterişli unvanlar etrafında değil, sorumluluk katmanları etrafında kurulur. Operasyonel gerçek, kurumsal güven ve insan disiplini ayrı ayrı korunur.",
        investmentIntro:
          "Yatırım yolları gösteriş için değil, işletme amacına göre ayrılır. Her model farklı bir risk, hız ve sermaye dönüşü profiline cevap verir.",
        investorsIntro:
          "Yatırımcı katmanı işi uzaktan izlemek için değil, görünür bir kontrol yüzeyine katılmak için tasarlanır. Hesap verebilirlik sistemin merkezindedir.",
        reviewsIntro:
          "İnceleme ritmi günlük saha verisinden yıllık arşive kadar uzanır. Zayıf varlıklar hikaye arkasına saklanmadan erken görünür hale getirilir.",
        archiveIntro:
          "Bu arşiv yüzeyi artık doğrudan yerel görsel kütüphaneye bağlıdır. Kullanılan kareler marka yüzeyini besleyen gerçek kayıtların kendisidir.",
      }
    : {
        heroEyebrow: portal.hero.eyebrow,
        heroBody: portal.hero.body,
        heroCaption: portal.hero.image.caption,
        branchesIntro: portal.branchesIntro,
        teamIntro: portal.teamIntro,
        investmentIntro: portal.investmentIntro,
        investorsIntro: portal.investorsIntro,
        reviewsIntro: portal.reviewsIntro,
        archiveIntro: portal.archiveIntro,
      };

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <section
        className="border-b border-foreground/10 py-24 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(180deg, ${brand.theme.primary}18 0%, ${brand.theme.secondary}10 42%, transparent 100%)`,
        }}
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-12">
          <div className="flex flex-col justify-center">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.22em]"
              style={{ color: brand.theme.primary }}
            >
              {portalCopy.heroEyebrow}
            </span>
            <h1 className="mt-6 font-display text-5xl tracking-[-0.04em] md:text-6xl lg:text-7xl">
              {brand.name}
            </h1>

            {brand.arabicName ? (
              <p className="mt-4 font-display text-3xl text-foreground/55">
                {brand.arabicName}
              </p>
            ) : null}

            <p className="mt-8 max-w-[60ch] text-lg leading-[1.75] text-foreground/72">
              {portalCopy.heroBody}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {brand.keyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-foreground/15 bg-foreground/[0.02] p-5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-display text-2xl tracking-[-0.02em]">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-foreground/62">
              <span>{isTurkish ? "Kuruluş" : "Founded"} {brand.founded}</span>
              <span>•</span>
              <span>{brand.headquarters}</span>
              <span>•</span>
              <span>{brand.focusMarket}</span>
            </div>
          </div>

          <div className="relative min-h-[28rem] overflow-hidden border border-foreground/15 bg-foreground/[0.03] lg:min-h-[42rem]">
            <Image
              src={portal.hero.image.src}
              alt={portal.hero.image.alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">
                {portalCopy.heroCaption}
              </p>
              <p className="mt-3 max-w-[36ch] text-sm leading-[1.7] text-white/82">
                {brand.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-foreground/10 py-10"
        style={{ backgroundColor: `${brand.theme.secondary}10` }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {sectionLabels.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="border border-foreground/15 px-4 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/68 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {section.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PortalCardsSection
        id="branches"
        eyebrow={isTurkish ? `${brand.name} ağı` : `${brand.name} network`}
        title={isTurkish ? "Şube Ağı" : "Branch Network"}
        intro={portalCopy.branchesIntro}
        cards={portal.branches}
        accent={brand.theme.primary}
      />

      <PortalCardsSection
        id="team"
        eyebrow={isTurkish ? `${brand.name} ekibi` : `${brand.name} people`}
        title={isTurkish ? "Ekip Yapısı" : "Team Structure"}
        intro={portalCopy.teamIntro}
        cards={portal.team}
        accent={brand.theme.secondary}
      />

      <PortalCardsSection
        id="investment"
        eyebrow={isTurkish ? `${brand.name} sermayesi` : `${brand.name} capital`}
        title={isTurkish ? "Yatırım Modelleri" : "Investment Paths"}
        intro={portalCopy.investmentIntro}
        cards={portal.investments}
        accent={brand.theme.primary}
      />

      <PortalCardsSection
        id="investors"
        eyebrow={isTurkish ? `${brand.name} yatırımcıları` : `${brand.name} investors`}
        title={isTurkish ? "Yatırımcı Yapısı" : "Investor Architecture"}
        intro={portalCopy.investorsIntro}
        cards={portal.investors}
        accent={brand.theme.accent}
      />

      <section
        id="reviews"
        className="scroll-mt-28 border-t border-foreground/10 py-24 lg:py-32"
        style={{ backgroundColor: `${brand.theme.primary}0c` }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "İnceleme ve raporlama" : "Review and reporting"}
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish ? "İnceleme ve Raporlar" : "Review & Reports"}
            </h2>
            <p className="mt-6 max-w-[62ch] text-base leading-[1.8] text-foreground/70">
              {portalCopy.reviewsIntro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {portal.reviews.map((card) => (
              <article
                key={card.title}
                className="border border-foreground/15 bg-background p-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {card.eyebrow}
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.8] text-foreground/68">
                  {card.body}
                </p>
                <div
                  className="mt-8 inline-flex min-h-10 items-center border px-4 font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{ borderColor: brand.theme.primary, color: brand.theme.primary }}
                >
                  {card.metric}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portal.links.map((link) => {
              const Icon = linkIcons[link.kind];

              return (
                <Link
                  key={link.href}
                  href={withLocale(link.href, locale)}
                  className="group border border-foreground/15 bg-background p-8 transition-colors hover:bg-foreground/[0.03]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full"
                        style={{ backgroundColor: brand.theme.primary }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <h3 className="mt-6 font-display text-2xl tracking-[-0.02em]">
                        {localizedLinks[link.kind].label}
                      </h3>
                      <p className="mt-4 text-sm leading-[1.8] text-foreground/68">
                        {localizedLinks[link.kind].description}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="archive"
        className="scroll-mt-28 border-t border-foreground/10 py-24 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(180deg, transparent 0%, ${brand.theme.secondary}0f 100%)`,
        }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Yerel arşiv" : "Local archive"}
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish ? "Görsel Arşiv" : "Visual Archive"}
            </h2>
            <p className="mt-6 max-w-[62ch] text-base leading-[1.8] text-foreground/70">
              {portalCopy.archiveIntro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portal.archive.map((item) => (
              <figure
                key={`${item.src}-${item.caption}`}
                className="overflow-hidden border border-foreground/15 bg-background"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-foreground/10 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-t border-foreground/10 py-24 lg:py-32"
        style={{ backgroundColor: `${brand.theme.accent}0a` }}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-end justify-between gap-10">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {isTurkish ? "Ekosistem geçişi" : "Ecosystem navigation"}
              </span>
              <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
                {isTurkish ? "Diğer Markalar" : "Other Brands"}
              </h2>
              <p className="mt-6 text-base leading-[1.8] text-foreground/70">
                {isTurkish
                  ? "Artık her markanın şube, ekip, yatırım, yatırımcı ve inceleme katmanlarını taşıyan kendi portal yüzeyi var."
                  : "Every brand now has its own portal surface for branches, people, investment, investors, and reviews."}
              </p>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Wallet className="h-5 w-5 text-muted-foreground" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {isTurkish ? "Portföy hazır geçiş" : "Portfolio-ready navigation"}
              </span>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {otherBrands.slice(0, 4).map((otherBrand) => {
              const otherPortal = brandPortals[otherBrand.slug];

              return (
                <Link
                  key={otherBrand.slug}
                  href={withLocale(`/brands/${otherBrand.slug}`, locale)}
                  className="group overflow-hidden border border-foreground/15 bg-background transition-colors hover:bg-foreground/[0.03]"
                >
                  {otherPortal ? (
                    <div className="relative aspect-[4/3] border-b border-foreground/10">
                      <Image
                        src={otherPortal.hero.image.src}
                        alt={otherPortal.hero.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : null}

                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {otherBrand.focusMarket}
                    </p>
                    <h3 className="mt-4 font-display text-2xl tracking-[-0.02em]">
                      {otherBrand.name}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.8] text-foreground/68">
                      {otherBrand.tagline}
                    </p>
                    <div className="mt-6 flex items-center justify-between text-sm text-foreground/58">
                      <span>
                        {isTurkish
                          ? `${otherBrand.unitCount} birim`
                          : `${otherBrand.unitCount} units`}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
