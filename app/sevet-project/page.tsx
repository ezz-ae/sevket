import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, BarChart3, Users, Zap, Shield } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { PageHeader } from "@/components/shared/page-header";

export const metadata: Metadata = {
  title: "The Sevet Ölmez Project · SevetTeam",
  description:
    "Engineering Global Shawarma Franchise Systems: A sophisticated restaurant business infrastructure transforming food service into a disciplined, scalable asset class.",
};

export default function SevetProjectPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />
      
      <PageHeader
        title="The Sevet Ölmez Project"
        subtitle="Engineering Global Shawarma Franchise Systems"
        description="A sophisticated restaurant business infrastructure designed to transform food service into a measurable, repeatable, and scalable asset class."
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Executive Summary */}
        <section className="mb-16 pb-16 border-b border-border">
          <h2 className="text-3xl font-serif font-bold mb-6">Executive Summary</h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              The Sevet Ölmez Project outlines a sophisticated restaurant business infrastructure designed to transform the traditional food service model into a measurable, repeatable, and scalable asset class. At the center of this ecosystem is SevetTeam, a parent company founded by Turkish-British entrepreneur Sevet Ölmez (Şevketullah Ölmez). Unlike traditional restaurant companies that focus on culinary flair, SevetTeam functions as a "restaurant business company," prioritizing operational control, unit economics, and data-driven management.
            </p>
            <p>
              The project's signature strategy involves placing compact shawarma franchise units inside U.S. gas stations to leverage existing traffic rather than attempting to generate new demand. These units are managed through AFFAREM, a proprietary control system that integrates remote monitoring, smart CCTV, and a unique "Smart Discipline Score" to ensure accountability. With a diverse entry ladder ranging from $1,000 micro-starts to $245,000 premium units, the project aims to turn food service into a disciplined system where every branch must justify its existence through financial transparency and capital recovery.
            </p>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="mb-16 pb-16 border-b border-border">
          <h2 className="text-3xl font-serif font-bold mb-6">Founder Profile: Sevet Ölmez</h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            The business philosophy of SevetTeam is deeply rooted in the personal history and psychological framework of its founder.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-semibold mb-3">Biographical Background</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Born Şevketullah Ölmez on October 12, 1988, in Ankara, Turkey. He was raised primarily by a disciplined and practical Turkish father after his English mother returned to London during his early childhood. He eventually moved to England for his education and currently resides in Edinburgh, Scotland.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold mb-3">Identity and Name Logic</h3>
              <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold whitespace-nowrap">Şevketullah Ölmez:</span>
                  <span>His official legal name, representing his Turkish roots and familial heritage.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold whitespace-nowrap">Şevket Ölmez:</span>
                  <span>His professional business name.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold whitespace-nowrap">Sevet Ölmez:</span>
                  <span>The name used by his UK circle and university peers. This name represents his independent identity and adaptation to the British market.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold mb-3">Core Philosophy</h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Driven by a childhood realization that "people leave but systems stay," Ölmez views repetition as the ultimate form of safety and control. His mantra is:
              </p>
              <blockquote className="pl-6 py-4 border-l-4 border-primary italic text-base text-muted-foreground bg-muted/30">
                "I don't build restaurants. I build repetition."
              </blockquote>
            </div>

            <div>
              <h3 className="text-xl font-serif font-semibold mb-3">Professional Persona</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                Known as "The Franchise Architect," he is characterized as a calm, strategic, and emotionally guarded operator who values numbers over "hype" and operational discipline over creative chaos.
              </p>
            </div>
          </div>
        </section>

        {/* SevetTeam Ecosystem */}
        <section className="mb-16 pb-16 border-b border-border">
          <h2 className="text-3xl font-serif font-bold mb-6">The SevetTeam Ecosystem</h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            SevetTeam is structured into three distinct layers that balance brand authority with high-yield scalability.
          </p>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-serif font-semibold">Full Turkish Restaurants</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Located in major global hubs (London, Edinburgh, Istanbul, New York, etc.), these flagship establishments build cultural trust and serve as training hubs. They establish the brand's culinary credibility and host potential investors.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-serif font-semibold">Gas Station Units</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                The primary scalable product. Compact units are placed inside high-traffic U.S. gas stations with a strictly limited menu (shawarma, wraps, bowls, fries).
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                The Logic: Gas stations already sell movement and have built-in traffic. SevetTeam places food where customers are already pausing.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-serif font-semibold">Micro-Start Program</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                An entry-level tier allowing individuals to start small food businesses with limited capital ($1,000–$2,000). This program functions as a ladder, allowing operators to grow from street stands to full franchise units.
              </p>
            </div>
          </div>
        </section>

        {/* AFFAREM System */}
        <section className="mb-16 pb-16 border-b border-border">
          <h2 className="text-3xl font-serif font-bold mb-6">Technical Infrastructure: The AFFAREM System</h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            AFFAREM is the proprietary "Operating Room" of SevetTeam. It serves as the interface between investors, managers, and the physical branches.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-semibold mb-4">The Six Rooms of AFFAREM</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Room</th>
                    <th className="text-left py-3 px-4 font-semibold">Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Investor Room</td>
                    <td className="py-3 px-4">Provides a central workspace for capital providers to track branch status and capital recovery.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Design Session Room</td>
                    <td className="py-3 px-4">A live session where investors participate in the architectural and operational design of their unit before installation.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Operator Room</td>
                    <td className="py-3 px-4">Tracks daily tasks, staff attendance, food safety, and shift reports.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">Accountant Room</td>
                    <td className="py-3 px-4">Provides absolute financial transparency, tracking every cent from gross sales to tax reserves.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-medium">LiveOps Room</td>
                    <td className="py-3 px-4">A high-intensity intervention mode featuring two daily video meetings and accountant review for weak branches.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Payback Room</td>
                    <td className="py-3 px-4">Displays the "brutal number": how much initial capital has been recovered vs. what remains.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">The Smart Discipline Score</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              In the SevetTeam model, discipline is valued more than wealth. Every account (investor, operator, or partner) is assigned a Smart Discipline Score based on behavior rather than credit.
            </p>
            <ul className="space-y-3 text-base leading-relaxed text-muted-foreground pl-6 border-l-2 border-primary">
              <li><span className="font-semibold">Metrics:</span> Reporting accuracy, meeting attendance, transparency with problems, and response speed.</li>
              <li><span className="font-semibold">Impact:</span> A high-wealth investor with a low discipline score may be blocked from expansion, while a high-discipline small operator is fast-tracked for growth.</li>
            </ul>
          </div>
        </section>

        {/* Financial Models */}
        <section className="mb-16 pb-16 border-b border-border">
          <h2 className="text-3xl font-serif font-bold mb-6">Financial and Operational Models</h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            SevetTeam operates on scenario-based modeling rather than guaranteed profits.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-semibold mb-4">Unit Economics: Setup Costs</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Model</th>
                    <th className="text-left py-3 px-4 font-semibold">Setup Cost (Est.)</th>
                    <th className="text-left py-3 px-4 font-semibold">Target Environment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Small Counter Unit</td>
                    <td className="py-3 px-4 font-mono">$105,000</td>
                    <td className="py-3 px-4">Low-cost entry, limited space.</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Standard Unit</td>
                    <td className="py-3 px-4 font-mono">$165,000</td>
                    <td className="py-3 px-4">Standard U.S. gas station unit.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Premium Unit</td>
                    <td className="py-3 px-4 font-mono">$245,000</td>
                    <td className="py-3 px-4">High-traffic flagship gas station locations.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-semibold mb-4">Daily Gain Ladder</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              "Daily Gain" is defined as net operating cash flow after all expenses (food, labor, site fees, royalties) but before taxes and loan payments.
            </p>
            <ul className="space-y-2 text-base leading-relaxed text-muted-foreground pl-6 border-l-2 border-primary">
              <li><span className="font-semibold">Class C (Survival):</span> $200/day</li>
              <li><span className="font-semibold">Class A (Strong Target):</span> $550/day</li>
              <li><span className="font-semibold">Flagship (Elite):</span> $1,400/day</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Payback Projections (Standard $165k Unit)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Daily Gain</th>
                    <th className="text-left py-3 px-4 font-semibold">Monthly Gain</th>
                    <th className="text-left py-3 px-4 font-semibold">Projected Payback Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-mono">$200</td>
                    <td className="py-3 px-4 font-mono">$6,000</td>
                    <td className="py-3 px-4">27.5 Months</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-mono">$350</td>
                    <td className="py-3 px-4 font-mono">$10,500</td>
                    <td className="py-3 px-4">15.7 Months</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 font-mono">$550</td>
                    <td className="py-3 px-4 font-mono">$16,500</td>
                    <td className="py-3 px-4">10 Months</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-mono">$1,400</td>
                    <td className="py-3 px-4 font-mono">$42,000</td>
                    <td className="py-3 px-4">3.9 Months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground italic mt-4">
              Note: The official public model targets a conservative 2.5-year (30-month) payback period.
            </p>
          </div>
        </section>

        {/* Ownership Models */}
        <section className="mb-16 pb-16 border-b border-border">
          <h2 className="text-3xl font-serif font-bold mb-6">Ownership and Accountability Models</h2>
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            The project explicitly rejects "passive fantasy" ownership.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-serif font-semibold mb-4">The 4-Investor Branch Model</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-6">
              A single gas station unit can be owned by four investors (25% share each). Each investor is assigned a management seat and must fulfill one of two roles:
            </p>
            <div className="bg-muted/30 rounded-lg p-6 border border-border">
              <ul className="space-y-3 text-base leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold">1. Owner-Operator:</span>
                  <span>Personally manages a daily shift.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold">2. Manager-Employer:</span>
                  <span>Hires a qualified professional manager to represent their shift responsibility.</span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">LiveOps Intervention</h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              SevetTeam offers a paid "LiveOps Review" for units that fall below performance thresholds. This includes:
            </p>
            <ul className="space-y-3 text-base leading-relaxed text-muted-foreground pl-6 border-l-2 border-primary">
              <li><span className="font-semibold">Remote LiveOps:</span> Two daily video calls and remote accountant review.</li>
              <li><span className="font-semibold">On-Site LiveOps:</span> A SevetTeam manager travels to the location for direct operational intervention, inventory correction, and staff retraining.</li>
            </ul>
          </div>
        </section>

        {/* Global Strategy */}
        <section className="mb-16 pb-16 border-b border-border">
          <h2 className="text-3xl font-serif font-bold mb-6">Global Market Strategy</h2>
          <ul className="space-y-4 text-base leading-relaxed text-muted-foreground pl-6 border-l-2 border-primary">
            <li>
              <span className="font-semibold">Sevet Global Market:</span> A specialized marketplace where approved franchise assets, territory packages, and branch resale opportunities are listed. It treats food businesses as investable assets.
            </li>
            <li>
              <span className="font-semibold">The British-Istanbul Bridge:</span> The network currently includes 42 British franchise holders with extensive experience in Istanbul. This group bridges British operational discipline with the intense food-market culture of Turkey, elevating the brand's international standing.
            </li>
          </ul>
        </section>

        {/* Core Directives */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-6">Core Directives for Operations</h2>
          <div className="grid gap-4 md:grid-cols-1">
            <div className="bg-muted/30 rounded-lg p-6 border border-border flex gap-4">
              <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Existing Traffic</h3>
                <p className="text-sm text-muted-foreground">Never spend money to create traffic; stand inside traffic that already exists (gas stations).</p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6 border border-border flex gap-4">
              <BarChart3 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Model-First Expansion</h3>
                <p className="text-sm text-muted-foreground">No expansion is permitted without AFFAREM proof that the current unit is stable and repeatable.</p>
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6 border border-border flex gap-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Management Control</h3>
                <p className="text-sm text-muted-foreground">The company does not sell "the right to work"; it sells the "control layer" (Smart CCTV, AFFAREM, Remote Dashboards) that makes food units manageable from anywhere.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-16">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">Learn More About SevetTeam</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our auditing systems, marketplace, and founder philosophy to understand how we're transforming food service into disciplined, scalable systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auditing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Auditing Console <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/founder"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/20 text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Founder Profile <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
