import type { Metadata } from 'next'
import Link from 'next/link'
import MankaClubClient from './MankaClubClient'

export const metadata: Metadata = {
  title: 'Manka Notes | Updates from the Cafe',
  description:
    'Occasional updates from Manka Cafe — seasonal drink drops, new latte art and event news. No spam, just things worth knowing.',
  alternates: { canonical: 'https://mankacafe.com.au/manka-club' },
}

const WHAT_WE_SEND = [
  {
    heading: 'Seasonal drink drops',
    desc: 'When a new seasonal drink launches, you\'ll hear about it first.',
  },
  {
    heading: 'New latte art designs',
    desc: 'Updates when new characters or print options become available.',
  },
  {
    heading: 'Event announcements',
    desc: 'Private gatherings, meetups and anything happening at the cafe.',
  },
  {
    heading: 'Birthday treat',
    desc: 'A small something during your birthday month — no catches.',
  },
]

export default function MankaClubPage() {
  return (
    <>
      {/* ─── Header ───────────────────────────────────────────── */}
      <div className="bg-ink pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-stone/40 mb-6">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span className="mx-2 text-stone/20">/</span>
            <span className="text-stone/60">Manka Notes</span>
          </nav>

          <div className="max-w-xl">
            <h1
              className="font-display font-bold text-cream text-4xl sm:text-5xl leading-tight mb-5 text-balance"
              data-reveal
            >
              Manka Notes
            </h1>
            <p className="text-stone text-lg leading-relaxed" data-reveal data-delay="1">
              Occasional updates from the cafe. Seasonal drinks, new latte art, event news.
              No newsletters full of filler.
            </p>
          </div>
        </div>
      </div>

      {/* ─── What we send ─────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                What you&apos;ll receive
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-8 text-balance"
                data-reveal
                data-delay="1"
              >
                Things worth knowing about
              </h2>

              <div className="space-y-6" data-reveal data-delay="2">
                {WHAT_WE_SEND.map((item) => (
                  <div key={item.heading} className="flex gap-5 border-t border-parchment pt-5">
                    <div>
                      <p className="font-medium text-ink text-sm mb-1">{item.heading}</p>
                      <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs text-stone/60 leading-relaxed" data-reveal data-delay="3">
                We only send things worth reading. Unsubscribe any time — no questions.
              </p>
            </div>

            <div data-reveal data-delay="2">
              <MankaClubClient />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
