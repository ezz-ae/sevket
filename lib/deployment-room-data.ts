// Investor Deployment Room — data layer for the SHAWARMA TIME unit explorer.
// Powered by AFFAREM. The shapes here are read by the deployment-room page
// and its sub-components.

export type DeploymentStatus = "available" | "under-review" | "reserved" | "deployed";

export interface DeploymentLocation {
  id: string;
  city: string;
  state: string;
  stateCode: string;
  /** xy in 0..100 percentage on a US-map artwork */
  x: number;
  y: number;
  status: DeploymentStatus;
  unitType: "Gas Station Counter" | "Compact Shop" | "Drive-Through Ready";
  setupCost: string;
  expectedDailyNet: string;
  paybackMonths: string;
  investorSlots: number;
  investorSlotsFilled: number;
  operatorModel: "Self-managed" | "Manager-hired" | "SevetTeam LiveOps";
  highlight: string;
}

export const deploymentLocations: DeploymentLocation[] = [
  {
    id: "houston-tx",
    city: "Houston",
    state: "Texas",
    stateCode: "TX",
    x: 53.5,
    y: 78,
    status: "deployed",
    unitType: "Gas Station Counter",
    setupCost: "$165,000",
    expectedDailyNet: "$450 – $1,200",
    paybackMonths: "24 mo target",
    investorSlots: 4,
    investorSlotsFilled: 4,
    operatorModel: "Self-managed",
    highlight: "Reference unit — model corridor performance for the network.",
  },
  {
    id: "orlando-fl",
    city: "Orlando",
    state: "Florida",
    stateCode: "FL",
    x: 75.5,
    y: 80,
    status: "available",
    unitType: "Compact Shop",
    setupCost: "$148,000",
    expectedDailyNet: "$380 – $980",
    paybackMonths: "26 mo target",
    investorSlots: 4,
    investorSlotsFilled: 1,
    operatorModel: "Manager-hired",
    highlight: "I-4 tourist corridor + Disney secondary traffic pattern.",
  },
  {
    id: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    stateCode: "NC",
    x: 75,
    y: 60,
    status: "available",
    unitType: "Gas Station Counter",
    setupCost: "$155,000",
    expectedDailyNet: "$420 – $1,050",
    paybackMonths: "25 mo target",
    investorSlots: 4,
    investorSlotsFilled: 0,
    operatorModel: "SevetTeam LiveOps",
    highlight: "Banking-belt commuter corridor with predictable lunch volume.",
  },
  {
    id: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    stateCode: "IL",
    x: 60,
    y: 40,
    status: "under-review",
    unitType: "Compact Shop",
    setupCost: "$172,000",
    expectedDailyNet: "$500 – $1,300",
    paybackMonths: "23 mo target",
    investorSlots: 4,
    investorSlotsFilled: 2,
    operatorModel: "Manager-hired",
    highlight: "I-90 freight corridor; densest captive lunch market in the deck.",
  },
  {
    id: "las-vegas-nv",
    city: "Las Vegas",
    state: "Nevada",
    stateCode: "NV",
    x: 17,
    y: 53,
    status: "available",
    unitType: "Drive-Through Ready",
    setupCost: "$185,000",
    expectedDailyNet: "$520 – $1,400",
    paybackMonths: "22 mo target",
    investorSlots: 4,
    investorSlotsFilled: 1,
    operatorModel: "SevetTeam LiveOps",
    highlight: "24-hour traffic, late-night premium, drive-through enabled.",
  },
  {
    id: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    stateCode: "AZ",
    x: 22,
    y: 65,
    status: "deployed",
    unitType: "Gas Station Counter",
    setupCost: "$160,000",
    expectedDailyNet: "$430 – $1,050",
    paybackMonths: "25 mo target",
    investorSlots: 4,
    investorSlotsFilled: 4,
    operatorModel: "Self-managed",
    highlight: "Operating reference for the Southwest sun-belt format.",
  },
  {
    id: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    x: 71,
    y: 70,
    status: "reserved",
    unitType: "Compact Shop",
    setupCost: "$152,000",
    expectedDailyNet: "$400 – $1,000",
    paybackMonths: "26 mo target",
    investorSlots: 4,
    investorSlotsFilled: 3,
    operatorModel: "Manager-hired",
    highlight: "Reserved by the second Texas-corridor partner; one seat left.",
  },
  {
    id: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    stateCode: "TX",
    x: 50,
    y: 70,
    status: "available",
    unitType: "Gas Station Counter",
    setupCost: "$158,000",
    expectedDailyNet: "$440 – $1,150",
    paybackMonths: "24 mo target",
    investorSlots: 4,
    investorSlotsFilled: 0,
    operatorModel: "SevetTeam LiveOps",
    highlight: "I-35 sister site to Houston; same supply line, shared coach.",
  },
  {
    id: "tampa-fl",
    city: "Tampa",
    state: "Florida",
    stateCode: "FL",
    x: 73,
    y: 84,
    status: "available",
    unitType: "Compact Shop",
    setupCost: "$145,000",
    expectedDailyNet: "$370 – $920",
    paybackMonths: "27 mo target",
    investorSlots: 4,
    investorSlotsFilled: 1,
    operatorModel: "Manager-hired",
    highlight: "Coastal tourist + commuter mix; slower ramp, stable plateau.",
  },
  {
    id: "nashville-tn",
    city: "Nashville",
    state: "Tennessee",
    stateCode: "TN",
    x: 65,
    y: 58,
    status: "under-review",
    unitType: "Drive-Through Ready",
    setupCost: "$170,000",
    expectedDailyNet: "$460 – $1,150",
    paybackMonths: "24 mo target",
    investorSlots: 4,
    investorSlotsFilled: 0,
    operatorModel: "SevetTeam LiveOps",
    highlight: "Freight + leisure overlay; drive-through pilot for the Mid-South.",
  },
];

