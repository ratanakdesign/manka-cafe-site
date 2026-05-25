import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageFrame } from '@/components/ImageFrame'
import GatheringsClient from './GatheringsClient'

export const metadata: Metadata = {
  title: 'Gatherings | Private Events at Manka Cafe',
  description:
    'Manka Cafe hosts small private gatherings — birthdays, afternoon teas, end-of-year lunches and anime meetups. Enquire about availability.',
  alternates: { canonical: 'https://mankacafe.com.au/gatherings' },
}

const FITS = [
  {
    heading: 'Birthday celebrations',
    desc: 'A relaxed afternoon with good food and latte art. Quiet enough to actually talk.',
  },
  {
    heading: 'Afternoon teas',
    desc: 'French toast, drinks and a cosy upstairs space. Unhurried.',
  },
  {
    heading: 'End-of-year lunches',
    desc: 'Small teams and groups who want somewhere different from the usual.',
  },
  {
    heading: 'Anime & hobby meetups',
    desc: 'Themed gatherings in a space that already gets it. Manga shelves included.',
  },
]

export default function GatheringsPage() {
  return (
    <>
      {/* ─── Header ───────────────────────────────────────────── */}
      <div className="bg-parchment pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-stone/60 mb-6">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="mx-2 text-stone/30">/</span>
            <span>Gatherings</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div>
              <h1
                className="font-display font-bold text-ink text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5 text-balance"
                data-reveal
              >
                Small gatherings, done quietly
              </h1>
              <p className="text-stone text-lg leading-relaxed max-w-[44ch]" data-reveal data-delay="1">
                Manka is a small, relaxed space for groups who want something a little more
                personal than a restaurant booking.
              </p>
            </div>

            <div data-reveal data-delay="2">
              {/* TODO: Replace with a photo of a small group gathering in the cafe —
                  warm, relaxed, people chatting over drinks and food */}
              <ImageFrame
                aspect="4/3"
                brief="Small group of 4–6 people around a table at Manka Cafe — relaxed, smiling, drinks and food in front of them. Warm atmosphere."
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── What works well here ─────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="max-w-2xl mb-12" data-reveal>
            <p className="text-xs tracking-widest uppercase text-stone mb-3">What works here</p>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight text-balance">
              The kind of gatherings Manka is suited for
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {FITS.map((item, i) => (
              <div
                key={item.heading}
                className="border-t border-parchment pt-6"
                data-reveal
                data-delay={String((i % 2) + 1) as '1' | '2'}
              >
                <h3 className="font-display font-semibold text-ink text-lg mb-2">
                  {item.heading}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Enquiry form ─────────────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Enquire
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal
                data-delay="1"
              >
                Tell us what you&apos;re planning
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  Fill in the form and we&apos;ll come back to you. We&apos;ll let you know what&apos;s
                  available and what we can do for your group.
                </p>
                <p className="text-sm text-stone/60">
                  We typically respond within 1–2 business days via email.
                </p>
              </div>
            </div>

            <div data-reveal data-delay="2">
              <GatheringsClient />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
