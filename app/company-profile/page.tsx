import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

const profileChapters = [
  {
    number: "01",
    label: "Cover",
    title: "The Architecture of Impact",
    body: [
      "Ölmez presents itself as a restaurant business company, not a mood-driven hospitality label. The company profile starts from that distinction: brand authority, food assets, people systems, and measurable responsibility have to read as one structure.",
      "This document is built as a ten-section editorial profile using only the company’s local image archive. It positions Ölmez as a business infrastructure story with visual discipline, not a generic franchise brochure.",
    ],
    image: olmezBrandAssets.images.office,
  },
  {
    number: "02",
    label: "Founder logic",
    title: "From instability to structure",
    body: [
      "The founder thesis is not about personality spectacle. It is about replacing emotional inconsistency with repeatable operating logic. Systems stay. Routines survive pressure. That belief shapes the company’s visual restraint and its business architecture.",
      "The result is a brand that prefers measured repetition over theatrical hype. Edinburgh, Istanbul, and the U.S. market are treated as connected parts of one disciplined operating surface.",
    ],
    image: olmezBrandAssets.editorial[0],
  },
  {
    number: "03",
    label: "Business model",
    title: "From restaurant company to business infrastructure",
    body: [
      "The model shifts the focus away from culinary genius and toward an operating interface that makes food units measurable, investable, and manageable. Prestige restaurants build trust. Compact units build the asset. Micro-starts build the people.",
      "This move matters because investors can read the system through unit economics, reporting, control layers, and expansion discipline instead of relying on charisma or vague brand promise.",
    ],
    image: olmezBrandAssets.images.peopleEvent,
  },
  {
    number: "04",
    label: "Micro-start",
    title: "Democratizing the operator ladder",
    body: [
      "The Micro-Start Program lowers entry barriers by turning small beginnings into a staged operating ladder: street start, kiosk operator, gas station unit, and eventually multi-unit management.",
      "The social meaning is direct. A franchise should not only make rich people richer. It should teach ordinary people how to become operators who can manage discipline, waste, reporting, and customer experience without fantasy.",
    ],
    image: olmezBrandAssets.images.villageEducation,
  },
  {
    number: "05",
    label: "Road assets",
    title: "Gas stations as food engines",
    body: [
      "The gas station model follows one simple rule: do not invent traffic. Stand inside existing movement. This keeps customer acquisition logic honest while letting the product live inside a known behavior pattern.",
      "The compact shawarma format works because the footprint is tight, the menu is disciplined, and the branch can be evaluated through daily gain, payback logic, and operational correction instead of storytelling alone.",
    ],
    image: olmezBrandAssets.images.fleet,
  },
  {
    number: "06",
    label: "Control layer",
    title: "AFFAREM as the operating room",
    body: [
      "AFFAREM is the system that turns the company from a loose franchise concept into a hard operating environment. Investor Room, Design Session Room, Operator Room, Accountant Room, LiveOps Room, and Payback Room together create one version of the truth.",
      "The point is not surveillance theater. The point is capital protection, accountability, remote visibility, and intervention before drift becomes asset failure.",
    ],
    image: olmezBrandAssets.images.reception,
  },
  {
    number: "07",
    label: "Governance",
    title: "Discipline over wealth",
    body: [
      "The Smart Discipline Score formalizes a core company belief: money may open the door, but behavior decides who scales. Reporting accuracy, compliance, transparency, response speed, and team conduct become measurable expansion filters.",
      "The 4-investor branch model continues the same logic. Ownership is distributed across accountable seats, with each investor expected to manage a shift or hire qualified management for that seat.",
    ],
    image: olmezBrandAssets.images.networking,
  },
  {
    number: "08",
    label: "Global bridge",
    title: "Istanbul rhythm, British discipline",
    body: [
      "One of the strongest narratives in the system is the British-Istanbul bridge: operators shaped by Turkish food rhythm and British procedural discipline. This gives the brand a way to talk about export, standards, and repeatability without flattening its origins.",
      "The network does not treat international presence as a logo exercise. It is framed as operational translation from one market culture into another.",
    ],
    image: olmezBrandAssets.editorial[2],
  },
  {
    number: "09",
    label: "Public value",
    title: "Social responsibility as structure",
    body: [
      "The company’s responsibility program connects growth to public commitments: one tree for every 100 bills, village education in Turkey, support for The Turkish Chef, student sponsorship, and part-time education pathways.",
      "This is presented as operational responsibility rather than charity language. The work is visible, countable, and tied to the same disciplined ethos as the operating model.",
    ],
    image: olmezBrandAssets.images.studentSupport,
  },
  {
    number: "10",
    label: "Future",
    title: "A 2026 profile built for repeatability",
    body: [
      "The long-term vision is not expansion for its own sake. It is durable repetition: food units that explain themselves in numbers, operator ladders that create upward mobility, and annual structures that archive what the company actually built.",
      "The profile closes where the architecture began: not with hype, but with the claim that structure is the clearest form of belief the company can offer.",
    ],
    image: olmezBrandAssets.images.treePlanting,
  },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/company-profile", locale);

  return {
    title: isTurkish ? "Şirket Profili — Ölmez" : "Company Profile — Ölmez",
    description: isTurkish
      ? "Yerel görsellerle hazırlanmış 10 bölümlük Ölmez şirket profili."
      : "A 10-section Ölmez company profile built with the local image archive and the company’s operating narrative.",
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish ? "Şirket Profili — Ölmez" : "Company Profile — Ölmez",
      description: isTurkish
        ? "İş modeli, AFFAREM, sosyal sorumluluk ve küresel köprü yapısını bir araya getiren premium profil."
        : "A premium company profile covering the business model, AFFAREM, social responsibility, and the cross-border operating bridge.",
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
  };
}

