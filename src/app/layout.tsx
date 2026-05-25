import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileStickyCTA from '@/components/MobileStickyCTA'
import RevealInit from '@/components/RevealInit'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mankacafe.com.au'),
  title: {
    default: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha',
    template: '%s | Manka Cafe',
  },
  description:
    'A quiet anime-inspired cafe hidden upstairs in Market Square, Sunnybank. Custom latte art, manga shelves, Hong Kong-style French toast and warm comfort food.',
  keywords: [
    'Manka Cafe', 'anime cafe Sunnybank', 'anime cafe Brisbane',
    'manga cafe Brisbane', 'latte art Brisbane', 'matcha Sunnybank',
    'custom latte art', 'Market Square cafe Sunnybank',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mankacafe.com.au',
    siteName: 'Manka Cafe 滿華',
    title: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha',
    description: 'A quiet anime cafe hidden upstairs in Market Square, Sunnybank.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha',
    description: 'A quiet anime cafe hidden upstairs in Market Square, Sunnybank.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Navigation />
        <RevealInit />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  )
}
