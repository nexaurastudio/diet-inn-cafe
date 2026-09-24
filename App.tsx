import React, { useState } from 'react';
import { CategoryType } from './types';
import { CartProvider } from './CartContext';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { FoodCategories } from './FoodCategories';
import { FeaturedDeals } from './FeaturedDeals';
import { FavoritesSection } from './FavoritesSection';
import { InteractiveMenu } from './InteractiveMenu';
import { OrderCTA } from './OrderCTA';
import { AboutSection } from './AboutSection';
import { InstagramGallery } from './InstagramGallery';
import { SocialProof } from './SocialProof';
import { LocationSection } from './LocationSection';
import { FinalCTA } from './FinalCTA';
import { Footer } from './Footer';
import { CartDrawer } from './CartDrawer';
import { CheckoutModal } from './CheckoutModal';
import { FloatingWhatsApp } from './FloatingWhatsApp';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('ALL');

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#C5A059] selection:text-white flex flex-col justify-between">
        
        {/* 1. NAVBAR */}
        <Navbar />

        <main className="flex-1">
          {/* 2. HERO */}
          <Hero />

          {/* 3. CRAVING CATEGORIES */}
          <FoodCategories
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          />

          {/* 4. FEATURED DEALS */}
          <FeaturedDeals />

          {/* 5. DIET INN FAVORITES */}
          <FavoritesSection />

          {/* 6. INTERACTIVE MENU */}
          <InteractiveMenu
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
          />

          {/* 7. ORDER CTA */}
          <OrderCTA />

          {/* 8. ABOUT DIET INN */}
          <AboutSection />

          {/* 9. INSTAGRAM GALLERY */}
          <InstagramGallery />

          {/* 10. REVIEWS / SOCIAL PROOF */}
          <SocialProof />

          {/* 11. LOCATION */}
          <LocationSection />

          {/* 12. FINAL CTA */}
          <FinalCTA />
        </main>

        {/* 13. FOOTER */}
        <Footer />

        {/* CART DRAWER & CHECKOUT MODAL */}
        <CartDrawer />
        <CheckoutModal />

        {/* FLOATING WHATSAPP BUTTON */}
        <FloatingWhatsApp />

      </div>
    </CartProvider>
  );
}
