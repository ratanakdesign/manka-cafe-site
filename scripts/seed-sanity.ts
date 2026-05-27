/**
 * MANUAL SEED SCRIPT — run once to populate Sanity with hardcoded site data.
 *
 * WARNING: This script performs write mutations against the live Sanity dataset.
 *          Run only intentionally, never as part of a build or CI pipeline.
 *          It is NOT imported by any app code.
 *
 * Prerequisites:
 *   - SANITY_WRITE_TOKEN set in .env.local (write-access token from manage.sanity.io)
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET set in .env.local
 *
 * Usage:
 *   npx tsx scripts/seed-sanity.ts
 *
 * Content types seeded:
 *   menuItem      — full menu catalogue (37 items across 9 categories)
 *   openingHours  — weekly schedule singleton
 *   faq           — 14 frequently asked questions
 *   socialVideo   — 4 creator/social video embeds
 *   review        — 4 homepage review quotes
 *   featureCard   — 4 "why Manka" homepage feature cards
 */

import { createClient, type IdentifiedSanityDocumentStub } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// ─── Environment ─────────────────────────────────────────────────────────────

const envPath = path.resolve(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  const parsed = dotenv.parse(fs.readFileSync(envPath))
  for (const [key, value] of Object.entries(parsed)) {
    process.env[key] = value
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.SANITY_WRITE_TOKEN

if (!projectId || !dataset) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in .env.local')
  process.exit(1)
}
if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN in .env.local')
  process.exit(1)
}

console.log(`Connecting to Sanity project ${projectId} / ${dataset}`)

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: false, token })

// ─── Data ─────────────────────────────────────────────────────────────────────

