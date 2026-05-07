import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, FolderOpen, LockKeyhole } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { accessGrantedFolders, publicLibraryFolders } from "@/lib/due-diligence-data";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://olmez.us";

export const metadata: Metadata = {
  title: "Download Center — Ölmez",
  description: "Public library and access-granted files for company, risk, account, distribution, technical, tender, and compliance documents.",
  alternates: { canonical: `${baseUrl}/download-center` },
};

const today = "May 2026";

function FileCard({ name, restricted }: { name: string; restricted?: boolean }) {
  return (
    <article className="border border-gray-300 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        {restricted ? <LockKeyhole className="h-5 w-5 text-[#8b5f3d]" /> : <FolderOpen className="h-5 w-5 text-[#8b5f3d]" />}
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-500">{restricted ? "Restricted" : "Public"}</span>
      </div>
      <h2 className="mt-5 font-display text-2xl tracking-[-0.03em] text-gray-950">{name}</h2>
      <dl className="mt-5 grid gap-2 text-xs text-gray-600">
        <div className="flex justify-between gap-4"><dt>Version</dt><dd>v1.0</dd></div>
        <div className="flex justify-between gap-4"><dt>Updated</dt><dd>{today}</dd></div>
        <div className="flex justify-between gap-4"><dt>Audience</dt><dd>{restricted ? "Approved account" : "Public"}</dd></div>
        <div className="flex justify-between gap-4"><dt>Status</dt><dd>{restricted ? "Access review" : "Available"}</dd></div>
      </dl>
      <Link
        href={restricted ? "/contact?topic=document-access" : "#"}
        className="mt-6 inline-flex h-10 items-center gap-2 border border-gray-300 px-4 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-800"
      >
        {restricted ? "Request access" : "Download"}
        {restricted ? <ArrowRight className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
      </Link>
    </article>
  );
}

export default function DownloadCenterPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-950">
      <Navigation forceScrolled />
      <section className="border-t border-gray-300 px-6 pt-36 pb-20 lg:px-12 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8b5f3d]">Download Center</span>
          <h1 className="mt-7 max-w-[13ch] font-display text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] tracking-[-0.045em]">
            The company must feel documented.
          </h1>
          <p className="mt-7 max-w-[64ch] text-base leading-[1.85] text-gray-600">
            Two libraries only: open public files and access-granted files. Anything restricted requires an account record, document review, and access approval.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-300 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-5xl tracking-[-0.04em]">Public Library</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {publicLibraryFolders.map((folder) => <FileCard key={folder} name={folder} />)}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-300 bg-white px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-5xl tracking-[-0.04em]">Access-Granted Files</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {accessGrantedFolders.map((folder) => <FileCard key={folder} name={folder} restricted />)}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
