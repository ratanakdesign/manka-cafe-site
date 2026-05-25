'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/visit', label: 'Visit' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/private-bookings', label: 'Private Bookings' },
  { href: '/manka-club', label: 'Manka Club' },
]

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled || menuOpen
          ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-blush/30'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl" aria-hidden="true">☕</span>
            <span className="font-display font-bold text-brown text-lg leading-none">
              Manka Cafe
              <span className="hidden sm:inline text-charcoal/50 font-normal text-sm ml-1">
                滿華
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-blush/60 text-brown'
                    : 'text-charcoal hover:bg-cream hover:text-brown'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brown text-cream text-sm font-semibold px-4 py-2 rounded-xl hover:bg-brown/90 transition-colors"
            >
              Order on Uber Eats
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl text-charcoal hover:bg-blush/30 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-blush/30 bg-cream/98">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-blush/60 text-brown'
                    : 'text-charcoal hover:bg-blush/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-brown text-cream text-sm font-semibold px-4 py-3 rounded-xl text-center hover:bg-brown/90 transition-colors"
            >
              Order on Uber Eats
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
