import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { TikTokIcon } from '../ui/TikTokIcon';
import { SOCIAL_LINKS } from '../../../constants';

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
          className="text-2xl font-bold text-gray-300 hover:text-[#7ed957] transition-colors"
        >
          Para quem
        </a>
        <a
          href="#quem-somos"
          onClick={(e) => onNavClick(e, 'quem-somos')}
          className="text-2xl font-bold text-gray-300 hover:text-[#7ed957] transition-colors"
        >
          Quem somos
        </a>
        <a
          href="#depoimentos"
          onClick={(e) => onNavClick(e, 'depoimentos')}
          className="text-2xl font-bold text-gray-300 hover:text-[#7ed957] transition-colors"
        >
          Soluções
        </a>
        <a
          href="#contato"
          onClick={(e) => onNavClick(e, 'contato')}
          className="text-2xl font-bold text-gray-300 hover:text-[#7ed957] transition-colors"
        >
          Contato
        </a>

        <div className="flex gap-6 mt-8 pt-8 border-t border-white/10 w-full justify-center flex-wrap">
          <a
            href={SOCIAL_LINKS.INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#7ed957]"
            aria-label="Instagram"
            title="Instagram"
          >
            <Instagram size={28} aria-hidden={true} />
          </a>
          <a
            href={SOCIAL_LINKS.FACEBOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#7ed957]"
            aria-label="Facebook"
            title="Facebook"
          >
            <Facebook size={28} aria-hidden={true} />
          </a>
          <a
            href={SOCIAL_LINKS.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#7ed957]"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={28} aria-hidden={true} />
          </a>
          <a
            href={SOCIAL_LINKS.YOUTUBE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#7ed957]"
            aria-label="YouTube"
            title="YouTube"
          >
            <Youtube size={28} aria-hidden={true} />
          </a>
          <a
            href={SOCIAL_LINKS.TIKTOK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#7ed957]"
            aria-label="TikTok"
            title="TikTok"
          >
            <TikTokIcon className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
};
