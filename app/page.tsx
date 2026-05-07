import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Download, FileWarning, FolderOpen, Users } from "lucide-react";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroSection } from "@/components/landing/hero-section";
import { Navigation } from "@/components/landing/navigation";
import { brands, type Brand } from "@/lib/brands-data";
import { networkFeed, publicLibraryFolders } from "@/lib/due-diligence-data";
import { opportunities } from "@/lib/investor-data";
import { olmezBrandAssets, shawarmaTimeAssets } from "@/lib/olmez-brand-assets";
import { peopleTotals } from "@/lib/people-data";
import { getRequestLocale } from "@/lib/server-locale";
import { formatNumber, formatUsd, siteMetrics } from "@/lib/site-metrics";
import { type SiteLocale, withLocale } from "@/lib/site-locale";
import { stories } from "@/lib/stories-data";

const gallery = [
  { src: shawarmaTimeAssets.storefrontDay.src, alt: shawarmaTimeAssets.storefrontDay.alt, label: "Shawerma Time branch" },
  { src: olmezBrandAssets.images.reception.src, alt: olmezBrandAssets.images.reception.alt, label: "Headquarters reception" },
  { src: olmezBrandAssets.images.fleet.src, alt: olmezBrandAssets.images.fleet.alt, label: "Fleet record" },
  { src: olmezBrandAssets.images.treePlanting.src, alt: olmezBrandAssets.images.treePlanting.alt, label: "Tree initiative" },
  { src: olmezBrandAssets.images.paidInternship.src, alt: olmezBrandAssets.images.paidInternship.alt, label: "Hospitality internship" },
  { src: olmezBrandAssets.images.villageEducation.src, alt: olmezBrandAssets.images.villageEducation.alt, label: "Village education" },
];