export const statusMeta: Record<DeploymentStatus, { label: string; color: string; pulse: boolean }> = {
  available: { label: "Invest", color: "#1B5E20", pulse: true },
  "under-review": { label: "Under Review", color: "#D4A574", pulse: false },
  reserved: { label: "In Process", color: "#2E5C7F", pulse: false },
  deployed: { label: "Open Soon", color: "#8B3A3A", pulse: false },
};

// ─── Unit Viewer Hotspots ──────────────────────────────────────────────────

export type HotspotKind =
  | "counter"
  | "kitchen"
  | "storage"
  | "team"
  | "traffic"
  | "branding"
  | "exterior";

export interface UnitHotspot {
  id: string;
  kind: HotspotKind;
  /** xy in 0..100 percent inside the master unit photo */
  x: number;
  y: number;
  title: string;
  oneLine: string;
  body: string;
  metrics: { label: string; value: string }[];
  affaremNote: string;
}

export const unitHotspots: UnitHotspot[] = [
  {
    id: "front-counter",
    kind: "counter",
    x: 38,
    y: 60,
    title: "Front Counter",
    oneLine: "This is where money is made.",
    body:
      "POS placement, menu legibility, and a tight upsell lane are tuned for fuel-stop dwell time. Average ticket sits in the $11–$18 range with combo upsell on more than half of orders.",
    metrics: [
      { label: "Average ticket", value: "$11 – $18" },
      { label: "Peak windows", value: "11:30 – 14:30 / 18:00 – 22:00" },
      { label: "Upsell hit rate", value: "52% combos" },
      { label: "POS provider", value: "AFFAREM-linked terminal" },
    ],
    affaremNote: "Every ticket logs into AFFAREM in real time — no daily reconciliation gap.",
  },
  {
    id: "kitchen-line",
    kind: "kitchen",
    x: 56,
    y: 38,
    title: "Kitchen Line",
    oneLine: "Controlled production, not chaos.",
    body:
      "A vertical broiler, prep table, grill, and packaging station are sequenced for line-of-sight throughput. Capacity tops out at ~450 wraps/day on the standard format with two on the line.",
    metrics: [
      { label: "Vertical broiler cost", value: "$4,500 – $9,000" },
      { label: "Daily capacity", value: "200 – 450 wraps" },
      { label: "Maintenance cycle", value: "Monthly" },
      { label: "Yield target", value: "≥ 92% protein utilisation" },
    ],
    affaremNote: "Equipment scoring lives inside AFFAREM with monthly preventive checks logged.",
  },
  {
    id: "storage-area",
    kind: "storage",
    x: 78,
    y: 35,
    title: "Storage Area",
    oneLine: "Stock control is margin control.",
    body:
      "Walk-in and dry storage are sized to the corridor demand curve. Stock counts are taken twice daily and synced to AFFAREM; waste over the 5% line triggers a LiveOps reset.",
    metrics: [
      { label: "Inventory cycle", value: "Twice-daily count" },
      { label: "Waste ceiling", value: "≤ 5%" },
      { label: "Supplier model", value: "Sevet Global Market preferred" },
      { label: "Cold chain audit", value: "Weekly LiveOps" },
    ],
    affaremNote: "Inventory variance posts to the Investor Account before the next distribution.",
  },
  {
    id: "team",
    kind: "team",
    x: 18,
    y: 52,
    title: "Staff Zone",
    oneLine: "People run this — not fantasy.",
    body:
      "A standard counter unit needs two to four crew per shift, plus a captain on the lead shift. The investor either takes the captain seat or pays a hired manager line item against the model.",
    metrics: [
      { label: "Crew per shift", value: "2 – 4" },
      { label: "Lead role", value: "Branch captain" },
      { label: "Daily labour cost", value: "$310 – $640" },
      { label: "Manager option", value: "Required if investor is passive" },
    ],
    affaremNote: "Smart Discipline scores update per shift — captains see their score before close.",
  },
  {
    id: "gas-station-traffic",
    kind: "traffic",
    x: 12,
    y: 80,
    title: "Gas Station Traffic",
    oneLine: "The traffic is already here.",
    body:
      "Each location is selected against pump throughput, captive-traffic share, and visibility from the forecourt. We do not build demand — we convert flow that has already stopped.",
    metrics: [
      { label: "Pump throughput", value: "1.2M – 1.8M gal / yr" },
      { label: "Captive food share", value: "55 – 70%" },
      { label: "Daily car count", value: "1,800 – 3,400" },
      { label: "Entrance angle audit", value: "Pre-validated by site team" },
    ],
    affaremNote: "Traffic-to-ticket conversion is reported weekly to the investor desk.",
  },
  {
    id: "branding",
    kind: "branding",
    x: 86,
    y: 70,
    title: "Branding View",
    oneLine: "One language, every surface.",
    body:
      "Signage, menu screens, packaging, and uniforms are all tuned to the SHAWARMA TIME / Ölmez system. The unit reads as part of an institutional network from the first glance.",
    metrics: [
      { label: "Signage scope", value: "Façade · canopy · drive lane" },
      { label: "Menu format", value: "Digital screens · printed backup" },
      { label: "Uniform set", value: "Branded apron · cap · lanyard" },
      { label: "Brand audit", value: "Quarterly LiveOps" },
    ],
    affaremNote: "Brand audits are scored and stored in the unit's AFFAREM file.",
  },
];

