'use client'

import { useEffect, useState } from 'react'
import { getOpeningStatus } from '@/data/hours'

export default function OpeningStatus() {
  const [status, setStatus] = useState<ReturnType<typeof getOpeningStatus> | null>(null)

  useEffect(() => {
    setStatus(getOpeningStatus())
    const interval = setInterval(() => setStatus(getOpeningStatus()), 60_000)
    return () => clearInterval(interval)
  }, [])

  if (!status) return null

  return (
    <span className="inline-flex items-center gap-2 text-sm bg-cream/95 text-ink px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
          status.isOpen ? 'bg-green-600' : 'bg-stone/60'
        }`}
        aria-hidden="true"
      />
      <span className="font-medium">
        {status.label}
      </span>
      {status.sublabel && (
        <span className="text-stone">&middot; {status.sublabel}</span>
      )}
    </span>
  )
}
