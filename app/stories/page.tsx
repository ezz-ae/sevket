import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Heart, Share2 } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { LivePageCount } from "@/components/shared/live-page-count";
import { stories } from "@/lib/stories-data";
import { olmezBrandAssets } from "@/lib/olmez-brand-assets";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Stories — Ölmez",
  description:
    "Human stories from the Ölmez ecosystem: early workers, managers, interns, junior investors, operators, kitchen staff, and training graduates.",
  alternates: { canonical: `${baseUrl}/stories` },
  openGraph: {
    title: "Stories — Ölmez",
    description: "From 5 people to nearly 3,000 — the same system. Read the human side of the Ölmez build.",
    url: `${baseUrl}/stories`,
    type: "website",
  },
};

export default function StoriesPage() {
  const featured = stories[0];

  return (
    <main
      className="relative min-h-screen text-white"
      style={{ background: "linear-gradient(180deg, #170f0b 0%, #050505 44%, #111511 100%)" }}
    >
      <Navigation forceScrolled />

      <section className="relative overflow-hidden border-t border-white/10 pt-40 pb-20 lg:pt-56 lg:pb-28">
        <div className="absolute inset-0">
          <Image
            src={olmezBrandAssets.images.teamSummit.src}
            alt={olmezBrandAssets.images.teamSummit.alt}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-black/72 to-black/24" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-white/58">
            <span className="h-px w-10 bg-[#b8865a]" />
            Stories
          </span>
          <h1 className="mt-8 max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] leading-[0.94] tracking-[-0.04em]">
            Human growth inside the system.
          </h1>
          <p className="mt-7 max-w-[62ch] text-base leading-[1.85] text-white/72 md:text-lg">
            Stories from early workers, branch managers, hospitality interns, junior investors, operators, kitchen staff, training graduates, and people who moved from one role to another.
          </p>
          <div className="mt-8 text-white/58">
            <LivePageCount />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
              Featured story
            </span>
            <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
              {featured.title}
            </h2>
            <p className="mt-8 max-w-[58ch] text-base leading-[1.85] text-white/66">
              {featured.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/54">
              <span>{featured.country}</span>
              <span>{featured.category}</span>
              <span>{featured.readTime} min read</span>
              <span>{featured.publishedAt}</span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Metric icon={Eye} label="people read this story" value={featured.views} />
              <Metric icon={Heart} label="likes" value={featured.likes} />
              <Metric icon={Share2} label="people shared this" value={featured.shares} />
            </div>
          </div>
          <div className="relative overflow-hidden border border-white/10 bg-black">
            <Image
              src={olmezBrandAssets.images.peopleGrowth.src}
              alt={olmezBrandAssets.images.peopleGrowth.alt}
              width={1086}
              height={1448}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/45">
                Story archive
              </span>
              <h2 className="mt-6 max-w-[13ch] font-display text-4xl tracking-[-0.03em] md:text-6xl">
                People who started small.
              </h2>
            </div>
            <Link
              href="/talents"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white/72 transition-colors hover:text-[#e7bc8b]"
            >
              Join the Talent Room
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {stories.map((story) => (
              <article key={story.slug} className="border border-white/10 bg-black/24 p-6">
                <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e7bc8b]">
                  <span>{story.country}</span>
                  <span>{story.tag}</span>
                </div>
                <h3 className="mt-4 font-display text-3xl tracking-[-0.03em] text-white">{story.title}</h3>
                <p className="mt-4 text-sm leading-[1.8] text-white/64">{story.excerpt}</p>
                <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">
                  <span>{story.views.toLocaleString("en-US")} people read this story</span>
                  <span>{story.likes.toLocaleString("en-US")} likes</span>
                  <span>{story.shares.toLocaleString("en-US")} people shared this</span>
                  <span>{story.readTime} min read / {story.publishedAt}</span>
                </div>
                <button className="mt-6 inline-flex h-10 items-center gap-2 border border-white/12 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/64 transition-colors hover:border-[#b8865a] hover:text-white">
                  Share story
                  <Share2 className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}

function Metric({ icon: Icon, label, value }: { icon: typeof Eye; label: string; value: number }) {
  return (
    <div className="border border-white/10 bg-black/24 p-5">
      <Icon className="h-4 w-4 text-[#b8865a]" />
      <p className="mt-3 font-display text-3xl tracking-[-0.03em] text-white">
        {value.toLocaleString("en-US")}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">{label}</p>
    </div>
  );
}
