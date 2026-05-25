'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const UBEREATS = 'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ'
const MAPS     = 'https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109'

const ACTIONS = [
  {
    label: 'Menu',
    href: '/menu',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h10"/>
      </svg>
    ),
  },
  {
    label: 'Directions',
    href: MAPS,
    external: true,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    label: 'Order',
    href: UBEREATS,
    external: true,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
      </svg>
    ),
  },
  {
    label: 'Gatherings',
    href: '/gatherings',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    ),
  },
]

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 440)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 sticky-cta-bar ${visible ? 'is-visible' : ''}`}
      role="navigation"
      aria-label="Quick actions"
    >
      <div
        className="bg-cream/95 backdrop-blur-sm border-t border-parchment grid grid-cols-4"
        style={{ paddingBottom: 'var(--safe-bottom)' }}
      >
        {ACTIONS.map((a) =>
          a.external ? (
            <a
              key={a.label}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 py-3 text-stone
                         hover:text-ink active:text-ink active:bg-parchment/60
                         transition-colors duration-100"
            >
              {a.icon}
              <span className="text-[10px] font-medium tracking-wide">{a.label}</span>
            </a>
          ) : (
            <Link
              key={a.label}
              href={a.href}
              className="flex flex-col items-center justify-center gap-1 py-3 text-stone
                         hover:text-ink active:text-ink active:bg-parchment/60
                         transition-colors duration-100"
            >
              {a.icon}
              <span className="text-[10px] font-medium tracking-wide">{a.label}</span>
            </Link>
          )
        )}
      </div>
    </div>
  )
}
