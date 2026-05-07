"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone, Globe2 } from "lucide-react";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { splitLocaleFromPath, withLocale } from "@/lib/site-locale";

export function FooterSection() {
  const pathname = usePathname();
  const { locale } = splitLocaleFromPath(pathname);
  const isTurkish = locale === "tr";

  const footerColumns: { title: string; eyebrow: string; links: { name: string; href: string; hint?: string }[] }[] = [
    {
      title: isTurkish ? "Markalar" : "Brands",
      eyebrow: isTurkish ? "5 marka, tek sistem" : "5 brands, one system",
      links: [
        { name: "Ölmez Franchise Systems", href: withLocale("/brands/olmez", locale), hint: isTurkish ? "Amiral gemisi" : "Flagship" },
        { name: "SHAWARMA TIME", href: withLocale("/brands/shawarmer", locale), hint: isTurkish ? "ABD koridoru" : "US corridor" },
        { name: "Turkish PIDE Co.", href: withLocale("/brands/turkishpide", locale), hint: isTurkish ? "Avrupa fırını" : "EU bakery" },
        { name: "AFFAREM", href: withLocale("/brands/affarem", locale), hint: isTurkish ? "Kontrol katmanı" : "Control layer" },
        { name: "DISCIPLINA", href: withLocale("/brands/disciplina", locale), hint: isTurkish ? "Operatör hattı" : "Operator pipeline" },
        { name: isTurkish ? "Tüm marka portalı" : "All brand portals", href: withLocale("/brands", locale) },
      ],
    },
    {
      title: isTurkish ? "Sermaye" : "Capital",
      eyebrow: isTurkish ? "Sermaye konuşlandırma" : "Capital deployment",
      links: [
        { name: isTurkish ? "Konuşlandırma Odası" : "Deployment Room", href: withLocale("/deployment-room", locale), hint: isTurkish ? "Yeni" : "New" },
        { name: isTurkish ? "Aktif fırsatlar" : "Active Opportunities", href: withLocale("/opportunities", locale), hint: isTurkish ? "5 açık" : "5 open" },
        { name: isTurkish ? "Yatırımcı portalı" : "Investor Portal", href: withLocale("/investors", locale) },
        { name: isTurkish ? "Yatırım katmanları" : "Capital tiers", href: withLocale("/investors#tiers", locale) },
        { name: isTurkish ? "Raporlar ve dosyalar" : "Reports & Filings", href: withLocale("/reports", locale) },
        { name: isTurkish ? "SEC dosyaları" : "SEC Filings", href: withLocale("/filing", locale) },
        { name: isTurkish ? "Denetim konsolu" : "Auditing Console", href: withLocale("/auditing", locale) },
        { name: isTurkish ? "Başarılar" : "Achievements", href: withLocale("/achievements", locale) },
      ],
    },
    {
      title: isTurkish ? "Hikaye" : "Story",
      eyebrow: isTurkish ? "Markanın sesi" : "The brand's voice",
      links: [
        { name: isTurkish ? "Ölmez Hakkında" : "About Ölmez", href: withLocale("/about", locale) },
        { name: isTurkish ? "Kurucu Profili" : "Founder Profile", href: withLocale("/founder", locale) },
        { name: isTurkish ? "Şirket Profili" : "Company Profile", href: withLocale("/company-profile", locale) },
        { name: isTurkish ? "Field Notes — Dergi" : "Field Notes — Magazine", href: withLocale("/magazine", locale) },
        { name: isTurkish ? "İnsanlar" : "People", href: withLocale("/people", locale) },
        { name: isTurkish ? "Liderlik" : "Leadership", href: withLocale("/people/leadership", locale) },
        { name: isTurkish ? "Sosyal Sorumluluk" : "Social Responsibility", href: withLocale("/social-responsibility", locale) },
        { name: isTurkish ? "Sevet Projesi" : "Sevet Project", href: withLocale("/sevet-project", locale) },
      ],
    },
    {
      title: isTurkish ? "Operasyon" : "Operations",
      eyebrow: isTurkish ? "İşletim katmanı" : "The operating layer",
      links: [
        { name: isTurkish ? "Doktrin" : "Doctrine", href: withLocale("/#doctrine", locale) },
        { name: "AFFAREM", href: withLocale("/#affarem", locale) },
        { name: isTurkish ? "Ölçek modeli" : "Scale Model", href: withLocale("/#ladder", locale) },
        { name: isTurkish ? "Ekosistem haritası" : "Ecosystem map", href: withLocale("/#marketplace", locale) },
        { name: isTurkish ? "Etkinlikler" : "Events", href: withLocale("/events", locale) },
        { name: isTurkish ? "Analitik" : "Analytics", href: withLocale("/analytics", locale) },
        { name: isTurkish ? "İletişim Masası" : "Contact Desk", href: withLocale("/contact", locale) },
      ],
    },
  ];

  const featuredIssues = [
    { name: isTurkish ? "Konuşlandırma Odası" : "Investor Deployment Room", href: withLocale("/deployment-room", locale) },
    { name: "Issue 12 — The Mid-2026 Blueprint", href: withLocale("/brands/olmez/magazine", locale) },
    { name: "Issue 11.5 — Top Turkey Businessmen", href: withLocale("/magazine", locale) },
    { name: isTurkish ? "Son makale: §1" : "Latest essay: §1", href: withLocale("/magazine/the-founders-blueprint", locale) },
    { name: isTurkish ? "Marka dosyası" : "Brand deck", href: withLocale("/company-profile", locale) },
    { name: isTurkish ? "Yatırımcı broşürü" : "Investor brief", href: withLocale("/investors", locale) },
  ];

  const desks = [
    {
      label: isTurkish ? "Edinburgh — Merkez" : "Edinburgh — Headquarters",
      detail: isTurkish ? "Marka masası ve kurucu ofisi" : "Brand desk and founder office",
      icon: MapPin,
    },
    {
      label: isTurkish ? "Londra — Köprü" : "London — Bridge",
      detail: "AFFAREM " + (isTurkish ? "kontrol katmanı" : "control layer"),
      icon: Globe2,
    },
    {
      label: isTurkish ? "İstanbul — Operasyonlar" : "Istanbul — Operations",
      detail: isTurkish ? "DISCIPLINA eğitim hattı" : "DISCIPLINA pipeline",
      icon: MapPin,
    },
    {
      label: isTurkish ? "New York / Houston — ABD" : "New York / Houston — USA",
      detail: "SHAWARMA TIME " + (isTurkish ? "koridor filosu" : "corridor fleet"),
      icon: MapPin,
    },
  ];

  const quickLinks = [
    { name: isTurkish ? "Yatırımcılar" : "Investors", href: withLocale("/investors", locale) },
    { name: isTurkish ? "Fırsatlar" : "Opportunities", href: withLocale("/opportunities", locale) },
    { name: isTurkish ? "Raporlar" : "Reports", href: withLocale("/reports", locale) },
    { name: isTurkish ? "İnsanlar" : "People", href: withLocale("/people", locale) },
    { name: isTurkish ? "İletişim" : "Contact", href: withLocale("/contact", locale) },
  ];

  const legalLinks = [
    { name: isTurkish ? "Gizlilik" : "Privacy", href: withLocale("/legal/privacy", locale) },
    { name: isTurkish ? "Şartlar" : "Terms", href: withLocale("/legal/terms", locale) },
    { name: isTurkish ? "Yasal dosyalar" : "Filings", href: withLocale("/filing", locale) },
    { name: isTurkish ? "Sitemap" : "Sitemap", href: "/sitemap.xml" },
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
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
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
              <p className="mt-6 font-display text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[1.02] max-w-[13ch]">
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

            <div className="border border-white/12 bg-black/40 p-7 backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
                {isTurkish ? "Masaya bağlanın" : "Reach the desk"}
              </p>
              <ul className="mt-6 space-y-4 text-sm text-white/75">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#b8865a]" />
                  <a href="mailto:desk@olmez.us" className="hover:text-white transition-colors">desk@olmez.us</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#b8865a]" />
                  <a href="mailto:investors@olmez.us" className="hover:text-white transition-colors">investors@olmez.us</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#b8865a]" />
                  <span>{isTurkish ? "Yatırımcı hattı 09:00 – 18:00 BST" : "Investor desk 09:00 – 18:00 BST"}</span>
                </li>
              </ul>
              <Link
                href={withLocale("/contact", locale)}
                className="group mt-7 inline-flex h-11 items-center gap-3 bg-[#b8865a] px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                {isTurkish ? "Görüşme planla" : "Schedule a call"}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured strip */}
      <div className="border-t border-white/10 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
              {isTurkish ? "Öne çıkanlar" : "Featured"}
            </span>
            <div className="flex flex-wrap gap-3">
              {featuredIssues.map((link) => (
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
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid gap-12 py-16 lg:grid-cols-4 lg:py-20">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                {column.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-xl tracking-[-0.02em] text-white">
                {column.title}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-baseline justify-between gap-3 text-sm text-white/65 transition-colors hover:text-[#e9c092]"
                    >
                      <span>{link.name}</span>
                      {link.hint && (
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30 group-hover:text-[#e9c092]/70">
                          {link.hint}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Desk locations */}
        <div className="grid gap-4 border-t border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {desks.map((desk) => (
            <div key={desk.label} className="border border-white/8 bg-white/[0.02] p-5">
              <desk.icon className="h-4 w-4 text-[#b8865a]" />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                {desk.detail}
              </p>
              <p className="mt-2 font-display text-base tracking-[-0.02em] text-white">
                {desk.label}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
              {isTurkish ? "Hızlı bağlantılar" : "Quick links"}
            </span>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            {isTurkish
              ? "© 2026 Ölmez Franchise Systems Ltd. Tüm hakları saklıdır."
              : "© 2026 Ölmez Franchise Systems Ltd. All rights reserved."}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <span className="text-[#b8865a]">
              {isTurkish ? "Ağ operasyonel" : "Network operational"}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
