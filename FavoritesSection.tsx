import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';
import { ItemCustomizeModal } from './ItemCustomizeModal';

export const FavoritesSection: React.FC = () => {
  const { addToCart } = useCart();
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);

  // Select signature items: Crown Crust Pizza, Chicken Zinger Burger, Shawarma Platter
  const mainFeatured = MENU_ITEMS.find((i) => i.id === 'pz1') || MENU_ITEMS[0];
  const supporting1 = MENU_ITEMS.find((i) => i.id === 'b2') || MENU_ITEMS[1];
  const supporting2 = MENU_ITEMS.find((i) => i.id === 's3') || MENU_ITEMS[2];

  const handleAddItem = (item: MenuItem) => {
    if ((item.options && item.options.length > 0) || (item.availableExtras && item.availableExtras.length > 0)) {
      setCustomizingItem(item);
    } else {
      addToCart({
        itemId: item.id,
        name: item.name,
        category: item.category,
        image: item.image,
        basePrice: item.price,
        quantity: 1
      });
    }
  };

  return (
    <section id="favorites" className="py-20 bg-[#FDFBF7] border-b border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] font-serif">
            CHEF’S SELECTION
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-brand font-bold text-[#1F3D2C]">
            SIGNATURE FAVORITES
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-1" />
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* MAIN FEATURED ITEM (7 columns) */}
          <div className="lg:col-span-7 bg-[#FAF7F2] text-[#1C1917] rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-sm flex flex-col justify-between group">
            <div className="relative h-72 sm:h-96 overflow-hidden bg-[#F4EFE6]">
              <img
                src={mainFeatured.image}
                alt={mainFeatured.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 bg-[#C5A059] text-[#1C1917] px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                ★ MOST POPULAR
              </div>

              <div className="absolute bottom-4 right-4 bg-[#FDFBF7] text-[#1C1917] px-4 py-2 rounded-xl shadow-sm font-serif-brand font-bold text-xl border border-[#C5A059]/30">
                Rs. {mainFeatured.price}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 text-left">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-widest font-serif">
                  {mainFeatured.category}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif-brand font-bold text-[#1C1917]">
                  {mainFeatured.name}
                </h3>
                <p className="text-[#524B43] text-xs sm:text-sm max-w-lg font-normal leading-relaxed">
                  {mainFeatured.description}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleAddItem(mainFeatured)}
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] text-[#FAF8F5] px-6 py-3 rounded-xl font-bold text-xs hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-all shadow-sm active:scale-95 border border-[#C5A059]"
                >
                  <Plus className="w-4 h-4 text-[#C5A059]" />
                  <span>ADD {mainFeatured.name.toUpperCase()} TO CART</span>
                </button>
              </div>
            </div>
          </div>

          {/* TWO SUPPORTING FEATURED ITEMS (5 columns stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {[supporting1, supporting2].map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#C5A059]/30 hover:border-[#C5A059] shadow-sm transition-all duration-300 flex flex-col sm:flex-row items-stretch flex-1 group"
              >
                <div className="sm:w-2/5 relative min-h-[160px] bg-[#F4EFE6]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                </div>

                <div className="sm:w-3/5 p-5 flex flex-col justify-between text-left space-y-2">
                  <div>
                    <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wider font-serif">
                      {item.category}
                    </span>
                    <h4 className="text-lg font-serif-brand font-bold text-[#1C1917]">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#6B5E52] line-clamp-2 mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#C5A059]/20">
                    <span className="font-serif-brand text-base font-bold text-[#C5A059]">
                      Rs. {item.price}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleAddItem(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A] bg-[#F4EFE6] hover:bg-[#1A1A1A] hover:text-white px-3 py-1.5 rounded-lg border border-[#C5A059]/40 hover:border-[#C5A059] transition-all active:scale-95 shadow-2xs"
                    >
                      <Plus className="w-3 h-3 text-[#C5A059]" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Item Customization Modal */}
      {customizingItem && (
        <ItemCustomizeModal
          item={customizingItem}
          onClose={() => setCustomizingItem(null)}
        />
      )}
    </section>
  );
};
