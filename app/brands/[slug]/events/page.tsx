import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBrand } from "@/lib/brands-data";
import { brandEvents } from "@/lib/brand-detailed-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

interface BrandEventsPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BrandEventsPageProps): Promise<Metadata> {
  const brand = getBrand(params.slug);

  if (!brand) {
    return { title: "Brand Not Found" };
  }

  return {
    title: `${brand.name} Events Calendar — Investor Meetings & Training`,
    description: `Upcoming events, investor meetings, operator training, and strategic briefings for ${brand.name}. Edinburgh, Istanbul, New York, London.`,
    openGraph: {
      title: `${brand.name} Events Calendar`,
      description: `Upcoming events, investor meetings, and training sessions.`,
      url: `${baseUrl}/brands/${brand.slug}/events`,
    },
    alternates: {
      canonical: `${baseUrl}/brands/${brand.slug}/events`,
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: "olmez" },
    { slug: "shawarmer" },
    { slug: "turkishpide" },
    { slug: "affarem" },
    { slug: "disciplina" },
  ];
}

export default function BrandEventsPage({ params }: BrandEventsPageProps) {
  const brand = getBrand(params.slug);
  const events = brandEvents[params.slug];

  if (!brand || !events) {
    notFound();
  }

  const eventsByMonth = events.reduce(
    (acc, event) => {
      const month = event.date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      if (!acc[month]) acc[month] = [];
      acc[month].push(event);
      return acc;
    },
    {} as Record<string, typeof events>
  );

  const totalRegistered = events.reduce((sum, e) => sum + (e.registered || 0), 0);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow={`${brand.name} Events`}
        title="Events"
        italicTail="Calendar."
        dek={`Investor meetings, operator training, and strategic briefings. Disciplined calendar for disciplined execution.`}
        meta={[
          { label: "Total Events", value: events.length.toString() },
          { label: "Registered", value: `${totalRegistered}+` },
          { label: "Locations", value: "Multiple" },
        ]}
      />

      {/* Events Timeline */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
              <div key={month}>
                <div className="mb-12">
                  <h2 className="font-display text-3xl md:text-4xl tracking-[-0.015em]">
                    {month}
                  </h2>
                  <div className="h-px bg-foreground/10 mt-4" />
                </div>

                <div className="space-y-8">
                  {monthEvents.map((event) => (
                    <div
                      key={event.id}
                      className="border border-foreground/15 p-8 lg:p-12 bg-foreground/[0.015] hover:bg-foreground/[0.025] transition-colors"
                    >
                      <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
                        <div className="lg:col-span-1">
                          <div className="border border-foreground/15 p-6 bg-background text-center">
                            <p className="font-display text-5xl tracking-[-0.015em]">
                              {event.date.getDate()}
                            </p>
                            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mt-2">
                              {event.date.toLocaleDateString("en-US", {
                                weekday: "short",
                              })}
                            </p>
                            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground mt-3">
                              {event.time}
                            </p>
                          </div>
                        </div>

                        <div className="lg:col-span-3">
                          <div className="flex items-start gap-4 mb-6">
                            <Calendar className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                                {event.type}
                              </p>
                              <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.005em] mb-3">
                                {event.title}
                              </h3>
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-4 mb-6 pb-6 border-b border-foreground/10">
                            <div className="flex items-center gap-3 text-sm">
                              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <Users className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                              <span>{event.registered}/{event.capacity}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                              <span className="font-mono text-[10px] uppercase tracking-[0.18em] px-2 h-6 inline-flex items-center border border-foreground/15">
                                {Math.round(
                                  (event.registered / event.capacity) * 100
                                )}
                                % Full
                              </span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                              Agenda
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

                          <button
                            style={{ backgroundColor: brand.theme.primary }}
                            className="inline-flex items-center justify-center gap-2 text-white px-6 h-12 font-mono text-[11px] uppercase tracking-[0.22em] hover:opacity-90 transition-opacity"
                          >
                            Register for Event
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Brand Center
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[18ch] mx-auto mb-8">
            Explore {brand.name}.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={`/brands/${brand.slug}`}
              style={{ backgroundColor: brand.theme.primary }}
              className="inline-flex items-center justify-center gap-3 text-white font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:opacity-90 transition-opacity"
            >
              Brand Overview
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/brands/${brand.slug}/reports`}
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/5 transition-colors"
            >
              Reports Hub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
