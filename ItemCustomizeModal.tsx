import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { MenuItem, MenuItemOption, ExtraOption } from './types';
import { useCart } from './CartContext';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();

  const [selectedOption, setSelectedOption] = useState<MenuItemOption | undefined>(
    item?.options && item.options.length > 0 ? item.options[0] : undefined
  );
  const [selectedExtras, setSelectedExtras] = useState<ExtraOption[]>([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (item) {
      setSelectedOption(item.options && item.options.length > 0 ? item.options[0] : undefined);
      setSelectedExtras([]);
      setQuantity(1);
    }
  }, [item]);

  if (!item) return null;

  const toggleExtra = (extra: ExtraOption) => {
    setSelectedExtras(prev => {
      const exists = prev.some(e => e.id === extra.id);
      if (exists) {
        return prev.filter(e => e.id !== extra.id);
      } else {
        return [...prev, extra];
      }
    });
  };

  const basePrice = selectedOption ? selectedOption.price : item.price;
  const extrasTotal = selectedExtras.reduce((sum, ext) => sum + ext.price, 0);
  const unitPrice = basePrice + extrasTotal;
  const itemTotal = unitPrice * quantity;

  const handleConfirmAddToCart = () => {
    addToCart({
      itemId: item.id,
      name: item.name,
      category: item.category,
      image: item.image,
      basePrice: item.price,
      selectedOption,
      selectedExtras,
      quantity
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 select-none">
      <div className="bg-[#FAF8F5] text-[#1A1A1A] w-full max-w-md rounded-2xl sm:rounded-3xl shadow-2xl border border-[#C5A059]/40 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-[#0D0C0A] flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover object-center opacity-85"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:text-[#C5A059] transition-colors border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest font-serif">
              {item.category}
            </span>
            <h3 className="font-serif-brand font-bold text-base sm:text-lg leading-tight text-[#FAF8F5]">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Customization Options */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-left">
          
          {item.description && (
            <p className="text-xs text-[#6B5E52] leading-relaxed">
              {item.description}
            </p>
          )}

          {/* SIZES / PORTIONS (if any) */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B6358] block">
                Select Size / Portion:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {item.options.map(opt => {
                  const isSelected = selectedOption?.label === opt.label;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setSelectedOption(opt)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-[#1A1A1A] text-white border-[#C5A059] shadow-xs'
                          : 'bg-white text-[#1A1A1A] border-[#E8E5DF] hover:border-[#C5A059]/50'
                      }`}
                    >
                      <span className="font-bold">{opt.label}</span>
                      <span className={isSelected ? 'text-[#C5A059] font-bold' : 'text-[#6B6358]'}>
                        Rs. {opt.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* EXTRAS & ADD-ONS (if any) */}
          {item.availableExtras && item.availableExtras.length > 0 && (
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#6B6358] block">
                Add Extras (Optional):
              </label>
              <div className="space-y-1.5">
                {item.availableExtras.map(extra => {
                  const isChecked = selectedExtras.some(e => e.id === extra.id);
                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs transition-all ${
                        isChecked
                          ? 'bg-[#F4EFE6] border-[#C5A059] text-[#1A1A1A]'
                          : 'bg-white border-[#E8E5DF] text-[#1A1A1A] hover:border-[#C5A059]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isChecked ? 'bg-[#C5A059] border-[#C5A059] text-black' : 'border-stone-300 bg-white'
                        }`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="font-medium">{extra.name}</span>
                      </div>
                      <span className="font-bold text-[#C5A059]">
                        + Rs. {extra.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* QUANTITY PICKER */}
          <div className="pt-1 flex items-center justify-between border-t border-[#E8E5DF]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B6358]">
              Quantity:
            </span>
            <div className="flex items-center border border-[#E8E5DF] bg-white rounded-xl overflow-hidden shadow-xs">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 text-[#1A1A1A] hover:bg-[#F4EFE6] transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5 text-[#6B6358]" />
              </button>
              <span className="px-3.5 py-1 text-xs font-bold text-[#1A1A1A]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 text-[#1A1A1A] hover:bg-[#F4EFE6] transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5 text-[#6B6358]" />
              </button>
            </div>
          </div>

        </div>

        {/* Footer Confirmation */}
        <div className="p-4 bg-white border-t border-[#E8E5DF] flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] text-[#6B6358] uppercase block">Total Price:</span>
            <span className="font-serif-brand font-black text-base sm:text-lg text-[#C5A059]">
              Rs. {itemTotal}
            </span>
          </div>

          <button
            onClick={handleConfirmAddToCart}
            className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#C5A059] text-white hover:text-[#0D0C0A] py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 border border-[#C5A059]"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>

      </div>
    </div>
  );
};
