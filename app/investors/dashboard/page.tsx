import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { DashboardApp } from "@/components/investors/dashboard-app";
import { getRequestLocale } from "@/lib/server-locale";
import { isTurkishLocale, withLocale } from "@/lib/site-locale";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "AFFAREM Investor Dashboard — Ölmez",
  description:
    "Live dashboard preview: wallet, prepaid card, crypto rail, branch and pool performance, twice-weekly distribution history, KYC, tax, documents, messages, and live chat — one account.",
  alternates: {
    canonical: `${baseUrl}/investors/dashboard`,
  },
  openGraph: {
    title: "AFFAREM Investor Dashboard — Ölmez",
    description:
      "One account for the business behind the branch: wallet, prepaid card, crypto, AFFAREM control, payouts, KYC, tax, and live chat.",
    url: `${baseUrl}/investors/dashboard`,
    type: "website",
  },
};

export default async function InvestorDashboardPage() {
  const locale = await getRequestLocale();
  const isTurkish = isTurkishLocale(locale);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navigation forceScrolled />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-4 pb-10 pt-28 lg:px-12 lg:pb-16 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(184,134,90,0.18),transparent_32%),linear-gradient(120deg,rgba(255,255,255,0.05),transparent_42%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-[#050505]" />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
                <span className="h-px w-10 bg-[#b8865a]" />
                {isTurkish ? "AFFAREM yatırımcı erişimi" : "AFFAREM investor access"}
              </span>
              <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.4rem,5.6vw,5.4rem)] leading-[0.96] tracking-[-0.04em] text-balance">
                {isTurkish
                  ? "Şubenin arkasındaki iş için tek hesap."
                  : "One account for the business behind the branch."}
              </h1>
              <p className="mt-6 max-w-[58ch] text-base leading-[1.7] text-white/72 md:text-lg">
                {isTurkish
                  ? "Cüzdan, ön ödemeli kart, kripto, AFFAREM kontrol katmanı, haftada iki kez dağıtım geçmişi, KYC, vergi, belgeler ve canlı sohbet — hepsi bir paneldeki kontrollü ekrandan."
                  : "Wallet, prepaid card, crypto rail, AFFAREM control, twice-weekly distribution history, KYC, tax, documents, and live chat — all in one controlled investor screen."}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:investors@olmez.us?subject=AFFAREM%20Investor%20Dashboard%20Access"
                  className="inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black hover:bg-[#d7ad7a]"
                >
                  {isTurkish ? "AFFAREM erişimi iste" : "Request AFFAREM access"}
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  href={withLocale("/investor-responsibility", locale)}
                  className="inline-flex h-12 items-center justify-center gap-3 border border-white/18 bg-black/20 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:border-white/35 hover:bg-white/[0.06]"
                >
                  {isTurkish ? "Yatırımcı sorumluluğu" : "Investor responsibility"}
                </Link>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e9c092]">
                <Sparkles className="h-3 w-3" />
                {isTurkish ? "Ekrandaki sayılar örnektir" : "Numbers on screen are illustrative"}
              </p>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              {[
                { label: isTurkish ? "Cüzdan" : "Wallet", value: isTurkish ? "Banka · Ön ödemeli · Kripto" : "Bank · Prepaid · Crypto" },
                { label: isTurkish ? "Kart" : "Card", value: "Mastercard rail" },
                { label: isTurkish ? "Dağıtım" : "Distribution", value: isTurkish ? "Salı + Cuma" : "Tuesday + Friday" },
                { label: isTurkish ? "Kontrol" : "Control", value: "AFFAREM live" },
              ].map((entry) => (
                <div key={entry.label} className="border border-white/12 bg-black/40 p-5 backdrop-blur-md">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e7bc8b]">{entry.label}</p>
                  <p className="mt-3 font-display text-xl tracking-[-0.02em]">{entry.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live dashboard preview */}
      <section className="px-3 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-[1400px]">
          <DashboardApp />
        </div>
      </section>

      {/* Trust + access */}
      <section className="border-t border-white/10 bg-[#070707] px-6 py-16 text-center lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[920px]">
          <ShieldCheck className="mx-auto h-8 w-8 text-[#b8865a]" />
          <h2 className="mt-6 font-display text-3xl leading-[1] tracking-[-0.02em] md:text-5xl">
            {isTurkish ? "Erişim incelemeden sonra açılır." : "Access follows review."}
          </h2>
          <p className="mx-auto mt-5 max-w-[60ch] text-base leading-[1.7] text-white/72">
            {isTurkish
              ? "Panel; başlangıç yatırımcılarını, junior yatırımcıları, şube yatırımcılarını, operatörleri ve yönetici kiralayan modelleri destekleyebilir. Görünür modüller paket, pozisyon, ülke ve onaylanan hesap izinlerine bağlıdır."
              : "The dashboard supports starter investors, junior investors, branch investors, operators, and manager-hired models. The visible modules depend on package, position, country, and approved account permissions."}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:investors@olmez.us?subject=AFFAREM%20Investor%20Dashboard%20Access"
              className="inline-flex h-12 items-center justify-center gap-3 bg-white px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black hover:bg-white/90"
            >
              {isTurkish ? "Panel erişimi iste" : "Request dashboard access"}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href={withLocale("/investors", locale)}
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/18 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/85 transition-colors hover:bg-white/5"
            >
              {isTurkish ? "Yatırımcı ilişkilerine dön" : "Back to investor relations"}
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
