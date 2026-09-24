import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from './CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    grandTotal,
    totalItemsCount
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10 pointer-events-none">
        <div className="w-screen max-w-md bg-[#FAF8F5] text-[#1A1A1A] pointer-events-auto flex flex-col shadow-2xl border-l border-[#C5A059]/30">
          
          {/* Header */}
          <div className="px-4 sm:px-6 py-4 bg-[#0D0C0A] text-[#FAF8F5] border-b border-[#C5A059]/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
              <div>
                <h2 className="font-serif-brand text-base sm:text-lg font-bold uppercase tracking-wider text-[#FAF8F5]">
                  Your Order Cart
                </h2>
                <p className="text-[11px] text-[#C5A059] font-medium">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-stone-400 hover:text-[#C5A059] hover:bg-white/10 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-3 divide-y divide-[#E8E5DF]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4 space-y-4 text-[#6B6358]">
                <div className="w-16 h-16 rounded-full bg-[#F4EFE6] border border-[#E8E5DF] flex items-center justify-center text-[#C5A059]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="font-serif-brand font-bold text-lg text-[#1A1A1A]">Your cart is empty</p>
                  <p className="text-xs text-[#8C857B] max-w-xs">
                    Explore our burgers, loaded fries, shawarmas, and freshly baked pizzas to start your order.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 text-xs font-bold uppercase tracking-wider text-[#C5A059] hover:underline"
                >
                  Browse Menu ➔
                </button>
              </div>
            ) : (
              cart.map((item) => {
                const itemTotal = item.unitPrice * item.quantity;

                return (
                  <div key={item.cartItemId} className="pt-3 first:pt-0 flex gap-3 items-start">
                    {/* Item Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover bg-[#F4EFE6] border border-[#E8E5DF] flex-shrink-0"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                      }}
                    />

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif-brand font-bold text-xs sm:text-sm text-[#1A1A1A] leading-snug">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Selected size/option */}
                      {item.selectedOption && (
                        <p className="text-[10px] text-[#6B6358] font-medium">
                          Size: <span className="text-[#1A1A1A] font-semibold">{item.selectedOption.label}</span> (Rs. {item.selectedOption.price})
                        </p>
                      )}

                      {/* Selected extras */}
                      {item.selectedExtras && item.selectedExtras.length > 0 && (
                        <div className="text-[10px] text-[#C5A059] font-medium space-y-0.5">
                          {item.selectedExtras.map(ext => (
                            <div key={ext.id} className="flex items-center gap-1">
                              <span>+ {ext.name}</span>
                              <span className="text-stone-400">(Rs. {ext.price})</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Price & Quantity Controls */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center border border-[#E8E5DF] bg-white rounded-lg overflow-hidden shadow-xs">
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            className="p-1 sm:p-1.5 text-[#1A1A1A] hover:bg-[#F4EFE6] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3 text-[#6B6358]" />
                          </button>
                          <span className="px-2.5 py-0.5 text-xs font-bold text-[#1A1A1A]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            className="p-1 sm:p-1.5 text-[#1A1A1A] hover:bg-[#F4EFE6] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3 text-[#6B6358]" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="font-serif-brand font-black text-xs sm:text-sm text-[#1A1A1A]">
                            Rs. {itemTotal}
                          </span>
                          {item.quantity > 1 && (
                            <p className="text-[9px] text-[#8C857B]">
                              Rs. {item.unitPrice} each
                            </p>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 bg-white border-t border-[#E8E5DF] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#6B6358]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1A1A1A]">Rs. {subtotal}</span>
                </div>
                <div className="flex justify-between font-serif-brand font-black text-base sm:text-lg text-[#1A1A1A] pt-1.5 border-t border-[#E8E5DF]">
                  <span>Total</span>
                  <span className="text-[#C5A059]">Rs. {grandTotal}</span>
                </div>
              </div>

              <div className="pt-1 flex flex-col gap-2">
                <button
                  onClick={handleProceedToCheckout}
                  className="w-full bg-[#1A1A1A] hover:bg-[#C5A059] text-white hover:text-[#0D0C0A] py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 active:scale-98 border border-[#C5A059]"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center py-2 text-xs font-semibold text-[#6B6358] hover:text-[#1A1A1A] transition-colors uppercase tracking-wider"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