export default async function CompanyProfilePage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, #1b130f 0%, #050505 30%, #10140f 100%)",
      }}
    >
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        eyebrow={isTurkish ? "Şirket profili" : "Company profile"}
        title={isTurkish ? "10 bölümlük" : "A ten-section"}
        italicTail={isTurkish ? "profil." : "profile."}
        dek={
          isTurkish
            ? "Yerel görsellerle kurulmuş uzun form bir Ölmez profili: kurucu mantığı, iş modeli, AFFAREM, yatırım disiplini ve sosyal sorumluluk aynı editoryal yüzeyde."
            : "A long-form Ölmez profile built with the local visual archive: founder logic, business model, AFFAREM, investor discipline, and social responsibility held inside one editorial surface."
        }
        meta={[
          { label: isTurkish ? "Bölüm" : "Sections", value: "10" },
          { label: isTurkish ? "Pazarlar" : "Markets", value: isTurkish ? "TR / ABD / BK" : "TR / US / UK" },
          { label: isTurkish ? "Görsel kaynak" : "Image source", value: isTurkish ? "Yerel klasör" : "Local folder" },
          { label: isTurkish ? "Biçim" : "Format", value: isTurkish ? "Editoryal profil" : "Editorial profile" },
        ]}
      />

      <section className="border-t border-white/10">
        {profileChapters.map((chapter, index) => {
          const reverse = index % 2 === 1;

          return (
            <div
              key={chapter.number}
              className={`border-b border-white/10 py-20 lg:py-28 ${index % 2 === 1 ? "bg-white/[0.02]" : ""}`}
            >
              <div
                className={`mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12 ${
                  reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
                }`}
              >
                <div className="relative min-h-[24rem] overflow-hidden border border-white/10 bg-black lg:min-h-[38rem]">
                  <Image
                    src={chapter.image.src}
                    alt={chapter.image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute left-6 top-6 inline-flex items-center gap-3 bg-black/55 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/78 backdrop-blur">
                    <span className="text-[#e7bc8b]">/{chapter.number}</span>
                    {chapter.label}
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                    {chapter.label}
                  </span>
                  <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
                    {chapter.title}
                  </h2>
                  <div className="mt-8 space-y-5 text-base leading-[1.9] text-white/68">
                    {chapter.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: isTurkish ? "Sosyal sorumluluk" : "Social responsibility",
                href: withLocale("/social-responsibility", locale),
              },
              {
                title: isTurkish ? "Başarılar" : "Achievements",
                href: withLocale("/achievements", locale),
              },
              {
                title: isTurkish ? "İnsan liderliği" : "People leadership",
                href: withLocale("/people/leadership", locale),
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-36 flex-col justify-between border border-white/10 bg-black/30 p-6 transition-colors hover:border-[#b8865a]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                  Ölmez
                </span>
                <div className="flex items-end justify-between gap-4">
                  <span className="font-display text-3xl tracking-[-0.03em] text-white">
                    {item.title}
                  </span>
                  <ArrowRight className="h-5 w-5 text-[#e7bc8b] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
