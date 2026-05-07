import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";
import { brands } from "@/lib/brands-data";
import { olmezBrandAssets, shawarmaTimeAssets } from "@/lib/olmez-brand-assets";
import { siteMetrics } from "@/lib/site-metrics";

export const metadata: Metadata = {
  title: "Brands & Operating Platforms — Ölmez",
  description:
    "The Ölmez network separated into restaurant brands and operating platforms: Shawerma Time, Turkish PIDE Co., Ölmez, AFFAREM, and DISCIPLINA.",
};

const restaurantSlugs = ["shawarmer", "turkishpide", "olmez"];
const platformSlugs = ["affarem", "disciplina"];

const gallery = [
  { src: shawarmaTimeAssets.storefrontDay.src, alt: shawarmaTimeAssets.storefrontDay.alt, label: "Restaurant branch" },
  { src: olmezBrandAssets.images.reception.src, alt: olmezBrandAssets.images.reception.alt, label: "Headquarters" },
  { src: olmezBrandAssets.images.teamSummit.src, alt: olmezBrandAssets.images.teamSummit.alt, label: "Team record" },
  { src: olmezBrandAssets.images.fleet.src, alt: olmezBrandAssets.images.fleet.alt, label: "Fleet identity" },
  { src: olmezBrandAssets.images.villageEducation.src, alt: olmezBrandAssets.images.villageEducation.alt, label: "Education program" },
  { src: olmezBrandAssets.images.paidInternship.src, alt: olmezBrandAssets.images.paidInternship.alt, label: "Training pathway" },
];

export default function BrandsPage() {
  const restaurantBrands = brands.filter((brand) => restaurantSlugs.includes(brand.slug));
  const platforms = brands.filter((brand) => platformSlugs.includes(brand.slug));

  return (
    <main className="min-h-screen bg-white text-gray-950">
      <Navigation forceScrolled />
      <section className="border-t border-gray-300 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8b5f3d]">Brands & Operating Platforms</span>
          <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
            Show the network, not random visuals.
          </h1>
          <p className="mt-7 max-w-[64ch] text-base leading-[1.85] text-gray-600">
            The public should understand what sells food and what controls the operating system. Restaurant brands and operating platforms are separated here.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Canonical brands", siteMetrics.brands],
              ["Restaurants owned / managed", siteMetrics.restaurantsOwnedManaged],
              ["Countries", siteMetrics.countries],
            ].map(([label, value]) => (
              <div key={label} className="border border-gray-300 bg-gray-50 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">{label}</p>
                <p className="mt-3 font-display text-4xl tracking-[-0.04em]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-300 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-2">
          <BrandColumn title="Restaurant Brands" items={restaurantBrands} />
          <BrandColumn title="Operating Platforms" items={platforms} />
        </div>
      </section>

      <section className="border-t border-gray-300 bg-gray-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Inside the Network</span>
          <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em] md:text-7xl">
            Operations, teams, branches, training, supply, field work.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.label} className="border border-gray-300 bg-white">
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
      <FooterSection />
    </main>
  );
}

function BrandColumn({ title, items }: { title: string; items: typeof brands }) {
  return (
    <section className="border border-gray-300 bg-gray-50 p-6">
      <h2 className="font-display text-5xl tracking-[-0.04em]">{title}</h2>
      <div className="mt-8 grid gap-4">
        {items.map((brand) => (
          <Link key={brand.slug} href={`/brands/${brand.slug}`} className="group border border-gray-300 bg-white p-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">{brand.focusMarket}</p>
                <h3 className="mt-3 font-display text-3xl tracking-[-0.03em]">{brand.name}</h3>
                <p className="mt-4 text-sm leading-[1.8] text-gray-600">{brand.tagline}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
