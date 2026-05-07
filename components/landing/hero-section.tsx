import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { SiteLocale, withLocale } from "@/lib/site-locale";

export function HeroSection({ locale = "default" }: { locale?: SiteLocale }) {
  const isTurkish = locale === "tr";
  const heroStats = [
    { label: isTurkish ? "Ana marka" : "Master brand", value: "Ölmez" },
    { label: isTurkish ? "Kontrol katmanı" : "Control layer", value: "AFFAREM" },
    { label: isTurkish ? "Fırsat markası" : "Opportunity brand", value: "Shawerma Time" },
    { label: isTurkish ? "Dağıtım ritmi" : "Distribution rhythm", value: "Twice-weekly review" },
  ];
  const previewCards = isTurkish
    ? [
        {
          label: "Yemek fırsatı",
          value: "Shawerma Time, mevcut akışa sahip istasyon noktalarını yönetilen restoran ünitelerine çevirir.",
        },
        {
          label: "Yatırımcı kontrolü",
          value: "AFFAREM; raporlama, belgeler, mesajlar, dağıtım kayıtları ve şube görünürlüğünü tek hesaba bağlar.",
        },
        {
          label: "İnsan sistemi",
          value: "Operatörler, yöneticiler, ekipler ve yetenek hattı aynı işletme standardı etrafında çalışır.",
        },
      ]
    : [
        {
          label: "Food opportunity",
          value: "Shawerma Time turns existing gas-station traffic into managed restaurant units.",
        },
        {
          label: "Investor control",
          value: "AFFAREM connects reporting, documents, messages, payout history, and branch visibility.",
        },
        {
          label: "People system",
          value: "Operators, managers, teams, and talent pipelines work around one operating standard.",
        },
      ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0">
        <Image
          src={olmezBrandAssets.images.office.src}
          alt={olmezBrandAssets.images.office.alt}
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,134,90,0.26),transparent_34%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/35" />
      <div
        className="absolute inset-0 opacity-70 animate-[gradient-shift_18s_ease-in-out_infinite]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 24%, rgba(184, 134, 90, 0.18), transparent 28%), radial-gradient(circle at 78% 22%, rgba(70, 92, 77, 0.16), transparent 24%), radial-gradient(circle at 70% 72%, rgba(160, 103, 74, 0.18), transparent 30%)",
          backgroundSize: "180% 180%",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-14 pt-28 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/60">
              <span className="h-px w-10 bg-[#b8865a]" />
              {isTurkish ? "Restoran iş şirketi" : "Restaurant business company"}
            </span>

            <h1 className="mt-8 max-w-[13ch] font-display text-[clamp(2.9rem,6.2vw,6rem)] leading-[0.94] tracking-[-0.04em] text-balance">
              {isTurkish
                ? "Yemek markaları, yatırımcı kontrolü ve şube operasyonu tek sistemde."
                : "Food brands, investor control, and branch operations in one system."}
            </h1>

            <p className="mt-7 max-w-[52ch] text-base leading-[1.8] text-white/74 md:text-lg">
              {isTurkish
                ? "Ölmez, restoran işi altyapısı kurar: Shawerma Time üniteleri, AFFAREM yatırımcı raporlaması, operatör standardı, insan hattı ve pazar giriş desteği. Kamu yemek markasını görür; yatırımcı arkasındaki işletim sistemini görür."
                : "Ölmez builds restaurant business infrastructure: Shawerma Time units, AFFAREM investor reporting, operator standards, people pipelines, and market-entry support. The public sees food; investors see the operating system behind it."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex h-9 items-center border border-white/14 bg-black/28 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/72 backdrop-blur-sm">
                {heroStats[2].value}
              </span>
              <span className="inline-flex h-9 items-center border border-white/14 bg-black/28 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/72 backdrop-blur-sm">
                {heroStats[3].value}
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={withLocale("/investors/dashboard", locale)}
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                {isTurkish ? "AFFAREM paneli" : "Open investor dashboard"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={withLocale("/opportunities", locale)}
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/18 bg-black/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:border-white/35 hover:bg-white/6"
              >
                {isTurkish ? "Fırsatları gör" : "View opportunities"}
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end lg:w-full lg:max-w-[34rem]">
            <div className="relative overflow-hidden border border-white/12 bg-black/28 p-6 backdrop-blur-md lg:p-7">
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(184,134,90,0.16),transparent_42%,rgba(76,104,82,0.14))]" />
              <div className="relative">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/52">
                  {isTurkish ? "İş modeli" : "Business model"}
                </span>
                <h2 className="mt-4 max-w-[12ch] font-display text-3xl tracking-[-0.03em] text-white md:text-4xl">
                  {isTurkish ? "Restoran değil. Restoran işi." : "Not a restaurant. A restaurant business."}
                </h2>
                <p className="mt-4 max-w-[42ch] text-sm leading-[1.8] text-white/68">
                  {isTurkish
                    ? "Ölmez, tek bir yemek fikri satmaz. Sermaye, saha operasyonu, insan yapısı ve raporlama kontrolünü aynı işletme düzenine bağlar."
                    : "Ölmez does not sell one food idea. It connects capital, field operations, people structure, and reporting control into one operating model."}
                </p>

                <div className="mt-6 grid gap-4">
                  {previewCards.map((card) => (
                    <div
                      key={card.label}
                      className="border border-white/12 bg-black/24 p-4"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                        {card.label}
                      </p>
                      <p className="mt-3 text-sm leading-[1.75] text-white/76">
                        {card.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/12 bg-black/24 p-5 backdrop-blur-sm"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/42">
                {stat.label}
              </p>
              <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
