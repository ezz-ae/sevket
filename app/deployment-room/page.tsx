import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Calendar, MapPin, Users, Sparkles, FileText, Eye } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { UnitExplorer, InvestorCalculator } from "@/components/landing/unit-explorer";
import {
  deploymentLocations,
  statusMeta,
  deploymentPhases,
  starterLadder,
  investorRoles,
  affaremPreview,
  localizeStatus,
  localizePhase,
  localizeStarterTier,
  localizeInvestorRole,
  localizeHotspotTitle,
} from "@/lib/deployment-room-data";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";
import { deploymentRoomSchema, breadcrumbSchema } from "@/app/schema";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const canonicalPath = isTurkish ? `/tr/deployment-room` : `/deployment-room`;
  return {
    title: isTurkish
      ? "Yatırımcı Konuşlandırma Odası — Shawarma Time | Ölmez"
      : "Investor Review Room — Shawarma Time | Ölmez",
    description: isTurkish
      ? "Yatırım yapmadan önce SHAWARMA TIME yakıt durağı restoran ünitesini inceleyin: ABD lokasyon haritası, tezgâh ve mutfak inceleme noktaları, altı evreli konuşlandırma planı, üç senaryolu hesaplayıcı ve AFFAREM ile haftada iki kez dağıtım. Powered by AFFAREM."
      : "Inspect a SHAWARMA TIME gas-station restaurant unit before you invest: US opportunity map, counter and kitchen hotspots, six-phase opening plan, three-scenario calculator, and twice-weekly distribution review through AFFAREM Investor Reporting. Powered by AFFAREM.",
    keywords: [
      "investor review room",
      "starter investment",
      "shawarma franchise investment",
      "gas station franchise investment",
      "AFFAREM investor reporting",
      "twice-weekly investor distribution",
      "Shawarma Time",
      "Ölmez Franchise Systems",
      "fuel corridor restaurant",
    ],
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
      languages: {
        en: `${baseUrl}/deployment-room`,
        "tr-TR": `${baseUrl}/tr/deployment-room`,
      },
    },
    openGraph: {
      title: isTurkish
        ? "Yatırımcı Konuşlandırma Odası — Shawarma Time"
        : "Investor Review Room — Shawarma Time",
      description: isTurkish
        ? "Şubeyi açmadan inceleyin: ABD haritası, ünite gezgini, finansal katman, AFFAREM kontrol katmanı ve haftada iki kez dağıtım."
        : "Step inside the opportunity before you fund it: US map, unit explorer, financial overlay, AFFAREM control layer, and twice-weekly distribution.",
      type: "website",
      url: `${baseUrl}${canonicalPath}`,
      siteName: "Ölmez Franchise Systems",
      locale: isTurkish ? "tr_TR" : "en_US",
      images: [
        {
          url: `${baseUrl}/brand-library/deployment-room-unit-explorer.png`,
          width: 1600,
          height: 1000,
          alt: "Investor Review Room — Shawarma Time Unit Explorer",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isTurkish
        ? "Yatırımcı Konuşlandırma Odası — Shawarma Time"
        : "Investor Review Room — Shawarma Time",
      description: isTurkish
        ? "Şubeyi açmadan inceleyin. AFFAREM ile haftada iki kez dağıtım."
        : "Inspect the unit before opening. Twice-weekly distribution review through AFFAREM.",
      images: [`${baseUrl}/brand-library/deployment-room-unit-explorer.png`],
    },
  };
}

