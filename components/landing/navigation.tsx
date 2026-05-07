"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { SiteLocale, splitLocaleFromPath, swapLocaleInPath, withLocale } from "@/lib/site-locale";

type NavLeaf = {
  href: string;
  label: { default: string; tr: string };
  description?: { default: string; tr: string };
  hint?: { default: string; tr: string };
};

type NavGroup = {
  id: string;
  label: { default: string; tr: string };
  href?: string;
  primary?: NavLeaf;
  columns?: { heading: { default: string; tr: string }; items: NavLeaf[] }[];
};

const navGroups: NavGroup[] = [
  {
    id: "brands",
    label: { default: "Brands", tr: "Markalar" },
    href: "/brands",
    columns: [
      {
        heading: { default: "Ecosystem", tr: "Ekosistem" },
        items: [
          { href: "/brands", label: { default: "All brand portals", tr: "Tüm marka portalları" }, description: { default: "Five brands, one disciplined operating system.", tr: "Beş marka, tek disiplinli işletim sistemi." } },
          { href: "/brands/olmez", label: { default: "Ölmez Franchise Systems", tr: "Ölmez Franchise" }, description: { default: "The flagship: cultural authority + training centres.", tr: "Amiral marka: kültürel otorite ve eğitim merkezleri." } },
          { href: "/brands/shawarmer", label: { default: "Shawarma Time", tr: "Shawarma Time" }, description: { default: "US fuel-corridor restaurant network.", tr: "ABD yakıt koridoru restoran ağı." } },
          { href: "/brands/turkishpide", label: { default: "Turkish PIDE Co.", tr: "Turkish PIDE Co." }, description: { default: "European premium bakery platform.", tr: "Avrupa premium fırın platformu." } },
        ],
      },
      {
        heading: { default: "Operating layer", tr: "İşletim katmanı" },
        items: [
          { href: "/brands/affarem", label: { default: "AFFAREM", tr: "AFFAREM" }, description: { default: "The control + reporting layer for every unit.", tr: "Her ünite için kontrol ve raporlama katmanı." } },
          { href: "/brands/disciplina", label: { default: "DISCIPLINA", tr: "DISCIPLINA" }, description: { default: "Operator pipeline + Smart Discipline Score.", tr: "Operatör hattı ve Smart Discipline Score." } },
          { href: "/sevet-project", label: { default: "The Sevet Project", tr: "Sevet Projesi" }, description: { default: "Mission, structure, and how the system holds.", tr: "Misyon, yapı ve sistemin nasıl ayakta durduğu." } },
        ],
      },
    ],
  },
  {
    id: "invest",
    label: { default: "Invest", tr: "Yatır" },
    href: "/investors",
    primary: {
      href: "/deployment-room",
      label: { default: "Investor Review Room", tr: "Yatırımcı İnceleme Odası" },
      description: { default: "Inspect a Shawarma Time unit before you invest. Powered by AFFAREM.", tr: "Yatırım yapmadan önce bir Shawarma Time ünitesini inceleyin. Powered by AFFAREM." },
      hint: { default: "Featured", tr: "Öne çıkan" },
    },
    columns: [
      {
        heading: { default: "Enter the system", tr: "Sisteme gir" },
        items: [
          { href: "/junior-investor-program", label: { default: "Junior Investor Program", tr: "Junior Yatırımcı Programı" }, description: { default: "Pool of 50 units · $1K–$12K · 6-month subscription.", tr: "50 ünitelik havuz · $1K–$12K · 6 aylık abonelik." }, hint: { default: "New", tr: "Yeni" } },
          { href: "/opportunities", label: { default: "Active Opportunities", tr: "Aktif Fırsatlar" }, description: { default: "Open seats across 5 brands and 18 markets.", tr: "5 marka, 18 pazarda açık koltuklar." } },
          { href: "/deployment-room", label: { default: "Investor Review Room", tr: "Yatırımcı İnceleme Odası" }, description: { default: "Hotspot inspection of the unit before opening day.", tr: "Açılış gününden önce ünite incelemesi." } },
          { href: "/filing", label: { default: "Filings Marketplace", tr: "Dosya Pazarı" }, description: { default: "Corridor filings with seat structure and disclosures.", tr: "Koridor dosyaları ve koltuk yapıları." } },
        ],
      },
      {
        heading: { default: "After you invest", tr: "Yatırımdan sonra" },
        items: [
          { href: "/investors", label: { default: "Investor Portal", tr: "Yatırımcı Portalı" }, description: { default: "Capital tiers, briefings, and qualification.", tr: "Sermaye katmanları, brifingler ve nitelik." } },
          { href: "/investors/dashboard", label: { default: "AFFAREM Dashboard", tr: "AFFAREM Paneli" }, description: { default: "Wallet, agreements, payouts, tax, and live chat.", tr: "Cüzdan, sözleşmeler, ödemeler, vergi ve canlı sohbet." }, hint: { default: "Preview", tr: "Önizleme" } },
          { href: "/reports", label: { default: "Reports & Filings", tr: "Raporlar ve Dosyalar" }, description: { default: "Quarterly filings, audits, and brand reports.", tr: "Üç aylık dosyalar, denetimler ve marka raporları." } },
          { href: "/investor-responsibility", label: { default: "Investor Responsibility", tr: "Yatırımcı Sorumluluğu" }, description: { default: "Global Funding Department · 0.5% of distribution.", tr: "Global Funding Department · dağıtımın %0,5'i." } },
        ],
      },
    ],
  },
  {
    id: "story",
    label: { default: "Story", tr: "Hikaye" },
    href: "/about",
    columns: [
      {
        heading: { default: "Brand voice", tr: "Marka sesi" },
        items: [
          { href: "/about", label: { default: "About Ölmez", tr: "Ölmez Hakkında" } },
          { href: "/founder", label: { default: "Founder Profile", tr: "Kurucu Profili" } },
          { href: "/company-profile", label: { default: "Company Profile", tr: "Şirket Profili" } },
          { href: "/magazine", label: { default: "Field Notes — Magazine", tr: "Field Notes — Dergi" } },
        ],
      },
      {
        heading: { default: "Movement", tr: "Hareket" },
        items: [
          { href: "/stories", label: { default: "People Stories", tr: "İnsan Hikayeleri" }, hint: { default: "New", tr: "Yeni" } },
          { href: "/achievements", label: { default: "Achievements Archive", tr: "Başarılar Arşivi" } },
          { href: "/social-responsibility", label: { default: "Social Responsibility", tr: "Sosyal Sorumluluk" } },
          { href: "/social-responsibility/global-funding", label: { default: "Global Funding Department", tr: "Global Funding Department" }, hint: { default: "Oct 2026", tr: "Eki 2026" } },
          { href: "/events", label: { default: "Events", tr: "Etkinlikler" } },
        ],
      },
    ],
  },
  {
    id: "people",
    label: { default: "People", tr: "İnsanlar" },
    href: "/people",
    columns: [
      {
        heading: { default: "Inside Ölmez", tr: "Ölmez içinde" },
        items: [
          { href: "/people", label: { default: "People Portal", tr: "İnsan Portalı" }, description: { default: "Country-level openings and culture.", tr: "Ülke bazlı açık roller ve kültür." } },
          { href: "/people/leadership", label: { default: "Leadership", tr: "Liderlik" }, description: { default: "The decision-making layer of the company.", tr: "Şirketin karar katmanı." } },
          { href: "/people/apply", label: { default: "Apply for a Role", tr: "Başvur" }, description: { default: "Direct application desk for active roles.", tr: "Aktif roller için başvuru masası." } },
        ],
      },
      {
        heading: { default: "Reach the office", tr: "Ofise ulaş" },
        items: [
          { href: "/talents", label: { default: "Talent Room", tr: "Yetenek Odası" }, description: { default: "Submit ideas, talents, or open invitations.", tr: "Fikirler, yetenekler veya açık davetiyeler." }, hint: { default: "New", tr: "Yeni" } },
          { href: "/contact", label: { default: "Contact Desks", tr: "İletişim Masaları" }, description: { default: "hello / investors / gov / sevet / people / media.", tr: "hello / investors / gov / sevet / people / media." } },
        ],
      },
    ],
  },
];

