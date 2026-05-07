import type { Metadata } from "next";
import { ClipboardList } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { tenderCategories, tenderStatuses } from "@/lib/due-diligence-data";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Open Tenders — Ölmez",
  description: "Submit supplier offers for food, farm supply, halal meat, dairy, fleet, clothing, technology, equipment, accommodation, training, security, legal, banking, and logistics.",
  alternates: { canonical: `${baseUrl}/open-tenders` },
};

export default function OpenTendersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <Navigation forceScrolled />
      <section className="border-t border-gray-300 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8b5f3d]">Open Tenders</span>
          <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
            Supplier offers enter as records.
          </h1>
          <p className="mt-7 max-w-[64ch] text-base leading-[1.85] text-gray-600">
            Ölmez collects real supplier offers through category, pricing, capacity, delivery timeline, compliance checks, and document upload.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-300 bg-gray-50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-5xl tracking-[-0.04em]">Current Tender Categories</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {tenderCategories.map((category) => (
              <div key={category} className="border border-gray-300 bg-white p-4">
                <ClipboardList className="h-4 w-4 text-[#8b5f3d]" />
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-700">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-300 px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-gray-500">Submission form</span>
            <h2 className="mt-6 max-w-[12ch] font-display text-5xl tracking-[-0.04em]">Send the offer with enough detail to review.</h2>
            <div className="mt-10 grid gap-2">
              {tenderStatuses.map((status) => (
                <span key={status} className="inline-flex w-fit border border-gray-300 bg-gray-50 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  {status}
                </span>
              ))}
            </div>
          </div>
          <form className="grid gap-4 border border-gray-300 bg-gray-50 p-6">
            {[
              ["Company details", "text"],
              ["Category", "text"],
              ["Offer details", "textarea"],
              ["Pricing", "text"],
              ["Capacity", "text"],
              ["Delivery timeline", "text"],
              ["Documents upload", "file"],
            ].map(([label, type]) => (
              <label key={label} className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">{label}</span>
                {type === "textarea" ? (
                  <textarea className="mt-2 min-h-28 w-full border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#8b5f3d]" />
                ) : (
                  <input type={type} className="mt-2 h-12 w-full border border-gray-300 bg-white px-4 outline-none focus:border-[#8b5f3d]" />
                )}
              </label>
            ))}
            <label className="flex items-start gap-3 text-sm leading-[1.6] text-gray-600">
              <input type="checkbox" className="mt-1" />
              The offer can be reviewed by Ölmez procurement, finance, legal, and operating teams.
            </label>
            <label className="flex items-start gap-3 text-sm leading-[1.6] text-gray-600">
              <input type="checkbox" className="mt-1" />
              The supplier can provide compliance, tax, quality, halal, insurance, or license documents when requested.
            </label>
            <button type="button" className="mt-2 h-12 bg-[#8b5f3d] px-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
              Submit offer
            </button>
          </form>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
