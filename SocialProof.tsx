import React from 'react';
import { Star, Instagram, ThumbsUp, MessageSquare } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from './menuData';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-[#FDFBF7] border-b border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-[#C5A059]/40 shadow-sm text-center max-w-3xl mx-auto space-y-6">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDFBF7] text-[#1C1917] text-xs font-semibold uppercase tracking-wider border border-[#C5A059]/30">
            <Star className="w-3.5 h-3.5 fill-current text-[#C5A059]" />
            <span>CUSTOMER REVIEWS & TAGS</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-serif-brand font-bold text-[#1F3D2C]">
            CUSTOMER HIGHLIGHTS ON INSTAGRAM
          </h3>

          <p className="text-sm text-[#524B43] leading-relaxed max-w-xl mx-auto">
            Check out real customer reviews and food tags posted by foodies in Al Kabir Town Phase 2, Lahore on our Instagram page.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1C1917]">
              <ThumbsUp className="w-4 h-4 text-[#C5A059]" />
              <span>Verified Customer Tags</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1C1917]">
              <MessageSquare className="w-4 h-4 text-[#C5A059]" />
              <span>Deal Highlights</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5A059] text-[#1C1917] hover:bg-[#b8924b] transition-all text-xs font-bold shadow-sm border border-[#C5A059]"
            >
              <Instagram className="w-4 h-4" />
              <span>EXPLORE INSTAGRAM REVIEWS ({INSTAGRAM_HANDLE})</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
