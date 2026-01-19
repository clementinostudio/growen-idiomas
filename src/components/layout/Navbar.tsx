import React from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
  scrolled: boolean;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  onLogoClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  scrolled,
  onNavClick,
  onLogoClick,
}) => {
  const linkClass = 'text-gray-300 hover:text-green-500 transition-colors duration-300 font-medium';
  const iconClass = 'text-gray-400 hover:text-green-500 transition-colors duration-300';
  
  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ease-in-out ${
        isMenuOpen
          ? 'bg-[#050505] py-4'
          : scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-sm'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo + Tagline */}
        <a
          href="#"
          onClick={onLogoClick}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src="/arquivos/logoGrowen.svg"
            alt="Growen Idiomas Logo"
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-lg group-hover:text-green-500 transition-colors">
              Growen Idiomas
            </span>
            <span className="text-gray-400 text-xs tracking-wide">
              Time to Grow
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['para-quem', 'quem-somos', 'depoimentos', 'contato'].map((id, idx) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => onNavClick(e, id)}
              className={linkClass}
            >
              {['Para quem', 'Quem somos', 'Soluções', 'Contato'][idx]}
            </a>
          ))}
        </div>

        {/* Social Icons Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className={iconClass}><Facebook size={20} strokeWidth={1.5} /></a>
          <a href="#" className={iconClass}><WhatsAppIcon className="w-5 h-5" /></a>
          <a href="#" className={iconClass}><Instagram size={20} strokeWidth={1.5} /></a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
