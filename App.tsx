import React, { useState } from 'react';
import { CategoryType } from './types';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FoodCategories } from './components/FoodCategories';
import { FeaturedDeals } from './components/FeaturedDeals';
import { FavoritesSection } from './components/FavoritesSection';
import { InteractiveMenu } from './components/InteractiveMenu';
import { OrderCTA } from './components/OrderCTA';
import { AboutSection } from './components/AboutSection';
import { InstagramGallery } from './components/InstagramGallery';
import { SocialProof } from './components/SocialProof';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

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
