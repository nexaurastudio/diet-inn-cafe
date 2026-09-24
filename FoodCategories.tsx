import React from 'react';
import { CategoryType } from './types';
import { ArrowUpRight } from 'lucide-react';

interface FoodCategoriesProps {
  onSelectCategory: (category: CategoryType) => void;
}

export const FoodCategories: React.FC<FoodCategoriesProps> = ({ onSelectCategory }) => {
  const categories: {
    id: CategoryType;
    title: string;
    subtitle: string;
    image: string;
  }[] = [
    {
      id: 'Burgers & Wraps',
      title: 'BURGERS & WRAPS',
      subtitle: 'Zinger, Patty, Fillet, Grill & Shawarma',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'Pizza',
      title: 'DIET INN PIZZA',
      subtitle: 'Crown Crust, Tikka, Fajita & Cheese',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'Pasta & Fries',
      title: 'PASTA & FRIES',
      subtitle: 'Diet Inn Pasta, Loaded Fries & Dips',
      image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'Shakes & Juices',
      title: 'SHAKES & JUICES',
      subtitle: 'Mango, Apple, Anar, Oreo & Banana Shakes',
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const handleCategoryClick = (catId: CategoryType) => {
    onSelectCategory(catId);
    const menuElem = document.getElementById('menu');
    if (menuElem) {
      menuElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-20 bg-[#F4EFE6] border-b border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] font-serif">
            EXPLORE OUR MENU
          </span>
          <h2 className="text-3xl sm:text-5xl font-['Playfair_Display',serif] font-bold text-[#1F3D2C]">
            WHAT ARE YOU CRAVING?
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-1" />
        </div>

        {/* Editorial Categories Grid - 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative h-40 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-xs sm:shadow-sm hover:shadow-xl transition-all duration-500 border border-[#C5A059]/30 hover:border-[#C5A059] bg-[#FAF7F2]"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/85 via-[#1C1917]/30 to-transparent group-hover:from-[#1C1917]/95 transition-all" />

              {/* Tile Content */}
              <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-between text-white text-left">
                <div className="flex justify-end">
                  <span className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-[#FAF7F2]/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C5A059] group-hover:text-[#1C1917] transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </span>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <span className="text-[8px] sm:text-[10px] font-bold text-[#C5A059] uppercase tracking-widest font-serif">
                    CATEGORY
                  </span>
                  <h3 className="text-sm sm:text-2xl font-[Arial] font-bold text-[#FAF7F2] tracking-tight leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-stone-300 font-normal line-clamp-1 sm:line-clamp-none">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