const MENU_ITEMS: IdentifiedSanityDocumentStub[] = [
  // Popular at Manka
  { _type: 'menuItem', _id: 'menu-popular-latte-art', name: '3D or 2D Latte Art', category: 'Popular at Manka', description: 'Sculpted milk foam characters or hand-drawn designs on your latte. Made at the counter, different every time. The reason most people first visit Manka.', note: 'Dine-in only. Ask in-store for current designs and pricing.', image: '/images/latte-art/manka-cafe-3d-foam-latte-art-bear.jpg', imageAlt: '3D bear milk foam latte art at Manka Cafe in Sunnybank', featured: true },
  { _type: 'menuItem', _id: 'menu-popular-hk-toast', name: 'Hong Kong Style French Toast', category: 'Popular at Manka', description: 'Toast with egg, butter, maple syrup and peanut. A Hong Kong café classic — the most-reordered item.', price: '$15', note: 'Contains nuts.', image: '/images/menu/manka-cafe-hong-kong-french-toast-butter.jpg', imageAlt: 'Hong Kong-style French toast at Manka Cafe — golden toast with peanut butter and maple syrup', featured: true },
  { _type: 'menuItem', _id: 'menu-popular-iced-matcha', name: 'Iced Matcha Latte', category: 'Popular at Manka', description: 'Strong matcha flavour, frequently praised in reviews. Ask in-store for pricing and availability.', note: 'Confirm availability and price in-store.', image: '/images/menu/manka-cafe-matcha.png', imageAlt: 'Iced matcha latte at Manka Cafe, Sunnybank', featured: true },
  { _type: 'menuItem', _id: 'menu-popular-chicken-avo', name: 'Chicken, Cheese & Avocado Sandwich', category: 'Popular at Manka', description: 'The most-liked item on the Uber Eats menu. Served with mayonnaise.', price: '$15', image: '/images/menu/manka-cafe-takeaway-sandwich-packaged.jpg', imageAlt: 'Packaged sandwich at Manka Cafe, Sunnybank', featured: true },
  { _type: 'menuItem', _id: 'menu-popular-coconut-coffee', name: 'Coconut Iced Coffee', category: 'Popular at Manka', description: 'No. 2 most-liked item on Uber Eats. A reliable choice for iced coffee drinkers.', price: '$9.80', image: '/images/menu/manka-cafe-iced-latte.jpg', imageAlt: 'Iced coffee at Manka Cafe, Sunnybank', featured: true },
  { _type: 'menuItem', _id: 'menu-popular-chicken-tender-set', name: 'Fried Chicken Tender Set', category: 'Popular at Manka', description: 'Fresh chicken tenders fried crispy — choose original or spicy. Served with French fries and fresh vegetables.', price: '$30.30', image: '/images/archive/manka-cafe-chicken-tenders-chips-salad.jpg', imageAlt: 'Fried chicken tenders with chips and salad at Manka Cafe, Sunnybank', featured: true },
  { _type: 'menuItem', _id: 'menu-popular-affogato', name: 'Affogato', category: 'Popular at Manka', description: 'Cookies and cream ice cream with espresso. Frequently mentioned in reviews. Ask in-store for current options.', note: 'Confirm availability in-store.', featured: true },
  { _type: 'menuItem', _id: 'menu-popular-coconut-toast', name: 'White Chocolate Shredded Coconut Toast', category: 'Popular at Manka', description: 'Toast with egg, butter, maple syrup, white chocolate, shredded coconut, almond and pistachio butter.', price: '$16', note: 'Contains nuts.', featured: true },

  // Latte Art Drinks
  { _type: 'menuItem', _id: 'menu-latte-3d-foam', name: '3D Milk Foam Art', category: 'Latte Art Drinks', description: 'A sculpted milk foam character placed on top of your latte. Made by hand — different every time. Warm drinks only.', note: 'Dine-in recommended. Ask in-store for available designs.' },
  { _type: 'menuItem', _id: 'menu-latte-2d-drawing', name: '2D Drawn Latte', category: 'Latte Art Drinks', description: 'A hand-poured design drawn directly onto your coffee. Classic, personal and a little different each time.' },
  { _type: 'menuItem', _id: 'menu-latte-2d-print', name: '2D Print Art Latte', category: 'Latte Art Drinks', description: 'A character or design printed onto smooth milk foam. Choose from our in-store collection or ask about options.' },
  { _type: 'menuItem', _id: 'menu-latte-custom-photo', name: 'Custom Photo Print Latte', category: 'Latte Art Drinks', description: 'A custom image printed onto your latte. DM us on Instagram to arrange before your visit. Subject to availability.', note: 'Pre-arrange via Instagram DM before visiting.' },

  // Hot Coffee
  { _type: 'menuItem', _id: 'menu-hot-chai-tea-latte', name: 'Chai Tea Latte', category: 'Hot Coffee', description: 'Warm spiced chai latte.', price: '$6.40' },
  { _type: 'menuItem', _id: 'menu-hot-hojicha-latte', name: 'Hojicha Latte', category: 'Hot Coffee', description: 'Roasted Japanese green tea with steamed milk. Earthy, warming and subtly sweet.', price: '$7.00' },

  // Iced Coffee
  { _type: 'menuItem', _id: 'menu-iced-latte-no-sugar', name: 'Iced Latte No Sugar', category: 'Iced Coffee', description: 'Iced latte with no added sugar.', price: '$6.40' },
  { _type: 'menuItem', _id: 'menu-iced-coconut-coffee', name: 'Coconut Iced Coffee', category: 'Iced Coffee', description: 'No. 2 most-liked item on Uber Eats.', price: '$9.80' },
  { _type: 'menuItem', _id: 'menu-iced-melancholy-coffee', name: 'Melancholy Iced Coffee', category: 'Iced Coffee', description: 'No. 3 most-liked item on Uber Eats.', price: '$9.80' },

  // Breakfasts
  { _type: 'menuItem', _id: 'menu-breakfast-big', name: 'Big Breakfast', category: 'Breakfasts', description: 'Plain toast with butter, scrambled eggs, two pieces of bacon, two beef sausage, tomato beans and selected flavour ice cream.', price: '$29.77' },
  { _type: 'menuItem', _id: 'menu-breakfast-classic-brunch', name: 'Classic All Day Brunch', category: 'Breakfasts', description: 'Plain toast with butter, scrambled eggs, two pieces of bacon, mushrooms, cherry tomatoes and tomato beans.', price: '$29.77' },
  { _type: 'menuItem', _id: 'menu-breakfast-omelette', name: 'Omelette Brunch', category: 'Breakfasts', description: 'Eggs, ham, tomato, beans, onion and plain toasts.', price: '$29.77' },

  // Toast
  { _type: 'menuItem', _id: 'menu-toast-hk-french', name: 'Hong Kong Style French Toast', category: 'Toast', description: 'Toast with egg, butter, maple syrup and peanut.', price: '$15.00', note: 'Contains nuts.' },
  { _type: 'menuItem', _id: 'menu-toast-black-sesame-pb', name: 'Black Sesame Peanut Butter Toast', category: 'Toast', description: 'Toast with egg, butter, maple syrup, peanut and black sesame.', price: '$16.00', note: 'Contains nuts.' },
  { _type: 'menuItem', _id: 'menu-toast-choc-pistachio', name: 'Chocolate Pistachio Butter Toast', category: 'Toast', description: 'Toast with egg, butter, maple syrup, chocolate sauce, nuts, almond and pistachio butter.', price: '$16.00', note: 'Contains nuts.' },
  { _type: 'menuItem', _id: 'menu-toast-white-choc-coconut', name: 'White Chocolate Shredded Coconut Toast', category: 'Toast', description: 'Toast with egg, butter, maple syrup, chocolate sauce, condensed milk, white chocolate, shredded coconut, almond and pistachio butter.', price: '$16.00', note: 'Contains nuts.' },
  { _type: 'menuItem', _id: 'menu-toast-almond-pistachio-pb', name: 'Almond, Pistachio and Peanut Butter Toast', category: 'Toast', description: 'Toast with egg, butter, maple syrup, peanut butter, almond and pistachio butter.', price: '$17.00', note: 'Contains nuts.' },
  { _type: 'menuItem', _id: 'menu-toast-classic-choc-icecream', name: 'Classic Chocolate Sauce Vanilla Ice Cream Toast', category: 'Toast', description: 'Toast with egg, peanut, condensed milk, maple syrup and chocolate sauce, served with vanilla ice cream.', price: '$19.00', note: 'Contains nuts.' },

  // Sandwiches
  { _type: 'menuItem', _id: 'menu-sandwich-chicken-avo', name: 'Chicken, Cheese and Avocado Sandwich', category: 'Sandwiches', description: 'Served with mayonnaise.', price: '$15.00' },
  { _type: 'menuItem', _id: 'menu-sandwich-chicken-lettuce', name: 'Chicken, Cheese and Lettuce Sandwich', category: 'Sandwiches', description: 'Served with mayonnaise.', price: '$15.00' },
  { _type: 'menuItem', _id: 'menu-sandwich-bacon-egg', name: 'Bacon, Cheese and Egg Sandwich', category: 'Sandwiches', description: 'Served with barbecue sauce or tomato sauce.', price: '$15.00' },
  { _type: 'menuItem', _id: 'menu-sandwich-ham-avo', name: 'Ham, Cheese and Avocado Sandwich', category: 'Sandwiches', description: 'Thinly sliced ham, melted cheese and fresh avocado on toasted bread.', price: '$15.00' },
  { _type: 'menuItem', _id: 'menu-sandwich-ham-egg', name: 'Ham, Cheese and Egg Sandwich', category: 'Sandwiches', description: 'Thinly sliced ham, melted cheese and a fried egg on toasted bread.', price: '$15.00' },

  // Meals
  { _type: 'menuItem', _id: 'menu-meal-chicken-tender-set', name: 'Fried Chicken Tender Set', category: 'Meals', description: 'Fresh chicken tenders fried crispy — choose original or spicy flavour. Served with French fries and fresh vegetables.', price: '$30.30' },
  { _type: 'menuItem', _id: 'menu-meal-chicken-set', name: 'Fried Chicken Set', category: 'Meals', description: 'Fresh chicken legs fried to a crispy golden colour — choose original or spicy flavour. Served with French fries and fresh vegetables.', price: '$33.55' },
  { _type: 'menuItem', _id: 'menu-meal-ham-eggs-fried-rice', name: 'Ham and Eggs Fried Rice', category: 'Meals', description: 'Diced ham, scrambled egg, peas and carrots folded through fried rice.', price: '$32.60' },

  // Pastas
  { _type: 'menuItem', _id: 'menu-pasta-shrimp', name: 'Creamy Lemon Garlic Shrimp Pasta', category: 'Pastas', description: 'Shrimp pasta tossed in a rich, zesty lemon garlic sauce.', price: '$37.70' },
  { _type: 'menuItem', _id: 'menu-pasta-vongole', name: 'Spaghetti Alle Vongole', category: 'Pastas', description: 'Pasta with clams.', price: '$32.77' },
  { _type: 'menuItem', _id: 'menu-pasta-chicken-mushroom', name: 'Chicken and Mushroom Pasta', category: 'Pastas', description: 'Tender chicken and mushrooms in a rich pasta dish.', price: '$29.77' },
]

