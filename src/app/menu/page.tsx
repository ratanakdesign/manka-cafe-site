import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { MENU_ITEMS, MENU_CATEGORIES } from '@/data/menu'

export const metadata: Metadata = {
  title: 'Menu | Latte Art, Matcha, Toast & Brunch',
  description:
    'Explore the Manka Cafe menu — custom 2D and 3D latte art, matcha drinks, Hong Kong-style French toast, sandwiches, brunch and cafe favourites in Sunnybank.',
  alternates: { canonical: 'https://mankacafe.com.au/menu' },
}

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

const CATEGORY_ICONS: Record<string, string> = {
  'Signature Latte Art': '☕',
  'Matcha & Coffee': '🍵',
  'Iced Drinks': '🧊',
  'Toast & Desserts': '🍞',
  'Sandwiches': '🥪',
  'Breakfast & Brunch': '🍳',
  'Mains': '🍽️',
  'Pasta': '🍝',
  'Seasonal Specials': '✨',
}

export default function MenuPage() {
  const categories = MENU_CATEGORIES.filter((cat) =>
    MENU_ITEMS.some((item) => item.category === cat)
  )

  return (
    <>
      <JsonLd data={menuSchema} />

      {/* Hero */}
      <div className="page-hero bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-4">
            <Link href="/" className="hover:text-brown transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">Menu</span>
          </nav>
          <h1 className="font-display font-extrabold text-brown text-4xl sm:text-5xl mb-4">
            Our Menu
          </h1>
          <p className="text-charcoal/70 text-lg max-w-xl mb-6">
            From custom 3D latte art to Hong Kong-style French toast and comforting mains — there&apos;s
            something for every visit.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Order on Uber Eats
            </a>
            <Link href="/visit" className="btn-outline">
              Visit Us
            </Link>
          </div>
          <p className="text-xs text-charcoal/50 mt-4">
            Prices shown are indicative in-store prices. Delivery platform prices may vary.
          </p>
        </div>
      </div>

      {/* Sticky category nav */}
      <div className="sticky top-16 z-30 bg-cream/95 backdrop-blur-sm border-b border-blush/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${slugify(cat)}`}
                className="flex-shrink-0 text-sm font-medium px-3 py-1.5 rounded-xl text-charcoal/70 hover:bg-blush/30 hover:text-brown transition-colors whitespace-nowrap"
              >
                {CATEGORY_ICONS[cat]} {cat}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Latte Art feature section */}
      <section
        className="py-12 sm:py-16"
        style={{ background: 'linear-gradient(135deg, #FFF8F0, #FFF0E8)' }}
        id={slugify('Signature Latte Art')}
        aria-labelledby="latte-art-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-3xl mb-2 block" aria-hidden="true">☕</span>
              <h2 id="latte-art-heading" className="section-title text-3xl sm:text-4xl mb-4">
                Signature Latte Art
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Our latte art is what Manka Cafe is most known for. Each drink is made by hand —
                from sculpted 3D milk foam characters to hand-drawn pours and custom photo prints.
              </p>

              {/* How it works */}
              <div className="bg-white rounded-2xl p-5 border border-blush/30 mb-6">
                <h3 className="font-display font-bold text-brown text-base mb-4">
                  How custom latte art works
                </h3>
                <ul className="space-y-3 text-sm text-charcoal/70">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blush/60 flex items-center justify-center text-xs font-bold text-brown">1</span>
                    <span>
                      <strong className="text-charcoal">3D Milk Foam Art:</strong> Sculpted characters
                      made from milk foam on top of your latte. Each one is unique — ask in-store.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blush/60 flex items-center justify-center text-xs font-bold text-brown">2</span>
                    <span>
                      <strong className="text-charcoal">2D Drawing:</strong> Classic hand-drawn latte art
                      poured directly onto your drink. Available daily.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blush/60 flex items-center justify-center text-xs font-bold text-brown">3</span>
                    <span>
                      <strong className="text-charcoal">2D Print Art:</strong> Characters or designs
                      printed onto milk foam. Choose from our collection.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blush/60 flex items-center justify-center text-xs font-bold text-brown">4</span>
                    <span>
                      <strong className="text-charcoal">Custom Photo Print:</strong> Bring your own
                      photo or character. DM us on Instagram before your visit to arrange.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-sm text-amber-800">
                <strong>Note:</strong> Latte art is available on warm drinks only. Custom photo prints
                require prior arrangement via Instagram DM. Best enjoyed dine-in.
              </div>

              <div className="mt-5 flex gap-3 flex-wrap">
                <a
                  href="https://www.instagram.com/manka_cafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  DM on Instagram
                </a>
              </div>
            </div>

            {/* Latte art item cards */}
            <div className="space-y-3">
              {MENU_ITEMS.filter((i) => i.category === 'Signature Latte Art').map((item) => (
                <div key={item.id} className="card flex gap-4 p-4">
                  <div
                    className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl`}
                    role="img"
                    aria-label={`Photo of ${item.name}`}
                  >
                    ☕
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-bold text-brown text-sm">{item.name}</h3>
                      {item.price && (
                        <span className="flex-shrink-0 text-sm font-semibold text-brown">{item.price}</span>
                      )}
                    </div>
                    <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="tag text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remaining categories */}
      {categories
        .filter((cat) => cat !== 'Signature Latte Art')
        .map((category) => {
          const items = MENU_ITEMS.filter((i) => i.category === category)
          return (
            <section
              key={category}
              id={slugify(category)}
              className="py-12 sm:py-16 border-t border-blush/20"
              aria-labelledby={`heading-${slugify(category)}`}
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl" aria-hidden="true">{CATEGORY_ICONS[category]}</span>
                  <h2
                    id={`heading-${slugify(category)}`}
                    className="section-title text-2xl sm:text-3xl"
                  >
                    {category}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="card flex flex-col">
                      <div
                        className={`h-36 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                        role="img"
                        aria-label={`Photo of ${item.name} at Manka Cafe`}
                      >
                        <span className="text-3xl opacity-50" aria-hidden="true">
                          {CATEGORY_ICONS[category]}
                        </span>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-display font-bold text-brown text-sm leading-tight">
                            {item.name}
                          </h3>
                          {item.price && (
                            <span className="flex-shrink-0 text-sm font-semibold text-brown">
                              {item.price}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-charcoal/70 leading-relaxed flex-1">
                          {item.description}
                        </p>
                        {item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {item.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="tag">{tag}</span>
                            ))}
                          </div>
                        )}
                        {item.available === 'seasonal' && (
                          <p className="text-xs text-amber-700 mt-2 font-medium">✨ Limited availability</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

      {/* Footer CTA */}
      <section className="py-16 bg-cream border-t border-blush/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="section-title text-2xl mb-3">Ready to visit?</h2>
          <p className="text-charcoal/60 mb-6">
            Dine in for the full experience — especially for our 3D latte art.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/visit" className="btn-primary">Plan Your Visit</Link>
            <a
              href="https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Order on Uber Eats
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
