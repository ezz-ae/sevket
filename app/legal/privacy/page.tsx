import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale } from "@/lib/site-locale";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  return {
    title: isTurkish ? "Gizlilik Politikası — Ölmez" : "Privacy Policy — Ölmez",
    description: isTurkish
      ? "Ölmez Franchise Systems gizlilik politikası: hangi bilgileri topluyoruz, neden işliyoruz ve nasıl koruyoruz."
      : "Ölmez Franchise Systems privacy policy: what we collect, why we process it, and how we protect it.",
    alternates: { canonical: `${baseUrl}/legal/privacy` },
  };
}

export default async function PrivacyPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  const sections = isTurkish
    ? [
        {
          title: "Topladığımız bilgiler",
          body: "Yatırımcı portalı kullanıcılarından kimlik doğrulama amaçlı temel iletişim bilgileri, ekonomik nitelik beyanları ve yatırım tercihlerini topluyoruz. Saha operatörlerinden Smart Discipline puanlarını ve operasyonel metrikleri kayıt altına alıyoruz.",
        },
        {
          title: "İşleme amacı",
          body: "Veriler; AFFAREM operasyonel kontrol katmanını çalıştırmak, sermaye konuşlandırma kararlarını desteklemek, raporlama yükümlülüklerini karşılamak ve hizmet kalitesini iyileştirmek için kullanılır.",
        },
        {
          title: "Üçüncü taraflar",
          body: "Veriler, yalnızca açık onay veya yasal yükümlülük durumunda denetim ortakları, hukuk müşavirleri ve düzenleyici kurumlarla paylaşılır. SaaS altyapısı kurumsal SOC 2 sertifikalı sağlayıcılar üzerinde çalışır.",
        },
        {
          title: "Saklama süresi",
          body: "Yatırımcı kayıtları ilgili düzenleyici çerçeveler kapsamında 7 yıla kadar; operasyonel veriler ünite ömrü boyunca; dergi/etkinlik etkileşim verileri 24 ay süresince saklanır.",
        },
        {
          title: "Haklarınız",
          body: "Bilgi alma, düzeltme, silme, taşınma ve itiraz haklarınızı kullanmak için privacy@olmez.us adresine başvurabilirsiniz. Talepler 30 gün içinde sonuçlanır.",
        },
      ]
    : [
        {
          title: "Information we collect",
          body: "From investor portal users we collect basic contact information for verification, accreditation declarations, and investment preferences. From field operators we record Smart Discipline scores and operational metrics.",
        },
        {
          title: "Why we process it",
          body: "Data powers the AFFAREM operational control layer, supports capital allocation decisions, satisfies reporting obligations, and improves service quality.",
        },
        {
          title: "Third parties",
          body: "Data is shared with audit partners, legal counsel, and regulators only where there is explicit consent or a legal obligation. SaaS infrastructure runs on enterprise SOC 2 certified providers.",
        },
        {
          title: "Retention",
          body: "Investor records are retained up to 7 years under applicable regulatory frameworks; operational data for the unit's lifecycle; magazine and event engagement data for 24 months.",
        },
        {
          title: "Your rights",
          body: "Contact privacy@olmez.us to exercise your rights of access, rectification, erasure, portability, and objection. Requests are resolved within 30 days.",
        },
      ];

  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      <Navigation forceScrolled />
      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Yasal — Gizlilik" : "Legal — Privacy"}
        title={isTurkish ? "Veriyi" : "Handle data with"}
        italicTail={isTurkish ? "disiplinle ele al." : "discipline."}
        dek={
          isTurkish
            ? "Ölmez Franchise Systems'ın yatırımcılar, operatörler ve okuyucular için bilgi yönetimi politikası."
            : "How Ölmez Franchise Systems manages information for investors, operators, and readers."
        }
        meta={[
          { label: isTurkish ? "Yürürlükte" : "In force", value: "May 2026" },
          { label: isTurkish ? "Versiyon" : "Version", value: "v3.1" },
          { label: isTurkish ? "Bölge" : "Jurisdiction", value: "UK · EU · US" },
          { label: isTurkish ? "İletişim" : "Contact", value: "privacy@olmez.us" },
        ]}
      />

      <section className="border-t border-gray-300 bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-[920px] px-6 lg:px-12 space-y-10">
          {sections.map((s, i) => (
            <article key={s.title} className="border border-gray-300 bg-white p-7 lg:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#b8865a]">
                §{String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-2xl tracking-[-0.02em] text-gray-900 lg:text-3xl">
                {s.title}
              </h2>
              <p className="mt-5 text-base leading-[1.8] text-gray-700">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
