import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Regulatory Holding — Ölmez",
  description: "How an opportunity, state, market, or branch group is paused while local rules, documents, tax, banking, permits, or disclosures are reviewed.",
  alternates: { canonical: `${baseUrl}/regulatory-holding` },
};

export default function RegulatoryHoldingPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navigation forceScrolled />
      <section className="border-t border-white/10 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#e9c092]">Regulatory Holding</span>
          <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
            A pause is also a control action.
          </h1>
          <p className="mt-7 max-w-[64ch] text-base leading-[1.85] text-white/66">
            A state, market, branch group, or opportunity may be placed in holding when local rules, documents, banking, tax, permits, or disclosures require review before access continues.
          </p>
        </div>
      </section>
      <section className="border-t border-white/10 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Trigger", "Notice", "Account effect", "Release record"].map((title) => (
            <article key={title} className="border border-white/10 bg-white/[0.03] p-6">
              <h2 className="font-display text-3xl tracking-[-0.03em]">{title}</h2>
              <p className="mt-4 text-sm leading-[1.8] text-white/64">
                The file should state what changed, who owns the review, which accounts are affected, and what record is needed before release.
              </p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-[1400px]">
          <Link href="/risk-management" className="inline-flex h-12 items-center gap-3 bg-[#b8865a] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-black">
            Return to risk center
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
