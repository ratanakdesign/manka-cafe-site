import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import OpeningStatus from '@/components/OpeningStatus'
import SocialVideoCarousel from '@/components/SocialVideoCarousel'
import { HOURS } from '@/data/hours'

export const metadata: Metadata = {
  title: 'Manka Cafe Sunnybank | Anime Cafe, Latte Art & Matcha Brisbane',
  description:
    'Manka Cafe is a quiet anime cafe hidden upstairs in Market Square, Sunnybank. Custom 2D and 3D latte art, matcha drinks, Hong Kong-style French toast and manga shelves. Open Wed–Mon.',
  alternates: { canonical: 'https://mankacafe.com.au' },
  openGraph: {
    title: 'Manka Cafe — Anime Cafe in Sunnybank, Brisbane',
    description: 'Custom latte art, manga shelves, Hong Kong-style French toast and a quiet upstairs atmosphere in Market Square, Sunnybank.',
    images: [{ url: '/images/hero/manka-cafe-full-anime-mural-wide.webp', width: 1200, height: 630 }],
  },
}

const MAPS     = 'https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109'
const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'
const INSTAGRAM = 'https://www.instagram.com/manka_cafe/'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Manka Cafe 滿華',
  description:
    'A quiet anime cafe hidden upstairs in Market Square, Sunnybank. Custom 2D and 3D milk foam latte art, matcha drinks, Hong Kong-style French toast, manga shelves and a cosy owner-run atmosphere.',
  url: 'https://mankacafe.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop 58 Level 1, 341 Mains Rd',
    addressLocality: 'Sunnybank',
    addressRegion: 'QLD',
    postalCode: '4109',
    addressCountry: 'AU',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -27.5846, longitude: 153.0511 },
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
  { quote: 'My favourite cafe in Brisbane.', source: 'Google review' },
  { quote: 'Calming atmosphere with Ghibli piano playing.', source: 'Google review' },
  { quote: 'A hidden gem in the busy area of Market Square.', source: 'Google review' },
]

const WHY_COME_BACK = [
  {
    heading: 'Custom latte art, made at the counter',
    body: 'The 3D milk foam characters are the thing people talk about most. Sculpted on top of your latte, different each time. There are also 2D drawn lattes and print options.',
    image: '/images/latte-art/manka-cafe-3d-foam-latte-art-bear.jpg',
    imageAlt: '3D bear milk foam latte art at Manka Cafe in Sunnybank — a sculpted white bear character sitting in a warm drink on a ceramic saucer',
  },
  {
    heading: 'Manga you can actually read',
    body: 'The shelves are there to be used. Regulars work through a series. First-timers pick something familiar. A warm drink, something to read — no rush.',
    image: '/images/inside-manka/manka-cafe-manga-bookshelf-mural-detail.webp',
    imageAlt: 'Manga bookshelf at Manka Cafe — shelves of manga volumes with the anime mural painted behind, Sunnybank',
  },
  {
    heading: 'Hong Kong-style comfort food',
    body: 'The French toast is what people come back for. Deep-fried thick-cut bread with peanut butter, golden syrup and butter — a HK café classic done properly.',
    image: '/images/menu/manka-cafe-hong-kong-french-toast-butter.jpg',
    imageAlt: 'Hong Kong-style French toast at Manka Cafe — golden deep-fried bread with peanut butter and golden syrup',
  },
  {
    heading: 'A space that feels different',
    body: 'Small, owner-run and hidden upstairs. The music is soft — Ghibli piano and lofi. The walls are covered in drawings left by people who visited before you.',
    image: '/images/inside-manka/manka-cafe-customer-art-wall-corner.webp',
    imageAlt: 'Customer art wall at Manka Cafe — a wall dense with hand-drawn anime characters and messages from visitors over the years',
  },
]

