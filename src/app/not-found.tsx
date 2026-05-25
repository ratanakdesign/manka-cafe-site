import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <span className="text-6xl mb-6 block" aria-hidden="true">☕</span>
        <h1 className="font-display font-bold text-brown text-4xl mb-3">Page not found</h1>
        <p className="text-charcoal/60 mb-8 leading-relaxed">
          Looks like this page has wandered off. Let&apos;s get you back to Manka Cafe.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn-primary">
            Go to Home
          </Link>
          <Link href="/menu" className="btn-outline">
            View Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
