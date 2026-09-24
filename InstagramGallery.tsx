import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, INSTAGRAM_HIGHLIGHTS } from '../data/menuData';

export const InstagramGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-[#F4EFE6] border-b border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] text-[#1C1917] text-xs font-semibold uppercase tracking-wider border border-[#C5A059]/40">
            <Instagram className="w-4 h-4 text-[#C5A059]" />
            <span>OFFICIAL INSTAGRAM FEED</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-brand font-bold text-[#1C1917]">
            {INSTAGRAM_HANDLE}
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-1" />
          <p className="text-sm text-[#524B43] max-w-md mx-auto">
            Stay updated with our weekend deals, menu highlights, and customer stories on Instagram.
          </p>
          <div className="pt-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A059] text-[#1C1917] hover:bg-[#b8924b] transition-all text-xs font-bold shadow-sm border border-[#C5A059]"
            >
              <Instagram className="w-4 h-4" />
              <span>VIEW INSTAGRAM PAGE</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>

        {/* Instagram Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_HIGHLIGHTS.map((post) => (
            <a
              key={post.id}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FDFBF7] rounded-3xl overflow-hidden border border-[#C5A059]/30 hover:border-[#C5A059] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-[#FAF7F2]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800';
                  }}
                />
                <div className="absolute top-3 left-3 bg-[#FAF7F2] text-[#1C1917] px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border border-[#C5A059]/30">
                  {post.tag}
                </div>
                <div className="absolute inset-0 bg-[#1C1917]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                  <Instagram className="w-6 h-6 text-[#C5A059]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Open Post</span>
                </div>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between text-left">
                <div>
                  <p className="text-sm font-bold text-[#1C1917] font-serif-brand">
                    {post.title}
                  </p>
                  <p className="text-xs text-[#524B43] leading-relaxed line-clamp-2 mt-1">
                    {post.caption}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#C5A059]/20 flex items-center justify-between text-[11px] text-[#6B5E52] font-semibold">
                  <span>{INSTAGRAM_HANDLE}</span>
                  <span className="text-[#C5A059] font-bold">Instagram</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
