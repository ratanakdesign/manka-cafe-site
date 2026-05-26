export interface MenuItem {
  id: string
  name: string
  category: string
  description: string
  price?: string
  note?: string
  featured?: boolean
  image?: string
  imageAlt?: string
}

export const MENU_CATEGORIES = [
  'Popular at Manka',
  'Latte Art Drinks',
  'Hot Coffee',
  'Iced Coffee',
  'Breakfasts',
  'Toast',
  'Sandwiches',
  'Meals',
  'Pastas',
]

export const MENU_ITEMS: MenuItem[] = [
  // ── Popular at Manka ─────────────────────────────────────────────
  // Curated cross-category highlights recommended for first-time visitors
  {
    id: 'popular-latte-art',
    name: '3D or 2D Latte Art',
    category: 'Popular at Manka',
    description: 'Sculpted milk foam characters or hand-drawn designs on your latte. Made at the counter, different every time. The reason most people first visit Manka.',
    note: 'Dine-in only. Ask in-store for current designs and pricing.',
    image: '/images/latte-art/manka-cafe-rose-latte-hot.jpg',
    imageAlt: 'Rose latte art at Manka Cafe — a warm espresso drink with a hand-crafted rose design in steamed milk foam, Sunnybank',
    featured: true,
  },
  {
    id: 'popular-hk-toast',
    name: 'Hong Kong Style French Toast',
    category: 'Popular at Manka',
    description: 'Toast with egg, butter, maple syrup and peanut. A Hong Kong café classic — the most-reordered item.',
    price: '$15',
    note: 'Contains nuts.',
    image: '/images/menu/manka-cafe-hong-kong-french-toast-butter.jpg',
    imageAlt: 'Hong Kong-style French toast at Manka Cafe — golden toast with peanut butter and maple syrup, Sunnybank',
    featured: true,
  },
  {
    id: 'popular-iced-matcha',
    name: 'Iced Matcha Latte',
    category: 'Popular at Manka',
    description: 'Strong matcha flavour, frequently praised in reviews. Ask in-store for pricing and availability.',
    note: 'Confirm availability and price in-store.',
    featured: true,
  },
  {
    id: 'popular-chicken-avo-sandwich',
    name: 'Chicken, Cheese & Avocado Sandwich',
    category: 'Popular at Manka',
    description: 'The most-liked item on the Uber Eats menu. Served with mayonnaise.',
    price: '$15',
    image: '/images/menu/manka-cafe-takeaway-sandwich-packaged.jpg',
    imageAlt: 'Packaged sandwich at Manka Cafe, Sunnybank',
    featured: true,
  },
  {
    id: 'popular-coconut-iced-coffee',
    name: 'Coconut Iced Coffee',
    category: 'Popular at Manka',
    description: 'No. 2 most-liked item on Uber Eats. A reliable choice for iced coffee drinkers.',
    price: '$9.80',
    image: '/images/menu/manka-cafe-iced-latte.jpg',
    imageAlt: 'Iced coffee at Manka Cafe, Sunnybank',
    featured: true,
  },
  {
    id: 'popular-chicken-tender-set',
    name: 'Fried Chicken Tender Set',
    category: 'Popular at Manka',
    description: 'Fresh chicken tenders fried crispy — choose original or spicy. Served with French fries and fresh vegetables.',
    price: '$30.30',
    image: '/images/archive/manka-cafe-chicken-tenders-chips-salad.jpg',
    imageAlt: 'Fried chicken tenders with chips and salad at Manka Cafe, Sunnybank',
    featured: true,
  },
  {
    id: 'popular-affogato',
    name: 'Affogato',
    category: 'Popular at Manka',
    description: 'Cookies and cream ice cream with espresso. Frequently mentioned in reviews. Ask in-store for current options.',
    note: 'Confirm availability in-store.',
    featured: true,
  },
  {
    id: 'popular-coconut-toast',
    name: 'White Chocolate Shredded Coconut Toast',
    category: 'Popular at Manka',
    description: 'Toast with egg, butter, maple syrup, white chocolate, shredded coconut, almond and pistachio butter.',
    price: '$16',
    note: 'Contains nuts.',
    featured: true,
  },

  // ── Latte Art Drinks ─────────────────────────────────────────────
  // In-store specialty drinks — not on delivery
  {
    id: 'latte-3d-foam',
    name: '3D Milk Foam Art',
    category: 'Latte Art Drinks',
    description: 'A sculpted milk foam character placed on top of your latte. Made by hand — different every time. Warm drinks only.',
    note: 'Dine-in recommended. Ask in-store for available designs.',
  },
  {
    id: 'latte-2d-drawing',
    name: '2D Drawn Latte',
    category: 'Latte Art Drinks',
    description: 'A hand-poured design drawn directly onto your coffee. Classic, personal and a little different each time.',
  },
  {
    id: 'latte-2d-print',
    name: '2D Print Art Latte',
    category: 'Latte Art Drinks',
    description: 'A character or design printed onto smooth milk foam. Choose from our in-store collection or ask about options.',
  },
  {
    id: 'latte-custom-photo',
    name: 'Custom Photo Print Latte',
    category: 'Latte Art Drinks',
    description: 'A custom image printed onto your latte. DM us on Instagram to arrange before your visit. Subject to availability.',
    note: 'Pre-arrange via Instagram DM before visiting.',
  },

  // ── Hot Coffee ───────────────────────────────────────────────────
  {
    id: 'hot-chai-tea-latte',
    name: 'Chai Tea Latte',
    category: 'Hot Coffee',
    description: 'Warm spiced chai latte.',
    price: '$6.40',
  },
  {
    id: 'hot-hojicha-latte',
    name: 'Hojicha Latte',
    category: 'Hot Coffee',
    description: 'Roasted Japanese green tea with steamed milk. Earthy, warming and subtly sweet.',
    price: '$7.00',
  },

  // ── Iced Coffee ──────────────────────────────────────────────────
  {
    id: 'iced-latte-no-sugar',
    name: 'Iced Latte No Sugar',
    category: 'Iced Coffee',
    description: 'Iced latte with no added sugar.',
    price: '$6.40',
  },
  {
    id: 'iced-coconut-coffee',
    name: 'Coconut Iced Coffee',
    category: 'Iced Coffee',
    description: 'No. 2 most-liked item on Uber Eats.',
    price: '$9.80',
  },
  {
    id: 'iced-melancholy-coffee',
    name: 'Melancholy Iced Coffee',
    category: 'Iced Coffee',
    description: 'No. 3 most-liked item on Uber Eats.',
    price: '$9.80',
  },

  // ── Breakfasts ───────────────────────────────────────────────────
  {
    id: 'breakfast-big',
    name: 'Big Breakfast',
    category: 'Breakfasts',
    description: 'Plain toast with butter, scrambled eggs, two pieces of bacon, two beef sausage, tomato beans and selected flavour ice cream.',
    price: '$29.77',
  },
  {
    id: 'breakfast-classic-brunch',
    name: 'Classic All Day Brunch',
    category: 'Breakfasts',
    description: 'Plain toast with butter, scrambled eggs, two pieces of bacon, mushrooms, cherry tomatoes and tomato beans.',
    price: '$29.77',
  },
  {
    id: 'breakfast-omelette',
    name: 'Omelette Brunch',
    category: 'Breakfasts',
    description: 'Eggs, ham, tomato, beans, onion and plain toasts.',
    price: '$29.77',
  },

  // ── Toast ────────────────────────────────────────────────────────
  {
    id: 'toast-hk-french',
    name: 'Hong Kong Style French Toast',
    category: 'Toast',
    description: 'Toast with egg, butter, maple syrup and peanut.',
    price: '$15.00',
    note: 'Contains nuts.',
  },
  {
    id: 'toast-black-sesame-pb',
    name: 'Black Sesame Peanut Butter Toast',
    category: 'Toast',
    description: 'Toast with egg, butter, maple syrup, peanut and black sesame.',
    price: '$16.00',
    note: 'Contains nuts.',
  },
  {
    id: 'toast-choc-pistachio',
    name: 'Chocolate Pistachio Butter Toast',
    category: 'Toast',
    description: 'Toast with egg, butter, maple syrup, chocolate sauce, nuts, almond and pistachio butter.',
    price: '$16.00',
    note: 'Contains nuts.',
  },
  {
    id: 'toast-white-choc-coconut',
    name: 'White Chocolate Shredded Coconut Toast',
    category: 'Toast',
    description: 'Toast with egg, butter, maple syrup, chocolate sauce, condensed milk, white chocolate, shredded coconut, almond and pistachio butter.',
    price: '$16.00',
    note: 'Contains nuts.',
  },
  {
    id: 'toast-almond-pistachio-pb',
    name: 'Almond, Pistachio and Peanut Butter Toast',
    category: 'Toast',
    description: 'Toast with egg, butter, maple syrup, peanut butter, almond and pistachio butter.',
    price: '$17.00',
    note: 'Contains nuts.',
  },
  {
    id: 'toast-classic-choc-icecream',
    name: 'Classic Chocolate Sauce Vanilla Ice Cream Toast',
    category: 'Toast',
    description: 'Toast with egg, peanut, condensed milk, maple syrup and chocolate sauce, served with vanilla ice cream.',
    price: '$19.00',
    note: 'Contains nuts.',
  },

  // ── Sandwiches ───────────────────────────────────────────────────
  {
    id: 'sandwich-chicken-avo',
    name: 'Chicken, Cheese and Avocado Sandwich',
    category: 'Sandwiches',
    description: 'Served with mayonnaise.',
    price: '$15.00',
  },
  {
    id: 'sandwich-chicken-lettuce',
    name: 'Chicken, Cheese and Lettuce Sandwich',
    category: 'Sandwiches',
    description: 'Served with mayonnaise.',
    price: '$15.00',
  },
  {
    id: 'sandwich-bacon-egg',
    name: 'Bacon, Cheese and Egg Sandwich',
    category: 'Sandwiches',
    description: 'Served with barbecue sauce or tomato sauce.',
    price: '$15.00',
  },
  {
    id: 'sandwich-ham-avo',
    name: 'Ham, Cheese and Avocado Sandwich',
    category: 'Sandwiches',
    description: 'Thinly sliced ham, melted cheese and fresh avocado on toasted bread.',
    price: '$15.00',
  },
  {
    id: 'sandwich-ham-egg',
    name: 'Ham, Cheese and Egg Sandwich',
    category: 'Sandwiches',
    description: 'Thinly sliced ham, melted cheese and a fried egg on toasted bread.',
    price: '$15.00',
  },

  // ── Meals ────────────────────────────────────────────────────────
  {
    id: 'meal-chicken-tender-set',
    name: 'Fried Chicken Tender Set',
    category: 'Meals',
    description: 'Fresh chicken tenders fried crispy — choose original or spicy flavour. Served with French fries and fresh vegetables.',
    price: '$30.30',
  },
  {
    id: 'meal-chicken-set',
    name: 'Fried Chicken Set',
    category: 'Meals',
    description: 'Fresh chicken legs fried to a crispy golden colour — choose original or spicy flavour. Served with French fries and fresh vegetables.',
    price: '$33.55',
  },
  {
    id: 'meal-ham-eggs-fried-rice',
    name: 'Ham and Eggs Fried Rice',
    category: 'Meals',
    description: 'Diced ham, scrambled egg, peas and carrots folded through fried rice.',
    price: '$32.60',
  },

  // ── Pastas ───────────────────────────────────────────────────────
  {
    id: 'pasta-shrimp',
    name: 'Creamy Lemon Garlic Shrimp Pasta',
    category: 'Pastas',
    description: 'Shrimp pasta tossed in a rich, zesty lemon garlic sauce.',
    price: '$37.70',
  },
  {
    id: 'pasta-vongole',
    name: 'Spaghetti Alle Vongole',
    category: 'Pastas',
    description: 'Pasta with clams.',
    price: '$32.77',
  },
  {
    id: 'pasta-chicken-mushroom',
    name: 'Chicken and Mushroom Pasta',
    category: 'Pastas',
    description: 'Tender chicken and mushrooms in a rich pasta dish.',
    price: '$29.77',
  },
]

export const FEATURED_ITEMS = MENU_ITEMS.filter((item) => item.featured)
