import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Contact — Ölmez",
  description:
    "Contact Ölmez by department: general, investors, government relations, founder office, people support, media, partnerships, and call requests.",
  openGraph: {
    title: "Contact — Ölmez",
    description:
      "A structured contact desk for Ölmez, AFFAREM, People Office, government relations, media, partnerships, and investor access.",
    url: `${baseUrl}/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

const contacts = [
  {
    title: "General Contact",
    body: "Use this for company questions, general routing, and first contact with the Ölmez desk.",
    email: "hello@olmez.us",
    cta: "Email General Desk",
  },
  {
    title: "Investor Access",
    body: "For qualified investor access, junior pools, branch opportunities, reports, documents, and AFFAREM account review.",
    email: "investors@olmez.us",
    cta: "Email Investor Desk",
  },
  {
    title: "Government & Institutional Relations",
    body: "For public-sector conversations, city-level entry, institutional coordination, and country-level market readiness.",
    email: "gov@olmez.us",
    cta: "Email Government Desk",
  },
  {
    title: "Founder / Sevet",
    body: "Founder-office messages, speaking invitations, editorial requests, and direct founder-facing correspondence.",
    email: "sevet@olmez.us",
    cta: "Email Sevet",
  },
  {
    title: "People Support",
    body: "If you work with Ölmez and need personal support, guidance, or a private people-related conversation, you can reach the People Office directly.",
    email: "people@olmez.us",
    cta: "Email People Office",
  },
  {
    title: "Media / Speaking",
    body: "For media inquiries, interviews, founder comments, public appearances, and story verification.",
    email: "media@olmez.us",
    cta: "Email Media Desk",
  },
  {
    title: "Partnerships",
    body: "For supplier, market-entry, technology, card, wallet, branch, and strategic partnership conversations.",
    email: "partners@olmez.us",
    cta: "Email Partnerships",
  },
  {
    title: "Request a Call",
    body: "Use the hotline or send a call request with your name, country, department, and reason for contact.",
    email: "hello@olmez.us",
    cta: "Request Call by Email",
    phone: "+1 833 665 6398",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation forceScrolled />

      <section className="border-t border-foreground/10 pt-40 pb-20 lg:pt-56 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            <span className="h-px w-10 bg-[#b8865a]" />
            Contact Desk
          </span>
          <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em]">
            Reach the right office.
          </h1>
          <p className="mt-7 max-w-[62ch] text-base leading-[1.85] text-foreground/70 md:text-lg">
            Ölmez uses a direct department structure. Choose the desk that matches the reason for contact so the request reaches the right person quickly.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+18336656398"
              className="inline-flex h-12 items-center justify-center gap-3 bg-[#b8865a] px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-black transition-colors hover:bg-[#d7ad7a]"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Hotline
            </a>
            <a
              href="mailto:hello@olmez.us?subject=Request%20a%20Call"
              className="inline-flex h-12 items-center justify-center gap-3 border border-foreground/18 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/82 transition-colors hover:border-foreground/34"
            >
              Request a Call
            </a>
            <Link
              href="/people"
              className="inline-flex h-12 items-center justify-center gap-3 border border-foreground/18 px-7 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/82 transition-colors hover:border-foreground/34"
            >
              People Portal
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-foreground/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-6 md:grid-cols-2 xl:grid-cols-4 lg:px-12">
          {contacts.map((contact) => (
            <article key={contact.title} className="flex min-h-[300px] flex-col border border-foreground/12 bg-background p-6">
              <Mail className="h-5 w-5 text-[#b8865a]" />
              <h2 className="mt-5 font-display text-2xl tracking-[-0.03em] text-foreground">{contact.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-[1.8] text-foreground/64">{contact.body}</p>
              {contact.phone && (
                <a href="tel:+18336656398" className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/60 hover:text-foreground">
                  {contact.phone}
                </a>
              )}
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.title)}`}
                className="mt-5 inline-flex h-11 items-center justify-center gap-3 bg-[#111] px-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#b8865a] hover:text-black"
              >
                {contact.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href={`mailto:${contact.email}`} className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#b8865a] hover:text-foreground">
                {contact.email}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-foreground/[0.015] py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              People Office
            </span>
            <h2 className="mt-6 max-w-[12ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
              Private support has a direct address.
            </h2>
          </div>
          <div className="border border-foreground/12 bg-background p-8">
            <p className="text-base leading-[1.85] text-foreground/70">
              If you work with Ölmez and need personal support, guidance, or a private people-related conversation, you can reach the People Office directly at{" "}
              <a href="mailto:people@olmez.us" className="text-[#b8865a] hover:text-foreground">
                people@olmez.us
              </a>.
            </p>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
