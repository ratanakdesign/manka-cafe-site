import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import OpeningStatus from '@/components/OpeningStatus'
import SocialVideoCarousel from '@/components/SocialVideoCarousel'
import { HOURS } from '@/data/hours'
import type { SocialVideo } from '@/data/socialVideos'
import { client } from '../../sanity/lib/client'
import { urlFor } from '../../sanity/lib/image'

export const revalidate = 60

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

// ─── Fallback constants ──────────────────────────────────────────────────────

const MAPS_FALLBACK     = 'https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109'
const UBEREATS_FALLBACK = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'
const INSTAGRAM_FALLBACK = 'https://www.instagram.com/manka_cafe/'
const FACEBOOK_FALLBACK  = 'https://www.facebook.com/p/Manka-Cafe-%E6%BB%BF%E8%8F%AF-61557450650306/'

const REVIEWS_FALLBACK = [
  { quote: 'My favourite cafe in Brisbane.', source: 'Google review' },
  { quote: 'Calming atmosphere with Ghibli piano playing.', source: 'Google review' },
  { quote: 'I ended up reading a whole volume of manga.', source: 'Google review' },
  { quote: 'A hidden gem in the busy area of Market Square.', source: 'Google review' },
]

const FEATURES = [
  {
    heading: 'Custom latte art at the counter',
    body: 'Sculpted 3D foam characters or hand-drawn designs — different every time. The thing people talk about most.',
    image: '/images/latte-art/manka-cafe-3d-foam-latte-art-bear.jpg',
    imageAlt: '3D bear milk foam latte art at Manka Cafe in Sunnybank',
  },
  {
    heading: 'Manga you can actually read',
    body: 'The shelves are there to be used. Pick something familiar, settle in, no rush.',
    image: '/images/inside-manka/manka-cafe-manga-bookshelf-mural-detail.webp',
    imageAlt: 'Manga bookshelf at Manka Cafe with anime mural behind, Sunnybank',
  },
  {
    heading: 'Hong Kong-style comfort food',
    body: 'Thick-cut French toast with peanut butter and golden syrup — the most-reordered item on the menu.',
    image: '/images/menu/manka-cafe-hong-kong-french-toast-butter.jpg',
    imageAlt: 'Hong Kong-style French toast at Manka Cafe, Sunnybank',
  },
  {
    heading: 'A quiet space upstairs',
    body: 'Small, owner-run, hidden above the Market Square rush. Soft Ghibli piano. Walls covered in drawings.',
    image: '/images/inside-manka/manka-cafe-customer-art-wall-corner.webp',
    imageAlt: 'Customer art wall at Manka Cafe — hand-drawn anime characters by visitors',
  },
]

const ORDER_ITEMS_FALLBACK = [
  {
    id: 'latte-art',
    name: '3D or 2D Latte Art',
    desc: "Sculpted foam characters or hand-drawn designs. Ask in-store for today's options.",
    image: '/images/latte-art/manka-cafe-2d-foam-latte-art.png',
    alt: '2D foam latte art at Manka Cafe in Sunnybank',
  },
  {
    id: 'hk-toast',
    name: 'Hong Kong Style French Toast',
    desc: 'Toast with egg, butter, maple syrup and peanut. The most-reordered item.',
    price: '$15',
    image: '/images/menu/manka-cafe-hong-kong-french-toast-butter.jpg',
    alt: 'Hong Kong-style French toast at Manka Cafe — golden toast with peanut butter and maple syrup',
  },
  {
    id: 'chicken-avo',
    name: 'Chicken, Cheese & Avocado Sandwich',
    desc: 'Served with mayonnaise. No. 1 most-liked item on Uber Eats.',
    price: '$15',
    image: '/images/menu/manka-cafe-takeaway-sandwich-packaged.jpg',
    alt: 'Packaged sandwich at Manka Cafe, Sunnybank',
  },
  {
    id: 'matcha',
    name: 'Iced Matcha Latte',
    desc: 'Strong matcha flavour, frequently praised in reviews. Ask in-store for availability.',
    image: '/images/menu/manka-cafe-matcha.png',
    alt: 'Iced matcha latte at Manka Cafe, Sunnybank',
  },
  {
    id: 'chicken-tender',
    name: 'Fried Chicken Tender Set',
    desc: 'Crispy tenders — original or spicy. With fries and fresh vegetables.',
    price: '$30.30',
    image: '/images/archive/manka-cafe-chicken-tenders-chips-salad.jpg',
    alt: 'Fried chicken tenders with chips and salad at Manka Cafe, Sunnybank',
  },
  {
    id: 'big-breakfast',
    name: 'Big Breakfast',
    desc: 'Toast, scrambled eggs, bacon, beef sausage, tomato beans and ice cream.',
    price: '$29.77',
    image: '/images/menu/manka-cafe-big-breakfast-set.jpg',
    alt: 'Big breakfast set at Manka Cafe, Sunnybank',
  },
]

