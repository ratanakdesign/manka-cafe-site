import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { ImageFrame } from '@/components/ImageFrame'
import { MENU_ITEMS, MENU_CATEGORIES } from '@/data/menu'

export const metadata: Metadata = {
  title: 'Menu | Manka Cafe Sunnybank — Latte Art, Matcha & Comfort Food',
  description:
    'The Manka Cafe menu — custom 2D and 3D latte art, matcha drinks, Hong Kong-style French toast, sandwiches, chicken schnitzel, chicken tenders and comfort food. Order online or dine in at Market Square, Sunnybank.',
  alternates: { canonical: 'https://mankacafe.com.au/menu' },
}

const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'

const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Manka Cafe Menu',
  url: 'https://mankacafe.com.au/menu',
  hasMenuSection: MENU_CATEGORIES.filter(c => c !== 'Popular at Manka').map((cat) => ({
    '@type': 'MenuSection',
    name: cat,
    hasMenuItem: MENU_ITEMS.filter((i) => i.category === cat).map((item) => ({
      '@type': 'MenuItem',
      name: item.name,
      description: item.description,
      ...(item.price ? { offers: { '@type': 'Offer', price: item.price, priceCurrency: 'AUD' } } : {}),
    })),
  })),
}

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

const DISPLAY_CATEGORIES = MENU_CATEGORIES.filter((c) =>
  c !== 'Popular at Manka' && MENU_ITEMS.some((i) => i.category === c)
)

