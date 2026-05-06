import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { SiteLocale, withLocale } from "@/lib/site-locale";

export function HeroSection({ locale = "default" }: { locale?: SiteLocale }) {
  const isTurkish = locale === "tr";
  const heroStats = [
    { label: isTurkish ? "Merkez" : "Headquarters", value: "Edinburgh" },
    { label: isTurkish ? "Güncel sayı" : "Current issue", value: "Mid 2026" },
    { label: isTurkish ? "Marka cümlesi" : "Brand line", value: isTurkish ? "İş. Bir sonraki seviye için kuruldu." : "Business. Built next." },
    { label: isTurkish ? "Ana odak" : "Primary focus", value: isTurkish ? "Ölçekten önce hikaye" : "Story before scale" },
  ];
  const previewCards = isTurkish
    ? [
        {
          label: "Operasyon dili",
          value: "Mekan, yayın ve sistem tek yüzeyde okunur",
        },
        {
          label: "Veri netliği",
          value: "Koyu zemin üstünde ayrılmış kartlar ve okunabilir metrikler",
        },
      ]
    : [
        {
          label: "Operating language",
          value: "Room, publication, and system read as one surface",
        },
        {
          label: "Data clarity",
          value: "Separated cards and readable metrics over the dark field",
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
      <div className="absolute right-[-8rem] top-24 h-[26rem] w-[26rem] rounded-full bg-[#b8865a]/12 blur-3xl animate-[orb-drift_22s_ease-in-out_infinite]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-14 pt-28 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/60">
              <span className="h-px w-10 bg-[#b8865a]" />
              {isTurkish ? "Edinburgh amiral gemisi" : "Edinburgh flagship"}
            </span>

            <div className="mt-8 w-44 sm:w-52 lg:w-60">
              <Image
                src={olmezBrandAssets.logos.white.src}
                alt={olmezBrandAssets.logos.white.alt}
                width={360}
                height={112}
                priority
                className="h-auto w-full"
              />
            </div>

            <h1 className="mt-8 max-w-[10.5ch] font-display text-[clamp(2.9rem,6.6vw,6.2rem)] leading-[0.92] tracking-[-0.045em] text-balance">
              {isTurkish
                ? "Disiplinli büyüme için net bir amiral gemisi."
                : "A clear flagship for disciplined growth."}
            </h1>

            <p className="mt-7 max-w-[52ch] text-base leading-[1.8] text-white/74 md:text-lg">
              {isTurkish
                ? "Ölmez; mekan, yayın, filo ve işletim sistemini tek bir kurumsal dil altında toplar. Büyük söylem yerine daha net veri, daha kontrollü yüzey ve daha okunabilir bir marka yapısı hedeflenir."
                : "Ölmez brings the room, publication, fleet, and operating system under one institutional language. The goal is less noise, clearer data, and a surface that reads like a business standard."}
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
                href={withLocale("/about", locale)}
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                {isTurkish ? "Markaya gir" : "Enter the brand"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={withLocale("/magazine", locale)}
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/18 bg-black/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:border-white/35 hover:bg-white/6"
              >
                {isTurkish ? "Field Notes oku" : "Read field notes"}
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end lg:w-full lg:max-w-[34rem]">
            <div className="relative overflow-hidden border border-white/12 bg-black/28 p-6 backdrop-blur-md lg:p-7">
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(184,134,90,0.16),transparent_42%,rgba(76,104,82,0.14))]" />
              <div className="relative">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/52">
                  {isTurkish ? "Sistem önizlemesi" : "System preview"}
                </span>
                <h2 className="mt-4 max-w-[12ch] font-display text-3xl tracking-[-0.03em] text-white md:text-4xl">
                  {isTurkish ? "Marka açık. Veri okunur." : "Brand clear. Data readable."}
                </h2>
                <p className="mt-4 max-w-[42ch] text-sm leading-[1.8] text-white/68">
                  {isTurkish
                    ? "Koyu alanlar artık tek ton bırakılmıyor. Bakır ve zeytin tonlu hareket katmanları veri kartlarını ayırıyor ve ana odakları daha kolay okunur hale getiriyor."
                    : "The dark field no longer sits as one flat tone. Copper and olive motion layers separate the data cards and make the main signals easier to read."}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
