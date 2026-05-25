import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileStickyCTA from '@/components/MobileStickyCTA'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mankacafe.com.au'),
  title: {
    default: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha',
    template: '%s | Manka Cafe Sunnybank',
  },
  description:
    'Visit Manka Cafe in Sunnybank — Brisbane\'s cosy anime cafe for custom latte art, matcha drinks, manga, Hong Kong-style French toast and comfort food.',
  keywords: [
    'Manka Cafe',
    'anime cafe Sunnybank',
    'anime cafe Brisbane',
    'manga cafe Brisbane',
    'latte art Brisbane',
    'matcha Sunnybank',
    'custom latte art',
    'Sunnybank cafe',
    'Market Square cafe',
    'Hong Kong French toast Brisbane',
  ],
  authors: [{ name: 'Manka Cafe 滿華' }],
  creator: 'Manka Cafe 滿華',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mankacafe.com.au',
    siteName: 'Manka Cafe 滿華',
    title: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha',
    description:
      'Brisbane\'s cosy anime cafe in Sunnybank. Custom latte art, matcha, manga shelves, HK-style French toast and comfort food above Market Square.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha',
    description:
      'Brisbane\'s cosy anime cafe in Sunnybank. Custom latte art, matcha, manga and comfort food.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${nunito.variable} ${inter.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  )
}
