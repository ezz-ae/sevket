"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Globe2, Mail, MapPin, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { peopleCulture, peopleOpenings, peopleRegions } from "@/lib/people-data";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { SiteLocale, withLocale } from "@/lib/site-locale";

const countryFilters = ["All", "Turkey", "United States", "United Kingdom"] as const;
const departmentFilters = [
  "All",
  "Culinary",
  "Service",
  "Operations",
  "Logistics",
  "People",
  "Growth",
  "Finance",
] as const;

export function PeoplePortal({ locale = "default" }: { locale?: SiteLocale }) {
  const isTurkish = locale === "tr";
  const localizedCountry = (value: string) => {
    if (!isTurkish) return value;
    const labels: Record<string, string> = {
      Turkey: "Türkiye",
      "United States": "Amerika Birleşik Devletleri",
      "United Kingdom": "Birleşik Krallık",
    };
    return labels[value] || value;
  };
  const localizedDepartment = (value: string) => {
    if (!isTurkish) return value;
    const labels: Record<string, string> = {
      Culinary: "Mutfak",
      Service: "Servis",
      Operations: "Operasyon",
      Logistics: "Lojistik",
      People: "İnsan",
      Growth: "Büyüme",
      Finance: "Finans",
    };
    return labels[value] || value;
  };
  const localizedWorkMode = (value: string) => {
    if (!isTurkish) return value;
    const labels: Record<string, string> = {
      "On-site": "Ofisten",
      Field: "Saha",
      Hybrid: "Hibrit",
    };
    return labels[value] || value;
  };
  const localizedTeam = (value: string) => {
    if (!isTurkish) return value;
    const labels: Record<string, string> = {
      "Kitchen Leadership": "Mutfak Liderliği",
      "Back-of-House Support": "Arka Alan Desteği",
      "Delivery & Dispatch": "Teslimat ve Sevkiyat",
      "Guest Mobility": "Misafir Mobilitesi",
      "Front Counter": "Ön Tezgah",
      "Inventory Control": "Stok Kontrolü",
      "Procurement & Vendor Control": "Satın Alma ve Tedarikçi Kontrolü",
      "Front-of-House Leadership": "Salon Liderliği",
      "Talent & People Operations": "Yetenek ve İnsan Operasyonları",
      "Brand & Market Growth": "Marka ve Pazar Büyümesi",
      "Content & Social": "İçerik ve Sosyal",
      "Finance & Control": "Finans ve Kontrol",
      "Fleet & Route Execution": "Filo ve Rota Yürütme",
      "AI Growth Systems": "YZ Büyüme Sistemleri",
      "AI Finance Systems": "YZ Finans Sistemleri",
    };
    return labels[value] || value;
  };
  const regions = isTurkish
    ? [
        {
          country: "Türkiye",
          cities: ["İstanbul", "Ankara", "İzmir", "Bursa"],
          summary:
            "Mutfak, servis, finans, lojistik ve insan operasyonları boyunca amiral, eğitim ve şube rolleri.",
        },
        {
          country: "Amerika Birleşik Devletleri",
          cities: ["New York", "Newark", "Houston", "Miami"],
          summary:
            "ABD genişlemesini destekleyen büyüme pazarı misafirperverliği, filo, teslimat, finans ve marka rolleri.",
        },
        {
          country: "Birleşik Krallık",
          cities: ["Edinburgh", "London"],
          summary:
            "İnsan, pazarlama ve yapay zeka destekli büyüme ile muhasebe sistemlerine odaklı dört ofis rolü.",
        },
      ]
    : peopleRegions;
  const [country, setCountry] = useState<(typeof countryFilters)[number]>("All");
  const [department, setDepartment] = useState<(typeof departmentFilters)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredOpenings = peopleOpenings.filter((opening) => {
    const matchesCountry = country === "All" || opening.country === country;
    const matchesDepartment =
      department === "All" || opening.department === department;
    const normalizedQuery = query.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      `${opening.title} ${opening.city} ${opening.country} ${opening.team} ${opening.department}`
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesCountry && matchesDepartment && matchesQuery;
  });

  const aiCount = peopleOpenings.filter((opening) => opening.isAI).length;
  const ukOfficeCount = peopleOpenings.filter(
    (opening) => opening.country === "United Kingdom"
  ).length;

  return (
    <>
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src={olmezBrandAssets.images.peopleEvent.src}
            alt={olmezBrandAssets.images.peopleEvent.alt}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/72 to-black/45" />
        <div className="absolute inset-y-0 right-[-4%] hidden w-[42rem] lg:block">
          <Image
            src={olmezBrandAssets.logos.copper.src}
            alt={olmezBrandAssets.logos.copper.alt}
            fill
            className="object-contain opacity-[0.12]"
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
              <span className="h-px w-10 bg-[#b8865a]" />
              {isTurkish ? "İnsan açılış sayfası" : "People landing page"}
            </span>
            <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3.2rem,8vw,7.6rem)] leading-[0.9] tracking-[-0.04em]">
              {isTurkish
                ? "Ölmez için insan kaynakları portalı."
                : "The human resourcing portal for Ölmez."}
            </h1>
            <p className="mt-8 max-w-[60ch] text-base leading-[1.85] text-white/70 md:text-lg">
              {isTurkish
                ? "Türkiye, Amerika Birleşik Devletleri ve Birleşik Krallık genelinde işe alım yapıyoruz. Bu tam kapsamlı bir insan portalıdır: kültür, ofis bağlamı ve misafirperverlik, operasyon, lojistik, büyüme, finans ve yapay zeka destekli ofis sistemleri içinde 48 aktif tam zamanlı rol."
                : "Hiring across Turkey, the United States, and the United Kingdom. This is a full people portal: culture, office context, and 48 live full-time roles across hospitality, operations, logistics, growth, finance, and AI-enabled office systems."}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#positions"
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                {isTurkish ? "Açık pozisyonları gör" : "View open positions"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#culture"
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
              >
                {isTurkish ? "Kültürümüzü oku" : "Read our culture"}
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
            {[
              { label: isTurkish ? "Global ekip" : "Global team", value: "2,700+" },
              { label: isTurkish ? "Servis edilen öğün" : "Meals served", value: "405 / min" },
              { label: isTurkish ? "Açık tam zamanlı rol" : "Open full-time roles", value: String(peopleOpenings.length) },
              { label: isTurkish ? "BK ofis rolü" : "UK office roles", value: String(ukOfficeCount) },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-3xl tracking-[-0.03em] text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="culture"
        className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Kültür" : "Culture"}
              </span>
              <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish ? "Mekanın arkasındaki insan sistemi." : "The people system behind the room."}
              </h2>
              <p className="mt-8 max-w-[56ch] text-base leading-[1.85] text-white/66">
                {isTurkish
                  ? "Ölmez bugün dünya genelinde 2.700’den fazla kişiyi istihdam ediyor. Kültür burada bir slogan değildir. Markanın kaotik görünmeden veya hissettirmeden dakikada 405 öğün servis etmesini sağlayan disiplindir."
                  : "Ölmez now employs more than 2,700 people globally. Culture is not a slogan here. It is the discipline that lets a brand serve 405 meals per minute without looking or feeling chaotic."}
              </p>

              <div className="mt-10 space-y-5">
                {(isTurkish
                  ? [
                      {
                        title: "Karizma yerine disiplin",
                        body: "Biz güvenilirlik, standart ve operasyonel sakinlik için işe alım yaparız. Ekip markayı dramatik günlerde değil, sıradan günlerde güçlendirmelidir.",
                      },
                      {
                        title: "Mekanlar hazır kalmalı",
                        body: "İş mutfakta, filo rotasında veya ofiste olsun fark etmez; beklenti aynıdır: vardiyayı aldığından daha temiz teslim et.",
                      },
                      {
                        title: "Sistemler insan işidir",
                        body: "Marka premium görünüyorsa bunun sebebi insanların yapılandırılmış olmasıdır. İnsan kaynakları burada operasyondan ayrı değildir; operasyon katmanlarından biridir.",
                      },
                    ]
                  : peopleCulture
                ).map((pillar) => (
                  <article
                    key={pillar.title}
                    className="border border-white/10 bg-black/25 p-6"
                  >
                    <h3 className="font-display text-2xl tracking-[-0.03em] text-[#e7bc8b]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.8] text-white/64">
                      {pillar.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
              {regions.map((region) => (
                <article
                  key={region.country}
                  className="border border-white/10 bg-black/25 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="font-display text-2xl tracking-[-0.03em] text-white">
                          {region.country}
                        </p>
                      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                        {region.cities.join(" / ")}
                      </p>
                    </div>
                    <Globe2 className="h-5 w-5 text-white/38" />
                  </div>
                  <p className="mt-4 text-sm leading-[1.8] text-white/62">
                    {region.summary}
                  </p>
                </article>
              ))}

              <article className="border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(184,134,90,0.22),transparent_36%)] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl tracking-[-0.03em] text-white">
                      {isTurkish ? "Yapay zeka destekli ofis işe alımı" : "AI-enabled office hiring"}
                    </p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                      {isTurkish ? "Pazarlama / muhasebe" : "Marketing / accounting"}
                    </p>
                  </div>
                  <BrainCircuit className="h-5 w-5 text-[#e7bc8b]" />
                </div>
                <p className="mt-4 text-sm leading-[1.8] text-white/62">
                  {isTurkish
                    ? "Birleşik Krallık ofis rollerinden ikisi özel yapay zeka pozisyonlarıdır: biri pazarlama operasyonlarında, diğeri muhasebe otomasyonunda."
                    : "Two of the UK office roles are purpose-built AI positions: one in marketing operations and one in accounting automation."}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="positions" className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Açık pozisyonlar" : "Open positions"}
              </span>
              <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish ? "Üç ülkede 48 aktif rol." : "48 active roles across three countries."}
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Users,
                  label: isTurkish ? "Açık rol" : "Open roles",
                  value: String(peopleOpenings.length),
                },
                {
                  icon: BriefcaseBusiness,
                  label: isTurkish ? "BK ofis işleri" : "UK office jobs",
                  value: String(ukOfficeCount),
                },
                {
                  icon: BrainCircuit,
                  label: isTurkish ? "YZ pozisyonları" : "AI openings",
                  value: String(aiCount),
                },
              ].map((item) => (
                <div key={item.label} className="border border-white/10 px-5 py-4">
                  <item.icon className="h-4 w-4 text-[#e7bc8b]" />
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-6 border border-white/10 bg-white/[0.02] p-6 lg:p-8">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                  {isTurkish ? "Rolleri ara" : "Search roles"}
                </span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={isTurkish ? "Şef, kasiyer, yapay zeka, Londra, İstanbul..." : "Chef, cashier, AI, London, Istanbul..."}
                  className="mt-3 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#b8865a]"
                />
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                    {isTurkish ? "Ülke" : "Country"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {countryFilters.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCountry(item)}
                        className={`h-10 border px-4 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                          country === item
                            ? "border-[#b8865a] bg-[#b8865a] text-black"
                            : "border-white/10 bg-black/35 text-white/72 hover:border-white/24"
                        }`}
                      >
                        {item === "All"
                          ? (isTurkish ? "Tüm pazarlar" : "All markets")
                          : localizedCountry(item)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                    {isTurkish ? "Departman" : "Department"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {departmentFilters.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setDepartment(item)}
                        className={`h-10 border px-4 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                          department === item
                            ? "border-[#b8865a] bg-[#b8865a] text-black"
                            : "border-white/10 bg-black/35 text-white/72 hover:border-white/24"
                        }`}
                      >
                        {item === "All"
                          ? (isTurkish ? "Tüm ekipler" : "All teams")
                          : localizedDepartment(item)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42 md:flex-row md:items-center md:justify-between">
              <span>
                {isTurkish
                  ? `Filtrelerinize ${filteredOpenings.length} rol uyuyor`
                  : `${filteredOpenings.length} roles match your filters`}
              </span>
              <span>{isTurkish ? "Tüm roller tam zamanlıdır" : "All roles are full-time"}</span>
            </div>
          </div>

          <div className="mt-10 border border-white/10 bg-white/[0.02]">
            <Accordion type="single" collapsible>
              {filteredOpenings.map((opening) => (
                <AccordionItem
                  key={opening.id}
                  value={opening.id}
                  className="border-white/10 px-6 lg:px-8"
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <div className="flex w-full flex-col gap-4 pr-4 text-left lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <p className="font-display text-2xl tracking-[-0.03em] text-white">
                          {opening.title}
                        </p>
                        <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                          <span>{opening.id}</span>
                          <span>{localizedDepartment(opening.department)}</span>
                          <span>{localizedTeam(opening.team)}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 lg:justify-end">
                        <span className="inline-flex items-center gap-2 border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                          <MapPin className="h-3.5 w-3.5 text-[#e7bc8b]" />
                          {opening.city}, {localizedCountry(opening.country)}
                        </span>
                        <span className="inline-flex items-center border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                          {localizedWorkMode(opening.workMode)}
                        </span>
                        {opening.isAI && (
                          <span className="inline-flex items-center gap-2 border border-[#b8865a]/50 bg-[#b8865a]/12 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#efc895]">
                            <BrainCircuit className="h-3.5 w-3.5" />
                            {isTurkish ? "YZ rolü" : "AI role"}
                          </span>
                        )}
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-8">
                    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                      <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                          {isTurkish ? "Rol özeti" : "Role summary"}
                          </p>
                          <p className="mt-4 text-sm leading-[1.9] text-white/68">
                          {opening.summary}
                        </p>
                        {!isTurkish && (
                          <p className="mt-4 text-sm leading-[1.9] text-white/68">
                            {opening.focus}
                          </p>
                        )}

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                          <div className="border border-white/10 p-4">
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                              {isTurkish ? "Ofis" : "Office"}
                            </p>
                            <p className="mt-2 text-sm text-white/74">{opening.office}</p>
                          </div>
                          <div className="border border-white/10 p-4">
                            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                              {isTurkish ? "İstihdam" : "Employment"}
                            </p>
                            <p className="mt-2 text-sm text-white/74">
                              {isTurkish
                                ? `Tam zamanlı / ${localizedWorkMode(opening.workMode)}`
                                : `${opening.employmentType} / ${opening.workMode}`}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid gap-6">
                        <div className="border border-white/10 p-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                            {isTurkish ? "Sorumluluklar" : "Responsibilities"}
                          </p>
                          <ul className="mt-4 space-y-3">
                            {opening.responsibilities.map((item) => (
                              <li key={item} className="text-sm leading-[1.8] text-white/68">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border border-white/10 p-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                            {isTurkish ? "Gereksinimler" : "Requirements"}
                          </p>
                          <ul className="mt-4 space-y-3">
                            {opening.requirements.map((item) => (
                              <li key={item} className="text-sm leading-[1.8] text-white/68">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border border-white/10 p-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                            {isTurkish ? "Başvuru yolu" : "Apply way"}
                          </p>
                          <ul className="mt-4 space-y-3">
                            {opening.applySteps.map((item) => (
                              <li key={item} className="text-sm leading-[1.8] text-white/68">
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                            <a
                              href={`mailto:${opening.applyEmail}?subject=${encodeURIComponent(
                                opening.applySubject
                              )}`}
                              className="inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
                            >
                              <Mail className="h-3.5 w-3.5" />
                              {isTurkish ? "E-posta ile başvur" : "Apply by email"}
                            </a>
                            <div className="border border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">
                              {opening.applyEmail}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Liderlik yazıları" : "Leadership articles"}
              </span>
              <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Şirketin farklı katmanlarını taşıyan insanlar."
                  : "The people carrying different layers of the company."}
              </h2>
              <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/68">
                {isTurkish
                  ? "Kültür, kamu ilişkileri, satış, yönetim, etkinlik, finansal doğruluk ve yönetişim alanlarında yer alan isimler için ayrı editoryal profiller hazırlandı."
                  : "Dedicated editorial articles now sit behind the core people list, covering the individuals responsible for culture, government relations, sales, management, events, finance, and governance."}
              </p>
            </div>
            <div className="relative overflow-hidden border border-white/10 bg-black">
              <Image
                src={olmezBrandAssets.images.networking.src}
                alt={olmezBrandAssets.images.networking.alt}
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={withLocale("/people/leadership", locale)}
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              {isTurkish ? "Liderlik profillerini aç" : "Open leadership profiles"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={withLocale("/company-profile", locale)}
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
            >
              {isTurkish ? "Şirket profili" : "Company profile"}
            </Link>
          </div>
        </div>
      </section>

      <section id="community-pathways" className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Topluluk yolları" : "Community pathways"}
              </span>
              <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish
                  ? "Tam zamanlı kadroların yanında esnek destek ve eğitim yolları."
                  : "Flexible support and education tracks beside the full-time registry."}
              </h2>
              <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/68">
                {isTurkish
                  ? "Bu bölüm tam zamanlı açılışlardan ayrı tutulur: Texas eğitim destek rolleri, özel ihtiyaçlara uygun yarı zamanlı hatlar ve 4–7 saatlik ücretli misafirperverlik stajları."
                  : "This sits outside the full-time openings list: Texas education support roles, part-time pathways designed for special-needs accessibility, and paid hospitality internships built around 4–7 hour working days."}
              </p>
            </div>
            <div className="relative overflow-hidden border border-white/10 bg-black">
              <Image
                src={olmezBrandAssets.images.paidInternship.src}
                alt={olmezBrandAssets.images.paidInternship.alt}
                width={1600}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-4">
            {[
              {
                title: isTurkish ? "Texas eğitim destek rolleri" : "Texas education support roles",
                body: isTurkish
                  ? "Okul bağlantılı operasyon, öğrenci koordinasyonu ve toplum destekli misafirperverlik açılışları."
                  : "School-linked operations, student coordination, and community-facing hospitality support openings.",
                image: olmezBrandAssets.images.hospitalityTraining,
              },
              {
                title: isTurkish ? "Özel ihtiyaçlara uygun yarı zamanlı işler" : "Special-needs part-time work",
                body: isTurkish
                  ? "Daha esnek saat yapılarıyla eğitim desteği ve çalışma deneyimi kazandıran erişilebilir roller."
                  : "Accessible roles designed around flexible hours, education support, and structured work experience.",
                image: olmezBrandAssets.images.studentSupport,
              },
              {
                title: isTurkish ? "4–7 saatlik ücretli staj" : "4–7 hour paid internships",
                body: isTurkish
                  ? "Misafir hizmeti, servis disiplini ve restoran operasyonları için okul dostu vardiya modeli."
                  : "A school-compatible shift model for guest service, service discipline, and restaurant operations.",
                image: olmezBrandAssets.images.paidInternship,
              },
              {
                title: isTurkish ? "700 öğrenci hedefi" : "Targeting 700 students",
                body: isTurkish
                  ? "500 öğrencilik mevcut destek hattı bu yıl 700 öğrenciye doğru genişletiliyor."
                  : "The existing 500-student support line is being expanded toward 700 this year.",
                image: olmezBrandAssets.images.villageEducation,
              },
            ].map((pathway) => (
              <article
                key={pathway.title}
                className="overflow-hidden border border-white/10 bg-black/30"
              >
                <div className="relative aspect-[1.12] overflow-hidden border-b border-white/10">
                  <Image
                    src={pathway.image.src}
                    alt={pathway.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl tracking-[-0.03em] text-white">
                    {pathway.title}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.85] text-white/64">
                    {pathway.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={withLocale("/social-responsibility#pathways", locale)}
              className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              {isTurkish ? "Sosyal sorumluluk yolları" : "View pathways detail"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="mailto:careers@olmez.com?subject=Community%20Pathways%20Application"
              className="inline-flex h-12 items-center justify-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
            >
              {isTurkish ? "Başvuru masasına yaz" : "Email the application desk"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
