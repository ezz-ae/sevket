const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://olmez.us'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ölmez Franchise Systems',
  alternateName: ['Olmez', 'Ölmez Franchise'],
  description: 'Restaurant franchise systems and infrastructure for disciplined food business operations.',
  url: baseUrl,
  logo: `${baseUrl}/olmez-full-logo.svg`,
  image: `${baseUrl}/og-image.png`,
  sameAs: [
    'https://www.linkedin.com/company/olmez-franchise-systems',
    'https://twitter.com/olmez_franchise',
  ],
  founder: {
    '@type': 'Person',
    name: 'Şevketullah Ölmez',
    givenName: 'Şevketullah',
    familyName: 'Ölmez',
    birthDate: '1988-10-12',
    birthPlace: 'Ankara, Turkey',
  },
  foundingDate: '2021',
  foundingLocation: 'Edinburgh, Scotland',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'UK',
    addressLocality: 'Edinburgh',
    addressRegion: 'Scotland',
    streetAddress: 'Filing IV',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Business Development',
    telephone: '+44-000-0000000',
    email: 'info@olmez.franchise.systems',
  },
  areaServed: ['US', 'UK', 'Turkey'],
  knowsAbout: [
    'Restaurant Franchise',
    'Food Business Infrastructure',
    'Operational Management',
    'Franchise Systems',
    'Business Discipline Score',
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ölmez Franchise Systems',
  image: `${baseUrl}/og-image.png`,
  description: 'Restaurant franchise infrastructure and operations.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Filing IV',
    addressLocality: 'Edinburgh',
    addressRegion: 'Scotland',
    postalCode: 'EH1 3AA',
    addressCountry: 'UK',
  },
  telephone: '+44-000-0000000',
  url: baseUrl,
  sameAs: [
    'https://www.linkedin.com/company/olmez-franchise-systems',
    'https://twitter.com/olmez_franchise',
  ],
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})

export const articleSchema = (data: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  url: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: data.headline,
  description: data.description,
  image: data.image,
  datePublished: data.datePublished,
  dateModified: data.dateModified,
  author: {
    '@type': 'Person',
    name: data.author,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': data.url,
  },
})

export const deploymentRoomSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Shawarma Time Investor Deployment Room',
  alternateName: ['Investor Deployment Room', 'Starter Investment Room'],
  description:
    'A controlled, online inspection room where qualified investors can review SHAWARMA TIME gas-station restaurant units before deployment — from the US opportunity map and unit hotspots to financial overlay, six-phase timeline, calculator, and AFFAREM Investor Reporting with twice-weekly distribution.',
  url: `${baseUrl}/deployment-room`,
  serviceType: 'Investor inspection and deployment platform',
  provider: {
    '@type': 'Organization',
    name: 'Ölmez Franchise Systems',
    url: baseUrl,
    logo: `${baseUrl}/olmez-full-logo.svg`,
  },
  areaServed: ['US'],
  audience: {
    '@type': 'Audience',
    audienceType: 'Qualified investors and operator-investors',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: 5000,
    highPrice: 30000,
    offerCount: 4,
    description:
      'Starter positions from $5,000 to a full $30,000 investor seat in a four-investor unit structure. Distributions follow actual unit performance after sales reconciliation, operating costs, branch reserves, management fees, and applicable deductions; no fixed return is implied or guaranteed.',
  },
  potentialAction: {
    '@type': 'ReserveAction',
    name: 'Review starter investment',
    target: `${baseUrl}/contact`,
  },
}

export const itemListSchema = (items: Array<{ name: string; url: string; description?: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: item.url,
    name: item.name,
    description: item.description,
  })),
})
