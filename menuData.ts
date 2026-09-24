import { MenuItem, DealItem, ExtraOption } from './types';

export const WHATSAPP_NUMBER = "923058745545";
export const PHONE_DISPLAY = "+92 3058745545";
export const PHONE_TEL = "+923058745545";
export const INSTAGRAM_HANDLE = "@diet_inn_cafe";
export const INSTAGRAM_URL = "https://www.instagram.com/diet_inn_cafe/";
export const ADDRESS = "50 Usman Block, Al Kabir Town, Phase 2, Lahore";
export const TAGLINE = "Eat Smart - Stay Fit";

export const BURGER_EXTRAS: ExtraOption[] = [
  { id: 'extra-cheese', name: 'Extra Cheese', price: 80 },
  { id: 'extra-mayo-dip', name: 'Mayonnaise Dip', price: 50 },
  { id: 'extra-chili-dip', name: 'Red Chili Dip', price: 50 }
];

export const PIZZA_EXTRAS: ExtraOption[] = [
  { id: 'extra-cheese-pz', name: 'Extra Cheese', price: 150 },
  { id: 'extra-mayo-dip-pz', name: 'Mayonnaise Dip', price: 50 }
];

export const SHAWARMA_EXTRAS: ExtraOption[] = [
  { id: 'extra-cheese-sh', name: 'Extra Cheese', price: 80 },
  { id: 'extra-garlic-dip', name: 'Mayonnaise Dip', price: 50 }
];

export const getWhatsAppUrl = (itemText?: string) => {
  const baseText = itemText 
    ? `Hi Diet Inn Cafe, I'd like to place an order for: ${itemText}`
    : "Hi Diet Inn Cafe, I'd like to place an order.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(baseText)}`;
};

