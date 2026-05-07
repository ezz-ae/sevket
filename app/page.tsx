import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, CarFront, Layers3, TrendingUp, ShieldCheck, MapPin } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FooterSection } from "@/components/landing/footer-section";
import { StarterOpportunitiesSlider, type StarterOpportunity } from "@/components/landing/starter-opportunities-slider";
import { brands } from "@/lib/brands-data";
import { localizeBrands } from "@/lib/brand-copy";
import { magazineIssues } from "@/lib/brand-detailed-data";
import { olmezBrandAssets, shawarmaTimeAssets } from "@/lib/olmez-brand-assets";
import { opportunities, investmentTiers } from "@/lib/investor-data";
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

const brandImageMap: Record<string, { src: string; alt: string }> = {
  olmez: {
    src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-3.png",
    alt: "Ölmez flagship interior",
  },
  shawarmer: shawarmaTimeAssets.storefrontDay,
  turkishpide: {
    src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-4.png",
    alt: "Turkish PIDE Co. bakery floor study",
  },
  affarem: {
    src: "/brand-library/affarem-revenue-briefing.png",
    alt: "AFFAREM revenue control briefing",
  },
  disciplina: {
    src: "/brand-library/olmez-image-may-6-2026-03-47-58-pm-5.png",
    alt: "DISCIPLINA operator development session",
  },
};

