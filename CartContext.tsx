import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, ExtraOption, MenuItemOption } from './types';

interface AddToCartParams {
  itemId: string;
  name: string;
  category: string;
  image: string;
  basePrice: number;
  selectedOption?: MenuItemOption;
  selectedExtras?: ExtraOption[];
  quantity?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (params: AddToCartParams) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  clearCart: () => void;
  totalItemsCount: number;
  subtotal: number;
  grandTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'diet_inn_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to persist cart:', e);
    }
  }, [cart]);

  const generateCartItemId = (
    itemId: string,
    optionLabel?: string,
    extras?: ExtraOption[]
  ) => {
    const extraIds = extras && extras.length > 0 
      ? [...extras].map(e => e.id).sort().join('_') 
      : 'none';
    const opt = optionLabel || 'standard';
    return `${itemId}::${opt}::${extraIds}`;
  };

  const addToCart = (params: AddToCartParams) => {
    const qty = params.quantity && params.quantity > 0 ? params.quantity : 1;
    const selectedExtras = params.selectedExtras || [];
    const extrasCost = selectedExtras.reduce((sum, ext) => sum + ext.price, 0);
    const unitPrice = (params.selectedOption ? params.selectedOption.price : params.basePrice) + extrasCost;
    
    const cartItemId = generateCartItemId(
      params.itemId, 
      params.selectedOption?.label, 
      selectedExtras
    );

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        // Increase quantity
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + qty
        };
        return updated;
      } else {
        // Add new item
        const newItem: CartItem = {
          cartItemId,
          itemId: params.itemId,
          name: params.name,
          category: params.category,
          image: params.image,
          basePrice: params.basePrice,
          selectedOption: params.selectedOption,
          selectedExtras,
          unitPrice,
          quantity: qty
        };
        return [...prevCart, newItem];
      }
    });

    // Auto open drawer for immediate reassurance
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
  const grandTotal = subtotal; // No invented delivery fees as instructed

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItemsCount,
        subtotal,
        grandTotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
