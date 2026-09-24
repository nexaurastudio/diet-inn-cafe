import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Building } from 'lucide-react';
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, getWhatsAppUrl } from '../data/menuData';

export const LocationSection: React.FC = () => {
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Diet Inn Cafe, ${ADDRESS}`)}`;

  return (
    <section id="location" className="py-20 bg-[#F4EFE6] border-b border-[#C5A059]/30 relative">
      <div id="contact" className="absolute -top-20 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] font-serif">
            VISIT OR ORDER IN LAHORE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-brand font-bold text-[#1F3D2C]">
            LOCATION & CONTACT
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-1" />
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#FDFBF7] rounded-3xl p-8 border border-[#C5A059]/40 shadow-sm flex flex-col justify-between space-y-6 text-left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">Diet Inn Cafe</h3>
                  <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider mt-0.5">
                    Al Kabir Town Branch
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#C5A059]/20">
                <div className="flex items-start gap-3 text-sm text-[#1C1917]">
                  <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1C1917]">Address:</p>
                    <p className="text-xs text-[#524B43] font-medium leading-relaxed mt-0.5">
                      {ADDRESS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#1C1917]">
                  <Phone className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#1C1917]">Phone & WhatsApp:</p>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="text-xs font-bold text-[#1C1917] hover:text-[#C5A059] transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-6 border-t border-[#C5A059]/20 space-y-3">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FAF7F2] text-[#1C1917] py-3.5 px-6 rounded-xl font-bold text-xs hover:bg-[#F4EFE6] transition-colors border border-[#C5A059]/40"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span>OPEN IN GOOGLE MAPS</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A059] text-[#1C1917] py-3.5 px-6 rounded-xl font-bold text-xs hover:bg-[#b8924b] transition-colors border border-[#C5A059]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>ORDER ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Map Direct Inset Card */}
          <div className="lg:col-span-7 bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#C5A059]/40 shadow-sm relative min-h-[320px] flex flex-col items-center justify-center text-center p-8">
            <div className="relative z-10 space-y-4 max-w-md">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-[#C5A059] flex items-center justify-center mx-auto shadow-sm ring-2 ring-[#C5A059]/30">
                <MapPin className="w-8 h-8 text-[#C5A059]" />
              </div>

              <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
                50 Usman Block, Al Kabir Town, Phase 2, Lahore
              </h3>

              <p className="text-xs text-[#524B43]">
                Open for takeaway and fast home delivery in Al Kabir Town Phase 2, Lahore.
              </p>

              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C5A059] text-[#1C1917] font-bold px-6 py-3 rounded-xl text-xs hover:bg-[#b8924b] transition-all shadow-sm border border-[#C5A059]"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
