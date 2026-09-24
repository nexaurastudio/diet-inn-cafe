import React from 'react';
import { Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, INSTAGRAM_HANDLE, INSTAGRAM_URL, TAGLINE, getWhatsAppUrl } from './menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#121212] text-[#FAF7F2] border-t border-[#C5A059]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          
          {/* Brand Info Column */}
          <div className="space-y-3">
            <a href="#" className="inline-block group" aria-label="Diet Inn Cafe">
              <img 
                src="/logo_clean.png" 
                alt="Diet Inn Cafe Logo" 
                width={666}
                height={633}
                loading="lazy"
                decoding="async"
                className="h-20 sm:h-24 w-auto object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_2px_14px_rgba(197,160,89,0.35)] brightness-110"
                referrerPolicy="no-referrer"
              />
            </a>

            <p className="text-xs font-serif italic text-[#C5A059] font-semibold tracking-wider">
              “{TAGLINE}”
            </p>

            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Crispy zinger burgers, stuffed crown crust pizzas, shawarma wraps, loaded fries, pasta, and cold drinks in Al Kabir Town Phase 2, Lahore.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif-brand text-xs font-bold text-[#C5A059] uppercase tracking-widest">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-medium">
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-[#C5A059] transition-colors">Menu</a></li>
              <li><a href="#deals" className="hover:text-[#C5A059] transition-colors">Premium Deals</a></li>
              <li><a href="#about" className="hover:text-[#C5A059] transition-colors">About Us</a></li>
              <li><a href="#location" className="hover:text-[#C5A059] transition-colors">Location</a></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <h4 className="font-serif-brand text-xs font-bold text-[#C5A059] uppercase tracking-widest">
              CONTACT & LOCATION
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-[#C5A059] font-normal font-[Arial]">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059]">
                  WhatsApp Direct Order
                </a>
              </li>
            </ul>
          </div>

          {/* Instagram / Social */}
          <div className="space-y-3">
            <h4 className="font-serif-brand text-xs font-bold text-[#C5A059] uppercase tracking-widest">
              SOCIAL MEDIA
            </h4>
            <p className="text-xs text-stone-400">
              Follow us on Instagram for deals and menu updates.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1C1917] text-[#FAF7F2] text-xs font-bold border border-[#C5A059]/40 hover:bg-[#2B2621] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#C5A059]" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Diet Inn Cafe. All rights reserved.</p>
          <p className="flex items-center gap-1 font-medium text-stone-400">
            <span>Al Kabir Town Phase 2, Lahore •</span>
            <span className="text-[#C5A059] italic font-serif font-semibold">Eat Smart - Stay Fit</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
