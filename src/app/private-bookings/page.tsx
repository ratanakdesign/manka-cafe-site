import type { Metadata } from 'next'
import Link from 'next/link'
import BookingClient from './BookingClient'

export const metadata: Metadata = {
  title: 'Private Events at Manka Cafe Sunnybank',
  description:
    'Host a cosy private event at Manka Cafe in Sunnybank. Enquire about birthdays, afternoon teas, Christmas parties, anime meetups and small group gatherings.',
  alternates: { canonical: 'https://mankacafe.com.au/private-bookings' },
}

export default function PrivateBookingsPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="page-hero"
        style={{ background: 'linear-gradient(135deg, #FFF8F0, #FDEAEA)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-4">
            <Link href="/" className="hover:text-brown transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">Private Bookings</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display font-extrabold text-brown text-4xl sm:text-5xl mb-4">
              Host a private gathering at Manka Cafe
            </h1>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Manka Cafe offers a cosy, creative setting for birthdays, afternoon teas, Christmas
              parties, anime meetups and relaxed group events. Fill in the form below and we&apos;ll
              be in touch.
            </p>
          </div>
        </div>
      </div>

      <BookingClient />
    </>
  )
}
