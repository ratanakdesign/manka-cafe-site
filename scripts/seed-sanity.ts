/**
 * Seed script — populates Sanity with all hardcoded homepage content.
 * Run with:  npx tsx scripts/seed-sanity.ts
 */

import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// ─── Load .env.local ─────────────────────────────────────────────────────────

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), '.env.local')
  try {
    const raw = readFileSync(envPath, 'utf-8')
    for (const line of raw.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx === -1) continue
      const key = trimmed.slice(0, eqIdx).trim()
      const val = trimmed.slice(eqIdx + 1).trim()
      if (!process.env[key]) process.env[key] = val
    }
  } catch {
    // .env.local may not exist in CI; env vars should already be set
  }
}

loadEnvLocal()

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const token     = process.env.SANITY_API_TOKEN ?? process.env.SANITY_API_READ_TOKEN

if (!projectId) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
  process.exit(1)
}
if (!token) {
  console.error('Missing SANITY_API_TOKEN or SANITY_API_READ_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugId(prefix: string, value: string) {
  return `${prefix}-${value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`
}

// ─── Seed data ────────────────────────────────────────────────────────────────

const siteSettings = {
  _type:           'siteSettings' as const,
  _id:             'siteSettings',
  heroHeadline:    'A quiet anime cafe hidden upstairs in Sunnybank.',
  heroDescription: 'Come for the custom latte art. Stay for the manga shelves, hand-drawn walls, soft music and Hong Kong-style comfort food.',
  address:         'Shop 58 Level 1, 341 Mains Rd, Sunnybank QLD 4109',
  shopNumber:      'Shop 58',
  googleMapsUrl:   'https://maps.google.com/?q=Shop+58+Level+1+341+Mains+Rd+Sunnybank+QLD+4109',
  uberEatsUrl:     'https://www.ubereats.com/au/store/manka-cafe-sunnybank/2Lo97zt2QQeAtQ8itfl0WQ',
  instagramUrl:    'https://www.instagram.com/manka_cafe/',
  facebookUrl:     'https://www.facebook.com/p/Manka-Cafe-%E6%BB%BF%E8%8F%AF-61557450650306/',
}

const reviews = [
  { quote: 'My favourite cafe in Brisbane.',                       source: 'Google review' },
  { quote: 'Calming atmosphere with Ghibli piano playing.',        source: 'Google review' },
  { quote: 'I ended up reading a whole volume of manga.',          source: 'Google review' },
  { quote: 'A hidden gem in the busy area of Market Square.',      source: 'Google review' },
]

const menuItems = [
  {
    _id:         'menuItem-latte-art',
    name:        '3D or 2D Latte Art',
    description: "Sculpted foam characters or hand-drawn designs. Ask in-store for today's options.",
    featured:    true,
    order:       1,
  },
  {
    _id:         'menuItem-hk-toast',
    name:        'Hong Kong Style French Toast',
    price:       15,
    description: 'Toast with egg, butter, maple syrup and peanut. The most-reordered item.',
    featured:    true,
    order:       2,
  },
  {
    _id:         'menuItem-chicken-avo',
    name:        'Chicken, Cheese & Avocado Sandwich',
    price:       15,
    description: 'Served with mayonnaise. No. 1 most-liked item on Uber Eats.',
    featured:    true,
    order:       3,
  },
  {
    _id:         'menuItem-matcha',
    name:        'Iced Matcha Latte',
    description: 'Strong matcha flavour, frequently praised in reviews. Ask in-store for availability.',
    featured:    true,
    order:       4,
  },
  {
    _id:         'menuItem-chicken-tender',
    name:        'Fried Chicken Tender Set',
    price:       30.30,
    description: 'Crispy tenders — original or spicy. With fries and fresh vegetables.',
    featured:    true,
    order:       5,
  },
  {
    _id:         'menuItem-big-breakfast',
    name:        'Big Breakfast',
    price:       29.77,
    description: 'Toast, scrambled eggs, bacon, beef sausage, tomato beans and ice cream.',
    featured:    true,
    order:       6,
  },
]

const openingHours = [
  { _id: 'hours-sunday',    day: 'Sunday',    openTime: '10am', closeTime: '6:30pm', isClosed: false, order: 0 },
  { _id: 'hours-monday',    day: 'Monday',    openTime: '10am', closeTime: '6:30pm', isClosed: false, order: 1 },
  { _id: 'hours-tuesday',   day: 'Tuesday',   openTime: null,   closeTime: null,     isClosed: true,  order: 2 },
  { _id: 'hours-wednesday', day: 'Wednesday', openTime: '10am', closeTime: '6:30pm', isClosed: false, order: 3 },
  { _id: 'hours-thursday',  day: 'Thursday',  openTime: '10am', closeTime: '6:30pm', isClosed: false, order: 4 },
  { _id: 'hours-friday',    day: 'Friday',    openTime: '10am', closeTime: '8pm',    isClosed: false, order: 5 },
  { _id: 'hours-saturday',  day: 'Saturday',  openTime: '10am', closeTime: '8pm',    isClosed: false, order: 6 },
]

const latteArtTypes = [
  {
    _id:         'latteArt-3d-foam',
    title:       '3D Milk Foam Art',
    description: 'A sculpted character on top of your latte. Designs change daily — ask in-store.',
    order:       1,
  },
  {
    _id:         'latteArt-2d-drawn',
    title:       '2D Drawn Latte',
    description: 'Hand-poured directly onto your drink. Available most days.',
    order:       2,
  },
  {
    _id:         'latteArt-2d-print',
    title:       '2D Print Art',
    description: 'A character printed onto milk foam. Choose from the in-store collection.',
    order:       3,
  },
  {
    _id:         'latteArt-custom-photo',
    title:       'Custom Photo Print',
    description: 'Your own reference printed onto your latte. DM on Instagram before visiting.',
    order:       4,
  },
]

const creatorVideos = [
  {
    _id:         'creatorVideo-instagram-reel-2',
    title:       'Manka Cafe — places in Brisbane',
    description: 'Food and atmosphere from a creator visit to Manka Cafe, Sunnybank.',
    platform:    'Instagram',
    label:       'Creator visit',
    originalUrl: 'https://www.instagram.com/reels/C5cXucxP3CW/',
    order:       1,
  },
  {
    _id:         'creatorVideo-tiktok-tingtingkoko',
    title:       '2D & 3D foam art anime cafe Sunnybank',
    description: 'Latte art, food and the anime cafe atmosphere upstairs in Market Square.',
    platform:    'TikTok',
    label:       'TikTok feature',
    originalUrl: 'https://www.tiktok.com/@tingtingkoko/video/7498636543855168775',
    order:       2,
  },
  {
    _id:         'creatorVideo-instagram-reel-1',
    title:       'Manka Cafe featured reel',
    description: 'A short look at the latte art and cosy anime cafe space at Market Square.',
    platform:    'Instagram',
    label:       'Instagram Reel',
    originalUrl: 'https://www.instagram.com/reels/C4R4OBCPmrI/',
    order:       3,
  },
]

// ─── Run ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log(`\nSeeding Sanity project "${projectId}" (dataset: ${dataset})\n`)

  const tx = client.transaction()

  // Site settings — singleton, always replace
  tx.createOrReplace(siteSettings)
  console.log('  ✓ siteSettings')

  // Reviews
  for (const r of reviews) {
    tx.createOrReplace({
      _type: 'review' as const,
      _id:   slugId('review', r.quote.slice(0, 30)),
      ...r,
    })
  }
  console.log(`  ✓ ${reviews.length} reviews`)

  // Menu items
  for (const item of menuItems) {
    tx.createOrReplace({ _type: 'menuItem' as const, ...item })
  }
  console.log(`  ✓ ${menuItems.length} menu items`)

  // Opening hours
  for (const h of openingHours) {
    const doc: Record<string, unknown> = {
      _type: 'openingHours' as const,
      _id:    h._id,
      day:    h.day,
      isClosed: h.isClosed,
      order:  h.order,
    }
    if (h.openTime)  doc.openTime  = h.openTime
    if (h.closeTime) doc.closeTime = h.closeTime
    tx.createOrReplace(doc as Parameters<typeof tx.createOrReplace>[0])
  }
  console.log(`  ✓ ${openingHours.length} opening hours`)

  // Latte art types
  for (const lat of latteArtTypes) {
    tx.createOrReplace({ _type: 'latteArtType' as const, ...lat })
  }
  console.log(`  ✓ ${latteArtTypes.length} latte art types`)

  // Creator videos
  for (const vid of creatorVideos) {
    tx.createOrReplace({ _type: 'creatorVideo' as const, ...vid })
  }
  console.log(`  ✓ ${creatorVideos.length} creator videos`)

  try {
    const result = await tx.commit({ autoGenerateArrayKeys: true })
    console.log(`\nDone — ${result.results.length} documents written to Sanity.\n`)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    if (msg.includes('not in allowlist') || msg.includes('allowlist') || msg.includes('403')) {
      console.error('\n403 Forbidden — the token does not have write access.')
      console.error('The SANITY_API_READ_TOKEN is read-only. Create a write token:')
      console.error(`  https://www.sanity.io/manage/personal/project/${projectId}/api`)
      console.error('  → Tokens → Add API token → choose Editor or Developer role')
      console.error('  → Paste the new token as SANITY_API_READ_TOKEN in .env.local\n')
    } else if (msg.includes('Insufficient permissions') || msg.includes('permission')) {
      console.error('\nPermission error — the token does not have write access.')
      console.error(`  https://www.sanity.io/manage/personal/project/${projectId}/api`)
      console.error('  → Tokens → Add API token → choose Editor or Developer role\n')
    } else {
      console.error('\nSeed failed:', msg, '\n')
    }
    process.exit(1)
  }
}

seed()
