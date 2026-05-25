import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { FAQS } from '@/data/faqs'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ | Location, Menu, Latte Art & Bookings',
  description:
    'Answers to the most common questions about Manka Cafe — where we are, what we serve, how custom latte art works, opening hours and how to book a private event.',
  alternates: { canonical: 'https://mankacafe.com.au/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <div className="page-hero bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-4">
            <Link href="/" className="hover:text-brown transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">FAQ</span>
          </nav>
          <h1 className="font-display font-extrabold text-brown text-4xl sm:text-5xl mb-4">
            Frequently asked questions
          </h1>
          <p className="text-charcoal/70 text-lg max-w-xl">
            Everything you need to know about Manka Cafe — location, menu, latte art, bookings and more.
          </p>
        </div>
      </div>

      <FAQClient />
    </>
  )
}
