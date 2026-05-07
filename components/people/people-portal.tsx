"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Filter, Mail, MapPin, Search, Users } from "lucide-react";
import {
  countryFilters,
  departmentFilters,
  peopleCulture,
  peopleOpenings,
  peopleRegions,
  type JobCountry,
  type JobDepartment,
} from "@/lib/people-data";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";
import { SiteLocale, withLocale } from "@/lib/site-locale";

export function PeoplePortal({ locale = "default" }: { locale?: SiteLocale }) {
  const isTurkish = locale === "tr";
  const [country, setCountry] = useState<"All" | JobCountry>("All");
  const [department, setDepartment] = useState<"All" | JobDepartment>("All");
  const [query, setQuery] = useState("");

  const filteredOpenings = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return peopleOpenings.filter((opening) => {
      const matchesCountry = country === "All" || opening.country === country;
      const matchesDepartment = department === "All" || opening.department === department;
      const haystack = `${opening.title} ${opening.country} ${opening.city} ${opening.department} ${opening.status}`.toLowerCase();
      const matchesQuery = normalized.length === 0 || haystack.includes(normalized);
      return matchesCountry && matchesDepartment && matchesQuery;
    });
  }, [country, department, query]);

  const visibleOpenings = filteredOpenings.slice(0, 72);
  const countryCounts = peopleRegions.map((region) => ({
    country: region.country,
    count: peopleOpenings.filter((opening) => opening.country === region.country).length,
  }));

  return (
    <>
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <Image
            src={olmezBrandAssets.images.peopleGrowth.src}
            alt={olmezBrandAssets.images.peopleGrowth.alt}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/76" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/72 to-black/24" />

        <div className="relative mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
              <span className="h-px w-10 bg-[#b8865a]" />
              {isTurkish ? "İnsan ofisi" : "People Office"}
            </span>
            <h1 className="mt-8 max-w-[11ch] font-display text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em]">
              {isTurkish ? "İnsanlar sistemi taşır." : "People carry the system."}
            </h1>
            <p className="mt-7 max-w-[56ch] text-base leading-[1.8] text-white/74 md:text-lg">
              {isTurkish
                ? "Ölmez, ülke ve departman bazlı işe alım yapıyor. Aşağıdaki açık roller gerçek operasyon, yatırımcı ilişkileri, AFFAREM, teknoloji, mutfak, saha ve sosyal sorumluluk ihtiyaçlarına göre düzenlenmiştir."
                : "Ölmez hires by country and department. The open roles below are structured around real operating needs: branch work, investor relations, AFFAREM, technology, kitchen, field execution, and social responsibility."}
            </p>
            <blockquote className="mt-8 max-w-[48ch] border-l-2 border-[#b8865a] pl-6 font-display text-2xl leading-[1.35] tracking-[-0.03em] text-white">
              “From 5 people to nearly 3,000 people, the system stayed the same: discipline first, opportunity second, growth third.”
            </blockquote>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#positions"
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                {isTurkish ? "Açık rolleri gör" : "View open roles"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={withLocale("/talents", locale)}
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/16 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/34 hover:text-white"
              >
                {isTurkish ? "Yetenek odası" : "Talent room"}
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              { label: isTurkish ? "Global ekip" : "Global team", value: "Nearly 3,000" },
              { label: isTurkish ? "Açık fırsat" : "Open opportunities", value: `${peopleOpenings.length}+` },
              { label: isTurkish ? "Ülke ve masa" : "Countries and desks", value: "8" },
              { label: isTurkish ? "Departman" : "Departments", value: "13" },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/12 bg-black/28 p-5 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">{stat.label}</p>
                <p className="mt-2 font-display text-3xl tracking-[-0.03em] text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Kültür" : "Culture"}
              </span>
              <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish ? "Başlık değil, davranış aranır." : "Behavior before title."}
              </h2>
              <p className="mt-8 max-w-[56ch] text-base leading-[1.85] text-white/66">
                {isTurkish
                  ? "Ölmez büyümeyi insan sayısıyla açıklamaz. Asıl ölçü, daha fazla insan katıldığında aynı standardın korunup korunmadığıdır."
                  : "Ölmez does not explain growth by headcount alone. The test is whether the standard survives as more people enter the system."}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {peopleCulture.map((pillar) => (
                <article key={pillar.title} className="border border-white/10 bg-black/25 p-6">
                  <h3 className="font-display text-2xl tracking-[-0.03em] text-[#e7bc8b]">{pillar.title}</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-white/64">{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Ülke yapısı" : "Country structure"}
              </span>
              <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {isTurkish ? "Açık roller pazara göre düzenlenir." : "Open roles by market."}
              </h2>
            </div>
            <Link
              href="mailto:people@olmez.us"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/72 transition-colors hover:text-[#e7bc8b]"
            >
              <Mail className="h-3.5 w-3.5" />
              people@olmez.us
            </Link>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {countryCounts.map((item) => (
              <article key={item.country} className="border border-white/10 bg-black/25 p-5">
                <p className="font-display text-2xl tracking-[-0.03em] text-white">{item.country}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                  {item.count} open roles
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="positions" className="border-t border-white/10 bg-white/[0.02] py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                {isTurkish ? "Açık pozisyonlar" : "Open opportunities"}
              </span>
              <h2 className="mt-6 max-w-[15ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
                {peopleOpenings.length}+ roles across countries and departments.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-white/10 px-5 py-4">
                <Users className="h-4 w-4 text-[#e7bc8b]" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Applications in review</p>
                <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-white">
                  {peopleOpenings.reduce((sum, opening) => sum + opening.applications, 0).toLocaleString("en-US")}
                </p>
              </div>
              <div className="border border-white/10 px-5 py-4">
                <BriefcaseBusiness className="h-4 w-4 text-[#e7bc8b]" />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">Active filters</p>
                <p className="mt-2 font-display text-2xl tracking-[-0.03em] text-white">{filteredOpenings.length}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border border-white/10 bg-black/24 p-5 lg:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
              <label className="block">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                  <Search className="h-3.5 w-3.5" />
                  Search
                </span>
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="AFFAREM, Riyadh, finance, kitchen..."
                  className="mt-3 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/28 focus:border-[#b8865a]"
                />
              </label>

              <label className="block">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                  <MapPin className="h-3.5 w-3.5" />
                  Country
                </span>
                <select
                  value={country}
                  onChange={(event) => setCountry(event.target.value as "All" | JobCountry)}
                  className="mt-3 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition-colors focus:border-[#b8865a]"
                >
                  {countryFilters.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">
                  <Filter className="h-3.5 w-3.5" />
                  Department
                </span>
                <select
                  value={department}
                  onChange={(event) => setDepartment(event.target.value as "All" | JobDepartment)}
                  className="mt-3 h-12 w-full border border-white/10 bg-black/35 px-4 text-sm text-white outline-none transition-colors focus:border-[#b8865a]"
                >
                  {departmentFilters.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {visibleOpenings.map((opening) => (
              <article key={opening.id} className="flex min-h-[330px] flex-col border border-white/10 bg-black/26 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">{opening.id}</p>
                    <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">{opening.title}</h3>
                  </div>
                  <span className="border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/58">
                    {opening.status}
                  </span>
                </div>

                <div className="mt-5 grid gap-3 border-y border-white/10 py-4 text-sm text-white/68">
                  <p>{opening.city}, {opening.country}</p>
                  <p>{opening.department} / {opening.jobType}</p>
                  <p>Applications: {opening.applications}</p>
                  <p>Screening activity: {opening.screeningActivity}</p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-[1.75] text-white/62">{opening.summary}</p>

                <Link
                  href={opening.applyHref}
                  className="mt-6 inline-flex h-11 items-center justify-center gap-3 bg-[#b8865a] px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-[#d7ad7a]"
                >
                  Apply now
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>

          {filteredOpenings.length > visibleOpenings.length && (
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">
              Showing {visibleOpenings.length} of {filteredOpenings.length}. Use country, department, or search filters to narrow the list.
            </p>
          )}
        </div>
      </section>

      <section id="community-pathways" className="border-t border-white/10 py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1fr_0.92fr] lg:items-end lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              {isTurkish ? "Açık kapı" : "Open door"}
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl lg:text-7xl">
              Talent does not always arrive through a job title.
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/68">
              If you can build, operate, design, cook, manage, sell, teach, improve, or open something with Ölmez, use the Talents page. The People Office reviews unusual opportunities as well as CVs.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={withLocale("/talents", locale)}
                className="group inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
              >
                Tell us what you can build
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="mailto:people@olmez.us"
                className="inline-flex h-12 items-center justify-center gap-3 border border-white/14 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/82 transition-colors hover:border-white/30 hover:text-white"
              >
                people@olmez.us
              </Link>
            </div>
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
      </section>
    </>
  );
}
