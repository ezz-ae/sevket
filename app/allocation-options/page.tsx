import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { allocationOptions } from "@/lib/due-diligence-data";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Allocation Options — Ölmez",
  description: "Hold position, reallocate, move to pool, hold credit, or request exit review when an account or opportunity needs an allocation decision.",
  alternates: { canonical: `${baseUrl}/allocation-options` },
};

export default function AllocationOptionsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <Navigation forceScrolled />
      <section className="border-t border-gray-300 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8b5f3d]">Allocation Options</span>
          <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
            Capital movement needs a record.
          </h1>
          <p className="mt-7 max-w-[64ch] text-base leading-[1.85] text-gray-600">
            When a market, branch, or account changes status, the investor should see the available allocation option and review path.
          </p>
        </div>
      </section>
      <section className="border-t border-gray-300 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2 xl:grid-cols-5">
          {allocationOptions.map((option) => (
            <article key={option} className="border border-gray-300 bg-gray-50 p-6">
              <h2 className="font-display text-3xl tracking-[-0.03em]">{option}</h2>
              <p className="mt-4 text-sm leading-[1.8] text-gray-600">Requires account status, opportunity status, document check, and approval note.</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-[1400px]">
          <Link href="/accounts-documentation" className="inline-flex h-12 items-center gap-3 bg-[#8b5f3d] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            Review account rules
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