// ─── Six-Phase Deployment Timeline ─────────────────────────────────────────

export interface DeploymentPhase {
  number: number;
  title: string;
  duration: string;
  body: string;
  steps: string[];
}

export const deploymentPhases: DeploymentPhase[] = [
  {
    number: 1,
    title: "Opportunity Review",
    duration: "Week 0 – 2",
    body: "Investor signs the inspection NDA and reviews the unit dossier with the desk.",
    steps: [
      "Location selected from the deployment map",
      "Gas station agreement reviewed",
      "Traffic estimate and captive share checked",
      "Investor model selected (starter / operator / growth)",
      "Initial cost range confirmed",
    ],
  },
  {
    number: 2,
    title: "Design & Approval",
    duration: "Week 2 – 5",
    body: "The unit is laid out, costed, and approved against the SHAWARMA TIME system spec.",
    steps: [
      "Shop layout and counter design",
      "Menu board and signage approval",
      "Equipment list locked",
      "Team structure approved",
      "AFFAREM control layer provisioned",
    ],
  },
  {
    number: 3,
    title: "Build & Setup",
    duration: "Week 5 – 11",
    body: "Construction, equipment install, and the brand build-out happen on a single coordinated track.",
    steps: [
      "Construction and millwork",
      "Kitchen equipment installation",
      "Branding and façade installation",
      "POS, CCTV, and AFFAREM hardware setup",
      "Inventory load and supplier onboarding",
      "Team hiring and contracts",
    ],
  },
  {
    number: 4,
    title: "Training",
    duration: "Week 11 – 13",
    body: "DISCIPLINA runs the operator certification on the live unit before any customer is served.",
    steps: [
      "Food preparation masterclass",
      "Customer service standards",
      "Opening / closing checklists",
      "Hygiene and cold-chain discipline",
      "Cash and AFFAREM reporting",
      "Smart Discipline Score baseline",
    ],
  },
  {
    number: 5,
    title: "Soft Launch",
    duration: "Week 13 – 15",
    body: "The unit opens with a limited menu and controlled hours so the team and the system stabilise together.",
    steps: [
      "Limited menu live",
      "Controlled hours and capacity",
      "Daily branch report posted to investors",
      "Customer feedback loop open",
      "Waste and labour review every 48 hours",
      "Captain-led team correction",
    ],
  },
  {
    number: 6,
    title: "Full Launch",
    duration: "Week 15 onward",
    body: "Marketing activation goes live and the unit enters the AFFAREM steady-state cadence.",
    steps: [
      "Marketing activation across local channels",
      "Google Maps and review-platform setup",
      "Local advertising spend live",
      "Opening event with corridor partners",
      "LiveOps monitoring on permanent rotation",
      "Twice-weekly investor distribution active",
    ],
  },
];

