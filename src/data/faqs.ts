export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export const FAQ_CATEGORIES = [
  'All',
  'Location & Hours',
  'Menu & Food',
  'Latte Art',
  'Events & Bookings',
  'Ordering & Delivery',
]

export const FAQS: FAQ[] = [
  {
    id: 'faq-location',
    question: 'Where is Manka Cafe located?',
    answer: 'Manka Cafe is located at Shop 58 Level 1, 341 Mains Rd, Sunnybank QLD 4109, above Yuen\'s Market in Market Square. Take the escalator or stairs up to Level 1 and look for the cafe.',
    category: 'Location & Hours',
  },
  {
    id: 'faq-anime',
    question: 'Is Manka Cafe an anime cafe?',
    answer: 'Yes. Manka Cafe is an anime-inspired cafe with manga shelves, anime artwork, customer drawings on the walls and custom character latte art. The atmosphere is designed to be cosy and relaxed rather than loud or convention-style.',
    category: 'Menu & Food',
  },
  {
    id: 'faq-latte-art',
    question: 'Does Manka Cafe offer custom latte art?',
    answer: 'Yes. Manka Cafe offers 2D and 3D milk foam latte art, including custom character and photo print options, subject to availability. For custom orders, please DM us on Instagram before visiting. Note: custom latte art is available on warm drinks only.',
    category: 'Latte Art',
  },
  {
    id: 'faq-manga',
    question: 'Does Manka Cafe have manga to read?',
    answer: 'Yes. Customers can browse our manga shelf and read while dining. It\'s a great way to settle in for an afternoon with a warm drink and something to read.',
    category: 'Menu & Food',
  },
  {
    id: 'faq-popular',
    question: 'What are Manka Cafe\'s most popular items?',
    answer: 'Our most talked-about items include the 3D and 2D milk foam latte art drinks, Hong Kong-style French toast, iced matcha latte, chicken cheese and avocado sandwich, and coconut iced coffee.',
    category: 'Menu & Food',
  },
  {
    id: 'faq-delivery',
    question: 'Does Manka Cafe offer delivery?',
    answer: 'Yes. Manka Cafe is available on Uber Eats for delivery in the Sunnybank area. Note that prices on delivery platforms may vary slightly from in-store prices.',
    category: 'Ordering & Delivery',
  },
  {
    id: 'faq-private-booking',
    question: 'Can I book Manka Cafe for a private event?',
    answer: 'Yes. Manka Cafe hosts private events and welcomes enquiries for small gatherings including birthdays, afternoon teas, Christmas parties, anime meetups and relaxed group events. Use our Private Bookings page to submit an enquiry.',
    category: 'Events & Bookings',
  },
  {
    id: 'faq-study',
    question: 'Is Manka Cafe good for studying?',
    answer: 'Manka Cafe has a calm and cosy atmosphere with manga to browse, soft Ghibli-inspired music and comfortable seating. Many customers visit to read, draw or study. It\'s a great spot for a relaxed session.',
    category: 'Location & Hours',
  },
  {
    id: 'faq-tuesday',
    question: 'Is Manka Cafe open on Tuesday?',
    answer: 'No, Manka Cafe is closed every Tuesday. We are open Wednesday through Monday. Please check our Visit page or Google Maps for the latest confirmed hours before your visit, especially on public holidays.',
    category: 'Location & Hours',
  },
  {
    id: 'faq-delivery-prices',
    question: 'Are prices the same in-store and on delivery apps?',
    answer: 'Delivery platform prices may vary from in-store prices due to platform fees. The best way to get in-store pricing is to visit us directly or check our menu page for indicative prices.',
    category: 'Ordering & Delivery',
  },
  {
    id: 'faq-latte-art-custom',
    question: 'How do I order a custom character latte?',
    answer: 'For custom photo or character print lattes, please DM us on Instagram before your visit so we can arrange it. Standard 2D and 3D foam art options are available in-store subject to availability on the day.',
    category: 'Latte Art',
  },
  {
    id: 'faq-how-to-find',
    question: 'How do I find Manka Cafe inside Market Square?',
    answer: 'Manka Cafe is on Level 1 of Market Square (Sunnybank Plaza), above Yuen\'s Market at 341 Mains Rd. Head to the centre, take the escalator or stairs to Level 1, and look for Shop 58. If you\'re parking, the centre has multi-level parking accessed from Mains Rd.',
    category: 'Location & Hours',
  },
  {
    id: 'faq-parking',
    question: 'Is there parking near Manka Cafe?',
    answer: 'Yes. Market Square Sunnybank has on-site parking available. The centre is accessible from Mains Rd, Sunnybank. Public transport options including buses also service the Sunnybank area.',
    category: 'Location & Hours',
  },
  {
    id: 'faq-latte-art-takeaway',
    question: 'Can I get latte art to take away?',
    answer: 'Latte art is primarily designed for dine-in so you can enjoy it at its best. Some designs may be available as takeaway — please ask our team on the day. 3D foam art in particular is best enjoyed in-house.',
    category: 'Latte Art',
  },
]
