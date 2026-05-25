'use client'

import { useState } from 'react'
import Link from 'next/link'

const INTERESTS = [
  { id: 'latte-art', label: 'Latte art' },
  { id: 'matcha', label: 'Matcha' },
  { id: 'manga-events', label: 'Manga / anime events' },
  { id: 'study-specials', label: 'Study specials' },
  { id: 'food-specials', label: 'Food specials' },
  { id: 'private-bookings', label: 'Private bookings' },
]

const MEMBER_BENEFITS = [
  { icon: '🎂', title: 'Birthday treat', desc: 'A little something special on your birthday month.' },
  { icon: '🍵', title: 'Seasonal drink drops', desc: 'Be first to know when new seasonal drinks launch.' },
  { icon: '🌸', title: 'Anime event updates', desc: 'Early notice on meetups, themed nights and events.' },
  { icon: '☕', title: 'New latte art designs', desc: 'Find out when new latte art options are available.' },
  { icon: '🎉', title: 'Private event news', desc: 'Exclusive announcements and booking priority.' },
  { icon: '📖', title: 'Study day specials', desc: 'Special offers for calm weekday study sessions.' },
]

export default function MankaClubPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function toggleInterest(id: string) {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  function validate() {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = 'Please enter your first name.'
    if (!email.trim()) errs.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.'
    if (!consent) errs.consent = 'You need to agree to join Manka Club.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1000))
    setStatus('success')
  }

  return (
    <>
      {/* Hero */}
      <div className="page-hero bg-brown text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-cream/40 mb-4">
            <Link href="/" className="hover:text-cream transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-cream/70">Manka Club</span>
          </nav>
          <div className="max-w-xl">
            <span className="text-4xl mb-4 block" aria-hidden="true">✉️</span>
            <h1 className="font-display font-extrabold text-cream text-4xl sm:text-5xl mb-4">
              Join Manka Club
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Get seasonal drink drops, anime cafe updates, birthday treats and event news from
              Manka Cafe — directly to you.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: benefits */}
          <div className="lg:col-span-2">
            <h2 className="section-title text-2xl mb-6">Member benefits</h2>
            <div className="space-y-4">
              {MEMBER_BENEFITS.map((benefit) => (
                <div key={benefit.title} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0" aria-hidden="true">{benefit.icon}</span>
                  <div>
                    <h3 className="font-display font-bold text-brown text-sm">{benefit.title}</h3>
                    <p className="text-xs text-charcoal/60 mt-0.5">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blush/30 rounded-2xl p-4 text-sm text-charcoal/70">
              <strong className="text-brown">No spam.</strong> We only send things worth reading —
              seasonal drops, events, and the occasional special. Unsubscribe any time.
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
                <span className="text-5xl mb-4 block" aria-hidden="true">🌸</span>
                <h2 className="font-display font-bold text-green-800 text-2xl mb-3">
                  Welcome to Manka Club!
                </h2>
                <p className="text-green-700 leading-relaxed mb-6">
                  You&apos;re in. Keep an eye on your inbox for seasonal drops, new latte art
                  announcements and event news from Manka Cafe.
                </p>
                <Link href="/" className="btn-primary">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <h2 className="section-title text-2xl">Sign up — it&apos;s free</h2>

                {/* Name */}
                <div>
                  <label htmlFor="fname" className="form-label">
                    First name <span aria-hidden="true" className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fname"
                    type="text"
                    autoComplete="given-name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                      if (errors.name) setErrors((p) => ({ ...p, name: '' }))
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'fname-error' : undefined}
                    className={`form-input ${errors.name ? 'border-rose-400' : ''}`}
                  />
                  {errors.name && (
                    <p id="fname-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="mc-email" className="form-label">
                    Email address <span aria-hidden="true" className="text-rose-500">*</span>
                  </label>
                  <input
                    id="mc-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) setErrors((p) => ({ ...p, email: '' }))
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'mc-email-error' : undefined}
                    className={`form-input ${errors.email ? 'border-rose-400' : ''}`}
                  />
                  {errors.email && (
                    <p id="mc-email-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.email}</p>
                  )}
                </div>

                {/* Phone (optional) */}
                <div>
                  <label htmlFor="mc-phone" className="form-label">
                    Phone number <span className="text-charcoal/40 font-normal">(optional)</span>
                  </label>
                  <input
                    id="mc-phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-input"
                    placeholder="For SMS updates if you prefer"
                  />
                </div>

                {/* Interests */}
                <div>
                  <p className="form-label">What interests you most? <span className="text-charcoal/40 font-normal">(optional)</span></p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {INTERESTS.map((interest) => (
                      <button
                        key={interest.id}
                        type="button"
                        onClick={() => toggleInterest(interest.id)}
                        aria-pressed={interests.includes(interest.id)}
                        className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                          interests.includes(interest.id)
                            ? 'bg-brown text-cream border-brown'
                            : 'bg-white text-charcoal border-blush hover:bg-blush/30'
                        }`}
                      >
                        {interest.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => {
                        setConsent(e.target.checked)
                        if (errors.consent) setErrors((p) => ({ ...p, consent: '' }))
                      }}
                      aria-required="true"
                      aria-invalid={!!errors.consent}
                      aria-describedby={errors.consent ? 'consent-error' : undefined}
                      className="mt-0.5 w-4 h-4 rounded accent-brown flex-shrink-0"
                    />
                    <span className="text-sm text-charcoal/70 leading-relaxed">
                      I agree to receive email updates from Manka Cafe. I understand I can unsubscribe
                      at any time via the link in any email.{' '}
                      <span aria-hidden="true" className="text-rose-500">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <p id="consent-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.consent}</p>
                  )}
                </div>

                <p className="text-xs text-charcoal/40">
                  Your details are kept private and will never be shared with third parties.
                </p>

                {status === 'error' && (
                  <div role="alert" className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-sm text-rose-800">
                    Something went wrong. Please try again or contact us via{' '}
                    <a href="https://www.instagram.com/manka_cafe/" target="_blank" rel="noopener noreferrer" className="underline">Instagram</a>.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Joining…' : 'Join Manka Club'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
