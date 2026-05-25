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

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8" role="tablist" aria-label="FAQ categories">
        {FAQ_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`flex-shrink-0 text-sm font-medium px-4 py-1.5 rounded-full transition-colors ${
              activeCategory === cat
                ? 'bg-brown text-cream'
                : 'bg-blush/30 text-charcoal hover:bg-blush/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ accordion */}
      <div className="space-y-3" role="list">
        {filtered.map((faq) => (
          <div
            key={faq.id}
            role="listitem"
            className="bg-white rounded-2xl border border-blush/30 overflow-hidden"
          >
            <button
              onClick={() => toggle(faq.id)}
              aria-expanded={openId === faq.id}
              aria-controls={`answer-${faq.id}`}
              className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brown"
            >
              <span className="font-display font-semibold text-brown text-sm sm:text-base leading-snug">
                {faq.question}
              </span>
              <svg
                className={`flex-shrink-0 w-5 h-5 text-brown/60 transition-transform duration-200 mt-0.5 ${
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
                className="px-5 pb-5 text-sm text-charcoal/70 leading-relaxed border-t border-blush/20 pt-4"
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still have questions */}
      <div className="mt-12 bg-blush/30 rounded-3xl p-6 text-center">
        <h2 className="section-title text-xl mb-2">Still have questions?</h2>
        <p className="text-charcoal/60 text-sm mb-5">
          Drop us a message on Instagram — we&apos;re happy to help.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="https://www.instagram.com/manka_cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Message on Instagram
          </a>
          <Link href="/visit" className="btn-outline">Plan Your Visit</Link>
        </div>
      </div>
    </div>
  )
}
