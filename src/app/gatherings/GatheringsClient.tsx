'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Fields {
  name: string
  email: string
  date: string
  groupSize: string
  occasion: string
  message: string
}

type Touched = Partial<Record<keyof Fields, boolean>>
type Errors  = Partial<Record<keyof Fields, string>>

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim())    e.name  = 'Please enter your name.'
  if (!f.email.trim())   e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = 'Please enter a valid email address.'
  if (!f.date.trim())    e.date  = 'Please tell us a preferred date.'
  if (!f.groupSize.trim()) e.groupSize = 'Please enter your group size.'
  return e
}

export default function GatheringsClient() {
  const [fields, setFields] = useState<Fields>({
    name: '', email: '', date: '', groupSize: '', occasion: '', message: '',
  })
  const [touched, setTouched] = useState<Touched>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const errors = validate(fields)
  const visibleErrors: Errors = Object.fromEntries(
    Object.entries(errors).filter(([k]) => touched[k as keyof Fields])
  ) as Errors

  function set(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }))
  }

  function blur(key: keyof Fields) {
    return () => setTouched((prev) => ({ ...prev, [key]: true }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const allTouched = Object.fromEntries(
      Object.keys(fields).map((k) => [k, true])
    ) as Touched
    setTouched(allTouched)
    if (Object.keys(validate(fields)).length > 0) return
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="bg-cream rounded-2xl p-8 text-center border border-parchment">
        <p className="font-display font-bold text-ink text-2xl mb-3">Enquiry received</p>
        <p className="text-stone leading-relaxed mb-6 max-w-[36ch] mx-auto">
          Thanks for reaching out. We&apos;ll be in touch within 1–2 business days.
        </p>
        <Link href="/" className="btn btn-outline">Back to home</Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      <div>
        <label htmlFor="g-name" className="field-label">
          Your name <span aria-hidden="true" className="text-stone/40 normal-case tracking-normal font-normal">*</span>
        </label>
        <input
          id="g-name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={set('name')}
          onBlur={blur('name')}
          aria-required="true"
          aria-invalid={!!visibleErrors.name}
          aria-describedby={visibleErrors.name ? 'g-name-err' : undefined}
          className={`field-input ${visibleErrors.name ? 'is-error' : ''}`}
        />
        {visibleErrors.name && (
          <p id="g-name-err" role="alert" className="field-error">{visibleErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="g-email" className="field-label">
          Email address <span aria-hidden="true" className="text-stone/40 normal-case tracking-normal font-normal">*</span>
        </label>
        <input
          id="g-email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={set('email')}
          onBlur={blur('email')}
          aria-required="true"
          aria-invalid={!!visibleErrors.email}
          aria-describedby={visibleErrors.email ? 'g-email-err' : undefined}
          className={`field-input ${visibleErrors.email ? 'is-error' : ''}`}
        />
        {visibleErrors.email && (
          <p id="g-email-err" role="alert" className="field-error">{visibleErrors.email}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="g-date" className="field-label">
            Preferred date <span aria-hidden="true" className="text-stone/40 normal-case tracking-normal font-normal">*</span>
          </label>
          <input
            id="g-date"
            type="text"
            placeholder="e.g. Saturday 14 June"
            value={fields.date}
            onChange={set('date')}
            onBlur={blur('date')}
            aria-required="true"
            aria-invalid={!!visibleErrors.date}
            aria-describedby={visibleErrors.date ? 'g-date-err' : undefined}
            className={`field-input ${visibleErrors.date ? 'is-error' : ''}`}
          />
          {visibleErrors.date && (
            <p id="g-date-err" role="alert" className="field-error">{visibleErrors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="g-size" className="field-label">
            Group size <span aria-hidden="true" className="text-stone/40 normal-case tracking-normal font-normal">*</span>
          </label>
          <input
            id="g-size"
            type="text"
            placeholder="e.g. 8 people"
            value={fields.groupSize}
            onChange={set('groupSize')}
            onBlur={blur('groupSize')}
            aria-required="true"
            aria-invalid={!!visibleErrors.groupSize}
            aria-describedby={visibleErrors.groupSize ? 'g-size-err' : undefined}
            className={`field-input ${visibleErrors.groupSize ? 'is-error' : ''}`}
          />
          {visibleErrors.groupSize && (
            <p id="g-size-err" role="alert" className="field-error">{visibleErrors.groupSize}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="g-occasion" className="field-label">
          Occasion <span className="text-stone/40 normal-case tracking-normal font-normal">(optional)</span>
        </label>
        <select
          id="g-occasion"
          value={fields.occasion}
          onChange={set('occasion')}
          className="field-input"
        >
          <option value="">Select one…</option>
          <option value="birthday">Birthday celebration</option>
          <option value="afternoon-tea">Afternoon tea</option>
          <option value="end-of-year">End-of-year lunch / dinner</option>
          <option value="anime-meetup">Anime or hobby meetup</option>
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label htmlFor="g-message" className="field-label">
          Anything else we should know <span className="text-stone/40 normal-case tracking-normal font-normal">(optional)</span>
        </label>
        <textarea
          id="g-message"
          rows={4}
          value={fields.message}
          onChange={set('message')}
          placeholder="Dietary requirements, preferred times, anything specific you have in mind…"
          className="field-input resize-none"
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm text-rose-800">
          Something went wrong — please try again or message us on{' '}
          <a
            href="https://www.instagram.com/manka_cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Instagram
          </a>.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary w-full"
      >
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </button>

      <p className="text-xs text-stone/50 text-center">
        We&apos;ll respond within 1–2 business days. Your details are kept private.
      </p>
    </form>
  )
}
