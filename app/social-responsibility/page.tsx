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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale("/social-responsibility", locale);

  return {
    title: isTurkish
      ? "Sosyal Sorumluluk — Ölmez"
      : "Social Responsibility — Ölmez",
    description: isTurkish
      ? "Ağaç dikimi, köy eğitim kampanyaları, öğrenci desteği, Texas fırsatları ve The Turkish Chef sponsorluğu için Ölmez sayfası."
      : "The Ölmez social responsibility page covering tree planting, village education, student support, Texas pathways, and The Turkish Chef sponsorship.",
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
    },
    openGraph: {
      title: isTurkish
        ? "Sosyal Sorumluluk — Ölmez"
        : "Social Responsibility — Ölmez",
      description: isTurkish
        ? "Ölmez büyürken insan, yer ve eğitim tarafında ne inşa ediyor?"
        : "How Ölmez connects growth to people, place, education, and measurable responsibility.",
      url: `${baseUrl}${localizedPath}`,
      type: "website",
    },
  };
}

export default async function SocialResponsibilityPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  const commitments = [
    {
      title: "One tree for every 100 bill",
      body:
        "For every 100 bill generated through Ölmez operations, the company commits to planting a tree. The intent is simple: if the company grows, the ground should grow with it.",
      image: olmezBrandAssets.images.treePlanting,
    },
    {
      title: "Education campaigns across Turkish villages",
      body:
        "Village programs focus on practical education: small business basics, food safety, customer service, local product development, and the operator mindset needed to turn effort into a system.",
      image: olmezBrandAssets.images.villageEducation,
    },
    {
      title: "Sponsoring The Turkish Chef",
      body:
        "The Turkish Chef is positioned as education through culture: village talent, family recipes, regional ingredients, kitchen discipline, and the journey from food craft into business structure.",
      image: olmezBrandAssets.images.turkishChef,
    },
  ];

  const pathways = [
    {
      title: "Special-needs education support roles",
      summary:
        "Part-time education support tracks are designed for applicants who need flexible schedules and a structured hospitality pathway.",
    },
    {
      title: "Open roles in Texas",
      summary:
        "Texas is the current focus market for community-linked openings tied to hospitality learning, education support, and branch-readiness work.",
    },
    {
      title: "School internship for hospitality students",
      summary:
        "Paid internships are structured for 4–7 hour working days so students can learn while staying connected to school responsibilities.",
    },
    {
      title: "Need help with school expenses?",
      summary:
        "The student sponsorship program currently supports 500 students per year and is being expanded toward 700.",
    },
  ];

  return (
    <main
      className="relative min-h-screen text-white"
      style={{
        background:
          "linear-gradient(180deg, #18110d 0%, #0e1510 55%, #050505 100%)",
      }}
    >
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        eyebrow={isTurkish ? "Sosyal sorumluluk" : "Social responsibility"}
        title={isTurkish ? "Ölçülebilir" : "Measured"}
        italicTail={isTurkish ? "sorumluluk." : "responsibility."}
        dek={
          isTurkish
            ? "Ölmez için sosyal sorumluluk bağış satırı değil; ağaç, eğitim, öğrenci desteği ve fırsat üretimi üzerinden işletmeye bağlanan ikinci bir yapı katmanıdır."
            : "At Ölmez, responsibility is not a decorative donation line. It is a second layer of business structure tied to trees, education, student support, and practical opportunity."
        }
        meta={[
          { label: isTurkish ? "Ağaç kuralı" : "Tree rule", value: "1 / 100 bill" },
          { label: isTurkish ? "Öğrenciler" : "Students", value: "500" },
          { label: isTurkish ? "Hedef" : "Target", value: "700" },
          { label: isTurkish ? "Staj vardiyası" : "Internship shift", value: "4–7 hrs" },
        ]}
      />

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12">
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.images.treePlanting.src}
              alt={olmezBrandAssets.images.treePlanting.alt}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Temel fikir" : "Foundation"}
            </span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "Şirket büyürken insanları ve yerleri de büyütmeli."
                : "Building business should also build people and place."}
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/68">
              {isTurkish
                ? "Ölmez sosyal sorumluluğu üç omurga üzerinde kuruyor: ağaç dikimi, Türkiye köylerinde eğitim ve kültürel ilhamı işletme eğitimiyle buluşturan medya desteği."
                : "Ölmez builds its responsibility program around three spines: planting, village education in Turkey, and culture-led media support that keeps food, memory, and business learning connected."}
            </p>
            <p className="mt-6 max-w-[58ch] text-base leading-[1.85] text-white/60">
              {isTurkish
                ? "Amaç görünürlükten çok ölçülebilirlik. Ağaç sayısı, öğrenci desteği, çalışma saatleri ve kampanya hedefleri açık biçimde tutuluyor."
                : "The aim is measurable responsibility, not vague symbolism. Tree counts, student support, working hours, and campaign targets are meant to be visible and trackable."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Programlar" : "Programs"}
            </span>
            <h2 className="mt-6 font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
              {isTurkish ? "Üç ana yük taşıyan program." : "Three public-facing commitments."}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {commitments.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden border border-white/10 bg-black/30"
              >
                <div className="relative aspect-[1.25] overflow-hidden border-b border-white/10">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.85] text-white/64">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-12">
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.images.studentSupport.src}
              alt={olmezBrandAssets.images.studentSupport.alt}
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Öğrenci desteği" : "Student support"}
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-5xl lg:text-6xl">
              {isTurkish
                ? "500 öğrenciden 700 hedefe giden destek hattı."
                : "A sponsorship path growing from 500 toward 700 students."}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { label: isTurkish ? "Mevcut sponsorluk" : "Current sponsorship", value: "500 students / year" },
                { label: isTurkish ? "Bu yıl hedef" : "This year target", value: "700 students" },
                { label: isTurkish ? "Çalışma modeli" : "Work model", value: "4–7 hour paid days" },
                { label: isTurkish ? "Fırsat bölgesi" : "Opportunity region", value: "Texas" },
              ].map((item) => (
                <div key={item.label} className="border border-white/10 bg-black/25 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/60">
              {isTurkish
                ? "Program okul masrafları, kitap, ekipman, çalışma deneyimi ve misafirperverlik becerilerini aynı destek hattında toplamayı amaçlıyor."
                : "The program is meant to connect school expenses, books, equipment, work experience, and hospitality skills inside one support pathway."}
            </p>
          </div>
        </div>
      </section>

      <section id="pathways" className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Fırsat yolları" : "Pathways"}
              </span>
              <h2 className="mt-6 max-w-[14ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Texas fırsatları, yarı zamanlı destek ve ücretli staj yolları."
                  : "Texas roles, part-time support work, and paid internship tracks."}
              </h2>
            </div>
            <Link
              href={withLocale("/people#community-pathways", locale)}
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/78 hover:text-[#e7bc8b]"
            >
              {isTurkish ? "İnsan portalında görüntüle" : "View inside people portal"}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="overflow-hidden border border-white/10 bg-black/30">
              <div className="relative aspect-[1.5] overflow-hidden border-b border-white/10">
                <Image
                  src={olmezBrandAssets.images.paidInternship.src}
                  alt={olmezBrandAssets.images.paidInternship.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl tracking-[-0.03em] text-white">
                  Paid hospitality internship program
                </h3>
                <p className="mt-4 text-sm leading-[1.85] text-white/64">
                  Real experience, real growth, and real future. Students work 4–7 paid hours per day while building guest-service, restaurant operations, and professional discipline.
                </p>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2">
              {pathways.map((item) => (
                <article key={item.title} className="border border-white/10 bg-black/30 p-6">
                  <h3 className="font-display text-2xl tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.85] text-white/64">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
