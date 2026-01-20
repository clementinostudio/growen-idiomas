import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface MobileMenuProps {
  isOpen: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onNavClick }) => {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal={true}
      aria-hidden={!isOpen}
      className={`
        md:hidden fixed inset-0 bg-[#050505] z-40 pt-24
        transition-opacity duration-300 ease-in-out
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
    >
      <div
        className={`
          flex flex-col items-center justify-center h-full space-y-8 p-6 overflow-y-auto pb-20
          transition-transform duration-300 ease-out
          ${isOpen ? 'translate-y-0' : '-translate-y-4'}
        `}
      >
        <a
          href="#para-quem"
          onClick={(e) => onNavClick(e, 'para-quem')}
          className="text-2xl font-bold text-gray-300 hover:text-green-500 transition-colors"
        >
          Para quem
        </a>
        <a
          href="#quem-somos"
          onClick={(e) => onNavClick(e, 'quem-somos')}
          className="text-2xl font-bold text-gray-300 hover:text-green-500 transition-colors"
        >
          Quem somos
        </a>
        <a
          href="#depoimentos"
          onClick={(e) => onNavClick(e, 'depoimentos')}
          className="text-2xl font-bold text-gray-300 hover:text-green-500 transition-colors"
        >
          Soluções
        </a>
        <a
          href="#contato"
          onClick={(e) => onNavClick(e, 'contato')}
          className="text-2xl font-bold text-gray-300 hover:text-green-500 transition-colors"
        >
          Contato
        </a>

        <div className="flex gap-8 mt-8 pt-8 border-t border-white/10 w-full justify-center">
          <a href="#" className="text-gray-400 hover:text-green-500" aria-label="Instagram" title="Instagram">
            <Instagram size={28} aria-hidden={true} />
          </a>
          <a href="#" className="text-gray-400 hover:text-green-500" aria-label="WhatsApp" title="WhatsApp">
            <WhatsAppIcon className="w-7 h-7" aria-hidden={true} />
          </a>
          <a href="#" className="text-gray-400 hover:text-green-500" aria-label="Facebook" title="Facebook">
            <Facebook size={28} aria-hidden={true} />
          </a>
        </div>
      </div>
    </div>
  );
};
