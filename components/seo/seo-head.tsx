import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://olmez.franchise.systems'

interface SEOHeadProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  author?: string
  publishedDate?: string
  modifiedDate?: string
  keywords?: string[]
}

export function generateSEOMetadata(props: SEOHeadProps): Metadata {
  const {
    title,
    description,
    image = `${baseUrl}/og-image.png`,
    url = baseUrl,
    type = 'website',
    author,
    publishedDate,
    modifiedDate,
    keywords = [],
  } = props
  const openGraphType = type === 'product' ? 'website' : type

  return {
    title,
    description,
    keywords,
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title,
      description,
      url,
      type: openGraphType,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      siteName: 'Ölmez Franchise Systems',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@olmez_franchise',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
  }
}

export function SeoHead({ title, description, image, url }: SEOHeadProps) {
  return (
    <>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      <link rel="canonical" href={url || baseUrl} />
    </>
  )
}
