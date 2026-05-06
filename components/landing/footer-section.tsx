"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const footerLinks = {
  Platform: [
    { name: "Doctrine",       href: "/#doctrine"    },
    { name: "AFFAREM rooms",  href: "/#affarem"     },
    { name: "Control layers", href: "/auditing#layers" },
    { name: "Asset ladder",   href: "/#ladder"      },
    { name: "Marketplace",    href: "/#marketplace" },
  ],
  Capital: [
    { name: "Auditing console", href: "/auditing" },
    { name: "Sample filing TX-GAS-014", href: "/filing/TX-GAS-014" },
    { name: "4-investor framework", href: "/#ladder" },
    { name: "Smart Discipline Score", href: "/auditing#score" },
  ],
  Operations: [
    { name: "LiveOps coverage", href: "/auditing#liveops" },
    { name: "Smart CCTV protocols", href: "/auditing#layers" },
    { name: "Field Notes", href: "/magazine" },
    { name: "Founder profile", href: "/founder" },
  ],
  Company: [
    { name: "About Sevet Ölmez", href: "/founder" },
    { name: "Edinburgh HQ",      href: "/founder" },
    { name: "Field Notes",       href: "/magazine" },
    { name: "Open filings",      href: "/#marketplace", badge: "Open" },
  ],
};

const socialLinks = [
  { name: "LinkedIn",  href: "#" },
  { name: "Substack",  href: "#" },
  { name: "Filings",   href: "#" },
];

export function FooterSection() {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative bg-black text-white">
      {/* Edinburgh banner */}
      <div className="relative w-full h-[260px] md:h-[340px] overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Upscaled%20Image%20%2810%29-UnDKstODkIENp5xqTYUEpt0Sm8tNOw.png"
          alt="Edinburgh stone-and-charcoal landscape"
          className="w-full h-full object-cover object-center"
          style={{ filter: "grayscale(0.85) brightness(0.55) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

        {/* Manifesto overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 pb-10">
            <span className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-white/55 mb-3">
              <span className="w-10 h-px bg-[#b8865a]" />
              Final canon declaration
            </span>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-[-0.01em] max-w-3xl text-pretty">
              <span className="text-white">We do not sell food.</span>{" "}
              <span className="text-white/55 italic">
                We sell the system of repetition that makes food profitable.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header strip */}
        <div className="py-8 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#b8865a] animate-pulse" />
            <span className="text-white/70">AFFAREM Live</span>
            <span>147 branches</span>
          </span>
          <span>{time ? `${time.toLocaleTimeString("en-GB")} BST · Edinburgh` : "—"}</span>
        </div>

        {/* Main footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#b8865a]" />
                <span className="text-2xl font-display tracking-[0.02em]">SEVETTEAM</span>
              </a>

              <p className="text-white/55 leading-relaxed mb-6 max-w-sm text-sm">
                Restaurant Business Infrastructure Company. We turn existing movement
                into managed food assets. Edinburgh / Istanbul / U.S. fuel-stop network.
              </p>

              <address className="not-italic text-sm text-white/45 leading-relaxed mb-8 font-mono">
                SevetTeam Ltd.<br />
                Filing IV · Edinburgh, UK<br />
                Founded by Şevketullah &ldquo;Sevet&rdquo; Ölmez<br />
                <span className="text-white/35">Ankara · 12 October 1988</span>
              </address>

              <div className="flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-xs font-mono uppercase tracking-[0.18em] text-white/45 hover:text-[#b8865a] transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-[11px] font-mono uppercase tracking-[0.22em] text-white mb-6">{title}</h3>
                <ul className="space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white transition-colors inline-flex items-center gap-2"
                      >
                        {link.name}
                        {"badge" in link && link.badge && (
                          <span className="text-[9px] font-mono uppercase tracking-[0.18em] px-1.5 py-0.5 bg-[#b8865a] text-black">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.22em] text-white/40">
          <p>&copy; 2026 SevetTeam Ltd. · All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <span>Not pay-to-work</span>
            <span>Discipline qualified</span>
            <span className="flex items-center gap-2 text-[#b8865a]">
              <span className="w-1.5 h-1.5 bg-[#b8865a]" />
              Network operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
