import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Investor Responsibility — Ölmez / AFFAREM",
  description:
    "A clear explanation of investor responsibility inside the Ölmez controlled food-business system: starter, junior, branch, four-investor, and operator obligations.",
  alternates: { canonical: `${baseUrl}/investor-responsibility` },
  openGraph: {
    title: "Investor Responsibility — Ölmez / AFFAREM",
    description: "Responsibility precedes return. Read the structured obligations of every investor tier.",
    url: `${baseUrl}/investor-responsibility`,
    type: "website",
  },
};

const responsibilityBlocks = [
  {
    title: "Starter investor responsibilities",
    body:
      "Starter investors learn the reporting rhythm, keep AFFAREM account details current, read risk notices, and respond to basic account or distribution questions quickly.",
  },
  {
    title: "Junior investor responsibilities",
    body:
      "Junior investors enter a pool before a branch. Their responsibility is to understand pool performance, distribution conditions, communication standards, and the limits of projection language.",
  },
  {
    title: "Branch investor responsibilities",
    body:
      "Branch investors carry direct unit exposure. They must follow operator updates, reporting exceptions, reserve rules, manager quality, and the discipline score connected to the branch.",
  },
  {
    title: "Four-investor model",
    body:
      "Where a unit uses four investor seats, each investor enters a shared responsibility structure. The model only works when communication, reporting, and manager oversight stay clean.",
  },
  {
    title: "Operator responsibility",
    body:
      "An investor may be active in the unit or may work through an operator. In both cases, operating behavior matters because performance is created in the branch, not in a deck.",
  },
  {
    title: "Manager-hired model",
    body:
      "If the investor hires a manager, the work may be delegated. Accountability is not. Manager selection, communication, and replacement discipline remain part of the investor’s responsibility.",
  },
  {
    title: "Reporting expectations",
    body:
      "Investors are expected to read AFFAREM notices, account statements, distribution history, operating flags, and reconciliation summaries before requesting decisions.",
  },
  {
    title: "Risk understanding",
    body:
      "Food business performance changes with sales, labor, rent, supply cost, reserves, and local execution. No investor should treat projections as fixed income.",
  },
  {
    title: "AFFAREM account responsibility",
    body:
      "Account security, personal details, tax profile, payout settings, KYC status, and document review must remain current for reporting and distribution processing.",
  },
  {
    title: "Distribution expectations",
    body:
      "Eligible net distributions are reviewed and processed twice weekly after sales reconciliation, operating costs, reserves, fees, and applicable deductions.",
  },
  {
    title: "Communication standards",
    body:
      "Investor communication should be documented, specific, and timely. Urgent branch matters should move through the correct AFFAREM or support channel.",
  },
  {
    title: "Discipline score",
    body:
      "The discipline score is a behavioral signal. It reflects response quality, reporting consistency, branch cooperation, and the investor’s ability to operate inside a controlled system.",
  },
];

export default function InvestorResponsibilityPage() {
  return (
    <main
      className="relative min-h-screen text-white"
      style={{ background: "linear-gradient(180deg, #17100c 0%, #050505 42%, #111511 100%)" }}
    >
      <Navigation forceScrolled />

      <section className="relative overflow-hidden border-t border-white/10 pt-40 pb-20 lg:pt-56 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src="/brand-library/olmez-image-may-6-2026-03-47-45-pm-3.png"
            alt="Ölmez investor responsibility visual"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/72 to-black/26" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
            <span className="h-px w-10 bg-[#b8865a]" />
            Investor Responsibility
          </span>
          <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em]">
            The responsibility side comes first.
          </h1>
          <p className="mt-7 max-w-[62ch] text-base leading-[1.85] text-white/72 md:text-lg">
            Ölmez investment is not passive fantasy. Investors are entering a controlled food-business system. Their responsibility depends on the package, position, and investment type.
          </p>
          <blockquote className="mt-8 max-w-[48ch] border-l-2 border-[#b8865a] pl-6 font-display text-2xl leading-[1.35] tracking-[-0.03em] text-white">
            An investor does not only enter the return side of the business. They enter the responsibility side first.
          </blockquote>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#responsibilities"
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              Review responsibilities
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/junior-investor-program"
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/16 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/34 hover:text-white"
            >
              Junior Investor Program
            </Link>
          </div>
        </div>
      </section>

      <section id="responsibilities" className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-12">
          {responsibilityBlocks.map((block) => (
            <article key={block.title} className="border border-white/10 bg-black/24 p-6">
              <ShieldCheck className="h-4 w-4 text-[#b8865a]" />
              <h2 className="mt-4 font-display text-2xl tracking-[-0.03em] text-white">{block.title}</h2>
              <p className="mt-4 text-sm leading-[1.8] text-white/64">{block.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-12">
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src="/brand-library/olmez-image-may-6-2026-03-47-45-pm-2.png"
              alt="Ölmez controlled investment system visual"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              What investors should not expect
            </span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
              No fantasy, no fixed-income language.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "No guaranteed ROI.",
                "No risk-free participation.",
                "No automatic profit.",
                "No fixed return unless a signed legal instrument explicitly says so.",
                "No passive owner privilege when the branch needs attention.",
                "No distribution before reconciliation and reserve review.",
              ].map((item) => (
                <div key={item} className="border border-white/10 bg-black/24 p-5">
                  <p className="text-sm leading-[1.75] text-white/68">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[58ch] text-sm leading-[1.85] text-white/56">
              This page is operational guidance, not a substitute for legal, tax, financial, or suitability review. Investors should read the relevant documents and seek independent advice before committing capital.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
