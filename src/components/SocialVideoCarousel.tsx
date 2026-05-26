'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SOCIAL_VIDEOS, type SocialVideo } from '@/data/socialVideos'

// Embed URL notes:
// - TikTok: https://www.tiktok.com/embed/v2/{videoId} — supports inline playback
// - Instagram: https://www.instagram.com/reel/{shortcode}/embed/ — may show a
//   login prompt for some users due to Meta's embed restrictions. This is a
//   platform-level constraint; the fallback "Watch on Instagram" link handles it.
function getEmbedSrc(video: SocialVideo): string {
  if (video.platform === 'tiktok') {
    return `https://www.tiktok.com/embed/v2/${video.embedId}`
  }
  return `https://www.instagram.com/reel/${video.embedId}/embed/`
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.55V6.82a4.85 4.85 0 01-1.07-.13z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function PlatformPlaceholder({ platform }: { platform: 'tiktok' | 'instagram' }) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${
        platform === 'tiktok'
          ? 'bg-[#010101]'
          : 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'
      }`}
    >
      <div className="text-white/50">
        {platform === 'tiktok' ? <TikTokIcon /> : <InstagramIcon />}
      </div>
    </div>
  )
}

function ThumbnailCard({
  video,
  isActive,
  onClick,
}: {
  video: SocialVideo
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'relative flex-shrink-0 w-[100px] sm:w-[120px] aspect-[3/4] rounded-xl overflow-hidden',
        'transition-[opacity,box-shadow] duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2',
        isActive ? 'opacity-100 shadow-lg' : 'opacity-55 hover:opacity-80',
      ].join(' ')}
      aria-label={`Watch: ${video.title}`}
      aria-pressed={isActive}
    >
      {video.thumbnail ? (
        <Image
          src={video.thumbnail}
          alt={video.thumbnailAlt ?? video.title}
          fill
          className="object-cover"
          sizes="120px"
        />
      ) : (
        <PlatformPlaceholder platform={video.platform} />
      )}

      {/* Platform badge */}
      <div className="absolute bottom-1.5 left-1.5">
        <span className={[
          'inline-flex items-center px-1.5 py-0.5 rounded text-white',
          video.platform === 'tiktok' ? 'bg-black/80' : 'bg-[#833ab4]/90',
        ].join(' ')}>
          {video.platform === 'tiktok' ? <TikTokIcon /> : <InstagramIcon />}
        </span>
      </div>

      {/* Active border */}
      {isActive && (
        <div className="absolute inset-0 ring-2 ring-brown rounded-xl pointer-events-none" />
      )}
    </button>
  )
}

export default function SocialVideoCarousel() {
  const [activeId, setActiveId] = useState(SOCIAL_VIDEOS[0].id)

  const active = SOCIAL_VIDEOS.find((v) => v.id === activeId) ?? SOCIAL_VIDEOS[0]

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Featured embed — 9:16 portrait to match TikTok/Reel format */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden bg-ink shadow-xl">
          {/* Background thumbnail dims until iframe paints */}
          {active.thumbnail && (
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src={active.thumbnail}
                alt=""
                fill
                className="object-cover"
                sizes="340px"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-ink/50" />
            </div>
          )}

          <iframe
            key={activeId}
            src={getEmbedSrc(active)}
            className="absolute inset-0 w-full h-full"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            title={active.title}
            loading="lazy"
          />
        </div>
      </div>

      {/* Active video info + fallback link */}
      <div className="flex items-start justify-between gap-4 w-full max-w-[340px]">
        <div>
          <p className="text-xs tracking-widest uppercase text-stone mb-0.5">{active.label}</p>
          <p className="font-display font-semibold text-ink text-sm leading-snug">{active.title}</p>
        </div>
        <a
          href={active.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-brown hover:text-ink transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown rounded pt-0.5"
        >
          Watch on {active.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Thumbnail selector */}
      <div
        className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide"
        role="list"
        aria-label="Select a video to watch"
      >
        {SOCIAL_VIDEOS.map((video) => (
          <div key={video.id} role="listitem">
            <ThumbnailCard
              video={video}
              isActive={video.id === activeId}
              onClick={() => setActiveId(video.id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
