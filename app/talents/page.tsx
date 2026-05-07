import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { TalentForm } from "@/components/talents/talent-form";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Talent Room — Ölmez",
  description:
    "A direct route for people with talent, ideas, partnerships, branch interest, AFFAREM contribution, or unusual opportunities.",
  alternates: { canonical: `${baseUrl}/talents` },
  openGraph: {
    title: "Talent Room — Ölmez",
    description: "Submit a talent, idea, or unusual opportunity. Reviewed by the People Office at people@olmez.us.",
    url: `${baseUrl}/talents`,
    type: "website",
  },
};

export default function TalentsPage() {
  return (
    <main
      className="relative min-h-screen text-white"
      style={{ background: "linear-gradient(180deg, #170f0b 0%, #050505 45%, #111611 100%)" }}
    >
      <Navigation forceScrolled />

      <section className="relative overflow-hidden border-t border-white/10 pt-40 pb-20 lg:pt-56 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src={olmezBrandAssets.images.networking.src}
            alt={olmezBrandAssets.images.networking.alt}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/72 to-black/28" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
            <span className="h-px w-10 bg-[#b8865a]" />
            Talent Room
          </span>
          <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em]">
            Talent does not always arrive through a job title.
          </h1>
          <p className="mt-7 max-w-[58ch] text-base leading-[1.85] text-white/72 md:text-lg">
            If you believe you can build, operate, design, cook, manage, sell, teach, improve, or open something with Ölmez, tell us.
          </p>
          <p className="mt-5 max-w-[58ch] text-base leading-[1.85] text-white/62">
            We review people, ideas, and unusual opportunities, not only CVs.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#talent-form"
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              Tell Us What You Can Build
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="mailto:people@olmez.us?subject=Talent%20Room%20Review"
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/16 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/34 hover:text-white"
            >
              Send Your Idea
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 lg:grid-cols-4 lg:px-12">
          {[
            "I want to join the company.",
            "I want to open or operate something.",
            "I want to work with AFFAREM.",
            "I have an idea that does not fit a job post.",
          ].map((line) => (
            <article key={line} className="border border-white/10 bg-black/24 p-6">
              <p className="font-display text-2xl tracking-[-0.03em] text-white">{line}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="talent-form" className="border-t border-white/10 bg-white/[0.02] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.8fr_1fr] lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              Review form
            </span>
            <h2 className="mt-6 max-w-[11ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
              Join the Talent Room.
            </h2>
            <p className="mt-8 max-w-[48ch] text-sm leading-[1.85] text-white/64">
              Be specific. The strongest submissions explain what the person can build, where they can help, and why the company should review them outside a normal hiring funnel.
            </p>
          </div>
          <div className="border border-white/10 bg-black/24 p-6 lg:p-8">
            <TalentForm />
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
