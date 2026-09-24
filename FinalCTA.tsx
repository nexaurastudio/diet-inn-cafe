import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, TAGLINE, getWhatsAppUrl } from './menuData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4EFE6] text-[#1C1917] text-center relative overflow-hidden border-t border-[#C5A059]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] text-[#1C1917] text-xs font-semibold uppercase tracking-widest border border-[#C5A059]/40">
          <span>DIET INN CAFE • LAHORE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif-brand font-bold text-[#1C1917]">
          GOOD FOOD. SMART CHOICES.
        </h2>

        <p className="text-xl font-serif italic text-[#C5A059] font-semibold">
          “{TAGLINE}”
        </p>

        <p className="text-sm text-[#524B43] max-w-xl mx-auto font-normal">
          Place your order now for takeaway or delivery in Al Kabir Town Phase 2, Lahore.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5A059] text-[#1C1917] px-8 py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-[#b8924b] transition-all shadow-sm active:scale-95 border border-[#C5A059]"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>ORDER ON WHATSAPP (+92 3058745545)</span>
          </a>

          <a
            href={`tel:${PHONE_TEL}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FDFBF7] text-[#1C1917] px-8 py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#FAF7F2] transition-all border border-[#C5A059]/40"
          >
            <Phone className="w-5 h-5 text-[#C5A059]" />
            <span>CALL TO ORDER: {PHONE_DISPLAY}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
