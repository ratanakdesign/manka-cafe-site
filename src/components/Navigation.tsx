'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/',           label: 'Home' },
  { href: '/menu',       label: 'Menu' },
  { href: '/visit',      label: 'Visit' },
  { href: '/gatherings', label: 'Gatherings' },
  { href: '/manka-club', label: 'Manka Notes' },
]

const DARK_HERO_PAGES = ['/', '/gatherings', '/inside-manka']
const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const pathname   = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)

  const isLight = !scrolled && !menuOpen && DARK_HERO_PAGES.includes(pathname)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close when navigating
  useEffect(() => { closeMenu() }, [pathname, closeMenu])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeMenu])

  // Move focus into overlay when it opens
  useEffect(() => {
    if (menuOpen && overlayRef.current) {
      const first = overlayRef.current.querySelector<HTMLElement>('button, a')
      first?.focus()
    }
  }, [menuOpen])

  return (
    <>
      {/* ─── Header bar ──────────────────────────────────────────── */}
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
                  fill className="object-cover"
                  sizes="36px"
                  priority
                />
              </div>
              <span className={[
                'font-display font-bold text-base leading-none transition-colors duration-150',
                isLight ? 'text-cream group-hover:text-cream/80' : 'text-ink group-hover:text-brown',
              ].join(' ')}>
                Manka Cafe
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {NAV.filter(l => l.href !== '/').map((link) => (
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
              onClick={() => setMenuOpen(v => !v)}
              className={[
                'lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]',
                'focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2',
                'rounded-lg focus-visible:outline-none',
                isLight ? 'text-cream' : 'text-ink',
              ].join(' ')}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span className={['block w-5 h-px bg-current origin-center transition-transform duration-200', menuOpen ? 'translate-y-[6px] rotate-45' : ''].join(' ')} />
              <span className={['block w-5 h-px bg-current transition-opacity duration-150',              menuOpen ? 'opacity-0' : 'opacity-100'].join(' ')} />
              <span className={['block w-5 h-px bg-current origin-center transition-transform duration-200', menuOpen ? '-translate-y-[6px] -rotate-45' : ''].join(' ')} />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile full-screen menu overlay ─────────────────────── */}
      {/*
        Rendered as a SIBLING of <header>, not inside it.
        This gives it its own stacking context at z-[60], above the header's z-50,
        so page content and sticky navs can never bleed through.
      */}
      <div
        id="mobile-nav"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!menuOpen}
        className={[
          'lg:hidden fixed inset-0 z-[60] bg-cream flex flex-col',
          'transition-[opacity,transform] duration-300 ease-out',
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none',
        ].join(' ')}
        style={{ height: '100dvh' }}
      >
        {/* Top bar — mirrors header height, contains close button */}
        <div className="flex items-center justify-between h-16 flex-shrink-0 border-b border-parchment px-5 sm:px-8">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5"
            tabIndex={menuOpen ? 0 : -1}
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-black/10 flex-shrink-0">
              <Image
                src="/images/hero/manka-cafe-logo-circular.jpg"
                alt="Manka Cafe"
                fill className="object-cover"
                sizes="36px"
              />
            </div>
            <span className="font-display font-bold text-base text-ink">Manka Cafe</span>
          </Link>

          <button
            onClick={closeMenu}
            className="w-10 h-10 flex items-center justify-center text-ink rounded-lg
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown"
            aria-label="Close menu"
            tabIndex={menuOpen ? 0 : -1}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links — fill remaining height, scrollable if needed */}
        <nav
          className="flex-1 overflow-y-auto px-5 sm:px-8 pt-4 pb-8"
          aria-label="Mobile navigation"
        >
          {NAV.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              style={{ transitionDelay: menuOpen ? `${i * 30}ms` : '0ms' }}
              className={[
                'flex items-center justify-between w-full min-h-[56px]',
                'font-display font-semibold text-2xl leading-none',
                'border-b border-parchment last:border-0',
                'transition-[opacity,transform,color] duration-300',
                menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3',
                pathname === link.href ? 'text-coffee' : 'text-ink hover:text-brown',
              ].join(' ')}
            >
              {link.label}
              {pathname === link.href && (
                <span className="w-1.5 h-1.5 rounded-full bg-coffee flex-shrink-0" aria-hidden="true" />
              )}
            </Link>
          ))}

          <div
            className={[
              'mt-8 transition-[opacity,transform] duration-300',
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2',
            ].join(' ')}
            style={{ transitionDelay: menuOpen ? `${NAV.length * 30 + 30}ms` : '0ms' }}
          >
            <a
              href={UBEREATS}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="btn btn-primary w-full justify-center"
            >
              Order on Uber Eats
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
