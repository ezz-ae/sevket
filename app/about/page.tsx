import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { magazineIssues } from "@/lib/brand-detailed-data";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/about", locale);

  return {
    title: isTurkish
      ? "Ölmez Hakkında — İş. Bir Sonraki Seviye İçin Kuruldu."
      : "About Ölmez — Business. Built Next.",
    description: isTurkish
      ? "Ölmez'in premium profilini keşfedin: amiral oda, editoryal sistem, filo dili ve markanın arkasındaki operasyon standardı."
      : "A premium profile of Ölmez: the flagship room, the editorial system, the fleet language, and the operating standard behind the brand.",
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish
        ? "Ölmez Hakkında — İş. Bir Sonraki Seviye İçin Kuruldu."
        : "About Ölmez — Business. Built Next.",
      description: isTurkish
        ? "Amiral ofis, yayın dili ve ölçek standardı üzerinden Ölmez kimliği."
        : "The Ölmez identity through its flagship office, publishing language, and scale standard.",
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
  };
}

export default async function AboutPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const olmezIssues = magazineIssues.filter((issue) => issue.brand === "olmez");
  const principles = isTurkish
    ? [
        {
          title: "Tasarım operasyonel anlam taşır",
          body: "Ölmez marka ifadesini altyapı olarak ele alır. Oda, palet ve basılı sayı aynı ölçülü vaadi tekrar eder.",
        },
        {
          title: "Ölçülülük kalıcılık sinyali verir",
          body: "Görsel sistem bilinçli biçimde sakindir: siyah üstünde bakır, editoryal tipografi ve promosyon değil kurum hissi veren yüzeyler.",
        },
        {
          title: "Hikaye ölçeği hazırlar",
          body: "Rotalar, raporlar veya yatırımcı detaylarından önce amiral deneyimin neye inandığını ve neden güvenilmesi gerektiğini göstermesi gerekir.",
        },
      ]
    : [
        {
          title: "Design carries operational meaning",
          body: "Ölmez treats brand expression as infrastructure. The room, the palette, and the printed issue all reinforce the same measured promise.",
        },
        {
          title: "Restraint signals permanence",
          body: "The visual system is intentionally calm: copper against black, editorial typography, and surfaces that feel institutional instead of promotional.",
        },
        {
          title: "Story prepares the scale",
          body: "Before routes, filings, or investor detail, the flagship experience has to establish what the business stands for and why it should be trusted.",
        },
      ];
  const offices = isTurkish
    ? [
        {
          location: "Edinburgh",
          role: "Amiral masa",
          body: "Markanın standart olarak sahnelendiği yer: merkez, yayın masası ve diğer tüm yüzeylerin cevap verdiği oda.",
        },
        {
          location: "İstanbul",
          role: "Operasyon ritmi",
          body: "Uygulamanın, pazar sezgisinin ve genişleme baskısının tekrar edilebilir bir sisteme çevrildiği nabız.",
        },
        {
          location: "Amerika Birleşik Devletleri",
          role: "Ölçek yüzeyi",
          body: "Kimliği zayıflatmadan odanın dışına taşıyan filo varlığı ve hareket dili.",
        },
      ]
    : [
        {
          location: "Edinburgh",
          role: "Flagship desk",
          body: "Where the brand is staged as a standard: headquarters, publication desk, and the room every other surface answers to.",
        },
        {
          location: "Istanbul",
          role: "Operational rhythm",
          body: "The pulse of execution, market instinct, and expansion pressure translated into a repeatable system.",
        },
        {
          location: "United States",
          role: "Scale surface",
          body: "Fleet presence and movement language that extends the identity beyond the room without diluting it.",
        },
      ];

  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, #1a120d 0%, #050505 34%, #101510 100%)",
      }}
    >
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Amiral markanın profili" : "About the flagship"}
        title="Ölmez"
        italicTail={isTurkish ? "İş. Bir sonraki seviye." : "Business. Built next."}
        dek={
          isTurkish
            ? "Mekan, yayın ve hareket arasında editoryal, kalıcı ve ölçeklenebilir hissettirmek için kurulmuş disiplinli bir amiral marka."
            : "A disciplined flagship brand built to feel editorial, permanent, and scalable across room, publication, and movement."
        }
        meta={[
          { label: isTurkish ? "Kuruluş" : "Founded", value: "2021" },
          { label: isTurkish ? "Masa" : "Desk", value: "Edinburgh" },
          { label: isTurkish ? "Görsel kod" : "Visual code", value: isTurkish ? "Bakır / siyah" : "Copper / black" },
          { label: isTurkish ? "Güncel sayı" : "Current issue", value: isTurkish ? "Sayı 12" : "Issue 12" },
        ]}
      />

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12">
          <div className="relative overflow-hidden border border-white/10 bg-black">
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
              {isTurkish ? "Oda" : "The room"}
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
            <h2 className="mt-8 max-w-[14ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "Amiral oda marka vaadinin bir parçasıdır."
                : "The flagship room is part of the brand promise."}
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/68">
              {isTurkish
                ? "Ölmez önce bir büyüme aracı olarak değil, bir iş standardı olarak sunulur. Amiral oda önemlidir çünkü markanın gerilimi taşıyabildiğini gösterir: yumuşaklığa düşmeyen lüks, soğuklaşmayan yapı ve görsel yorgunluğa dönüşmeyen disiplin."
                : "Ölmez is presented as a business standard before it is presented as a growth vehicle. The flagship room matters because it shows that the brand can hold tension: luxury without softness, structure without coldness, and discipline without visual fatigue."}
            </p>
            <p className="mt-6 max-w-[58ch] text-base leading-[1.85] text-white/60">
              {isTurkish
                ? "Ana ofis, kurucu anlatısı ve editoryal arşiv tek bir tezi doğrulamak için tasarlandı: kimlik, jenerikleşmeden sistem haline getirilebilir."
                : "The main office, the founder narrative, and the editorial archive are designed to confirm one thesis: identity can be systemized without becoming generic."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Prensipler" : "Principles"}
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
              {isTurkish
                ? "Şablon değil, marka mimarisi."
                : "A brand architecture, not a template."}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="border border-white/10 bg-black/30 p-8"
              >
                <h3 className="font-display text-2xl tracking-[-0.03em] text-[#e7bc8b]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-[1.85] text-white/64">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12">
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Varlık" : "Presence"}
            </span>
            <h2 className="mt-6 max-w-[14ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "Şehirler ve hareket boyunca tek görsel dil."
                : "One visual language across cities and movement."}
            </h2>
            <div className="mt-10 space-y-8">
              {offices.map((office) => (
                <div key={office.location} className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0">
                  <p className="font-display text-2xl tracking-[-0.03em] text-white">
                    {office.location}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                    {office.role}
                  </p>
                  <p className="mt-4 max-w-[52ch] text-sm leading-[1.85] text-white/64">
                    {office.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.images.fleet.src}
              alt={olmezBrandAssets.images.fleet.alt}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Yayın" : "Publication"}
              </span>
              <h2 className="mt-6 max-w-[14ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Field Notes markayı yaşayan bir arşive dönüştürür."
                  : "Field Notes turns the brand into a living archive."}
              </h2>
            </div>
            <Link
              href={withLocale("/magazine", locale)}
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#e7bc8b] transition-colors hover:text-[#f3cf9b]"
            >
              {isTurkish ? "Arşivi aç" : "Open the archive"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {olmezIssues.slice(0, 3).map((issue) => (
              <article key={issue.id}>
                <div className="overflow-hidden border border-white/10 bg-black">
                  <Image
                    src={issue.coverImage}
                    alt={issue.title}
                    width={900}
                    height={1200}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                  {issue.issueNumber} / {issue.date}
                </p>
                <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                  {issue.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-white/62">
                  {issue.subtitle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-28 lg:py-36">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
            {isTurkish ? "Sonraki okumalar" : "Next reads"}
          </span>
          <h2 className="mt-8 font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
            {isTurkish
              ? "Kurucu profiline ya da arşive devam edin."
              : "Continue through the founder or the archive."}
          </h2>
          <p className="mx-auto mt-8 max-w-[58ch] text-base leading-[1.85] text-white/64">
            {isTurkish
              ? "Marka sayfası çerçeveyi kurar. Kurucu sayfası ve dergi arşivi arkasındaki düşünceyi açıklar."
              : "The brand page sets the frame. The founder page and magazine issue archive explain the thinking behind it."}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={withLocale("/founder", locale)}
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              {isTurkish ? "Kurucuyu oku" : "Read the founder"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={withLocale("/magazine", locale)}
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
            >
              {isTurkish ? "Field Notes'u incele" : "Browse Field Notes"}
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