// ─── Investor Calculator Defaults ──────────────────────────────────────────

export interface CalculatorScenario {
  id: "conservative" | "expected" | "strong";
  label: string;
  dailyNet: number;
  uplift: string;
}

export const calculatorScenarios: CalculatorScenario[] = [
  {
    id: "conservative",
    label: "Conservative",
    dailyNet: 200,
    uplift: "Slow ramp, weak corridor, soft season",
  },
  {
    id: "expected",
    label: "Expected",
    dailyNet: 500,
    uplift: "Class A baseline — the planning case",
  },
  {
    id: "strong",
    label: "Strong",
    dailyNet: 1400,
    uplift: "Flagship corridor, strong captain, peak season",
  },
];

// ─── Starter Investment Ladder & Four-Investor Model ──────────────────────

export interface StarterTier {
  id: "starter-5k" | "starter-10k" | "starter-25k" | "full-seat";
  amount: string;
  label: string;
  body: string;
  responsibility: string;
  upgradePath: string;
}

export const starterLadder: StarterTier[] = [
  {
    id: "starter-5k",
    amount: "$5,000",
    label: "Inspection Position",
    body: "The smallest entry that still grants AFFAREM read access for one operating unit, twice-weekly distribution, and a learning seat in the branch group.",
    responsibility: "Read-only. No operating role. Eligible to upgrade after one full distribution cycle.",
    upgradePath: "→ $10K micro-stake or $25K co-seat after observing two distribution cycles.",
  },
  {
    id: "starter-10k",
    amount: "$10,000",
    label: "Micro-Stake",
    body: "A meaningful starter share. AFFAREM read + branch group voting + twice-weekly distribution. Still no operating role required.",
    responsibility: "Vote in branch-group decisions. Receive performance briefings.",
    upgradePath: "→ $25K co-seat or upgrade to the full $30K investor seat.",
  },
  {
    id: "starter-25k",
    amount: "$25,000",
    label: "Co-Seat",
    body: "Half of a full investor seat. Suitable for partners or first-time investors stepping into the four-investor structure together.",
    responsibility: "Shared seat with a vetted co-investor. Joint LiveOps briefings.",
    upgradePath: "→ Convert to a full $30K seat as soon as one opens.",
  },
  {
    id: "full-seat",
    amount: "$30,000",
    label: "Full Investor Seat",
    body: "One of the four-investor seats in a unit. Choice of three operating models — shift manager, hired manager, or LiveOps-controlled passive seat.",
    responsibility: "Active or LiveOps-supervised. Full AFFAREM file access.",
    upgradePath: "→ Reinvest into the next deployment unit when this one stabilises.",
  },
];

