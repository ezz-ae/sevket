"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { SiteLocale, splitLocaleFromPath, swapLocaleInPath, withLocale } from "@/lib/site-locale";

const navLinkLabels = {
  default: ["Brands", "Investors", "Opportunities", "Review Room", "Reports", "Magazine", "People", "Contact"],
  uk: ["Brands", "Investors", "Opportunities", "Review Room", "Reports", "Magazine", "People", "Contact"],
  us: ["Brands", "Investors", "Opportunities", "Review Room", "Reports", "Magazine", "People", "Contact"],
  ru: ["Brands", "Investors", "Opportunities", "Review Room", "Reports", "Magazine", "People", "Contact"],
  tr: ["Markalar", "Yatırımcılar", "Fırsatlar", "Konuşlandırma Odası", "Raporlar", "Dergi", "İnsanlar", "İletişim"],
} as const;

const navHrefs = [
  "/brands",
  "/investors",
  "/opportunities",
  "/deployment-room",
  "/reports",
  "/magazine",
  "/people",
  "/contact",
];

const localeOptions: { locale: SiteLocale; label: string; disabled?: boolean }[] = [
  { locale: "default", label: "EN" },
  { locale: "uk", label: "UK" },
  { locale: "us", label: "US" },
  { locale: "tr", label: "TR" },
  { locale: "ru", label: "RU Soon" },
];

export function Navigation({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const pathname = usePathname();
  const { locale, path } = splitLocaleFromPath(pathname);
  const isLanding = path === "/";
  const [isScrolled, setIsScrolled] = useState(forceScrolled || !isLanding);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeLabels = navLinkLabels[locale];
  const navLinks = navHrefs.map((href, index) => ({
    href: withLocale(href, locale),
    baseHref: href,
    name: activeLabels[index],
  }));

  useEffect(() => {
    if (forceScrolled || !isLanding) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled, isLanding]);

  const useSolidChrome = isScrolled || isMobileMenuOpen;
  const logo = useSolidChrome
    ? olmezBrandAssets.logos.copper
    : olmezBrandAssets.logos.white;

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          useSolidChrome
            ? "bg-[#080808]/85 backdrop-blur-xl border border-white/10 rounded-none shadow-[0_8px_30px_rgba(0,0,0,0.4)] max-w-[1280px]"
            : "bg-transparent max-w-[1440px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href={withLocale("/", locale)} className="flex items-center gap-2 group shrink-0">
            <div
              className={`transition-all duration-500 ${
                isScrolled ? "w-32 h-10" : "w-40 h-14"
              }`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={70}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-8">
            {navLinks.map((link) => {
              const active =
                link.baseHref.startsWith("/") && !link.baseHref.includes("#")
                  ? path === link.baseHref || path.startsWith(link.baseHref + "/")
                  : false;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-mono uppercase tracking-[0.12em] transition-colors duration-300 relative group ${
                    useSolidChrome
                      ? active
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                      : active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    } ${useSolidChrome ? "bg-[#b8865a]" : "bg-white"}`}
                  />
                </Link>
              );
            })}

            <div className="ml-2 flex items-center gap-2 border-l border-white/10 pl-4">
              {localeOptions.map((option) => {
                const targetHref = swapLocaleInPath(pathname, option.locale);
                const active = locale === option.locale;
                const isSoon = option.locale === "ru";

                return (
                  <Link
                    key={option.label}
                    href={targetHref}
                    className={`inline-flex h-8 items-center border px-2.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                      active
                        ? "border-[#b8865a] bg-[#b8865a] text-black"
                        : "border-white/10 text-white/58 hover:border-white/28 hover:text-white"
                    } ${isSoon ? "opacity-70" : ""}`}
                  >
                    {option.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              useSolidChrome ? "text-white" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-[#050505] z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="w-36">
            <Image
              src={olmezBrandAssets.logos.copper.src}
              alt={olmezBrandAssets.logos.copper.alt}
              width={180}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6 lg:gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display text-white hover:text-[#d9b079] transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">
                Locale
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {localeOptions.map((option) => (
                  <Link
                    key={option.label}
                    href={swapLocaleInPath(pathname, option.locale)}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`inline-flex h-10 items-center border px-3 font-mono text-[10px] uppercase tracking-[0.18em] ${
                      locale === option.locale
                        ? "border-[#b8865a] bg-[#b8865a] text-black"
                        : "border-white/12 text-white/68"
                    }`}
                  >
                    {option.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`pt-8 border-t border-white/10 flex flex-col gap-2 transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
              {locale === "tr"
                ? "Edinburgh merkezi · İstanbul / Londra köprüsü"
                : "Edinburgh HQ · Istanbul / London bridge"}
            </span>
            <span className="font-mono text-[11px] text-white/40">
              {locale === "tr"
                ? "İş. Bir sonraki seviye için kuruldu. Ölçekten önce disiplin."
                : "Business. Built next. Discipline before scale."}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
