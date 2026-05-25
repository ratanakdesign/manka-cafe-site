import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery | Anime Cafe, Latte Art & Manga',
  description:
    'Browse the Manka Cafe gallery — 3D milk foam latte art, matcha drinks, Hong Kong-style French toast, manga shelves, anime murals, customer art and cosy vibes.',
  alternates: { canonical: 'https://mankacafe.com.au/gallery' },
}

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-4">
            <Link href="/" className="hover:text-brown transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">Gallery</span>
          </nav>
          <h1 className="font-display font-extrabold text-brown text-4xl sm:text-5xl mb-4">
            Gallery
          </h1>
          <p className="text-charcoal/70 text-lg max-w-xl">
            Latte art, food, manga, customer drawings and cafe vibes — a look inside Manka Cafe.
          </p>
        </div>
      </div>

      <GalleryClient />
    </>
  )
}
