export interface SiteImage {
  src: string
  alt: string
  title: string
  caption?: string
  category: 'hero' | 'latte-art' | 'menu' | 'inside-manka' | 'gatherings' | 'archive'
  recommendedUse: string
  quality: 'strong' | 'usable' | 'weak'
  permissionStatus: 'approved' | 'unknown' | 'needs-permission'
}

// ─── Hero ────────────────────────────────────────────────────
export const heroImages: SiteImage[] = [
  {
    src: '/images/hero/manka-cafe-full-anime-mural-wide.webp',
    alt: 'The full anime mural at Manka Cafe, Sunnybank — a hand-painted wall featuring Japanese anime characters in warm tones',
    title: 'Anime mural — wide',
    caption: 'The signature mural spanning the main wall at Manka Cafe',
    category: 'hero',
    recommendedUse: 'Homepage hero background',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/hero/manka-cafe-anime-mural-seating-interior.jpg',
    alt: 'Manka Cafe interior — seating area with anime mural on the wall and cafe tables',
    title: 'Anime mural + seating interior',
    caption: 'Seating area with the anime mural visible in the background',
    category: 'hero',
    recommendedUse: 'Inside Manka hero, secondary hero option',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/hero/manka-cafe-logo-circular.jpg',
    alt: 'Manka Cafe circular logo',
    title: 'Manka Cafe logo',
    category: 'hero',
    recommendedUse: 'Brand element, social thumbnail',
    quality: 'usable',
    permissionStatus: 'approved',
  },
]

// ─── Latte Art ───────────────────────────────────────────────
export const latteArtImages: SiteImage[] = [
  {
    src: '/images/latte-art/manka-cafe-rose-latte-hot.jpg',
    alt: 'Hot rose latte at Manka Cafe — a warm espresso drink with a rose design poured in steamed milk foam',
    title: 'Rose latte (hot)',
    caption: 'Hand-poured rose latte — a signature example of 2D latte art at Manka Cafe',
    category: 'latte-art',
    recommendedUse: 'Latte art section hero, homepage "what to order"',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/latte-art/manka-cafe-iced-layered-butterfly-pea-latte.jpg',
    alt: 'Iced layered butterfly pea latte at Manka Cafe — a visually striking purple-to-cream layered iced drink',
    title: 'Iced butterfly pea latte',
    caption: 'Butterfly pea iced latte — a seasonal layered drink at Manka Cafe',
    category: 'latte-art',
    recommendedUse: 'Seasonal specials, iced drinks feature',
    quality: 'strong',
    permissionStatus: 'approved',
  },
]

// ─── Menu / Food & Drinks ────────────────────────────────────
export const featuredMenuImages: SiteImage[] = [
  {
    src: '/images/menu/manka-cafe-hong-kong-french-toast-butter.jpg',
    alt: 'Hong Kong-style French toast at Manka Cafe — deep-fried thick-cut bread with peanut butter, golden syrup and butter',
    title: 'HK French toast — butter',
    caption: 'Hong Kong-style French toast: deep-fried bread with peanut butter, golden syrup and butter',
    category: 'menu',
    recommendedUse: 'Homepage featured item, menu page hero',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/menu/manka-cafe-hong-kong-french-toast-ice-cream.jpg',
    alt: 'Hong Kong-style French toast with ice cream at Manka Cafe — deep-fried bread served with a scoop of ice cream',
    title: 'HK French toast — with ice cream',
    caption: 'Hong Kong-style French toast served with ice cream',
    category: 'menu',
    recommendedUse: 'Menu page, toast section',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/menu/manka-cafe-ham-avocado-grilled-sandwich.jpg',
    alt: 'Grilled ham and avocado sandwich at Manka Cafe — toasted sandwich with ham, melted cheese and fresh avocado',
    title: 'Ham, avocado & cheese sandwich',
    caption: 'Grilled ham, avocado and cheese sandwich on toasted bread',
    category: 'menu',
    recommendedUse: 'Menu page, sandwiches section, homepage "what to order"',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/menu/manka-cafe-iced-latte.jpg',
    alt: 'Iced latte at Manka Cafe — espresso over ice with cold milk, served in a tall glass',
    title: 'Iced latte',
    caption: 'Classic iced latte at Manka Cafe',
    category: 'menu',
    recommendedUse: 'Menu page, drinks section',
    quality: 'usable',
    permissionStatus: 'approved',
  },
  {
    src: '/images/menu/manka-cafe-chicken-schnitzel-chips.jpg',
    alt: 'Chicken schnitzel and chips at Manka Cafe — crumbed chicken breast with golden chips and salad',
    title: 'Chicken schnitzel & chips',
    caption: 'Chicken schnitzel with chips — a satisfying comfort food option',
    category: 'menu',
    recommendedUse: 'Menu page, comfort food section, homepage "what to order"',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/menu/manka-cafe-big-breakfast-set.jpg',
    alt: 'Big breakfast set at Manka Cafe — eggs, bacon, toast, mushrooms and grilled tomato',
    title: 'Big breakfast set',
    caption: 'The big breakfast set — a full breakfast with eggs, bacon and all the sides',
    category: 'menu',
    recommendedUse: 'Menu page, brunch section',
    quality: 'usable',
    permissionStatus: 'approved',
  },
  {
    src: '/images/menu/manka-cafe-takeaway-sandwich-packaged.jpg',
    alt: 'Packaged takeaway sandwich from Manka Cafe — wrapped sandwich ready for pickup or delivery',
    title: 'Takeaway sandwich (packaged)',
    caption: 'Packaged sandwich for takeaway or Uber Eats delivery',
    category: 'menu',
    recommendedUse: 'Delivery CTA section, menu page',
    quality: 'usable',
    permissionStatus: 'approved',
  },
]