const OPENING_HOURS: IdentifiedSanityDocumentStub = {
  _type: 'openingHours',
  _id: 'opening-hours-singleton',
  schedule: [
    { day: 0, name: 'Sunday',    open: '10:00', close: '18:30', closed: false },
    { day: 1, name: 'Monday',    open: '10:00', close: '18:30', closed: false },
    { day: 2, name: 'Tuesday',   open: null,    close: null,    closed: true  },
    { day: 3, name: 'Wednesday', open: '10:00', close: '18:30', closed: false },
    { day: 4, name: 'Thursday',  open: '10:00', close: '18:30', closed: false },
    { day: 5, name: 'Friday',    open: '10:00', close: '20:00', closed: false },
    { day: 6, name: 'Saturday',  open: '10:00', close: '20:00', closed: false },
  ],
}

const FAQS: IdentifiedSanityDocumentStub[] = [
  { _type: 'faq', _id: 'faq-location', question: 'Where is Manka Cafe located?', answer: "Manka Cafe is located at Shop 58 Level 1, 341 Mains Rd, Sunnybank QLD 4109, above Yuen's Market in Market Square. Take the escalator or stairs up to Level 1 and look for the cafe.", category: 'Location & Hours' },
  { _type: 'faq', _id: 'faq-anime', question: 'Is Manka Cafe an anime cafe?', answer: 'Yes. Manka Cafe is an anime-inspired cafe with manga shelves, anime artwork, customer drawings on the walls and custom character latte art. The atmosphere is designed to be cosy and relaxed rather than loud or convention-style.', category: 'Menu & Food' },
  { _type: 'faq', _id: 'faq-latte-art', question: 'Does Manka Cafe offer custom latte art?', answer: 'Yes. Manka Cafe offers 2D and 3D milk foam latte art, including custom character and photo print options, subject to availability. For custom orders, please DM us on Instagram before visiting. Note: custom latte art is available on warm drinks only.', category: 'Latte Art' },
  { _type: 'faq', _id: 'faq-manga', question: 'Does Manka Cafe have manga to read?', answer: "Yes. Customers can browse our manga shelf and read while dining. It's a great way to settle in for an afternoon with a warm drink and something to read.", category: 'Menu & Food' },
  { _type: 'faq', _id: 'faq-popular', question: "What are Manka Cafe's most popular items?", answer: 'Our most talked-about items include the 3D and 2D milk foam latte art drinks, Hong Kong-style French toast, iced matcha latte, chicken cheese and avocado sandwich, and coconut iced coffee.', category: 'Menu & Food' },
  { _type: 'faq', _id: 'faq-delivery', question: 'Does Manka Cafe offer delivery?', answer: 'Yes. Manka Cafe is available on Uber Eats for delivery in the Sunnybank area. Note that prices on delivery platforms may vary slightly from in-store prices.', category: 'Ordering & Delivery' },
  { _type: 'faq', _id: 'faq-private-booking', question: 'Can I book Manka Cafe for a private event?', answer: 'Yes. Manka Cafe hosts private events and welcomes enquiries for small gatherings including birthdays, afternoon teas, Christmas parties, anime meetups and relaxed group events. Use our Private Bookings page to submit an enquiry.', category: 'Events & Bookings' },
  { _type: 'faq', _id: 'faq-study', question: 'Is Manka Cafe good for studying?', answer: "Manka Cafe has a calm and cosy atmosphere with manga to browse, soft Ghibli-inspired music and comfortable seating. Many customers visit to read, draw or study. It's a great spot for a relaxed session.", category: 'Location & Hours' },
  { _type: 'faq', _id: 'faq-tuesday', question: 'Is Manka Cafe open on Tuesday?', answer: 'No, Manka Cafe is closed every Tuesday. We are open Wednesday through Monday. Please check our Visit page or Google Maps for the latest confirmed hours before your visit, especially on public holidays.', category: 'Location & Hours' },
  { _type: 'faq', _id: 'faq-delivery-prices', question: 'Are prices the same in-store and on delivery apps?', answer: 'Delivery platform prices may vary from in-store prices due to platform fees. The best way to get in-store pricing is to visit us directly or check our menu page for indicative prices.', category: 'Ordering & Delivery' },
  { _type: 'faq', _id: 'faq-latte-art-custom', question: 'How do I order a custom character latte?', answer: 'For custom photo or character print lattes, please DM us on Instagram before your visit so we can arrange it. Standard 2D and 3D foam art options are available in-store subject to availability on the day.', category: 'Latte Art' },
  { _type: 'faq', _id: 'faq-how-to-find', question: 'How do I find Manka Cafe inside Market Square?', answer: "Manka Cafe is on Level 1 of Market Square (Sunnybank Plaza), above Yuen's Market at 341 Mains Rd. Head to the centre, take the escalator or stairs to Level 1, and look for Shop 58. If you're parking, the centre has multi-level parking accessed from Mains Rd.", category: 'Location & Hours' },
  { _type: 'faq', _id: 'faq-parking', question: 'Is there parking near Manka Cafe?', answer: 'Yes. Market Square Sunnybank has on-site parking available. The centre is accessible from Mains Rd, Sunnybank. Public transport options including buses also service the Sunnybank area.', category: 'Location & Hours' },
  { _type: 'faq', _id: 'faq-latte-art-takeaway', question: 'Can I get latte art to take away?', answer: 'Latte art is primarily designed for dine-in so you can enjoy it at its best. Some designs may be available as takeaway — please ask our team on the day. 3D foam art in particular is best enjoyed in-house.', category: 'Latte Art' },
]

