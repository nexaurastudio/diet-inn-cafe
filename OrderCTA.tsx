import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, ADDRESS, getWhatsAppUrl } from '../data/menuData';

export const OrderCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#FDFBF7] text-[#1C1917] border-b border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#C5A059]/40 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-left">
            <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-widest font-serif">
              AL KABIR TOWN PHASE 2 • LAHORE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-brand font-bold text-[#1C1917]">
              READY TO ORDER YOUR MEAL?
            </h2>
            <p className="text-[#524B43] text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Order your burgers, crown crust pizzas, shawarma wraps, loaded fries, pasta, and cold drinks directly via WhatsApp or phone call.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#C5A059] text-[#1C1917] py-4 px-6 rounded-xl font-bold text-base hover:bg-[#b8924b] transition-all shadow-sm active:scale-95 border border-[#C5A059]"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <span>ORDER ON WHATSAPP</span>
            </a>

            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center justify-center gap-3 bg-[#FDFBF7] text-[#1C1917] py-3.5 px-6 rounded-xl font-bold text-sm hover:bg-[#F4EFE6] transition-all border border-[#C5A059]/40"
            >
              <Phone className="w-5 h-5 text-[#C5A059]" />
              <span>CALL: {PHONE_DISPLAY}</span>
            </a>

            <div className="pt-2 text-center text-xs text-[#6B5E52] flex items-center justify-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{ADDRESS}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
