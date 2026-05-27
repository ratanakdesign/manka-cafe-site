import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'

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
    default: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Manga',
    template: '%s | Manka Cafe',
  },
  description:
    'A quiet anime cafe hidden upstairs in Sunnybank, serving custom latte art, manga shelves, Hong Kong-style comfort food and cosy cafe drinks above Market Square.',
  keywords: [
    'Manka Cafe', 'anime cafe Sunnybank', 'anime cafe Brisbane',
    'manga cafe Brisbane', 'latte art Brisbane', 'matcha Sunnybank',
    'custom latte art', 'Market Square cafe Sunnybank',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png',    sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://mankacafe.com.au',
    siteName: 'Manka Cafe',
    title: 'Manka Cafe Sunnybank',
    description: 'Custom latte art, manga shelves and Hong Kong-style comfort food above Market Square.',
    images: [
      {
        url: '/og/manka-cafe-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Manka Cafe — anime mural and seating inside Market Square, Sunnybank',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manka Cafe Sunnybank',
    description: 'A quiet anime cafe hidden upstairs in Sunnybank.',
    images: ['/og/manka-cafe-og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
