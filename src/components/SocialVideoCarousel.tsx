'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { SOCIAL_VIDEOS, type SocialVideo } from '@/data/socialVideos'

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.55V6.82a4.85 4.85 0 01-1.07-.13z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 translate-x-0.5" aria-hidden="true">
      <path d="M8 5v14l11-7z"/>
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
    </svg>
  )
}

// Pause every <video> on the page except the one passed in
function pauseOtherVideos(except: HTMLVideoElement) {
  document.querySelectorAll('video').forEach((v) => {
    if (v !== except) v.pause()
  })
}

function VideoCard({ video }: { video: SocialVideo }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const hasSrc = Boolean(video.videoSrc)

  // Muted autoplay when in view; pause when out of view.
  // Respects prefers-reduced-motion.
  useEffect(() => {
    const el = videoRef.current
    if (!el || !hasSrc) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          pauseOtherVideos(el)
          el.play().catch(() => {/* browser may block — fine */})
        } else {
          el.pause()
        }
      },
      { threshold: 0.65 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [hasSrc])

  const togglePlay = useCallback(() => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      pauseOtherVideos(el)
      el.play().catch(() => {})
    } else {
      el.pause()
    }
  }, [])

  const PlatformIcon = video.platform === 'tiktok' ? TikTokIcon : InstagramIcon
  const platformBg = video.platform === 'tiktok' ? 'bg-black/80' : 'bg-[#833ab4]/90'

  return (
    <article className="flex flex-col" aria-label={video.title}>
      {/* Video / thumbnail area */}
      <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-ink mb-3 shadow-md">

        {hasSrc ? (
          <>
            {/* Native HTML5 video — plays locally, no external dependency */}
            <video
              ref={videoRef}
              src={video.videoSrc}
              poster={video.thumbnail}
              muted
              playsInline
              preload="metadata"
              loop
              className="absolute inset-0 w-full h-full object-cover"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            />

            {/* Click-to-play/pause overlay */}
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-inset"
              aria-label={playing ? `Pause ${video.title}` : `Play ${video.title}`}
            >
              <span className={[
                'w-11 h-11 rounded-full bg-cream/90 flex items-center justify-center',
                'text-ink transition-opacity duration-200',
                playing ? 'opacity-0 hover:opacity-80' : 'opacity-90 hover:opacity-100',
              ].join(' ')}>
                {playing ? <PauseIcon /> : <PlayIcon />}
              </span>
            </button>
          </>
        ) : (
          /* No local MP4 — show thumbnail with "View original" overlay */
          <>
            {video.thumbnail ? (
              <Image
                src={video.thumbnail}
                alt={video.thumbnailAlt ?? video.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 280px, 25vw"
              />
            ) : (
              <div className={`absolute inset-0 flex items-center justify-center ${
                video.platform === 'tiktok'
                  ? 'bg-[#010101]'
                  : 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'
              }`} />
            )}

            {/* Overlay with external link — primary action for embed-only videos */}
            <div className="absolute inset-0 bg-ink/40 flex flex-col items-center justify-center gap-3 px-4">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-cream/90 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                aria-label={`Watch ${video.title} on ${video.platform === 'tiktok' ? 'TikTok' : 'Instagram'}`}
              >
                <PlayIcon />
              </a>
              <p className="text-cream/80 text-xs text-center leading-snug">
                Tap to watch on {video.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
              </p>
            </div>
          </>
        )}

        {/* Platform badge */}
        <div className="absolute top-2.5 left-2.5 pointer-events-none">
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium text-white ${platformBg}`}>
            <PlatformIcon />
            {video.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
          </span>
        </div>
      </div>

      {/* Card metadata */}
      <div className="px-0.5">
        <p className="text-[10px] tracking-widest uppercase text-stone mb-1">{video.label}</p>
        <p className="font-display font-semibold text-ink text-sm leading-snug mb-1.5">{video.title}</p>
        <p className="text-xs text-stone leading-relaxed mb-2">{video.description}</p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium text-brown hover:text-ink transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown rounded"
        >
          View original
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default function SocialVideoCarousel() {
  const featured = SOCIAL_VIDEOS.slice(0, 3)
  return (
    // Mobile: horizontal snap scroll — each card is ~260px wide
    // Desktop (lg+): 3-column CSS grid, no scroll
    <div className="overflow-x-auto lg:overflow-visible -mx-5 sm:-mx-8 lg:mx-0 px-5 sm:px-8 lg:px-0 pb-4 lg:pb-0 scrollbar-hide">
      <div className="flex gap-5 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-6 lg:snap-none"
           style={{ minWidth: 'max-content' }}
      >
        {featured.map((video) => (
          <div
            key={video.id}
            className="flex-shrink-0 w-[260px] snap-start lg:w-auto lg:flex-shrink"
          >
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  )
}
