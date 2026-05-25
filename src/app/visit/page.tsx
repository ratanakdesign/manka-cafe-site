import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import OpeningStatus from '@/components/OpeningStatus'
import { HOURS } from '@/data/hours'

export const metadata: Metadata = {
  title: 'Visit Manka Cafe Sunnybank | Hours, Location & Directions',
  description:
    'Find Manka Cafe at Shop 58 Level 1, 341 Mains Rd, Sunnybank. View opening hours, get directions, order delivery and plan your visit.',
  alternates: { canonical: 'https://mankacafe.com.au/visit' },
}

const visitSchema = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Manka Cafe 滿華',
  url: 'https://mankacafe.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 58 Level 1, 341 Mains Rd',
    addressLocality: 'Sunnybank',
    addressRegion: 'QLD',
    postalCode: '4109',
    addressCountry: 'AU',
  },
  openingHoursSpecification: HOURS.filter((h) => !h.closed).map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${h.name}`,
    opens: h.open,
    closes: h.close,
  })),
}

function formatHour(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = h > 12 ? h - 12 : h === 0 ? 12 : h
  return m === 0 ? `${hour}:00 ${period}` : `${hour}:${String(m).padStart(2, '0')} ${period}`
}

const WAYS_TO_REACH = [
  {
    icon: '🚗',
    title: 'Driving',
    desc: 'Market Square Sunnybank has on-site parking accessible from Mains Rd. Follow signs to Level 1 once parked.',
  },
  {
    icon: '🚌',
    title: 'Public Transport',
    desc: 'Sunnybank is well-served by Brisbane buses. Check TransLink for routes and stop information.',
  },
  {
    icon: '📍',
    title: 'Inside the Centre',
    desc: 'Once at Market Square, head to Level 1 above Yuen\'s Market. Look for Shop 58.',
  },
]

export default function VisitPage() {
  return (
    <>
      <JsonLd data={visitSchema} />

      {/* Hero */}
      <div className="page-hero bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-4">
            <Link href="/" className="hover:text-brown transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">Visit</span>
          </nav>
          <h1 className="font-display font-extrabold text-brown text-4xl sm:text-5xl mb-4">
            Visit Manka Cafe
          </h1>
          <p className="text-charcoal/70 text-lg max-w-xl">
            Find us above Yuen&apos;s Market in Market Square, Sunnybank. Here&apos;s everything you need to
            plan your visit.
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left column: hours + address */}
          <div className="lg:col-span-2 space-y-8">
            {/* Opening status */}
            <div>
              <h2 className="section-title text-xl mb-4">Today&apos;s status</h2>
              <OpeningStatus />
            </div>

            {/* Full hours */}
            <div>
              <h2 className="section-title text-xl mb-4">Opening hours</h2>
              <div className="bg-white rounded-2xl border border-blush/30 overflow-hidden">
                {HOURS.map((day, i) => (
                  <div
                    key={day.name}
                    className={`flex justify-between items-center px-4 py-3 text-sm ${
                      i < HOURS.length - 1 ? 'border-b border-blush/20' : ''
                    } ${day.closed ? 'text-charcoal/40' : 'text-charcoal'}`}
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
              <p className="text-xs text-charcoal/50 mt-2">
                Hours may vary on public holidays. Check{' '}
                <a
                  href="https://maps.google.com/?q=Manka+Cafe+Sunnybank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brown"
                >
                  Google Maps
                </a>{' '}
                for the latest.
              </p>
            </div>

            {/* Address */}
            <div>
              <h2 className="section-title text-xl mb-4">Address</h2>
              <div className="bg-white rounded-2xl border border-blush/30 p-4">
                <address className="not-italic">
                  <p className="font-bold text-brown">Manka Cafe 滿華</p>
                  <p className="text-charcoal/80 mt-1">Shop 58 Level 1</p>
                  <p className="text-charcoal/80">341 Mains Rd</p>
                  <p className="text-charcoal/80">Sunnybank QLD 4109</p>
                  <p className="text-charcoal/50 text-sm mt-2">
                    Above Yuen&apos;s Market, Market Square
                  </p>
                </address>
              </div>
            </div>

            {/* Action links */}
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Get Directions on Google Maps
              </a>
              <a
                href="https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center"
              >
                Order Delivery on Uber Eats
              </a>
              <a
                href="https://www.instagram.com/manka_cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full text-center"
              >
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Right column: map + wayfinding */}
          <div className="lg:col-span-3 space-y-8">
            {/* Map */}
            <div>
              <h2 className="section-title text-xl mb-4">Map</h2>
              <div className="rounded-3xl overflow-hidden shadow-sm border border-blush/30 aspect-[4/3]">
                <iframe
                  src="https://maps.google.com/maps?q=341+Mains+Rd+Sunnybank+QLD+4109&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manka Cafe location — Shop 58 Level 1, 341 Mains Rd, Sunnybank QLD 4109"
                  aria-label="Google Maps showing Manka Cafe at 341 Mains Rd, Sunnybank"
                />
              </div>
            </div>

            {/* Getting here */}
            <div>
              <h2 className="section-title text-xl mb-4">Getting here</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {WAYS_TO_REACH.map((way) => (
                  <div
                    key={way.title}
                    className="bg-white rounded-2xl border border-blush/30 p-4"
                  >
                    <span className="text-2xl mb-2 block" aria-hidden="true">{way.icon}</span>
                    <h3 className="font-display font-bold text-brown text-sm mb-2">{way.title}</h3>
                    <p className="text-xs text-charcoal/70 leading-relaxed">{way.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
              <h3 className="font-display font-bold text-amber-800 text-sm mb-3">
                Tips for finding us
              </h3>
              <ul className="space-y-2 text-sm text-amber-900/80">
                <li className="flex gap-2">
                  <span aria-hidden="true">→</span>
                  Enter via the main Market Square entry on Mains Rd
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true">→</span>
                  Take the escalator or stairs up to Level 1
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true">→</span>
                  We are above Yuen&apos;s Market — look for Shop 58
                </li>
                <li className="flex gap-2">
                  <span aria-hidden="true">→</span>
                  If you get lost, ask in the centre — staff will point you in the right direction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
