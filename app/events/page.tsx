import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  BookOpen,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "Events Calendar — Ölmez Franchise Systems",
  description:
    "Company events calendar 2026. Investor meetings, operator workshops, training sessions, and strategic briefings across Edinburgh, Istanbul, and New York.",
};

const events = [
  // June 2026
  {
    month: "June 2026",
    events: [
      {
        id: 1,
        date: "15",
        dayOfWeek: "Saturday",
        title: "H1 2026 Investor Briefing & Strategic Roadmap",
        time: "14:00 GMT",
        location: "Edinburgh HQ + Virtual",
        category: "Investor Meeting",
        icon: TrendingUp,
        attendees: 50,
        description:
          "Comprehensive H1 2026 performance review, unit economics deep dive, capital recovery tracking analysis, and H2 expansion roadmap.",
        agenda: [
          "H1 2026 performance review with full metrics",
          "Unit economics deep dive by tier",
          "Capital recovery tracking and payback schedules",
          "H2 2026 expansion targets and strategy",
          "Live Q&A and investment opportunities",
        ],
      },
      {
        id: 2,
        date: "22",
        dayOfWeek: "Saturday",
        title: "Micro-Start Program Launch & Operator Training",
        time: "10:00 GMT",
        location: "Istanbul Training Center",
        category: "Training",
        icon: BookOpen,
        attendees: 30,
        description:
          "Launch of $1,000–$2,000 micro-start program with comprehensive operator development pathway and Smart Discipline training.",
        agenda: [
          "Micro-start program overview and entry requirements",
          "Operator development pathway and progression",
          "Smart Discipline training and scoring system",
          "AFFAREM system walkthrough and live demo",
          "Unit assignment process and matching",
        ],
      },
      {
        id: 3,
        date: "30",
        dayOfWeek: "Sunday",
        title: "Monthly Operations Review & Compliance Audit",
        time: "09:00 GMT",
        location: "Edinburgh HQ + Regional Hubs",
        category: "Internal Meeting",
        icon: Zap,
        attendees: 20,
        description:
          "Monthly review of all active units, compliance verification, and operational excellence metrics across the network.",
        agenda: [
          "Unit performance review across all tiers",
          "Compliance audit and AFFAREM reporting",
          "Smart Discipline Score analysis",
          "Operator feedback and escalations",
          "Strategic adjustments and action items",
        ],
      },
    ],
  },
  // July 2026
  {
    month: "July 2026",
    events: [
      {
        id: 4,
        date: "8",
        dayOfWeek: "Wednesday",
        title: "U.S. Gas Station Corridor Expansion - Territory Briefing",
        time: "16:00 EST",
        location: "New York + Virtual",
        category: "Territory Briefing",
        icon: MapPin,
        attendees: 40,
        description:
          "40-unit U.S. expansion plan with site selection criteria, territory assignment, capital deployment timeline, and LiveOps readiness.",
        agenda: [
          "40-unit U.S. expansion strategic plan",
          "Gas station site selection criteria and analysis",
          "Territory assignment process and logistics",
          "Capital deployment timeline and milestones",
          "LiveOps infrastructure and remote management readiness",
        ],
      },
      {
        id: 5,
        date: "20",
        dayOfWeek: "Monday",
        title: "Smart CCTV & Remote Control Layer Deployment Seminar",
        time: "11:00 GMT",
        location: "Edinburgh HQ + Virtual",
        category: "Technology Briefing",
        icon: Zap,
        attendees: 60,
        description:
          "100% remote visibility architecture deployment with real-time operational monitoring and investor dashboard access.",
        agenda: [
          "Smart CCTV system overview and architecture",
          "100% remote visibility for investors",
          "Real-time operational monitoring capabilities",
          "AFFAREM integration and data flow",
          "Investor dashboard access and features",
        ],
      },
    ],
  },
  // August 2026
  {
    month: "August 2026",
    events: [
      {
        id: 6,
        date: "5",
        dayOfWeek: "Wednesday",
        title: "Franchise Holder Summer Conference & Training Summit",
        time: "10:00 GMT",
        location: "Edinburgh HQ",
        category: "Conference",
        icon: Users,
        attendees: 150,
        description:
          "Annual conference for all British franchise holders with advanced training, networking, and strategic alignment sessions.",
        agenda: [
          "Founder address and strategic vision",
          "Advanced operator training workshops",
          "Peer learning and best practice sessions",
          "Network expansion and partnership opportunities",
          "Awards and recognition ceremony",
        ],
      },
      {
        id: 7,
        date: "15",
        dayOfWeek: "Saturday",
        title: "Q3 2026 Mid-Year Strategic Realignment",
        time: "14:00 GMT",
        location: "Edinburgh HQ + Istanbul",
        category: "Strategic Meeting",
        icon: TrendingUp,
        attendees: 25,
        description:
          "Strategic realignment session reviewing H1 outcomes, adjusting H2 targets, and planning for 2027 growth phase.",
        agenda: [
          "H1 outcomes review and analysis",
          "H2 target adjustment based on performance",
          "2027 strategic planning and roadmap",
          "Capital allocation and investment decisions",
          "Risk assessment and mitigation strategies",
        ],
      },
    ],
  },
  // September 2026
  {
    month: "September 2026",
    events: [
      {
        id: 8,
        date: "10",
        dayOfWeek: "Thursday",
        title: "U.K. & European Expansion Forum",
        time: "15:00 GMT",
        location: "London Conference Center",
        category: "Expansion Forum",
        icon: MapPin,
        attendees: 70,
        description:
          "Strategic forum exploring U.K. and European market expansion opportunities with regional investors and partners.",
        agenda: [
          "European market analysis and opportunities",
          "Regulatory framework by territory",
          "Capital requirements and deployment",
          "Partner network development",
          "Timeline and milestone planning",
        ],
      },
      {
        id: 9,
        date: "25",
        dayOfWeek: "Friday",
        title: "2027 Strategic Planning Retreat",
        time: "09:00 GMT",
        location: "Edinburgh HQ + Istanbul",
        category: "Strategic Retreat",
        icon: TrendingUp,
        attendees: 30,
        description:
          "Multi-day strategic planning retreat for senior leadership and key stakeholders to chart 2027 direction.",
        agenda: [
          "Market analysis and opportunity assessment",
          "Product and service line development",
          "Geographic expansion planning",
          "Technology roadmap and innovation",
          "Financial projections and capital strategy",
        ],
      },
    ],
  },
];

