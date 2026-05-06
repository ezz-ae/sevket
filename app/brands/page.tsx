import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/lib/brands-data";
import { brandPortals } from "@/lib/brand-portal-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { ArrowRight } from "lucide-react";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

export const metadata: Metadata = {
  title: "Brands & Systems — Ölmez Ecosystem",
  description:
    "Five complementary brands operating within the Ölmez Franchise Systems ecosystem. From premium restaurants to smart operations technology.",
};

export default async function BrandsPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const totalUnits = brands.reduce((sum, brand) => sum + brand.unitCount, 0);
  const totalCapital = "$30.9M";

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Çok markalı ekosistem" : "Multi-Brand Ecosystem"}
        title={isTurkish ? "Beş marka." : "Five Brands."}
        italicTail={isTurkish ? "Tek felsefe." : "One Philosophy."}
        dek={
          isTurkish
            ? "Premium restoran sistemleri, akıllı operasyon teknolojisi ve operatör mükemmelliği. Global franchise altyapısını ilerleten beş tamamlayıcı platform."
            : "Premium restaurant systems, smart operations technology, and operator excellence. Five complementary platforms driving global franchise infrastructure."
        }
        meta={[
          { label: isTurkish ? "Marka" : "Brands", value: "5" },
          { label: isTurkish ? "Toplam ünite" : "Total Units", value: totalUnits.toString() },
          { label: isTurkish ? "Konuşlanan sermaye" : "Deployed Capital", value: totalCapital },
          { label: isTurkish ? "Pazar" : "Markets", value: "15+" },
        ]}
      />

      {/* Brand Grid */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Ekosistem" : "The Ecosystem"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[18ch]">
              {isTurkish ? "Her marka. Tam operasyonel." : "Each brand. Fully operational."}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <Link
                key={brand.id}
                href={withLocale(`/brands/${brand.slug}`, locale)}
                className="group relative"
              >
                <div
                  className="absolute inset-0 rounded-none transition-all duration-500"
                  style={{
                    backgroundColor: brand.theme.primary,
                    opacity: 0.08,
                  }}
                />
                <div className="relative border border-foreground/15 p-8 lg:p-12 hover:border-foreground/30 hover:bg-foreground/[0.03] transition-all duration-300">
                  {brandPortals[brand.slug] ? (
                    <div className="relative mb-8 aspect-[16/9] overflow-hidden border border-foreground/10">
                      <Image
                        src={brandPortals[brand.slug].hero.image.src}
                        alt={brandPortals[brand.slug].hero.image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : null}

                  {/* Brand Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                        {brand.focusMarket}
                      </p>
                      <h3 className="font-display text-3xl lg:text-4xl tracking-[-0.015em]">
                        {brand.name}
                      </h3>
                      {brand.arabicName && (
                        <p className="font-display text-2xl mt-2 text-muted-foreground">
                          {brand.arabicName}
                        </p>
                      )}
                    </div>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: brand.theme.primary }}
                    >
                      <span className="font-display text-lg text-white font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-[1.6] text-foreground/75 mb-8">
                    {brand.description}
                  </p>

                  {/* Tagline */}
                  <div className="mb-8 pb-8 border-b border-foreground/10">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      {isTurkish ? "Odak" : "Focus"}
                    </p>
                    <p className="text-lg font-display tracking-[-0.005em]">
                      {brand.tagline}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {brand.keyMetrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-2">
                          {metric.label}
                        </p>
                        <p className="font-display text-xl lg:text-2xl tracking-[-0.005em]">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Operational Focus */}
                  <div className="mb-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mb-3">
                      {isTurkish ? "Operasyon odağı" : "Operational Focus"}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {brand.operationalFocus.map((focus) => (
                        <span
                          key={focus}
                          className="px-3 h-8 border border-foreground/20 rounded-none flex items-center text-sm text-foreground/70"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-8 border-t border-foreground/10">
                    <div className="text-sm text-muted-foreground">
                      <p>{isTurkish ? "Kuruluş" : "Founded"} {brand.founded}</p>
                      <p>{brand.headquarters}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.015em] mb-16">
            {isTurkish ? "Ekosistem görünümü" : "Ecosystem Overview"}
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                label: isTurkish ? "Toplam konuşlanan sermaye" : "Total Deployed Capital",
                value: "$30.9M",
                description: isTurkish ? "Beş markanın tamamında" : "Across all five brands",
              },
              {
                label: isTurkish ? "Aktif ünite" : "Active Units",
                value: "512+",
                description: isTurkish ? "Dünya genelinde faal" : "Operating worldwide",
              },
              {
                label: isTurkish ? "Hizmet verilen pazar" : "Markets Served",
                value: "15+",
                description: isTurkish ? "Ülkeler ve bölgeler" : "Countries and territories",
              },
              {
                label: isTurkish ? "Gelir akışı" : "Revenue Streams",
                value: "14",
                description: isTurkish ? "Çeşitlendirilmiş model" : "Diversified model",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-foreground/15 p-8 bg-background"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  {stat.label}
                </p>
                <p className="font-display text-4xl tracking-[-0.015em] mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-foreground/60">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {isTurkish ? "Felsefe" : "Philosophy"}
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.015em] leading-[1.1] max-w-[18ch] mb-8">
                {isTurkish
                  ? "Disiplin üzerine kuruldu. Sistemler üzerinden ölçeklendi."
                  : "Built on discipline. Scaled through systems."}
              </h2>
              <p className="text-lg leading-[1.7] text-foreground/75 max-w-[55ch]">
                {isTurkish
                  ? "Her marka kendi P&L'i, liderliği ve pazar odağıyla bağımsız çalışır. Yine de beşinin tamamı aynı operasyon temelinde kurulur: gerçek zamanlı görünürlük, disiplinli uygulama ve ölçülebilir sonuçlar. Belirsizlik yok. Tahmin yok. Her dolar kendini açıklar."
                  : "Each brand operates independently with its own P&L, leadership, and market focus. Yet all five are built on the same operational foundation: real-time visibility, disciplined execution, and measurable outcomes. No confusion. No guessing. Every dollar explains itself."}
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Smart Discipline Score",
                "AFFAREM Control Layer",
                "Real-time Monitoring",
                "Operator Excellence",
                "Capital Accountability",
              ].map((principle) => (
                <div
                  key={principle}
                  className="flex items-center gap-3 text-foreground/70"
                >
                  <div className="w-2 h-2 rounded-full bg-foreground" />
                  <span className="text-base">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {isTurkish ? "Markaları keşfedin" : "Explore Individual Brands"}
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch] mx-auto mb-8">
            {isTurkish ? "Bir marka seçin." : "Select a brand."}
          </h2>
          <p className="text-xl text-foreground/70 max-w-[60ch] mx-auto mb-12">
            {isTurkish
              ? "Her markanın kendi rapor merkezi, etkinlik takvimi, dergisi ve operasyon analitiği vardır. Daha derine inmek için herhangi bir markayı açın."
              : "Each brand has its own reports hub, events calendar, magazine, and operational analytics. Explore any brand to dive deeper."}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={withLocale(`/brands/${brand.slug}`, locale)}
                className="inline-flex items-center gap-2 border border-foreground/25 px-6 h-12 hover:bg-foreground/5 transition-colors font-mono text-[11px] uppercase tracking-[0.18em]"
              >
                {brand.name}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
