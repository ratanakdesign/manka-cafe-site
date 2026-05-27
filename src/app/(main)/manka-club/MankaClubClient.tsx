'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Fields {
  name: string
  email: string
  birthday: string
}

type Touched = Partial<Record<keyof Fields, boolean>>
type Errors  = Partial<Record<keyof Fields, string>>

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim())  e.name  = 'Please enter your first name.'
  if (!f.email.trim()) e.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = 'Please enter a valid email address.'
  return e
}

export default function MankaClubClient() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', birthday: '' })
  const [touched, setTouched] = useState<Touched>({})
  const [consent, setConsent] = useState(false)
  const [consentTouched, setConsentTouched] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const errors = validate(fields)
  const visibleErrors: Errors = Object.fromEntries(
    Object.entries(errors).filter(([k]) => touched[k as keyof Fields])
  ) as Errors
  const consentError = consentTouched && !consent

  function set(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields((prev) => ({ ...prev, [key]: e.target.value }))
  }

  function blur(key: keyof Fields) {
    return () => setTouched((prev) => ({ ...prev, [key]: true }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setTouched({ name: true, email: true, birthday: true })
    setConsentTouched(true)
    if (Object.keys(validate(fields)).length > 0 || !consent) return
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="bg-parchment rounded-2xl p-8 text-center border border-parchment">
        <p className="font-display font-bold text-ink text-2xl mb-3">You&apos;re in</p>
        <p className="text-stone leading-relaxed mb-6 max-w-[36ch] mx-auto">
          Thanks for joining Manka Notes. We&apos;ll be in touch when there&apos;s something worth sharing.
        </p>
        <Link href="/" className="btn btn-outline">Back to home</Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">

      <div>
        <label htmlFor="mc-name" className="field-label">
          First name <span aria-hidden="true" className="text-stone/40 normal-case tracking-normal font-normal">*</span>
        </label>
        <input
          id="mc-name"
          type="text"
          autoComplete="given-name"
          value={fields.name}
          onChange={set('name')}
          onBlur={blur('name')}
          aria-required="true"
          aria-invalid={!!visibleErrors.name}
          aria-describedby={visibleErrors.name ? 'mc-name-err' : undefined}
          className={`field-input ${visibleErrors.name ? 'is-error' : ''}`}
        />
        {visibleErrors.name && (
          <p id="mc-name-err" role="alert" className="field-error">{visibleErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="mc-email" className="field-label">
          Email address <span aria-hidden="true" className="text-stone/40 normal-case tracking-normal font-normal">*</span>
        </label>
        <input
          id="mc-email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={set('email')}
          onBlur={blur('email')}
          aria-required="true"
          aria-invalid={!!visibleErrors.email}
          aria-describedby={visibleErrors.email ? 'mc-email-err' : undefined}
          className={`field-input ${visibleErrors.email ? 'is-error' : ''}`}
        />
        {visibleErrors.email && (
          <p id="mc-email-err" role="alert" className="field-error">{visibleErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="mc-birthday" className="field-label">
          Birthday month <span className="text-stone/40 normal-case tracking-normal font-normal">(for birthday treat)</span>
        </label>
        <select
          id="mc-birthday"
          value={fields.birthday}
          onChange={(e) => setFields((p) => ({ ...p, birthday: e.target.value }))}
          className="field-input"
        >
          <option value="">Select month…</option>
          {['January','February','March','April','May','June','July','August','September','October','November','December'].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              setConsentTouched(true)
            }}
            aria-required="true"
            aria-invalid={consentError}
            aria-describedby={consentError ? 'mc-consent-err' : undefined}
            className="mt-0.5 w-4 h-4 rounded accent-brown flex-shrink-0"
          />
          <span className="text-sm text-stone leading-relaxed">
            I agree to receive occasional email updates from Manka Cafe.
            I can unsubscribe at any time.{' '}
            <span aria-hidden="true" className="text-stone/40">*</span>
          </span>
        </label>
        {consentError && (
          <p id="mc-consent-err" role="alert" className="field-error">
            Please agree to continue.
          </p>
        )}
      </div>

      {status === 'error' && (
        <div role="alert" className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-3 text-sm text-rose-800">
          Something went wrong — please try again or find us on{' '}
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
        {status === 'submitting' ? 'Joining…' : 'Join Manka Notes'}
      </button>

      <p className="text-xs text-stone/50 text-center">
        Your details are kept private and never shared.
      </p>
    </form>
  )
}
