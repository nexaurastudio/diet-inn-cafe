import React from 'react';
import { Tag, Sparkles, Check, Plus } from 'lucide-react';
import { BRAND_DEALS, getWhatsAppUrl } from './menuData';
import { useCart } from './CartContext';

export const FeaturedDeals: React.FC = () => {
  const { addToCart } = useCart();
  return (
    <section id="deals" className="py-24 bg-[#FAF8F5] text-[#1A1A1A] border-b border-[#C5A059]/30 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4EFE6] text-[#C5A059] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/40 shadow-sm">
            <Tag className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>EXCLUSIVELY AT DIET INN</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-brand font-bold text-[#1F3D2C]">
            OFFICIAL COMBO DEALS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mt-2" />
          <p className="text-[#4A453E] text-sm sm:text-base max-w-lg mx-auto font-normal">
            Order these exact promotional combo posters directly for fast delivery or takeaway in Al Kabir Town Phase 2, Lahore.
          </p>
        </div>

        {/* Visual Image-First Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 items-stretch">
          
          {BRAND_DEALS.map((deal, index) => {
            const whatsappDealUrl = getWhatsAppUrl(`${deal.title} (Rs. ${deal.dealPrice})`);

            return (
              <div
                key={deal.id}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E8E5DF] hover:border-[#C5A059] shadow-sm sm:shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Promotional Deal Poster Image Frame - compact on mobile, square on desktop */}
                  <div className="relative aspect-[16/10] sm:aspect-square w-full overflow-hidden bg-[#F4EFE6]">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                      }}
                    />
                    
                    {/* Tag Badge */}
                    <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-md text-[#1A1A1A] text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-[#C5A059]/40 shadow-xs">
                      <Sparkles className="w-3 h-3 text-[#C5A059]" />
                      <span>{deal.tag}</span>
                    </div>

                    {/* Popular Badge if applicable */}
                    {deal.popular && (
                      <div className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 z-10 bg-[#C5A059] text-[#1A1A1A] text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md shadow-xs">
                        POPULAR
                      </div>
                    )}
                  </div>

                  {/* Deal Details Box */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 text-left">
                    
                    {/* Title & Price */}
                    <div className="flex items-start justify-between gap-2 sm:gap-3 border-b border-[#E8E5DF] pb-2 sm:pb-3">
                      <div>
                        <h3 className={`text-lg sm:text-xl font-['Playfair_Display',serif] ${index === 2 ? 'font-normal' : 'font-bold'} text-[#1F3D2C] group-hover:text-[#C5A059] transition-colors`}>
                          {deal.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#6B6358] mt-0.5 sm:mt-1 line-clamp-2">
                          {deal.subtitle}
                        </p>
                      </div>

                      <div className="text-right flex-shrink-0">
                        {deal.originalPrice && (
                          <span className="text-[10px] sm:text-xs text-stone-400 line-through block font-medium">
                            Rs. {deal.originalPrice}
                          </span>
                        )}
                        <span className="font-serif-brand text-xl sm:text-2xl font-black text-[#C5A059] block">
                          Rs. {deal.dealPrice}
                        </span>
                      </div>
                    </div>

                    {/* Included Items Checklist */}
                    <div className="space-y-1 sm:space-y-1.5 pt-0.5 sm:pt-1">
                      <p className="text-[9px] sm:text-[10px] font-bold text-[#C5A059] uppercase tracking-widest font-serif">
                        WHAT’S INCLUDED:
                      </p>
                      <ul className="space-y-1 sm:space-y-1.5 text-xs text-[#4A453E]">
                        {deal.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 sm:gap-2">
                            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A059] flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Bottom Action Section: Add Deal to Cart */}
                <div className="p-4 sm:p-6 pt-3 sm:pt-4 flex items-center justify-between border-t border-[#E8E5DF] mt-1 sm:mt-2">
                  <span className="text-xs text-[#6B6358] font-medium">
                    Diet Inn Special
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      addToCart({
                        itemId: deal.id,
                        name: deal.title,
                        category: 'Deals',
                        image: deal.image,
                        basePrice: deal.dealPrice,
                        quantity: 1
                      });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A1A1A] bg-[#F4EFE6] hover:bg-[#1A1A1A] hover:text-white transition-all py-1.5 px-3 rounded-xl border border-[#C5A059]/40 hover:border-[#C5A059] active:scale-95 shadow-2xs"
                  >
                    <Plus className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>ADD DEAL TO CART</span>
                  </button>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
