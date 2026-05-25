import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { ImageFrame } from '@/components/ImageFrame'
import { MENU_ITEMS, MENU_CATEGORIES } from '@/data/menu'

export const metadata: Metadata = {
  title: 'Menu | Manka Cafe Sunnybank',
  description:
    'Custom latte art, matcha drinks, Hong Kong-style French toast, sandwiches and comfort food at Manka Cafe, Sunnybank.',
  alternates: { canonical: 'https://mankacafe.com.au/menu' },
}

const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'

const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Manka Cafe Menu',
  url: 'https://mankacafe.com.au/menu',
  hasMenuSection: MENU_CATEGORIES.map((cat) => ({
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

export default function MenuPage() {
  const categories = MENU_CATEGORIES.filter((cat) =>
    MENU_ITEMS.some((item) => item.category === cat)
  )

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
            Custom latte art, matcha, Hong Kong-style French toast and comfort food.
            Prices are indicative — delivery platform prices may vary.
          </p>
          <div className="flex gap-3 flex-wrap" data-reveal data-delay="2">
            <a
              href={UBEREATS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Order on Uber Eats
            </a>
            <Link href="/visit" className="btn btn-outline">
              Dine in
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Category nav ─────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-cream/95 backdrop-blur-sm border-b border-parchment">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide -mx-1 px-1">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${slugify(cat)}`}
                className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-full text-stone
                           hover:bg-parchment hover:text-ink transition-colors whitespace-nowrap
                           scroll-mt-nav"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Latte Art — featured section ─────────────────────── */}
      <section
        id={slugify('Latte Art Drinks')}
        className="bg-parchment py-16 lg:py-20 scroll-mt-nav"
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
                data-reveal
                data-delay="1"
              >
                Made by hand, different every time
              </h2>
              <p className="text-stone leading-relaxed mb-8 max-w-[44ch]" data-reveal data-delay="2">
                All latte art is made on warm espresso drinks. Custom photo prints require
                prior arrangement — DM us on Instagram before your visit.
              </p>

              <div className="space-y-4" data-reveal data-delay="3">
                {MENU_ITEMS.filter((i) => i.category === 'Latte Art Drinks').map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-6 py-3 border-b border-parchment last:border-0"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-ink text-sm mb-1">{item.name}</p>
                      <p className="text-stone text-sm leading-relaxed">{item.description}</p>
                      {item.note && (
                        <p className="text-xs text-stone/60 mt-1 italic">{item.note}</p>
                      )}
                    </div>
                    {item.price && (
                      <p className="text-sm text-stone flex-shrink-0 tabular-nums">{item.price}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal data-delay="2">
              {/* TODO: Replace with latte art hero photo — 3D foam character on a latte,
                  close up, warm light, shallow depth of field */}
              <ImageFrame
                aspect="4/5"
                brief="3D milk foam character on a latte — close up, warm light, cafe context visible in soft background."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Remaining categories ─────────────────────────────── */}
      {categories
        .filter((cat) => cat !== 'Latte Art Drinks')
        .map((category, ci) => {
          const items = MENU_ITEMS.filter((i) => i.category === category)
          const featuredItem = items.find((i) => i.featured)

          return (
            <section
              key={category}
              id={slugify(category)}
              className={`py-16 lg:py-20 scroll-mt-nav ${ci % 2 === 0 ? 'bg-cream' : 'bg-parchment'}`}
              aria-labelledby={`heading-${slugify(category)}`}
            >
              <div className="container">
                <div className="mb-10" data-reveal>
                  <p className="text-xs tracking-widest uppercase text-stone mb-3">{category}</p>
                  {featuredItem && (
                    <h2
                      id={`heading-${slugify(category)}`}
                      className="font-display font-bold text-ink text-2xl sm:text-3xl leading-tight text-balance sr-only"
                    >
                      {category}
                    </h2>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  {items.map((item, ii) => (
                    <div
                      key={item.id}
                      data-reveal
                      data-delay={String((ii % 3) + 1) as '1' | '2' | '3'}
                    >
                      {item.featured && (
                        <div className="mb-4">
                          {/* TODO: Replace with real photo for this item */}
                          <ImageFrame
                            aspect="4/3"
                            brief={`${item.name} — food or drink photography, natural light, Manka Cafe setting.`}
                          />
                        </div>
                      )}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="font-medium text-ink text-sm mb-1">{item.name}</p>
                          <p className="text-stone text-sm leading-relaxed">{item.description}</p>
                          {item.note && (
                            <p className="text-xs text-stone/60 mt-1 italic">{item.note}</p>
                          )}
                        </div>
                        {item.price && (
                          <p className="text-sm text-stone flex-shrink-0 tabular-nums">{item.price}</p>
                        )}
                      </div>
                    </div>
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
              <p className="text-stone text-sm">
                Especially for the 3D latte art — it doesn&apos;t travel well.
              </p>
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
