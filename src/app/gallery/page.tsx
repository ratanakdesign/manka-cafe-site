'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GALLERY_ITEMS, GALLERY_CATEGORIES, type GalleryImage } from '@/data/gallery'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

  const filtered =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((img) => img.category === activeCategory)

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

      {/* Category filter */}
      <div className="sticky top-16 z-30 bg-cream/95 backdrop-blur-sm border-b border-blush/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="flex gap-2 overflow-x-auto py-3"
            role="tablist"
            aria-label="Gallery categories"
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`flex-shrink-0 text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${
                  activeCategory === cat
                    ? 'bg-brown text-cream'
                    : 'bg-blush/30 text-charcoal hover:bg-blush/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {filtered.length === 0 ? (
            <p className="text-charcoal/50 text-center py-20">No photos in this category yet.</p>
          ) : (
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
              role="list"
              aria-label={`Gallery — ${activeCategory}`}
            >
              {filtered.map((image) => (
                <button
                  key={image.id}
                  role="listitem"
                  onClick={() => setLightboxImage(image)}
                  className="group relative aspect-square rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2"
                  aria-label={`View: ${image.alt}`}
                >
                  <div
                    className={`w-full h-full bg-gradient-to-br ${image.gradient} flex flex-col items-center justify-center gap-2 transition-transform duration-200 group-hover:scale-105`}
                    role="img"
                    aria-label={image.alt}
                  >
                    <span className="text-3xl opacity-40" aria-hidden="true">
                      {image.category === 'Latte Art' ? '☕' :
                       image.category === 'Food' ? '🍽️' :
                       image.category === 'Manga & Interior' ? '📚' :
                       image.category === 'Customer Art' ? '🎨' :
                       image.category === 'Events' ? '🎉' : '🌿'}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/20 transition-colors duration-200 flex items-end">
                    <div className="w-full px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-200 bg-gradient-to-t from-brown/70 to-transparent">
                      <p className="text-cream text-xs font-medium leading-snug">{image.caption}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section
        className="py-14 sm:py-16"
        style={{ background: 'linear-gradient(135deg, #FFF8F0, #FFF0E8)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title text-2xl sm:text-3xl mb-3">
            Come see it in person
          </h2>
          <p className="text-charcoal/60 mb-6">
            Photos don&apos;t quite capture the atmosphere. Visit us and experience it for yourself.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/visit" className="btn-primary">
              Visit Manka Cafe
            </Link>
            <Link href="/menu" className="btn-outline">
              Order a Custom Latte
            </Link>
            <Link href="/private-bookings" className="btn-ghost">
              Book a Private Event
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxImage.alt}
          className="fixed inset-0 z-50 bg-brown/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cream/20 hover:bg-cream/30 flex items-center justify-center text-cream transition-colors"
            aria-label="Close image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div
            className="max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-full aspect-square rounded-3xl bg-gradient-to-br ${lightboxImage.gradient} flex items-center justify-center`}
              role="img"
              aria-label={lightboxImage.alt}
            >
              <span className="text-6xl opacity-30" aria-hidden="true">
                {lightboxImage.category === 'Latte Art' ? '☕' :
                 lightboxImage.category === 'Food' ? '🍽️' :
                 lightboxImage.category === 'Manga & Interior' ? '📚' :
                 lightboxImage.category === 'Customer Art' ? '🎨' :
                 lightboxImage.category === 'Events' ? '🎉' : '🌿'}
              </span>
            </div>
            <div className="mt-4 bg-cream rounded-2xl p-4">
              <p className="font-display font-bold text-brown">{lightboxImage.caption}</p>
              <p className="text-sm text-charcoal/60 mt-1">{lightboxImage.alt}</p>
              <span className="tag mt-2 inline-block">{lightboxImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