const LATTE_ART_FALLBACK = [
  { num: '01', name: '3D Milk Foam Art', desc: 'A sculpted character on top of your latte. Designs change daily — ask in-store.' },
  { num: '02', name: '2D Drawn Latte',   desc: 'Hand-poured directly onto your drink. Available most days.' },
  { num: '03', name: '2D Print Art',     desc: 'A character printed onto milk foam. Choose from the in-store collection.' },
  { num: '04', name: 'Custom Photo Print', desc: 'Your own reference printed onto your latte. DM on Instagram before visiting.' },
]

// ─── Types ───────────────────────────────────────────────────────────────────

interface SanityImageRef {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
  hotspot?: { x: number; y: number }
}

interface SiteSettings {
  heroHeadline?: string
  heroDescription?: string
  heroImage?: SanityImageRef
  address?: string
  shopNumber?: string
  googleMapsUrl?: string
  uberEatsUrl?: string
  instagramUrl?: string
  facebookUrl?: string
}

interface SanityMenuItem {
  _id: string
  name: string
  price?: number
  description?: string
  image?: SanityImageRef
}

interface SanityReview {
  _id: string
  quote: string
  source?: string
}

interface SanityLatteArtType {
  _id: string
  title?: string
  description?: string
  order?: number
}

interface SanityCreatorVideo {
  _id: string
  title?: string
  description?: string
  platform?: string
  label?: string
  videoUrl?: string
  originalUrl?: string
  order?: number
}

interface SanityOpeningHours {
  _id: string
  day: string
  openTime?: string
  closeTime?: string
  isClosed?: boolean
  order?: number
}

interface HomePageData {
  siteSettings: SiteSettings | null
  featuredMenuItems: SanityMenuItem[]
  reviews: SanityReview[]
  latteArtTypes: SanityLatteArtType[]
  creatorVideos: SanityCreatorVideo[]
  openingHours: SanityOpeningHours[]
}

// ─── GROQ query ───────────────────────────────────────────────────────────────

