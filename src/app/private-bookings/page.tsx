'use client'

import { useState } from 'react'
import Link from 'next/link'

const EVENT_TYPES = [
  'Birthday celebration',
  'Christmas party',
  'Afternoon tea',
  'Anime / manga meetup',
  'Student / society gathering',
  'Team catch-up',
  'Community event',
  'Other',
]

const BUDGET_RANGES = [
  'Under $200',
  '$200 – $500',
  '$500 – $1,000',
  '$1,000+',
  'Not sure yet',
]

interface FormState {
  name: string
  email: string
  phone: string
  date: string
  time: string
  groupSize: string
  eventType: string
  message: string
  budget: string
  catering: string
  specialRequests: string
}

const INITIAL_FORM: FormState = {
  name: '', email: '', phone: '', date: '', time: '',
  groupSize: '', eventType: '', message: '', budget: '',
  catering: '', specialRequests: '',
}

const SUITABLE_EVENTS = [
  { icon: '🎂', label: 'Birthdays' },
  { icon: '🎄', label: 'Christmas parties' },
  { icon: '🫖', label: 'Afternoon teas' },
  { icon: '🌸', label: 'Anime meetups' },
  { icon: '🎓', label: 'Student gatherings' },
  { icon: '💼', label: 'Team catch-ups' },
  { icon: '🎉', label: 'Community events' },
  { icon: '🥳', label: 'Casual get-togethers' },
]

