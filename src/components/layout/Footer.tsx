import React from 'react';
import { MapPin, Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="bg-white pt-20 pb-10 border-t border-gray-100 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center">
                <span className="font-bold text-gray-900 text-xs">∞</span>
              </div>
              <span className="font-bold text-xl font-satoshi text-gray-900">
                Growen
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Revolucionando o ensino de idiomas com foco em conversação real e
              métodos adaptativos.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Escola</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <a href="#para-quem" className="hover:text-[#22c55e]">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-[#22c55e]">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#22c55e]">
                  Preços
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> R. Estéfano Zshoka
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4" /> (43) 99653-6535
              </li>
              <li className="flex items-center gap-2">hello@growen.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} Growen Idiomas.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#22c55e] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#22c55e] transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