export interface InvestorRole {
  id: "investor-shift-manager" | "investor-hired-manager" | "investor-liveops";
  title: string;
  body: string;
  fit: string;
}

export const investorRoles: InvestorRole[] = [
  {
    id: "investor-shift-manager",
    title: "Investor + Shift Manager",
    body: "You hold a seat and you run a shift. Your Smart Discipline Score is part of your investor record.",
    fit: "First-generation operators who want hands-on control of the asset.",
  },
  {
    id: "investor-hired-manager",
    title: "Investor + Hired Manager",
    body: "You hold a seat and pay for a vetted manager to cover the operating responsibility on your behalf.",
    fit: "Investors who want operational accountability without on-floor work.",
  },
  {
    id: "investor-liveops",
    title: "Passive + LiveOps Control",
    body: "Approved only after SevetTeam vets the manager and the LiveOps monitoring layer is fully provisioned.",
    fit: "Capital-only partners; subject to approval, not the default route.",
  },
];

// ─── AFFAREM Investor Account preview ─────────────────────────────────────

// ─── Turkish overlays (UI-facing strings) ─────────────────────────────────

export function localizeStatus(status: DeploymentStatus, isTurkish: boolean): string {
  if (!isTurkish) return statusMeta[status].label;
  const map: Record<DeploymentStatus, string> = {
    available: "Yatır",
    "under-review": "İncelemede",
    reserved: "Süreçte",
    deployed: "Yakında Açılıyor",
  };
  return map[status];
}

