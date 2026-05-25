export interface MenuItem {
  id: string
  name: string
  category: string
  description: string
  price?: string
  note?: string
  featured?: boolean
}

export const MENU_CATEGORIES = [
  'Latte Art Drinks',
  'Matcha, Coffee & Tea',
  'Iced Drinks',
  'Toast & Sweet Things',
  'Sandwiches & Brunch',
  'Comfort Food',
]

export const MENU_ITEMS: MenuItem[] = [
  // Latte Art Drinks
  {
    id: 'latte-3d-foam',
    name: '3D Milk Foam Art Latte',
    category: 'Latte Art Drinks',
    description: 'A sculpted milk foam character placed on top of your latte. Each one is made by hand and is different every time. Warm drink only, dine-in recommended.',
    price: 'From $9',
    featured: true,
  },
  {
    id: 'latte-2d-drawing',
    name: '2D Drawn Latte',
    category: 'Latte Art Drinks',
    description: 'A hand-poured latte art design drawn directly onto your coffee. Classic, personal and a little different each time.',
    price: 'From $7',
    featured: true,
  },
  {
    id: 'latte-2d-print',
    name: '2D Print Art Latte',
    category: 'Latte Art Drinks',
    description: 'Your chosen character or design printed onto smooth milk foam. Choose from our in-store collection or ask about options.',
    price: 'From $8',
  },
  {
    id: 'latte-custom-photo',
    name: 'Custom Photo Print Latte',
    category: 'Latte Art Drinks',
    description: 'A custom image or character printed onto your latte. DM us on Instagram to arrange before your visit. Subject to availability.',
    note: 'Pre-arrange via Instagram DM',
  },

  // Matcha, Coffee & Tea
  {
    id: 'hot-matcha-latte',
    name: 'Hot Matcha Latte',
    category: 'Matcha, Coffee & Tea',
    description: 'Ceremonial-grade matcha with steamed milk. Smooth, earthy and warming.',
    price: 'From $7',
    featured: true,
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'Matcha, Coffee & Tea',
    description: 'Our house espresso blend with silky microfoam. Reliable, well-made.',
    price: 'From $5',
  },
  {
    id: 'latte-hot',
    name: 'Latte',
    category: 'Matcha, Coffee & Tea',
    description: 'Smooth espresso with steamed milk.',
    price: 'From $5.50',
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'Matcha, Coffee & Tea',
    description: 'Classic espresso with equal parts steamed milk and dry foam.',
    price: 'From $5',
  },

  // Iced Drinks
  {
    id: 'iced-matcha-latte',
    name: 'Iced Matcha Latte',
    category: 'Iced Drinks',
    description: 'Ceremonial matcha poured over ice and cold milk. Refreshing without being sweet.',
    price: 'From $7.50',
    featured: true,
  },
  {
    id: 'coconut-iced-coffee',
    name: 'Coconut Iced Coffee',
    category: 'Iced Drinks',
    description: 'Espresso over ice with coconut milk. One of our most reordered drinks.',
    price: 'From $8',
    featured: true,
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    category: 'Iced Drinks',
    description: 'Espresso over ice with cold milk. Clean and strong.',
    price: 'From $6.50',
  },
  {
    id: 'taro-milk-drink',
    name: 'Taro Milk Drink',
    category: 'Iced Drinks',
    description: 'Sweet, creamy taro over ice. A popular choice for those who prefer something without coffee.',
    price: 'From $7.50',
  },

  // Toast & Sweet Things
  {
    id: 'hk-french-toast',
    name: 'Hong Kong Style French Toast',
    category: 'Toast & Sweet Things',
    description: 'Deep-fried thick-cut bread with peanut butter or kaya, finished with golden syrup and butter. A Hong Kong café staple.',
    price: 'From $14',
    featured: true,
  },
  {
    id: 'coconut-toast',
    name: 'White Chocolate Coconut Toast',
    category: 'Toast & Sweet Things',
    description: 'Thick toast with white chocolate spread and shredded coconut. Rich and satisfying.',
    price: 'From $13',
    featured: true,
  },
  {
    id: 'waffle',
    name: 'Waffle with Ice Cream',
    category: 'Toast & Sweet Things',
    description: 'Freshly made waffle with a scoop of ice cream and your choice of toppings.',
    price: 'From $15',
  },

  // Sandwiches & Brunch
  {
    id: 'chicken-cheese-avo',
    name: 'Chicken, Cheese & Avocado Sandwich',
    category: 'Sandwiches & Brunch',
    description: 'Grilled chicken, melted cheese and fresh avocado on toasted bread.',
    price: 'From $16',
    featured: true,
  },
  {
    id: 'blt-sandwich',
    name: 'BLT Sandwich',
    category: 'Sandwiches & Brunch',
    description: 'Crispy bacon, fresh lettuce and tomato with mayo on toasted sourdough.',
    price: 'From $15',
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    category: 'Sandwiches & Brunch',
    description: 'Poached eggs on sourdough with ham or salmon, finished with hollandaise.',
    price: 'From $19',
  },
  {
    id: 'avo-toast',
    name: 'Smashed Avocado Toast',
    category: 'Sandwiches & Brunch',
    description: 'Smashed avocado on thick-cut sourdough with cherry tomatoes, feta and dukkah.',
    price: 'From $17',
  },

  // Comfort Food
  {
    id: 'chicken-katsu',
    name: 'Japanese Chicken Katsu Rice',
    category: 'Comfort Food',
    description: 'Crispy panko-crumbed chicken over steamed rice with tonkatsu sauce and shredded cabbage.',
    price: 'From $20',
    featured: true,
  },
  {
    id: 'teriyaki-beef-bowl',
    name: 'Teriyaki Beef Bowl',
    category: 'Comfort Food',
    description: 'Teriyaki-glazed beef over steamed rice with sesame and spring onion.',
    price: 'From $20',
  },
  {
    id: 'carbonara',
    name: 'Creamy Carbonara',
    category: 'Comfort Food',
    description: 'Spaghetti in a rich egg and parmesan sauce with crispy bacon and cracked pepper.',
    price: 'From $19',
  },
  {
    id: 'aglio-olio',
    name: 'Aglio Olio',
    category: 'Comfort Food',
    description: 'Classic garlic and olive oil pasta with chilli flakes and parsley.',
    price: 'From $17',
  },
]

export const FEATURED_ITEMS = MENU_ITEMS.filter((item) => item.featured)
