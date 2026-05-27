import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-5">
      <div className="max-w-sm">
        <p className="font-display text-stone text-6xl font-bold mb-6 leading-none">404</p>
        <h1 className="font-display font-bold text-ink text-2xl mb-3">
          Page not found
        </h1>
        <p className="text-stone text-sm leading-relaxed mb-8">
          This page doesn&apos;t exist or may have moved. Let&apos;s get you back to the cafe.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link href="/" className="btn btn-primary">
            Go home
          </Link>
          <Link href="/menu" className="btn btn-outline">
            View menu
          </Link>
        </div>
      </div>
    </div>
  )
}
