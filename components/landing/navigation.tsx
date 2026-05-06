"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "About",      href: "/about"           },
  { name: "Reports",    href: "/reports"         },
  { name: "Events",     href: "/events"          },
  { name: "Filings",    href: "/#marketplace"    },
  { name: "Auditing",   href: "/auditing"        },
  { name: "Analytics",  href: "/analytics"       },
  { name: "Magazine",   href: "/magazine"        },
];

export function Navigation({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(forceScrolled || !isLanding);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        isScrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/85 backdrop-blur-xl border border-foreground/10 rounded-none shadow-[0_8px_30px_rgba(0,0,0,0.4)] max-w-[1280px]"
            : "bg-transparent max-w-[1440px]"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            isScrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div
              className={`transition-all duration-500 ${
                isScrolled ? "w-32 h-10" : "w-40 h-14"
              }`}
            >
              <Image
                src="/olmez-full-logo.svg"
                alt="Ölmez Franchise Systems - Restaurant Business Infrastructure"
                width={200}
                height={70}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const active =
                link.href.startsWith("/") && !link.href.includes("#")
                  ? pathname === link.href || pathname.startsWith(link.href + "/")
                  : false;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-mono uppercase tracking-[0.12em] transition-colors duration-300 relative group ${
                    isScrolled
                      ? active
                        ? "text-foreground"
                        : "text-foreground/70 hover:text-foreground"
                      : active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    } ${isScrolled ? "bg-foreground" : "bg-white"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-6 lg:gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div
            className={`pt-8 border-t border-foreground/10 flex flex-col gap-2 transition-all duration-500 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Edinburgh HQ · Istanbul / London bridge
            </span>
            <span className="font-mono text-[11px] text-muted-foreground">
              All filings dated · audit chain attached
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
