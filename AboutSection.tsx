import React from 'react';
import { TAGLINE, ADDRESS, PHONE_DISPLAY } from './menuData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FDFBF7] border-b border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Photography */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-md border border-[#C5A059]/30 bg-[#FAF7F2]">
              <img
                src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=1000"
                alt="Diet Inn Cafe Flame Grilled Burger"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] font-serif">
                ABOUT DIET INN CAFE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif-brand font-bold text-[#1F3D2C] leading-tight">
                OUR PHILOSOPHY
              </h2>
              <p className="text-xl font-serif italic text-[#C5A059] font-medium pt-1">
                “{TAGLINE}”
              </p>
              <div className="w-16 h-0.5 bg-[#C5A059] mt-2" />
            </div>

            <div className="space-y-4 text-sm text-[#4A423A] leading-relaxed font-sans">
              <p>
                Located at 50 Usman Block in Phase 2 of Al Kabir Town, Lahore, <strong className="text-[#1C1917]">Diet Inn Cafe</strong> serves crispy zinger burgers, stuffed crown crust pizzas, shawarma wraps, loaded fries, pasta, and cold drinks.
              </p>
              <p>
                Whether you're grabbing a quick lunch or ordering dinner for the family, every item on our menu is prepared fresh to order.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#C5A059]/20 text-xs">
              <div>
                <p className="font-serif-brand text-base font-bold text-[#1C1917]">Location</p>
                <p className="text-[#524B43] mt-0.5">{ADDRESS}</p>
              </div>
              <div>
                <p className="font-serif-brand text-base font-bold text-[#1C1917]">Direct Contact</p>
                <p className="text-[#524B43] mt-0.5">{PHONE_DISPLAY}</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
