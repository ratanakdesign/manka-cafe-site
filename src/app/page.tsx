import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import OpeningStatus from '@/components/OpeningStatus'
import { SIGNATURE_ITEMS } from '@/data/menu'
import { HOURS } from '@/data/hours'

export const metadata: Metadata = {
  title: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha',
  description:
    'Visit Manka Cafe in Sunnybank — Brisbane\'s cosy anime cafe for custom latte art, matcha drinks, manga, Hong Kong-style French toast and comfort food above Market Square.',
  alternates: { canonical: 'https://mankacafe.com.au' },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Manka Cafe 滿華',
  description:
    'Anime-inspired cafe in Sunnybank serving custom latte art, matcha drinks, Hong Kong-style French toast and cafe meals in a manga-filled space.',
  url: 'https://mankacafe.com.au',
  telephone: '',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 58 Level 1, 341 Mains Rd',
    addressLocality: 'Sunnybank',
    addressRegion: 'QLD',
    postalCode: '4109',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -27.5846,
    longitude: 153.0511,
  },
  servesCuisine: ['Cafe', 'Modern Australian', 'Asian fusion'],
  priceRange: '$',
  hasMenu: 'https://mankacafe.com.au/menu',
  openingHoursSpecification: HOURS.filter((h) => !h.closed).map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${h.name}`,
    opens: h.open,
    closes: h.close,
  })),
  sameAs: [
    'https://www.instagram.com/manka_cafe/',
    'https://www.facebook.com/p/Manka-Cafe-%E6%BB%BF%E8%8F%AF-61557450650306/',
    'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ',
  ],
}

const EXPERIENCE_POINTS = [
  {
    icon: '📚',
    title: 'Manga Shelves',
    desc: 'Browse our shelves while you sip. Find something new, or revisit a favourite.',
  },
  {
    icon: '🎨',
    title: 'Customer Art Wall',
    desc: 'Customers have drawn directly on our walls. Every visit reveals something new.',
  },
  {
    icon: '🎵',
    title: 'Ghibli / Lofi Vibes',
    desc: 'Soft background music to help you settle in, slow down and stay a while.',
  },
  {
    icon: '☕',
    title: 'Custom Latte Art',
    desc: '2D and 3D milk foam creations made by hand, each one unique.',
  },
  {
    icon: '🏠',
    title: 'Owner-operated',
    desc: 'A small, community-driven cafe with a personal, warm welcome.',
  },
  {
    icon: '📍',
    title: 'Hidden Gem',
    desc: 'Tucked above Yuen\'s Market on Level 1 of Market Square, Sunnybank.',
  },
]

function formatHour(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = h > 12 ? h - 12 : h === 0 ? 12 : h
  return m === 0 ? `${hour}:00 ${period}` : `${hour}:${String(m).padStart(2, '0')} ${period}`
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          background:
            'linear-gradient(135deg, #FFF8F0 0%, #FFF0E8 40%, #FDEAEA 70%, #FFF8F0 100%)',
        }}
      >
        {/* Decorative blobs */}
        <div
          aria-hidden="true"
          className="absolute top-20 right-0 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F5C6C6, transparent)' }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-20 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8DB580, transparent)' }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="mb-6">
                <OpeningStatus compact />
              </div>

              <h1 className="font-display font-extrabold text-brown text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
                Sunnybank&apos;s cosy anime cafe for latte art, manga and matcha
              </h1>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8 max-w-lg">
                Step into a manga-filled cafe serving custom latte art, matcha drinks, Hong Kong-style
                French toast and comfort food with Ghibli-inspired vibes.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href="/menu" className="btn-primary">
                  View Menu
                </Link>
                <a
                  href="https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Get Directions
                </a>
                <a
                  href="https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Order on Uber Eats
                </a>
                <Link href="/private-bookings" className="btn-ghost">
                  Book an Event
                </Link>
              </div>
            </div>

            {/* Right: visual card */}
            <div className="hidden lg:block">
              <div className="relative">
                <div
                  className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"
                  style={{
                    background:
                      'linear-gradient(160deg, #F5E6D0 0%, #F0D5C0 30%, #E8C8B0 60%, #DEB89A 100%)',
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                    <div className="text-6xl" aria-hidden="true">☕</div>
                    <div className="text-center">
                      <p className="font-display font-bold text-brown/80 text-xl mb-2">
                        Manka Cafe 滿華
                      </p>
                      <p className="text-brown/60 text-sm">
                        Custom latte art photography here
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full mt-4">
                      {['3D Foam Art', 'Manga Shelf', 'HK Toast', 'Matcha Latte'].map((label) => (
                        <div
                          key={label}
                          className="aspect-square rounded-2xl bg-brown/10 flex items-center justify-center text-xs text-brown/60 font-medium text-center p-2"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-cream rounded-2xl shadow-lg border border-blush/40 px-4 py-3">
                  <p className="text-xs text-charcoal/60 font-medium">Above Yuen&apos;s Market</p>
                  <p className="text-sm font-bold text-brown">Level 1, Market Square</p>
                  <p className="text-xs text-charcoal/50">Sunnybank, Brisbane</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Items */}
      <section className="py-16 sm:py-20 bg-white" id="menu-highlights">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title text-3xl sm:text-4xl mb-3">What we&apos;re known for</h2>
            <p className="text-charcoal/60 max-w-md mx-auto">
              Customer favourites worth making the trip for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SIGNATURE_ITEMS.map((item) => (
              <div key={item.id} className="card group hover:shadow-md transition-shadow">
                <div
                  className={`h-44 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                  role="img"
                  aria-label={`Photo of ${item.name} at Manka Cafe`}
                >
                  <span className="text-4xl opacity-60" aria-hidden="true">
                    {item.category.includes('Latte') ? '☕' :
                     item.category.includes('Matcha') ? '🍵' :
                     item.category.includes('Toast') ? '🍞' :
                     item.category.includes('Sandwich') ? '🥪' :
                     item.category.includes('Iced') ? '🧊' : '🍽️'}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-brown text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-3">{item.description}</p>
                  {item.price && (
                    <p className="font-semibold text-brown text-sm">{item.price}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section
        className="py-16 sm:py-20"
        style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #FFF0E8 100%)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title text-3xl sm:text-4xl mb-4">
                More than just coffee
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Manka is a small, creative cafe where customers read manga, draw on the walls, order
                character latte art and settle in with soft music, warm drinks and comfort food.
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-8">
                Hidden on Level 1 above Yuen&apos;s Market in Sunnybank&apos;s Market Square, it&apos;s the kind of
                place you tell your friends about.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/gallery" className="btn-outline">
                  See the Gallery
                </Link>
                <Link href="/visit" className="btn-ghost">
                  Plan Your Visit
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {EXPERIENCE_POINTS.map((point) => (
                <div
                  key={point.title}
                  className="bg-white rounded-2xl p-4 border border-blush/30 shadow-sm"
                >
                  <span className="text-2xl mb-2 block" aria-hidden="true">{point.icon}</span>
                  <h3 className="font-display font-bold text-brown text-sm mb-1">{point.title}</h3>
                  <p className="text-xs text-charcoal/60 leading-relaxed">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit preview */}
      <section className="py-16 sm:py-20 bg-white" id="visit-preview">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Hours + address */}
            <div>
              <h2 className="section-title text-3xl sm:text-4xl mb-6">Opening hours</h2>
              <OpeningStatus />

              <div className="mt-6 space-y-2">
                {HOURS.map((day) => (
                  <div
                    key={day.name}
                    className={`flex justify-between py-2 border-b border-blush/20 text-sm ${
                      day.closed ? 'text-charcoal/40' : 'text-charcoal'
                    }`}
                  >
                    <span className="font-medium">{day.name}</span>
                    <span>
                      {day.closed
                        ? 'Closed'
                        : `${formatHour(day.open!)} – ${formatHour(day.close!)}`}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-charcoal/50 mt-3">
                Hours may vary on public holidays. Check Google Maps for the latest.
              </p>

              <div className="mt-6">
                <address className="not-italic">
                  <p className="font-display font-bold text-brown text-base">
                    Shop 58 Level 1, 341 Mains Rd
                  </p>
                  <p className="text-charcoal/70 text-sm">Sunnybank QLD 4109</p>
                  <p className="text-charcoal/50 text-sm">Above Yuen&apos;s Market, Market Square</p>
                </address>
                <a
                  href="https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 inline-flex"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-3xl overflow-hidden shadow-sm border border-blush/30 aspect-[4/3]">
              <iframe
                src="https://maps.google.com/maps?q=341+Mains+Rd+Sunnybank+QLD+4109&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manka Cafe location — Shop 58 Level 1, 341 Mains Rd, Sunnybank QLD 4109"
                aria-label="Google Maps showing Manka Cafe location at 341 Mains Rd, Sunnybank"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Private Booking Teaser */}
      <section
        className="py-16 sm:py-20"
        style={{
          background: 'linear-gradient(135deg, #F5C6C6 0%, #FFF0E8 50%, #F5C6C6 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-4xl mb-4 block" aria-hidden="true">🎉</span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Planning a small gathering?
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Manka Cafe offers a cosy, creative setting for birthdays, afternoon teas, Christmas
            parties, anime meetups and relaxed group events.
          </p>
          <Link href="/private-bookings" className="btn-primary">
            Enquire About a Private Booking
          </Link>
        </div>
      </section>

      {/* Manka Club CTA */}
      <section className="py-16 sm:py-20 bg-brown text-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-4xl mb-4 block" aria-hidden="true">✉️</span>
          <h2 className="font-display font-bold text-cream text-3xl sm:text-4xl mb-4">
            Join Manka Club
          </h2>
          <p className="text-cream/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Get seasonal drink drops, new latte art designs, birthday treats and event news from
            Manka Cafe — directly to you.
          </p>
          <Link
            href="/manka-club"
            className="inline-flex items-center justify-center gap-2 bg-cream text-brown font-semibold px-6 py-3 rounded-2xl hover:bg-cream/90 transition-all duration-150 active:scale-95"
          >
            Join for Free
          </Link>
        </div>
      </section>
    </>
  )
}
