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

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#050505] text-white">
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

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col px-6 pb-12 pt-32 lg:px-12 lg:pb-16 lg:pt-40">
        <div className="max-w-4xl">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/60">
            <span className="h-px w-10 bg-[#b8865a]" />
            {isTurkish ? "Edinburgh amiral gemisi" : "Edinburgh flagship"}
          </span>

          <div className="mt-8 w-44 sm:w-56 lg:w-64">
            <Image
              src={olmezBrandAssets.logos.white.src}
              alt={olmezBrandAssets.logos.white.alt}
              width={360}
              height={112}
              priority
              className="h-auto w-full"
            />
          </div>

          <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3.2rem,9vw,8.5rem)] leading-[0.88] tracking-[-0.04em] text-balance">
            {isTurkish
              ? "Disiplinli büyüme için bir amiral gemisi."
              : "A flagship for disciplined growth."}
          </h1>

          <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/72 md:text-lg">
            {isTurkish
              ? "Ölmez artık editoryal bir lüks marka olarak sunuluyor: mekan, yayın, filo ve işletim sistemi tek ve net bir kimlik altında sahneleniyor. İşin kendini ölçek istemeden önce açıkladığı yer burası."
              : "Ölmez is now presented as an editorial luxury brand: the room, the publication, the fleet, and the operating system all staged as one unmistakable identity. This is where the business explains itself before it asks to scale."}
          </p>

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
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/18 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors hover:border-white/35 hover:bg-white/6"
            >
              {isTurkish ? "Field Notes oku" : "Read field notes"}
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
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