export const BRAND_DEALS: DealItem[] = [
  {
    id: 'anniversary-deal',
    title: '1-MONTH ANNIVERSARY DEAL',
    subtitle: '1 Large Pizza (16") + 1 Regular Chicken Patty Burger + 1.5L Cold Drink',
    dealPrice: 1500,
    tag: 'Anniversary Special',
    items: [
      '1 Large Pizza (16")',
      '1 Regular Chicken Patty Burger',
      '1 Cold Drink (1.5 Liter)'
    ],
    image: '/deal_anniversary.jpg',
    popular: true
  },
  {
    id: 'mega-shawarma-deal',
    title: 'MEGA SHAWARMA CELEBRATION DEAL',
    subtitle: 'BUY 2 GET 1 FREE — Get 3 Shawarmas in the Price of 2!',
    dealPrice: 500,
    tag: 'Buy 2 Get 1 FREE',
    items: [
      '3 Roasted Chicken Shawarmas',
      'Fresh Salad & House Garlic Dip',
      'Special Celebration Savings'
    ],
    image: '/deal_shawarma.jpg',
    popular: true
  },
  {
    id: 'economy-deal-1',
    title: 'ECONOMY DEAL 1',
    subtitle: '1 Crispy Zinger Burger + Crispy Fries + 250ml Cold Drink',
    dealPrice: 499,
    tag: 'Daily Special',
    items: [
      '1 Crispy Chicken Zinger Burger',
      '1 Portion Golden French Fries',
      '1 Cold Drink (250ml)'
    ],
    image: '/deal_economy.jpg',
    popular: true
  },
  {
    id: 'saturday-night-deal',
    title: 'SATURDAY NIGHT DEAL',
    subtitle: '1 Medium Pizza + 1 Shawarma + 1 Loaded Fries + 500ml Drink',
    dealPrice: 1199,
    tag: 'Weekend Combo',
    items: [
      '1 Medium Pizza (Tikka or Fajita)',
      '1 Chicken / Zinger Shawarma Wrap',
      '1 Bowl Cheese Loaded Fries',
      '1 Cold Drink (500ml)'
    ],
    image: '/deal_saturday.jpg',
    popular: false
  },
  {
    id: 'sunday-family-deal',
    title: 'SUNDAY FAMILY DEAL',
    subtitle: '1 Large Pizza + 2 Zinger Burgers + 2 Shawarmas + 1 Loaded Fries + FREE 1.5L Drink',
    originalPrice: 3000,
    dealPrice: 2599,
    tag: 'Ultimate Family Feast',
    items: [
      '1 Large Pizza (Tikka or Fajita)',
      '2 Crispy Zinger Burgers',
      '2 Chicken Shawarma Wraps',
      '1 Large Loaded Fries',
      'FREE 1.5 Liter Cold Drink'
    ],
    image: '/deal_sunday.jpg',
    popular: true
  }
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: 'ig-1',
    title: 'Crown Crust Pizza',
    tag: 'Specialty',
    caption: 'Stuffed crown crust pizza with melted cheese pockets & spiced chicken.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ig-2',
    title: 'Sunday Family Deal (Rs. 2599)',
    tag: 'Deal Alert',
    caption: '1 Large Pizza + 2 Zinger Burgers + 2 Shawarma + 1 Loaded Fries + FREE 1.5L Drink',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ig-3',
    title: 'Crispy Zinger & Grill Burgers',
    tag: 'Popular',
    caption: 'Freshly fried zinger fillets and flame-grilled chicken patties in Al Kabir Town.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ig-4',
    title: 'Loaded Cheese Fries & Pasta',
    tag: 'Favorites',
    caption: 'Crispy potato fries loaded with melted cheese, chicken bits, and olives.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // 1. BURGERS
  {
    id: 'b1',
    name: 'Chicken Patty Burger',
    category: 'Burgers',
    price: 300,
    description: 'Golden chicken patty with fresh lettuce and house mayonnaise in a toasted bun.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    availableExtras: BURGER_EXTRAS
  },
  {
    id: 'b2',
    name: 'Chicken Zinger Burger',
    category: 'Burgers',
    price: 400,
    isPopular: true,
    description: 'Crispy fried chicken zinger fillet with crisp lettuce and creamy sauce.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=800',
    availableExtras: BURGER_EXTRAS
  },
  {
    id: 'b3',
    name: 'Chicken Fillet Burger',
    category: 'Burgers',
    price: 450,
    description: 'Tender seasoned chicken fillet burger with crisp salad and garlic mayo.',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&q=80&w=800',
    availableExtras: BURGER_EXTRAS
  },
  {
    id: 'b4',
    name: 'Chicken Grill Burger',
    category: 'Burgers',
    price: 450,
    isPopular: true,
    description: 'Flame-grilled marinated chicken slice with fresh lettuce and specialty sauce.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=800',
    availableExtras: BURGER_EXTRAS
  },

  // 2. SHAWARMA & WRAPS
  {
    id: 's1',
    name: 'Chicken / Zinger Shawarma',
    category: 'Shawarma & Wraps',
    price: 250,
    isPopular: true,
    description: 'Pita wrapped with spiced chicken or zinger strips, garlic sauce, and pickles.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800',
    availableExtras: SHAWARMA_EXTRAS
  },
  {
    id: 's2',
    name: 'Chicken / Zinger Wrap',
    category: 'Shawarma & Wraps',
    price: 350,
    description: 'Soft tortilla wrap stuffed with seasoned chicken, fresh salad, and sauce.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
    availableExtras: SHAWARMA_EXTRAS
  },
  {
    id: 's3',
    name: 'Shawarma Platter (3 Breads)',
    category: 'Shawarma & Wraps',
    price: 600,
    isPopular: true,
    description: 'Generous serving with 3 pita breads, chicken portion, fresh salad, and garlic dip.',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800',
    availableExtras: SHAWARMA_EXTRAS
  },

  // 3. DIET INN PIZZA
  {
    id: 'pz1',
    name: 'Crown Crust Pizza',
    category: 'Diet Inn Pizza',
    price: 1500,
    isPopular: true,
    options: [
      { label: 'Medium', price: 1500 },
      { label: 'Large', price: 2000 }
    ],
    description: 'Stuffed crown crust pizza with melted cheese pockets and savory chicken toppings.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    availableExtras: PIZZA_EXTRAS
  },
  {
    id: 'pz2',
    name: 'Chicken Tikka Pizza',
    category: 'Diet Inn Pizza',
    price: 450,
    isPopular: true,
    options: [
      { label: 'Small', price: 450 },
      { label: 'Medium', price: 800 },
      { label: 'Large', price: 1200 }
    ],
    description: 'Tikka marinated chicken chunks with onions, bell peppers, and rich mozzarella.',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800',
    availableExtras: PIZZA_EXTRAS
  },
  {
    id: 'pz3',
    name: 'Chicken Fajita Pizza',
    category: 'Diet Inn Pizza',
    price: 450,
    options: [
      { label: 'Small', price: 450 },
      { label: 'Medium', price: 800 },
      { label: 'Large', price: 1200 }
    ],
    description: 'Fajita spiced chicken with bell peppers, onions, and melted mozzarella.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800',
    availableExtras: PIZZA_EXTRAS
  },
  {
    id: 'pz4',
    name: 'Veggies Pizza',
    category: 'Diet Inn Pizza',
    price: 450,
    isVegetarian: true,
    options: [
      { label: 'Small', price: 450 },
      { label: 'Medium', price: 800 },
      { label: 'Large', price: 1200 }
    ],
    description: 'Fresh bell peppers, black olives, onions, tomatoes, and golden mozzarella.',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&q=80&w=800',
    availableExtras: PIZZA_EXTRAS
  },
  {
    id: 'pz5',
    name: 'Cheese Only Pizza',
    category: 'Diet Inn Pizza',
    price: 450,
    isVegetarian: true,
    options: [
      { label: 'Small', price: 450 },
      { label: 'Medium', price: 800 },
      { label: 'Large', price: 1200 }
    ],
    description: 'Rich mozzarella cheese layer on house tomato sauce with fragrant Italian herbs.',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800',
    availableExtras: PIZZA_EXTRAS
  },

  // 4. DIET INN PASTA
  {
    id: 'p1',
    name: 'Diet Inn Pasta',
    category: 'Diet Inn Pasta',
    price: 500,
    options: [
      { label: 'Regular', price: 500 },
      { label: 'Large', price: 900 }
    ],
    description: 'Rich creamy white sauce penne pasta with tender chicken chunks and herbs.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281216?auto=format&fit=crop&q=80&w=800'
  },

  // 5. FRIES & DIPS
  {
    id: 'f1',
    name: 'Loaded Fries',
    category: 'Fries & Dips',
    price: 500,
    isPopular: true,
    options: [
      { label: 'Regular', price: 500 },
      { label: 'Large', price: 800 }
    ],
    description: 'Crispy potato fries topped with melted cheese, chicken bits, olives, and sauce.',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'f2',
    name: 'Masala Fries',
    category: 'Fries & Dips',
    price: 150,
    options: [
      { label: 'Regular', price: 150 },
      { label: 'Large', price: 200 }
    ],
    description: 'Golden crispy potato fries tossed in spicy chatpata seasoning.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd1',
    name: 'Mayonnaise Dip',
    category: 'Fries & Dips',
    price: 50,
    description: 'Signature house garlic mayonnaise dip.',
    image: 'https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'd2',
    name: 'Red Chili Dip',
    category: 'Fries & Dips',
    price: 50,
    description: 'Spicy chili garlic dipping sauce.',
    image: 'https://images.unsplash.com/photo-1584278860047-22db9ff82bed?auto=format&fit=crop&q=80&w=800'
  },

  // 6. SHAKES & SMOOTHIES
  {
    id: 'sh1',
    name: 'Banana Shake',
    category: 'Shakes & Smoothies',
    price: 250,
    description: 'Fresh milk blended with ripe bananas and sweet vanilla.',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sh2',
    name: 'Mango Shake',
    category: 'Shakes & Smoothies',
    price: 300,
    isPopular: true,
    description: 'Thick creamy mango pulp milk shake topped with ice cream.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sh3',
    name: 'Pineapple Shake',
    category: 'Shakes & Smoothies',
    price: 300,
    description: 'Sweet and tropical pineapple milkshake blended fresh.',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sh4',
    name: 'Oreo Shake',
    category: 'Shakes & Smoothies',
    price: 450,
    isPopular: true,
    description: 'Blended Oreo cookies with rich vanilla ice cream and chocolate drizzle.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800'
  },

  // 7. FRESH JUICES
  {
    id: 'j1',
    name: 'Fresh Mango Juice',
    category: 'Fresh Juices',
    price: 250,
    description: 'Pure freshly squeezed seasonal yellow mango juice served chilled in a glass.',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'j2',
    name: 'Fresh Apple Juice',
    category: 'Fresh Juices',
    price: 250,
    description: '100% natural freshly extracted golden red apple juice.',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'j3',
    name: 'Aroo (Peach) Juice',
    category: 'Fresh Juices',
    price: 250,
    description: 'Freshly prepared light-orange peach juice blend served cold.',
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'j4',
    name: 'Aloo Bukhara (Plum) Juice',
    category: 'Fresh Juices',
    price: 300,
    description: 'Refreshing sweet and sour dark red/purple plum juice blend in a chilled glass.',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'j5',
    name: 'Anar (Pomegranate) Juice',
    category: 'Fresh Juices',
    price: 400,
    isPopular: true,
    description: '100% pure fresh vibrant red pomegranate juice rich in antioxidants.',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b7?auto=format&fit=crop&q=80&w=800'
  },

  // 8. BEVERAGES
  {
    id: 'bv1',
    name: 'Mineral Water',
    category: 'Beverages',
    price: 80,
    description: 'Chilled pure mineral water bottle (Nestle / Aquafina style).',
    image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bv2',
    name: 'Cold Drink Regular (250ml)',
    category: 'Beverages',
    price: 90,
    description: 'Chilled 250ml glass bottle soft drink with ice glass.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bv3',
    name: 'Cold Drink 500ml',
    category: 'Beverages',
    price: 130,
    description: 'Chilled 500ml plastic PET soft drink bottle.',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bv4',
    name: 'Cold Drink 1 Liter',
    category: 'Beverages',
    price: 190,
    description: 'Chilled 1 Liter soft drink bottle with ice glass.',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bv5',
    name: 'Cold Drink 1.5 Liter',
    category: 'Beverages',
    price: 220,
    description: 'Chilled 1.5 Liter large family soft drink bottle (Coke / Sprite / 7Up).',
    image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&q=80&w=800'
  }
];