export default function MenuPage() {
  const popularItems = MENU_ITEMS.filter((i) => i.category === 'Popular at Manka')

  return (
    <>
      <JsonLd data={menuSchema} />

      {/* ─── Header ───────────────────────────────────────────── */}
      <div className="bg-cream pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-stone/60 mb-6">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2 text-stone/30">/</span>
            <span>Menu</span>
          </nav>

          <h1 className="font-display font-bold text-ink text-4xl sm:text-5xl mb-4" data-reveal>
            Menu
          </h1>
          <p className="text-stone text-lg max-w-[46ch] mb-6" data-reveal data-delay="1">
            Custom latte art, Hong Kong-style French toast, sandwiches, comfort food and more.
            Prices shown are from our delivery menu — in-store prices may differ.
          </p>
          <div className="flex gap-3 flex-wrap" data-reveal data-delay="2">
            <a href={UBEREATS} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Order on Uber Eats
            </a>
            <Link href="/visit" className="btn btn-outline">Dine in</Link>
          </div>
        </div>
      </div>

      {/* ─── Category nav ─────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-cream/95 backdrop-blur-sm border-b border-parchment">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide -mx-1 px-1">
            <a href="#popular-at-manka"
               className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full text-stone hover:bg-parchment hover:text-ink transition-colors whitespace-nowrap">
              Popular
            </a>
            {DISPLAY_CATEGORIES.map((cat) => (
              <a key={cat} href={`#${slugify(cat)}`}
                 className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full text-stone hover:bg-parchment hover:text-ink transition-colors whitespace-nowrap">
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Popular at Manka ─────────────────────────────────── */}
      <section id="popular-at-manka" className="bg-parchment py-16 lg:py-20 scroll-mt-nav">
        <div className="container">
          <div className="mb-10" data-reveal>
            <p className="text-xs tracking-widest uppercase text-stone mb-3">Most ordered</p>
            <h2 className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight">
              Popular at Manka
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {popularItems.map((item, i) => (
              <div
                key={item.id}
                className="group"
                data-reveal
                data-delay={String((i % 3) + 1) as '1' | '2' | '3'}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt ?? item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <ImageFrame brief={item.name} className="h-full rounded-2xl" />
                  )}
                </div>
                <div className="flex items-baseline justify-between gap-3 mb-1.5">
                  <h3 className="font-display font-semibold text-ink text-base leading-snug">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="text-sm text-stone flex-shrink-0 tabular-nums">{item.price}</span>
                  )}
                </div>
                <p className="text-sm text-stone leading-relaxed">{item.description}</p>
                {item.note && (
                  <p className="text-xs text-stone/60 mt-1.5 italic">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Latte Art — featured section ─────────────────────── */}
      <section
        id={slugify('Latte Art Drinks')}
        className="bg-cream py-16 lg:py-20 scroll-mt-nav"
        aria-labelledby="latte-art-heading"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Latte Art Drinks
              </p>
              <h2
                id="latte-art-heading"
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-4 text-balance"
                data-reveal data-delay="1"
              >
                Made by hand, different every time
              </h2>
              <p className="text-stone leading-relaxed mb-8 max-w-[44ch]" data-reveal data-delay="2">
                All latte art is available on warm espresso drinks, dine-in only.
                For custom photo prints, DM us on Instagram before your visit.
              </p>

              <div className="space-y-0" data-reveal data-delay="3">
                {MENU_ITEMS.filter((i) => i.category === 'Latte Art Drinks').map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-6 py-4 border-b border-parchment last:border-0"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-ink text-sm mb-1">{item.name}</p>
                      <p className="text-stone text-sm leading-relaxed">{item.description}</p>
                      {item.note && <p className="text-xs text-stone/60 mt-1 italic">{item.note}</p>}
                    </div>
                    {item.price && (
                      <p className="text-sm text-stone flex-shrink-0 tabular-nums">{item.price}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden" data-reveal data-delay="2">
              <Image
                src="/images/latte-art/manka-cafe-rose-latte-hot.jpg"
                alt="2D rose latte art at Manka Cafe — a warm espresso drink with a hand-crafted rose design in steamed milk foam, Sunnybank"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Remaining categories ─────────────────────────────── */}
      {DISPLAY_CATEGORIES.filter((c) => c !== 'Latte Art Drinks').map((category, ci) => {
        const items = MENU_ITEMS.filter((i) => i.category === category)
        const hasImages = items.some((i) => i.image)

        return (
          <section
            key={category}
            id={slugify(category)}
            className={`py-16 lg:py-20 scroll-mt-nav ${(ci + 1) % 2 === 0 ? 'bg-cream' : 'bg-parchment'}`}
            aria-labelledby={`heading-${slugify(category)}`}
          >
            <div className="container">
              <div className="mb-10" data-reveal>
                <p className="text-xs tracking-widest uppercase text-stone mb-3">{category}</p>
              </div>

              <div className={hasImages ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8' : 'max-w-2xl space-y-0'}>
                {items.map((item, ii) => (
                  hasImages ? (
                    /* Card with image */
                    <div
                      key={item.id}
                      className="group"
                      data-reveal
                      data-delay={String((ii % 3) + 1) as '1' | '2' | '3'}
                    >
                      {item.image ? (
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                          <Image
                            src={item.image}
                            alt={item.imageAlt ?? item.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ) : null}
                      <div className="flex items-baseline justify-between gap-3 mb-1.5">
                        <h3 className="font-display font-semibold text-ink text-sm leading-snug">{item.name}</h3>
                        {item.price && <span className="text-sm text-stone flex-shrink-0 tabular-nums">{item.price}</span>}
                      </div>
                      <p className="text-sm text-stone leading-relaxed">{item.description}</p>
                      {item.note && <p className="text-xs text-stone/60 mt-1 italic">{item.note}</p>}
                    </div>
                  ) : (
                    /* Text-only list row */
                    <div
                      key={item.id}
                      className="flex items-start justify-between gap-6 py-4 border-b border-parchment last:border-0"
                      data-reveal
                    >
                      <div className="flex-1">
                        <p className="font-medium text-ink text-sm mb-1">{item.name}</p>
                        <p className="text-stone text-sm leading-relaxed">{item.description}</p>
                        {item.note && <p className="text-xs text-stone/60 mt-1 italic">{item.note}</p>}
                      </div>
                      {item.price && <p className="text-sm text-stone flex-shrink-0 tabular-nums">{item.price}</p>}
                    </div>
                  )
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ─── Footer CTA ───────────────────────────────────────── */}
      <section className="bg-ink py-16 lg:py-20">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6" data-reveal>
            <div>
              <p className="font-display font-bold text-cream text-xl mb-1">
                Dine in for the full experience
              </p>
              <p className="text-stone text-sm">The 3D latte art is best seen in person.</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link href="/visit" className="btn btn-outline border-cream/20 text-cream hover:bg-cream hover:text-ink">
                Plan your visit
              </Link>
              <a
                href={UBEREATS}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost text-stone hover:text-cream"
              >
                Order delivery
                <span className="btn-arrow" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
