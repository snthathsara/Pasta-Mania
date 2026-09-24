export const MENU_ITEMS = [
  // --- 1. MAINS: ARTISAN PASTA & ITALIAN DISHES (4 Items) ---
  {
    id: 'pastamania-carbonara',
    name: 'Creamy Carbonara Pasta',
    category: 'mains',
    categoryLabel: 'Mains · Artisan Italian Pasta',
    price: 'Rs. 2,290',
    description: 'Classic Italian egg-yolk parmesan cream, crispy savory turkey bacon, minced garlic, freshly cracked black peppercorn, and generous parmesan shavings over your choice of al dente pasta.',
    notes: 'Egg-yolk cream, savory turkey bacon, cracked peppercorns, aged parmesan.',
    dietary: ['House Signature', 'Al Dente Perfection', 'Choice of Pasta'],
    pairing: 'Sparkling Strawberry Basil Spritz',
    image: '/pastamania-carbonara.jpg',
    prepTime: 'Cooked Fresh to Order'
  },
  {
    id: 'pastamania-bolognese',
    name: 'Beef Bolognese Pasta',
    category: 'mains',
    categoryLabel: 'Mains · Artisan Italian Pasta',
    price: 'Rs. 2,290',
    description: 'Authentic slow-simmered rich minced beef ragù cooked with sweet Italian plum tomatoes, fresh garden basil, oregano, and topped with shaved aged parmesan cheese.',
    notes: 'Slow-simmered beef ragù, plum tomatoes, fresh sweet basil.',
    dietary: ['Bestseller', 'Italian Classic', 'Choice of Pasta'],
    pairing: 'Classic Italian Cappuccino',
    image: '/pastamania-bolognese.jpg',
    prepTime: 'Slow-Simmered Italian Recipe'
  },
  {
    id: 'pastamania-prawn-aglio',
    name: 'Prawn Aglio Olio',
    category: 'mains',
    categoryLabel: 'Mains · Artisan Italian Pasta',
    price: 'Rs. 2,290',
    description: 'Plump sautéed tiger prawns tossed in fragrant extra virgin olive oil, golden toasted garlic slivers, crushed chili flakes, sweet cherry tomatoes, and fresh Italian flat-leaf parsley.',
    notes: 'Tiger prawns, toasted garlic chips, extra virgin olive oil, chili kick.',
    dietary: ['Seafood Favorite', 'Mild Chili Heat', 'Olive Oil Tossed'],
    pairing: 'Sicilian Blood Orange & Mint Cooler',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Pan-Tossed Live'
  },
  {
    id: 'pastamania-tuscan-chicken',
    name: 'Creamy Tuscan Chicken & Mushroom',
    category: 'mains',
    categoryLabel: 'Mains · Artisan Italian Pasta',
    price: 'Rs. 1,890',
    description: 'Tender pan-seared chicken breast slices and sautéed button mushrooms enveloped in a rich, velvety roasted garlic cream sauce, garnished with cracked pepper and fresh parsley.',
    notes: 'Tender chicken slices, sautéed mushrooms, garlic cream velvet.',
    dietary: ['Chef Special', 'Rich & Creamy', 'Choice of Pasta'],
    pairing: 'Signature Iced Vanilla Hazelnut Latte',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Cooked Hot to Order'
  },

  // --- 2. SNACKS: APPETIZERS & SIDES (3 Items) ---
  {
    id: 'pastamania-garlic-bread',
    name: 'Crispy Garlic Bread with Melted Mozzarella',
    category: 'snacks',
    categoryLabel: 'Snacks · Italian Starters & Sides',
    price: 'Rs. 1,250',
    description: 'Warm crusty artisan Italian baguette slices brushed with fragrant roasted garlic herb butter, layered with thick melted golden mozzarella cheese baked till bubbly.',
    notes: 'Toasted artisan baguette, roasted garlic butter, molten mozzarella pull.',
    dietary: ['Crowd Pleaser', 'Melted Mozzarella', 'Shareable'],
    pairing: 'Iced Caramel Macchiato',
    image: '/pastamania-garlic-bread.jpg',
    prepTime: 'Baked Golden Hot'
  },
  {
    id: 'pastamania-mozzarella-sticks',
    name: 'Crispy Mozzarella Cheese Sticks',
    category: 'snacks',
    categoryLabel: 'Snacks · Italian Starters & Sides',
    price: 'Rs. 1,590',
    description: 'Golden Italian-seasoned breaded mozzarella fingers fried to molten cheese-stretch perfection, served hot with tangy house marinara dipping sauce.',
    notes: 'Ultra-stretchy molten mozzarella, golden crumb, herb marinara dip.',
    dietary: ['Crispy Classic', 'Cheese Stretch', 'Vegetarian Friendly'],
    pairing: 'Sicilian Blood Orange & Mint Cooler',
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Fried Golden to Order'
  },
  {
    id: 'pastamania-mushroom-soup',
    name: 'Creamy Wild Mushroom Soup & Garlic Crostini',
    category: 'snacks',
    categoryLabel: 'Snacks · Italian Starters & Sides',
    price: 'Rs. 1,590',
    description: 'Hearty blend of sautéed wild forest mushrooms and aromatic herbs simmered in velvety cream, served steaming hot with crispy garlic herb crostini.',
    notes: 'Button & portobello mushrooms, heavy cream simmer, crispy herb crostini.',
    dietary: ['Comfort Bowl', 'Vegetarian Friendly'],
    pairing: 'Artisan Double Espresso Romano',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Simmered Fresh Daily'
  },

  // --- 3. COFFEE & HOT DRINKS: ITALIAN ESPRESSO BAR (4 Items) ---
  {
    id: 'pastamania-iced-vanilla-latte',
    name: 'Signature Iced Vanilla Hazelnut Latte',
    category: 'sips',
    categoryLabel: 'Coffee & Drinks · Italian Espresso Bar',
    price: 'Rs. 890',
    description: 'Bold Italian espresso pulled fresh over chilled milk, blended with fragrant Madagascar vanilla and roasted hazelnut syrup, crowned with a silky cold foam cap.',
    notes: 'Italian dark roast, toasted hazelnut syrup, cold milk foam.',
    dietary: ['Barista Signature', 'Iced Perfection'],
    pairing: 'Creamy Carbonara Pasta',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Freshly Pulled & Chilled'
  },
  {
    id: 'pastamania-cappuccino',
    name: 'Classic Italian Cappuccino',
    category: 'sips',
    categoryLabel: 'Coffee & Drinks · Italian Espresso Bar',
    price: 'Rs. 750',
    description: 'Equal harmony of rich dark Italian espresso, velvety steamed whole milk, and dense cloud-like foam dusted with Dutch dark cocoa powder.',
    notes: 'Golden crema, velvety microfoam, dark cocoa dusting.',
    dietary: ['Italian Heritage', 'Classic Roast'],
    pairing: 'Beef Bolognese Pasta',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Steamed to 65°C Precision'
  },
  {
    id: 'pastamania-espresso',
    name: 'Artisan Double Espresso Romano',
    category: 'sips',
    categoryLabel: 'Coffee & Drinks · Italian Espresso Bar',
    price: 'Rs. 650',
    description: 'Double shot of intense dark Italian roast pulled with thick golden crema, served traditionally with a twist of fresh lemon peel to accentuate deep aromatic notes.',
    notes: 'Full-bodied dark roast, hazelnut crema, fresh citrus peel.',
    dietary: ['Pure Espresso', 'Sugar-Free'],
    pairing: 'Crispy Garlic Bread with Melted Mozzarella',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Extracted at 9 Bars Pressure'
  },
  {
    id: 'pastamania-caramel-macchiato',
    name: 'Iced Caramel Macchiato',
    category: 'sips',
    categoryLabel: 'Coffee & Drinks · Italian Espresso Bar',
    price: 'Rs. 850',
    description: 'Sweet vanilla-infused cold milk poured over ice cubes, layered with bold double espresso shots and crisscrossed with buttery golden caramel ribbon drizzle.',
    notes: 'Layered vanilla milk, bold espresso drop, buttery caramel swirl.',
    dietary: ['Sweet Tooth Favorite', 'Iced Specialty'],
    pairing: 'Crispy Mozzarella Cheese Sticks',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Handcrafted Layered Sip'
  },

  // --- 4. BEVERAGES: SPARKLES & ITALIAN SHAKES (3 Items) ---
  {
    id: 'pastamania-strawberry-spritz',
    name: 'Sparkling Strawberry Basil Spritz',
    category: 'refreshers',
    categoryLabel: 'Beverages · Italian Coolers & Shakes',
    price: 'Rs. 790',
    description: 'Freshly muddled island strawberries and aromatic garden sweet basil leaves infused with zesty key lime and topped with sparkling mineral soda over crystal ice.',
    notes: 'Muddled strawberries, fragrant fresh basil, sparkling soda fizz.',
    dietary: ['Refreshing & Crisp', 'Low Sugar', 'Mocktail'],
    pairing: 'Prawn Aglio Olio',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Muddled Fresh to Order'
  },
  {
    id: 'pastamania-blood-orange',
    name: 'Sicilian Blood Orange & Mint Cooler',
    category: 'refreshers',
    categoryLabel: 'Beverages · Italian Coolers & Shakes',
    price: 'Rs. 750',
    description: 'Sun-drenched Mediterranean blood orange nectar, crushed garden mint, and sparkling soda served ice-cold with a dried orange wheel in a frosted glass.',
    notes: 'Sun-ripened blood orange, cool mint leaves, bubbly spritz.',
    dietary: ['Citrus Zing', '100% Refreshing'],
    pairing: 'Creamy Tuscan Chicken & Mushroom',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Shaken & Chilled'
  },
  {
    id: 'pastamania-tiramisu-frappe',
    name: 'Creamy Tiramisu Espresso Frappe',
    category: 'refreshers',
    categoryLabel: 'Beverages · Italian Coolers & Shakes',
    price: 'Rs. 1,190',
    description: 'An Italian dessert classic reimagined into a frozen frappe: freshly pulled espresso blended with creamy mascarpone, crushed savoiardi biscuits, and whipped cream.',
    notes: 'Mascarpone gelato base, double espresso, ladyfinger crumbs, cocoa.',
    dietary: ['Dessert in a Glass', 'Decadent Indulgence'],
    pairing: 'Creamy Carbonara Pasta',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    prepTime: 'Blended Thick to Order'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Dishes' },
  { id: 'mains', label: 'Artisan Pasta' },
  { id: 'snacks', label: 'Starters & Sides' },
  { id: 'sips', label: 'Italian Espresso Bar' },
  { id: 'refreshers', label: 'Coolers & Shakes' }
];

export const GALLERY_ITEMS = [
  {
    title: 'Artisan Creamy Carbonara',
    subtitle: 'Twirled al dente with rich egg-yolk cream, savory bacon & aged parmesan',
    category: 'Pasta Station',
    image: '/pastamania-carbonara.jpg'
  },
  {
    title: 'Slow-Cooked Beef Bolognese',
    subtitle: 'Authentic Italian plum tomato & minced beef ragù with fresh basil',
    category: 'Signature Plate',
    image: '/pastamania-bolognese.jpg'
  },
  {
    title: 'Melted Mozzarella Garlic Bread',
    subtitle: 'Crusty artisan baguette brushed with herb butter and bubbly mozzarella',
    category: 'Starters',
    image: '/pastamania-garlic-bread.jpg'
  },
  {
    title: 'Handcrafted Italian Sips',
    subtitle: 'Freshly pulled double espresso & sparkling strawberry basil coolers',
    category: 'Espresso Bar',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
  }
];