const eventCategories = [
  { label: "All Events", count: 9 },
  { label: "Investor Meetings", count: 3 },
  { label: "Training & Workshops", count: 3 },
  { label: "Strategic Meetings", count: 2 },
  { label: "Conferences", count: 1 },
];

export default function EventsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow="2026 Schedule"
        title="Company Events"
        italicTail="Calendar."
        dek="Investor meetings, operator training, strategic briefings, and conferences. Disciplined calendar for disciplined execution."
        meta={[
          { label: "Total Events", value: "9" },
          { label: "Investor Meetings", value: "3" },
          { label: "Locations", value: "3" },
          { label: "Expected Attendance", value: "500+" },
        ]}
      />

      {/* Category Filter */}
      <section className="relative border-t border-foreground/10 py-8 lg:py-12 sticky top-[80px] z-40 bg-background/95 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex overflow-x-auto gap-4 pb-2">
            {eventCategories.map((cat) => (
              <button
                key={cat.label}
                className="flex-shrink-0 px-6 h-10 border border-foreground/25 text-foreground font-mono text-[10px] uppercase tracking-[0.1em] hover:bg-foreground/5 transition-colors"
              >
                {cat.label}
                <span className="ml-2 text-muted-foreground">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {events.map((monthGroup) => (
              <div key={monthGroup.month}>
                <div className="mb-12">
                  <h2 className="font-display text-3xl md:text-4xl tracking-[-0.015em]">
                    {monthGroup.month}
                  </h2>
                  <div className="h-px bg-foreground/10 mt-4" />
                </div>

                <div className="space-y-8">
                  {monthGroup.events.map((event) => {
                    const IconComponent = event.icon;
                    return (
                      <div
                        key={event.id}
                        className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015] hover:bg-foreground/[0.025] transition-colors"
                      >
                        <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
                          {/* Date */}
                          <div className="lg:col-span-1">
                            <div className="border border-foreground/15 p-6 bg-background text-center">
                              <p className="font-display text-5xl tracking-[-0.015em]">
                                {event.date}
                              </p>
                              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mt-2">
                                {event.dayOfWeek}
                              </p>
                              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mt-3">
                                {event.time}
                              </p>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="lg:col-span-3">
                            <div className="flex items-start gap-4 mb-6">
                              <IconComponent className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                                  {event.category}
                                </p>
                                <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.005em] mb-3">
                                  {event.title}
                                </h3>
                                <p className="text-base leading-[1.6] text-foreground/75">
                                  {event.description}
                                </p>
                              </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mb-6 pb-6 border-b border-foreground/10">
                              <div className="flex items-center gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                <span>{event.location}</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm">
                                <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                <span>~{event.attendees} Attendees</span>
                              </div>
                            </div>

                            <div className="mb-6">
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                                Agenda Items
                              </p>
                              <ul className="space-y-2">
                                {event.agenda.map((item) => (
                                  <li
                                    key={item}
                                    className="text-sm text-foreground/70 flex items-start gap-2"
                                  >
                                    <span className="text-muted-foreground mt-1">
                                      →
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <button className="inline-flex items-center justify-center gap-2 bg-[#8B5A3C] text-white px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-[#a0674a] transition-colors">
                              Register for Event
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Summary */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl tracking-[-0.015em] mb-12">
            Event Categories & Purposes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Investor Meetings",
                description:
                  "Quarterly briefings with institutional investors, fund managers, and capital partners. Focus on performance metrics, capital recovery tracking, and strategic roadmap alignment.",
              },
              {
                title: "Operator Training",
                description:
                  "Development programs for franchise holders and unit managers. Training on Smart Discipline Score, AFFAREM systems, and operational excellence protocols.",
              },
              {
                title: "Strategic Briefings",
                description:
                  "Senior leadership and partner meetings focused on market expansion, technology deployment, and long-term strategic planning.",
              },
              {
                title: "Conferences & Summits",
                description:
                  "Annual gatherings of all franchise holders for networking, best practice sharing, and strategic alignment across the network.",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="border border-foreground/15 p-8 bg-background"
              >
                <h3 className="font-display text-xl tracking-[-0.005em] mb-3">
                  {category.title}
                </h3>
                <p className="text-foreground/70 leading-[1.6]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Reports & Documentation
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch] mx-auto mb-8">
            View Strategic Reports.
          </h2>
          <p className="text-xl text-foreground/70 max-w-[60ch] mx-auto mb-12">
            Access quarterly and annual reports, performance data, and investor documentation on our comprehensive reports hub.
          </p>

          <Link
            href="/reports"
            className="inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/90 transition-colors"
          >
            Reports Hub
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