export default function PrivateBookingsPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const today = new Date().toISOString().split('T')[0]

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  function validate(): boolean {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Your name is required.'
    if (!form.email.trim()) newErrors.email = 'Your email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email address.'
    if (!form.phone.trim()) newErrors.phone = 'Your phone number is required.'
    else if (!/^[\d\s+\-()]{7,}$/.test(form.phone)) newErrors.phone = 'Please enter a valid phone number.'
    if (!form.date) newErrors.date = 'Please select a preferred date.'
    if (!form.time.trim()) newErrors.time = 'Please provide a preferred time.'
    if (!form.groupSize.trim()) newErrors.groupSize = 'Please indicate your group size.'
    if (!form.eventType) newErrors.eventType = 'Please select an event type.'
    if (!form.message.trim()) newErrors.message = 'Please tell us a bit about your event.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <>
      {/* Hero */}
      <div
        className="page-hero"
        style={{ background: 'linear-gradient(135deg, #FFF8F0, #FDEAEA)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="text-sm text-charcoal/50 mb-4">
            <Link href="/" className="hover:text-brown transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">Private Bookings</span>
          </nav>
          <div className="max-w-2xl">
            <h1 className="font-display font-extrabold text-brown text-4xl sm:text-5xl mb-4">
              Host a private gathering at Manka Cafe
            </h1>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Manka Cafe offers a cosy, creative setting for birthdays, afternoon teas, Christmas
              parties, anime meetups and relaxed group events. Fill in the form below and we&apos;ll
              be in touch.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="section-title text-xl mb-4">Suitable events</h2>
              <div className="grid grid-cols-2 gap-3">
                {SUITABLE_EVENTS.map((event) => (
                  <div
                    key={event.label}
                    className="bg-white rounded-2xl border border-blush/30 p-3 flex items-center gap-2"
                  >
                    <span className="text-xl" aria-hidden="true">{event.icon}</span>
                    <span className="text-sm font-medium text-charcoal">{event.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-blush/30 p-5 space-y-4">
              <h2 className="section-title text-lg">What to expect</h2>
              <ul className="space-y-3 text-sm text-charcoal/70">
                <li className="flex gap-2">
                  <span className="text-matcha font-bold">✓</span>
                  Cosy, intimate cafe setting
                </li>
                <li className="flex gap-2">
                  <span className="text-matcha font-bold">✓</span>
                  Full cafe menu available for your group
                </li>
                <li className="flex gap-2">
                  <span className="text-matcha font-bold">✓</span>
                  Custom latte art available for your event
                </li>
                <li className="flex gap-2">
                  <span className="text-matcha font-bold">✓</span>
                  Manga, anime artwork and cosy atmosphere
                </li>
                <li className="flex gap-2">
                  <span className="text-matcha font-bold">✓</span>
                  Flexible group arrangements
                </li>
              </ul>
            </div>

            <div className="bg-blush/30 rounded-2xl p-4 text-sm text-brown">
              <strong>Response time:</strong> We aim to respond to all enquiries within 2 business days.
              For urgent bookings, DM us on{' '}
              <a
                href="https://www.instagram.com/manka_cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Instagram
              </a>.
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center">
                <span className="text-5xl mb-4 block" aria-hidden="true">🎉</span>
                <h2 className="font-display font-bold text-green-800 text-2xl mb-3">
                  Enquiry received!
                </h2>
                <p className="text-green-700 leading-relaxed mb-6">
                  Thanks, we&apos;ve received your enquiry. Manka Cafe will get back to you soon —
                  usually within 2 business days.
                </p>
                <Link href="/" className="btn-primary">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <h2 className="section-title text-2xl">Enquiry form</h2>
                <p className="text-sm text-charcoal/60">
                  Fields marked <span aria-hidden="true">*</span><span className="sr-only">required</span> are required.
                </p>

                {/* Name + email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name <span aria-hidden="true" className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      className={`form-input ${errors.name ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email <span aria-hidden="true" className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      className={`form-input ${errors.email ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone <span aria-hidden="true" className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    aria-required="true"
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    aria-invalid={!!errors.phone}
                    className={`form-input ${errors.phone ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                  />
                  {errors.phone && (
                    <p id="phone-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.phone}</p>
                  )}
                </div>

                {/* Date + time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="form-label">
                      Preferred date <span aria-hidden="true" className="text-rose-500">*</span>
                    </label>
                    <input
                      id="date"
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.date ? 'date-error' : undefined}
                      aria-invalid={!!errors.date}
                      className={`form-input ${errors.date ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                    />
                    {errors.date && (
                      <p id="date-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.date}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="time" className="form-label">
                      Preferred time <span aria-hidden="true" className="text-rose-500">*</span>
                    </label>
                    <input
                      id="time"
                      type="text"
                      placeholder="e.g. 2:00 PM"
                      value={form.time}
                      onChange={(e) => update('time', e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.time ? 'time-error' : undefined}
                      aria-invalid={!!errors.time}
                      className={`form-input ${errors.time ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                    />
                    {errors.time && (
                      <p id="time-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Group size + event type */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="groupSize" className="form-label">
                      Group size <span aria-hidden="true" className="text-rose-500">*</span>
                    </label>
                    <input
                      id="groupSize"
                      type="text"
                      placeholder="e.g. 8 – 12 people"
                      value={form.groupSize}
                      onChange={(e) => update('groupSize', e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.groupSize ? 'group-error' : undefined}
                      aria-invalid={!!errors.groupSize}
                      className={`form-input ${errors.groupSize ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                    />
                    {errors.groupSize && (
                      <p id="group-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.groupSize}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="eventType" className="form-label">
                      Event type <span aria-hidden="true" className="text-rose-500">*</span>
                    </label>
                    <select
                      id="eventType"
                      value={form.eventType}
                      onChange={(e) => update('eventType', e.target.value)}
                      aria-required="true"
                      aria-describedby={errors.eventType ? 'event-error' : undefined}
                      aria-invalid={!!errors.eventType}
                      className={`form-input ${errors.eventType ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                    >
                      <option value="">Select event type</option>
                      {EVENT_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p id="event-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.eventType}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="form-label">
                    Tell us about your event <span aria-hidden="true" className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    className={`form-input resize-none ${errors.message ? 'border-rose-400 focus:ring-rose-300' : ''}`}
                    placeholder="Let us know what you have in mind — theme, any catering needs, what would make it special..."
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-rose-600">{errors.message}</p>
                  )}
                </div>

                {/* Optional fields */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="form-label">Budget range (optional)</label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => update('budget', e.target.value)}
                      className="form-input"
                    >
                      <option value="">Select range</option>
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="catering" className="form-label">Catering preference (optional)</label>
                    <input
                      id="catering"
                      type="text"
                      value={form.catering}
                      onChange={(e) => update('catering', e.target.value)}
                      placeholder="e.g. full menu, drinks only"
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="specialRequests" className="form-label">
                    Special requests (optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    rows={2}
                    value={form.specialRequests}
                    onChange={(e) => update('specialRequests', e.target.value)}
                    className="form-input resize-none"
                    placeholder="Dietary requirements, accessibility needs, decorations..."
                  />
                </div>

                {/* Privacy notice */}
                <p className="text-xs text-charcoal/50 leading-relaxed">
                  Your details will only be used to respond to your booking enquiry. We won&apos;t
                  add you to any mailing list without your permission.
                </p>

                {status === 'error' && (
                  <div role="alert" className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-sm text-rose-800">
                    Something went wrong. Please try again or contact us through{' '}
                    <a href="https://www.instagram.com/manka_cafe/" target="_blank" rel="noopener noreferrer" className="underline">
                      Instagram
                    </a>.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
