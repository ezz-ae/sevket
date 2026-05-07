import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/founder", locale);

  return {
    title: isTurkish
      ? "Kurucu · Şevketullah Ölmez — Ölmez"
      : "The Founder · Şevketullah Ölmez — Ölmez Franchise Systems",
    description: isTurkish
      ? "Şevketullah Ölmez'in kurucu profili, Ölmez'in editoryal dili ve amiral marka kimliği üzerinden sunuluyor."
      : "The founder profile of Şevketullah Ölmez, presented through the editorial language and flagship identity of Ölmez.",
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish
        ? "Kurucu · Şevketullah Ölmez — Ölmez"
        : "The Founder · Şevketullah Ölmez — Ölmez Franchise Systems",
      description: isTurkish
        ? "Kurucunun tezi, coğrafyaları ve tekrar üzerine kurduğu sistem."
        : "The founder's thesis, geographies, and system built around repetition.",
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
  };
}

export default async function FounderPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const geographies = isTurkish
    ? [
        {
          place: "Ankara",
          role: "Kökler",
          body: "Daha sonra kurulan her sistemin duygusal mimarisi olarak sert disiplin ve kişisel sorumluluk.",
        },
        {
          place: "İngiltere",
          role: "Mesafe",
          body: "Kimliği sahnelenen, çevrilen ve bilinçli biçimde kontrol edilen bir şeye dönüştüren pazar odaklı bakış.",
        },
        {
          place: "Edinburgh",
          role: "Masa",
          body: "Markanın yapılı, editoryal ve kurumsal olarak okunabilir hale geldiği sessiz oda.",
        },
      ]
    : [
        {
          place: "Ankara",
          role: "Roots",
          body: "Hard discipline and personal responsibility as the emotional architecture behind every later system.",
        },
        {
          place: "England",
          role: "Distance",
          body: "A market-facing lens that turns identity into something staged, translated, and intentionally controlled.",
        },
        {
          place: "Edinburgh",
          role: "Desk",
          body: "The quiet room where the brand becomes structured, editorial, and institutionally legible.",
        },
      ];
  const principles = isTurkish
    ? [
        "Müşterinin zaten durduğu yerde konumlan. Akışı dönüştür; onu yapay biçimde üretme.",
        "Disiplinli herhangi bir operatörün yürütebileceği bir sistem kur. Bir deha gerektiriyorsa franchise olamaz.",
        "Disiplini, kârı denetlediğin kadar sıkı denetle. Kimin ölçekleneceğine skor karar verir, söylem değil.",
        "Marka grafik tasarım tercihi değildir. Marka tekrar edilen bir vaattir.",
        "Dört yatırımcı koltuğu yapısı disiplindir. Varlığın kendisi de o disiplindir.",
        "Para normalleşiyor. Nadir olan davranış tutarlılığıdır.",
      ]
    : [
        "Stand where the customer is already stopping. Convert flow; do not manufacture it.",
        "Build a system any disciplined operator can run. If it requires a genius, it cannot be franchised.",
        "Audit discipline as strictly as you audit profit. The score, not the wire, decides who scales.",
        "Brand is not a graphic-design choice. Brand is a repeated promise.",
        "The 4-investor seat structure is the discipline. The discipline is the asset.",
        "Money is becoming normal. Behavioral consistency is the rarity.",
      ];
  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, #180f0b 0%, #050505 38%, #10100f 100%)",
      }}
    >
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Kurucu — Şevketullah Ölmez" : "The founder — Şevketullah Ölmez"}
        title={isTurkish ? "Tekrarın" : "The architect of"}
        italicTail={isTurkish ? "mimarı." : "repetition."}
        dek={
          isTurkish
            ? "Markanın kendisiyle aynı disiplinli görsel dil üzerinden sahnelenmiş bir kurucu profili: sakin, kontrollü ve editoryal."
            : "A founder profile staged through the same disciplined visual language as the brand itself: quiet, controlled, and editorial."
        }
        meta={[
          { label: isTurkish ? "Doğum" : "Born", value: isTurkish ? "12 Eki 1988" : "12 Oct 1988" },
          { label: isTurkish ? "Kökler" : "Roots", value: "Ankara" },
          { label: isTurkish ? "Masa" : "Desk", value: "Edinburgh" },
          { label: isTurkish ? "Tez" : "Thesis", value: isTurkish ? "Ölçekten önce hikaye" : "Story before scale" },
        ]}
      />

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12">
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.founder.current.src}
              alt={olmezBrandAssets.founder.current.alt}
              width={900}
              height={1200}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Profil" : "Profile"}
            </span>
            <h2 className="mt-6 max-w-[14ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "Kişisel marka değil, sistem kurucusu olarak sunulan bir kurucu."
                : "The founder voice behind a controlled restaurant business company."}
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/68">
              {isTurkish
                ? "Kurucu sayfası artık Ölmez amiralinin geri kalanı gibi okunuyor: azaltılmış palet, güçlü kapaklar ve daha sıkı bir editoryal çerçeve. Amaç mitoloji kurmak değil; odayı, yayını ve operasyon modelini şekillendiren düşünceyi netleştirmek."
                : "Sevet Ölmez is used here as the public operating voice of the platform: direct about responsibility, cautious about investment language, and focused on the system that turns food operations into controlled business infrastructure."}
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {geographies.map((g) => (
                <div key={g.place} className="border border-white/10 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                    {g.role}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                    {g.place}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-white/62">
                    {g.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-28 lg:py-36">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
            {isTurkish ? "Tez" : "The thesis"}
          </span>
          <blockquote className="mx-auto mt-8 max-w-[11ch] font-display text-5xl tracking-[-0.04em] text-white md:text-7xl lg:text-[110px] lg:leading-[0.92]">
            {isTurkish
              ? "“Ben restoran kurmam. Tekrar kurarım.”"
              : "“I don’t build restaurants. I build repetition.”"}
          </blockquote>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[#e7bc8b]">
            Şevketullah Ölmez · Edinburgh
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Operasyon ilkeleri" : "Operating principles"}
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
              {isTurkish
                ? "Kurucunun sistemin mutlaka taşıması gerektiğini söylediği şeyler."
                : "What the founder insists the system must hold."}
            </h2>
          </div>

          <ol className="mt-14 border-t border-white/10">
            {principles.map((principle, index) => (
              <li
                key={principle}
                className="grid gap-5 border-b border-white/10 py-8 lg:grid-cols-[120px_1fr] lg:items-baseline lg:gap-10 lg:py-10"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e7bc8b]">
                  /{String(index + 1).padStart(2, "0")}
                </span>
                <p className="max-w-[58ch] font-display text-2xl tracking-[-0.03em] text-white/92 md:text-3xl">
                  {principle}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-12">
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "İleri okuma" : "Further reading"}
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "Kurucunun mantığı baskıda devam ediyor."
                : "The founder’s logic continues in print."}
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/66">
              {isTurkish
                ? "Field Notes arşivi tartışmanın geri kalanını taşır: tekrar neden önemlidir, lokasyon nasıl değerlendirilir ve Ölmez hissiyatı sistemden nerede ayırır."
                : "The Field Notes archive carries the rest of the argument: why repetition matters, how location is evaluated, and where Ölmez separates mood from system."}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={withLocale("/magazine/the-founders-blueprint", locale)}
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                {isTurkish ? "Blueprint'i oku" : "Read the blueprint"}
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

          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.founder.copperPortrait.src}
              alt={olmezBrandAssets.founder.copperPortrait.alt}
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
