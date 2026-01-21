import React from 'react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a href="https://wa.me/43996536535?text=quero%20minha%20aula%20teste" target="_blank" rel="noopener noreferrer" aria-label="Abrir conversa no WhatsApp" className="fixed bottom-6 right-6 z-50 group">
      <div className="w-14 h-14 bg-[#15803d] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
        <WhatsAppIcon className="w-7 h-7 text-white fill-current" aria-hidden={true} />
        <span className="sr-only">Abrir conversa no WhatsApp</span>
      </div>
    </a>
  );
};
