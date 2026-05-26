import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GatheringsClient from './GatheringsClient'

export const metadata: Metadata = {
  title: 'Gatherings | Private Events at Manka Cafe Sunnybank',
  description:
    'Manka Cafe hosts small private gatherings — birthdays, afternoon teas, end-of-year lunches and anime meetups in a quiet upstairs space in Market Square, Sunnybank.',
  alternates: { canonical: 'https://mankacafe.com.au/gatherings' },
}

const FITS = [
  { heading: 'Birthday celebrations', desc: 'A relaxed afternoon with latte art and comfort food. Quiet enough to talk.' },
  { heading: 'Afternoon teas', desc: 'French toast, matcha and drinks in a cosy upstairs space. Unhurried.' },
  { heading: 'End-of-year lunches', desc: 'Small teams who want somewhere different from the usual booking.' },
  { heading: 'Anime & hobby meetups', desc: 'Themed gatherings in a space that already gets it. Manga included.' },
  { heading: 'Student group events', desc: 'A comfortable space to gather, catch up and wind down together.' },
  { heading: 'Christmas parties', desc: 'Small, personal and warm — a cafe gathering that actually feels festive.' },
]

export default function GatheringsPage() {
  return (
    <>
      {/* ─── Header ───────────────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end bg-ink">
        <Image
          src="/images/gatherings/manka-cafe-community-event-group-photo.jpg"
          alt="Community gathering at Manka Cafe, Sunnybank — a group of visitors at a cafe event"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

        <div className="relative w-full pb-14 lg:pb-20">
          <div className="container">
            <nav aria-label="Breadcrumb" className="text-sm text-cream/30 mb-5">
              <Link href="/" className="hover:text-cream/60 transition-colors">Home</Link>
              <span className="mx-2 text-cream/20">/</span>
              <span className="text-cream/50">Gatherings</span>
            </nav>

            <h1
              className="font-display font-bold text-cream text-4xl sm:text-5xl lg:text-6xl
                         leading-[1.05] tracking-tight text-balance max-w-2xl"
              data-reveal
            >
              Small gatherings, done quietly
            </h1>
          </div>
        </div>
      </section>

      {/* ─── Intro ────────────────────────────────────────────── */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl" data-reveal>
            <p className="text-stone text-lg leading-relaxed">
              Manka is a small, relaxed space for groups who want something a little more personal
              than a restaurant booking. Hidden upstairs in Market Square — quiet enough to talk,
              unusual enough to be memorable.
            </p>
          </div>
        </div>
      </section>

      {/* ─── What works here ──────────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="container">
          <div className="mb-12" data-reveal>
            <p className="text-xs tracking-widest uppercase text-stone mb-3">What works here</p>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight text-balance max-w-lg">
              The kind of gatherings Manka is suited for
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-0">
            {FITS.map((item, i) => (
              <div
                key={item.heading}
                className="border-t border-parchment/80 py-6"
                data-reveal
                data-delay={String((i % 3) + 1) as '1' | '2' | '3'}
              >
                <h3 className="font-display font-semibold text-ink text-base mb-2">{item.heading}</h3>
                <p className="text-stone text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Photo pair ───────────────────────────────────────── */}
      <section className="bg-cream py-10 lg:py-12">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-4" data-reveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/gatherings/manka-cafe-community-event-audience.jpg"
                alt="Audience at a Manka Cafe community event — visitors seated and engaged in an event"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/gatherings/manka-cafe-community-event-presentation.jpg"
                alt="Presentation at a Manka Cafe community event — a presenter speaking to an audience in the cafe"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
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
                data-reveal data-delay="1"
              >
                Tell us what you&apos;re planning
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  Fill in the form and we&apos;ll get back to you. Let us know your date, group size
                  and what you have in mind — we&apos;ll take it from there.
                </p>
                <p className="text-sm text-stone/60">
                  We typically respond within 1–2 business days. For urgent enquiries, message us
                  on Instagram.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-parchment/60" data-reveal data-delay="3">
                <a
                  href="https://www.instagram.com/manka_cafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-brown"
                >
                  Message on Instagram
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
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
