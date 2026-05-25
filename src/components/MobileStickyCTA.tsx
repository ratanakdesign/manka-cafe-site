'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const ACTIONS = [
  {
    label: 'Menu',
    href: '/menu',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    label: 'Directions',
    href: 'https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Order',
    href: 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    label: 'Book',
    href: '/private-bookings',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-cream border-t border-blush/40 shadow-lg safe-area-inset-bottom"
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-4 divide-x divide-blush/30 pb-safe">
        {ACTIONS.map((action) =>
          action.external ? (
            <a
              key={action.label}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 py-3 text-charcoal hover:bg-blush/20 transition-colors active:bg-blush/40"
            >
              {action.icon}
              <span className="text-xs font-medium">{action.label}</span>
            </a>
          ) : (
            <Link
              key={action.label}
              href={action.href}
              className="flex flex-col items-center justify-center gap-1 py-3 text-charcoal hover:bg-blush/20 transition-colors active:bg-blush/40"
            >
              {action.icon}
              <span className="text-xs font-medium">{action.label}</span>
            </Link>
          )
        )}
      </div>
    </div>
  )
}
