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
  const navTextClass = 'text-gray-600 hover:text-gray-900';
  const navLogoClass = 'text-gray-900';
  const navIconClass = 'text-gray-500 hover:text-gray-900';
  const navToggleClass = 'text-gray-900';

  // Optei por remover a lógica de esconder a navbar (isHidden) para um visual mais estável e profissional.
  // A navbar agora ficará fixa no topo (sticky/fixed) sem sumir ao rolar para baixo.

  return (
    <nav
      className={`absolute w-full z-50 transition-all duration-300 ease-in-out pt-8 pb-5`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-12 lg:px-16 relative z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            onClick={onLogoClick}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <img
              src="/arquivos/logoGrowen.svg"
              alt="Growen Idiomas Logo"
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className={`font-medium text-lg tracking-wide group-hover:text-green-400 transition-colors ${navLogoClass}`}
            >
              Growen Idiomas
            </span>
          </a>

          {/* Center Links + Right Social Icons */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#para-quem"
              onClick={(e) => onNavClick(e, 'para-quem')}
              className={`transition-colors text-base font-interTight font-medium tracking-wide ${navTextClass}`}
            >
              Para quem
            </a>
            <a
              href="#quem-somos"
              onClick={(e) => onNavClick(e, 'quem-somos')}
              className={`transition-colors text-base font-interTight font-medium tracking-wide ${navTextClass}`}
            >
              Quem somos
            </a>
            <a
              href="#depoimentos"
              onClick={(e) => onNavClick(e, 'depoimentos')}
              className={`transition-colors text-base font-interTight font-medium tracking-wide ${navTextClass}`}
            >
              Alunos
            </a>
            <a
              href="#contato"
              onClick={(e) => onNavClick(e, 'contato')}
              className={`transition-colors text-base font-interTight font-medium tracking-wide ${navTextClass}`}
            >
              Contato
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-5 border-l border-gray-200 pl-6 h-8">
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
              className={`${navToggleClass} p-2 hover:bg-gray-100 rounded-full transition-colors`}
            >
              {isMenuOpen ? <X size={24} aria-hidden={true} /> : <Menu size={24} aria-hidden={true} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
