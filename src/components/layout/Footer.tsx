import React from 'react';
import { MapPin, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200 pt-16 pb-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo + Descrição + Contato */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-3">
              <img src="/arquivos/logoGrowen.svg" alt="Growen" className="w-10 h-auto" />
              <div>
                <span className="block text-2xl font-bold text-gray-200">
                  Growen
                </span>
                <span className="block ml-1 text-[10px] tracking-[0.4em] text-gray-400 font-bold uppercase">
                  Idiomas
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolucionando o ensino de idiomas com foco em conversação real e métodos adaptativos.
            </p>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} /> R. Estéfano Zshoka
            </div>
            <div className="flex items-center gap-2">
              <WhatsAppIcon className="w-4 h-4" /> (43) 99653-6535
            </div>
            <div>hello@growen.com</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} Growen Idiomas.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
