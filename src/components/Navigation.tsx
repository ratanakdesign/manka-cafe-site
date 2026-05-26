'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/menu',       label: 'Menu' },
  { href: '/visit',      label: 'Visit' },
  { href: '/gatherings', label: 'Gatherings' },
  { href: '/manka-club', label: 'Manka Notes' },
]

// Pages that open with a full-bleed dark image — nav needs light text when unscrolled
const DARK_HERO_PAGES = ['/', '/gatherings', '/inside-manka']

const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const pathname = usePathname()

  const isLight = !scrolled && !menuOpen && DARK_HERO_PAGES.includes(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-[background-color,box-shadow] duration-300',
        scrolled || menuOpen
          ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(28,21,18,0.07)]'
          : 'bg-transparent',
        isLight ? 'nav-header-light' : '',
      ].join(' ')}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0">
            <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-black/10">
              <Image
                src="/images/hero/manka-cafe-logo-circular.jpg"
                alt="Manka Cafe logo"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </div>
            <span className={[
              'font-display font-bold text-base leading-none transition-colors duration-150',
              isLight
                ? 'text-cream group-hover:text-cream/80'
                : 'text-ink group-hover:text-brown',
            ].join(' ')}>
              Manka Cafe
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'is-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href={UBEREATS}
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'btn btn-outline text-xs py-2 px-4',
                isLight ? 'border-cream/40 text-cream hover:bg-cream hover:text-ink hover:border-cream' : '',
              ].join(' ')}
            >
              Order online
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={[
              'lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]',
              'focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2',
              'rounded-lg focus-visible:outline-none',
              isLight ? 'text-cream' : 'text-ink',
            ].join(' ')}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={[
                'block w-5 h-px bg-current origin-center',
                'transition-transform duration-200 ease-out-quart',
                menuOpen ? 'translate-y-[6px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-px bg-current',
                'transition-opacity duration-150',
                menuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-px bg-current origin-center',
                'transition-transform duration-200 ease-out-quart',
                menuOpen ? '-translate-y-[6px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={[
          'lg:hidden fixed inset-0 top-16 bg-cream z-40',
          'transition-opacity duration-300',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav
          className="container flex flex-col pt-8 pb-10 gap-1"
          aria-label="Mobile navigation"
        >
          {NAV.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
              className={[
                'font-display font-semibold text-3xl text-ink py-2',
                'border-b border-parchment',
                'transition-[opacity,transform] duration-300 ease-out-expo',
                menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
                pathname === link.href ? 'text-brown' : '',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={UBEREATS}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-6 self-start"
          >
            Order on Uber Eats
          </a>
        </nav>
      </div>
    </header>
  )
}