// ─── Inside Manka ────────────────────────────────────────────
export const insideMankaImages: SiteImage[] = [
  {
    src: '/images/inside-manka/manka-cafe-manga-shelf-customer-art-wall.jpg',
    alt: 'Manga shelf and customer art wall at Manka Cafe — shelves of manga volumes next to a wall covered in customer drawings',
    title: 'Manga shelf + customer art wall',
    caption: 'The manga shelf and customer art wall at Manka Cafe',
    category: 'inside-manka',
    recommendedUse: 'Homepage Inside Manka section, Inside Manka page hero',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/inside-manka/manka-cafe-full-anime-mural-wide.webp',
    alt: 'Full-width anime mural at Manka Cafe, Sunnybank — a large hand-painted wall featuring Japanese anime characters',
    title: 'Full anime mural (wide)',
    category: 'inside-manka',
    recommendedUse: 'Inside Manka page, atmosphere section',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/inside-manka/manka-cafe-customer-art-wall-corner.webp',
    alt: 'Customer art wall corner at Manka Cafe — a wall dense with hand-drawn anime characters and messages from visitors',
    title: 'Customer art wall corner',
    caption: 'Years of customer drawings cover the walls at Manka Cafe',
    category: 'inside-manka',
    recommendedUse: 'Drawing wall section on Inside Manka page',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/inside-manka/manka-cafe-customer-whiteboard-art-panels.jpg',
    alt: 'Customer whiteboard art panels at Manka Cafe — whiteboard panels filled with anime character drawings by visitors',
    title: 'Customer whiteboard art panels',
    caption: 'Whiteboard art panels — visitors draw on them during every visit',
    category: 'inside-manka',
    recommendedUse: 'Drawing wall section, Inside Manka page',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/inside-manka/manka-cafe-dining-room-mural-view.webp',
    alt: 'Dining room with anime mural view at Manka Cafe — tables and seating with the painted wall visible across the room',
    title: 'Dining room mural view',
    caption: 'The dining area at Manka Cafe, with the anime mural in view',
    category: 'inside-manka',
    recommendedUse: 'Atmosphere section, space overview',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/inside-manka/manka-cafe-manga-bookshelf-mural-detail.webp',
    alt: 'Manga bookshelf and mural detail at Manka Cafe — close-up of manga volumes on shelves with the anime mural behind',
    title: 'Manga bookshelf + mural detail',
    caption: 'Close-up of the manga shelves with the mural painted behind',
    category: 'inside-manka',
    recommendedUse: 'Manga shelf feature, Inside Manka page',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/inside-manka/manka-cafe-lounge-area-sticky-note-wall.webp',
    alt: 'Lounge area at Manka Cafe with sticky note wall — a relaxed seating corner with colourful sticky notes on the wall',
    title: 'Lounge area + sticky note wall',
    caption: 'The lounge area with a wall of sticky notes left by visitors',
    category: 'inside-manka',
    recommendedUse: 'Lounge/atmosphere section, Inside Manka page',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/inside-manka/manka-cafe-anime-mural-seating-interior.jpg',
    alt: 'Manka Cafe interior — seating area in front of the anime mural, showing the cafe layout',
    title: 'Seating + anime mural interior',
    category: 'inside-manka',
    recommendedUse: 'Interior overview, hero fallback',
    quality: 'strong',
    permissionStatus: 'approved',
  },
]

