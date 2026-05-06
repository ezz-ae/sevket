export const olmezBrandAssets = {
  logos: {
    copper: {
      src: "/brand-library/olmez-logo-color.png",
      alt: "Ölmez copper wordmark",
    },
    white: {
      src: "/brand-library/olmez-logo-white.png",
      alt: "Ölmez white wordmark",
    },
  },
  images: {
    office: {
      src: "/brand-library/olmez-main-office.png",
      alt: "Ölmez main office and reception environment",
    },
    fleet: {
      src: "/brand-library/olmez-us.png",
      alt: "Ölmez fleet positioned outside a flagship building",
    },
    peopleEvent: {
      src: "/brand-library/people-event-at-olemz.png",
      alt: "Ölmez annual team gathering and people event",
    },
    achievementsWall: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-1.png",
      alt: "Ölmez achievements editorial wall",
    },
    treePlanting: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-58-pm-2.png",
      alt: "Ölmez tree planting program in action",
    },
    studentSupport: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-58-pm-3.png",
      alt: "Ölmez student sponsorship and school supply support",
    },
    villageEducation: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-58-pm-4.png",
      alt: "Ölmez village education campaign session in Turkey",
    },
    paidInternship: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-58-pm-5.png",
      alt: "Ölmez paid hospitality internship program",
    },
    turkishChef: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-6.png",
      alt: "The Turkish Chef sponsorship concept for Ölmez",
    },
    chefCampaign: {
      src: "/brand-library/chatgpt-image-may-6-2026-03-47-58-pm-6.png",
      alt: "Editorial artwork for The Turkish Chef sponsorship",
    },
    hospitalityTraining: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-5.png",
      alt: "Ölmez hospitality and service training briefing",
    },
    networking: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-7.png",
      alt: "Ölmez business networking and event scene",
    },
    reception: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-45-pm-8.png",
      alt: "Ölmez reception and office interior",
    },
    folderTimeline: {
      src: "/brand-library/olmez-image-may-6-2026-03-47-58-pm-1.png",
      alt: "Ölmez achievements archive and annual timeline artwork",
    },
  },
  portraits: {
    rosette: {
      src: "/brand-library/chatgpt-image-may-6-2026-03-50-29-pm-1.png",
      alt: "Rosette Samoan portrait",
    },
    adnan: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-2.png",
      alt: "Adnan Ahmet portrait",
    },
    annabel: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-3.png",
      alt: "Annabel Komar portrait",
    },
    dahger: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-4.png",
      alt: "Dahger Ölmez portrait",
    },
    aliya: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-5.png",
      alt: "Aliya Mansoury Raof portrait",
    },
    ray: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-6.png",
      alt: "Ray Walker portrait",
    },
    marrow: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-7.png",
      alt: "Marrow Rehab portrait",
    },
    azim: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-8.png",
      alt: "Dr. Azim Abdullah portrait",
    },
    servet: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-9.png",
      alt: "Servet Ölmez portrait",
    },
    luellen: {
      src: "/brand-library/olmez-image-may-6-2026-03-50-29-pm-10.png",
      alt: "Luellen Magoob portrait",
    },
  },
  editorial: [
    {
      id: "mid-2026",
      src: "/brand-library/olmez-mid-2026.png",
      alt: "Ölmez Mid 2026 Issue 12 cover",
    },
    {
      id: "issue-11",
      src: "/brand-library/mag-26-olmez.jpg",
      alt: "Ölmez Building the Next Business Standard cover",
    },
    {
      id: "issue-10",
      src: "/brand-library/magazaine-mid26.jpg",
      alt: "Ölmez Edinburgh to New York cover",
    },
    {
      id: "issue-08",
      src: "/brand-library/olmez-business-review-issue-08.png",
      alt: "Ölmez Business Review Issue 08 cover",
    },
  ],
} as const;

export const olmezEditorialCoverMap = Object.fromEntries(
  olmezBrandAssets.editorial.map((cover) => [cover.src, cover])
) as Record<string, (typeof olmezBrandAssets.editorial)[number]>;