const SOCIAL_VIDEOS: IdentifiedSanityDocumentStub[] = [
  { _type: 'socialVideo', _id: 'video-instagram-reel-2', platform: 'instagram', embedId: 'C5cXucxP3CW', creatorHandle: '@manka_cafe', creatorName: 'Instagram creator', title: 'Manka Cafe — places in Brisbane', label: 'Creator visit', description: 'Food and atmosphere from a creator visit to Manka Cafe, Sunnybank.', url: 'https://www.instagram.com/reels/C5cXucxP3CW/', videoSrc: '/videos/manka-cafe-places-in-brisbane.mp4', thumbnail: '/images/social-video/manka-cafe-places-in-brisbane-thumbnail.jpg', thumbnailAlt: 'Beef curry with rice and sides at Manka Cafe Market Square Sunnybank', thumbnailStatus: 'matched', permissionStatus: 'needs-permission', sortOrder: 1 },
  { _type: 'socialVideo', _id: 'video-tiktok-tingtingkoko', platform: 'tiktok', embedId: '7498636543855168775', creatorHandle: '@tingtingkoko', creatorName: 'tingtingkoko', title: '2D & 3D foam art anime cafe Sunnybank', label: 'TikTok feature', description: 'Latte art, food and the anime cafe atmosphere upstairs in Market Square.', url: 'https://www.tiktok.com/@tingtingkoko/video/7498636543855168775', videoSrc: '/videos/manka-cafe-tingtingkoko.mp4', thumbnail: '/images/social-video/manka-cafe-tingtingkoko-thumbnail.jpg', thumbnailAlt: 'TikTok thumbnail showing 3D bear foam latte and 2D print latte at Manka Cafe — anime cafe Sunnybank', thumbnailStatus: 'matched', permissionStatus: 'needs-permission', sortOrder: 2 },
  { _type: 'socialVideo', _id: 'video-instagram-reel-1', platform: 'instagram', embedId: 'C4R4OBCPmrI', creatorHandle: '@manka_cafe', creatorName: 'Instagram creator', title: 'Manka Cafe featured reel', label: 'Instagram Reel', description: 'A short look at the latte art and cosy anime cafe space at Market Square.', url: 'https://www.instagram.com/reels/C4R4OBCPmrI/', videoSrc: '/videos/manka-cafe-instagram-reel.mp4', thumbnail: '/images/social-video/manka-cafe-instagram-reel-thumbnail.jpg', thumbnailAlt: 'Anime character 2D print latte at Manka Cafe in Sunnybank', thumbnailStatus: 'matched', permissionStatus: 'needs-permission', sortOrder: 3 },
  { _type: 'socialVideo', _id: 'video-instagram-reel-3', platform: 'instagram', embedId: 'C8lN0HOPjaa', creatorHandle: '@manka_cafe', creatorName: 'Instagram creator', title: 'Anime & manga cafe in Brisbane', label: 'Latte art feature', description: 'Anime character 2D print latte from an Instagram feature of Manka Cafe.', url: 'https://www.instagram.com/reel/C8lN0HOPjaa/', thumbnail: '/images/social-video/manka-cafe-instagram-reel-thumbnail.jpg', thumbnailAlt: 'Anime character 2D print latte at Manka Cafe — anime and manga cafe in Brisbane', thumbnailStatus: 'uncertain', permissionStatus: 'needs-permission', sortOrder: 4 },
]

