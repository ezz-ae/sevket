"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Bell,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  FileText,
  Headphones,
  Home,
  Languages,
  LayoutDashboard,
  Lock,
  Mail,
  MessageSquare,
  ReceiptText,
  Search,
  Settings,
  ShieldCheck,
  Snowflake,
  Sparkles,
  TrendingUp,
  UserCircle2,
  Wallet,
  X,
} from "lucide-react";
import {
  accountPreferences,
  accountSecurity,
  affaremPositions,
  branchSignals,
  dashboardSections,
  distributionLegal,
  inboxThreads,
  investorDocuments,
  kycSteps,
  liveOpsActions,
  mockInvestor,
  overviewActivity,
  overviewAlerts,
  overviewKpis,
  payoutHistory,
  taxProfile,
  walletControls,
  walletRails,
  walletTransactions,
  type DashboardSectionId,
} from "@/lib/investor-dashboard-data";

const sectionIcons: Record<DashboardSectionId, React.ComponentType<{ className?: string }>> = {
  overview: LayoutDashboard,
  wallet: Wallet,
  affarem: ShieldCheck,
  payouts: Banknote,
  documents: FileText,
  messages: MessageSquare,
  kyc: BadgeCheck,
  tax: ReceiptText,
  settings: Settings,
};

export function DashboardApp() {
  const [section, setSection] = useState<DashboardSectionId>("overview");
  const [hideBalances, setHideBalances] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ from: "investor" | "desk"; body: string; time: string }[]>([
    { from: "desk", body: "Hi Alex — investor desk here. How can we help?", time: "09:14" },
  ]);
  const [chatDraft, setChatDraft] = useState("");
  const [navOpen, setNavOpen] = useState(false);

  const masked = (value: string) => (hideBalances ? "•••••" : value);

  const sendMessage = () => {
    if (!chatDraft.trim()) return;
    const stamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setChatMessages((prev) => [
      ...prev,
      { from: "investor", body: chatDraft.trim(), time: stamp },
      {
        from: "desk",
        body: "Thanks — the investor desk will reply within 1 business hour. Live shift agent now reviewing your message.",
        time: stamp,
      },
    ]);
    setChatDraft("");
  };

  return (
    <div className="border border-foreground/10 bg-[#070707] text-white shadow-[0_30px_120px_-20px_rgba(0,0,0,0.55)]">
      {/* Top dashboard chrome */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center border border-white/10 text-white/75"
            onClick={() => setNavOpen((s) => !s)}
            aria-label="Open dashboard menu"
          >
            <LayoutDashboard className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center bg-[#b8865a] font-mono text-[11px] font-semibold text-black">
              ✦
            </span>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">AFFAREM</p>
              <p className="font-display text-base leading-none tracking-[-0.02em]">Investor Dashboard</p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4">
          <div className="hidden md:flex flex-1 max-w-sm items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60">
            <Search className="h-3.5 w-3.5" />
            <input
              className="w-full bg-transparent placeholder-white/35 outline-none"
              placeholder="Search wallet, branches, statements…"
            />
            <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">⌘K</span>
          </div>
          <button
            type="button"
            onClick={() => setHideBalances((s) => !s)}
            className="inline-flex items-center gap-2 border border-white/10 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65 hover:text-white"
            aria-label="Toggle balance visibility"
          >
            {hideBalances ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{hideBalances ? "Show" : "Hide"} balances</span>
          </button>
          <button
            type="button"
            className="relative inline-flex h-9 w-9 items-center justify-center border border-white/10 text-white/65 hover:text-white"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            {mockInvestor.activeAlerts > 0 && (
              <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-[16px] items-center justify-center bg-[#b8865a] px-1 font-mono text-[9px] text-black">
                {mockInvestor.activeAlerts}
              </span>
            )}
          </button>
          <div className="hidden sm:flex items-center gap-2 border border-white/10 px-2 py-1.5">
            <span className="inline-flex h-6 w-6 items-center justify-center bg-white/10 font-mono text-[10px] tracking-wider">
              {mockInvestor.initials}
            </span>
            <div className="leading-tight">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">{mockInvestor.position}</p>
              <p className="text-xs text-white">{mockInvestor.name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside
          className={`${
            navOpen ? "block" : "hidden lg:block"
          } border-r border-white/10 bg-[#080808] px-3 py-4`}
        >
          <nav className="space-y-1">
            {dashboardSections.map((entry) => {
              const Icon = sectionIcons[entry.id];
              const active = section === entry.id;
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => {
                    setSection(entry.id);
                    setNavOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left transition-colors ${
                    active
                      ? "bg-[#b8865a]/15 text-white"
                      : "text-white/65 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon className={`mt-0.5 h-4 w-4 ${active ? "text-[#e9c092]" : "text-white/45"}`} />
                    <div>
                      <p className={`text-sm ${active ? "font-medium" : ""}`}>{entry.label}</p>
                      <p className="mt-0.5 text-[11px] leading-tight text-white/40">{entry.description}</p>
                    </div>
                  </div>
                  <ChevronRight className={`mt-1 h-3.5 w-3.5 ${active ? "text-[#e9c092]" : "text-white/30"}`} />
                </button>
              );
            })}
          </nav>

          <div className="mt-6 border-t border-white/10 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 px-3">Account</p>
            <div className="mt-3 space-y-1">
              <div className="flex items-center justify-between px-3 py-2 text-xs text-white/55">
                <span>Account ID</span>
                <span className="font-mono text-white/85">{mockInvestor.accountId}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 text-xs text-white/55">
                <span>Status</span>
                <span className="text-[#e9c092]">{mockInvestor.status}</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 text-xs text-white/55">
                <span>Joined</span>
                <span className="text-white/85">{mockInvestor.joinDate}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-5 flex w-full items-center justify-center gap-2 border border-white/12 px-3 py-2 text-xs text-white/70 hover:border-white/30 hover:text-white"
          >
            <Lock className="h-3.5 w-3.5" />
            Sign out
          </button>
        </aside>

        {/* Main panel */}
        <div className="min-h-[720px] bg-[#0a0a0a]">
          <PanelHeader section={section} />
          <div className="px-4 py-6 lg:px-7">
            {section === "overview" && <OverviewPanel masked={masked} />}
            {section === "wallet" && <WalletPanel masked={masked} />}
            {section === "affarem" && <AffaremPanel />}
            {section === "payouts" && <PayoutsPanel masked={masked} />}
            {section === "documents" && <DocumentsPanel />}
            {section === "messages" && <MessagesPanel onOpenChat={() => setChatOpen(true)} />}
            {section === "kyc" && <KycPanel />}
            {section === "tax" && <TaxPanel />}
            {section === "settings" && <SettingsPanel />}
          </div>
        </div>
      </div>

      {/* Floating live-chat button + drawer */}
      <button
        type="button"
        onClick={() => setChatOpen(true)}
        className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 bg-[#b8865a] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-black shadow-lg hover:bg-[#d7ad7a]"
      >
        <Headphones className="h-3.5 w-3.5" />
        Live chat
      </button>

      {chatOpen && (
        <div className="fixed bottom-5 right-5 z-40 flex h-[480px] w-[min(360px,92vw)] flex-col border border-white/15 bg-[#0a0a0a] shadow-2xl">
          <header className="flex items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center bg-[#b8865a] font-mono text-[10px] text-black">ID</span>
              <div>
                <p className="text-sm">Investor Desk</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">Online · 2 agents</p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="text-white/60 hover:text-white" aria-label="Close chat">
              <X className="h-4 w-4" />
            </button>
          </header>
          <div className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
            {chatMessages.map((message, index) => (
              <div key={index} className={`flex ${message.from === "investor" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[78%] border px-3 py-2 ${
                    message.from === "investor"
                      ? "border-[#b8865a]/40 bg-[#b8865a]/15 text-white"
                      : "border-white/12 bg-white/[0.04] text-white/85"
                  }`}
                >
                  <p className="text-xs leading-[1.55]">{message.body}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
          <form
            className="flex items-center gap-2 border-t border-white/10 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              value={chatDraft}
              onChange={(event) => setChatDraft(event.target.value)}
              placeholder="Type a message…"
              className="flex-1 border border-white/10 bg-transparent px-3 py-2 text-xs text-white placeholder-white/35 outline-none focus:border-[#b8865a]"
            />
            <button
              type="submit"
              className="inline-flex h-9 items-center gap-2 bg-[#b8865a] px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

function PanelHeader({ section }: { section: DashboardSectionId }) {
  const meta = dashboardSections.find((entry) => entry.id === section);
  if (!meta) return null;
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/10 px-4 py-4 lg:px-7">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">{meta.description}</p>
        <h2 className="mt-1 font-display text-2xl tracking-[-0.02em] text-white">{meta.label}</h2>
      </div>
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
        <Clock className="h-3 w-3" />
        Last sync · just now
      </div>
    </div>
  );
}

function OverviewPanel({ masked }: { masked: (value: string) => string }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewKpis.map((kpi) => (
          <article key={kpi.label} className="border border-white/10 bg-white/[0.02] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{kpi.label}</p>
            <p className="mt-3 font-display text-2xl tracking-[-0.02em] text-white">{masked(kpi.value)}</p>
            <p
              className={`mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] ${
                kpi.deltaTone === "up"
                  ? "text-[#65d6a1]"
                  : kpi.deltaTone === "down"
                  ? "text-[#ff8c8c]"
                  : "text-white/55"
              }`}
            >
              {kpi.deltaTone === "up" && <TrendingUp className="h-3 w-3" />}
              {kpi.deltaTone === "down" && <ArrowDownRight className="h-3 w-3" />}
              {kpi.delta}
            </p>
            <p className="mt-3 text-xs text-white/55">{kpi.hint}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <article className="border border-white/10 bg-[#0d0d0d] p-5">
          <header className="flex items-center justify-between">
            <h3 className="font-display text-lg tracking-[-0.02em]">Activity stream</h3>
            <button className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092] hover:text-white">View all</button>
          </header>
          <ul className="mt-5 divide-y divide-white/5">
            {overviewActivity.map((event) => (
              <li key={event.title} className="flex items-start gap-4 py-3">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center bg-white/[0.04] text-white/60">
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm text-white">{event.title}</p>
                  <p className="text-xs text-white/55">{event.subtitle}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">{event.time}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="border border-white/10 bg-[#0d0d0d] p-5">
          <h3 className="font-display text-lg tracking-[-0.02em]">Alerts</h3>
          <div className="mt-4 space-y-3">
            {overviewAlerts.map((alert) => (
              <div
                key={alert.label}
                className={`border p-4 ${
                  alert.tone === "ok" ? "border-[#1B5E20]/45 bg-[#1B5E20]/10" : "border-[#b8865a]/40 bg-[#b8865a]/10"
                }`}
              >
                <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">
                  {alert.tone === "ok" ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                  {alert.label}
                </p>
                <p className="mt-2 text-xs leading-[1.55] text-white/72">{alert.body}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-7 font-display text-lg tracking-[-0.02em]">Distribution rhythm</h3>
          <div className="mt-3 space-y-2 text-sm text-white/72">
            <div className="flex items-center justify-between border border-white/10 px-3 py-2">
              <span>Tuesday cycle</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">After Mon close + 24h</span>
            </div>
            <div className="flex items-center justify-between border border-white/10 px-3 py-2">
              <span>Friday cycle</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">After Thu close + 24h</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

function WalletPanel({ masked }: { masked: (value: string) => string }) {
  const [activeRail, setActiveRail] = useState(walletRails[0].id);
  const rail = walletRails.find((r) => r.id === activeRail) ?? walletRails[0];

  return (
    <div className="space-y-6">
      {/* Card view */}
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <article className="relative overflow-hidden border border-[#b8865a]/40 bg-gradient-to-br from-[#1a120c] via-[#0e0a07] to-[#0a0a0a] p-6">
          <div className="flex items-center justify-between text-white/85">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]">Ölmez Investor Card</p>
            <CreditCard className="h-5 w-5 text-[#e9c092]" />
          </div>
          <p className="mt-10 font-mono text-base tracking-[0.42em] text-white/90">5238 ••• ••• 4421</p>
          <div className="mt-5 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Balance</p>
              <p className="mt-1 font-display text-3xl tracking-[-0.02em] text-white">{masked("$602.30")}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Holder</p>
              <p className="mt-1 text-sm text-white">{mockInvestor.name}</p>
            </div>
          </div>
          <div className="absolute right-5 bottom-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#e9c092]">Mastercard</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            <button className="inline-flex h-9 items-center gap-2 border border-white/15 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/82 hover:border-[#b8865a] hover:text-white">
              <ArrowUpRight className="h-3 w-3" />
              Send
            </button>
            <button className="inline-flex h-9 items-center gap-2 border border-white/15 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/82 hover:border-[#b8865a] hover:text-white">
              <ArrowDownRight className="h-3 w-3" />
              Top-up
            </button>
            <button className="inline-flex h-9 items-center gap-2 border border-white/15 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/82 hover:border-[#b8865a] hover:text-white">
              <Snowflake className="h-3 w-3" />
              Freeze card
            </button>
          </div>
        </article>

        <article className="border border-white/10 bg-[#0d0d0d] p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Connected rails</p>
          <div className="mt-4 space-y-2">
            {walletRails.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => setActiveRail(entry.id)}
                className={`flex w-full items-center justify-between border px-4 py-3 text-left transition-colors ${
                  entry.id === rail.id
                    ? "border-[#b8865a]/45 bg-[#b8865a]/10 text-white"
                    : "border-white/10 bg-white/[0.02] text-white/70 hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  <p className="text-sm">{entry.name}</p>
                  <p className="mt-1 text-xs text-white/55">{entry.detail}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">{entry.status}</p>
                  <p className="mt-1 text-sm text-white">{masked(entry.balance)}</p>
                </div>
              </button>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/45">
            {distributionLegal}
          </p>
        </article>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <article className="border border-white/10 bg-[#0d0d0d] p-5">
          <header className="flex items-center justify-between">
            <h3 className="font-display text-lg tracking-[-0.02em]">Recent transactions</h3>
            <button className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092] hover:text-white">
              <Download className="h-3 w-3" /> Export CSV
            </button>
          </header>
          <ul className="mt-4 divide-y divide-white/5 text-sm">
            {walletTransactions.map((tx, idx) => (
              <li key={`${tx.date}-${idx}`} className="flex items-center justify-between gap-4 py-3">
                <div>
                  <p className="text-white">{tx.description}</p>
                  <p className="text-xs text-white/45">{tx.date} · {tx.state}</p>
                </div>
                <span
                  className={`font-mono text-[12px] tracking-[0.04em] ${
                    tx.amount.startsWith("+") ? "text-[#65d6a1]" : "text-white/85"
                  }`}
                >
                  {masked(tx.amount)}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <article className="border border-white/10 bg-[#0d0d0d] p-5">
          <h3 className="font-display text-lg tracking-[-0.02em]">Wallet controls</h3>
          <div className="mt-4 space-y-2 text-sm">
            {walletControls.map((control) => (
              <div key={control.label} className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-3 py-2">
                <span className="text-white/68">{control.label}</span>
                <span className="text-right text-white">{control.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/45">
            Card spending is processed through the Ölmez Investor Wallet partner. Limits, regions, and partner availability remain subject to compliance review.
          </p>
        </article>
      </div>
    </div>
  );
}

function AffaremPanel() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-3">
        {affaremPositions.map((position) => (
          <article key={position.id} className="border border-white/10 bg-[#0d0d0d] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">{position.type}</p>
            <h3 className="mt-3 font-display text-xl tracking-[-0.02em] text-white">{position.name}</h3>
            <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/65">
              <div>
                <dt className="text-white/45">Capital</dt>
                <dd className="text-white">{position.capital}</dd>
              </div>
              <div>
                <dt className="text-white/45">Units</dt>
                <dd className="text-white">{position.units}</dd>
              </div>
              <div>
                <dt className="text-white/45">Monthly target</dt>
                <dd className="text-white">{position.monthlyTarget}</dd>
              </div>
              <div>
                <dt className="text-white/45">State</dt>
                <dd className="text-white">{position.status}</dd>
              </div>
            </dl>
            <p className="mt-4 text-xs text-white/55">{position.rotationNote}</p>
            <button className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e9c092] hover:text-white">
              Open file
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </article>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <article className="border border-white/10 bg-[#0d0d0d] p-5">
          <h3 className="font-display text-lg tracking-[-0.02em]">Branch signals — Houston</h3>
          <p className="mt-1 text-xs text-white/55">Live signal panel from the AFFAREM control layer.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {branchSignals.map((signal) => (
              <div key={signal.label} className="border border-white/10 bg-white/[0.02] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{signal.label}</p>
                <p className="mt-2 font-display text-2xl tracking-[-0.02em] text-white">{signal.value}</p>
                <div className="mt-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
                  <span className="text-white/45">{signal.target}</span>
                  <span className={signal.state === "ok" ? "text-[#65d6a1]" : "text-[#e9c092]"}>
                    {signal.state === "ok" ? "On target" : "Tracking"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="border border-white/10 bg-[#0d0d0d] p-5">
          <h3 className="font-display text-lg tracking-[-0.02em]">LiveOps queue</h3>
          <p className="mt-1 text-xs text-white/55">Pending acknowledgements that move the investor file forward.</p>
          <ul className="mt-5 space-y-2">
            {liveOpsActions.map((action) => (
              <li key={action} className="flex items-start justify-between gap-3 border border-white/10 bg-white/[0.02] px-3 py-3">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-[#b8865a]" />
                  <p className="text-sm text-white/82">{action}</p>
                </div>
                <button className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092] hover:text-white">Open</button>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

function PayoutsPanel({ masked }: { masked: (value: string) => string }) {
  return (
    <div className="space-y-5">
      <article className="border border-white/10 bg-[#0d0d0d] p-5">
        <header className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="font-display text-lg tracking-[-0.02em]">Distribution history</h3>
            <p className="mt-1 text-xs text-white/55">Twice-weekly review · Tuesday and Friday cycles.</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/68 hover:text-white">
              <Download className="h-3 w-3" /> Year-end pack
            </button>
            <button className="inline-flex items-center gap-2 border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/68 hover:text-white">
              Filter
            </button>
          </div>
        </header>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
              <tr className="border-b border-white/10">
                <th className="pb-3 pr-4">Date</th>
                <th className="pb-3 pr-4">Source</th>
                <th className="pb-3 pr-4">Gross</th>
                <th className="pb-3 pr-4">Deductions</th>
                <th className="pb-3 pr-4">Net</th>
                <th className="pb-3 pr-4">Rail</th>
                <th className="pb-3">State</th>
              </tr>
            </thead>
            <tbody className="text-white/82">
              {payoutHistory.map((row) => (
                <tr key={row.id} className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white">{row.date}</td>
                  <td className="py-3 pr-4">{row.source}</td>
                  <td className="py-3 pr-4 font-mono">{masked(row.gross)}</td>
                  <td className="py-3 pr-4 font-mono text-white/55">{masked(row.deductions)}</td>
                  <td className="py-3 pr-4 font-mono text-[#65d6a1]">{masked(row.net)}</td>
                  <td className="py-3 pr-4">{row.rail}</td>
                  <td className="py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">{row.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-xs text-white/45">{distributionLegal}</p>
      </article>
    </div>
  );
}

function DocumentsPanel() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {investorDocuments.map((doc) => (
        <article key={doc.id} className="border border-white/10 bg-[#0d0d0d] p-5">
          <div className="flex items-start justify-between">
            <FileText className="h-5 w-5 text-[#e9c092]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">{doc.type}</span>
          </div>
          <h3 className="mt-4 font-display text-lg tracking-[-0.02em] text-white">{doc.title}</h3>
          <p className="mt-3 text-xs text-white/55">Updated {doc.updated} · {doc.size}</p>
          <div className="mt-4 flex items-center gap-2">
            <button className="inline-flex h-9 items-center gap-2 border border-white/12 px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/82 hover:border-[#b8865a] hover:text-white">
              <Download className="h-3 w-3" /> Download
            </button>
            <button className="inline-flex h-9 items-center gap-2 px-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-white">
              View
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

function MessagesPanel({ onOpenChat }: { onOpenChat: () => void }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.4fr]">
      <article className="border border-white/10 bg-[#0d0d0d]">
        <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <h3 className="font-display text-lg tracking-[-0.02em]">Inbox</h3>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">{mockInvestor.unreadMessages} unread</span>
        </header>
        <ul className="divide-y divide-white/5">
          {inboxThreads.map((thread) => (
            <li key={thread.id} className={`flex items-start justify-between gap-3 px-4 py-4 ${thread.unread ? "bg-white/[0.025]" : ""}`}>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm text-white">{thread.subject}</p>
                  {thread.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8865a]" />}
                </div>
                <p className="mt-1 text-xs text-white/55">{thread.from}</p>
                <p className="mt-2 text-xs leading-[1.55] text-white/68">{thread.preview}</p>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">{thread.time}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="border border-white/10 bg-[#0d0d0d] p-5">
        <h3 className="font-display text-lg tracking-[-0.02em]">Open conversation</h3>
        <p className="mt-1 text-xs text-white/55">Reach the investor desk through email channels or the live chat agent.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            { icon: Mail, label: "Investor desk", value: "investors@olmez.us" },
            { icon: Mail, label: "General desk", value: "hello@olmez.us" },
            { icon: Mail, label: "Sevet (founder office)", value: "sevet@olmez.us" },
            { icon: Mail, label: "Government desk", value: "gov@olmez.us" },
            { icon: Mail, label: "People office", value: "people@olmez.us" },
          ].map((entry) => (
            <a
              key={entry.value}
              href={`mailto:${entry.value}`}
              className="flex items-center gap-3 border border-white/10 bg-white/[0.02] p-4 text-sm text-white/82 hover:border-[#b8865a] hover:text-white"
            >
              <entry.icon className="h-4 w-4 text-[#e9c092]" />
              <div>
                <p className="text-white">{entry.label}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/55">{entry.value}</p>
              </div>
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={onOpenChat}
          className="mt-6 inline-flex h-11 items-center gap-2 bg-[#b8865a] px-4 font-mono text-[10px] uppercase tracking-[0.22em] text-black hover:bg-[#d7ad7a]"
        >
          <Headphones className="h-3.5 w-3.5" /> Open live chat
        </button>
      </article>
    </div>
  );
}

function KycPanel() {
  return (
    <div className="space-y-5">
      <article className="border border-white/10 bg-[#0d0d0d] p-5">
        <h3 className="font-display text-lg tracking-[-0.02em]">Identity & accreditation</h3>
        <p className="mt-1 text-xs text-white/55">Each step keeps the investor file usable for distribution and reporting.</p>
        <ul className="mt-5 space-y-3">
          {kycSteps.map((step) => (
            <li key={step.id} className="flex items-center justify-between gap-4 border border-white/10 bg-white/[0.02] px-4 py-3">
              <div className="flex items-start gap-3">
                {step.state === "complete" ? (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#65d6a1]" />
                ) : (
                  <AlertCircle className="mt-0.5 h-4 w-4 text-[#e9c092]" />
                )}
                <div>
                  <p className="text-sm text-white">{step.title}</p>
                  <p className="mt-1 text-xs text-white/55">{step.detail}</p>
                </div>
              </div>
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.18em] ${
                  step.state === "complete" ? "text-[#65d6a1]" : "text-[#e9c092]"
                }`}
              >
                {step.state === "complete" ? "Complete" : "In progress"}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function TaxPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <article className="border border-white/10 bg-[#0d0d0d] p-5">
        <h3 className="font-display text-lg tracking-[-0.02em]">Tax profile</h3>
        <dl className="mt-5 space-y-3 text-sm">
          <div className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-4 py-3">
            <dt className="text-white/55">Jurisdiction</dt>
            <dd className="text-white">{taxProfile.jurisdiction}</dd>
          </div>
          <div className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-4 py-3">
            <dt className="text-white/55">Tax ID</dt>
            <dd className="text-[#e9c092]">{taxProfile.taxId}</dd>
          </div>
          <div className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-4 py-3">
            <dt className="text-white/55">Fiscal year</dt>
            <dd className="text-white">{taxProfile.fiscalYear}</dd>
          </div>
        </dl>
        <button className="mt-5 inline-flex h-10 items-center gap-2 border border-[#b8865a]/45 bg-[#b8865a]/15 px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#e9c092] hover:bg-[#b8865a]/25">
          Add tax reference
        </button>
      </article>
      <article className="border border-white/10 bg-[#0d0d0d] p-5">
        <h3 className="font-display text-lg tracking-[-0.02em]">Statements & exports</h3>
        <ul className="mt-5 space-y-3">
          {taxProfile.exports.map((entry) => (
            <li key={entry.label} className="flex items-center justify-between gap-3 border border-white/10 bg-white/[0.02] px-4 py-3">
              <div>
                <p className="text-sm text-white">{entry.label}</p>
                {entry.note && <p className="mt-1 text-xs text-white/55">{entry.note}</p>}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9c092]">{entry.state}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <article className="border border-white/10 bg-[#0d0d0d] p-5">
        <h3 className="font-display text-lg tracking-[-0.02em]">Personal</h3>
        <dl className="mt-5 space-y-3 text-sm">
          {[
            { label: "Name", value: mockInvestor.name },
            { label: "Country", value: mockInvestor.country },
            { label: "Account ID", value: mockInvestor.accountId },
            { label: "Status", value: mockInvestor.status },
          ].map((entry) => (
            <div key={entry.label} className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-4 py-3">
              <dt className="text-white/55">{entry.label}</dt>
              <dd className="text-white">{entry.value}</dd>
            </div>
          ))}
        </dl>
        <button className="mt-5 inline-flex h-10 items-center gap-2 border border-white/12 px-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/82 hover:border-[#b8865a] hover:text-white">
          <UserCircle2 className="h-3 w-3" /> Edit personal details
        </button>
      </article>
      <article className="border border-white/10 bg-[#0d0d0d] p-5">
        <h3 className="font-display text-lg tracking-[-0.02em]">Security</h3>
        <ul className="mt-5 space-y-3">
          {accountSecurity.map((control) => (
            <li key={control.label} className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-4 py-3">
              <div>
                <p className="text-sm text-white">{control.label}</p>
                <p className="mt-1 text-xs text-white/55">{control.detail}</p>
              </div>
              <span
                className={`inline-flex h-6 items-center px-2 font-mono text-[10px] uppercase tracking-[0.18em] ${
                  control.state === "on" ? "bg-[#1B5E20]/30 text-[#65d6a1]" : "border border-white/15 text-white/55"
                }`}
              >
                {control.state.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </article>
      <article className="border border-white/10 bg-[#0d0d0d] p-5 lg:col-span-2">
        <h3 className="font-display text-lg tracking-[-0.02em]">Preferences</h3>
        <dl className="mt-5 grid gap-3 sm:grid-cols-2">
          {accountPreferences.map((entry) => (
            <div key={entry.label} className="flex items-center justify-between border border-white/10 bg-white/[0.02] px-4 py-3">
              <dt className="text-white/55">{entry.label}</dt>
              <dd className="text-white">{entry.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 flex items-center gap-2 text-xs text-white/45">
          <Languages className="h-3.5 w-3.5 text-[#e9c092]" />
          Language and currency display follow account preferences. Reports are generated in English; Turkish overlays are in pilot.
        </p>
      </article>
    </div>
  );
}
