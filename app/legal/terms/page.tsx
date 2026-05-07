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
    title: isTurkish ? "Kullanım Şartları — Ölmez" : "Terms of Service — Ölmez",
    description: isTurkish
      ? "Ölmez Franchise Systems web sitesi, yatırımcı portalı ve marka materyallerinin kullanım şartları."
      : "Terms of service for the Ölmez Franchise Systems website, investor portal, and brand materials.",
    alternates: { canonical: `${baseUrl}/legal/terms` },
  };
}

export default async function TermsPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  const sections = isTurkish
    ? [
        {
          title: "Kapsam",
          body: "Bu şartlar; olmez.us ve bağlı uzantılarda yer alan içerik, yatırımcı paneli, dergi arşivi, marka portallari ve tüm operasyonel araçlar için geçerlidir.",
        },
        {
          title: "Yatırım sunumu değildir",
          body: "Bu site materyalleri yalnızca bilgilendirme amaçlıdır ve hiçbir yetki alanında yatırım, hukuki veya vergi tavsiyesi olarak yorumlanmamalıdır. Resmi sermaye katılımı yalnızca imzalı dosyalar ve yetkili komisyon görüşmeleri yoluyla gerçekleşir.",
        },
        {
          title: "Marka kullanımı",
          body: "Ölmez, AFFAREM, DISCIPLINA, SHAWARMA TIME ve Turkish PIDE Co. dahil tüm marka ve isimler Ölmez Franchise Systems Ltd'in tescilli ticari markalarıdır. Yazılı izin olmadan üçüncü taraflar tarafından kullanılamaz.",
        },
        {
          title: "Operatör yükümlülükleri",
          body: "Sahada yer alan operatörler için Smart Discipline standartlarına uyum, AFFAREM raporlama disipline ve LiveOps müdahalelerine açık iş birliği zorunludur.",
        },
        {
          title: "Sorumluluk sınırı",
          body: "Geçerli yasal çerçevelere bağlı olarak, dolaylı zararlar, kâr kaybı veya iş kesintilerinden kaynaklanan taleplere karşı sorumluluk açıkça reddedilir.",
        },
        {
          title: "İletişim",
          body: "Hukuki bildirimler için legal@olmez.us; yatırımcı sözleşmesel sorular için investors@olmez.us kanallarını kullanın.",
        },
      ]
    : [
        {
          title: "Scope",
          body: "These terms govern olmez.us and affiliated extensions, including the investor portal, magazine archive, brand portals, and operational tools.",
        },
        {
          title: "Not an offering",
          body: "Site materials are for informational purposes only and should not be construed as investment, legal, or tax advice in any jurisdiction. Formal capital participation occurs only through signed filings and authorised committee meetings.",
        },
        {
          title: "Brand usage",
          body: "All marks, including Ölmez, AFFAREM, DISCIPLINA, SHAWARMA TIME, and Turkish PIDE Co., are registered trademarks of Ölmez Franchise Systems Ltd. Third-party use requires written permission.",
        },
        {
          title: "Operator obligations",
          body: "Field operators must comply with Smart Discipline standards, AFFAREM reporting cadence, and LiveOps intervention requests in good faith.",
        },
        {
          title: "Liability",
          body: "To the extent permitted by applicable law, indirect, consequential, or business-interruption damages are expressly disclaimed.",
        },
        {
          title: "Contact",
          body: "Use legal@olmez.us for legal notices and investors@olmez.us for contractual investor questions.",
        },
      ];

  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      <Navigation forceScrolled />
      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Yasal — Şartlar" : "Legal — Terms"}
        title={isTurkish ? "Sözün," : "What the agreement"}
        italicTail={isTurkish ? "yazılı hâli." : "actually says."}
        dek={
          isTurkish
            ? "Bu sayfa Ölmez ekosistemine erişim sağlayan herkesin uymakla yükümlü olduğu özet kurallardır."
            : "Concise terms that everyone using the Ölmez ecosystem agrees to."
        }
        meta={[
          { label: isTurkish ? "Yürürlükte" : "In force", value: "May 2026" },
          { label: isTurkish ? "Versiyon" : "Version", value: "v2.4" },
          { label: isTurkish ? "Bölge" : "Jurisdiction", value: "Edinburgh / UK" },
          { label: isTurkish ? "İletişim" : "Contact", value: "legal@olmez.us" },
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
