import React from 'react';
import { Menu, X, Facebook, Instagram, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../../../constants';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (state: boolean) => void;
  scrolled: boolean;
  scrollDirection: 'up' | 'down';
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  onLogoClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  scrolled,
  scrollDirection,
  onNavClick,
  onLogoClick,
}) => {
  const navTextClass = 'text-gray-300 hover:text-white';
  const navLogoClass = 'text-white';
  const navIconClass = 'text-gray-400 hover:text-white';
  const navToggleClass = 'text-white';

  // Optei por remover a lógica de esconder a navbar (isHidden) para um visual mais estável e profissional.
  // A navbar agora ficará fixa no topo (sticky/fixed) sem sumir ao rolar para baixo.

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out transform-gpu ${
        isMenuOpen
          ? 'bg-black'
          : scrolled
            ? 'bg-black border-b border-white/5 py-3'
            : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={onLogoClick}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <img
              src="/arquivos/logoGrowen.svg"
              alt="Growen Idiomas Logo"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className={`font-medium text-lg tracking-wide group-hover:text-green-400 transition-colors ${navLogoClass}`}
            >
              Growen Idiomas
            </span>
          </a>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#para-quem"
              onClick={(e) => onNavClick(e, 'para-quem')}
              className={`transition-colors text-sm font-medium tracking-wide ${navTextClass}`}
            >
              Para quem
            </a>
            <a
              href="#quem-somos"
              onClick={(e) => onNavClick(e, 'quem-somos')}
              className={`transition-colors text-sm font-medium tracking-wide ${navTextClass}`}
            >
              Quem somos
            </a>
            <a
              href="#depoimentos"
              onClick={(e) => onNavClick(e, 'depoimentos')}
              className={`transition-colors text-sm font-medium tracking-wide ${navTextClass}`}
            >
              Alunos
            </a>
            <a
              href="#contato"
              onClick={(e) => onNavClick(e, 'contato')}
              className={`transition-colors text-sm font-medium tracking-wide ${navTextClass}`}
            >
              Contato
            </a>
          </div>

          {/* Right Social Icons */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-5 border-l border-white/10 pl-6 h-8">
              <a
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${navIconClass} hover:text-[#1877F2] hover:scale-110 transform duration-200`}
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${navIconClass} hover:text-[#E4405F] hover:scale-110 transform duration-200`}
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${navIconClass} hover:text-[#0A66C2] hover:scale-110 transform duration-200`}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={`${navToggleClass} p-2 hover:bg-white/10 rounded-full transition-colors`}
            >
              {isMenuOpen ? <X size={24} aria-hidden={true} /> : <Menu size={24} aria-hidden={true} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
