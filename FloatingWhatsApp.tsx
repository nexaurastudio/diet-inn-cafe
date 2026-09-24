import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/menuData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border-2 border-white/20 ring-2 ring-[#25D366]/30 group"
      aria-label="Order on WhatsApp"
      title="Order on WhatsApp (+92 3058745545)"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="hidden md:inline font-extrabold text-xs tracking-wider pr-1">
        Order WhatsApp
      </span>
    </a>
  );
};