const REVIEWS: IdentifiedSanityDocumentStub[] = [
  { _type: 'review', _id: 'review-favourite-cafe', quote: 'My favourite cafe in Brisbane.', source: 'Google review', sortOrder: 1 },
  { _type: 'review', _id: 'review-ghibli-piano', quote: 'Calming atmosphere with Ghibli piano playing.', source: 'Google review', sortOrder: 2 },
  { _type: 'review', _id: 'review-manga-volume', quote: 'I ended up reading a whole volume of manga.', source: 'Google review', sortOrder: 3 },
  { _type: 'review', _id: 'review-hidden-gem', quote: 'A hidden gem in the busy area of Market Square.', source: 'Google review', sortOrder: 4 },
]

const FEATURE_CARDS: IdentifiedSanityDocumentStub[] = [
  { _type: 'featureCard', _id: 'feature-latte-art', heading: 'Custom latte art at the counter', body: 'Sculpted 3D foam characters or hand-drawn designs — different every time. The thing people talk about most.', image: '/images/latte-art/manka-cafe-3d-foam-latte-art-bear.jpg', imageAlt: '3D bear milk foam latte art at Manka Cafe in Sunnybank', sortOrder: 1 },
  { _type: 'featureCard', _id: 'feature-manga', heading: 'Manga you can actually read', body: 'The shelves are there to be used. Pick something familiar, settle in, no rush.', image: '/images/inside-manka/manka-cafe-manga-bookshelf-mural-detail.webp', imageAlt: 'Manga bookshelf at Manka Cafe with anime mural behind, Sunnybank', sortOrder: 2 },
  { _type: 'featureCard', _id: 'feature-hk-food', heading: 'Hong Kong-style comfort food', body: 'Thick-cut French toast with peanut butter and golden syrup — the most-reordered item on the menu.', image: '/images/menu/manka-cafe-hong-kong-french-toast-butter.jpg', imageAlt: 'Hong Kong-style French toast at Manka Cafe, Sunnybank', sortOrder: 3 },
  { _type: 'featureCard', _id: 'feature-quiet-space', heading: 'A quiet space upstairs', body: 'Small, owner-run, hidden above the Market Square rush. Soft Ghibli piano. Walls covered in drawings.', image: '/images/inside-manka/manka-cafe-customer-art-wall-corner.webp', imageAlt: 'Customer art wall at Manka Cafe — hand-drawn anime characters by visitors', sortOrder: 4 },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function seedCollection(label: string, docs: IdentifiedSanityDocumentStub[]) {
  console.log(`\nSeeding ${label} (${docs.length} docs)…`)
  let ok = 0
  for (const doc of docs) {
    try {
      await client.createOrReplace(doc)
      ok++
      process.stdout.write('.')
    } catch (err) {
      const e = err as { statusCode?: number; message?: string; responseBody?: string }
      console.error(`\n  ✗ ${doc._id}: [${e.statusCode}] ${e.message}`)
    }
  }
  console.log(`\n  ✓ ${ok}/${docs.length} written`)
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  await seedCollection('menuItems', MENU_ITEMS)
  await seedCollection('openingHours', [OPENING_HOURS])
  await seedCollection('faqs', FAQS)
  await seedCollection('socialVideos', SOCIAL_VIDEOS)
  await seedCollection('reviews', REVIEWS)
  await seedCollection('featureCards', FEATURE_CARDS)
  console.log('\nSeed complete.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
