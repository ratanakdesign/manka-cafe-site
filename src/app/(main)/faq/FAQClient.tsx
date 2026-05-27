'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FAQS, FAQ_CATEGORIES } from '@/data/faqs'

export default function FAQClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openId, setOpenId] = useState<string | null>(null)

  const filtered =
    activeCategory === 'All'
      ? FAQS
      : FAQS.filter((faq) => faq.category === activeCategory)

  return (
    <div className="bg-cream pb-20 lg:pb-28">
      <div className="container">
        <div className="max-w-3xl">

          {/* Category filter */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 mb-10 -mx-1 px-1"
            role="tablist"
            aria-label="FAQ categories"
          >
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenId(null) }}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`flex-shrink-0 text-xs font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-ink text-cream'
                    : 'bg-parchment text-stone hover:bg-parchment/80 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="divide-y divide-parchment">
            {filtered.map((faq) => (
              <div key={faq.id}>
                <button
                  onClick={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
                  aria-expanded={openId === faq.id}
                  aria-controls={`answer-${faq.id}`}
                  className="w-full flex items-start justify-between gap-6 py-5 text-left
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brown"
                >
                  <span className="font-display font-semibold text-ink text-base leading-snug">
                    {faq.question}
                  </span>
                  <svg
                    className={`flex-shrink-0 w-4 h-4 text-stone transition-transform duration-200 mt-1 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openId === faq.id && (
                  <div
                    id={`answer-${faq.id}`}
                    role="region"
                    className="pb-5 text-sm text-stone leading-relaxed"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 pt-10 border-t border-parchment">
            <p className="font-display font-semibold text-ink text-xl mb-2">
              Still have a question?
            </p>
            <p className="text-stone text-sm mb-6">
              Send us a message on Instagram — we&apos;re happy to help.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.instagram.com/manka_cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Message on Instagram
              </a>
              <Link href="/visit" className="btn btn-outline">
                Plan your visit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