export function localizePhase(phase: DeploymentPhase, isTurkish: boolean): { title: string; duration: string; body: string; steps: string[] } {
  if (!isTurkish) return { title: phase.title, duration: phase.duration, body: phase.body, steps: phase.steps };
  const overlays: Record<number, { title: string; duration: string; body: string; steps: string[] }> = {
    1: {
      title: "Fırsat İncelemesi",
      duration: "Hafta 0 – 2",
      body: "Yatırımcı inceleme NDA'sını imzalar ve masayla birlikte ünite dosyasını gözden geçirir.",
      steps: [
        "Lokasyon konuşlandırma haritasından seçilir",
        "Akaryakıt istasyonu sözleşmesi gözden geçirilir",
        "Trafik tahmini ve sabit müşteri payı kontrol edilir",
        "Yatırımcı modeli seçilir (başlangıç / operatör / büyüme)",
        "İlk maliyet aralığı doğrulanır",
      ],
    },
    2: {
      title: "Tasarım ve Onay",
      duration: "Hafta 2 – 5",
      body: "Ünite, SHAWARMA TIME sistem standardına göre yerleşim ve maliyet düzeyinde onaylanır.",
      steps: [
        "Mağaza yerleşimi ve tezgâh tasarımı",
        "Menü panosu ve tabela onayı",
        "Ekipman listesi sabitlenir",
        "Ekip yapısı onaylanır",
        "AFFAREM kontrol katmanı kurulur",
      ],
    },
    3: {
      title: "İnşaat ve Kurulum",
      duration: "Hafta 5 – 11",
      body: "Yapım, ekipman montajı ve marka uygulaması koordineli tek hat üzerinde ilerler.",
      steps: [
        "Yapım ve mobilya işleri",
        "Mutfak ekipmanı kurulumu",
        "Marka ve cephe uygulaması",
        "POS, CCTV ve AFFAREM donanım kurulumu",
        "Stok yüklemesi ve tedarikçi entegrasyonu",
        "Ekip işe alımı ve sözleşmeler",
      ],
    },
    4: {
      title: "Eğitim",
      duration: "Hafta 11 – 13",
      body: "DISCIPLINA, müşteri kabul edilmeden önce canlı ünitede operatör sertifikasyonunu yürütür.",
      steps: [
        "Yemek hazırlama ustaöğretici eğitimi",
        "Müşteri hizmeti standartları",
        "Açılış / kapanış kontrol listeleri",
        "Hijyen ve soğuk zincir disiplini",
        "Kasa ve AFFAREM raporlaması",
        "Smart Discipline Score temel ölçümü",
      ],
    },
    5: {
      title: "Yumuşak Açılış",
      duration: "Hafta 13 – 15",
      body: "Ünite sınırlı menü ve kontrollü saatlerle açılır; ekip ve sistem birlikte stabilize olur.",
      steps: [
        "Sınırlı menü canlı",
        "Kontrollü saatler ve kapasite",
        "Yatırımcılara günlük şube raporu",
        "Müşteri geri bildirim döngüsü açık",
        "Her 48 saatte fire ve işgücü incelemesi",
        "Şube kaptanı liderliğinde ekip düzeltmesi",
      ],
    },
    6: {
      title: "Tam Açılış",
      duration: "Hafta 15 ve sonrası",
      body: "Pazarlama aktivasyonu canlı yayına geçer; ünite AFFAREM'in kalıcı ritmine girer.",
      steps: [
        "Yerel kanallarda pazarlama aktivasyonu",
        "Google Maps ve değerlendirme platformları kurulumu",
        "Yerel reklam harcaması başlar",
        "Koridor ortaklarıyla açılış etkinliği",
        "Kalıcı LiveOps izlemesi",
        "Haftada iki kez yatırımcı dağıtımı aktif",
      ],
    },
  };
  return overlays[phase.number];
}

export function localizeStarterTier(tier: StarterTier, isTurkish: boolean): { label: string; body: string; responsibility: string; upgradePath: string } {
  if (!isTurkish) return { label: tier.label, body: tier.body, responsibility: tier.responsibility, upgradePath: tier.upgradePath };
  const overlays: Record<StarterTier["id"], { label: string; body: string; responsibility: string; upgradePath: string }> = {
    "starter-5k": {
      label: "İnceleme Pozisyonu",
      body: "Bir operasyonel ünite için AFFAREM okuma erişimi, haftada iki kez dağıtım ve şube grubunda öğrenme koltuğu sağlayan en küçük giriş.",
      responsibility: "Sadece okuma. Operasyonel rol yok. Bir tam dağıtım döngüsünden sonra yükseltmeye uygun.",
      upgradePath: "→ İki dağıtım döngüsünü gözlemledikten sonra $10K mikro-pay veya $25K eş-koltuk.",
    },
    "starter-10k": {
      label: "Mikro Pay",
      body: "Anlamlı bir başlangıç payı. AFFAREM okuma + şube grubu oylaması + haftada iki kez dağıtım. Operasyonel rol yine zorunlu değil.",
      responsibility: "Şube grubu kararlarında oy hakkı. Performans brifingleri.",
      upgradePath: "→ $25K eş-koltuk veya tam $30K yatırımcı koltuğuna yükseltme.",
    },
    "starter-25k": {
      label: "Eş-Koltuk",
      body: "Tam bir yatırımcı koltuğunun yarısı. Dört yatırımcılı yapıya birlikte adım atan ortaklar veya ilk kez yatırım yapanlar için uygundur.",
      responsibility: "Doğrulanmış bir eş-yatırımcı ile paylaşılan koltuk. Ortak LiveOps brifingleri.",
      upgradePath: "→ Bir koltuk açıldığında tam $30K koltuğa dönüştürün.",
    },
    "full-seat": {
      label: "Tam Yatırımcı Koltuğu",
      body: "Bir ünitedeki dört yatırımcı koltuğundan biri. Üç işletim modeli arasında seçim — vardiya yöneticisi, profesyonel yönetici veya LiveOps kontrollü pasif koltuk.",
      responsibility: "Aktif veya LiveOps denetimli. Tam AFFAREM dosya erişimi.",
      upgradePath: "→ Bu ünite stabil hale geldiğinde sıradaki konuşlandırma ünitesine yeniden yatırım yapın.",
    },
  };
  return overlays[tier.id];
}

