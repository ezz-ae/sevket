import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, CarFront, Layers3 } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FooterSection } from "@/components/landing/footer-section";
import { brands } from "@/lib/brands-data";
import { localizeBrands } from "@/lib/brand-copy";
import { magazineIssues } from "@/lib/brand-detailed-data";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { withLocale } from "@/lib/site-locale";
import { getRequestLocale } from "@/lib/server-locale";

const doctrinePoints = [
  {
    title: "Business. Built next.",
    body: "Every room, detail, and publication is arranged to make Ölmez read like a business standard rather than a restaurant mood.",
  },
  {
    title: "Discipline before scale.",
    body: "Growth appears only after the system is legible. The story leads. The room confirms it. The numbers follow.",
  },
  {
    title: "Identity with operating weight.",
    body: "Brand is treated as infrastructure: a repeated promise across headquarters, magazine covers, the U.S. fleet, and the founder’s desk.",
  },
];

const scaleSignals = [
  "Flagship environments engineered to look institutional, not temporary.",
  "A U.S. fleet presence that turns movement into visible brand territory.",
  "Editorial issues that document leadership, expansion, and design discipline.",
];

export default async function Home() {
  const locale = await getRequestLocale();
  const isTurkish = locale === "tr";
  const localizedBrands = localizeBrands(brands, locale);
  const olmez = localizedBrands.find((brand) => brand.slug === "olmez");
  const ecosystemBrands = localizedBrands.filter((brand) => brand.slug !== "olmez");
  const totalUnits = localizedBrands.reduce((sum, brand) => sum + brand.unitCount, 0);
  const olmezIssues = magazineIssues.filter((issue) => issue.brand === "olmez");

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Navigation />
      <HeroSection locale={locale} />

      <section
        id="doctrine"
        className="border-t border-white/10 bg-[#050505] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.25fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Temel" : "Foundation"}
              </span>
              <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Marka, sistemin ağırlığını taşımalıdır."
                  : "The brand has to carry the weight of the system."}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {(isTurkish
                ? [
                    {
                      title: "İş. Bir sonraki seviye için kuruldu.",
                      body: "Her mekan, detay ve yayın; Ölmez'in bir restoran havasından çok bir iş standardı gibi okunması için düzenlenir.",
                    },
                    {
                      title: "Ölçekten önce disiplin.",
                      body: "Büyüme ancak sistem okunabilir olduğunda görünür. Hikaye önden gider. Mekan onu doğrular. Rakamlar ardından gelir.",
                    },
                    {
                      title: "Ağırlığı olan kimlik.",
                      body: "Marka, altyapı gibi ele alınır: merkez ofisten dergi kapaklarına, ABD filosundan kurucunun masasına kadar tekrar eden bir vaat.",
                    },
                  ]
                : doctrinePoints
              ).map((point) => (
                <article
                  key={point.title}
                  className="border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm"
                >
                  <p className="font-display text-2xl tracking-[-0.03em] text-[#e7bc8b]">
                    {point.title}
                  </p>
                  <p className="mt-4 text-sm leading-[1.8] text-white/68">
                    {point.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="affarem"
        className="border-t border-white/10 bg-[linear-gradient(180deg,#050505_0%,#0b0b0b_100%)] py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.15fr_0.95fr] lg:gap-16 lg:px-12">
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,134,90,0.22),transparent_32%)]" />
            <Image
              src={olmezBrandAssets.images.office.src}
              alt={olmezBrandAssets.images.office.alt}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Ofis ve kimlik" : "Office & identity"}
            </span>
            <div className="mt-8 w-36">
              <Image
                src={olmezBrandAssets.logos.copper.src}
                alt={olmezBrandAssets.logos.copper.alt}
                width={220}
                height={70}
                className="h-auto w-full"
              />
            </div>
            <h2 className="mt-8 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "Mekan, biri konuşmadan önce işi açıklamalı."
                : "The room should explain the business before anyone speaks."}
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/68">
              {isTurkish
                ? "Bu, AFFAREM'in ve Edinburgh amiral gemisinin görsel dilidir: füme cam, bakır sıcaklığı, disiplinli çizgiler ve ilk bakışta ölçülü görünen bir sistem. Ofis dekor değildir. Markanın kurumsal düşündüğünün kanıtıdır."
                : "This is the visual language of AFFAREM and the Edinburgh flagship: smoked glass, copper warmth, disciplined lines, and a system that looks measured from the first glance. The office is not décor. It is the proof that the brand thinks institutionally."}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {(isTurkish
                ? [
                    {
                      label: "Karşılama mantığı",
                      body: "Tanıtım değil, kalıcılık hissi veren bir merkez karakteri.",
                    },
                    {
                      label: "Editoryal sadelik",
                      body: "Dergi seviyesinde kontrast ve netlik için ayarlanmış bakır, siyah ve fildişi.",
                    },
                    {
                      label: "Operasyon sinyali",
                      body: "Her ortam; kontrolü, tekrarlanabilirliği ve ölçeğe hazır olmayı güçlendirir.",
                    },
                    {
                      label: "Hikaye yolu",
                      body: "Ofis doğrudan kurucu profiline, Field Notes'a ve marka dosyasına bağlanır.",
                    },
                  ]
                : [
                {
                  label: "Reception logic",
                  body: "A headquarters feel that reads like permanence, not promotion.",
                },
                {
                  label: "Editorial restraint",
                  body: "Copper, black, and ivory tuned to magazine-level contrast and clarity.",
                },
                {
                  label: "Operational signal",
                  body: "Every environment reinforces control, repeatability, and scale readiness.",
                },
                {
                  label: "Story path",
                  body: "The office connects directly into the founder profile, field notes, and brand deck.",
                },
              ]).map((item) => (
                <div key={item.label} className="border border-white/10 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-[1.75] text-white/64">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={withLocale("/about", locale)}
                className="group inline-flex h-12 items-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                {isTurkish ? "Markayı keşfet" : "Explore the brand"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={withLocale("/founder", locale)}
                className="inline-flex h-12 items-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
              >
                {isTurkish ? "Kurucuyu oku" : "Read the founder"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#070707] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Editoryal kanıt" : "Editorial proof"}
              </span>
              <h2 className="mt-6 max-w-[14ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Yayın, sistemin bir parçasıdır."
                  : "The publication is part of the system."}
              </h2>
            </div>
            <Link
              href={withLocale("/magazine", locale)}
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#e7bc8b] transition-colors hover:text-[#f3cf9b]"
            >
              {isTurkish ? "Arşivi incele" : "Browse the archive"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr_1fr]">
            {olmezIssues.slice(0, 3).map((issue, index) => (
              <article
                key={issue.id}
                className={`group ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <Link href={withLocale("/magazine", locale)} className="block">
                  <div className="relative overflow-hidden border border-white/10 bg-black">
                    <Image
                      src={issue.coverImage}
                      alt={issue.title}
                      width={900}
                      height={1200}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.18em] text-white/42">
                    <span>{issue.issueNumber}</span>
                    <span className="text-white/22">/</span>
                    <span>{issue.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                    {issue.title}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-sm leading-[1.8] text-white/62">
                    {issue.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ladder"
        className="relative overflow-hidden border-t border-white/10 py-24 lg:py-32"
      >
        <div className="absolute inset-0">
          <Image
            src={olmezBrandAssets.images.fleet.src}
            alt={olmezBrandAssets.images.fleet.alt}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/45" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
                {isTurkish ? "Filo ve ölçek" : "Fleet & scale"}
              </span>
              <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Ölçek hareket ederken sakin görünmelidir."
                  : "Scale should look calm while it moves."}
              </h2>
              <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/70">
                {isTurkish
                  ? "ABD görsel katmanı, Ölmez'e sadelikten ödün vermeden erişim kazandırır. Hareket markanın sisteminin bir parçasına dönüşür: siyah yüzeyler, bakır işaretler ve amiral gemisi mekandan kopuk değil onunla hizalı bir dış görünürlük."
                  : "The U.S. image layer gives Ölmez reach without losing restraint. Movement becomes part of the brand system: black surfaces, copper marks, and an exterior presence that feels aligned with the flagship room rather than detached from it."}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {(isTurkish
                  ? [
                      {
                        icon: CarFront,
                        label: "Filo sunumu",
                        value: "Siyah üstünde bakır otorite",
                      },
                      {
                        icon: Building2,
                        label: "Marka mimarisi",
                        value: "Mekan ve yol boyunca tek dil",
                      },
                      {
                        icon: Layers3,
                        label: "Sistem vaadi",
                        value: "Tekrarlanabilirlik için tasarlandı",
                      },
                      {
                        icon: BookOpen,
                        label: "Hikayenin devamı",
                        value: "Hareket baskıda belgelenir",
                      },
                    ]
                  : [
                  {
                    icon: CarFront,
                    label: "Fleet presentation",
                    value: "Black-on-copper authority",
                  },
                  {
                    icon: Building2,
                    label: "Brand architecture",
                    value: "One language across room and road",
                  },
                  {
                    icon: Layers3,
                    label: "System promise",
                    value: "Designed for repeatability",
                  },
                  {
                    icon: BookOpen,
                    label: "Story continuation",
                    value: "Movement documented in print",
                  },
                ]).map((item) => (
                  <div
                    key={item.label}
                    className="border border-white/10 bg-black/20 p-5 backdrop-blur-sm"
                  >
                    <item.icon className="h-5 w-5 text-[#e7bc8b]" />
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-2 font-display text-xl tracking-[-0.03em] text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-white/10 bg-black/30 p-8 backdrop-blur-sm lg:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e7bc8b]">
                {isTurkish ? "Ölçek sinyalleri" : "Scale signals"}
              </p>
              <ul className="mt-8 space-y-6">
                {(isTurkish
                  ? [
                      "Amiral gemisi ortamlar geçici değil, kurumsal görünecek şekilde tasarlanır.",
                      "ABD filo varlığı hareketi görünür marka alanına dönüştürür.",
                      "Editoryal sayılar liderliği, genişlemeyi ve tasarım disiplinini belgelendirir.",
                    ]
                  : scaleSignals
                ).map((signal) => (
                  <li
                    key={signal}
                    className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0"
                  >
                    <p className="text-base leading-[1.8] text-white/72">{signal}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { label: isTurkish ? "Ekosistem birimleri" : "Ecosystem units", value: `${totalUnits}+` },
                  { label: isTurkish ? "Olmez birimleri" : "Olmez units", value: `${olmez?.unitCount ?? 0}` },
                  { label: isTurkish ? "Ana pazar" : "Core market", value: olmez?.focusMarket ?? "Global" },
                  { label: isTurkish ? "Editoryal sayılar" : "Editorial issues", value: `${olmezIssues.length}` },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-display text-3xl tracking-[-0.03em] text-white">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="marketplace"
        className="border-t border-white/10 bg-[#050505] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Daha geniş sistem" : "The wider system"}
              </span>
              <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Ölmez önden gider. Ekosistem onun arkasından gelir."
                  : "Ölmez leads. The ecosystem follows behind it."}
              </h2>
              <p className="mt-8 max-w-[56ch] text-base leading-[1.85] text-white/66">
                {isTurkish
                  ? "Bu ana sayfa artık önce bir Ölmez amiral gemisi olarak okunur. Sistemin geri kalanı görünür kalır ama ikincildir: tamamlayıcı markalar, rapor merkezleri ve operasyon katmanları ancak ana kimlik kurulduktan sonra açılır."
                  : "This homepage now reads as an Ölmez flagship first. The rest of the system remains visible, but secondary: complementary brands, reports hubs, and operating layers accessible once the main identity has been established."}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={withLocale("/brands", locale)}
                  className="group inline-flex h-12 items-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
                >
                  {isTurkish ? "Tüm markaları keşfet" : "Explore all brands"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={withLocale("/reports", locale)}
                  className="inline-flex h-12 items-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
                >
                  {isTurkish ? "Raporları gör" : "View reports"}
                </Link>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {ecosystemBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  href={withLocale(`/brands/${brand.slug}`, locale)}
                  className="group border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                        {brand.focusMarket}
                      </p>
                      <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                        {brand.name}
                      </h3>
                    </div>
                    <ArrowRight className="h-4 w-4 text-white/36 transition-colors group-hover:text-[#e7bc8b]" />
                  </div>
                  <p className="mt-4 text-sm leading-[1.8] text-white/64">
                    {brand.tagline}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                    <span>{isTurkish ? `${brand.unitCount} birim` : `${brand.unitCount} units`}</span>
                    <span>{brand.founded}</span>
                    <span>{brand.headquarters}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
