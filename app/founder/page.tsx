import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "The Founder · Şevketullah Ölmez — Ölmez Franchise Systems",
  description:
    "I don't build restaurants — I build repetition. The founder profile of Şevketullah Ölmez, architect of Ölmez Franchise Systems's disciplined franchise infrastructure.",
};


const geographies = [
  {
    place: "Ankara, Turkey",
    role: "Roots — Hard discipline",
    body: "Ingrained the value of personal responsibility and the uncompromising nature of the father's world. Discipline as the precondition for trust. Discipline as the precondition for repetition.",
  },
  {
    place: "England",
    role: "Identity — Market adaptation",
    body: "Taught the necessity of distance. People simplify what they cannot carry; the UK provided the room to observe systems from the outside. Identity tiered into three names because three audiences were listening.",
  },
  {
    place: "Edinburgh, Scotland",
    role: "Focus — Strategic silence",
    body: "Stopped chasing the noise of metropolis startups. Engineered silent, high-margin repetitions instead. The desk where every filing is dated, signed, and circulated to all four seats.",
  },
];

const principles = [
  "Stand where the customer is already stopping. Convert flow; do not manufacture it.",
  "Build a system any disciplined operator can run. If it requires a genius, it cannot be franchised.",
  "Audit discipline as strictly as you audit profit. The score, not the wire, decides who scales.",
  "Brand is not a graphic-design choice. Brand is a repeated promise.",
  "The 4-investor seat structure is the discipline. The discipline is the asset.",
  "Money is becoming normal. Behavioral consistency is the rarity.",
];

export default function FounderPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow="The founder — Şevketullah Ölmez"
        title="The architect of"
        italicTail="repetition."
        dek="A clinical rejection of emotional business models. Born in Ankara, shaped by displacement, disciplined in Edinburgh. One thesis: systems outlast individuals."
        meta={[
          { label: "Born", value: "12 Oct 1988" },
          { label: "Roots", value: "Ankara" },
          { label: "Desk", value: "Edinburgh" },
          { label: "Bridge", value: "London / Istanbul" },
        ]}
      />


      {/* Geographies — vertical timeline */}
      <section className="relative py-24 lg:py-32 bg-foreground/[0.015] border-t border-foreground/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Geographical influences
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[18ch]">
                Three cities. Three lessons.
              </h2>
            </div>
          </div>

          <ol className="relative max-w-[64rem] mx-auto pl-10 lg:pl-16">
            <span className="absolute top-2 bottom-2 left-2 lg:left-4 w-px bg-foreground/15" />
            {geographies.map((g) => (
              <li key={g.place} className="relative pb-16 lg:pb-24 last:pb-0">
                <span className="absolute -left-[34px] lg:-left-[44px] top-2 w-3 h-3 rounded-full bg-[#b8865a] border-2 border-background" />
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] ember">
                  {g.role}
                </span>
                <h3 className="mt-4 font-display text-3xl lg:text-5xl tracking-[-0.005em]">
                  {g.place}
                </h3>
                <p className="mt-7 max-w-[60ch] text-lg lg:text-xl leading-[1.7] text-foreground/85">
                  {g.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Manifesto pullquote */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            The thesis
          </span>
          <blockquote className="mt-10 lg:mt-14 font-display italic text-5xl md:text-7xl lg:text-[120px] tracking-[-0.015em] leading-[1.0] max-w-[14ch] mx-auto">
            &ldquo;I don&rsquo;t build restaurants. I build repetition.&rdquo;
          </blockquote>
          <span className="mt-12 block font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            — Şevketullah Ölmez · Edinburgh
          </span>
        </div>
      </section>

      {/* Operating principles */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Operating principles
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
                What the desk holds to.
              </h2>
            </div>
          </div>

          <ol className="border-t border-foreground/15">
            {principles.map((p, i) => (
              <li
                key={p}
                className="grid lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 items-baseline py-10 lg:py-14 border-b border-foreground/15"
              >
                <span className="font-mono text-sm uppercase tracking-[0.22em] ember tabular-nums">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xl lg:text-2xl font-display leading-[1.35] tracking-[-0.005em] text-foreground/90 max-w-[60ch]">
                  {p}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-20 lg:mt-28 flex flex-col sm:flex-row gap-4">
            <Link
              href="/magazine/the-founders-blueprint"
              className="group inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-foreground/90 transition-colors"
            >
              Read the founder&rsquo;s blueprint
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/magazine"
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 text-foreground font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-foreground/5 transition-colors"
            >
              All field notes
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
