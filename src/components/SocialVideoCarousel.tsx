'use client'

import { useRef } from 'react'
import { SOCIAL_VIDEOS, type SocialVideo } from '@/data/socialVideos'

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.28 8.28 0 004.84 1.55V6.82a4.85 4.85 0 01-1.07-.13z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function VideoCard({ video }: { video: SocialVideo }) {
  const isTikTok = video.platform === 'tiktok'

  return (
    <article className="flex-shrink-0 w-[260px] sm:w-[280px] snap-start group">
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-2 rounded-2xl"
        aria-label={`${video.title} — watch on ${isTikTok ? 'TikTok' : 'Instagram'}`}
      >
        {/* Thumbnail / designed preview */}
        <div
          className={`relative aspect-[3/4] rounded-2xl overflow-hidden mb-4
            transition-transform duration-300 ease-out
            group-hover:scale-[1.02] group-hover:shadow-xl
            motion-reduce:transition-none motion-reduce:transform-none
            ${isTikTok
              ? 'bg-[#010101]'
              : 'bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'
            }`}
        >
          {/* Platform pattern overlay */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'repeating-linear-gradient(-45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 12px)',
            }}
          />

          {/* Platform icon centred */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white">
              {isTikTok ? <TikTokIcon /> : <InstagramIcon />}
            </div>
            {/* Play arrow */}
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center
                            transition-colors duration-200 group-hover:bg-white/30">
              <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Platform label */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-white/80 text-xs font-medium tracking-wide">
              {isTikTok ? 'TikTok' : 'Instagram Reel'}
            </span>
            {/* External link icon */}
            <svg className="w-3.5 h-3.5 text-white/50 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </div>
        </div>
      </a>

      {/* Text */}
      <p className="text-xs tracking-widest uppercase text-stone mb-1">
        {video.creatorHandle}
      </p>
      <p className="font-display font-semibold text-ink text-sm leading-snug mb-2">
        {video.title}
      </p>
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-brown
                   hover:text-ink transition-colors duration-150
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brown focus-visible:ring-offset-1 rounded"
      >
        Watch on {isTikTok ? 'TikTok' : 'Instagram'}
        <span className="transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transform-none"
          aria-hidden="true">→</span>
      </a>
    </article>
  )
}

export default function SocialVideoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={scrollRef}
      className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory
                 scrollbar-hide -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12"
      role="list"
      aria-label="Creator videos featuring Manka Cafe"
      tabIndex={0}
    >
      {SOCIAL_VIDEOS.map((video) => (
        <div key={video.id} role="listitem">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  )
}
