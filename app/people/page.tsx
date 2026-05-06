import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PeoplePortal } from "@/components/people/people-portal";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/people", locale);

  return {
    title: isTurkish
      ? "İnsanlar — Ölmez İnsan Kaynakları Portalı"
      : "People — Ölmez Human Resourcing Portal",
    description: isTurkish
      ? "Ölmez insan portalını keşfedin: kültür, global işe alım ve Amerika Birleşik Devletleri, Türkiye ve Birleşik Krallık genelinde 48 tam zamanlı açık rol."
      : "Explore the Ölmez people portal: culture, global hiring, and 48 full-time open positions across the United States, Turkey, and the United Kingdom.",
    openGraph: {
      title: isTurkish
        ? "İnsanlar — Ölmez İnsan Kaynakları Portalı"
        : "People — Ölmez Human Resourcing Portal",
      description: isTurkish
        ? "Kültür, işe alım ve misafirperverlik, operasyon, büyüme, finans ve yapay zeka ofis sistemlerinde 48 açık rol."
        : "Culture, hiring, and 48 open roles across hospitality, operations, growth, finance, and AI office systems.",
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
  };
}

export default async function PeoplePage() {
  const locale = await getRequestLocale();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <Navigation />
      <PeoplePortal locale={locale} />
      <FooterSection />
    </main>
  );
}
