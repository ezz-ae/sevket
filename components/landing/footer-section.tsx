"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail, MapPin, Phone, Globe2 } from "lucide-react";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { splitLocaleFromPath, withLocale } from "@/lib/site-locale";
import { LivePageCount } from "@/components/shared/live-page-count";

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
      eyebrow: isTurkish ? "Yatırım erişimi" : "Investment access",
      links: [
        { name: isTurkish ? "Risk yönetimi" : "Risk Management", href: withLocale("/risk-management", locale), hint: isTurkish ? "Kayıt" : "Record" },
        { name: isTurkish ? "Hesap belgeleri" : "Accounts Documentation", href: withLocale("/accounts-documentation", locale) },
        { name: isTurkish ? "Junior yatırımcı" : "Junior Investor", href: withLocale("/junior-investor-program", locale), hint: isTurkish ? "Yeni" : "New" },
        { name: "AFFAREM Academy", href: withLocale("/affarem-academy", locale) },
        { name: isTurkish ? "AFFAREM paneli" : "AFFAREM Dashboard", href: withLocale("/investors/dashboard", locale), hint: isTurkish ? "Yeni" : "New" },
        { name: isTurkish ? "Yatırımcı sorumluluğu" : "Investor Responsibility", href: withLocale("/investor-responsibility", locale) },
        { name: isTurkish ? "Vergi ve raporlama" : "Tax & Reporting", href: withLocale("/tax-reporting", locale) },
        { name: isTurkish ? "Düzenleyici bekleme" : "Regulatory Holding", href: withLocale("/regulatory-holding", locale) },
        { name: isTurkish ? "Tahsis seçenekleri" : "Allocation Options", href: withLocale("/allocation-options", locale) },
        { name: isTurkish ? "Ünite inceleme odası" : "Unit Review Room", href: withLocale("/deployment-room", locale), hint: isTurkish ? "Yeni" : "New" },
        { name: isTurkish ? "Aktif fırsatlar" : "Active Opportunities", href: withLocale("/opportunities", locale), hint: isTurkish ? "5 açık" : "5 open" },
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
        { name: isTurkish ? "Yetenekler" : "Talents", href: withLocale("/talents", locale) },
        { name: isTurkish ? "Hikayeler" : "Stories", href: withLocale("/stories", locale) },
        { name: isTurkish ? "Liderlik" : "Leadership", href: withLocale("/people/leadership", locale) },
        { name: isTurkish ? "Sosyal Sorumluluk" : "Social Responsibility", href: withLocale("/social-responsibility", locale) },
        { name: isTurkish ? "Global fon departmanı" : "Global Funding Department", href: withLocale("/social-responsibility/global-funding", locale) },
        { name: isTurkish ? "Sevet Projesi" : "Sevet Project", href: withLocale("/sevet-project", locale) },
      ],
    },
    {
      title: isTurkish ? "Operasyon" : "Operations",
      eyebrow: isTurkish ? "İşletim katmanı" : "The operating layer",
      links: [
        { name: "AFFAREM", href: withLocale("/brands/affarem", locale), hint: isTurkish ? "Zeka katmanı" : "Intelligence" },
        { name: isTurkish ? "İndirme merkezi" : "Download Center", href: withLocale("/download-center", locale) },
        { name: isTurkish ? "Ortaklar ve tedarik" : "Partners & Supply", href: withLocale("/partners-supply", locale) },
        { name: isTurkish ? "Açık ihaleler" : "Open Tenders", href: withLocale("/open-tenders", locale) },
        { name: isTurkish ? "Hikayeler ve ağ akışı" : "Stories & Network Feed", href: withLocale("/stories", locale) },
        { name: isTurkish ? "Etkinlikler" : "Events", href: withLocale("/events", locale) },
        { name: isTurkish ? "İletişim Masası" : "Contact Desk", href: withLocale("/contact", locale) },
      ],
    },
  ];

  const featuredIssues = [
    { name: isTurkish ? "Risk merkezi" : "Risk Center", href: withLocale("/risk-management", locale) },
    { name: isTurkish ? "Hesap belgeleri" : "Account Documents", href: withLocale("/accounts-documentation", locale) },
    { name: isTurkish ? "İndirme merkezi" : "Download Center", href: withLocale("/download-center", locale) },
    { name: isTurkish ? "Vergi raporlama" : "Tax Reporting", href: withLocale("/tax-reporting", locale) },
    { name: isTurkish ? "Tedarik" : "Supply", href: withLocale("/partners-supply", locale) },
    { name: isTurkish ? "İhale gönder" : "Submit Tender", href: withLocale("/open-tenders", locale) },
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
    { name: isTurkish ? "Risk" : "Risk", href: withLocale("/risk-management", locale) },
    { name: isTurkish ? "Dosyalar" : "Files", href: withLocale("/download-center", locale) },
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
                {isTurkish ? "Kayıtlar korunur." : "Records maintained."}
                <span className="block italic text-white/60">
                  {isTurkish ? "Erişim, risk, belge, operasyon." : "Access, risk, documents, operations."}
                </span>
              </p>
              <p className="mt-6 max-w-[56ch] text-base md:text-lg leading-[1.8] text-white/70">
                {isTurkish
                  ? "Ölmez platformunda sayılar, hesaplar, dosyalar, risk kayıtları ve operasyon kararları görünür kalmalıdır."
                  : "The Ölmez platform should keep numbers, accounts, files, risk records, and operating decisions visible."}
              </p>
            </div>

            <div className="border border-white/12 bg-black/40 p-7 backdrop-blur-md">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#e9c092]">
                {isTurkish ? "Masaya bağlanın" : "Reach the desk"}
              </p>
              <ul className="mt-6 space-y-4 text-sm text-white/75">
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#b8865a]" />
                  <a href="mailto:hello@olmez.us" className="hover:text-white transition-colors">hello@olmez.us</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-[#b8865a]" />
                  <a href="mailto:people@olmez.us" className="hover:text-white transition-colors">people@olmez.us</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-[#b8865a]" />
                  <a href="tel:+18336656398" className="hover:text-white transition-colors">
                    {isTurkish ? "Hotline +1 833 665 6398" : "Hotline +1 833 665 6398"}
                  </a>
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
          <div className="flex flex-col gap-2">
            <p>
              {isTurkish
                ? "© 2026 Ölmez Franchise Systems Ltd. Tüm hakları saklıdır."
                : "© 2026 Ölmez Franchise Systems Ltd. All rights reserved."}
            </p>
            <LivePageCount label={isTurkish ? "Bu sayfadaki kişiler" : "People on this page now"} />
          </div>
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
