import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Building2,
  ArrowRight,
  Clock,
} from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Contact — Ölmez Franchise Systems",
  description:
    "Connect with our investment team, operations team, or franchise development. Edinburgh HQ, Istanbul Training Center, New York Operations.",
  openGraph: {
    title: "Contact — Ölmez Franchise Systems",
    description:
      "Connect with our investment, operations, or franchise development teams.",
    url: `${baseUrl}/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

const offices = [
  {
    city: "Edinburgh",
    country: "Scotland, UK",
    role: "Global Headquarters",
    address: "Filing IV, Edinburgh, EH1 3AA",
    type: "HQ",
    description:
      "Strategic operations, investor relations, and global franchise oversight.",
    departments: [
      "Investor Relations",
      "Strategic Operations",
      "Finance & Capital",
      "Brand Strategy",
    ],
    phone: "+44-000-0000000",
    email: "edinburgh@olmez.franchise.systems",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    role: "Training Center & Operations",
    address: "DISCIPLINA Academy, Istanbul",
    type: "Training",
    description:
      "Operator development, master baker certification, and Smart Discipline training programs.",
    departments: [
      "DISCIPLINA Academy",
      "Master Operator Program",
      "Heritage Recipe Lab",
      "Operator Recruitment",
    ],
    phone: "+90-000-0000000",
    email: "istanbul@olmez.franchise.systems",
  },
  {
    city: "New York",
    country: "United States",
    role: "U.S. Operations Hub",
    address: "Manhattan, New York, NY",
    type: "Operations",
    description:
      "U.S. franchise development, gas station corridor expansion, and SHAWARMA TIME operations.",
    departments: [
      "U.S. Franchise Development",
      "SHAWARMA TIME Operations",
      "Site Selection",
      "Capital Deployment",
    ],
    phone: "+1-000-0000000",
    email: "newyork@olmez.franchise.systems",
  },
  {
    city: "London",
    country: "United Kingdom",
    role: "Brand Authority Center",
    address: "Central London",
    type: "Brand",
    description:
      "Premium restaurant operations, brand authority establishment, AFFAREM technology hub.",
    departments: [
      "Brand Authority",
      "AFFAREM Technology",
      "European Expansion",
      "Marketing & Communications",
    ],
    phone: "+44-000-0000001",
    email: "london@olmez.franchise.systems",
  },
];

const inquiryTypes = [
  {
    title: "Investment Inquiry",
    description:
      "Single unit, multi-unit portfolio, or institutional capital deployment.",
    email: "investors@olmez.franchise.systems",
    icon: "Investment",
  },
  {
    title: "Franchise Development",
    description:
      "Become a franchise holder. Operator-manager opportunities and unit operations.",
    email: "franchise@olmez.franchise.systems",
    icon: "Franchise",
  },
  {
    title: "Operator Training",
    description:
      "DISCIPLINA Academy enrollment, micro-start program, certification pathway.",
    email: "training@olmez.franchise.systems",
    icon: "Training",
  },
  {
    title: "Press & Media",
    description:
      "Media inquiries, press releases, founder interviews, and brand stories.",
    email: "press@olmez.franchise.systems",
    icon: "Press",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Supply chain, technology partnerships, location partnerships, M&A.",
    email: "partnerships@olmez.franchise.systems",
    icon: "Partnerships",
  },
  {
    title: "General Inquiries",
    description: "Questions about our brands, operations, or company structure.",
    email: "info@olmez.franchise.systems",
    icon: "Info",
  },
];

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "İletişim" : "Get in Touch"}
        title={isTurkish ? "Ölmez ile" : "Connect With"}
        italicTail={isTurkish ? "bağlantı kurun." : "Ölmez."}
        dek={
          isTurkish
            ? "Dört global ofis. Altı departman. Tek disiplinli organizasyon. Yatırım fırsatları, franchise geliştirme, operatör eğitimi veya stratejik ortaklıklar için bize ulaşın."
            : "Four global offices. Six departments. One disciplined organization. Reach out for investment opportunities, franchise development, operator training, or strategic partnerships."
        }
        meta={[
          { label: isTurkish ? "Global ofis" : "Global Offices", value: "4" },
          { label: isTurkish ? "Saat dilimi" : "Time Zones", value: "5" },
          { label: isTurkish ? "Diller" : "Languages", value: "EN/TR/AR" },
          { label: isTurkish ? "Yanıt süresi" : "Response Time", value: "<24h" },
        ]}
      />

      {/* Inquiry Types */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Nasıl yardımcı olabiliriz" : "How Can We Help"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              {isTurkish ? "Talebinizi yönlendirin." : "Direct your inquiry."}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inquiryTypes.map((inquiry) => (
              <div
                key={inquiry.title}
                className="border border-foreground/15 p-8 bg-background hover:bg-foreground/[0.025] transition-colors"
              >
                <h3 className="font-display text-xl tracking-[-0.005em] mb-3">
                  {inquiry.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-[1.6] mb-6">
                  {inquiry.description}
                </p>
                <a
                  href={`mailto:${inquiry.email}`}
                  className="inline-flex items-center gap-2 text-sm font-mono hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  {inquiry.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Global varlık" : "Global Presence"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              {isTurkish ? "Dört ofis. Tek misyon." : "Four offices. One mission."}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="border border-foreground/15 p-8 lg:p-10 bg-background"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      {office.role}
                    </p>
                    <h3 className="font-display text-3xl tracking-[-0.015em] mb-1">
                      {office.city}
                    </h3>
                    <p className="text-foreground/60 text-sm">
                      {office.country}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1 border border-foreground/20">
                    {office.type}
                  </span>
                </div>

                <p className="text-foreground/70 leading-[1.6] mb-6 pb-6 border-b border-foreground/10">
                  {office.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <a href={`tel:${office.phone}`} className="hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    {isTurkish ? "Departmanlar" : "Departments"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {office.departments.map((dept) => (
                      <span
                        key={dept}
                        className="px-3 h-7 inline-flex items-center text-xs border border-foreground/15"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {isTurkish ? "Doğrudan iletişim" : "Direct Contact"}
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl tracking-[-0.015em] leading-[1.1] max-w-[18ch] mb-8">
                {isTurkish ? "Bize mesaj gönderin." : "Send us a message."}
              </h2>
              <p className="text-foreground/70 leading-[1.7] mb-8">
                {isTurkish
                  ? "Doğrudan talep göndermek için formu kullanın. Ekibimiz iş günlerinde 24 saat içinde yanıt verir. Acil konular için yukarıdaki doğrudan ofis telefonlarını kullanın."
                  : "Use the form to send a direct inquiry. Our team will respond within 24 hours during business days. For urgent matters, use direct office phone numbers above."}
              </p>

              <div className="space-y-6 pt-6 border-t border-foreground/10">
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display text-lg mb-1">{isTurkish ? "Yanıt süresi" : "Response Time"}</p>
                    <p className="text-sm text-foreground/60">
                      {isTurkish ? "Standart talepler için 24 saat içinde" : "Within 24 hours for standard inquiries"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display text-lg mb-1">{isTurkish ? "Ofis saatleri" : "Office Hours"}</p>
                    <p className="text-sm text-foreground/60">
                      {isTurkish
                        ? "Pazartesi - Cuma, 09:00 - 18:00 (Yerel Saat)"
                        : "Monday - Friday, 9:00 AM - 6:00 PM (Local Time)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
                    {isTurkish ? "Ad" : "First Name"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 h-12 border border-foreground/25 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50"
                    placeholder={isTurkish ? "Adınız" : "John"}
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
                    {isTurkish ? "Soyad" : "Last Name"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 h-12 border border-foreground/25 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50"
                    placeholder={isTurkish ? "Soyadınız" : "Smith"}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
                  {isTurkish ? "E-posta" : "Email"}
                </label>
                <input
                  type="email"
                  className="w-full px-4 h-12 border border-foreground/25 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50"
                  placeholder={isTurkish ? "siz@email.com" : "your@email.com"}
                />
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
                  {isTurkish ? "Talep türü" : "Inquiry Type"}
                </label>
                <select className="w-full px-4 h-12 border border-foreground/25 bg-background text-foreground focus:outline-none focus:border-foreground/50">
                  <option>Investment Inquiry</option>
                  <option>Franchise Development</option>
                  <option>Operator Training</option>
                  <option>Press & Media</option>
                  <option>Strategic Partnerships</option>
                  <option>General Inquiries</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2 block">
                  {isTurkish ? "Mesaj" : "Message"}
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-foreground/25 bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground/50 resize-none"
                  placeholder={isTurkish ? "Talebinizi anlatın..." : "Tell us about your inquiry..."}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-foreground/90 transition-colors w-full"
              >
                {isTurkish ? "Mesaj gönder" : "Send Message"}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
