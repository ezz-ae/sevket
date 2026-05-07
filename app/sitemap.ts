import { MetadataRoute } from 'next'
import { achievementYears } from '@/lib/achievements-data'
import { leadershipProfiles } from '@/lib/leadership-data'
import { brands } from '@/lib/brands-data'
import { articles } from '@/lib/magazine-data'
import { opportunities as marketplaceFilings } from '@/lib/marketplace-data'
import { deploymentLocations } from '@/lib/deployment-room-data'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://olmez.us'

const localizedPrefixes = ['', '/tr'] as const

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

interface CorePage {
  path: string
  priority: number
  changeFrequency: ChangeFrequency
  /** Skip generating localized variants (e.g. for legal docs) */
  noLocale?: boolean
}

const corePages: CorePage[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/founder', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/company-profile', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/brands', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/investors', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/investors/dashboard', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/investor-responsibility', priority: 0.86, changeFrequency: 'monthly' },
  { path: '/risk-management', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/accounts-documentation', priority: 0.88, changeFrequency: 'weekly' },
  { path: '/affarem-academy', priority: 0.82, changeFrequency: 'weekly' },
  { path: '/junior-investor-program', priority: 0.92, changeFrequency: 'weekly' },
  { path: '/download-center', priority: 0.88, changeFrequency: 'weekly' },
  { path: '/tax-reporting', priority: 0.84, changeFrequency: 'monthly' },
  { path: '/regulatory-holding', priority: 0.78, changeFrequency: 'monthly' },
  { path: '/allocation-options', priority: 0.78, changeFrequency: 'monthly' },
  { path: '/opportunities', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/deployment-room', priority: 0.97, changeFrequency: 'weekly' },
  { path: '/partners-supply', priority: 0.82, changeFrequency: 'weekly' },
  { path: '/open-tenders', priority: 0.82, changeFrequency: 'weekly' },
  { path: '/reports', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/filing', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/auditing', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/analytics', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/achievements', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/magazine', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/people', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/talents', priority: 0.78, changeFrequency: 'weekly' },
  { path: '/stories', priority: 0.78, changeFrequency: 'weekly' },
  { path: '/people/leadership', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/social-responsibility', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/social-responsibility/global-funding', priority: 0.72, changeFrequency: 'monthly' },
  { path: '/sevet-project', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/events', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/legal/privacy', priority: 0.4, changeFrequency: 'yearly', noLocale: true },
  { path: '/legal/terms', priority: 0.4, changeFrequency: 'yearly', noLocale: true },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  // Core pages with locale variants
  for (const page of corePages) {
    const prefixes = page.noLocale ? [''] : localizedPrefixes
    for (const prefix of prefixes) {
      const path = page.path === '/' ? (prefix || '/') : `${prefix}${page.path}`
      entries.push({
        url: `${baseUrl}${path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: prefix === '' ? page.priority : Math.max(page.priority - 0.1, 0.4),
      })
    }
  }

  // Brand portals (per brand × per locale)
  for (const brand of brands) {
    for (const prefix of localizedPrefixes) {
      entries.push({
        url: `${baseUrl}${prefix}/brands/${brand.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: prefix === '' ? 0.85 : 0.75,
      })
      for (const sub of ['reports', 'events', 'magazine'] as const) {
        entries.push({
          url: `${baseUrl}${prefix}/brands/${brand.slug}/${sub}`,
          lastModified: now,
          changeFrequency: 'monthly',
          priority: prefix === '' ? 0.7 : 0.6,
        })
      }
    }
  }

  // Magazine articles
  for (const article of articles) {
    entries.push({
      url: `${baseUrl}/magazine/${article.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.65,
    })
  }

  // Filings (corridor opportunities)
  for (const f of marketplaceFilings) {
    entries.push({
      url: `${baseUrl}/filing/${f.code}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  // Deployment-room deep-link anchors are part of the same URL; the page is
  // already in corePages, so no per-location entry is required.
  void deploymentLocations

  // Leadership profiles
  for (const profile of leadershipProfiles) {
    entries.push({
      url: `${baseUrl}/people/leadership/${profile.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  }

  // Achievement archives
  for (const year of achievementYears) {
    entries.push({
      url: `${baseUrl}/achievements/${year.year}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.55,
    })
  }

  return entries
}
