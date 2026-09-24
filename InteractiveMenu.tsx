import React, { useState } from 'react';
import { CategoryType, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/menuData';
import { Search, Sparkles, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ItemCustomizeModal } from './ItemCustomizeModal';

interface InteractiveMenuProps {
  selectedCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const { addToCart } = useCart();

  const handleItemAdd = (item: MenuItem) => {
    // If the item has multiple sizes/options or available extras, open customization modal
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

  const tabs: CategoryType[] = [
    'ALL',
    'Burgers & Wraps',
    'Pizza',
    'Pasta & Fries',
    'Shakes & Juices',
    'Beverages',
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    let matchesCategory = false;

    if (selectedCategory === 'ALL') {
      matchesCategory = true;
    } else if (selectedCategory === 'Burgers & Wraps') {
      matchesCategory = item.category === 'Burgers' || item.category === 'Shawarma & Wraps' || item.category === 'Burgers & Wraps';
    } else if (selectedCategory === 'Pizza') {
      matchesCategory = item.category === 'Diet Inn Pizza' || item.category === 'Pizza';
    } else if (selectedCategory === 'Pasta & Fries') {
      matchesCategory = item.category === 'Diet Inn Pasta' || item.category === 'Fries & Dips' || item.category === 'Pasta & Fries';
    } else if (selectedCategory === 'Shakes & Juices') {
      matchesCategory = item.category === 'Shakes & Smoothies' || item.category === 'Fresh Juices' || item.category === 'Shakes & Juices';
    } else if (selectedCategory === 'Beverages') {
      matchesCategory = item.category === 'Beverages';
    } else {
      matchesCategory = item.category === selectedCategory;
    }

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-12 sm:py-24 bg-[#FAF8F5] text-[#1A1A1A] border-b border-[#C5A059]/30 relative">
      
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 space-y-6 sm:space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C5A059] font-serif">
            AL KABIR TOWN PHASE 2, LAHORE
          </span>
          <h2 className="text-2xl sm:text-5xl font-serif-brand font-bold text-[#2A4334]">
            OUR GOURMET MENU
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-1" />
          <p className="text-[#4A453E] text-xs sm:text-sm max-w-lg mx-auto font-medium px-2">
            Freshly prepared burgers, crown crust pizzas, shawarma wraps, loaded fries, pastas, shakes & juices.
          </p>
        </div>

        {/* Category Filter Tabs & Search Bar */}
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 border-b border-[#E8E5DF] pb-3 sm:pb-5">
            {tabs.map((tab) => {
              const isActive = selectedCategory === tab || (
                (tab === 'Burgers & Wraps' && (selectedCategory === 'Burgers' || selectedCategory === 'Shawarma & Wraps')) ||
                (tab === 'Pizza' && selectedCategory === 'Diet Inn Pizza') ||
                (tab === 'Pasta & Fries' && (selectedCategory === 'Diet Inn Pasta' || selectedCategory === 'Fries & Dips')) ||
                (tab === 'Shakes & Juices' && (selectedCategory === 'Shakes & Smoothies' || selectedCategory === 'Fresh Juices'))
              );

              return (
                <button
                  key={tab}
                  onClick={() => onSelectCategory(tab)}
                  className={`px-3 py-1.5 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-[11px] sm:text-xs uppercase tracking-wider font-extrabold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#1A1A1A] shadow-sm sm:shadow-md border border-[#B8922A] scale-[1.02] sm:scale-105'
                      : 'bg-white text-[#2A4334] border border-[#C5A059]/40 hover:bg-[#F4EFE6] hover:text-[#C5A059] shadow-xs'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="max-w-md mx-auto relative px-1 sm:px-0">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 absolute left-4 sm:left-4 top-2.5 sm:top-3.5 text-[#C5A059]" />
            <input
              type="text"
              placeholder="Search zinger burger, pizza, shawarma..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E8E5DF] rounded-lg sm:rounded-xl pl-9 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-2.5 text-xs text-[#1A1A1A] placeholder-[#8C857B] focus:outline-none focus:border-[#C5A059] transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Menu Cards Grid - 2 columns on mobile, 3 on lg, 4 on xl */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 sm:py-16 text-[#6B6358] text-xs sm:text-sm bg-white rounded-2xl sm:rounded-3xl border border-[#E8E5DF]">
            No menu items found matching "{searchQuery}". Try another search or category.
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
            {filteredItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#E8E5DF] hover:border-[#C5A059] shadow-xs sm:shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Item Image Frame - Compact on mobile */}
                    <div className="relative h-24 sm:h-36 md:h-48 w-full overflow-hidden bg-[#F4EFE6]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                        }}
                      />

                      {/* Category Tag & Popular Badge */}
                      <div className="absolute top-1.5 left-1.5 right-1.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none gap-1">
                        <span className="text-[8px] sm:text-[10px] bg-white/95 backdrop-blur-md text-[#2A4334] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full border border-[#C5A059]/30 shadow-xs uppercase tracking-wider truncate max-w-[65%]">
                          {item.category}
                        </span>

                        {item.isPopular && (
                          <span className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[9px] bg-[#D4AF37] text-[#1A1A1A] font-extrabold uppercase px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs flex-shrink-0">
                            <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-current" />
                            <span className="hidden sm:inline">Popular</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-2 sm:p-5 space-y-1 sm:space-y-2.5">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-2">
                        <h3 className="font-serif-brand text-[12px] sm:text-base font-bold text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors leading-tight line-clamp-2 min-h-[1.9rem] sm:min-h-0">
                          {item.name}
                        </h3>
                        <span className="font-serif-brand font-black text-xs sm:text-lg text-[#C5A059] flex-shrink-0">
                          Rs. {item.price}
                        </span>
                      </div>

                      {item.description && (
                        <p className="text-[10px] sm:text-xs text-[#5C554B] line-clamp-1 sm:line-clamp-2 leading-tight sm:leading-relaxed font-normal">
                          {item.description}
                        </p>
                      )}

                      {/* Options / Sizes if present */}
                      {item.options && item.options.length > 0 && (
                        <div className="pt-0.5 sm:pt-1 flex flex-wrap gap-1 text-[8px] sm:text-[10px]">
                          {item.options.slice(0, 2).map((opt) => (
                            <span key={opt.label} className="bg-[#F4EFE6] text-[#1A1A1A] px-1 sm:px-2 py-0.5 rounded border border-[#E8E5DF] font-medium truncate">
                              {opt.label}: <strong className="text-[#C5A059]">Rs.{opt.price}</strong>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Action: ADD TO CART Button */}
                  <div className="px-2 pb-2 pt-1.5 sm:px-4 sm:pb-4 sm:pt-2 border-t border-[#E8E5DF] flex items-center justify-between gap-2">
                    <span className="hidden sm:inline text-[11px] text-[#8C857B] font-medium truncate">
                      Freshly Made
                    </span>

                    <button
                      type="button"
                      onClick={() => handleItemAdd(item)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#1A1A1A] bg-[#F4EFE6] hover:bg-[#1A1A1A] hover:text-white py-1.5 px-2.5 sm:px-3 rounded-lg sm:rounded-xl transition-all active:scale-95 border border-[#C5A059]/40 hover:border-[#C5A059] shadow-2xs"
                    >
                      <Plus className="w-3 h-3 text-[#C5A059]" />
                      <span>ADD TO CART</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Item Customization / Extras Modal */}
      {customizingItem && (
        <ItemCustomizeModal
          item={customizingItem}
          onClose={() => setCustomizingItem(null)}
        />
      )}
    </section>
  );
};
