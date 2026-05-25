import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import OpeningStatus from '@/components/OpeningStatus'
import { ImageFrame } from '@/components/ImageFrame'
import { HOURS } from '@/data/hours'

export const metadata: Metadata = {
  title: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha',
  description:
    'A quiet anime cafe hidden upstairs in Sunnybank. Custom latte art, matcha drinks, Hong Kong-style French toast and manga shelves at Market Square.',
  alternates: { canonical: 'https://mankacafe.com.au' },
}

const MAPS = 'https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109'
const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'
const INSTAGRAM = 'https://www.instagram.com/manka_cafe/'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Manka Cafe 滿華',
  description:
    'A quiet anime cafe hidden upstairs in Market Square, Sunnybank. Custom latte art, matcha drinks, manga shelves and Hong Kong-style comfort food.',
  url: 'https://mankacafe.com.au',
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
  servesCuisine: ['Cafe', 'Japanese', 'Hong Kong'],
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

const REVIEWS = [
  {
    quote: 'The 3D latte art is something else. You almost don\'t want to drink it.',
    source: 'Google review',
  },
  {
    quote: 'Hidden upstairs and so worth finding. The French toast alone is a reason to visit.',
    source: 'Google review',
  },
  {
    quote: 'Soft music, manga on the shelves and the best matcha latte I\'ve had in Brisbane.',
    source: 'Google review',
  },
]

