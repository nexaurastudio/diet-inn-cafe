import React, { useState } from 'react';
import { X, ArrowLeft, MessageCircle, MapPin, Bike, Store, AlertCircle, CheckCircle2, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CustomerDetails, OrderType } from '../types';
import { generateWhatsAppOrderUrl } from '../utils/whatsappOrder';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    subtotal,
    grandTotal,
    isCheckoutOpen,
    setIsCheckoutOpen,
    setIsCartOpen,
    clearCart
  } = useCart();

  const [orderType, setOrderType] = useState<OrderType>('DELIVERY');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isOrderPrepared, setIsOrderPrepared] = useState(false);
  const [preparedWaUrl, setPreparedWaUrl] = useState('');

  if (!isCheckoutOpen) return null;

  const handleBackToCart = () => {
    setIsCheckoutOpen(false);
    setIsCartOpen(true);
  };

  const handleClose = () => {
    if (isOrderPrepared) {
      clearCart();
      setIsOrderPrepared(false);
    }
    setIsCheckoutOpen(false);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }

    if (orderType === 'DELIVERY' && !address.trim()) {
      setErrorMessage('Please enter your complete delivery address.');
      return;
    }

    const details: CustomerDetails = {
      name,
      phone,
      orderType,
      address,
      notes
    };

    const waUrl = generateWhatsAppOrderUrl(cart, details, subtotal, grandTotal);
    setPreparedWaUrl(waUrl);
    setIsOrderPrepared(true);

    // Open WhatsApp in a new tab or native app
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 select-none">
      <div className="bg-[#FAF8F5] text-[#1A1A1A] w-full max-w-lg rounded-2xl sm:rounded-3xl shadow-2xl border border-[#C5A059]/40 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="px-5 py-4 bg-[#0D0C0A] text-[#FAF8F5] border-b border-[#C5A059]/40 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            {!isOrderPrepared && (
              <button
                type="button"
                onClick={handleBackToCart}
                className="p-1 rounded-lg text-stone-400 hover:text-[#C5A059] transition-colors"
                title="Back to cart"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <h2 className="font-serif-brand text-base sm:text-lg font-bold uppercase tracking-wider text-[#FAF8F5]">
              {isOrderPrepared ? 'Order Confirmation' : 'Checkout Details'}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-1 rounded-lg text-stone-400 hover:text-[#C5A059] transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ORDER PREPARED / CONFIRMATION STATE */}
        {isOrderPrepared ? (
          <div className="p-6 sm:p-8 text-center space-y-6 flex-1 overflow-y-auto">
            <div className="w-16 h-16 rounded-full bg-[#F4EFE6] border border-[#C5A059]/50 text-[#C5A059] flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif-brand font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                Order Ready
              </h3>
              <p className="text-sm font-medium text-[#1A1A1A]">
                Your order details have been prepared in WhatsApp.
              </p>
              <p className="text-xs text-[#6B6358] max-w-sm mx-auto leading-relaxed pt-1">
                Please press <strong>Send</strong> in WhatsApp to confirm your order with Diet Inn Cafe.
              </p>
            </div>

            {/* Summary Box */}
            <div className="bg-[#F4EFE6] border border-[#E8E5DF] rounded-xl p-4 text-left space-y-2 text-xs">
              <div className="flex justify-between font-bold text-[#1A1A1A] border-b border-[#E8E5DF] pb-2">
                <span>Customer: {name.trim()}</span>
                <span className="text-[#C5A059] uppercase">{orderType}</span>
              </div>
              <div className="flex justify-between text-[#6B6358]">
                <span>Total Items:</span>
                <span className="font-semibold text-[#1A1A1A]">{cart.reduce((t, i) => t + i.quantity, 0)}</span>
              </div>
              <div className="flex justify-between text-[#6B6358]">
                <span>Total Payable:</span>
                <span className="font-serif-brand font-black text-sm text-[#C5A059]">Rs. {grandTotal}</span>
              </div>
              {orderType === 'DELIVERY' && address && (
                <div className="pt-1 text-[11px] text-[#6B6358] border-t border-[#E8E5DF]">
                  <span className="font-bold text-[#1A1A1A]">Delivery to:</span> {address}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={preparedWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#b8924b] text-[#1A1A1A] py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 border border-[#C5A059]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Open WhatsApp Again</span>
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-stone-800 text-white py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all border border-[#1A1A1A]"
              >
                <span>Back to Menu</span>
              </button>
            </div>
          </div>
        ) : (
          /* Form Body */
          <form onSubmit={handlePlaceOrder} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-left">
            
            {/* Order Summary Mini-Banner */}
            <div className="bg-[#F4EFE6] border border-[#E8E5DF] rounded-xl p-3 flex items-center justify-between text-xs">
              <div>
                <span className="text-[#6B6358] block">Order Summary:</span>
                <span className="font-bold text-[#1A1A1A]">{cart.length} {cart.length === 1 ? 'item' : 'items'}</span>
              </div>
              <div className="text-right">
                <span className="text-[#6B6358] block">Total Payable:</span>
                <span className="font-serif-brand font-black text-sm text-[#C5A059]">Rs. {grandTotal}</span>
              </div>
            </div>

            {/* Validation Error Message */}
            {errorMessage && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1. ORDER TYPE SELECTOR */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B6358]">
                Order Type <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOrderType('DELIVERY')}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                    orderType === 'DELIVERY'
                      ? 'bg-[#1A1A1A] text-white border-[#C5A059] shadow-sm'
                      : 'bg-white text-[#6B6358] border-[#E8E5DF] hover:border-[#C5A059]/50'
                  }`}
                >
                  <Bike className={`w-4 h-4 ${orderType === 'DELIVERY' ? 'text-[#C5A059]' : ''}`} />
                  <span>Delivery</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType('PICKUP')}
                  className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all ${
                    orderType === 'PICKUP'
                      ? 'bg-[#1A1A1A] text-white border-[#C5A059] shadow-sm'
                      : 'bg-white text-[#6B6358] border-[#E8E5DF] hover:border-[#C5A059]/50'
                  }`}
                >
                  <Store className={`w-4 h-4 ${orderType === 'PICKUP' ? 'text-[#C5A059]' : ''}`} />
                  <span>Pickup</span>
                </button>
              </div>
            </div>

            {/* 2. CUSTOMER NAME */}
            <div className="space-y-1">
              <label htmlFor="customer-name" className="text-xs font-bold uppercase tracking-wider text-[#6B6358]">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <input
                id="customer-name"
                type="text"
                placeholder="e.g. Ali Ahmed"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-[#E8E5DF] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1A1A] placeholder-[#A09A8F] focus:outline-none focus:border-[#C5A059] transition-colors"
                required
              />
            </div>

            {/* 3. PHONE NUMBER */}
            <div className="space-y-1">
              <label htmlFor="customer-phone" className="text-xs font-bold uppercase tracking-wider text-[#6B6358]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="customer-phone"
                type="tel"
                placeholder="e.g. 0300 1234567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-[#E8E5DF] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1A1A] placeholder-[#A09A8F] focus:outline-none focus:border-[#C5A059] transition-colors"
                required
              />
            </div>

            {/* 4. DELIVERY ADDRESS (Required only if Delivery is selected) */}
            {orderType === 'DELIVERY' && (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label htmlFor="customer-address" className="text-xs font-bold uppercase tracking-wider text-[#6B6358] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Full Delivery Address <span className="text-red-500">*</span></span>
                  </label>
                </div>
                <textarea
                  id="customer-address"
                  rows={2}
                  placeholder="House / Flat #, Street, Block, Phase 2 Al Kabir Town or nearby landmark..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full bg-white border border-[#E8E5DF] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1A1A] placeholder-[#A09A8F] focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                  required
                />
              </div>
            )}

            {/* 5. ORDER NOTES (Optional) */}
            <div className="space-y-1">
              <label htmlFor="customer-notes" className="text-xs font-bold uppercase tracking-wider text-[#6B6358]">
                Order Notes <span className="text-stone-400 font-normal text-[11px]">(Optional)</span>
              </label>
              <input
                id="customer-notes"
                type="text"
                placeholder="e.g. Extra sauce on side, less spicy, call upon arrival..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white border border-[#E8E5DF] rounded-xl px-3.5 py-2.5 text-xs text-[#1A1A1A] placeholder-[#A09A8F] focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>

            {/* Action Submit Button */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full bg-[#1A1A1A] hover:bg-[#C5A059] text-white hover:text-[#0D0C0A] py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2.5 active:scale-98 border border-[#C5A059]"
              >
                <MessageCircle className="w-4 h-4 fill-current text-[#C5A059]" />
                <span>PLACE ORDER ON WHATSAPP</span>
              </button>
              
              <p className="text-center text-[10px] text-[#8C857B] leading-tight">
                Clicking will open WhatsApp with your pre-formatted order summary ready to send to Diet Inn Cafe (+92 305 8745545).
              </p>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

