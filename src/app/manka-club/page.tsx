import type { Metadata } from 'next'
import Link from 'next/link'
import MankaClubClient from './MankaClubClient'

export const metadata: Metadata = {
  title: 'Manka Club | Join for Seasonal Drops & Cafe Updates',
  description:
    'Join Manka Club — the free Manka Cafe loyalty list. Get seasonal drink drops, new latte art announcements, birthday treats and event news from Sunnybank.',
  alternates: { canonical: 'https://mankacafe.com.au/manka-club' },
}

export default function MankaClubPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero bg-brown text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-cream/40 mb-4">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream/70">Manka Club</span>
          </nav>
          <div className="max-w-xl">
            <span className="text-4xl mb-4 block" aria-hidden="true">✉️</span>
            <h1 className="font-display font-extrabold text-cream text-4xl sm:text-5xl mb-4">
              Join Manka Club
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Get seasonal drink drops, anime cafe updates, birthday treats and event news from
              Manka Cafe — directly to you.
            </p>
          </div>
        </div>
      </div>

      <MankaClubClient />
    </>
  )
}
