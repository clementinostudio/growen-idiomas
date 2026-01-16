import React from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a href="https://wa.me/43996536535?text=quero%20minha%20aula%20teste" target="_blank" className="fixed bottom-6 right-6 z-50 group">
      <div className="w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <WhatsAppIcon className="w-7 h-7 text-white fill-current" />
      </div>
    </a>
  );
};