export default async function DeploymentRoomPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  const totals = {
    available: deploymentLocations.filter((l) => l.status === "available").length,
    underReview: deploymentLocations.filter((l) => l.status === "under-review").length,
    reserved: deploymentLocations.filter((l) => l.status === "reserved").length,
    deployed: deploymentLocations.filter((l) => l.status === "deployed").length,
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Investors", url: `${baseUrl}/investors` },
    { name: "Investor Review Room", url: `${baseUrl}/deployment-room` },
  ]);

  return (
    <main className="relative min-h-screen bg-[#0c0a09] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(deploymentRoomSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Navigation forceScrolled />

      {/* HERO — Investor Review Room intro */}
      <section className="relative overflow-hidden border-b border-white/10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 opacity-[0.16]">
          <Image
            src="/brand-library/deployment-room-unit-explorer.png"
            alt="Investor Review Room — Unit Explorer mockup"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#b8865a22,transparent_45%),radial-gradient(circle_at_85%_70%,#46604f22,transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/0 via-[#0c0a09]/55 to-[#0c0a09]" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Link
            href={withLocale("/", locale)}
            className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/55 transition-colors hover:text-white"
          >
            ← {isTurkish ? "Ana sayfaya dön" : "Return to landing"}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
                <span className="h-px w-10 bg-[#b8865a]" />
                {isTurkish ? "Yatırımcı İnceleme Odası" : "Investor Review Room"}
              </span>
              <h1 className="mt-8 max-w-[16ch] font-display text-[clamp(2.6rem,5.5vw,5.4rem)] leading-[0.94] tracking-[-0.04em] text-balance">
                {isTurkish ? (
                  <>
                    Fırsata adım at,{" "}
                    <span className="italic text-white/65">finanse etmeden önce.</span>
                  </>
                ) : (
                  <>
                    Step inside the opportunity{" "}
                    <span className="italic text-white/65">before you fund it.</span>
                  </>
                )}
              </h1>
              <p className="mt-7 max-w-[58ch] text-base leading-[1.85] text-white/72 md:text-lg">
                {isTurkish
                  ? "Ölmez Yatırımcı İnceleme Odası, yatırımcıların bir SHAWARMA TIME yakıt durağı restoran ünitesini açılmadan önce incelemesine izin verir. Lokasyona bak, tezgâhı incele, mutfağı çöz, ekip yapısını gör, sayıları analiz et ve AFFAREM raporlama önizlemesini takip et."
                  : "The Ölmez Investor Review Room lets investors explore a SHAWARMA TIME gas-station restaurant unit before opening. View the location, inspect the counter, understand the kitchen, review staffing, study the numbers, and follow the launch from opportunity to opening day through a controlled investment inspection layer."}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#opportunity-map"
                  className="group inline-flex h-12 items-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
                >
                  {isTurkish ? "Açık üniteleri keşfet" : "Explore available units"}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#unit-explorer"
                  className="inline-flex h-12 items-center gap-3 border border-white/18 bg-black/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/35 hover:bg-white/5"
                >
                  {isTurkish ? "Örnek üniteyi aç" : "Open sample unit"}
                </Link>
                <Link
                  href="#calculator"
                  className="inline-flex h-12 items-center gap-3 border border-white/18 bg-black/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/35 hover:bg-white/5"
                >
                  {isTurkish ? "Aralığı hesapla" : "Estimate range"}
                </Link>
                <Link
                  href={withLocale("/contact", locale)}
                  className="inline-flex h-12 items-center gap-3 border border-white/18 bg-black/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/35 hover:bg-white/5"
                >
                  {isTurkish ? "Yatırımcı erişimi iste" : "Request investor access"}
                </Link>
              </div>

              <div className="mt-12 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Eye, label: isTurkish ? "Şubeyi gör" : "See the unit", value: isTurkish ? "Hotspot inceleme" : "Hotspot inspection" },
                  { icon: ShieldCheck, label: "AFFAREM", value: isTurkish ? "Kontrol katmanı" : "Control layer" },
                  { icon: Calendar, label: isTurkish ? "Dağıtım" : "Distribution", value: isTurkish ? "Haftada iki kez" : "Twice weekly" },
                ].map((s) => (
                  <div key={s.label} className="border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
                    <s.icon className="h-5 w-5 text-[#e9c092]" />
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{s.label}</p>
                    <p className="mt-1 text-sm text-white">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md">
              <Image
                src="/brand-library/deployment-room-unit-explorer.png"
                alt="Investor Review Room — Unit Explorer mockup"
                width={1200}
                height={800}
                className="h-auto w-full"
              />
              <div className="border-t border-white/10 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">
                  {isTurkish ? "Ürün adı" : "Product name"}
                </p>
                <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-white">
                  Shawarma Time Starter Investment Room
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Powered by AFFAREM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY MAP */}
      <section id="opportunity-map" className="scroll-mt-24 border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
                {isTurkish ? "1 — Fırsat haritası" : "1 — Opportunity map"}
              </span>
              <h2 className="mt-6 max-w-[16ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
                {isTurkish ? "ABD genelinde, durumuyla görünür." : "Visible across the U.S., status-first."}
              </h2>
              <p className="mt-6 max-w-[58ch] text-base leading-[1.8] text-white/65">
                {isTurkish
                  ? "On koridor lokasyonu, gerçek konuşlandırma durumlarıyla. Kart üzerine geldiğinde fırsatın tipi, sermaye penceresi ve operatör modeli açılır."
                  : "Ten corridor locations with their real opportunity status. Each card opens the unit type, the capital window, and the operator model."}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Object.entries(totals).map(([key, value]) => {
                const status = key === "underReview" ? "under-review" : (key as keyof typeof statusMeta);
                const meta = statusMeta[status];
                return (
                  <div key={key} className="border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: meta.color }} />
                      {localizeStatus(status, isTurkish)}
                    </span>
                    <p className="mt-3 font-display text-3xl tracking-[-0.03em]">{value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="mt-14 relative aspect-[16/9] overflow-hidden border border-white/10 bg-black">
            <Image
              src="/brand-library/deployment-room-us-map.png"
              alt="United States opportunity map — SHAWARMA TIME corridor openings"
              fill
              sizes="(max-width: 1024px) 100vw, 75vw"
              className="object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/65" />

            {deploymentLocations.map((loc) => {
              const meta = statusMeta[loc.status];
              const statusText = localizeStatus(loc.status, isTurkish);
              return (
                <a
                  key={loc.id}
                  href={`#${loc.id}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  aria-label={`${loc.city}, ${loc.stateCode} — ${statusText}`}
                >
                  <span className={`relative block h-3 w-3 rounded-full ${meta.pulse ? "animate-ping" : ""}`} style={{ backgroundColor: meta.color, opacity: 0.6 }} />
                  <span className="absolute inset-0 m-auto h-2.5 w-2.5 rounded-full ring-2 ring-white/85" style={{ backgroundColor: meta.color }} />
                  <span className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap border border-white/15 bg-black/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {loc.city}, {loc.stateCode} · {statusText}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {deploymentLocations.map((loc) => {
              const meta = statusMeta[loc.status];
              const fillPct = (loc.investorSlotsFilled / loc.investorSlots) * 100;
              return (
                <article
                  key={loc.id}
                  id={loc.id}
                  className="scroll-mt-24 border border-white/10 bg-black/40 p-5 backdrop-blur-sm transition-colors hover:border-[#b8865a]/55"
                >
                  <header className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{loc.stateCode}</p>
                      <h3 className="mt-1 font-display text-xl tracking-[-0.02em] text-white">
                        {loc.city}, {loc.state}
                      </h3>
                    </div>
                    <span
                      className="inline-flex h-6 items-center px-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white"
                      style={{ backgroundColor: meta.color }}
                    >
                      {localizeStatus(loc.status, isTurkish)}
                    </span>
                  </header>

                  <p className="mt-3 text-xs leading-[1.7] text-white/60">{loc.highlight}</p>

                  <dl className="mt-5 space-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/55">
                    <div className="flex items-center justify-between"><dt>Type</dt><dd className="text-white/85">{loc.unitType}</dd></div>
                    <div className="flex items-center justify-between"><dt>Setup</dt><dd className="text-white/85">{loc.setupCost}</dd></div>
                    <div className="flex items-center justify-between"><dt>Daily net</dt><dd className="text-white/85">{loc.expectedDailyNet}</dd></div>
                    <div className="flex items-center justify-between"><dt>Payback</dt><dd className="text-white/85">{loc.paybackMonths}</dd></div>
                    <div className="flex items-center justify-between"><dt>Operator</dt><dd className="text-white/85">{loc.operatorModel}</dd></div>
                  </dl>

                  <div className="mt-5">
                    <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                      <span>{isTurkish ? "Yatırımcı koltuğu" : "Investor seats"}</span>
                      <span>{loc.investorSlotsFilled}/{loc.investorSlots}</span>
                    </div>
                    <div className="mt-2 h-1 bg-white/10">
                      <div className="h-full bg-[#b8865a]" style={{ width: `${fillPct}%` }} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* UNIT EXPLORER */}
      <section id="unit-explorer" className="scroll-mt-24 border-t border-white/10 bg-black/30 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
              {isTurkish ? "2 — Yakınlaştır" : "2 — Zoom in"}
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish ? "Üniteyi açmadan önce inceleyin." : "Inspect the unit before it opens."}
            </h2>
            <p className="mt-6 max-w-[60ch] text-base leading-[1.8] text-white/65">
              {isTurkish
                ? "Forecourt'tan tezgâha, mutfaktan AFFAREM kontrol panosuna geçin. Her noktayı seçin; iş mantığı sayılarla açılır."
                : "Move from the forecourt to the counter, the kitchen line, and the AFFAREM dashboard. Select any hotspot — the business logic opens with numbers."}
            </p>
          </div>

          <div className="mt-12">
            <UnitExplorer isTurkish={isTurkish} />
          </div>

          <p className="mt-10 max-w-[60ch] text-sm leading-[1.7] text-white/55">
            {isTurkish
              ? "Bu, bir 360 yürüyüş veya dijital ikiz değildir; bilinçli olarak bir inceleme paneli olarak inşa edilmiştir. Amaç gösteri değil; her yüzeyi karara bağlanabilir bir bilgi katmanına dönüştürmektir."
              : "The inspection panel is built for decision-grade information: counter flow, kitchen logic, equipment, staff positions, reporting points, and the parts of the unit an investor needs to understand before a branch opens."}
          </p>
        </div>
      </section>

      {/* DEPLOYMENT TIMELINE */}
      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
                {isTurkish ? "3 — Açılış planı" : "3 — Opening plan"}
              </span>
              <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
                {isTurkish ? "Fırsattan açılış gününe altı evre." : "Six phases from opportunity to opening day."}
              </h2>
            </div>
            <p className="max-w-[58ch] text-base leading-[1.8] text-white/65">
              {isTurkish
                ? "Her evrenin sahibi, takvimi ve teslim ürünleri vardır. Yatırımcı her aşamada AFFAREM dosyasını ve LiveOps notlarını görür."
                : "Every phase has an owner, a calendar, and concrete deliverables. The investor sees the AFFAREM file and LiveOps notes at each stage."}
            </p>
          </div>

          <ol className="mt-14 grid gap-6 lg:grid-cols-2">
            {deploymentPhases.map((phase) => {
              const localized = localizePhase(phase, isTurkish);
              return (
                <li key={phase.number} className="border border-white/10 bg-black/40 p-7 backdrop-blur-sm">
                  <header className="flex items-start gap-4">
                    <span className="font-display text-4xl tracking-[-0.04em] text-[#e9c092]">
                      {String(phase.number).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{localized.duration}</p>
                      <h3 className="mt-1 font-display text-2xl tracking-[-0.03em]">{localized.title}</h3>
                    </div>
                  </header>
                  <p className="mt-5 text-sm leading-[1.8] text-white/65">{localized.body}</p>
                  <ul className="mt-6 space-y-2.5">
                    {localized.steps.map((step) => (
                      <li key={step} className="flex items-start gap-3 text-sm text-white/72">
                        <span className="mt-2 h-1 w-3 shrink-0 bg-[#b8865a]" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* INVESTOR CALCULATOR */}
      <section id="calculator" className="scroll-mt-24 border-t border-white/10 bg-black/30 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
              {isTurkish ? "4 — Hesaplayıcı" : "4 — Calculator"}
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish ? "Üç senaryoyu yan yana okuyun." : "Read three scenarios side by side."}
            </h2>
            <p className="mt-6 max-w-[60ch] text-base leading-[1.8] text-white/65">
              {isTurkish
                ? "Sabit bir getiri yoktur. Hesaplayıcı yalnızca planlama için bir penceredir; hiçbir tahmini taahhüt olarak okumayın."
                : "There is no preset return. The calculator is a planning window only — read no projection as a commitment."}
            </p>
          </div>

          <div className="mt-12">
            <InvestorCalculator isTurkish={isTurkish} />
          </div>
        </div>
      </section>

      {/* STARTER LADDER + 4-INVESTOR MODEL */}
      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
              {isTurkish ? "5 — Başlangıç pozisyonu" : "5 — Starter position"}
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish ? "Daha küçük başlayın. Daha erken girin. Şubeyle birlikte büyüyün." : "Start smaller. Enter earlier. Grow with the unit."}
            </h2>
            <p className="mt-6 max-w-[60ch] text-base leading-[1.8] text-white/65">
              {isTurkish
                ? "Korkuyu düşürüyoruz, disiplini değil. Başlangıç pozisyonları, sistemi anlayan ve tam koltuğa veya bir sonraki üniteye yükselen bir öğrenme yolu sağlar."
                : "Lower the fear, not the discipline. A starter position gives you a learning path that upgrades into a full seat — or into the next unit."}
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {starterLadder.map((tier) => {
              const localized = localizeStarterTier(tier, isTurkish);
              return (
                <article key={tier.id} className="flex flex-col border border-white/10 bg-black/40 p-6 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">{localized.label}</p>
                  <p className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">{tier.amount}</p>
                  <p className="mt-4 text-sm leading-[1.8] text-white/65">{localized.body}</p>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {isTurkish ? "Sorumluluk" : "Responsibility"}
                  </p>
                  <p className="mt-2 text-sm text-white/70">{localized.responsibility}</p>
                  <p className="mt-auto pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">
                    {localized.upgradePath}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
                {isTurkish ? "Dört yatırımcı modeli" : "Four-investor model"}
              </span>
              <h3 className="mt-6 font-display text-3xl tracking-[-0.03em] text-white md:text-4xl">
                {isTurkish ? "Bir gas station restoranı, dört yatırımcı." : "One unit. Four investor seats."}
              </h3>
              <p className="mt-5 max-w-[58ch] text-base leading-[1.8] text-white/65">
                {isTurkish
                  ? "Her yatırımcı bir rol seçer. Pasif rüya satın almıyorsunuz; bir işletim sorumluluğuna giriyorsunuz."
                  : "Each investor picks one role. You are not buying a dream — you are entering an operating responsibility."}
              </p>
            </div>
            <div className="space-y-4">
              {investorRoles.map((role) => {
                const localized = localizeInvestorRole(role, isTurkish);
                return (
                  <article key={role.id} className="border border-white/10 bg-black/40 p-5 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      <Users className="mt-1 h-5 w-5 text-[#e9c092]" />
                      <div>
                        <h4 className="font-display text-xl tracking-[-0.02em] text-white">{localized.title}</h4>
                        <p className="mt-2 text-sm leading-[1.8] text-white/65">{localized.body}</p>
                        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                          {isTurkish ? "Uyumlu profil" : "Best fit"} · <span className="text-white/72">{localized.fit}</span>
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AFFAREM ROOM + TWICE-WEEKLY */}
      <section className="relative border-t border-white/10 py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.10]">
          <Image
            src="/brand-library/affarem-investor-reporting-dashboard.png"
            alt="AFFAREM Investor Reporting dashboard"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/60 via-[#0c0a09]/85 to-[#0c0a09]" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
                {isTurkish ? "6 — AFFAREM" : "6 — AFFAREM"}
              </span>
              <h2 className="mt-6 max-w-[18ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
                {isTurkish ? "Hesabınız restoranın ritmiyle güncellenir." : "Your account moves with the rhythm of the restaurant."}
              </h2>
              <p className="mt-6 max-w-[58ch] text-base leading-[1.8] text-white/68">
                {isTurkish
                  ? "AFFAREM ciddi katmandır. Görsel tur ilgi çeker; AFFAREM kapatır. Her şube günlük ciroyu, COGS'u, personeli, kira payını, yönetim maliyetini, rezerv kesintisini ve net dağıtılabilir tutarı yatırımcı hesabına aktarır."
                  : "AFFAREM is the serious layer. The visual tour attracts; AFFAREM closes. Every unit posts daily sales, COGS, staff cost, station share, management fees, reserve deduction, and the net distributable amount into the Investor Account."}
              </p>
              <p className="mt-6 max-w-[58ch] text-xs leading-[1.8] text-white/45">
                {affaremPreview.legalLine}
              </p>
            </div>

            <div className="grid gap-3">
              {affaremPreview.distributionDays.map((d) => (
                <article key={d.day} className="border border-[#b8865a]/35 bg-[#b8865a]/8 p-5 backdrop-blur-sm">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">{isTurkish ? "Dağıtım günü" : "Distribution day"}</p>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.02em] text-white">{d.day}</h3>
                  <p className="mt-2 text-sm text-white/72">{d.window}</p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{d.timing}</p>
                </article>
              ))}
              <article className="border border-white/10 bg-black/45 p-5 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">
                  {isTurkish ? "En iyi yatırımcı satırı" : "Best investor line"}
                </p>
                <p className="mt-3 font-display text-xl tracking-[-0.02em] text-white">
                  {isTurkish
                    ? "Hesabınız yıl sonuna kadar uyumaz. Restoranın ritmiyle güncellenir."
                    : "Your account does not sleep until year-end. It updates with the rhythm of the restaurant."}
                </p>
              </article>
            </div>
          </div>

          {/* Ledger lines */}
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {affaremPreview.ledgerLines.map((line, idx) => (
              <div key={line.label} className="border border-white/10 bg-black/40 p-4 backdrop-blur-sm">
                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-lg tracking-[-0.02em] text-white">{line.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">{line.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
            {isTurkish ? "Bir sonraki adım" : "Your next step"}
          </span>
          <h2 className="mt-8 font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
            {isTurkish ? "Bir başlangıç pozisyonu inceleyin." : "Review a starter position."}
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] text-base leading-[1.85] text-white/65">
            {isTurkish
              ? "Bir sonraki şube grubuna katılmak için yatırımcı masasına yazın. Her başvuru için inceleme NDA'sı, ünite dosyası ve dağıtım örneği paylaşılır."
              : "Write to the investor desk to join the next branch group. Each request gets an inspection NDA, the unit dossier, and a sample distribution statement."}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={withLocale("/contact", locale)}
              className="group inline-flex h-12 items-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              {isTurkish ? "Başlangıç pozisyonunu incele" : "Review starter investment"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={withLocale("/opportunities", locale)}
              className="inline-flex h-12 items-center gap-3 border border-white/18 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {isTurkish ? "Tüm fırsatları gör" : "See all opportunities"}
            </Link>
            <Link
              href={withLocale("/investors#tiers", locale)}
              className="inline-flex h-12 items-center gap-3 border border-white/18 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/40 hover:bg-white/5"
            >
              {isTurkish ? "Yatırım katmanları" : "Capital tiers"}
            </Link>
          </div>
          <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            <Sparkles className="mr-2 inline h-3 w-3" />
            Powered by AFFAREM · {isTurkish ? "Haftada iki kez dağıtım" : "Twice-weekly distribution"}
          </p>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
