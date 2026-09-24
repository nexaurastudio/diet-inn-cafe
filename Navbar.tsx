import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, grandTotal, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Deals', href: '#deals' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#C5A059]/30 text-[#1A1A1A]' 
          : 'bg-black/60 backdrop-blur-md py-3.5 border-b border-[#C5A059]/30 text-[#FAF8F5]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Clean Standalone Brand Logo (No Box, No Background, No Border) */}
        <a href="#" className="flex items-center group py-0.5" aria-label="Diet Inn Cafe Home">
          <img 
            src="/logo_clean.png" 
            alt="Diet Inn Cafe Logo" 
            width={666}
            height={633}
            loading="eager"
            decoding="async"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className={`hidden md:flex items-center space-x-7 lg:space-x-8 text-xs xl:text-sm font-bold tracking-wider ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#FAF8F5]'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C5A059] hover:after:w-full after:transition-all uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Cart Indicator Button */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className={`flex items-center gap-1.5 sm:gap-2 text-xs font-bold px-3 sm:px-3.5 py-2 transition-all border rounded-xl shadow-sm relative active:scale-95 ${
              isScrolled
                ? 'text-[#1A1A1A] hover:text-[#C5A059] border-[#C5A059]/40 bg-white'
                : 'text-[#FAF8F5] hover:text-[#C5A059] border-[#C5A059]/50 bg-black/50 backdrop-blur-sm'
            }`}
            aria-label="Open shopping cart"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C5A059] text-[#0D0C0A] font-extrabold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {totalItemsCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline">
              {totalItemsCount > 0 ? `Rs. ${grandTotal}` : 'Cart'}
            </span>
          </button>

          {/* Clean Order Now Action Button */}
          <a
            href="#menu"
            className={`inline-flex items-center justify-center text-xs font-bold px-4 py-2 rounded-xl transition-all border uppercase tracking-wider shadow-sm active:scale-95 ${
              isScrolled
                ? 'bg-[#1A1A1A] hover:bg-[#C5A059] text-white hover:text-[#1A1A1A] border-[#C5A059]'
                : 'bg-[#C5A059] hover:bg-[#d8b468] text-[#0D0C0A] border-[#E2C783]'
            }`}
          >
            <span>Order Now</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 focus:outline-none ${isScrolled ? 'text-[#1A1A1A]' : 'text-[#FAF8F5]'}`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C5A059]" /> : <MenuIcon className="w-6 h-6 text-[#C5A059]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#C5A059]/40 px-5 pt-4 pb-7 space-y-4 text-[#1A1A1A]">
          <div className="flex flex-col space-y-2 pt-2 border-t border-[#C5A059]/20">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[#1A1A1A] hover:text-[#C5A059] py-2.5 px-1 border-b border-[#E8E5DF] uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#C5A059] text-[#0D0C0A] py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ORDER NOW</span>
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-semibold text-[#6B6358] py-2 hover:text-[#C5A059]"
            >
              <span>Follow {INSTAGRAM_HANDLE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
