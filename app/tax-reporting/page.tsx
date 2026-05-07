import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { formatUsd, siteMetrics } from "@/lib/site-metrics";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Tax & Reporting Structure — Ölmez",
  description: "Investor tax profiles, branch-level reporting, country-level tax review, distribution statements, annual reports, local rules, and regulatory holds.",
  alternates: { canonical: `${baseUrl}/tax-reporting` },
};

export default function TaxReportingPage() {
  const sections = [
    "Investor Tax Profiles",
    "Branch-Level Reporting",
    "Country-Level Tax Review",
    "Distribution Statements",
    "Annual Reports",
    "Withholding / Local Rules",
    "Regulatory Holds",
    "Sample Statement",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-950">
      <Navigation forceScrolled />
      <section className="border-t border-gray-300 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8b5f3d]">Tax & Reporting Structure</span>
            <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
              A distribution is not complete until it is reportable.
            </h1>
            <p className="mt-7 max-w-[62ch] text-base leading-[1.85] text-gray-600">
              Recorded distributions, investor accounts, country rules, branch statements, and annual reports must reconcile before the file is considered complete.
            </p>
          </div>
          <div className="border border-gray-300 bg-gray-50 p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">Recorded distributions</p>
            <p className="mt-4 font-display text-6xl tracking-[-0.05em]">{formatUsd(siteMetrics.recordedDistributionsUsd)}</p>
            <p className="mt-5 text-sm leading-[1.8] text-gray-600">This figure must remain tied to statement exports, account records, and tax review workflow.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-300 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((section) => (
            <article key={section} className="border border-gray-300 bg-white p-6">
              <FileText className="h-5 w-5 text-[#8b5f3d]" />
              <h2 className="mt-5 font-display text-3xl tracking-[-0.03em]">{section}</h2>
              <p className="mt-4 text-sm leading-[1.8] text-gray-600">
                Status, source record, account owner, country rule, and review date must be visible before the file is used for an investor decision.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-gray-300 bg-gray-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1100px] border border-gray-300 bg-white p-6">
          <div className="grid grid-cols-2 gap-4 border-b border-gray-300 pb-5 md:grid-cols-4">
            <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">Statement</p><p className="mt-2 text-lg">Sample</p></div>
            <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">Account</p><p className="mt-2 text-lg">Junior Pool</p></div>
            <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">Review</p><p className="mt-2 text-lg">Pending</p></div>
            <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">Export</p><p className="mt-2 text-lg">Tax file</p></div>
          </div>
          <p className="mt-5 text-sm leading-[1.8] text-gray-600">
            Sample statement modules include gross sales, operating costs, reserves, fees, deductions, eligible net distribution, payment rail, country rule, withholding note, and AFFAREM account reference.
          </p>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
