import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileStickyCTA from '@/components/MobileStickyCTA'
import RevealInit from '@/components/RevealInit'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <RevealInit />
      <main>{children}</main>
      <Footer />
      <MobileStickyCTA />
    </>
  )
}