export function localizeInvestorRole(role: InvestorRole, isTurkish: boolean): { title: string; body: string; fit: string } {
  if (!isTurkish) return { title: role.title, body: role.body, fit: role.fit };
  const overlays: Record<InvestorRole["id"], { title: string; body: string; fit: string }> = {
    "investor-shift-manager": {
      title: "Yatırımcı + Vardiya Yöneticisi",
      body: "Bir koltuk tutarsınız ve bir vardiyayı yönetirsiniz. Smart Discipline Score'unuz yatırımcı dosyanızın bir parçasıdır.",
      fit: "Varlığın doğrudan kontrolünü isteyen birinci kuşak operatörler.",
    },
    "investor-hired-manager": {
      title: "Yatırımcı + Profesyonel Yönetici",
      body: "Bir koltuk tutar ve operasyonel sorumluluğu sizin adınıza üstlenecek doğrulanmış bir yöneticiyi tutarsınız.",
      fit: "Saha üstünde çalışmadan operasyonel hesap verebilirlik isteyen yatırımcılar.",
    },
    "investor-liveops": {
      title: "Pasif + LiveOps Kontrolü",
      body: "Yalnızca SevetTeam yöneticiyi onayladıktan ve LiveOps izleme katmanı tam olarak kurulduktan sonra onaylanır.",
      fit: "Sadece sermaye ortakları; varsayılan rota değil, onaya tabidir.",
    },
  };
  return overlays[role.id];
}

export function localizeHotspotTitle(hotspotId: string, isTurkish: boolean): string {
  if (!isTurkish) {
    const h = unitHotspots.find((u) => u.id === hotspotId);
    return h?.title ?? hotspotId;
  }
  const overlays: Record<string, string> = {
    "front-counter": "Ön Tezgâh",
    "kitchen-line": "Mutfak Hattı",
    "storage-area": "Depo Alanı",
    team: "Ekip Bölgesi",
    "gas-station-traffic": "Akaryakıt İstasyonu Trafiği",
    branding: "Marka Görünümü",
  };
  return overlays[hotspotId] ?? hotspotId;
}

export const affaremPreview = {
  ledgerLines: [
    { label: "Daily branch sales", note: "Live" },
    { label: "Cost of goods sold", note: "Recorded per shift" },
    { label: "Staff cost", note: "Per shift" },
    { label: "Rent / station share", note: "Daily accrual" },
    { label: "Management cost", note: "Per agreement" },
    { label: "Platform / LiveOps fees", note: "Per service tier" },
    { label: "Reserve deduction", note: "Branch reserve fund" },
    { label: "Net distributable amount", note: "Cycle close" },
    { label: "Investor share %", note: "Per cap table" },
    { label: "Distribution history", note: "Twice weekly" },
  ],
  distributionDays: [
    {
      day: "Tuesday Distribution",
      window: "Covers Friday – Monday activity",
      timing: "After Monday close + 24h reconciliation",
    },
    {
      day: "Friday Distribution",
      window: "Covers Tuesday – Thursday activity",
      timing: "After Thursday close + 24h reconciliation",
    },
  ],
  legalLine:
    "Distributions are reviewed and released after sales reconciliation, operating costs, branch reserves, management fees, and applicable deductions. No fixed return is implied or guaranteed; payouts follow actual unit performance.",
};
