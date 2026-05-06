"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { splitLocaleFromPath, withLocale } from "@/lib/site-locale";

export function FooterSection() {
  const pathname = usePathname();
  const { locale } = splitLocaleFromPath(pathname);
  const isTurkish = locale === "tr";
  const footerLinks = {
    [isTurkish ? "Hikaye" : "Story"]: [
      { name: isTurkish ? "Ölmez Hakkında" : "About Ölmez", href: withLocale("/about", locale) },
      { name: isTurkish ? "Kurucu Profili" : "Founder Profile", href: withLocale("/founder", locale) },
      { name: isTurkish ? "Field Notes" : "Field Notes", href: withLocale("/magazine", locale) },
      { name: isTurkish ? "İnsan Portalı" : "People Portal", href: withLocale("/people", locale) },
      { name: isTurkish ? "Sosyal Sorumluluk" : "Social Responsibility", href: withLocale("/social-responsibility", locale) },
      { name: isTurkish ? "Şirket Profili" : "Company Profile", href: withLocale("/company-profile", locale) },
      { name: isTurkish ? "İletişim Masası" : "Contact Desk", href: withLocale("/contact", locale) },
    ],
    [isTurkish ? "Platform" : "Platform"]: [
      { name: isTurkish ? "Doktrin" : "Doctrine", href: withLocale("/#doctrine", locale) },
      { name: "AFFAREM", href: withLocale("/#affarem", locale) },
      { name: isTurkish ? "Ölçek Modeli" : "Scale Model", href: withLocale("/#ladder", locale) },
      { name: isTurkish ? "Ekosistem" : "Ecosystem", href: withLocale("/#marketplace", locale) },
    ],
    [isTurkish ? "Sermaye" : "Capital"]: [
      { name: isTurkish ? "Raporlar ve Dosyalar" : "Reports & Filings", href: withLocale("/reports", locale) },
      { name: isTurkish ? "Yatırımcı İlişkileri" : "Investor Relations", href: withLocale("/investors", locale) },
      { name: isTurkish ? "Başarılar" : "Achievements", href: withLocale("/achievements", locale) },
      { name: isTurkish ? "Fırsatlar" : "Opportunities", href: withLocale("/opportunities", locale) },
      { name: isTurkish ? "Denetim Konsolu" : "Auditing Console", href: withLocale("/auditing", locale) },
    ],
  };
  const quickLinks = [
    { name: "Issue 12", href: withLocale("/brands/olmez/magazine", locale) },
    { name: isTurkish ? "Son Hikaye" : "Latest Story", href: withLocale("/magazine/the-founders-blueprint", locale) },
    { name: isTurkish ? "İnsanlar" : "People", href: withLocale("/people", locale) },
    { name: isTurkish ? "Liderlik" : "Leadership", href: withLocale("/people/leadership", locale) },
    { name: isTurkish ? "Marka Dosyası" : "Brand Deck", href: withLocale("/company-profile", locale) },
  ];

  return (
    <footer className="relative bg-[#050505] text-white">
      <div className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src={olmezBrandAssets.images.fleet.src}
            alt={olmezBrandAssets.images.fleet.alt}
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="w-32 sm:w-40 mb-8">
              <Image
                src={olmezBrandAssets.logos.white.src}
                alt={olmezBrandAssets.logos.white.alt}
                width={220}
                height={70}
                className="w-full h-auto"
              />
            </div>
            <span className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-white/55">
              <span className="w-10 h-px bg-[#b8865a]" />
              {isTurkish ? "Son editoryal not" : "Final editorial note"}
            </span>
            <p className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl tracking-[-0.02em] leading-[0.98] max-w-[12ch]">
              {isTurkish ? "İş. Bir sonraki seviye için kuruldu." : "Business. Built next."}
              <span className="block italic text-white/60">
                {isTurkish ? "Gürültü olmadan ölçekle." : "Scale without noise."}
              </span>
            </p>
            <p className="mt-6 max-w-[56ch] text-base md:text-lg leading-[1.8] text-white/70">
              {isTurkish
                ? "Ölmez, disiplinli restoran altyapısı için editoryal bir amiral gemisidir. Mekan, filo, yayın ve işletim sistemi aynı hikayeyi anlatır."
                : "Ölmez is an editorial flagship for disciplined restaurant infrastructure. The room, the fleet, the publication, and the operating system all tell the same story."}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid gap-14 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
          <div>
            <div className="w-32 mb-8">
              <Image
                src={olmezBrandAssets.logos.copper.src}
                alt={olmezBrandAssets.logos.copper.alt}
                width={200}
                height={64}
                className="w-full h-auto"
              />
            </div>
            <p className="max-w-sm text-sm leading-[1.8] text-white/58">
              {isTurkish
                ? "Edinburgh masası. İstanbul ritmi. ABD hareketi. Tekrarlanabilirlik, tasarım disiplini ve operasyonel kontrol üzerine kurulu premium bir sistem."
                : "Edinburgh desk. Istanbul rhythm. U.S. movement. A premium system built around repeatability, design restraint, and operational control."}
            </p>

            <div className="mt-8 space-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
              <p>{isTurkish ? "Edinburgh merkezi" : "Edinburgh HQ"}</p>
              <p>{isTurkish ? "Londra köprüsü / İstanbul operasyonları" : "London bridge / Istanbul operations"}</p>
              <p>{isTurkish ? "2026 tarihli Field Notes" : "Field Notes dated 2026"}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center gap-2 border border-white/12 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 transition-colors hover:border-[#b8865a] hover:text-white"
                >
                  {link.name}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/95">
                {title}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-[#e9c092]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            {isTurkish
              ? "© 2026 Ölmez Franchise Systems Ltd. Tüm hakları saklıdır."
              : "© 2026 Ölmez Franchise Systems Ltd. All rights reserved."}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <span>{isTurkish ? "Editoryal amiral gemisi" : "Editorial flagship"}</span>
            <span>{isTurkish ? "Disiplin onaylı" : "Discipline qualified"}</span>
            <span className="text-[#b8865a]">
              {isTurkish ? "Ağ operasyonel" : "Network operational"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
