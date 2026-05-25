export interface MenuItem {
  id: string
  name: string
  category: string
  description: string
  price?: string
  tags: string[]
  available: 'always' | 'weekend' | 'seasonal' | 'dine-in'
  featured?: boolean
  gradient: string
}

export const MENU_CATEGORIES = [
  'Signature Latte Art',
  'Matcha & Coffee',
  'Iced Drinks',
  'Toast & Desserts',
  'Sandwiches',
  'Breakfast & Brunch',
  'Mains',
  'Pasta',
  'Seasonal Specials',
]

export const MENU_ITEMS: MenuItem[] = [
  // Signature Latte Art
  {
    id: 'latte-3d-foam',
    name: '3D Milk Foam Art Latte',
    category: 'Signature Latte Art',
    description: 'Our most talked-about drink — a warm espresso latte topped with a sculpted 3D milk foam character. Each one is made by hand and unique.',
    price: 'From $9',
    tags: ['Most talked about', 'Great for photos', 'Warm drink', 'Dine-in recommended'],
    available: 'always',
    featured: true,
    gradient: 'from-amber-100 via-orange-50 to-yellow-100',
  },
  {
    id: 'latte-2d-drawing',
    name: '2D Simple Drawing Latte',
    category: 'Signature Latte Art',
    description: 'A beautifully hand-drawn latte art design poured onto your coffee. Classic café art with a personal touch.',
    price: 'From $7',
    tags: ['Customer favourite', 'Great for photos', 'Warm drink'],
    available: 'always',
    featured: true,
    gradient: 'from-amber-100 via-yellow-50 to-orange-100',
  },
  {
    id: 'latte-2d-print',
    name: '2D Print Art Latte',
    category: 'Signature Latte Art',
    description: 'Your favourite character or design printed onto smooth milk foam. Choose from our collection or bring your own reference.',
    price: 'From $8',
    tags: ['Great for photos', 'Customer favourite', 'Warm drink'],
    available: 'always',
    gradient: 'from-orange-100 via-amber-50 to-yellow-100',
  },
  {
    id: 'latte-custom-photo',
    name: 'Custom Photo Print Latte',
    category: 'Signature Latte Art',
    description: 'Turn a photo or character design into edible latte art. DM us on Instagram to arrange your custom order. Subject to availability.',
    tags: ['Great for photos', 'Custom order', 'Warm drink', 'Enquire first'],
    available: 'always',
    gradient: 'from-rose-100 via-orange-50 to-amber-100',
  },

  // Matcha & Coffee
  {
    id: 'iced-matcha-latte',
    name: 'Iced Matcha Latte',
    category: 'Matcha & Coffee',
    description: 'Ceremonial-grade matcha over ice with cold milk. Smooth, earthy and refreshing.',
    price: 'From $7.50',
    tags: ['Matcha favourite', 'Customer favourite'],
    available: 'always',
    featured: true,
    gradient: 'from-green-100 via-emerald-50 to-lime-100',
  },
  {
    id: 'hot-matcha-latte',
    name: 'Hot Matcha Latte',
    category: 'Matcha & Coffee',
    description: 'Warm and comforting ceremonial matcha with steamed milk. Perfect for a slow morning.',
    price: 'From $7',
    tags: ['Matcha favourite'],
    available: 'always',
    gradient: 'from-green-100 via-lime-50 to-emerald-100',
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'Matcha & Coffee',
    description: 'A classic flat white with our house espresso blend and silky microfoam.',
    price: 'From $5',
    tags: [],
    available: 'always',
    gradient: 'from-amber-100 via-brown-50 to-yellow-50',
  },
  {
    id: 'latte',
    name: 'Latte',
    category: 'Matcha & Coffee',
    description: 'Smooth espresso with steamed milk — a cafe staple done well.',
    price: 'From $5.50',
    tags: [],
    available: 'always',
    gradient: 'from-amber-50 via-orange-50 to-yellow-50',
  },

  // Iced Drinks
  {
    id: 'coconut-iced-coffee',
    name: 'Coconut Iced Coffee',
    category: 'Iced Drinks',
    description: 'Cold brew or espresso with coconut milk over ice. Tropical, refreshing and hard to put down.',
    price: 'From $8',
    tags: ['Customer favourite', 'Uber Eats favourite'],
    available: 'always',
    featured: true,
    gradient: 'from-sky-100 via-blue-50 to-cyan-100',
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    category: 'Iced Drinks',
    description: 'Espresso over ice with cold milk. Clean, strong and perfect for warm days.',
    price: 'From $6.50',
    tags: [],
    available: 'always',
    gradient: 'from-amber-100 via-orange-50 to-sky-100',
  },
  {
    id: 'taro-milk-tea',
    name: 'Taro Milk Drink',
    category: 'Iced Drinks',
    description: 'Sweet, creamy taro served over ice. A popular option for those who prefer something different.',
    price: 'From $7.50',
    tags: ['Customer favourite'],
    available: 'always',
    gradient: 'from-purple-100 via-pink-50 to-violet-100',
  },

  // Toast & Desserts
  {
    id: 'hk-french-toast',
    name: 'Hong Kong Style French Toast',
    category: 'Toast & Desserts',
    description: 'Deep-fried thick-cut bread filled with peanut butter or kaya, served with a drizzle of golden syrup and a knob of butter. A HK café classic.',
    price: 'From $14',
    tags: ['Customer favourite', 'Weekend treat'],
    available: 'always',
    featured: true,
    gradient: 'from-yellow-100 via-amber-100 to-orange-100',
  },
  {
    id: 'coconut-toast',
    name: 'White Chocolate Shredded Coconut Toast',
    category: 'Toast & Desserts',
    description: 'Thick toast topped with a generous layer of white chocolate spread and sweet shredded coconut. Cosy and indulgent.',
    price: 'From $13',
    tags: ['Customer favourite', 'Weekend treat'],
    available: 'always',
    featured: true,
    gradient: 'from-amber-50 via-yellow-50 to-orange-50',
  },
  {
    id: 'waffle',
    name: 'Waffle with Ice Cream',
    category: 'Toast & Desserts',
    description: 'Freshly made waffle served with a scoop of ice cream and your choice of toppings.',
    price: 'From $15',
    tags: ['Great for photos'],
    available: 'always',
    gradient: 'from-yellow-100 via-orange-50 to-amber-100',
  },

  // Sandwiches
  {
    id: 'chicken-cheese-avo',
    name: 'Chicken, Cheese & Avocado Sandwich',
    category: 'Sandwiches',
    description: 'Grilled chicken, melted cheese and fresh avocado on toasted bread. A crowd-pleasing lunch option.',
    price: 'From $16',
    tags: ['Customer favourite', 'Uber Eats favourite'],
    available: 'always',
    featured: true,
    gradient: 'from-green-100 via-yellow-50 to-amber-100',
  },
  {
    id: 'blt-sandwich',
    name: 'BLT Sandwich',
    category: 'Sandwiches',
    description: 'Crispy bacon, fresh lettuce and ripe tomato with mayo on toasted sourdough.',
    price: 'From $15',
    tags: [],
    available: 'always',
    gradient: 'from-red-100 via-orange-50 to-yellow-100',
  },

  // Breakfast & Brunch
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    category: 'Breakfast & Brunch',
    description: 'Poached eggs on toasted sourdough with your choice of ham or salmon, finished with hollandaise sauce.',
    price: 'From $19',
    tags: [],
    available: 'always',
    gradient: 'from-yellow-100 via-amber-50 to-orange-50',
  },
  {
    id: 'avo-toast',
    name: 'Smashed Avocado Toast',
    category: 'Breakfast & Brunch',
    description: 'Fresh smashed avocado on thick-cut sourdough with cherry tomatoes, feta and a sprinkle of dukkah.',
    price: 'From $17',
    tags: ['Vegetarian option'],
    available: 'always',
    gradient: 'from-green-100 via-emerald-50 to-lime-100',
  },
  {
    id: 'big-breakfast',
    name: 'Big Breakfast',
    category: 'Breakfast & Brunch',
    description: 'Eggs your way, bacon, grilled sausage, sautéed mushrooms, roasted tomato and toast. The works.',
    price: 'From $22',
    tags: [],
    available: 'always',
    gradient: 'from-amber-100 via-orange-100 to-yellow-100',
  },

  // Mains
  {
    id: 'chicken-rice',
    name: 'Japanese Chicken Katsu Rice',
    category: 'Mains',
    description: 'Crispy panko-crumbed chicken cutlet over steamed rice with tonkatsu sauce and shredded cabbage.',
    price: 'From $20',
    tags: ['Customer favourite'],
    available: 'always',
    gradient: 'from-amber-100 via-yellow-100 to-orange-50',
  },
  {
    id: 'beef-bowl',
    name: 'Teriyaki Beef Bowl',
    category: 'Mains',
    description: 'Tender teriyaki-glazed beef over steamed rice with sesame and spring onion.',
    price: 'From $20',
    tags: [],
    available: 'always',
    gradient: 'from-brown-50 via-amber-100 to-orange-100',
  },

  // Pasta
  {
    id: 'carbonara',
    name: 'Creamy Carbonara',
    category: 'Pasta',
    description: 'Al dente spaghetti in a rich egg and parmesan sauce with crispy bacon and cracked pepper.',
    price: 'From $19',
    tags: ['Customer favourite'],
    available: 'always',
    gradient: 'from-yellow-50 via-amber-50 to-orange-50',
  },
  {
    id: 'aglio-olio',
    name: 'Aglio Olio',
    category: 'Pasta',
    description: 'Classic garlic and olive oil pasta with chilli flakes and fresh parsley. Simple and satisfying.',
    price: 'From $17',
    tags: ['Vegetarian option'],
    available: 'always',
    gradient: 'from-yellow-100 via-green-50 to-amber-50',
  },

  // Seasonal
  {
    id: 'seasonal-special',
    name: 'Seasonal Drink Special',
    category: 'Seasonal Specials',
    description: 'Ask our team about the current seasonal drink. We regularly introduce new creations inspired by seasons, festivals and customer favourites.',
    tags: ['Limited time', 'Follow us on Instagram'],
    available: 'seasonal',
    gradient: 'from-pink-100 via-rose-50 to-purple-100',
  },
]

export const SIGNATURE_ITEMS = MENU_ITEMS.filter((item) => item.featured)
