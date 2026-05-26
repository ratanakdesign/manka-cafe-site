import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Inside Manka | Anime Mural, Manga Shelves & the Art Wall',
  description:
    'Explore what makes Manka Cafe in Sunnybank special — the full anime mural, manga shelves you can read from, a wall covered in customer drawings, and a quiet upstairs atmosphere.',
  alternates: { canonical: 'https://mankacafe.com.au/inside-manka' },
}

const INSTAGRAM = 'https://www.instagram.com/manka_cafe/'

export default function InsideMankaPage() {
  return (
    <>
      {/* ─── Header ───────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end bg-ink">
        <Image
          src="/images/inside-manka/manka-cafe-full-anime-mural-wide.webp"
          alt="The full anime mural at Manka Cafe, Sunnybank — a large hand-painted wall of Japanese anime characters"
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
              <span className="text-cream/50">Inside Manka</span>
            </nav>
            <h1
              className="font-display font-bold text-cream text-4xl sm:text-5xl lg:text-6xl
                         leading-[1.05] tracking-tight text-balance max-w-2xl"
              data-reveal
            >
              Inside Manka
            </h1>
          </div>
        </div>
      </section>

      {/* ─── Intro ────────────────────────────────────────────── */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="container">
          <div className="max-w-2xl" data-reveal>
            <p className="text-stone text-lg leading-relaxed">
              A small cafe on Level 1 of Market Square. Manga shelves, a wall covered in years of
              customer drawings, Ghibli piano in the background and latte art made at the counter.
              Quiet enough to settle in. Different enough to remember.
            </p>
          </div>
        </div>
      </section>

      {/* ─── The mural ────────────────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-reveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/inside-manka/manka-cafe-anime-mural-seating-interior.jpg"
                  alt="Seating area with anime mural at Manka Cafe, Sunnybank — tables in front of the large hand-painted wall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                The mural
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal data-delay="1"
              >
                Hand-painted from wall to wall
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  The anime mural is the first thing you notice when you arrive. Characters painted
                  across the full main wall — warm tones, detailed, the kind of thing that takes a
                  moment to take in properly.
                </p>
                <p>
                  It sets the tone for the whole space: carefully made, a little unusual, and
                  worth looking at more than once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Customer art wall ────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                The drawing wall
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal data-delay="1"
              >
                Customers have drawn directly on our walls for years
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  It started as one wall. Now it covers more than that. Characters, little scenes,
                  messages — all drawn by people who wanted to leave something behind.
                </p>
                <p>
                  There are drawings from regulars who come every week and from people who were
                  here just once. Every visit, there&apos;s something new to spot.
                </p>
              </div>
              <div className="mt-8" data-reveal data-delay="3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-brown"
                >
                  See more on Instagram
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3" data-reveal data-delay="2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/images/inside-manka/manka-cafe-customer-art-wall-corner.webp"
                  alt="Customer art wall corner at Manka Cafe — a wall dense with hand-drawn anime characters and visitor messages"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8">
                <Image
                  src="/images/inside-manka/manka-cafe-customer-whiteboard-art-panels.jpg"
                  alt="Customer whiteboard art panels at Manka Cafe — whiteboard panels filled with anime character drawings"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Manga shelves ────────────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" data-reveal>
              <Image
                src="/images/inside-manka/manka-cafe-manga-bookshelf-mural-detail.webp"
                alt="Manga bookshelf at Manka Cafe, Sunnybank — shelves of manga volumes with the anime mural painted behind"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Manga shelves
              </p>
              <h2
                className="font-display font-bold text-cream text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal data-delay="1"
              >
                Browse while you wait. Or settle in for the afternoon.
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  The shelves are there to be used. Regulars often have a series they&apos;re working
                  through. First-timers tend to pick something familiar.
                </p>
                <p>
                  A warm drink, something to read, soft music in the background. No rush.
                </p>
              </div>
              <blockquote className="border-l-2 border-stone/20 pl-4 mt-6" data-reveal data-delay="3">
                <p className="review-quote text-base text-cream/80">
                  &ldquo;The matcha latte was super good. I ended up reading a whole volume of manga.&rdquo;
                </p>
                <footer className="review-source mt-2">Google review</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Lounge & atmosphere ──────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                The atmosphere
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal data-delay="1"
              >
                Quiet, upstairs, away from the Market Square rush
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  The music stays in the background — Studio Ghibli soundtracks, lofi, the occasional
                  game OST. Always soft. Never loud.
                </p>
                <p>
                  The lounge area has a wall of sticky notes left by visitors. Small messages, drawings,
                  dates people visited with. A kind of quiet record of everyone who&apos;s been here.
                </p>
              </div>
              <blockquote className="border-l-2 border-parchment/60 pl-4 mt-6" data-reveal data-delay="3">
                <p className="review-quote text-base">&ldquo;Calming atmosphere with Ghibli piano playing.&rdquo;</p>
                <footer className="review-source mt-2">Google review</footer>
              </blockquote>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" data-reveal data-delay="2">
              <Image
                src="/images/inside-manka/manka-cafe-lounge-area-sticky-note-wall.webp"
                alt="Lounge area at Manka Cafe with sticky note wall — a relaxed seating corner with colourful visitor sticky notes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="max-w-xl" data-reveal>
            <h2 className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-4 text-balance">
              Come and see it yourself
            </h2>
            <p className="text-stone leading-relaxed mb-8 max-w-[44ch]">
              Level 1, Market Square, Sunnybank. Open Wednesday through Monday.
              Closed Tuesdays.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/visit" className="btn btn-primary">Plan your visit</Link>
              <Link href="/menu" className="btn btn-outline">See the menu</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
