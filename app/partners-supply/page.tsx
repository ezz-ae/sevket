import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, Leaf, Package, Shirt } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { supplyInterests } from "@/lib/due-diligence-data";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Partners & Supply — Ölmez",
  description: "Supply-side development, U.S. farm, halal standards, procurement needs, fleet rules, English teachers, and operating depth.",
  alternates: { canonical: `${baseUrl}/partners-supply` },
};

export default function PartnersSupplyPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f1] text-gray-950">
      <Navigation forceScrolled />
      <section className="border-t border-gray-300 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8b5f3d]">Partners & Supply</span>
          <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
            Operating depth is supply depth.
          </h1>
          <p className="mt-7 max-w-[64ch] text-base leading-[1.85] text-gray-600">
            Ölmez treats supply, farm development, halal standards, fleet cycles, procurement, training, and accommodation as operating infrastructure.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-300 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["U.S. Farm", "Ölmez operates a U.S. farm as part of supply-side development.", Leaf],
            ["Halal Standard", "All food operations follow halal food standards.", Package],
            ["Fleet & Mobility", "UK and U.S. rented cars only. Brand-new vehicles. 3-year rental cycle.", Car],
            ["Procurement Needs", "Staff clothing, computers, outdoor equipment, branch units, and accommodation near stations.", Shirt],
          ].map(([title, body, Icon]) => {
            const TypedIcon = Icon as typeof Leaf;
            return (
              <article key={title as string} className="border border-gray-300 bg-white p-6">
                <TypedIcon className="h-5 w-5 text-[#8b5f3d]" />
                <h2 className="mt-5 font-display text-3xl tracking-[-0.03em]">{title as string}</h2>
                <p className="mt-4 text-sm leading-[1.8] text-gray-600">{body as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-gray-300 bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Supply interests</span>
            <h2 className="mt-6 font-display text-5xl tracking-[-0.04em]">Supplier categories under review.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {supplyInterests.map((item) => (
              <div key={item} className="border border-gray-300 bg-gray-50 p-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1400px] gap-5 lg:grid-cols-2">
          <article className="border border-gray-300 p-6">
            <h3 className="font-display text-3xl tracking-[-0.03em]">English Teachers</h3>
            <p className="mt-4 text-sm leading-[1.8] text-gray-600">Freelance English teachers are needed for Turkish chefs entering international hospitality environments.</p>
          </article>
          <article className="border border-gray-300 p-6">
            <h3 className="font-display text-3xl tracking-[-0.03em]">Market Rates</h3>
            <p className="mt-4 text-sm leading-[1.8] text-gray-600">Rates and vehicle needs are defined by market, branch density, insurance, rental cycle, and operating schedule.</p>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-[1400px]">
          <Link href="/open-tenders" className="inline-flex h-12 items-center gap-3 bg-[#8b5f3d] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            Submit supplier offer
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
