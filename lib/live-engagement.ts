export type Daypart = "morning" | "afternoon" | "evening" | "late-night";

export type EngagementProfile = {
  views: number;
  likes: number;
  shares: number;
  readTime: number;
  peopleReadingNow: number;
  peopleAcrossOlmez: number;
};

export function getDaypart(hour: number): Daypart {
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 23) return "evening";
  return "late-night";
}

export function getLiveRange(daypart: Daypart) {
  switch (daypart) {
    case "morning":
      return { min: 120, max: 400 };
    case "afternoon":
      return { min: 500, max: 1500 };
    case "evening":
      return { min: 1000, max: 3500 };
    case "late-night":
      return { min: 80, max: 300 };
  }
}

export function stableNumber(seed: string, min: number, max: number) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return min + (hash % (max - min + 1));
}

export function getPeopleOnPage(path: string, hour = new Date().getHours()) {
  const range = getLiveRange(getDaypart(hour));
  return stableNumber(`${path}:${new Date().toDateString()}:${hour}`, range.min, range.max);
}

export function getArticleEngagement(seed: string, readTime: number, sectionNumber = 1): EngagementProfile {
  const views = stableNumber(`views:${seed}`, 6840 + sectionNumber * 420, 18400 + sectionNumber * 620);
  const likes = stableNumber(`likes:${seed}`, 540 + sectionNumber * 45, 2490 + sectionNumber * 70);
  const shares = stableNumber(`shares:${seed}`, 80 + sectionNumber * 18, 430 + sectionNumber * 30);
  const peopleReadingNow = stableNumber(`now:${seed}`, 34 + sectionNumber * 4, 210 + sectionNumber * 9);
  const peopleAcrossOlmez = stableNumber(`network:${seed}`, 421, 1380);

  return {
    views,
    likes,
    shares,
    readTime,
    peopleReadingNow,
    peopleAcrossOlmez,
  };
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}
