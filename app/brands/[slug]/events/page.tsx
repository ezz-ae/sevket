import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBrand } from "@/lib/brands-data";
import { brandEvents } from "@/lib/brand-detailed-data";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.franchise.systems";

interface BrandEventsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: BrandEventsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const localizedPath = withLocale(`/brands/${slug}/events`, locale);

  if (!brand) {
    return { title: isTurkish ? "Marka Bulunamadı" : "Brand Not Found" };
  }

  return {
    title: isTurkish
      ? `${brand.name} Etkinlik Takvimi — Yatırımcı Buluşmaları ve Eğitim`
      : `${brand.name} Events Calendar — Investor Meetings & Training`,
    description: isTurkish
      ? `${brand.name} için yaklaşan etkinlikler, yatırımcı buluşmaları, operatör eğitimi ve stratejik brifingler. Edinburgh, İstanbul, New York, Londra.`
      : `Upcoming events, investor meetings, operator training, and strategic briefings for ${brand.name}. Edinburgh, Istanbul, New York, London.`,
    openGraph: {
      title: isTurkish
        ? `${brand.name} Etkinlik Takvimi`
        : `${brand.name} Events Calendar`,
      description: isTurkish
        ? `Yaklaşan etkinlikler, yatırımcı buluşmaları ve eğitim oturumları.`
        : `Upcoming events, investor meetings, and training sessions.`,
      url: `${baseUrl}${localizedPath}`,
    },
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
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

export default async function BrandEventsPage({ params }: BrandEventsPageProps) {
  const { slug } = await params;
  const brand = getBrand(slug);
  const events = brandEvents[slug];
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  const dateLocale = isTurkish ? "tr-TR" : "en-US";
  const ui = isTurkish
    ? {
        eyebrow: `${brand?.name ?? ""} Etkinlikleri`,
        title: "Etkinlik",
        italicTail: "Takvimi.",
        dek: `Yatırımcı buluşmaları, operatör eğitimleri ve stratejik brifingler. Disiplinli uygulama için disiplinli bir takvim.`,
        totalEvents: "Toplam etkinlik",
        registered: "Kayıtlı",
        locations: "Lokasyonlar",
        multiple: "Birden fazla",
        agenda: "Gündem",
        register: "Etkinliğe kayıt ol",
        brandCenter: "Marka merkezi",
        explore: `${brand?.name ?? ""} markasını keşfedin.`,
        overview: "Marka özeti",
        reports: "Rapor merkezi",
        full: "doldu",
      }
    : {
        eyebrow: `${brand?.name ?? ""} Events`,
        title: "Events",
        italicTail: "Calendar.",
        dek: `Investor meetings, operator training, and strategic briefings. Disciplined calendar for disciplined execution.`,
        totalEvents: "Total Events",
        registered: "Registered",
        locations: "Locations",
        multiple: "Multiple",
        agenda: "Agenda",
        register: "Register for Event",
        brandCenter: "Brand Center",
        explore: `Explore ${brand?.name ?? ""}.`,
        overview: "Brand Overview",
        reports: "Reports Hub",
        full: "% Full",
      };

  if (!brand || !events) {
    notFound();
  }

  const eventsByMonth = events.reduce(
    (acc, event) => {
      const month = event.date.toLocaleString(dateLocale, {
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
        locale={locale}
        eyebrow={ui.eyebrow}
        title={ui.title}
        italicTail={ui.italicTail}
        dek={ui.dek}
        meta={[
          { label: ui.totalEvents, value: events.length.toString() },
          { label: ui.registered, value: `${totalRegistered}+` },
          { label: ui.locations, value: ui.multiple },
        ]}
      />

      {/* Events Timeline */}
      <section
        className="relative border-t border-foreground/10 py-24 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(180deg, ${brand.theme.primary}10 0%, transparent 100%)`,
        }}
      >
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
                              {event.date.toLocaleDateString(dateLocale, {
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
                                {(() => {
                                  const occupancy = Math.round(
                                    (event.registered / event.capacity) * 100
                                  );

                                  return isTurkish
                                    ? `%${occupancy} ${ui.full}`
                                    : `${occupancy} ${ui.full}`;
                                })()}
                              </span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                              {ui.agenda}
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
                            {ui.register}
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
      <section
        className="relative border-t border-foreground/10 py-32 lg:py-48"
        style={{ backgroundColor: `${brand.theme.secondary}10` }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {ui.brandCenter}
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[18ch] mx-auto mb-8">
            {ui.explore}
          </h2>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={withLocale(`/brands/${brand.slug}`, locale)}
              style={{ backgroundColor: brand.theme.primary }}
              className="inline-flex items-center justify-center gap-3 text-white font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:opacity-90 transition-opacity"
            >
              {ui.overview}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={withLocale(`/brands/${brand.slug}/reports`, locale)}
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 font-mono text-[11px] uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/5 transition-colors"
            >
              {ui.reports}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
