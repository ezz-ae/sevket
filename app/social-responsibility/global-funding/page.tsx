import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Global Ölmez Funding Department — Social Responsibility",
  description:
    "The Global Ölmez Funding Department begins in October 2026: 0.5% of distributions, supporting infrastructure expansion in Saudi Arabia, Greece, and Jordan, with $50M projected by end of 2028.",
  alternates: { canonical: `${baseUrl}/social-responsibility/global-funding` },
  openGraph: {
    title: "Global Ölmez Funding Department",
    description: "October 2026 launch · 0.5% of investor distribution · Saudi Arabia, Greece, Jordan first.",
    url: `${baseUrl}/social-responsibility/global-funding`,
    type: "website",
  },
};

export default function GlobalFundingPage() {
  return (
    <main
      className="relative min-h-screen text-white"
      style={{ background: "linear-gradient(180deg, #18110d 0%, #0e1510 50%, #050505 100%)" }}
    >
      <Navigation forceScrolled />

      <section className="relative overflow-hidden border-t border-white/10 pt-40 pb-20 lg:pt-56 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src={olmezBrandAssets.images.villageEducation.src}
            alt={olmezBrandAssets.images.villageEducation.alt}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/72 to-black/24" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <Link
            href="/social-responsibility"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/54 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Social Responsibility
          </Link>
          <span className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
            <span className="h-px w-10 bg-[#b8865a]" />
            Begins October 2026
          </span>
          <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em]">
            Global Ölmez Funding Department.
          </h1>
          <p className="mt-7 max-w-[66ch] text-base leading-[1.85] text-white/72 md:text-lg">
            From October 2026, Ölmez will launch the Global Ölmez Funding Department as part of its wider social responsibility platform. The department will be supported by 0.5% of eligible investor distributions and will focus on high-risk discovery, early infrastructure preparation, and responsible market entry support in Saudi Arabia, Greece, and Jordan.
          </p>
          <blockquote className="mt-8 max-w-[54ch] border-l-2 border-[#b8865a] pl-6 font-display text-2xl leading-[1.35] tracking-[-0.03em] text-white">
            The purpose is not to donate randomly. The purpose is to build responsible entry points before expansion becomes aggressive.
          </blockquote>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-12">
          {[
            ["Funding source", "0.5% of eligible investor distributions"],
            ["Start", "October 2026"],
            ["Priority countries", "Saudi Arabia / Greece / Jordan"],
            ["Projected support target", "$50M by end of 2028"],
          ].map(([label, value]) => (
            <article key={label} className="border border-white/10 bg-black/24 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">{label}</p>
              <p className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              Infrastructure responsibility
            </span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
              Build the ground before the growth.
            </h2>
            <p className="mt-8 max-w-[54ch] text-sm leading-[1.85] text-white/64">
              The department is designed for market-readiness work that is too early, risky, or educational to be treated as a normal branch investment. It is not framed as guaranteed funding, charity marketing, or automatic capital allocation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "High-risk discovery before market entry.",
              "Early market education and local understanding.",
              "Infrastructure research for responsible expansion.",
              "Community-backed business development.",
              "Expansion-readiness work before aggressive growth.",
              "Support for Saudi Arabia, Greece, and Jordan through the global infrastructure system.",
            ].map((item) => (
              <article key={item} className="border border-white/10 bg-black/24 p-5">
                <p className="text-sm leading-[1.75] text-white/68">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[960px] px-6 text-center lg:px-12">
          <h2 className="font-display text-4xl tracking-[-0.03em] text-white md:text-6xl">
            Projected does not mean promised.
          </h2>
          <p className="mx-auto mt-8 max-w-[62ch] text-sm leading-[1.85] text-white/62">
            The $50M figure is a projected target by the end of 2028. Actual support depends on eligible distributions, operating performance, market readiness, governance approval, provider availability, and country-specific conditions.
          </p>
          <Link
            href="/social-responsibility"
            className="mt-10 inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
          >
            Return to Social Responsibility
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
