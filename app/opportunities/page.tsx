import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Users, Target } from "lucide-react";
import { opportunities } from "@/lib/investor-data";
import { brands, getBrand } from "@/lib/brands-data";
import { localizeBrand } from "@/lib/brand-copy";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { shawarmaTimeAssets, olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Investment Opportunities — Ölmez Franchise Systems",
  description:
    "Active investment opportunities across our 5-brand ecosystem. US gas station expansion, European premium bakeries, flagship restaurants, and technology partnerships.",
  keywords: [
    "investment opportunities",
    "franchise opportunities",
    "shawarma investment",
    "gas station franchise",
    "Turkish restaurant investment",
    "AFFAREM partnership",
    "Olmez opportunities",
  ],
  openGraph: {
    title: "Investment Opportunities — Ölmez Franchise Systems",
    description:
      "Active investment opportunities across our 5-brand ecosystem. From $165K single units to $50M+ institutional partnerships.",
    url: `${baseUrl}/opportunities`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/opportunities`,
  },
};

const statusColors: Record<string, string> = {
  open: "#1B5E20",
  limited: "#D4A574",
  closed: "#8B3A3A",
};

const statusLabels: Record<string, string> = {
  open: "Open",
  limited: "Limited",
  closed: "Closed",
};

export default async function OpportunitiesPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Aktif yatırım fırsatları" : "Active Investment Opportunities"}
        title={isTurkish ? "Sermaye konuşlandırma" : "Capital Deployment"}
        italicTail={isTurkish ? "fırsatları." : "Opportunities."}
        dek={
          isTurkish
            ? "Beş markalı ekosistemimiz genelinde aktif yatırım fırsatları. Her fırsat ön doğrulaması yapılmış lokasyonlar, sertifikalı operatörler ve yüzde 100 AFFAREM izleme içerir."
            : "Active investment opportunities across our 5-brand ecosystem. Each opportunity includes pre-validated sites, certified operators, and 100% AFFAREM monitoring."
        }
        meta={[
          { label: isTurkish ? "Aktif fırsat" : "Active Opportunities", value: opportunities.length.toString() },
          { label: isTurkish ? "Toplam sermaye" : "Total Capital", value: "$14.5M+" },
          { label: isTurkish ? "Ort. geri ödeme" : "Avg Payback", value: isTurkish ? "26 ay" : "26 months" },
          { label: isTurkish ? "Pazar" : "Markets", value: isTurkish ? "8 bölge" : "8 Regions" },
        ]}
      />

      {/* Highlighted brand strip — visual proof of where the capital lands */}
      <section className="border-t border-gray-300 bg-[#0c0a09] text-white py-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                image: shawarmaTimeAssets.counterHouston,
                tag: "SHAWARMA TIME",
                label: isTurkish ? "ABD koridoru" : "US corridor",
                title: isTurkish
                  ? "Houston, Teksas — yakıt durağı koridoru"
                  : "Houston, TX — fuel corridor counter",
              },
              {
                image: olmezBrandAssets.images.fleet,
                tag: "Ölmez Flagship",
                label: isTurkish ? "Birleşik Krallık" : "United Kingdom",
                title: isTurkish
                  ? "Edinburgh ve Londra premium amiral gemileri"
                  : "Edinburgh & London premium flagships",
              },
              {
                image: {
                  src: "/brand-library/affarem-revenue-briefing.png",
                  alt: "AFFAREM revenue briefing",
                },
                tag: "AFFAREM",
                label: isTurkish ? "Kontrol katmanı" : "Control layer",
                title: isTurkish
                  ? "AFFAREM mobil — yatırımcı görünürlüğü"
                  : "AFFAREM mobile — investor visibility",
              },
            ].map((card) => (
              <article key={card.tag} className="group relative overflow-hidden border border-white/10 bg-black/40">
                <div className="relative h-52">
                  <Image
                    src={card.image.src}
                    alt={card.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/0" />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center px-3 h-7 font-mono text-[10px] uppercase tracking-[0.18em] text-white bg-[#b8865a]">
                      {card.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">
                      {card.label}
                    </p>
                    <p className="mt-2 font-display text-lg tracking-[-0.02em] text-white">
                      {card.title}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="relative border-t border-gray-300 py-12 sticky top-[80px] z-40 bg-white/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto gap-4 pb-2">
            <button className="flex-shrink-0 px-6 h-10 border border-gray-900 bg-gray-900 text-white font-mono text-[10px] uppercase tracking-[0.1em]">
              {isTurkish ? "Tüm fırsatlar" : "All Opportunities"} ({opportunities.length})
            </button>
            {brands.map((brand) => {
              const count = opportunities.filter(
                (o) => o.brand === brand.slug
              ).length;
              if (count === 0) return null;
              return (
                <button
                  key={brand.slug}
                  className="flex-shrink-0 px-6 h-10 border border-gray-300 text-gray-700 font-mono text-[10px] uppercase tracking-[0.1em] hover:bg-gray-50 transition-colors"
                >
                  {brand.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities Grid */}
      <section className="relative border-t border-gray-300 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-8">
            {opportunities.map((opp) => {
              const brand = getBrand(opp.brand);
              const allocationPercentage =
                (opp.spotsAllocated / opp.spotsAvailable) * 100;

              return (
                <div
                  key={opp.id}
                  id={opp.id}
                  className="scroll-mt-24 border border-gray-300 hover:border-gray-400 transition-colors overflow-hidden shadow-sm hover:shadow-md"
                >
                  <div
                    className="h-1"
                    style={{
                      backgroundColor: brand?.theme.primary || "#8B5A3C",
                    }}
                  />
                  <div className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-4 flex-wrap mb-6">
                          <span
                            className="px-3 h-7 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                            style={{
                              backgroundColor: brand?.theme.primary || "#8B5A3C",
                            }}
                          >
                            {brand?.name || "Ölmez"}
                          </span>
                          <span
                            className="px-3 h-7 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                            style={{ backgroundColor: statusColors[opp.status] }}
                          >
                            {isTurkish
                              ? ({
                                  open: "Açık",
                                  limited: "Sınırlı",
                                  closed: "Kapalı",
                                }[opp.status] || statusLabels[opp.status])
                              : statusLabels[opp.status]}
                          </span>
                          <span className="px-3 h-7 inline-flex items-center font-mono text-[10px] uppercase tracking-[0.18em] border border-gray-300 text-gray-700">
                            {opp.type}
                          </span>
                        </div>

                        <h3 className="font-display text-3xl lg:text-4xl tracking-[-0.015em] mb-4 text-gray-900">
                          {opp.title}
                        </h3>

                        <p className="text-base text-gray-600 leading-[1.7] mb-6">
                          {opp.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 mb-6">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600 mb-1">
                                {isTurkish ? "Pazarlar" : "Markets"}
                              </p>
                              <p className="text-sm text-gray-700">{opp.states.join(", ")}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600 mb-1">
                                {isTurkish ? "Zaman planı" : "Timeline"}
                              </p>
                              <p className="text-sm text-gray-700">{opp.timeline}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600 mb-3">
                            {isTurkish ? "Yatırım başlıkları" : "Investment Highlights"}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {opp.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="text-sm text-gray-600 flex items-center gap-2"
                              >
                                <span className="text-gray-400">→</span>
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <div className="border border-gray-300 p-6 bg-gray-50">
                          <div className="space-y-6">
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600 mb-2">
                                {isTurkish ? "Gereken sermaye" : "Capital Required"}
                              </p>
                              <p className="font-display text-3xl tracking-[-0.015em] text-gray-900">
                                {opp.capitalRequired}
                              </p>
                            </div>
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600 mb-2">
                                {isTurkish ? "Hedef getiri" : "Target Return"}
                              </p>
                              <p className="font-display text-xl tracking-[-0.005em] text-gray-900">
                                {opp.targetReturn}
                              </p>
                            </div>
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600 mb-2">
                                {isTurkish ? "Minimum yatırım" : "Minimum Investment"}
                              </p>
                              <p className="font-display text-lg tracking-[-0.005em] text-gray-900">
                                {opp.minimumInvestment}
                              </p>
                            </div>

                            <div className="pt-4 border-t border-gray-300">
                              <div className="flex items-center justify-between mb-2">
                                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                                  {isTurkish ? "Tahsis" : "Allocation"}
                                </p>
                                <p className="text-sm font-mono text-gray-700">
                                  {opp.spotsAllocated}/{opp.spotsAvailable}
                                </p>
                              </div>
                              <div className="h-2 bg-gray-200 relative overflow-hidden">
                                <div
                                  className="absolute top-0 left-0 h-full transition-all"
                                  style={{
                                    width: `${allocationPercentage}%`,
                                    backgroundColor:
                                      brand?.theme.primary || "#8B5A3C",
                                  }}
                                />
                              </div>
                              <p className="text-xs text-gray-600 mt-2">
                                {opp.spotsAvailable - opp.spotsAllocated} {isTurkish ? "slot kaldı" : "spots remaining"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-300">
                      <Link
                        href={withLocale("/contact", locale)}
                        className="inline-flex items-center justify-center gap-2 text-white px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
                        style={{
                          backgroundColor: brand?.theme.primary || "#8B5A3C",
                        }}
                      >
                        {isTurkish ? "Bu fırsat hakkında sor" : "Inquire About This Opportunity"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={withLocale(`/brands/${opp.brand}`, locale)}
                        className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-gray-50 transition-colors"
                      >
                        {isTurkish ? "Gör" : "View"} {brand?.name || (isTurkish ? "Marka" : "Brand")}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="relative border-t border-gray-300 py-32 lg:py-48 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-gray-600">
            {isTurkish ? "Sermaye konuşlandırma yolculuğu" : "Capital Deployment Journey"}
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch] mx-auto mb-8 text-gray-900">
            {isTurkish ? "Yapılı. Şeffaf. Disiplinli." : "Structured. Transparent. Disciplined."}
          </h2>
          <p className="text-xl text-gray-600 max-w-[60ch] mx-auto mb-12">
            {isTurkish
              ? "Her fırsat altı adımlı konuşlandırma sürecimizi izler. İlk talepten operasyon açılışına kadar sermaye disiplinle konuşlandırılır."
              : "Every opportunity follows our six-step deployment process. From initial inquiry to operations launch, capital is deployed with discipline."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={withLocale("/investors", locale)}
              className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-gray-800 transition-colors"
            >
              {isTurkish ? "Yatırımcı portalını gör" : "View Investor Portal"}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={withLocale("/contact", locale)}
              className="inline-flex items-center justify-center gap-3 border border-gray-300 text-gray-700 font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-white transition-colors"
            >
              {isTurkish ? "Yatırım görüşmesi planla" : "Schedule Investment Call"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