const localeOptions: { locale: SiteLocale; label: string }[] = [
  { locale: "default", label: "EN" },
  { locale: "uk", label: "UK" },
  { locale: "us", label: "US" },
  { locale: "tr", label: "TR" },
];

export function Navigation({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const pathname = usePathname();
  const { locale, path } = splitLocaleFromPath(pathname);
  const isLanding = path === "/";
  const isTurkish = locale === "tr";
  const [isScrolled, setIsScrolled] = useState(forceScrolled || !isLanding);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (forceScrolled || !isLanding) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled, isLanding]);

  // Close any open desktop dropdown when the route changes
  useEffect(() => {
    setOpenGroupId(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const useSolidChrome = isScrolled || isMobileMenuOpen || openGroupId !== null;
  const logo = useSolidChrome ? olmezBrandAssets.logos.copper : olmezBrandAssets.logos.white;

  const isGroupActive = (group: NavGroup) => {
    if (group.href && (path === group.href || path.startsWith(group.href + "/"))) return true;
    if (!group.columns) return false;
    return group.columns.some((col) =>
      col.items.some((leaf) => path === leaf.href || path.startsWith(leaf.href + "/"))
    );
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenGroupId(null), 120);
  };

  const tx = (entry: { default: string; tr: string }) => (isTurkish ? entry.tr : entry.default);

  // Build group panels memoised — keeps render light during hover toggle
  const groupViews = useMemo(
    () =>
      navGroups.map((group) => ({
        ...group,
        active: isGroupActive(group),
        ariaLabel: tx(group.label),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [path, locale]
  );

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          useSolidChrome
            ? "bg-[#080808]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] max-w-[1320px]"
            : "bg-transparent max-w-[1440px]"
        }`}
        onMouseLeave={scheduleClose}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href={withLocale("/", locale)} className="flex shrink-0 items-center gap-2">
            <div className={`transition-all duration-500 ${isScrolled ? "w-32 h-10" : "w-40 h-14"}`}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={70}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {groupViews.map((group) => {
              const open = openGroupId === group.id;
              return (
                <div
                  key={group.id}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenGroupId(group.id);
                  }}
                  onMouseLeave={scheduleClose}
                  onFocus={() => setOpenGroupId(group.id)}
                >
                  <Link
                    href={group.href ? withLocale(group.href, locale) : "#"}
                    className={`group relative inline-flex h-9 items-center gap-1.5 px-3 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                      useSolidChrome
                        ? group.active || open
                          ? "text-white"
                          : "text-white/65 hover:text-white"
                        : group.active || open
                        ? "text-white"
                        : "text-white/72 hover:text-white"
                    }`}
                    aria-haspopup={group.columns ? "true" : undefined}
                    aria-expanded={open ? "true" : "false"}
                  >
                    {tx(group.label)}
                    {group.columns && (
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                      />
                    )}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-px transition-all ${
                        group.active || open ? "opacity-100" : "opacity-0"
                      } ${useSolidChrome ? "bg-[#b8865a]" : "bg-white"}`}
                    />
                  </Link>

                  {open && group.columns && (
                    <div
                      className="absolute left-0 top-full pt-3"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="w-[min(720px,84vw)] border border-white/10 bg-[#0a0a0a]/95 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                        {group.primary && (
                          <Link
                            href={withLocale(group.primary.href, locale)}
                            className="group mb-5 flex items-start justify-between gap-4 border border-[#b8865a]/45 bg-[#b8865a]/12 p-4 transition-colors hover:bg-[#b8865a]/22"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                {group.primary.hint && (
                                  <span className="inline-flex h-5 items-center bg-[#b8865a] px-2 font-mono text-[9px] uppercase tracking-[0.2em] text-black">
                                    {tx(group.primary.hint)}
                                  </span>
                                )}
                                <span className="font-display text-lg tracking-[-0.02em] text-white">
                                  {tx(group.primary.label)}
                                </span>
                              </div>
                              {group.primary.description && (
                                <p className="mt-2 max-w-[48ch] text-sm leading-[1.6] text-white/70">
                                  {tx(group.primary.description)}
                                </p>
                              )}
                            </div>
                            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#e9c092] transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        )}
                        <div className="grid gap-6 sm:grid-cols-2">
                          {group.columns.map((column) => (
                            <div key={tx(column.heading)}>
                              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                                {tx(column.heading)}
                              </p>
                              <ul className="mt-3 space-y-2">
                                {column.items.map((item) => (
                                  <li key={item.href}>
                                    <Link
                                      href={withLocale(item.href, locale)}
                                      className="group flex items-start gap-3 border border-transparent px-2.5 py-2 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                                    >
                                      <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm font-medium text-white">
                                            {tx(item.label)}
                                          </span>
                                          {item.hint && (
                                            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#e9c092]">
                                              · {tx(item.hint)}
                                            </span>
                                          )}
                                        </div>
                                        {item.description && (
                                          <p className="mt-1 text-xs leading-[1.55] text-white/55">
                                            {tx(item.description)}
                                          </p>
                                        )}
                                      </div>
                                      <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-white/30 transition-colors group-hover:text-[#e9c092]" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Contact */}
            <Link
              href={withLocale("/contact", locale)}
              className={`relative inline-flex h-9 items-center gap-1.5 px-3 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                useSolidChrome
                  ? path === "/contact"
                    ? "text-white"
                    : "text-white/65 hover:text-white"
                  : path === "/contact"
                  ? "text-white"
                  : "text-white/72 hover:text-white"
              }`}
            >
              {isTurkish ? "İletişim" : "Contact"}
            </Link>

            {/* Primary CTA — Open Account */}
            <Link
              href={withLocale("/junior-investor-program", locale)}
              className="ml-2 inline-flex h-9 items-center gap-2 bg-[#b8865a] px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              {isTurkish ? "Hesap aç" : "Open Account"}
              <ArrowUpRight className="h-3 w-3" />
            </Link>

            {/* Locale switcher */}
            <div className="ml-2 flex items-center gap-1 border-l border-white/10 pl-3">
              {localeOptions.map((option) => {
                const targetHref = swapLocaleInPath(pathname, option.locale);
                const active = locale === option.locale;
                return (
                  <Link
                    key={option.label}
                    href={targetHref}
                    className={`inline-flex h-7 items-center border px-2 font-mono text-[9px] uppercase tracking-[0.16em] transition-colors ${
                      active
                        ? "border-[#b8865a] bg-[#b8865a] text-black"
                        : "border-white/10 text-white/55 hover:border-white/28 hover:text-white"
                    }`}
                  >
                    {option.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[#050505] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pt-24 pb-10">
          <div className="w-32">
            <Image
              src={olmezBrandAssets.logos.copper.src}
              alt={olmezBrandAssets.logos.copper.alt}
              width={180}
              height={60}
              className="h-auto w-full"
            />
          </div>

          <Link
            href={withLocale("/junior-investor-program", locale)}
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 bg-[#b8865a] px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-black"
          >
            {isTurkish ? "Hesap aç" : "Open Investor Account"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <div className="mt-10 flex-1 space-y-9">
            {navGroups.map((group) => (
              <section key={group.id}>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">
                  {tx(group.label)}
                </p>
                {group.primary && (
                  <Link
                    href={withLocale(group.primary.href, locale)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-3 block border border-[#b8865a]/35 bg-[#b8865a]/10 p-4"
                  >
                    <div className="flex items-center gap-2">
                      {group.primary.hint && (
                        <span className="inline-flex h-5 items-center bg-[#b8865a] px-2 font-mono text-[9px] uppercase tracking-[0.18em] text-black">
                          {tx(group.primary.hint)}
                        </span>
                      )}
                      <span className="font-display text-lg tracking-[-0.02em] text-white">
                        {tx(group.primary.label)}
                      </span>
                    </div>
                    {group.primary.description && (
                      <p className="mt-2 text-xs leading-[1.55] text-white/65">
                        {tx(group.primary.description)}
                      </p>
                    )}
                  </Link>
                )}
                <div className="mt-3 grid gap-1">
                  {group.href && (
                    <Link
                      href={withLocale(group.href, locale)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 font-display text-2xl tracking-[-0.02em] text-white"
                    >
                      {tx(group.label)} {isTurkish ? "Ana" : "Hub"} →
                    </Link>
                  )}
                  {group.columns?.flatMap((column) => column.items).map((item) => (
                    <Link
                      key={item.href}
                      href={withLocale(item.href, locale)}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between border-b border-white/5 py-2.5 text-sm text-white/82"
                    >
                      <span>{tx(item.label)}</span>
                      {item.hint && (
                        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#e9c092]">
                          {tx(item.hint)}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">
                {isTurkish ? "Doğrudan" : "Direct"}
              </p>
              <div className="mt-3 grid gap-1">
                <Link
                  href={withLocale("/contact", locale)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/5 py-2.5 text-sm text-white/82"
                >
                  <span>{isTurkish ? "İletişim Masaları" : "Contact Desks"}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/40" />
                </Link>
                <a
                  href="tel:+18336656398"
                  className="flex items-center justify-between border-b border-white/5 py-2.5 text-sm text-white/82"
                >
                  <span>{isTurkish ? "Sıcak hat" : "Hotline"}</span>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#e9c092]">+1 833 665 6398</span>
                </a>
                <a
                  href="mailto:hello@olmez.us"
                  className="flex items-center justify-between border-b border-white/5 py-2.5 text-sm text-white/82"
                >
                  <span>hello@olmez.us</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/40" />
                </a>
              </div>
            </section>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
              Locale
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {localeOptions.map((option) => (
                <Link
                  key={option.label}
                  href={swapLocaleInPath(pathname, option.locale)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`inline-flex h-9 items-center border px-3 font-mono text-[10px] uppercase tracking-[0.18em] ${
                    locale === option.locale
                      ? "border-[#b8865a] bg-[#b8865a] text-black"
                      : "border-white/12 text-white/68"
                  }`}
                >
                  {option.label}
                </Link>
              ))}
            </div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
              {isTurkish ? "Edinburgh merkezi · İstanbul / Londra köprüsü" : "Edinburgh HQ · Istanbul / London bridge"}
            </p>
            <p className="mt-2 font-mono text-[11px] text-white/38">
              {isTurkish ? "İş. Bir sonraki seviye için kuruldu." : "Business. Built next."}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