export default async function Home() {
  const locale = await getRequestLocale();
  const restaurantBrands = brands.filter((brand) => ["olmez", "shawarmer", "turkishpide"].includes(brand.slug));
  const operatingPlatforms = brands.filter((brand) => ["affarem", "disciplina"].includes(brand.slug));

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-gray-950">
      <Navigation />
      <HeroSection locale={locale} />

      <section id="network-records" className="border-t border-gray-300 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Network Records</span>
              <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
                The system starts with records.
              </h2>
            </div>
            <p className="max-w-[46ch] text-sm leading-[1.8] text-gray-600">
              The homepage now carries the figures that matter for due diligence: people, countries, operating restaurants, distributions, market plans, and social responsibility commitments.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Brands", siteMetrics.brands],
              ["Employees", formatNumber(siteMetrics.employees)],
              ["Countries", siteMetrics.countries],
              ["Owned / managed restaurants", siteMetrics.restaurantsOwnedManaged],
              ["Recorded distributions", formatUsd(siteMetrics.recordedDistributionsUsd)],
              ["Projected Shawerma branches 2028", siteMetrics.shawermaBranchesProjected2028],
              ["New market development plan", formatUsd(siteMetrics.newMarketDevelopmentPlanUsd)],
              ["Global funding target 2028", formatUsd(siteMetrics.globalFundingTarget2028Usd)],
            ].map(([label, value]) => (
              <article key={label} className="border border-gray-300 bg-gray-50 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">{label}</p>
                <p className="mt-3 font-display text-3xl tracking-[-0.03em]">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="border-t border-gray-300 bg-[#070707] px-6 py-20 text-white lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#e9c092]">Opportunities</span>
              <h2 className="mt-6 max-w-[11ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
                Access opens by file.
              </h2>
              <p className="mt-7 max-w-[44ch] text-sm leading-[1.85] text-white/64">
                Each opportunity should show market file, access level, status, capital range, review stage, and the next action. No opportunity is sold as risk-free.
              </p>
              <Link href={withLocale("/opportunities", locale)} className="mt-8 inline-flex h-12 items-center gap-3 bg-[#b8865a] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
                Review opportunities
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid gap-4">
              {opportunities.slice(0, 4).map((opp) => (
                <article key={opp.id} className="grid gap-4 border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[1fr_0.7fr_0.7fr]">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">{opp.brand}</p>
                    <h3 className="mt-2 font-display text-2xl tracking-[-0.03em]">{opp.title}</h3>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Capital</p>
                    <p className="mt-2 text-sm text-white/70">{opp.capitalRequired}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Status</p>
                    <p className="mt-2 text-sm text-white/70">{opp.status === "closed" ? "Reserved" : opp.status === "limited" ? "Under Review" : "Available"}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="junior-pools" className="border-t border-gray-300 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Junior Pools</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
              Entry is narrow on purpose.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Junior Level 1", `${formatUsd(siteMetrics.juniorLevel1Min)}-${formatUsd(siteMetrics.juniorLevel1Max)} first month`],
              ["Junior Level 2", `${formatUsd(siteMetrics.juniorLevel2Max)} cap after review`],
              ["Maximum period", `${siteMetrics.juniorMaxMonths} months`],
              ["Guarantee language", `${siteMetrics.juniorGuaranteePercent}% only under signed terms`],
            ].map(([label, value]) => (
              <article key={label} className="border border-gray-300 bg-gray-50 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">{label}</p>
                <p className="mt-3 font-display text-3xl tracking-[-0.03em]">{value}</p>
              </article>
            ))}
            <Link href={withLocale("/junior-investor-program", locale)} className="inline-flex min-h-32 items-center justify-between gap-4 border border-[#8b5f3d] bg-[#8b5f3d] p-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white sm:col-span-2">
              Open Junior Investor Program
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="risk-management" className="border-t border-gray-300 bg-gray-50 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Risk Management</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
              Access is increased after risk review.
            </h2>
            <Link href={withLocale("/risk-management", locale)} className="mt-8 inline-flex h-12 items-center gap-3 bg-gray-950 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Open risk center
              <FileWarning className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Entry Policy", "Senior Opportunity", "Regulatory Holding", "Allocation Options", "Account Restrictions", "Risk Statement"].map((item) => (
              <article key={item} className="border border-gray-300 bg-white p-5">
                <p className="font-display text-2xl tracking-[-0.03em]">{item}</p>
                <p className="mt-3 text-sm leading-[1.75] text-gray-600">Status, document, account, review, and next action must be visible.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="people" className="border-t border-gray-300 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">People</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
              Hiring is a country file.
            </h2>
            <Link href={withLocale("/people", locale)} className="mt-8 inline-flex h-12 items-center gap-3 bg-[#8b5f3d] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Open people portal
              <Users className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Employees", formatNumber(peopleTotals.employees)],
              ["Countries", peopleTotals.countries],
              ["Open roles", peopleTotals.openRoles],
            ].map(([label, value]) => (
              <article key={label} className="border border-gray-300 bg-gray-50 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">{label}</p>
                <p className="mt-3 font-display text-4xl tracking-[-0.04em]">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="feed" className="border-t border-gray-300 bg-[#070707] px-6 py-20 text-white lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#e9c092]">Articles / Network Feed</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
              Operational updates, not hype.
            </h2>
            <Link href={withLocale("/stories", locale)} className="mt-8 inline-flex h-12 items-center gap-3 border border-white/20 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Open stories and feed
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-4">
            {networkFeed.slice(0, 4).map((item) => (
              <article key={item.text} className="border border-white/10 bg-white/[0.03] p-5">
                <div className="flex flex-wrap justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">{item.type}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">{item.date}</p>
                </div>
                <p className="mt-4 text-sm leading-[1.75] text-white/68">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="shawerma-time" className="border-t border-gray-300 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Shawerma Time</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
              The unit is an operating file.
            </h2>
            <p className="mt-7 max-w-[52ch] text-sm leading-[1.85] text-gray-600">
              Gas-station restaurant opportunities should be understood through market, branch, staffing, food cost, reporting, and distribution readiness.
            </p>
            <Link href={withLocale("/deployment-room", locale)} className="mt-8 inline-flex h-12 items-center gap-3 bg-[#8b5f3d] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Open Review Room
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-gray-300 bg-gray-100">
            <Image src={shawarmaTimeAssets.storefrontDay.src} alt={shawarmaTimeAssets.storefrontDay.alt} fill className="object-cover" />
          </div>
        </div>
      </section>

      <section id="brands" className="border-t border-gray-300 bg-gray-50 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
          <BrandGroup title="Restaurant Brands" brands={restaurantBrands} locale={locale} />
          <BrandGroup title="Operating Platforms" brands={operatingPlatforms} locale={locale} />
        </div>
      </section>

      <section id="gallery" className="border-t border-gray-300 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Inside the Network</span>
          <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
            Images should show operations.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.label} className="border border-gray-300 bg-gray-50">
                <div className="relative aspect-[4/3]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" />
                </div>
                <figcaption className="border-t border-gray-300 p-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="partners-supply" className="border-t border-gray-300 bg-gray-50 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Partners & Supply</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
              Supply is part of control.
            </h2>
            <Link href={withLocale("/partners-supply", locale)} className="mt-8 inline-flex h-12 items-center gap-3 bg-gray-950 px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Open supply page
              <Building2 className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {["U.S. farm", "Halal standard", "Fleet rental cycle", "Procurement needs"].map((item) => (
              <article key={item} className="border border-gray-300 bg-white p-6">
                <p className="font-display text-3xl tracking-[-0.03em]">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="download-center" className="border-t border-gray-300 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Download Center</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
              Files before persuasion.
            </h2>
            <Link href={withLocale("/download-center", locale)} className="mt-8 inline-flex h-12 items-center gap-3 bg-[#8b5f3d] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Open Download Center
              <Download className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publicLibraryFolders.slice(0, 6).map((folder) => (
              <article key={folder} className="border border-gray-300 bg-gray-50 p-5">
                <FolderOpen className="h-5 w-5 text-[#8b5f3d]" />
                <p className="mt-5 font-display text-2xl tracking-[-0.03em]">{folder}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

function BrandGroup({ title, brands: list, locale }: { title: string; brands: Brand[]; locale: SiteLocale }) {
  return (
    <section className="border border-gray-300 bg-white p-6">
      <h2 className="font-display text-4xl tracking-[-0.04em]">{title}</h2>
      <div className="mt-8 grid gap-4">
        {list.map((brand) => (
          <Link key={brand.slug} href={withLocale(`/brands/${brand.slug}`, locale)} className="flex items-center justify-between gap-4 border border-gray-300 bg-gray-50 p-5">
            <div>
              <p className="font-display text-2xl tracking-[-0.03em]">{brand.name}</p>
              <p className="mt-2 text-sm text-gray-600">{brand.tagline}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}
