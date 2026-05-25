import Link from 'next/link'
import { HOURS } from '@/data/hours'

const LINKS = [
  { href: '/menu',         label: 'Menu' },
  { href: '/visit',        label: 'Visit' },
  { href: '/inside-manka', label: 'Inside Manka' },
  { href: '/gatherings',   label: 'Gatherings' },
  { href: '/manka-club',   label: 'Manka Notes' },
  { href: '/faq',          label: 'FAQ' },
]

const INSTAGRAM = 'https://www.instagram.com/manka_cafe/'
const FACEBOOK  = 'https://www.facebook.com/p/Manka-Cafe-%E6%BB%BF%E8%8F%AF-61557450650306/'
const UBEREATS  = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'

function fmt(t: string) {
  const [h, m] = t.split(':').map(Number)
  const p = h >= 12 ? 'pm' : 'am'
  const hr = h > 12 ? h - 12 : h === 0 ? 12 : h
  return m === 0 ? `${hr}${p}` : `${hr}:${String(m).padStart(2, '0')}${p}`
}

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Brand */}
          <div>
            <p className="font-display font-bold text-cream text-xl mb-1">Manka Cafe</p>
            <p className="text-cream/30 text-sm mb-5 font-display">滿華</p>
            <p className="text-sm text-cream/50 leading-relaxed max-w-[28ch]">
              A quiet anime cafe hidden upstairs in Market Square, Sunnybank.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center
                           hover:border-cream/30 hover:text-cream transition-colors duration-150"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-cream/10 flex items-center justify-center
                           hover:border-cream/30 hover:text-cream transition-colors duration-150"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-2xs uppercase tracking-widest text-cream/30 font-medium mb-5">Pages</p>
            <ul className="space-y-2.5">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/50 hover:text-cream transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={UBEREATS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-150"
                >
                  Order on Uber Eats ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + address */}
          <div>
            <p className="text-2xs uppercase tracking-widest text-cream/30 font-medium mb-5">Visit</p>
            <address className="not-italic text-sm text-cream/50 mb-5 leading-relaxed">
              Shop 58 Level 1<br/>
              341 Mains Rd, Sunnybank QLD 4109<br/>
              <span className="text-cream/30 text-xs">Above Yuen's Market, Market Square</span>
            </address>
            <ul className="space-y-1.5">
              {HOURS.map((d) => (
                <li key={d.name} className={`flex justify-between text-xs gap-6 ${d.closed ? 'text-cream/25' : 'text-cream/50'}`}>
                  <span>{d.name}</span>
                  <span>{d.closed ? 'Closed' : `${fmt(d.open!)} – ${fmt(d.close!)}`}</span>
                </li>
              ))}
            </ul>
            <p className="text-2xs text-cream/20 mt-3">Hours may vary on public holidays.</p>
          </div>
        </div>

        <div className="border-t border-cream/8 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-cream/20">© {new Date().getFullYear()} Manka Cafe 滿華. Sunnybank, Brisbane.</p>
        </div>
      </div>
    </footer>
  )
}
