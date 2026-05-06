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
import { withLocale } from "@/lib/site-locale";
import { getBrand, brands } from "@/lib/brands-data";
import { brandPortals, type BrandPortalCard, type BrandPortalLink } from "@/lib/brand-portal-data";

interface BrandPageProps {
  params: {
    slug: string;
  };
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
  const brand = getBrand(params.slug);
  const portal = brandPortals[params.slug];

  if (!brand || !portal) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brand.name} Portal — Branches, Team, Investment & Reviews`,
    description: portal.hero.body,
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
  const brand = getBrand(params.slug);
  const portal = brandPortals[params.slug];
  const locale = await getRequestLocale();

  if (!brand || !portal) {
    notFound();
  }

  const otherBrands = brands.filter((item) => item.slug !== brand.slug);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <section className="border-b border-foreground/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-12">
          <div className="flex flex-col justify-center">
            <span
              className="font-mono text-[11px] uppercase tracking-[0.22em]"
              style={{ color: brand.theme.primary }}
            >
              {portal.hero.eyebrow}
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
              {portal.hero.body}
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
              <span>Founded {brand.founded}</span>
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
                {portal.hero.image.caption}
              </p>
              <p className="mt-3 max-w-[36ch] text-sm leading-[1.7] text-white/82">
                {brand.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/10 bg-foreground/[0.02] py-10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {portalSections.map((section) => (
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
        eyebrow={`${brand.name} network`}
        title="Branch Network"
        intro={portal.branchesIntro}
        cards={portal.branches}
        accent={brand.theme.primary}
      />

      <PortalCardsSection
        id="team"
        eyebrow={`${brand.name} people`}
        title="Team Structure"
        intro={portal.teamIntro}
        cards={portal.team}
        accent={brand.theme.secondary}
      />

      <PortalCardsSection
        id="investment"
        eyebrow={`${brand.name} capital`}
        title="Investment Paths"
        intro={portal.investmentIntro}
        cards={portal.investments}
        accent={brand.theme.primary}
      />

      <PortalCardsSection
        id="investors"
        eyebrow={`${brand.name} investors`}
        title="Investor Architecture"
        intro={portal.investorsIntro}
        cards={portal.investors}
        accent={brand.theme.accent}
      />

      <section
        id="reviews"
        className="scroll-mt-28 border-t border-foreground/10 bg-foreground/[0.015] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Review and reporting
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Review & Reports
            </h2>
            <p className="mt-6 max-w-[62ch] text-base leading-[1.8] text-foreground/70">
              {portal.reviewsIntro}
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
                        {link.label}
                      </h3>
                      <p className="mt-4 text-sm leading-[1.8] text-foreground/68">
                        {link.description}
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
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Local archive
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Visual Archive
            </h2>
            <p className="mt-6 max-w-[62ch] text-base leading-[1.8] text-foreground/70">
              {portal.archiveIntro}
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

      <section className="border-t border-foreground/10 bg-foreground/[0.015] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex items-end justify-between gap-10">
            <div className="max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Ecosystem navigation
              </span>
              <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
                Other Brands
              </h2>
              <p className="mt-6 text-base leading-[1.8] text-foreground/70">
                Every brand now has its own portal surface for branches, people,
                investment, investors, and reviews.
              </p>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <Wallet className="h-5 w-5 text-muted-foreground" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Portfolio-ready navigation
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
                      <span>{otherBrand.unitCount} units</span>
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
