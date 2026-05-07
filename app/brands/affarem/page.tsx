import type { Metadata } from "next";
import { AffaremIntelligenceFilm } from "@/components/affarem/intelligence-film";
import { FooterSection } from "@/components/landing/footer-section";
import { Navigation } from "@/components/landing/navigation";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "AFFAREM Intelligence Layer — Ölmez",
  description:
    "AFFAREM does not show reports. It explains the business while it is moving: market signal, branch signal, investor account, risk, distribution, and decision.",
  alternates: {
    canonical: `${baseUrl}/brands/affarem`,
  },
  openGraph: {
    title: "AFFAREM Intelligence Layer — Ölmez",
    description:
      "The operating memory of Ölmez: market signal, branch signal, investor account, risk, distribution, and human-supervised decision control.",
    url: `${baseUrl}/brands/affarem`,
    type: "website",
  },
};

export default function AffaremPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <Navigation forceScrolled />
      <AffaremIntelligenceFilm />
      <FooterSection />
    </main>
  );
}
