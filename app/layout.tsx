import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { organizationSchema } from './schema'
import { LocaleNotice } from '@/components/site/locale-notice'
import { getLocaleLang } from '@/lib/site-locale'
import { getRequestLocale } from '@/lib/server-locale'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://olmez.franchise.systems'

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'Ölmez Franchise Systems | Restaurant Franchise Infrastructure & Operations',
  description:
    'Restaurant franchise systems & infrastructure. Ölmez builds disciplined food business assets with AFFAREM operational control, Smart Discipline Score, and 30-month capital recovery. Turkish shawarma, gas station units, micro-start franchises.',
  keywords: [
    'restaurant franchise',
    'franchise systems',
    'shawarma franchise',
    'restaurant operations',
    'franchise infrastructure',
    'food business',
    'gas station food',
    'franchise management',
    'AFFAREM',
    'franchise architecture'
  ],
  generator: 'Next.js',
  applicationName: 'Ölmez Franchise Systems',
  referrer: 'strict-origin-when-cross-origin',
  creator: 'Şevketullah Ölmez',
  publisher: 'Ölmez Franchise Systems Ltd.',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'Ölmez Franchise Systems | Restaurant Franchise Infrastructure',
    description: 'Build disciplined restaurant businesses. Franchise systems with operational control, capital recovery tracking, and investor management.',
    url: baseUrl,
    type: 'website',
    locale: 'en_US',
    siteName: 'Ölmez Franchise Systems',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Ölmez Franchise Systems',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ölmez Franchise Systems',
    description: 'Restaurant franchise infrastructure & operations',
    creator: '@olmez_franchise',
    images: [`${baseUrl}/twitter-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: `${baseUrl}/`,
    languages: {
      en: `${baseUrl}/`,
      'en-GB': `${baseUrl}/uk/`,
      'en-US': `${baseUrl}/us/`,
      'tr-TR': `${baseUrl}/tr/`,
      'ru-RU': `${baseUrl}/ru/`,
    },
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getRequestLocale()
  const lang = getLocaleLang(locale)

  return (
    <html lang={lang} className="bg-background">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ölmez" />

        {/* Favicon */}
        <link rel="icon" href="/icon.svg" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#8B5A3C" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1a1a1a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <LocaleNotice locale={locale} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
