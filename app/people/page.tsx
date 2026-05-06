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
    <main
      className="relative min-h-screen overflow-x-hidden text-white"
      style={{
        background:
          "linear-gradient(180deg, #170f0b 0%, #050505 38%, #121712 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-80 animate-[gradient-shift_20s_ease-in-out_infinite]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 16%, rgba(184, 134, 90, 0.18), transparent 24%), radial-gradient(circle at 78% 24%, rgba(65, 95, 72, 0.16), transparent 22%), radial-gradient(circle at 62% 78%, rgba(160, 103, 74, 0.12), transparent 26%)",
            backgroundSize: "180% 180%",
          }}
        />
        <div className="absolute -left-24 top-32 h-[26rem] w-[26rem] rounded-full bg-[#b8865a]/12 blur-3xl animate-[orb-drift_24s_ease-in-out_infinite]" />
        <div className="absolute right-[-8rem] top-[28rem] h-[24rem] w-[24rem] rounded-full bg-[#36543d]/14 blur-3xl animate-[orb-drift_20s_ease-in-out_infinite]" />
      </div>
      <Navigation />
      <PeoplePortal locale={locale} />
      <FooterSection />
    </main>
  );
}
