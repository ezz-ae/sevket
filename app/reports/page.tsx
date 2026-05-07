import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, TrendingUp, Users, Calendar } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

export const metadata: Metadata = {
  title: "Reports & Filings — Ölmez Franchise Systems",
  description:
    "Quarterly and annual strategic reports, financial performance data, and operational metrics. Access 2026 H1 report and investor documentation.",
};

const reports = [
  {
    id: "h1-2026",
    title: "2026 Semi-Annual Strategic Revenue & Operational Performance Report",
    description:
      "Comprehensive H1 2026 performance analysis including unit economics, capital recovery tracking, Smart Discipline Score implementation, and expansion roadmap.",
    date: "June 2026",
    quarter: "H1 2026",
    type: "Strategic Report",
    pages: 12,
    highlights: [
      "100-unit portfolio scaling model",
      "Daily gain tiering ($200–$1,400)",
      "Smart Discipline Score metrics",
      "Capital recovery schedules",
      "LiveOps intervention outcomes",
      "42 British Franchise Holders analysis",
      "$16.5M tracked asset value",
      "H2 2026 strategic roadmap",
    ],
    metrics: {
      activeUnits: 147,
      deployedCapital: "$16.5M",
      avgDailyGain: "$550–$1,400",
      paybackTarget: "30 months",
      disciplineScore: "72%+ target",
    },
  },
  {
    id: "q1-2026",
    title: "Q1 2026 Unit Economics & Franchise Pipeline Report",
    description:
      "First quarter analysis of franchise growth, unit performance tiers, and micro-start program expansion.",
    date: "March 2026",
    quarter: "Q1 2026",
    type: "Quarterly Report",
    pages: 8,
    highlights: [
      "Unit economics baseline",
      "Tier classification system",
      "Franchise pipeline status",
      "Revenue layer analysis",
    ],
  },
  {
    id: "2025-annual",
    title: "2025 Annual Report & Strategic Review",
    description:
      "Full-year 2025 performance summary, founding achievements, and 2026 strategic priorities.",
    date: "December 2025",
    quarter: "Full Year 2025",
    type: "Annual Report",
    pages: 20,
    highlights: [
      "Year-end financial summary",
      "Network growth trajectory",
      "AFFAREM platform adoption",
      "Investor satisfaction metrics",
    ],
  },
];

const upcomingMeetings = [
  {
    id: 1,
    title: "H1 2026 Investor Briefing & Strategic Roadmap",
    date: "June 15, 2026",
    time: "14:00 GMT",
    location: "Edinburgh HQ + Virtual",
    type: "Strategic Briefing",
    attendees: "Institutional Investors, Fund Managers",
    agenda: [
      "H1 2026 performance review",
      "Unit economics deep dive",
      "Capital recovery tracking",
      "H2 2026 expansion targets",
      "Q&A and investment opportunities",
    ],
    register: true,
  },
  {
    id: 2,
    title: "Micro-Start Program Launch & Operator Training",
    date: "June 22, 2026",
    time: "10:00 GMT",
    location: "Istanbul Training Center",
    type: "Operator Workshop",
    attendees: "Prospective Operators, Partner Networks",
    agenda: [
      "Micro-start $1,000–$2,000 program overview",
      "Operator development pathway",
      "Smart Discipline training",
      "AFFAREM system walkthrough",
      "Unit assignment process",
    ],
    register: true,
  },
  {
    id: 3,
    title: "U.S. Gas Station Corridor Expansion - Territory Briefing",
    date: "July 8, 2026",
    time: "16:00 EST",
    location: "New York + Virtual",
    type: "Territory Briefing",
    attendees: "Regional Investors, Site Partners",
    agenda: [
      "40-unit U.S. expansion plan",
      "Gas station site selection criteria",
      "Territory assignment process",
      "Capital deployment timeline",
      "LiveOps infrastructure readiness",
    ],
    register: true,
  },
  {
    id: 4,
    title: "Smart CCTV & Remote Control Layer Deployment Seminar",
    date: "July 20, 2026",
    time: "11:00 GMT",
    location: "Edinburgh HQ + Virtual",
    type: "Technology Briefing",
    attendees: "All Unit Managers, Investor Representatives",
    agenda: [
      "Smart CCTV system overview",
      "100% remote visibility architecture",
      "Real-time operational monitoring",
      "Integration with AFFAREM",
      "Investor dashboard access",
    ],
    register: true,
  },
];

