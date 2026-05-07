import type { Brand } from "@/lib/brands-data";
import { isTurkishLocale, type SiteLocale } from "@/lib/site-locale";

type LocalizedBrandCopy = {
  tagline: string;
  description: string;
  focusMarket: string;
  headquarters: string;
  keyMetrics: Brand["keyMetrics"];
  operationalFocus: string[];
};

const turkishBrandCopy: Record<string, LocalizedBrandCopy> = {
  olmez: {
    tagline: "Restoran İşletme Altyapısı",
    description:
      "Londra, Edinburgh ve New York gibi merkezlerde kültürel otorite kuran premium Türk restoranları ve ABD pazarında çalışan akaryakıt istasyonu franchise üniteleri.",
    focusMarket: "Küresel (Birleşik Krallık, Avrupa, ABD)",
    headquarters: "Edinburgh, Birleşik Krallık",
    keyMetrics: [
      { label: "Aktif Üniteler", value: "147" },
      { label: "Günlük Kazanç Aralığı", value: "$200–$1,400" },
      { label: "Geri Ödeme Hedefi", value: "30 ay" },
      { label: "Hedefteki Üniteler", value: "72%" },
    ],
    operationalFocus: [
      "Tam Türk Restoranları",
      "Akaryakıt İstasyonu Üniteleri",
      "Operatör Gelişimi",
    ],
  },
  shawarmer: {
    tagline: "ABD Gıda İstasyonu Platformu",
    description:
      "ABD akaryakıt istasyonu altyapısına entegre yüksek verimli shawarma üniteleri. Yakıt duraklarını ölçülebilir gıda dönüşüm noktalarına çeviren hızlı servis istasyonları.",
    focusMarket: "Amerika Birleşik Devletleri",
    headquarters: "New York, ABD",
    keyMetrics: [
      { label: "Aktif Üniteler", value: "42" },
      { label: "Pazarlar", value: "12 eyalet" },
      { label: "Ort. Günlük Kazanç", value: "$450–$950" },
      { label: "Kârlılığa Geçiş", value: "6-8 hafta" },
    ],
    operationalFocus: [
      "Shawarma Hazırlığı",
      "Akaryakıt İstasyonu Entegrasyonu",
      "Envanter Optimizasyonu",
    ],
  },
  turkishpide: {
    tagline: "Akdeniz Fırıncılık Platformu",
    description:
      "Avrupa pazarına odaklanan zanaatkar Türk pide fırın noktaları. Taze üretim ve miras tariflerle premium fırın ürünleri.",
    focusMarket: "Avrupa",
    headquarters: "İstanbul, Türkiye",
    keyMetrics: [
      { label: "Aktif Üniteler", value: "28" },
      { label: "Ülkeler", value: "6" },
      { label: "Ort. Günlük Kazanç", value: "$380–$750" },
      { label: "Uzmanlık", value: "Fırın & Şarküteri" },
    ],
    operationalFocus: [
      "Zanaatkar Fırıncılık",
      "Miras Tarifler",
      "Premium Konumlandırma",
    ],
  },
  affarem: {
    tagline: "Asset Franchise & Field Management",
    description:
      "SevetTeam ekosisteminin iç şube ve franchise yönetim katmanı. Yatırımcıları, operatörleri, tasarımcıları, muhasebeyi, uyumu ve saha performansını tek ölçülebilir işletim ortamında bir araya getirir.",
    focusMarket: "İç Şube ve Franchise Yönetimi",
    headquarters: "Londra, Birleşik Krallık",
    keyMetrics: [
      { label: "Bağlı Üniteler", value: "215" },
      { label: "Çalışma Süresi", value: "99.8%" },
      { label: "Aylık Gelir", value: "$65K+" },
      { label: "Sistem Kapsamı", value: "Yatırımcıdan Sahaya" },
    ],
    operationalFocus: [
      "Şube Yönetimi",
      "Franchise İzleme",
      "Saha Performans Kontrolü",
    ],
  },
  disciplina: {
    tagline: "Operatör Mükemmelliği Eğitimi",
    description:
      "Kapsamlı operatör eğitimi ve gelişim platformu. 1.000-2.000 dolar seviyesinden başlayan katmanlı mikro başlangıç sistemiyle disiplinli vardiya yöneticisi hattı yetiştirir.",
    focusMarket: "Küresel",
    headquarters: "İstanbul, Türkiye",
    keyMetrics: [
      { label: "Program Katılımcıları", value: "180" },
      { label: "Başarı Oranı", value: "94%" },
      { label: "Mezuniyet Oranı", value: "87%" },
      { label: "Ort. İlerleme", value: "8 ay" },
    ],
    operationalFocus: [
      "Operatör Gelişimi",
      "Akıllı Disiplin Eğitimi",
      "Liderlik Hattı",
    ],
  },
};

export function localizeBrand(brand: Brand, locale: SiteLocale): Brand {
  if (!isTurkishLocale(locale)) {
    return brand;
  }

  const localized = turkishBrandCopy[brand.slug];

  if (!localized) {
    return brand;
  }

  return {
    ...brand,
    tagline: localized.tagline,
    description: localized.description,
    focusMarket: localized.focusMarket,
    headquarters: localized.headquarters,
    keyMetrics: localized.keyMetrics,
    operationalFocus: localized.operationalFocus,
  };
}

export function localizeBrands(brands: Brand[], locale: SiteLocale): Brand[] {
  return brands.map((brand) => localizeBrand(brand, locale));
}
