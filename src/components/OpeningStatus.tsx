'use client'

import { useEffect, useState } from 'react'
import { getOpeningStatus } from '@/data/hours'

export default function OpeningStatus({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<ReturnType<typeof getOpeningStatus> | null>(null)

  useEffect(() => {
    setStatus(getOpeningStatus())
    const interval = setInterval(() => setStatus(getOpeningStatus()), 60_000)
    return () => clearInterval(interval)
  }, [])

  if (!status) return null

  if (compact) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 text-sm font-medium px-2.5 py-1 rounded-full ${
          status.isOpen
            ? 'bg-green-100 text-green-800'
            : 'bg-rose-100 text-rose-800'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-green-500' : 'bg-rose-400'}`}
        />
        {status.label}
      </span>
    )
  }

  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-2xl ${
        status.isOpen
          ? 'bg-green-50 border border-green-200'
          : 'bg-rose-50 border border-rose-200'
      }`}
    >
      <span
        className={`mt-0.5 flex-shrink-0 w-3 h-3 rounded-full ${
          status.isOpen ? 'bg-green-500' : 'bg-rose-400'
        }`}
      />
      <div>
        <p
          className={`font-semibold text-sm ${
            status.isOpen ? 'text-green-800' : 'text-rose-800'
          }`}
        >
          {status.label}
        </p>
        {status.sublabel && (
          <p className="text-sm text-charcoal/70 mt-0.5">{status.sublabel}</p>
        )}
        <p className="text-xs text-charcoal/50 mt-1">
          Hours may vary on public holidays. Check{' '}
          <a
            href="https://maps.google.com/?q=Manka+Cafe+Sunnybank"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Google Maps
          </a>{' '}
          for the latest.
        </p>
      </div>
    </div>
  )
}
