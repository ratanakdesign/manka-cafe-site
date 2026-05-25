import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://mankacafe.com.au'
  const now = new Date()

  return [
    { url: base,                        lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/menu`,              lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/visit`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/inside-manka`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gatherings`,        lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/manka-club`,        lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/faq`,               lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
