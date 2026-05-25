import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageFrame } from '@/components/ImageFrame'

export const metadata: Metadata = {
  title: 'Inside Manka | The Space, the Shelves & the Art',
  description:
    'What makes Manka Cafe what it is — the drawing wall, manga shelves, latte art and the quiet atmosphere above Market Square.',
  alternates: { canonical: 'https://mankacafe.com.au/inside-manka' },
}

const INSTAGRAM = 'https://www.instagram.com/manka_cafe/'

export default function InsideMankaPage() {
  return (
    <>
      {/* ─── Header ───────────────────────────────────────────── */}
      <div className="bg-ink pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-stone/40 mb-6">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span className="mx-2 text-stone/20">/</span>
            <span className="text-stone/60">Inside Manka</span>
          </nav>

          <div className="max-w-2xl">
            <h1
              className="font-display font-bold text-cream text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5 text-balance"
              data-reveal
            >
              Inside Manka
            </h1>
            <p className="text-stone text-lg leading-relaxed max-w-[46ch]" data-reveal data-delay="1">
              A small cafe hidden on Level 1 of Market Square. Manga shelves, a wall covered in
              customer drawings, soft music and latte art made to order.
            </p>
          </div>
        </div>
      </div>

      {/* ─── The space ─────────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div data-reveal>
              {/* TODO: Replace with wide interior shot — full cafe space, warm ambient light,
                  showing both the shelves and the seating area. Daytime preferred. */}
              <ImageFrame
                aspect="4/3"
                label="The cafe"
                brief="Wide interior shot of Manka Cafe — seating area, warm ambient light, manga shelf visible on one wall. Conveys a cosy, quiet space."
              />
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                The space
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal
                data-delay="1"
              >
                Quiet, small and easy to stay in
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  Manka is a small cafe. That&apos;s part of what makes it work. The tables are close
                  enough to feel like you&apos;re somewhere, not just anywhere.
                </p>
                <p>
                  The music stays in the background — Studio Ghibli soundtracks, lofi, game OSTs.
                  Soft enough to think. Familiar enough to notice if you listen.
                </p>
                <p>
                  Most people come for the latte art and stay longer than they planned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── The drawing wall ─────────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                The drawing wall
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal
                data-delay="1"
              >
                Customers have drawn directly on our walls for years
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  It started as one wall. Now it&apos;s grown. Characters, quotes, little scenes —
                  all drawn by people who visited and wanted to leave something behind.
                </p>
                <p>
                  There are drawings from regulars who come every week and drawings from people
                  who were here once. Every visit, there&apos;s something new to spot.
                </p>
              </div>

              <div className="mt-8" data-reveal data-delay="3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-brown"
                >
                  See our Instagram for more
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div data-reveal data-delay="2">
              {/* TODO: Replace with close-up of drawing wall — character art, dense and
                  characterful, warm light. Could be two photos tiled vertically. */}
              <ImageFrame
                aspect="3/4"
                label="The drawing wall"
                brief="Close-up of the customer drawing wall — anime characters, warm tones, dense with art. Intimate and characterful."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Manga shelves ────────────────────────────────────── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div data-reveal>
              {/* TODO: Replace with manga shelf photo — spines facing out, organised, warm.
                  A hand reaching for a volume works well here. */}
              <ImageFrame
                aspect="4/3"
                label="The manga shelf"
                brief="Manga shelf — colourful spines, warm ambient light, someone browsing. Inviting and relaxed."
              />
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Manga shelves
              </p>
              <h2
                className="font-display font-bold text-ink text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal
                data-delay="1"
              >
                Browse while you wait, or settle in for an afternoon
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  The shelves are there to be used. Regulars often have a series they&apos;re working
                  through. First-timers tend to pick something familiar.
                </p>
                <p>
                  It&apos;s one of the things that makes Manka easy to stay in. A drink, something to
                  read, music in the background. No rush.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Latte art ────────────────────────────────────────── */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-xs tracking-widest uppercase text-stone mb-4" data-reveal>
                Latte art
              </p>
              <h2
                className="font-display font-bold text-cream text-3xl sm:text-4xl leading-tight mb-5 text-balance"
                data-reveal
                data-delay="1"
              >
                Made at the counter, different every time
              </h2>
              <div className="space-y-4 text-stone leading-relaxed" data-reveal data-delay="2">
                <p>
                  The 3D milk foam characters are the thing people talk about most. Small sculpted
                  figures placed directly on top of your latte. Each one is a little different.
                </p>
                <p>
                  There are also 2D drawn lattes, print art options and custom photo prints
                  arranged in advance. All made on warm espresso drinks, best enjoyed in-house.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3" data-reveal data-delay="3">
                <Link href="/menu" className="btn btn-outline border-cream/20 text-cream hover:bg-cream hover:text-ink">
                  See latte art options
                </Link>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost text-stone hover:text-cream"
                >
                  DM for custom orders
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>

            <div data-reveal data-delay="2">
              {/* TODO: Replace with 3D latte art photo — close-up, warm light, character
                  clearly visible, cup in hand or on table. */}
              <ImageFrame
                aspect="4/5"
                label="3D latte art"
                brief="3D milk foam character sitting on a latte — close up, warm light, cute character detail clearly visible."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="bg-parchment py-20 lg:py-28">
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
              <Link href="/visit" className="btn btn-primary">
                Plan your visit
              </Link>
              <Link href="/menu" className="btn btn-outline">
                See the menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
