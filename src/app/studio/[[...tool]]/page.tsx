import dynamic from 'next/dynamic'

const Studio = dynamic(
  async () => {
    const { NextStudio } = await import('next-sanity/studio')
    const { default: config } = await import('../../../../sanity.config')
    return function StudioPage() {
      return <NextStudio config={config} />
    }
  },
  { ssr: false, loading: () => null }
)

export default function StudioPage() {
  return <Studio />
}