export default async function ReportsPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Kurumsal şeffaflık" : "Corporate Transparency"}
        title={isTurkish ? "Raporlar ve stratejik" : "Reports & Strategic"}
        italicTail={isTurkish ? "dokümantasyon." : "Documentation."}
        dek={
          isTurkish
            ? "Çeyreklik raporlar, yatırımcı bilgilendirmeleri ve operasyon dokümantasyonu. Her sayı AFFAREM üzerinden kendini açıklar. Her varlık kendi hikayesini taşır."
            : "Quarterly reports, investor briefings, and operational documentation. Every number explains itself through AFFAREM. Every asset tells its story."
        }
        meta={[
          { label: isTurkish ? "Son rapor" : "Latest Report", value: "H1 2026" },
          { label: isTurkish ? "Aktif portföy" : "Active Portfolio", value: isTurkish ? "147 ünite" : "147 Units" },
          { label: isTurkish ? "İzlenen sermaye" : "Tracked Capital", value: "$16.5M" },
          { label: isTurkish ? "Yatırımcı toplantısı" : "Investor Meetings", value: isTurkish ? "4 planlandı" : "4 Scheduled" },
        ]}
      />

      {/* Reports Section */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Stratejik raporlar" : "Strategic Reports"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              {isTurkish ? "Her sayı kendini açıklar." : "Every number explains itself."}
            </h2>
          </div>

          <div className="space-y-8">
            {reports.map((report) => (
              <div
                key={report.id}
                className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015] hover:bg-foreground/[0.03] transition-colors"
              >
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-4">
                      <FileText className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                          {report.type} · {report.quarter}
                        </p>
                        <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.005em] mb-3">
                          {report.title}
                        </h3>
                        <p className="text-base leading-[1.6] text-foreground/75 mb-6">
                          {report.description}
                        </p>

                        <div className="mb-6">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                            {isTurkish ? "Temel başlıklar" : "Key Highlights"}
                          </p>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {report.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="text-sm text-foreground/70 flex items-center gap-2"
                              >
                                <span className="text-muted-foreground">→</span>
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="space-y-4">
                      <div className="border border-foreground/15 p-6 bg-background">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                          {isTurkish ? "Temel metrikler" : "Key Metrics"}
                        </p>
                        <div className="space-y-3">
                          {Object.entries(report.metrics || {}).map(
                            ([key, value]) => (
                              <div key={key} className="text-sm">
                                <p className="text-foreground/60 capitalize">
                                  {key.replace(/([A-Z])/g, " $1")}
                                </p>
                                <p className="font-display text-lg tracking-[-0.005em]">
                                  {value}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      <button className="w-full inline-flex items-center justify-center gap-2 bg-[#8B5A3C] text-white px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-[#a0674a] transition-colors">
                        <Download className="w-4 h-4" />
                        {isTurkish ? "PDF indir" : "Download PDF"}
                      </button>

                      <p className="text-center text-xs text-foreground/50">
                        {report.pages} {isTurkish ? "sayfa" : "pages"} · {report.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Meetings Section */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {isTurkish ? "Yatırımcı etkileşimi" : "Investor Engagement"}
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[22ch]">
              {isTurkish ? "Yaklaşan yatırımcı toplantıları." : "Upcoming Investor Meetings."}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingMeetings.map((meeting) => (
              <div
                key={meeting.id}
                className="border border-foreground/15 p-8 bg-background"
              >
                <div className="flex items-start gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      {meeting.type}
                    </p>
                    <h3 className="font-display text-xl tracking-[-0.005em]">
                      {meeting.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-foreground/10">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/60">{isTurkish ? "Tarih ve saat" : "Date & Time"}</span>
                    <span className="font-mono">
                      {meeting.date} · {meeting.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/60">{isTurkish ? "Lokasyon" : "Location"}</span>
                    <span className="font-mono">{meeting.location}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/60">{isTurkish ? "Katılımcılar" : "Attendees"}</span>
                    <span className="text-right">{meeting.attendees}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                    {isTurkish ? "Gündem" : "Agenda"}
                  </p>
                  <ul className="space-y-2">
                    {meeting.agenda.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-foreground/70 flex items-start gap-2"
                      >
                        <span className="text-muted-foreground mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {meeting.register && (
                  <button className="w-full inline-flex items-center justify-center gap-2 bg-[#8B5A3C] text-white px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-[#a0674a] transition-colors">
                    <Users className="w-4 h-4" />
                    {isTurkish ? "Katılım kaydı oluştur" : "Register Attendance"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar CTA */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {isTurkish ? "Tam takvim" : "Full Schedule"}
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[18ch] mx-auto mb-8">
            {isTurkish ? "Şirket etkinlik takvimi." : "Company Events Calendar."}
          </h2>
          <p className="text-xl text-foreground/70 max-w-[60ch] mx-auto mb-12">
            {isTurkish
              ? "Yaklaşan tüm yatırımcı bilgilendirmelerini, eğitim oturumlarını, operatör atölyelerini ve stratejik etkinlikleri kapsamlı takvimimizde görün."
              : "View all upcoming investor briefings, training sessions, operator workshops, and strategic events on our comprehensive calendar."}
          </p>

          <Link
            href={withLocale("/events", locale)}
            className="inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/90 transition-colors"
          >
            {isTurkish ? "Etkinlik takvimini gör" : "View Events Calendar"}
            <Calendar className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
