import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { accountLevels, requiredDocuments } from "@/lib/due-diligence-data";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Accounts Documentation — Ölmez",
  description: "What every Ölmez account can and cannot do: access level, limits, review, required documents, restrictions, and upgrade rules.",
  alternates: { canonical: `${baseUrl}/accounts-documentation` },
};

export default function AccountsDocumentationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <Navigation forceScrolled />
      <section className="border-t border-gray-300 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8b5f3d]">Accounts Documentation</span>
          <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
            Account access is a record, not a promise.
          </h1>
          <p className="mt-7 max-w-[64ch] text-base leading-[1.85] text-gray-600">
            This page explains what every account can and cannot do. Access changes only when the account record supports it.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-300 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px] overflow-hidden border border-gray-300">
          <div className="grid grid-cols-4 bg-gray-100 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
            <span>Level</span>
            <span>Access</span>
            <span>Limit</span>
            <span>Review</span>
          </div>
          {accountLevels.map((item) => (
            <div key={item.level} className="grid grid-cols-1 gap-3 border-t border-gray-300 px-5 py-5 text-sm text-gray-600 md:grid-cols-4">
              <strong className="font-display text-xl tracking-[-0.02em] text-gray-950">{item.level}</strong>
              <span>{item.access}</span>
              <span>{item.limit}</span>
              <span>{item.review}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-300 bg-gray-50 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Required documents</span>
            <h2 className="mt-6 max-w-[11ch] font-display text-5xl tracking-[-0.04em]">No document, no upgrade.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {requiredDocuments.map((doc) => (
              <article key={doc} className="border border-gray-300 bg-white p-5">
                <FileText className="h-5 w-5 text-[#8b5f3d]" />
                <p className="mt-5 font-display text-2xl tracking-[-0.03em]">{doc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-300 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Distribution rules", "Eligible distributions only after reconciliation, reserves, fees, deductions, and account checks."],
            ["Account restrictions", "Incomplete documents, failed review, regulatory holding, early exit behavior, or low readiness can restrict access."],
            ["Account upgrade", "Access changes only when the account record supports it."],
            ["Action route", "Request document review or account access through the correct desk."],
          ].map(([title, body]) => (
            <article key={title} className="border border-gray-300 p-6">
              <h2 className="font-display text-3xl tracking-[-0.03em]">{title}</h2>
              <p className="mt-4 text-sm leading-[1.8] text-gray-600">{body}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-[1400px]">
          <Link href="/download-center" className="inline-flex h-12 items-center gap-3 bg-[#8b5f3d] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
            Open Download Center
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