const WAYFINDING = [
  { step: '01', text: 'Head to Market Square at 341 Mains Rd, Sunnybank' },
  { step: '02', text: 'Take the escalator or stairs up to Level 1' },
  { step: '03', text: 'Look for Shop 58 above Yuen\'s Market' },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="bg-cream pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <div className="mb-6" data-reveal>
                <OpeningStatus />
              </div>

              <h1
                className="font-display font-bold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6 text-balance"
                data-reveal
                data-delay="1"
              >
                A quiet anime cafe hidden upstairs in Sunnybank
              </h1>

              <p
                className="text-stone text-lg leading-relaxed mb-8 max-w-[46ch]"
                data-reveal
                data-delay="2"
              >
                Custom latte art, matcha drinks, manga shelves and Hong Kong-style comfort food
                at Level 1 of Market Square.
              </p>

              <div className="flex flex-wrap gap-3" data-reveal data-delay="3">
                <Link href="/menu" className="btn btn-primary">
                  See the menu
                </Link>
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div data-reveal data-delay="2">
              {/* TODO: Replace with real hero photography — wide shot of cafe interior,
                  warm light, manga shelf visible, latte art on table in foreground */}
              <ImageFrame
                aspect="4/5"
                label="Manka Cafe interior"
                brief="Wide shot of cafe space — manga shelves, warm light, latte art drink on table in foreground. Conveys quiet, cosy atmosphere."
                className="w-full lg:max-w-[480px] lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Review strip ─────────────────────────────────────── */}
      <section className="bg-parchment py-14">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {REVIEWS.map((r, i) => (
              <blockquote key={i} className="space-y-3" data-reveal data-delay={String(i + 1) as '1' | '2' | '3'}>
                <p className="review-quote text-lg sm:text-xl">&ldquo;{r.quote}&rdquo;</p>
                <footer className="review-source">{r.source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What to order ────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12" data-reveal>
            <p className="text-xs tracking-widest uppercase text-stone mb-3">Start here</p>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight text-balance">
              What people come back for
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '3D Milk Foam Latte',
                desc: 'A sculpted character on top of your latte. Made by hand, different every time. The reason most people first visit.',
                brief: 'Close-up of 3D milk foam character on a latte — cute, detailed, warm lighting.',
              },
              {
                title: 'Hong Kong French Toast',
                desc: 'Deep-fried thick-cut bread with peanut butter or kaya, golden syrup and butter. A classic done properly.',
                brief: 'HK French toast on a plate — golden, rustic, slightly indulgent looking.',
              },
              {
                title: 'Iced Matcha Latte',
                desc: 'Ceremonial-grade matcha over ice with cold milk. Refreshing without being sweet.',
                brief: 'Iced matcha latte with condensed milk layer — vibrant green, clean background.',
              },
              {
                title: 'Coconut Iced Coffee',
                desc: 'Espresso over ice with coconut milk. One of the most reordered items on our Uber Eats menu.',
                brief: 'Coconut iced coffee — dark espresso against white coconut milk over ice.',
              },
              {
                title: 'Chicken Katsu Rice',
                desc: 'Crispy panko-crumbed chicken over steamed rice with tonkatsu sauce. Satisfying and warming.',
                brief: 'Chicken katsu rice bowl — crispy, golden chicken, neat presentation.',
              },
              {
                title: 'Manga & the space',
                desc: 'Browse the shelves while you wait. Settle in. There\'s no rush here — that\'s the point.',
                brief: 'A corner of the cafe — manga shelf, someone reading quietly, warm atmosphere.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group"
                data-reveal
                data-delay={String((i % 3) + 1) as '1' | '2' | '3'}
              >
                {/* TODO: Replace ImageFrame with <Image> once photography is ready */}
                <ImageFrame
                  aspect="4/3"
                  brief={item.brief}
                  className="mb-4 transition-opacity duration-200 group-hover:opacity-90"
                />
                <h3 className="font-display font-semibold text-ink text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12" data-reveal>
            <Link href="/menu" className="btn btn-outline">
              View full menu
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Inside Manka teaser ──────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div data-reveal>
              {/* TODO: Replace with interior photograph — anime art on walls, drawing wall,
                  soft light, customers in background */}
              <ImageFrame
                aspect="5/6"
                brief="Inside the cafe — drawing wall with customer art, warm ambient light, cosy and characterful. Could be two images side by side."
              />
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Inside Manka
              </p>
              <h2
                className="font-display font-bold text-cream text-3xl sm:text-4xl leading-tight mb-6 text-balance"
                data-reveal
                data-delay="1"
              >
                There&apos;s a lot to notice if you look around
              </h2>

              <div className="space-y-5" data-reveal data-delay="2">
                {[
                  { label: 'The drawing wall', desc: 'Customers have drawn directly on our walls for years. Each visit adds something new.' },
                  { label: 'Manga shelves', desc: 'Browse while you wait or settle in for an afternoon with something to read.' },
                  { label: 'Soft music', desc: 'Studio Ghibli, lofi, and the occasional game soundtrack. Always background, never loud.' },
                  { label: 'Latte art on the table', desc: 'The 3D foam characters look better in person. Worth seeing once.' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-px bg-cream/10 flex-shrink-0 self-stretch ml-1" aria-hidden="true" />
                    <div>
                      <p className="text-cream text-sm font-medium mb-0.5">{item.label}</p>
                      <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8" data-reveal data-delay="3">
                <Link href="/inside-manka" className="btn btn-outline border-cream/20 text-cream hover:bg-cream hover:text-ink">
                  See inside
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How latte art works ──────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Latte art
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-6 text-balance"
                data-reveal
                data-delay="1"
              >
                How it works
              </h2>
              <p className="text-stone leading-relaxed mb-8 max-w-[42ch]" data-reveal data-delay="2">
                There are four types of latte art at Manka. Each is made on warm espresso drinks,
                dine-in only. The 3D foam sculptures are the most requested.
              </p>

              <div className="space-y-6" data-reveal data-delay="3">
                {[
                  {
                    num: '01',
                    name: '3D Milk Foam Art',
                    desc: 'A sculpted foam character placed on top of your latte. Ask in-store — designs vary daily.',
                  },
                  {
                    num: '02',
                    name: '2D Drawn Latte',
                    desc: 'A hand-drawn pour design made directly on your coffee. Available on most days.',
                  },
                  {
                    num: '03',
                    name: '2D Print Art',
                    desc: 'A character or design printed onto milk foam. Choose from our collection in-store.',
                  },
                  {
                    num: '04',
                    name: 'Custom Photo Print',
                    desc: 'Bring your own reference. DM us on Instagram to arrange before your visit.',
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="font-display text-stone/40 text-sm tabular-nums flex-shrink-0 pt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <p className="font-medium text-ink text-sm mb-1">{item.name}</p>
                      <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8" data-reveal data-delay="4">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-brown"
                >
                  DM on Instagram for custom orders
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div data-reveal data-delay="2">
              {/* TODO: Replace with a 2-up photo: 3D foam character on a latte (top),
                  barista hands working on the foam (bottom) */}
              <ImageFrame
                aspect="4/5"
                brief="Two stacked photos: 3D milk foam character on a latte cup (top half), barista's hands shaping foam (bottom half). Warm, intimate, detailed."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Find us upstairs ─────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Getting here
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-4 text-balance"
                data-reveal
                data-delay="1"
              >
                Upstairs in Market Square
              </h2>
              <p className="text-stone leading-relaxed mb-8" data-reveal data-delay="2">
                We&apos;re on Level 1 above Yuen&apos;s Market. Easy to miss if you&apos;re new — look for
                the escalator near the centre entrance.
              </p>

              <div data-reveal data-delay="3">
                {WAYFINDING.map((w, i) => (
                  <div
                    key={w.step}
                    className={`wayfind-step ${i === WAYFINDING.length - 1 ? 'pb-0' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-xs font-bold text-stone">{w.step}</span>
                    </div>
                    <p className="text-sm text-ink leading-relaxed pt-2.5">{w.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3" data-reveal data-delay="4">
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Open in Google Maps
                </a>
                <Link href="/visit" className="btn btn-outline">
                  Plan your visit
                </Link>
              </div>
            </div>

            <div data-reveal data-delay="2">
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
              <address className="not-italic mt-4 text-sm text-stone leading-relaxed">
                Shop 58 Level 1, 341 Mains Rd<br />
                Sunnybank QLD 4109<br />
                <span className="text-stone/60">Above Yuen&apos;s Market, Market Square</span>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gatherings teaser ────────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl" data-reveal>
            <p className="text-xs tracking-widest uppercase text-stone mb-4">Gatherings</p>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-4 text-balance">
              A space for small, unhurried get-togethers
            </h2>
            <p className="text-stone leading-relaxed mb-8 max-w-[50ch]">
              Birthdays, afternoon teas, end-of-year lunches, anime meetups. Manka is quiet enough
              to talk, small enough to feel private, and unusual enough to be memorable.
            </p>
            <Link href="/gatherings" className="btn btn-primary">
              Enquire about a gathering
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Manka Notes ──────────────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="container">
          <div className="max-w-xl" data-reveal>
            <p className="text-xs tracking-widest uppercase text-stone mb-4">Manka Notes</p>
            <h2 className="font-display font-bold text-cream text-3xl sm:text-4xl leading-tight mb-4 text-balance">
              Occasional updates from the cafe
            </h2>
            <p className="text-stone leading-relaxed mb-8 max-w-[46ch]">
              Seasonal drink drops, new latte art designs and event news. No newsletters full of filler —
              just things worth knowing.
            </p>
            <div className="flex flex-wrap gap-3" data-reveal data-delay="1">
              <Link href="/manka-club" className="btn btn-outline border-cream/20 text-cream hover:bg-cream hover:text-ink">
                Sign up — it&apos;s free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
