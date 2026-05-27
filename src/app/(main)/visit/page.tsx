import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import OpeningStatus from '@/components/OpeningStatus'
import { HOURS } from '@/data/hours'

export const metadata: Metadata = {
  title: 'Visit | Manka Cafe Sunnybank — Hours, Location & Directions',
  description:
    'Manka Cafe is at Shop 58 Level 1, 341 Mains Rd, Sunnybank — above Yuen\'s Market in Market Square. Hours, directions and parking information.',
  alternates: { canonical: 'https://mankacafe.com.au/visit' },
}

const MAPS = 'https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109'
const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'
const INSTAGRAM = 'https://www.instagram.com/manka_cafe/'

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

function fmt(t: string) {
  const [h, m] = t.split(':').map(Number)
  const p = h >= 12 ? 'pm' : 'am'
  const hr = h > 12 ? h - 12 : h === 0 ? 12 : h
  return m === 0 ? `${hr}${p}` : `${hr}:${String(m).padStart(2, '0')}${p}`
}

const WAYFINDING = [
  {
    step: '01',
    heading: 'Enter Market Square',
    desc: 'Head to 341 Mains Rd, Sunnybank. Use the main entry from Mains Rd. There is parking inside the centre.',
  },
  {
    step: '02',
    heading: 'Go to Level 1',
    desc: 'Take the escalator or stairs to Level 1. We are above Yuen\'s Market — the asian grocery store on the ground floor.',
  },
  {
    step: '03',
    heading: 'Find Shop 58',
    desc: 'Look for Manka Cafe. If you\'re lost, ask any centre staff — they know us.',
  },
]

export default function VisitPage() {
  return (
    <>
      <JsonLd data={visitSchema} />

      {/* ─── Header ───────────────────────────────────────────── */}
      <div className="bg-cream pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-stone/60 mb-6">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2 text-stone/30">/</span>
            <span>Visit</span>
          </nav>

          <h1 className="font-display font-bold text-ink text-4xl sm:text-5xl mb-4" data-reveal>
            Visit
          </h1>
          <p className="text-stone text-lg max-w-[44ch]" data-reveal data-delay="1">
            Shop 58, Level 1, 341 Mains Rd — above Yuen&apos;s Market in Market Square, Sunnybank.
          </p>
        </div>
      </div>

      {/* ─── Main content ─────────────────────────────────────── */}
      <div className="bg-cream pb-20 lg:pb-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: hours + address + actions */}
            <div className="lg:col-span-2 space-y-10">

              <div data-reveal>
                <p className="text-xs tracking-widest uppercase text-stone mb-4">Today</p>
                <OpeningStatus />
              </div>

              <div data-reveal data-delay="1">
                <p className="text-xs tracking-widest uppercase text-stone mb-4">Hours</p>
                <ul className="space-y-0">
                  {HOURS.map((day, i) => (
                    <li
                      key={day.name}
                      className={`flex justify-between items-baseline py-2.5 text-sm border-b border-parchment last:border-0
                        ${day.closed ? 'text-stone/40' : 'text-ink'}`}
                    >
                      <span className="font-medium">{day.name}</span>
                      <span className="tabular-nums">
                        {day.closed ? 'Closed' : `${fmt(day.open!)} – ${fmt(day.close!)}`}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-stone/50 mt-3">
                  Hours may vary on public holidays. Check{' '}
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-ink transition-colors"
                  >
                    Google Maps
                  </a>{' '}
                  for the latest.
                </p>
              </div>

              <div data-reveal data-delay="2">
                <p className="text-xs tracking-widest uppercase text-stone mb-4">Address</p>
                <address className="not-italic text-sm text-ink leading-relaxed mb-5">
                  Shop 58 Level 1<br />
                  341 Mains Rd<br />
                  Sunnybank QLD 4109<br />
                  <span className="text-stone/60">Above Yuen&apos;s Market, Market Square</span>
                </address>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href={UBEREATS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Order on Uber Eats
                  </a>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost text-brown"
                  >
                    Follow on Instagram
                    <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: map + wayfinding */}
            <div className="lg:col-span-3 space-y-10">

              <div data-reveal>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-parchment">
                  <iframe
                    src="https://maps.google.com/maps?q=341+Mains+Rd+Sunnybank+QLD+4109&output=embed"
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Manka Cafe location"
                    aria-label="Map showing Manka Cafe at 341 Mains Rd, Sunnybank"
                  />
                </div>
              </div>

              <div data-reveal data-delay="1">
                <p className="text-xs tracking-widest uppercase text-stone mb-6">
                  Getting inside
                </p>

                {WAYFINDING.map((w, i) => (
                  <div
                    key={w.step}
                    className={`wayfind-step ${i === WAYFINDING.length - 1 ? 'pb-0' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-xs font-bold text-stone">{w.step}</span>
                    </div>
                    <div className="pt-2">
                      <p className="font-medium text-ink text-sm mb-1">{w.heading}</p>
                      <p className="text-stone text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="bg-parchment rounded-2xl p-6 text-sm"
                data-reveal
                data-delay="2"
              >
                <p className="font-medium text-ink mb-2">Parking</p>
                <p className="text-stone leading-relaxed">
                  Market Square has on-site multi-level parking accessible from Mains Rd.
                  There are also buses to Sunnybank — check TransLink for routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