export default async function Home() {
  const locale = await getRequestLocale();
  const isTurkish = locale === "tr";
  const localizedBrands = localizeBrands(brands, locale);
  const olmez = localizedBrands.find((brand) => brand.slug === "olmez");
  const ecosystemBrands = localizedBrands.filter((brand) => brand.slug !== "olmez");
  const totalUnits = localizedBrands.reduce((sum, brand) => sum + brand.unitCount, 0);
  const olmezIssues = magazineIssues.filter((issue) => issue.brand === "olmez");

  // Editorial trio — three distinct images with NO repeats. Magazine covers
  // are kept exclusively on the magazine page; here we use editorial moments
  // (a warm portrait, a press dialogue, a stage moment) so the home page does
  // not duplicate the crowded cover artwork.
  const editorialShowcase = [
    {
      id: "warm-portrait",
      href: withLocale("/magazine", locale),
      image: olmezBrandAssets.founder.warmPortrait.src,
      issueLabel: isTurkish ? "Editoryal portre" : "Editorial portrait",
      date: olmezIssues[0]?.date ?? "Mid 2026",
      title: isTurkish
        ? "Sıcak ışıkta marka hattı"
        : "Brand line in warm light",
      description: isTurkish
        ? "Stüdyo dışı bir Ölmez portresi: kapak görseli yerine, markanın okuyucuya nasıl konuştuğunu taşıyan bir editoryal kare."
        : "An off-cover Ölmez portrait: instead of a magazine cover, an editorial frame that carries how the brand speaks to the reader.",
    },
    isTurkish
      ? {
          id: "press-dialogue",
          href: withLocale("/founder", locale),
          image: olmezBrandAssets.founder.pressInterview.src,
          issueLabel: "Basın diyaloğu",
          date: "2026",
          title: "Business Today röportajı",
          description:
            "Kurucunun kamuya açık anlatısını, sistem dilini ve markanın dışarıya nasıl konuştuğunu gösteren editoryal kare.",
        }
      : {
          id: "press-dialogue",
          href: withLocale("/founder", locale),
          image: olmezBrandAssets.founder.pressInterview.src,
          issueLabel: "Press dialogue",
          date: "2026",
          title: "Business Today Interview",
          description:
            "An editorial frame showing how the founder speaks publicly about systems, discipline, and the external voice of the brand.",
        },
    isTurkish
      ? {
          id: "stage-conversation",
          href: withLocale("/company-profile", locale),
          image: olmezBrandAssets.founder.stageApplause.src,
          issueLabel: "Sahne konuşması",
          date: "2026",
          title: "Canlı sahne oturumu",
          description:
            "Kurumsal görünürlük, liderlik duruşu ve yatırımcı güvenini taşıyan sahne anı; tekrar eden kapak görseli yerine gerçek bağlam.",
        }
      : {
          id: "stage-conversation",
          href: withLocale("/company-profile", locale),
          image: olmezBrandAssets.founder.stageApplause.src,
          issueLabel: "Stage conversation",
          date: "2026",
          title: "Live Stage Session",
          description:
            "A live brand moment carrying leadership posture, investor trust, and institutional presence instead of another duplicated cover.",
        },
  ];

  const statusLabelMap: Record<string, { en: string; tr: string }> = {
    open: { en: "Available", tr: "Mevcut" },
    limited: { en: "Under Review", tr: "İncelemede" },
    closed: { en: "Reserved", tr: "Rezerve" },
  };

  // Each slider override is intentionally distinct from the marketplace cards
  // below so no image repeats across the home page.
  const opportunityImageOverrides: Record<string, { src: string; alt: string }> = {
    "us-gas-corridor": shawarmaTimeAssets.counterHouston,
    "european-pide-expansion": {
      src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-1.png",
      alt: "Pide bakery editorial environment",
    },
    "uk-flagship": {
      src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-2.png",
      alt: "Olmez UK flagship environment",
    },
    "affarem-mobile": {
      src: "/brand-library/affarem-investor-briefing-selfie.png",
      alt: "AFFAREM investor briefing",
    },
    "disciplina-academy": {
      src: "/brand-library/olmez-image-may-6-2026-03-47-58-pm-1.png",
      alt: "DISCIPLINA training archive",
    },
  };

  const sliderOpportunities: StarterOpportunity[] = opportunities.map((opp) => {
    const brand = localizedBrands.find((b) => b.slug === opp.brand);
    const image =
      opportunityImageOverrides[opp.id] ??
      brandImageMap[opp.brand] ??
      olmezBrandAssets.images.office;
    const remaining = opp.spotsAvailable - opp.spotsAllocated;
    return {
      id: opp.id,
      brand: opp.brand,
      brandLabel: brand?.name ?? opp.brand,
      title: opp.title,
      subtitle: opp.description,
      capital: opp.capitalRequired,
      payback: opp.targetReturn,
      timeline: opp.timeline,
      spotsLabel: isTurkish
        ? `${remaining} / ${opp.spotsAvailable} slot mevcut`
        : `${remaining} / ${opp.spotsAvailable} spots remaining`,
      status: opp.status as "open" | "limited" | "closed",
      statusLabel: isTurkish
        ? statusLabelMap[opp.status]?.tr ?? opp.status
        : statusLabelMap[opp.status]?.en ?? opp.status,
      image: image.src,
      imageAlt: image.alt,
      href: `/opportunities#${opp.id}`,
      accent: brand?.theme.primary ?? "#b8865a",
    };
  });

  const microStartTier = investmentTiers.find((tier) => tier.id === "micro-start");
  const singleUnitTier = investmentTiers.find((tier) => tier.id === "single-unit");

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white text-gray-900">
      <Navigation />
      <HeroSection locale={locale} />

      <section
        id="doctrine"
        className="border-t border-gray-300 bg-white py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.25fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-600">
                {isTurkish ? "Temel" : "Foundation"}
              </span>
              <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl text-gray-900">
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
                  className="border border-gray-300 bg-gray-50 p-7"
                >
                  <p className="font-display text-2xl tracking-[-0.03em] text-[#b8865a]">
                    {point.title}
                  </p>
                  <p className="mt-4 text-sm leading-[1.8] text-gray-700">
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
        className="border-t border-gray-300 bg-gradient-to-br from-white to-gray-50 py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.15fr_0.95fr] lg:gap-16 lg:px-12">
          <div className="relative overflow-hidden border border-gray-300 bg-white shadow-sm">
            <Image
              src={olmezBrandAssets.images.reception.src}
              alt={olmezBrandAssets.images.reception.alt}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-600">
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
            <h2 className="mt-8 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl text-gray-900">
              {isTurkish
                ? "Mekan, biri konuşmadan önce işi açıklamalı."
                : "The room should explain the business before anyone speaks."}
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-gray-700">
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
                <div key={item.label} className="border border-gray-300 p-5 bg-white">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#b8865a]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-[1.75] text-gray-700">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={withLocale("/about", locale)}
                className="group inline-flex h-12 items-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#d7ad7a]"
              >
                {isTurkish ? "Markayı keşfet" : "Explore the brand"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={withLocale("/founder", locale)}
                className="inline-flex h-12 items-center gap-3 border border-gray-300 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                {isTurkish ? "Kurucuyu oku" : "Read the founder"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Highlight — primary CTA above the fold of the body */}
      <section
        id="opportunities-highlight"
        className="relative border-t border-[#1c1612] bg-[#0c0a09] py-24 lg:py-32 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.18]">
          <Image
            src={olmezBrandAssets.images.revenuePresentation.src}
            alt={olmezBrandAssets.images.revenuePresentation.alt}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/85 to-[#0c0a09]/35" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-end">
            <div>
              <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[#e9c092]">
                <span className="h-px w-10 bg-[#b8865a]" />
                {isTurkish ? "Yatırım erişimi" : "Investment access"}
              </span>
              <h2 className="mt-6 max-w-[18ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Sıradaki ünite, sizin sermayenizle açılabilir."
                  : "The next unit can open on your capital."}
              </h2>
              <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/72">
                {isTurkish
                  ? "Beş markanın ekosisteminde aktif fırsatlar: 1.000 dolarlık operatör girişinden 50 milyon dolara kadar kurumsal ortaklıklara. Her fırsat ön doğrulanmış lokasyon, sertifikalı operatör ve %100 AFFAREM izleme ile gelir."
                  : "Active opportunities across all five brands — from a $1,000 operator entry to $50M+ institutional partnerships. Every position ships with pre-validated sites, certified operators, and 100% AFFAREM monitoring."}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={withLocale("/junior-investor-program", locale)}
                  className="group inline-flex h-12 items-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
                >
                  {isTurkish ? "Yatırımcı hesabı aç" : "Open investor account"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={withLocale("/investors/dashboard", locale)}
                  className="inline-flex h-12 items-center gap-3 border border-[#b8865a]/45 bg-[#b8865a]/12 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#b8865a]/20"
                >
                  {isTurkish ? "AFFAREM panelini gör" : "Preview AFFAREM dashboard"}
                </Link>
                <Link
                  href={withLocale("/deployment-room", locale)}
                  className="inline-flex h-12 items-center gap-3 border border-white/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/45 hover:bg-white/5"
                >
                  {isTurkish ? "İnceleme odasını aç" : "Open Review Room"}
                </Link>
                <Link
                  href={withLocale("/opportunities", locale)}
                  className="inline-flex h-12 items-center gap-3 border border-white/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/45 hover:bg-white/5"
                >
                  {isTurkish ? "Fırsatlar" : "Opportunities"}
                </Link>
              </div>
              <p className="mt-5 max-w-[58ch] font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">
                {isTurkish
                  ? "Junior $1K — inceleme odası — AFFAREM paneli · Powered by AFFAREM"
                  : "Junior from $1K — unit review room — AFFAREM dashboard · Powered by AFFAREM"}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: TrendingUp,
                  label: isTurkish ? "İzlenen sermaye" : "Tracked capital",
                  value: "$30.9M",
                  hint: isTurkish ? "5 marka, 18 pazar" : "5 brands, 18 markets",
                },
                {
                  icon: Building2,
                  label: isTurkish ? "Aktif üniteler" : "Active units",
                  value: "612",
                  hint: isTurkish ? "Hepsi AFFAREM altında" : "All under AFFAREM",
                },
                {
                  icon: ShieldCheck,
                  label: isTurkish ? "Hedefte ünite oranı" : "Units at target",
                  value: "84%",
                  hint: isTurkish ? "Güvenli hedef rejimi" : "Disciplined performance",
                },
                {
                  icon: MapPin,
                  label: isTurkish ? "Ortalama geri ödeme" : "Avg payback",
                  value: isTurkish ? "26 ay" : "26 months",
                  hint: isTurkish ? "30 ay hedef altında" : "Below 30-month target",
                },
              ].map((stat) => (
                <div key={stat.label} className="border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
                  <stat.icon className="h-5 w-5 text-[#e9c092]" />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {stat.label}
                  </p>
                  <p className="mt-2 font-display text-3xl tracking-[-0.03em] text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    {stat.hint}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {(microStartTier || singleUnitTier) && (
            <div className="mt-16 grid gap-5 lg:grid-cols-3">
              {[microStartTier, singleUnitTier].filter(Boolean).map((tier) => (
                <div
                  key={tier!.id}
                  className="border border-white/10 bg-black/35 p-6 backdrop-blur-sm"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">
                    {isTurkish ? "Giriş seviyesi" : "Starter tier"}
                  </span>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                    {tier!.name}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-white/65">
                    {tier!.description}
                  </p>
                  <p className="mt-5 font-display text-3xl tracking-[-0.02em] text-[#e9c092]">
                    {tier!.minimum} – {tier!.maximum}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                    {tier!.paybackTarget} · {tier!.targetInvestor}
                  </p>
                </div>
              ))}
              <Link
                href={withLocale("/investors#tiers", locale)}
                className="group flex flex-col justify-between border border-[#b8865a]/40 bg-[#b8865a]/12 p-6 transition-colors hover:bg-[#b8865a]/22"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">
                  {isTurkish ? "Tüm katmanlar" : "All capital tiers"}
                </span>
                <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                  {isTurkish
                    ? "Mikro başlangıçtan kurumsal sermayeye"
                    : "From Micro-Start to Institutional Capital"}
                </h3>
                <p className="mt-3 text-sm leading-[1.75] text-white/72">
                  {isTurkish
                    ? "Dört seviyeli sermaye yapısı: 1.000 $ – 50 M $+. Her katman hangi ekosistem hattına oturduğunu açıkça anlatır."
                    : "Four capital tiers — $1,000 to $50M+ — each mapped to where it lands in the operating ecosystem."}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white">
                  {isTurkish ? "Yatırımcı katmanları" : "View tiers"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Starter opportunities slider — keeps the home page kinetic */}
      <StarterOpportunitiesSlider
        opportunities={sliderOpportunities}
        locale={locale}
        eyebrow={isTurkish ? "Başlangıç fırsatları" : "Starter opportunities"}
        title={
          isTurkish
            ? "Aktif fırsatlar — kaydırarak gezinin."
            : "Active openings — slide through the desk."
        }
        description={
          isTurkish
            ? "Beş markanın açık ünitelerinin canlı bir keseti. Her kart, fırsatın ölçeğini, geri ödeme hedefini ve kalan slot sayısını taşır."
            : "A live cross-cut of open units across the five brands. Each card carries the deal size, payback target, and remaining slots."
        }
        ctaLabel={isTurkish ? "Bu fırsatı incele" : "Open this brief"}
        ctaHref="/opportunities"
        pageLabel={isTurkish ? "sayfa" : "page"}
        prevLabel={isTurkish ? "Önceki fırsat" : "Previous opportunity"}
        nextLabel={isTurkish ? "Sonraki fırsat" : "Next opportunity"}
      />

      <section className="border-t border-gray-300 bg-gray-50 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-600">
                {isTurkish ? "Editoryal kanıt" : "Editorial proof"}
              </span>
              <h2 className="mt-6 max-w-[14ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl text-gray-900">
                {isTurkish
                  ? "Yayın, sistemin bir parçasıdır."
                  : "The publication is part of the system."}
              </h2>
            </div>
            <Link
              href={withLocale("/magazine", locale)}
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a] transition-colors hover:text-[#d7ad7a]"
            >
              {isTurkish ? "Arşivi incele" : "Browse the archive"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr_1fr]">
            {editorialShowcase.map((item, index) => (
              <article
                key={item.id}
                className={`group ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <Link href={item.href} className="block">
                  <div className="relative overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={900}
                      height={1200}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.18em] text-gray-600">
                    <span>{item.issueLabel}</span>
                    <span className="text-gray-300">/</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[36ch] text-sm leading-[1.8] text-gray-600">
                    {item.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="ladder"
        className="relative overflow-hidden border-t border-gray-300 py-24 lg:py-32 bg-white"
      >
        <div className="absolute inset-0 opacity-10">
          <Image
            src={olmezBrandAssets.images.fleet.src}
            alt={olmezBrandAssets.images.fleet.alt}
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-600">
                {isTurkish ? "Filo ve ölçek" : "Fleet & scale"}
              </span>
              <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl text-gray-900">
                {isTurkish
                  ? "Ölçek hareket ederken sakin görünmelidir."
                  : "Scale should look calm while it moves."}
              </h2>
              <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-gray-700">
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
                    className="border border-gray-300 bg-gray-50 p-5"
                  >
                    <item.icon className="h-5 w-5 text-[#b8865a]" />
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                      {item.label}
                    </p>
                    <p className="mt-2 font-display text-xl tracking-[-0.03em] text-gray-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-300 bg-white p-8 lg:p-10 shadow-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#b8865a]">
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
                    className="border-b border-gray-300 pb-6 last:border-b-0 last:pb-0"
                  >
                    <p className="text-base leading-[1.8] text-gray-700">{signal}</p>
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
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                      {stat.label}
                    </p>
                    <p className="mt-2 font-display text-3xl tracking-[-0.03em] text-gray-900">
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
        className="border-t border-gray-300 bg-white py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-600">
                {isTurkish ? "Daha geniş sistem" : "The wider system"}
              </span>
              <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl text-gray-900">
                {isTurkish
                  ? "Ölmez önden gider. Ekosistem onun arkasından gelir."
                  : "Ölmez leads. The ecosystem follows behind it."}
              </h2>
              <p className="mt-8 max-w-[56ch] text-base leading-[1.85] text-gray-700">
                {isTurkish
                  ? "Bu ana sayfa artık önce bir Ölmez amiral gemisi olarak okunur. Sistemin geri kalanı görünür kalır ama ikincildir: tamamlayıcı markalar, rapor merkezleri ve operasyon katmanları ancak ana kimlik kurulduktan sonra açılır."
                  : "This homepage now reads as an Ölmez flagship first. The rest of the system remains visible, but secondary: complementary brands, reports hubs, and operating layers accessible once the main identity has been established."}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={withLocale("/brands", locale)}
                  className="group inline-flex h-12 items-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:bg-[#d7ad7a]"
                >
                  {isTurkish ? "Tüm markaları keşfet" : "Explore all brands"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={withLocale("/reports", locale)}
                  className="inline-flex h-12 items-center gap-3 border border-gray-300 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
                >
                  {isTurkish ? "Raporları gör" : "View reports"}
                </Link>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {ecosystemBrands.map((brand) => {
                const brandImage = brandImageMap[brand.slug];
                return (
                  <Link
                    key={brand.slug}
                    href={withLocale(`/brands/${brand.slug}`, locale)}
                    className="group flex flex-col overflow-hidden border border-gray-300 bg-gray-50 transition-colors hover:border-gray-400 hover:bg-white shadow-sm hover:shadow-md"
                  >
                    {brandImage && (
                      <div className="relative h-44 w-full overflow-hidden border-b border-gray-200">
                        <Image
                          src={brandImage.src}
                          alt={brandImage.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                        <div className="absolute left-4 bottom-4">
                          <span
                            className="inline-flex items-center px-3 h-7 font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                            style={{ backgroundColor: brand.theme.primary }}
                          >
                            {brand.name}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                            {brand.focusMarket}
                          </p>
                          <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-gray-900">
                            {brand.name}
                          </h3>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400 transition-colors group-hover:text-[#b8865a]" />
                      </div>
                      <p className="mt-4 text-sm leading-[1.8] text-gray-600">
                        {brand.tagline}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">
                        <span>{isTurkish ? `${brand.unitCount} birim` : `${brand.unitCount} units`}</span>
                        <span>{brand.founded}</span>
                        <span>{brand.headquarters}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
