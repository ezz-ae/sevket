import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";
import { opportunities, fmtMoney, corridors } from "@/lib/marketplace-data";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);
  return {
    title: isTurkish
      ? "Dosya pazarı — Ölmez Franchise Systems"
      : "Filings Marketplace — Ölmez Franchise Systems",
    description: isTurkish
      ? "Aktif sermaye dosyaları: koridor bazlı yatırım fırsatları, koltuk haritası ve disiplin parametreleri."
      : "Active capital filings: corridor-based opportunities, seat maps, and discipline parameters.",
    alternates: {
      canonical: `${baseUrl}/filing`,
    },
  };
}

const statusColor: Record<string, string> = {
  Open: "#1B5E20",
  Filling: "#D4A574",
  "Final seat": "#8B3A3A",
  Reserved: "#2E5C7F",
};

export default async function FilingsIndexPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  const totalCapital = opportunities.reduce((sum, opp) => sum + opp.capital, 0);
  const totalSeats = opportunities.reduce((sum, opp) => sum + opp.seatsTotal, 0);
  const filledSeats = opportunities.reduce((sum, opp) => sum + opp.seatsFilled, 0);

  return (
    <main className="relative min-h-screen bg-white text-gray-900">
      <Navigation forceScrolled />

      <PageHeader
        locale={locale}
        backLabel={isTurkish ? "Ana sayfaya dön" : "Return to landing"}
        eyebrow={isTurkish ? "Dosya pazarı" : "Filings Marketplace"}
        title={isTurkish ? "Sermaye" : "Capital"}
        italicTail={isTurkish ? "dosyaları." : "filings."}
        dek={
          isTurkish
            ? "Aktif koridor dosyaları. Her dosya operatör koltuk yapısı, lokasyon notu, disiplin tabanı ve geri ödeme zaman planı içerir."
            : "Active corridor filings. Each one ships with the operator seat structure, location note, discipline floor, and payback timeline."
        }
        meta={[
          { label: isTurkish ? "Aktif dosya" : "Active filings", value: opportunities.length.toString() },
          { label: isTurkish ? "Toplam sermaye" : "Total capital", value: fmtMoney(totalCapital) },
          { label: isTurkish ? "Koltuk dolumu" : "Seats filled", value: `${filledSeats} / ${totalSeats}` },
          { label: isTurkish ? "Koridor" : "Corridors", value: `${corridors.length - 1}+` },
        ]}
      />

      <section className="border-t border-gray-300 py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opp) => {
              const fillPct = (opp.seatsFilled / opp.seatsTotal) * 100;
              const statusLabel = isTurkish
                ? ({ Open: "Açık", Filling: "Doluyor", "Final seat": "Son koltuk", Reserved: "Rezerve" } as const)[opp.status]
                : opp.status;
              return (
                <Link
                  key={opp.code}
                  href={withLocale(`/filing/${opp.code}`, locale)}
                  className="group flex flex-col border border-gray-300 bg-white p-6 transition-all hover:border-gray-400 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
                      {opp.code} · {opp.tier}
                    </span>
                    <span
                      className="inline-flex h-6 items-center px-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white"
                      style={{ backgroundColor: statusColor[opp.status] }}
                    >
                      {statusLabel}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl tracking-[-0.02em] text-gray-900 group-hover:text-[#b8865a] transition-colors">
                    {opp.city}, {opp.state}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500">
                    <MapPin className="h-3 w-3" />
                    {opp.corridor}
                  </p>
                  <dl className="mt-6 grid grid-cols-2 gap-3">
                    <div className="border border-gray-200 p-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-500">{isTurkish ? "Sermaye" : "Capital"}</dt>
                      <dd className="mt-1 font-display text-lg tracking-[-0.02em] text-gray-900">
                        {fmtMoney(opp.capital)}
                      </dd>
                    </div>
                    <div className="border border-gray-200 p-3">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-500">{isTurkish ? "Geri ödeme" : "Payback"}</dt>
                      <dd className="mt-1 font-display text-lg tracking-[-0.02em] text-gray-900">
                        {opp.paybackMonths}{isTurkish ? " ay" : " mo"}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em]">
                        <Users className="h-3 w-3" />
                        {opp.seatsFilled}/{opp.seatsTotal} {isTurkish ? "koltuk" : "seats"}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.1em]">{Math.round(fillPct)}%</span>
                    </div>
                    <div className="mt-2 h-1.5 bg-gray-200">
                      <div
                        className="h-full bg-[#b8865a]"
                        style={{ width: `${fillPct}%` }}
                      />
                    </div>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#b8865a]">
                    {isTurkish ? "Dosyayı aç" : "Open filing"}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
