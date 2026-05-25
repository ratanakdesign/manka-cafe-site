export interface GalleryImage {
  id: string
  category: 'Latte Art' | 'Food' | 'Manga & Interior' | 'Customer Art' | 'Events' | 'Study Vibes'
  alt: string
  caption: string
  gradient: string
}

export const GALLERY_CATEGORIES = [
  'All',
  'Latte Art',
  'Food',
  'Manga & Interior',
  'Customer Art',
  'Events',
  'Study Vibes',
] as const

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'g1',
    category: 'Latte Art',
    alt: '3D milk foam art latte shaped like Totoro on a warm drink at Manka Cafe Sunnybank',
    caption: '3D Totoro Milk Foam Latte',
    gradient: 'from-amber-200 via-orange-100 to-yellow-200',
  },
  {
    id: 'g2',
    category: 'Latte Art',
    alt: 'Custom 2D character print latte art at Manka Cafe Sunnybank',
    caption: 'Custom Character Print Latte',
    gradient: 'from-orange-200 via-amber-100 to-rose-100',
  },
  {
    id: 'g3',
    category: 'Latte Art',
    alt: 'Hand-drawn 2D latte art on a flat white at Manka Cafe Sunnybank',
    caption: 'Hand-drawn 2D Latte Art',
    gradient: 'from-amber-100 via-yellow-100 to-orange-200',
  },
  {
    id: 'g4',
    category: 'Latte Art',
    alt: '3D milk foam bear sculpture on iced latte at Manka Cafe Sunnybank',
    caption: '3D Foam Bear Latte',
    gradient: 'from-yellow-200 via-amber-100 to-orange-100',
  },
  {
    id: 'g5',
    category: 'Food',
    alt: 'Hong Kong style French toast with golden syrup and butter at Manka Cafe Sunnybank',
    caption: 'HK Style French Toast',
    gradient: 'from-yellow-200 via-amber-200 to-orange-200',
  },
  {
    id: 'g6',
    category: 'Food',
    alt: 'White chocolate shredded coconut toast at Manka Cafe Sunnybank',
    caption: 'Coconut Toast',
    gradient: 'from-amber-100 via-yellow-50 to-orange-100',
  },
  {
    id: 'g7',
    category: 'Food',
    alt: 'Iced matcha latte served at Manka Cafe Sunnybank with straw',
    caption: 'Iced Matcha Latte',
    gradient: 'from-green-200 via-emerald-100 to-lime-200',
  },
  {
    id: 'g8',
    category: 'Food',
    alt: 'Chicken cheese and avocado sandwich at Manka Cafe Sunnybank',
    caption: 'Chicken, Cheese & Avocado',
    gradient: 'from-green-100 via-yellow-100 to-amber-200',
  },
  {
    id: 'g9',
    category: 'Food',
    alt: 'Coconut iced coffee from Manka Cafe Sunnybank',
    caption: 'Coconut Iced Coffee',
    gradient: 'from-sky-100 via-blue-50 to-cyan-200',
  },
  {
    id: 'g10',
    category: 'Manga & Interior',
    alt: 'Manga shelf lined with volumes at Manka Cafe Sunnybank',
    caption: 'Manga Shelf',
    gradient: 'from-indigo-100 via-purple-100 to-violet-200',
  },
  {
    id: 'g11',
    category: 'Manga & Interior',
    alt: 'Cosy seating area inside Manka Cafe Sunnybank above Market Square',
    caption: 'Cosy Interior',
    gradient: 'from-pink-100 via-rose-100 to-blush',
  },
  {
    id: 'g12',
    category: 'Manga & Interior',
    alt: 'Anime mural artwork on the wall inside Manka Cafe Sunnybank',
    caption: 'Anime Wall Art',
    gradient: 'from-purple-100 via-pink-100 to-rose-100',
  },
  {
    id: 'g13',
    category: 'Customer Art',
    alt: 'Customer-drawn artwork displayed on the wall at Manka Cafe Sunnybank',
    caption: 'Customer Art Wall',
    gradient: 'from-rose-100 via-pink-100 to-purple-100',
  },
  {
    id: 'g14',
    category: 'Customer Art',
    alt: 'Original customer illustrations of anime characters at Manka Cafe Sunnybank',
    caption: 'Customer Illustrations',
    gradient: 'from-violet-100 via-purple-100 to-pink-100',
  },
  {
    id: 'g15',
    category: 'Events',
    alt: 'Private birthday gathering at Manka Cafe Sunnybank with custom latte art',
    caption: 'Birthday Gathering',
    gradient: 'from-pink-200 via-rose-100 to-blush',
  },
  {
    id: 'g16',
    category: 'Events',
    alt: 'Small group anime meetup event at Manka Cafe Sunnybank',
    caption: 'Anime Meetup',
    gradient: 'from-indigo-100 via-purple-100 to-pink-100',
  },
  {
    id: 'g17',
    category: 'Study Vibes',
    alt: 'Person studying with manga and coffee at Manka Cafe Sunnybank',
    caption: 'Study Session',
    gradient: 'from-blue-100 via-indigo-50 to-purple-100',
  },
  {
    id: 'g18',
    category: 'Study Vibes',
    alt: 'Relaxed afternoon corner with books and a warm drink at Manka Cafe Sunnybank',
    caption: 'Afternoon Calm',
    gradient: 'from-amber-50 via-yellow-50 to-pink-100',
  },
]
