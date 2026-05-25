'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/menu',          label: 'Menu' },
  { href: '/visit',         label: 'Visit' },
  { href: '/inside-manka',  label: 'Inside Manka' },
  { href: '/gatherings',    label: 'Gatherings' },
  { href: '/manka-club',    label: 'Manka Notes' },
]

const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Prevent body scroll while mobile menu is open
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
      ].join(' ')}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="group flex items-baseline gap-2 flex-shrink-0">
            <span className="font-display font-bold text-ink text-base leading-none
                             group-hover:text-brown transition-colors duration-150">
              Manka Cafe
            </span>
            <span className="text-stone/50 text-xs font-body leading-none select-none">
              滿華
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
              className="btn btn-outline text-xs py-2 px-4"
            >
              Order online
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px]
                       text-ink focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2
                       rounded-lg focus-visible:outline-none"
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