// ─── Gatherings ──────────────────────────────────────────────
export const gatheringImages: SiteImage[] = [
  {
    src: '/images/gatherings/manka-cafe-community-event-group-photo.jpg',
    alt: 'Group photo at a Manka Cafe community event — a crowd of smiling attendees at the cafe',
    title: 'Community event group photo',
    caption: 'A community event at Manka Cafe',
    category: 'gatherings',
    recommendedUse: 'Gatherings page hero, homepage gatherings teaser',
    quality: 'strong',
    permissionStatus: 'needs-permission',
  },
  {
    src: '/images/gatherings/manka-cafe-community-event-audience.jpg',
    alt: 'Audience at a Manka Cafe community event — visitors seated and engaged in an event at the cafe',
    title: 'Community event audience',
    category: 'gatherings',
    recommendedUse: 'Gatherings page, event atmosphere',
    quality: 'strong',
    permissionStatus: 'needs-permission',
  },
  {
    src: '/images/gatherings/manka-cafe-community-event-presentation.jpg',
    alt: 'Presentation at a Manka Cafe community event — a presenter speaking to an audience in the cafe space',
    title: 'Community event presentation',
    category: 'gatherings',
    recommendedUse: 'Gatherings page, event types section',
    quality: 'usable',
    permissionStatus: 'needs-permission',
  },
]

// ─── Archive ─────────────────────────────────────────────────
export const archiveImages: SiteImage[] = [
  {
    src: '/images/archive/manka-cafe-chicken-tenders-chips-salad.jpg',
    alt: 'Chicken tenders with chips and salad at Manka Cafe — golden crispy chicken tenders served with fries and a side salad',
    title: 'Chicken tenders, chips & salad',
    caption: 'Chicken tenders set with chips and salad',
    category: 'archive',
    recommendedUse: 'Menu page comfort food, homepage "what to order"',
    quality: 'strong',
    permissionStatus: 'approved',
  },
  {
    src: '/images/archive/manka-cafe-hojicha-latte-bowl.jpg',
    alt: 'Hojicha latte in a bowl at Manka Cafe — a warm roasted green tea latte served in a ceramic bowl',
    title: 'Hojicha latte bowl',
    caption: 'Hojicha latte served in a bowl — a warm, earthy seasonal drink',
    category: 'archive',
    recommendedUse: 'Seasonal specials, drinks section',
    quality: 'usable',
    permissionStatus: 'approved',
  },
  {
    src: '/images/archive/manka-cafe-chai-cinnamon-latte.jpg',
    alt: 'Chai cinnamon latte at Manka Cafe — a warm spiced chai latte with cinnamon',
    title: 'Chai cinnamon latte',
    category: 'archive',
    recommendedUse: 'Seasonal specials, drinks',
    quality: 'usable',
    permissionStatus: 'approved',
  },
  {
    src: '/images/archive/manka-cafe-fried-rice-pan.jpg',
    alt: 'Fried rice in a pan at Manka Cafe — a wok-fried rice dish',
    title: 'Fried rice (pan)',
    category: 'archive',
    recommendedUse: 'Archive only — not current menu',
    quality: 'usable',
    permissionStatus: 'approved',
  },
  {
    src: '/images/archive/manka-cafe-menu-overview-flatlay.jpg',
    alt: 'Menu overview flatlay at Manka Cafe — a flat lay of menu items on a table',
    title: 'Menu overview flatlay',
    category: 'archive',
    recommendedUse: 'Social media, general menu overview',
    quality: 'weak',
    permissionStatus: 'approved',
  },
]
