import Header from '@/components/layout/header'
import { cabinetGrotesk } from '@/fonts'
import 'swiper/css'
// import 'swiper/css/navigation'
import Footer from '@/components/layout/footer'
import { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://www.vervetech.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'VerveTech | Web & Mobile App Development Company',
    template: '%s | VerveTech'
  },

  description:
    'VerveTech is a software development company building scalable web & mobile apss, WordPress websites, and Shopify stores.',

  keywords: [
    'software development company',
    'web app development',
    'MERN stack development',
    'React Native app development',
    'Flutter app development',
    'WordPress development',
    'Shopify development'
  ],

  authors: [{ name: 'VerveTech' }],
  creator: 'VerveTech',
  publisher: 'VerveTech',

  robots: {
    index: true,
    follow: true
  },

  alternates: {
    canonical: siteUrl
  },

  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'VerveTech | Web & Mobile App Development Company',
    description:
      'We build scalable web apps, mobile apps, and websites using MERN stack, React Native, Flutter, WordPress, and Shopify.',
    siteName: 'VerveTech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VerveTech'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'VerveTech | Web & Mobile App Development Company',
    description:
      'Custom web apps, mobile apps, and eCommerce development using modern technologies.',
    images: ['/og-image.png']
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },

  other: {
    'apple-mobile-web-app-title': 'VerveTech'
  }
}

const bodyClass = `${cabinetGrotesk.variable} max-w-[100vw] font-cabinet-grotesk antialiased min-h-[100vh] flex flex-col`

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={bodyClass}>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [organizationSchema, websiteSchema, webpageSchema]
            })
          }}
        />
      </body>
    </html>
  )
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'VerveTech',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description:
    'Software development company offering custom web apps, mobile apps, WordPress websites, Shopify stores, UI/UX design, and deployment services.',
  telephone: '+92-314-9179764',
  email: 'hello@vervetech.dev'
  // sameAs: [
  //   'https://www.linkedin.com/company/vervetech',
  //   'https://www.upwork.com/agencies/vervetech'
  // ]
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'VerveTech',
  url: siteUrl,
  description:
    'VerveTech builds scalable web applications, mobile apps, WordPress websites, and Shopify stores.',
  publisher: {
    '@type': 'Organization',
    name: 'VerveTech',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/logo.png`
    }
  }
}

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'VerveTech | Web & Mobile App Development Company',
  url: siteUrl,
  description:
    'Custom web and mobile app development using MERN stack, React Native, Flutter, WordPress, and Shopify.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'VerveTech',
    url: siteUrl
  },
  about: {
    '@type': 'Organization',
    name: 'VerveTech'
  }
}
