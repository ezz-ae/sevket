import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PeoplePortal } from "@/components/people/people-portal";
import { peopleTotals } from "@/lib/people-data";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/people", locale);

  return {
    title: isTurkish
      ? "İnsanlar — Ölmez İnsan Kaynakları Portalı"
      : "People — Ölmez Human Resourcing Portal",
    description: isTurkish
      ? `Ölmez insan portalını keşfedin: kültür, global işe alım ve ülke/departman bazlı ${peopleTotals.openRoles} açık fırsat.`
      : `Explore the Ölmez people portal: culture, global hiring, and ${peopleTotals.openRoles} open opportunities across countries and departments.`,
    openGraph: {
      title: isTurkish
        ? "İnsanlar — Ölmez İnsan Kaynakları Portalı"
        : "People — Ölmez Human Resourcing Portal",
      description: isTurkish
        ? `${peopleTotals.openRoles} açık rol: operasyon, AFFAREM, yatırımcı ilişkileri, mutfak, teknoloji, finans, eğitim ve saha.`
        : `${peopleTotals.openRoles} open roles across operations, AFFAREM, investor relations, kitchen, technology, finance, education, and field work.`,
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
      </div>
      <Navigation />
      <PeoplePortal locale={locale} />
      <FooterSection />
    </main>
  );
}
