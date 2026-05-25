import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { FAQS } from '@/data/faqs'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ | Manka Cafe Sunnybank',
  description:
    'Common questions about Manka Cafe — where to find us, how latte art works, opening hours, delivery and gatherings.',
  alternates: { canonical: 'https://mankacafe.com.au/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      {/* ─── Header ───────────────────────────────────────────── */}
      <div className="bg-cream pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-stone/60 mb-6">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2 text-stone/30">/</span>
            <span>FAQ</span>
          </nav>

          <h1 className="font-display font-bold text-ink text-4xl sm:text-5xl mb-4" data-reveal>
            Frequently asked questions
          </h1>
          <p className="text-stone text-lg max-w-[46ch]" data-reveal data-delay="1">
            Location, hours, latte art, delivery and gatherings.
          </p>
        </div>
      </div>

      <FAQClient />
    </>
  )
}
