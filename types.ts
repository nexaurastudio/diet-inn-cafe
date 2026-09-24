export type CategoryType = 
  | 'ALL'
  | 'Burgers & Wraps'
  | 'Pizza'
  | 'Pasta & Fries'
  | 'Shakes & Juices'
  | 'Beverages'
  | 'Burgers'
  | 'Shawarma & Wraps'
  | 'Diet Inn Pizza'
  | 'Diet Inn Pasta'
  | 'Fries & Dips'
  | 'Shakes & Smoothies'
  | 'Fresh Juices';

export interface MenuItemOption {
  label: string;
  price: number;
}

export interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  options?: MenuItemOption[];
  description?: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  image: string;
  availableExtras?: ExtraOption[];
}

export interface DealItem {
  id: string;
  title: string;
  subtitle: string;
  originalPrice?: number;
  dealPrice: number;
  tag: string;
  items: string[];
  image: string;
  popular?: boolean;
}

export interface CartItem {
  cartItemId: string; // Unique key: itemId + optionLabel + selectedExtraIds
  itemId: string;
  name: string;
  category: string;
  image: string;
  basePrice: number;
  selectedOption?: MenuItemOption;
  selectedExtras: ExtraOption[];
  unitPrice: number;
  quantity: number;
}

export type OrderType = 'DELIVERY' | 'PICKUP';

export interface CustomerDetails {
  name: string;
  phone: string;
  orderType: OrderType;
  address: string;
  notes?: string;
}
