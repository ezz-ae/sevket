import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { ApplyForm } from "@/components/people/apply-form";

export const metadata: Metadata = {
  title: "Apply — Ölmez People Office",
  description: "Apply for an Ölmez role through the People Office route.",
};

export default async function PeopleApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string; title?: string; country?: string; city?: string }>;
}) {
  const params = await searchParams;

  return (
    <main
      className="relative min-h-screen text-white"
      style={{ background: "linear-gradient(180deg, #170f0b 0%, #050505 42%, #121712 100%)" }}
    >
      <Navigation forceScrolled />

      <section className="border-t border-white/10 pt-40 pb-20 lg:pt-52 lg:pb-28">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Link
            href="/people#positions"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/54 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to roles
          </Link>
          <span className="mt-10 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
            <span className="h-px w-10 bg-[#b8865a]" />
            People Office application
          </span>
          <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.2rem)] leading-[0.94] tracking-[-0.04em]">
            Apply with context.
          </h1>
          <p className="mt-7 max-w-[62ch] text-base leading-[1.85] text-white/70">
            Use this route for job applications, internal people review, or role-specific hiring. If your case is private or sensitive, contact the People Office directly at{" "}
            <a href="mailto:people@olmez.us" className="text-[#e7bc8b] hover:text-white">
              people@olmez.us
            </a>.
          </p>
          {params.title && (
            <div className="mt-8 border border-white/10 bg-black/24 p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Selected role</p>
              <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-white">
                {params.title} / {params.city}, {params.country}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">{params.role}</p>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-6 lg:grid-cols-[1fr_0.72fr] lg:px-12">
          <div className="border border-white/10 bg-black/24 p-6 lg:p-8">
            <ApplyForm role={params.role} title={params.title} country={params.country} city={params.city} />
          </div>

          <aside className="border border-white/10 bg-black/24 p-6 lg:p-8">
            <Mail className="h-5 w-5 text-[#b8865a]" />
            <h2 className="mt-5 font-display text-3xl tracking-[-0.03em] text-white">
              People support stays direct.
            </h2>
            <p className="mt-4 text-sm leading-[1.8] text-white/64">
              Anyone working with Ölmez who needs personal support, guidance, or a private people-related conversation can reach the People Office directly.
            </p>
            <a
              href="mailto:people@olmez.us"
              className="mt-6 inline-flex h-11 items-center justify-center bg-[#b8865a] px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              people@olmez.us
            </a>
          </aside>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
