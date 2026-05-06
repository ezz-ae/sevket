import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "About Ölmez — Mobility. Design. Future.",
  description:
    "Ölmez is redefining restaurant infrastructure and business systems. Built on vision, driven by purpose. Leadership, innovation, and global expansion.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <PageHeader
        eyebrow="About the brand"
        title="Ölmez"
        italicTail="Mobility. Design. Future."
        dek="We are redefining restaurant infrastructure and business systems. Built on vision. Driven by purpose. Every detail matters."
        meta={[
          { label: "Founded", value: "2021" },
          { label: "HQ", value: "Edinburgh" },
          { label: "Team", value: "Global" },
          { label: "Mission", value: "Repetition & Scale" },
        ]}
      />

      {/* Brand Identity Section */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Brand Foundation
              </span>
              <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-[-0.015em] leading-[1.0] max-w-[18ch]">
                Built on vision. Driven by purpose.
              </h2>
              <p className="mt-8 text-lg leading-[1.7] text-foreground/80 max-w-[60ch]">
                Ölmez represents more than a name. It embodies a philosophy: systems outlast individuals. We don't build restaurants. We build the infrastructure that makes restaurants repeatable, profitable, and scalable.
              </p>
              <p className="mt-6 text-lg leading-[1.7] text-foreground/70 max-w-[60ch]">
                Every car bearing our name, every office wall, every publication—they all tell the same story: discipline is the asset. Repetition is the strategy.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-video bg-foreground/5 border border-foreground/15 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop"
                  alt="Ölmez fleet and headquarters"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Leadership
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              The architect of repetition.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-square bg-foreground/5 border border-foreground/15 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Şevketullah Ölmez"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div>
              <h3 className="font-display text-4xl md:text-5xl tracking-[-0.015em] mb-6">
                Şevketullah "Şevket" Ölmez
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-8">
                Founder & Chief Architect
              </p>

              <div className="space-y-6">
                {[
                  {
                    label: "Born",
                    value: "Ankara, Turkey · 12 October 1988",
                  },
                  {
                    label: "Philosophy",
                    value: "Systems outlast individuals. Discipline is the asset.",
                  },
                  {
                    label: "Thesis",
                    value: "I don't build restaurants. I build repetition.",
                  },
                  {
                    label: "Operating From",
                    value: "Edinburgh, Scotland · Istanbul, Turkey",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      {item.label}
                    </p>
                    <p className="text-lg leading-[1.6]">{item.value}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/founder"
                className="inline-flex items-center justify-center gap-3 mt-10 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-foreground/90 transition-colors"
              >
                Full founder profile
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Principles
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[22ch]">
              What we stand for.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Discipline Over Genius",
                description:
                  "Build a system any disciplined operator can run. If it requires a genius, it cannot be franchised.",
              },
              {
                title: "Repetition as Strategy",
                description:
                  "Stand where the customer is already stopping. Convert flow; do not manufacture it.",
              },
              {
                title: "Audit Discipline",
                description:
                  "Audit discipline as strictly as you audit profit. The score, not the wire, decides who scales.",
              },
              {
                title: "Brand is Promise",
                description:
                  "Brand is not a graphic-design choice. Brand is a repeated promise kept consistently.",
              },
              {
                title: "Structure is Asset",
                description:
                  "The 4-investor seat structure is the discipline. The discipline is the asset.",
              },
              {
                title: "Consistency Over Noise",
                description:
                  "Money is becoming normal. Behavioral consistency is the rarity—and your competitive edge.",
              },
            ].map((value) => (
              <article
                key={value.title}
                className="border border-foreground/15 p-8 lg:p-10 bg-foreground/[0.015]"
              >
                <h3 className="font-display text-2xl tracking-[-0.005em] mb-4">
                  {value.title}
                </h3>
                <p className="text-base leading-[1.75] text-foreground/75">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Global Operations Section */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Global Presence
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch]">
              Operating globally. Built locally.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="relative aspect-video bg-foreground/5 border border-foreground/15 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop"
                alt="Ölmez headquarters and operations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div>
              <h3 className="font-display text-3xl tracking-[-0.015em] mb-8">
                Headquarters & Operations
              </h3>

              <div className="space-y-8">
                {[
                  {
                    location: "Edinburgh, Scotland",
                    role: "Primary HQ",
                    description: "Strategic center. Where every filing is dated, signed, and circulated.",
                  },
                  {
                    location: "Istanbul, Turkey",
                    role: "Operations Center",
                    description: "Growth hub. Regional expansion and market development.",
                  },
                  {
                    location: "London, UK",
                    role: "Bridge Office",
                    description: "Investor relations and capital coordination.",
                  },
                  {
                    location: "US Network",
                    role: "Fuel-stop Network",
                    description: "Rapid growth markets across 12 territories.",
                  },
                ].map((office) => (
                  <div key={office.location}>
                    <h4 className="font-display text-xl tracking-[-0.005em] mb-2">
                      {office.location}
                    </h4>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
                      {office.role}
                    </p>
                    <p className="text-foreground/70">{office.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand & Communications */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Brand Expression
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[24ch]">
              Magazine & thought leadership.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative aspect-[9/12] bg-foreground/5 border border-foreground/15 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-150784272343-583f20270319?w=500&h=700&fit=crop"
                alt="Ölmez Magazine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div>
              <h3 className="font-display text-3xl tracking-[-0.015em] mb-6">
                Field Notes Publication
              </h3>
              <p className="text-lg leading-[1.7] text-foreground/80 mb-8">
                Ölmez publishes quarterly Field Notes—a magazine exploring leadership, expansion strategy, design innovation, and the systems that scale.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Deep dives into operational discipline",
                  "Case studies from the network",
                  "Founder interviews and insights",
                  "Market analysis and trends",
                  "Design philosophy and standards",
                  "Global expansion strategies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/magazine"
                className="inline-flex items-center justify-center gap-3 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.22em] px-7 h-12 hover:bg-foreground/90 transition-colors"
              >
                Read Field Notes
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Ölmez Standard */}
      <section className="relative border-t border-foreground/10 py-24 lg:py-32 bg-foreground/[0.015]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 lg:mb-28">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Standard
            </span>
            <h2 className="mt-6 font-display text-5xl md:text-7xl lg:text-[120px] tracking-[-0.015em] leading-[1.0] max-w-[8ch] mx-auto">
              The Ölmez Standard.
            </h2>
            <p className="mt-8 text-xl text-foreground/70 max-w-[60ch] mx-auto">
              Crafted with precision. Built to lead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                heading: "Design That Moves",
                subheading: "Where aesthetics meet performance.",
                items: [
                  "Form follows discipline",
                  "Every detail serves function",
                  "Consistency across contexts",
                  "Premium execution standards",
                ],
              },
              {
                heading: "Beyond Borders",
                subheading: "Scaling innovation. Expanding opportunity.",
                items: [
                  "Multi-territory operation model",
                  "Localized with global standards",
                  "12+ territories and growing",
                  "Cross-market knowledge sharing",
                ],
              },
              {
                heading: "Built to Lead",
                subheading: "Operational excellence at every level.",
                items: [
                  "99.3% unit retention rate",
                  "94.2% operational uptime",
                  "30-month capital recovery",
                  "18.4% average investor ROI",
                ],
              },
            ].map((section) => (
              <div
                key={section.heading}
                className="border border-foreground/15 p-8 lg:p-10 bg-background"
              >
                <h3 className="font-display text-2xl tracking-[-0.005em] mb-2">
                  {section.heading}
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  {section.subheading}
                </p>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm flex items-start gap-3 text-foreground/75"
                    >
                      <span className="text-muted-foreground mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-foreground/10 py-32 lg:py-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Get involved
          </span>
          <h2 className="mt-10 lg:mt-14 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.015em] leading-[1.0] max-w-[20ch] mx-auto mb-8">
            Join the network.
          </h2>
          <p className="text-xl text-foreground/70 max-w-[60ch] mx-auto mb-12">
            Whether you're an operator, investor, or partner, Ölmez offers a path to disciplined, profitable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analytics"
              className="group inline-flex items-center justify-center gap-3 bg-[#8B5A3C] text-white px-8 h-13 py-4 font-mono text-xs uppercase tracking-[0.22em] hover:bg-[#a0674a] transition-colors"
            >
              View analytics & metrics
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/founder"
              className="inline-flex items-center justify-center gap-3 border border-foreground/25 text-foreground font-mono text-xs uppercase tracking-[0.22em] px-8 h-13 hover:bg-foreground/5 transition-colors"
            >
              Founder's philosophy
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