const homePageQuery = `{
  "siteSettings": *[_type == "siteSettings"][0] {
    heroHeadline,
    heroDescription,
    heroImage,
    address,
    shopNumber,
    googleMapsUrl,
    uberEatsUrl,
    instagramUrl,
    facebookUrl
  },
  "featuredMenuItems": *[_type == "menuItem" && featured == true] | order(order asc) {
    _id,
    name,
    price,
    description,
    image
  },
  "reviews": *[_type == "review"] {
    _id,
    quote,
    source
  },
  "latteArtTypes": *[_type == "latteArtType"] | order(order asc) {
    _id,
    title,
    description,
    order
  },
  "creatorVideos": *[_type == "creatorVideo"] | order(order asc) {
    _id,
    title,
    description,
    platform,
    label,
    "videoUrl": videoFile.asset->url,
    originalUrl,
    order
  },
  "openingHours": *[_type == "openingHours"] | order(order asc) {
    _id,
    day,
    openTime,
    closeTime,
    isClosed,
    order
  }
}`

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function HomePage() {
  // Fetch from Sanity; fall back gracefully if unavailable
  let data: HomePageData = {
    siteSettings: null,
    featuredMenuItems: [],
    reviews: [],
    latteArtTypes: [],
    creatorVideos: [],
    openingHours: [],
  }
  try {
    data = await client.fetch<HomePageData>(homePageQuery)
  } catch {
    // serves static fallbacks below
  }

  const { siteSettings, featuredMenuItems, reviews, latteArtTypes, creatorVideos, openingHours } = data

  // ── Resolve URLs and links ────────────────────────────────────────────────
  const mapsUrl     = siteSettings?.googleMapsUrl  ?? MAPS_FALLBACK
  const uberEatsUrl = siteSettings?.uberEatsUrl    ?? UBEREATS_FALLBACK
  const instagramUrl = siteSettings?.instagramUrl  ?? INSTAGRAM_FALLBACK
  const facebookUrl  = siteSettings?.facebookUrl   ?? FACEBOOK_FALLBACK
  const address     = siteSettings?.address        ?? 'Shop 58 Level 1, 341 Mains Rd, Sunnybank QLD 4109'
  const shopRef     = siteSettings?.shopNumber     ?? 'Shop 58'

  const heroImageSrc = siteSettings?.heroImage
    ? urlFor(siteSettings.heroImage).width(1920).height(1080).auto('format').url()
    : '/images/hero/manka-cafe-full-anime-mural-wide.webp'

  const heroHeadline    = siteSettings?.heroHeadline    ?? 'A quiet anime cafe hidden upstairs in Sunnybank.'
  const heroDescription = siteSettings?.heroDescription ?? 'Come for the custom latte art. Stay for the manga shelves, hand-drawn walls, soft music and Hong Kong-style comfort food.'

  // ── Reviews ───────────────────────────────────────────────────────────────
  const displayReviews = reviews.length > 0
    ? reviews.map((r) => ({ id: r._id, quote: r.quote, source: r.source ?? '' }))
    : REVIEWS_FALLBACK.map((r, i) => ({ id: String(i), ...r }))

  // ── Featured menu items ───────────────────────────────────────────────────
  interface DisplayMenuItem {
    id: string
    name: string
    price?: string
    desc: string
    imageSrc?: string
    imageAlt: string
  }

  const displayMenuItems: DisplayMenuItem[] = featuredMenuItems.length > 0
    ? featuredMenuItems.map((item) => ({
        id: item._id,
        name: item.name,
        price: item.price != null ? `$${item.price}` : undefined,
        desc: item.description ?? '',
        imageSrc: item.image
          ? urlFor(item.image).width(600).height(450).auto('format').url()
          : undefined,
        imageAlt: item.name,
      }))
    : ORDER_ITEMS_FALLBACK.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        desc: item.desc,
        imageSrc: item.image,
        imageAlt: item.alt,
      }))

  // ── Latte art types ───────────────────────────────────────────────────────
  interface DisplayLatteArt {
    id: string
    num: string
    name: string
    desc: string
  }

  const displayLatteArt: DisplayLatteArt[] = latteArtTypes.length > 0
    ? latteArtTypes.map((item, i) => ({
        id: item._id,
        num: String(i + 1).padStart(2, '0'),
        name: item.title ?? '',
        desc: item.description ?? '',
      }))
    : LATTE_ART_FALLBACK.map((item) => ({ id: item.num, ...item }))

  // ── Creator videos ────────────────────────────────────────────────────────
  const displayVideos: SocialVideo[] | undefined = creatorVideos.length > 0
    ? creatorVideos.map((v) => ({
        id: v._id,
        platform: (v.platform?.toLowerCase() === 'tiktok' ? 'tiktok' : 'instagram') as 'tiktok' | 'instagram',
        embedId: '',
        creatorHandle: '',
        creatorName: '',
        title: v.title ?? '',
        label: v.label ?? '',
        description: v.description ?? '',
        url: v.originalUrl ?? '',
        videoSrc: v.videoUrl,
        thumbnail: undefined,
        thumbnailAlt: v.title ?? '',
        thumbnailStatus: 'missing' as const,
        permissionStatus: 'needs-permission' as const,
      }))
    : undefined

  // ── Opening hours for structured data ────────────────────────────────────
  const schemaHours = openingHours.length > 0
    ? openingHours
        .filter((h) => !h.isClosed)
        .map((h) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: `https://schema.org/${h.day}`,
          opens: h.openTime ?? '10:00',
          closes: h.closeTime ?? '18:30',
        }))
    : HOURS.filter((h) => !h.closed).map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${h.name}`,
        opens: h.open,
        closes: h.close,
      }))

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
    openingHoursSpecification: schemaHours,
    sameAs: [instagramUrl, facebookUrl, uberEatsUrl],
  }

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-end bg-ink">
        <Image
          src={heroImageSrc}
          alt="The anime mural at Manka Cafe, Sunnybank — a large hand-painted wall of Japanese anime characters in warm tones"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />

        <div className="relative w-full pb-16 lg:pb-24">
          <div className="container">
            <div className="mb-5" data-reveal>
              <OpeningStatus />
            </div>

            <h1
              className="font-display font-bold text-cream text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl
                         leading-[1.05] tracking-tight mb-5 max-w-2xl text-balance"
              data-reveal data-delay="1"
            >
              {heroHeadline}
            </h1>

            <p
              className="text-cream/75 text-base sm:text-lg leading-relaxed mb-8 max-w-[48ch]"
              data-reveal data-delay="2"
            >
              {heroDescription}
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
                href={uberEatsUrl}
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

      {/* ─── Videos ───────────────────────────────────────────── */}
      <section className="bg-parchment py-12 lg:py-16 overflow-hidden">
        <div className="container mb-8">
          <p className="text-xs tracking-widest uppercase text-stone mb-3" data-reveal>
            Featured by creators
          </p>
          <h2
            className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight text-balance max-w-lg mb-2"
            data-reveal data-delay="1"
          >
            See Manka before you visit
          </h2>
          <p className="text-stone text-sm max-w-[44ch]" data-reveal data-delay="2">
            Latte art, food and the upstairs space — through the people already sharing it.
          </p>
        </div>
        <div className="container" data-reveal data-delay="3">
          <SocialVideoCarousel videos={displayVideos} />
        </div>
      </section>

      {/* ─── Reviews ──────────────────────────────────────────── */}
      <section className="bg-cream border-y border-parchment py-10 lg:py-12">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6" data-reveal>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-1.5">Real visits</p>
              <h2 className="font-display font-semibold text-ink text-xl sm:text-2xl leading-tight">
                What people mention again and again
              </h2>
            </div>
            <p className="text-stone text-sm leading-relaxed sm:text-right max-w-[34ch] flex-shrink-0">
              Calm music, manga shelves, latte art<br className="hidden sm:block" /> and food worth coming back for.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {displayReviews.map((r, i) => (
              <blockquote
                key={r.id}
                className="bg-parchment rounded-xl px-4 py-4"
                data-reveal
                data-delay={String((i % 4) + 1) as '1' | '2' | '3' | '4'}
              >
                <p className="font-display italic text-ink text-base leading-snug mb-3">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <footer className="text-[10px] tracking-widest uppercase text-stone/60">{r.source}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Feature grid ─────────────────────────────────────── */}
      <section className="bg-parchment py-14 lg:py-20">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7" data-reveal>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-2">Why people come back</p>
              <h2 className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight max-w-sm">
                Four reasons Manka is worth finding.
              </h2>
            </div>
            <Link
              href="/inside-manka"
              className="text-xs font-medium text-brown hover:text-ink transition-colors duration-150 flex-shrink-0 self-end"
            >
              See inside &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
            {FEATURES.map((item, i) => (
              <div
                key={item.heading}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3]"
                data-reveal
                data-delay={String((i % 2) + 1) as '1' | '2'}
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transform-none"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-display font-bold text-cream text-base sm:text-[1.05rem] leading-tight mb-1.5">
                    {item.heading}
                  </h3>
                  <p className="text-cream/70 text-xs sm:text-sm leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What to order first ──────────────────────────────── */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8" data-reveal>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-2">Start here</p>
              <h2 className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight max-w-sm">
                What to order on your first visit
              </h2>
            </div>
            <Link href="/menu" className="btn btn-primary flex-shrink-0 self-end">
              Full menu
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {displayMenuItems.map((item, i) => (
              <div
                key={item.id}
                className="group"
                data-reveal
                data-delay={String((i % 3) + 1) as '1' | '2' | '3'}
              >
                {item.imageSrc ? (
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-2xl bg-parchment mb-3" />
                )}
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="font-display font-semibold text-ink text-sm leading-snug">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="text-sm text-stone flex-shrink-0 tabular-nums">{item.price}</span>
                  )}
                </div>
                <p className="text-xs text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How latte art works ──────────────────────────────── */}
      <section className="bg-ink py-14 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Custom latte art
              </p>
              <h2
                className="font-display font-bold text-cream text-2xl sm:text-3xl leading-tight mb-4 text-balance"
                data-reveal data-delay="1"
              >
                Made at the counter. Different every time.
              </h2>
              <p className="text-stone leading-relaxed mb-8 max-w-[42ch]" data-reveal data-delay="2">
                All latte art is available on warm espresso drinks, dine-in only.
                The 3D foam sculptures are the most popular — availability depends on the day.
              </p>

              <div className="space-y-5" data-reveal data-delay="3">
                {displayLatteArt.map((item) => (
                  <div key={item.id} className="flex gap-5">
                    <span className="font-display text-stone/35 text-xs tabular-nums flex-shrink-0 pt-0.5 w-6">
                      {item.num}
                    </span>
                    <div>
                      <p className="font-medium text-cream text-sm mb-0.5">{item.name}</p>
                      <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8" data-reveal data-delay="4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-cream/70 hover:text-cream"
                >
                  DM us for custom photo orders
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden" data-reveal data-delay="2">
              <Image
                src="/images/latte-art/manka-cafe-3d-foam-latte-art-bear.jpg"
                alt="3D bear milk foam latte art at Manka Cafe in Sunnybank"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Inside Manka ─────────────────────────────────────── */}
      <section className="bg-cream py-14 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-3" data-reveal>
                Inside Manka
              </p>
              <h2
                className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight mb-4 text-balance"
                data-reveal data-delay="1"
              >
                Soft music, manga shelves and a wall of visitor drawings
              </h2>
              <p className="text-stone leading-relaxed mb-4 max-w-[44ch] text-sm" data-reveal data-delay="2">
                Small, quiet and upstairs from Market Square. Ghibli piano in the background.
                The walls are covered in years of customer art — you&apos;re welcome to add yours.
              </p>
              <blockquote className="border-l-2 border-parchment pl-4 mb-7" data-reveal data-delay="3">
                <p className="font-display italic text-brown-deep text-base leading-snug">
                  &ldquo;I ended up reading a whole volume of manga.&rdquo;
                </p>
                <footer className="text-[10px] tracking-widest uppercase text-stone mt-2">Google review</footer>
              </blockquote>
              <div className="flex flex-wrap gap-3" data-reveal data-delay="4">
                <Link href="/inside-manka" className="btn btn-primary">
                  See inside
                </Link>
                <Link href="/visit" className="btn btn-ghost text-stone hover:text-ink">
                  Plan your visit
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3" data-reveal data-delay="2">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/inside-manka/manka-cafe-manga-shelf-customer-art-wall.jpg"
                  alt="Manga shelf and customer art wall at Manka Cafe, Sunnybank"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden mt-6">
                <Image
                  src="/images/inside-manka/manka-cafe-dining-room-mural-view.webp"
                  alt="Dining room with anime mural at Manka Cafe, Sunnybank"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden -mt-6">
                <Image
                  src="/images/inside-manka/manka-cafe-lounge-area-sticky-note-wall.webp"
                  alt="Lounge area with sticky note wall at Manka Cafe"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/inside-manka/manka-cafe-customer-whiteboard-art-panels.jpg"
                  alt="Customer whiteboard art panels at Manka Cafe"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Find us upstairs ─────────────────────────────────── */}
      <section className="bg-parchment py-14 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-3" data-reveal>
                Getting here
              </p>
              <h2
                className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight mb-3 text-balance"
                data-reveal data-delay="1"
              >
                We&apos;re above Yuen&apos;s Market in Market Square
              </h2>
              <p className="text-stone leading-relaxed mb-7 max-w-[40ch] text-sm" data-reveal data-delay="2">
                Level 1 of Market Square, 341 Mains Rd, Sunnybank.
                Take the escalator near the centre entrance, look for {shopRef}.
              </p>

              <div data-reveal data-delay="3">
                {[
                  { step: '01', text: 'Head to 341 Mains Rd, Market Square, Sunnybank' },
                  { step: '02', text: 'Take the escalator or stairs to Level 1' },
                  { step: '03', text: `Find ${shopRef} — above Yuen's Market` },
                ].map((w, i, arr) => (
                  <div key={w.step} className={`wayfind-step ${i === arr.length - 1 ? 'pb-0' : ''}`}>
                    <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-xs font-bold text-stone">{w.step}</span>
                    </div>
                    <p className="text-sm text-ink leading-relaxed pt-2">{w.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3" data-reveal data-delay="4">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Open in Google Maps
                </a>
                <Link href="/visit" className="btn btn-outline">Full visit guide</Link>
              </div>
            </div>

            <div data-reveal data-delay="2">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-cream">
                <iframe
                  src="https://maps.google.com/maps?q=341+Mains+Rd+Sunnybank+QLD+4109&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Manka Cafe location on Google Maps"
                  aria-label="Map showing Manka Cafe at 341 Mains Rd, Sunnybank"
                />
              </div>
              <address className="not-italic mt-3.5 text-sm text-stone leading-relaxed">
                {address}<br />
                <span className="text-stone/50 text-xs">Above Yuen&apos;s Market, Market Square</span>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gatherings ───────────────────────────────────────── */}
      <section className="bg-ink py-14 lg:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" data-reveal>
              <Image
                src="/images/gatherings/manka-cafe-community-event-group-photo.jpg"
                alt="A community gathering at Manka Cafe, Sunnybank"
                fill className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-3" data-reveal>
                Gatherings
              </p>
              <h2
                className="font-display font-bold text-cream text-2xl sm:text-3xl leading-tight mb-4 text-balance"
                data-reveal data-delay="1"
              >
                Small, unhurried get-togethers
              </h2>
              <p className="text-stone leading-relaxed mb-6 max-w-[40ch] text-sm" data-reveal data-delay="2">
                Birthdays, afternoon teas, anime meetups, end-of-year lunches.
                Quiet enough to talk. Small enough to feel like your own.
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
      <section className="bg-parchment py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6" data-reveal>
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-2">Manka Notes</p>
              <p className="font-display font-bold text-ink text-xl sm:text-2xl mb-1 text-balance">
                Occasional notes from the cafe
              </p>
              <p className="text-stone text-sm">
                New latte designs, seasonal drinks and small events. No spam.
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