const ORDER_ITEMS = [
  {
    name: '3D or 2D Latte Art',
    desc: 'Sculpted foam characters or hand-drawn designs on your latte. Ask in-store for the day\'s options.',
    image: '/images/latte-art/manka-cafe-3d-foam-latte-art-bear.jpg',
    alt: '3D bear milk foam latte art at Manka Cafe in Sunnybank — a sculpted white bear sitting in a warm drink on a ceramic saucer',
  },
  {
    name: 'Hong Kong Style French Toast',
    desc: 'Toast with egg, butter, maple syrup and peanut. The most-reordered item.',
    price: '$15',
    image: '/images/menu/manka-cafe-hong-kong-french-toast-butter.jpg',
    alt: 'Hong Kong-style French toast at Manka Cafe — golden toast with peanut butter and maple syrup',
  },
  {
    name: 'Chicken, Cheese & Avocado Sandwich',
    desc: 'Served with mayonnaise. No. 1 most-liked item on Uber Eats.',
    price: '$15',
    image: '/images/menu/manka-cafe-takeaway-sandwich-packaged.jpg',
    alt: 'Packaged sandwich at Manka Cafe, Sunnybank',
  },
  {
    name: 'Iced Matcha Latte',
    desc: 'Strong matcha flavour, frequently praised in reviews. Ask in-store for availability.',
    image: '/images/menu/manka-cafe-matcha.png',
    alt: 'Iced matcha latte at Manka Cafe, Sunnybank — bright green matcha with ice',
  },
  {
    name: 'Fried Chicken Tender Set',
    desc: 'Crispy tenders — original or spicy. With fries and fresh vegetables.',
    price: '$30.30',
    image: '/images/archive/manka-cafe-chicken-tenders-chips-salad.jpg',
    alt: 'Fried chicken tenders with chips and salad at Manka Cafe, Sunnybank',
  },
  {
    name: 'Big Breakfast',
    desc: 'Toast, scrambled eggs, bacon, beef sausage, tomato beans and ice cream.',
    price: '$29.77',
    image: '/images/menu/manka-cafe-big-breakfast-set.jpg',
    alt: 'Big breakfast set at Manka Cafe, Sunnybank',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-end bg-ink">
        <Image
          src="/images/hero/manka-cafe-full-anime-mural-wide.webp"
          alt="The anime mural at Manka Cafe, Sunnybank — a large hand-painted wall of Japanese anime characters in warm tones"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay so text is legible over the mural */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />

        <div className="relative w-full pb-16 lg:pb-24">
          <div className="container">
            {/* Opening status */}
            <div className="mb-5" data-reveal>
              <OpeningStatus />
            </div>

            <h1
              className="font-display font-bold text-cream text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl
                         leading-[1.05] tracking-tight mb-5 max-w-2xl text-balance"
              data-reveal data-delay="1"
            >
              A quiet anime cafe hidden upstairs in Sunnybank.
            </h1>

            <p
              className="text-cream/75 text-base sm:text-lg leading-relaxed mb-8 max-w-[48ch]"
              data-reveal data-delay="2"
            >
              Come for the custom latte art. Stay for the manga shelves, hand-drawn walls,
              soft music and Hong Kong-style comfort food.
            </p>

            <div className="flex flex-wrap gap-3" data-reveal data-delay="3">
              <Link href="/menu" className="btn btn-outline border-cream/30 text-cream hover:bg-cream hover:text-ink hover:border-cream">
                View the menu
              </Link>
              <Link href="/visit" className="btn btn-ghost text-cream/80 hover:text-cream">
                Find us upstairs
                <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="mt-6" data-reveal data-delay="4">
              <a
                href={UBEREATS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cream/40 hover:text-cream/70 transition-colors duration-150"
              >
                Order on Uber Eats &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Manka Through Their Eyes (video) ────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28 overflow-hidden">
        <div className="container mb-10">
          <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
            Featured by creators
          </p>
          <h2
            className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight text-balance max-w-lg mb-3"
            data-reveal data-delay="1"
          >
            See Manka before you visit
          </h2>
          <p className="text-stone text-base max-w-[50ch]" data-reveal data-delay="2">
            Watch the latte art, food and cosy upstairs space through the clips people are already sharing.
          </p>
        </div>

        <div className="container" data-reveal data-delay="3">
          <SocialVideoCarousel />
        </div>
      </section>

      {/* ─── Review strip ─────────────────────────────────────── */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-14">
            {REVIEWS.map((r, i) => (
              <blockquote
                key={i}
                data-reveal
                data-delay={String(i + 1) as '1' | '2' | '3'}
              >
                <p className="review-quote text-lg sm:text-xl">&ldquo;{r.quote}&rdquo;</p>
                <footer className="review-source mt-3">{r.source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why people come back ─────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="mb-12" data-reveal>
            <p className="text-xs tracking-widest uppercase text-stone mb-3">Why people come back</p>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight text-balance max-w-lg">
              Four things that make Manka worth finding
            </h2>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {WHY_COME_BACK.map((item, i) => (
              <div
                key={item.heading}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
                data-reveal
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight mb-4 text-balance">
                    {item.heading}
                  </h3>
                  <p className="text-stone leading-relaxed text-base">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What to order first ──────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="container">
          <div className="mb-12" data-reveal>
            <p className="text-xs tracking-widest uppercase text-stone mb-3">Start here</p>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight text-balance max-w-lg">
              What to order on your first visit
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {ORDER_ITEMS.map((item, i) => (
              <div
                key={item.name}
                className="group"
                data-reveal
                data-delay={String((i % 3) + 1) as '1' | '2' | '3'}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <h3 className="font-display font-semibold text-ink text-base leading-snug">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="text-sm text-stone flex-shrink-0 tabular-nums">{item.price}</span>
                  )}
                </div>
                <p className="text-sm text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12" data-reveal>
            <Link href="/menu" className="btn btn-primary">
              View the full menu
            </Link>
          </div>
        </div>
      </section>

      {/* ─── How latte art works ──────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Custom latte art
              </p>
              <h2
                className="font-display font-bold text-cream text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal data-delay="1"
              >
                How it works
              </h2>
              <p className="text-stone leading-relaxed mb-8 max-w-[42ch]" data-reveal data-delay="2">
                All latte art is made on warm espresso drinks, available dine-in.
                The 3D foam sculptures are the most popular. Availability depends on the day.
              </p>

              <div className="space-y-6" data-reveal data-delay="3">
                {[
                  { num: '01', name: '3D Milk Foam Art', desc: 'A sculpted character placed on top of your latte. Ask in-store — designs change daily.' },
                  { num: '02', name: '2D Drawn Latte', desc: 'A hand-poured design drawn directly onto your drink. Available most days.' },
                  { num: '03', name: '2D Print Art', desc: 'A character or design printed onto milk foam. Choose from our in-store collection.' },
                  { num: '04', name: 'Custom Photo Print', desc: 'Your own reference printed onto your latte. DM us on Instagram before visiting to arrange.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="font-display text-stone/40 text-sm tabular-nums flex-shrink-0 pt-0.5">
                      {item.num}
                    </span>
                    <div>
                      <p className="font-medium text-cream text-sm mb-1">{item.name}</p>
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
                  className="btn btn-ghost text-cream/70 hover:text-cream"
                >
                  Message us on Instagram for custom orders
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden" data-reveal data-delay="2">
              <Image
                src="/images/latte-art/manka-cafe-3d-foam-latte-art-bear.jpg"
                alt="3D bear milk foam latte art at Manka Cafe in Sunnybank — a sculpted white bear character sitting in a warm drink on a ceramic saucer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Inside Manka ─────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Inside Manka
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal data-delay="1"
              >
                Soft music, manga shelves and a wall covered in drawings
              </h2>
              <p className="text-stone leading-relaxed mb-5 max-w-[44ch]" data-reveal data-delay="2">
                Manka is small, quiet and upstairs from the Market Square rush. Ghibli piano plays
                in the background. The walls are covered in years of customer art.
              </p>
              <blockquote className="border-l-2 border-parchment pl-4 mb-8" data-reveal data-delay="3">
                <p className="review-quote text-base">&ldquo;I ended up reading a whole volume of manga.&rdquo;</p>
                <footer className="review-source mt-2">Google review</footer>
              </blockquote>
              <div data-reveal data-delay="4">
                <Link href="/inside-manka" className="btn btn-primary">
                  See inside
                </Link>
              </div>
            </div>

            <div
              className="grid grid-cols-2 gap-3"
              data-reveal data-delay="2"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/inside-manka/manka-cafe-manga-shelf-customer-art-wall.jpg"
                  alt="Manga shelf and customer art wall at Manka Cafe, Sunnybank"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-6">
                <Image
                  src="/images/inside-manka/manka-cafe-dining-room-mural-view.webp"
                  alt="Dining room with anime mural view at Manka Cafe, Sunnybank"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden -mt-6">
                <Image
                  src="/images/inside-manka/manka-cafe-lounge-area-sticky-note-wall.webp"
                  alt="Lounge area with sticky note wall at Manka Cafe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/inside-manka/manka-cafe-customer-whiteboard-art-panels.jpg"
                  alt="Customer whiteboard art panels at Manka Cafe — visitor drawings on whiteboard panels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
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
                data-reveal data-delay="1"
              >
                We&apos;re upstairs in Market Square, Sunnybank
              </h2>
              <p className="text-stone leading-relaxed mb-8 max-w-[42ch]" data-reveal data-delay="2">
                Above Yuen&apos;s Market on Level 1. Look for the escalator near the centre entrance,
                then find Shop 58.
              </p>

              <div data-reveal data-delay="3">
                {[
                  { step: '01', text: 'Head to 341 Mains Rd, Market Square, Sunnybank' },
                  { step: '02', text: 'Take the escalator or stairs to Level 1' },
                  { step: '03', text: 'Look above Yuen\'s Market — find Shop 58' },
                ].map((w, i, arr) => (
                  <div key={w.step} className={`wayfind-step ${i === arr.length - 1 ? 'pb-0' : ''}`}>
                    <div className="w-10 h-10 rounded-full bg-parchment flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-xs font-bold text-stone">{w.step}</span>
                    </div>
                    <p className="text-sm text-ink leading-relaxed pt-2.5">{w.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3" data-reveal data-delay="4">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Open in Google Maps
                </a>
                <Link href="/visit" className="btn btn-outline">Plan your visit</Link>
              </div>
            </div>

            <div data-reveal data-delay="2">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-parchment">
                <iframe
                  src="https://maps.google.com/maps?q=341+Mains+Rd+Sunnybank+QLD+4109&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manka Cafe location on Google Maps"
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

      {/* ─── Gatherings ───────────────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" data-reveal>
              <Image
                src="/images/gatherings/manka-cafe-community-event-group-photo.jpg"
                alt="A community gathering at Manka Cafe, Sunnybank — a group of visitors at a cafe event"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Gatherings
              </p>
              <h2
                className="font-display font-bold text-cream text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal data-delay="1"
              >
                A space for small, unhurried get-togethers
              </h2>
              <p className="text-stone leading-relaxed mb-6 max-w-[44ch]" data-reveal data-delay="2">
                Birthdays, afternoon teas, end-of-year lunches, anime meetups.
                Manka is quiet enough to talk, small enough to feel private.
              </p>
              <div data-reveal data-delay="3">
                <Link href="/gatherings" className="btn btn-outline border-cream/20 text-cream hover:bg-cream hover:text-ink">
                  Ask about a gathering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Manka Notes ──────────────────────────────────────── */}
      <section className="bg-parchment py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6" data-reveal>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-3">Manka Notes</p>
              <p className="font-display font-bold text-ink text-xl sm:text-2xl mb-1.5 text-balance">
                Occasional notes from the cafe
              </p>
              <p className="text-stone text-sm max-w-[46ch]">
                Seasonal drinks, new latte art designs and small events. No spam.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/manka-club" className="btn btn-primary">
                Join Manka Notes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
