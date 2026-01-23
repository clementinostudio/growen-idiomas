import React from 'react';
import { MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { TikTokIcon } from '../ui/TikTokIcon';
import { SOCIAL_LINKS } from '../../../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200 pt-16 pb-12 transition-colors duration-500">
      {/* CONTAINER COM ESPAÇAMENTO LATERAL MOBILE PADRÃO */}
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
        {/* Logo + Descrição + Contato */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-12 mb-12">
          {/* Logo + Descrição */}
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-3">
              <img src="/arquivos/logoGrowen.svg" alt="Growen" className="w-10 h-auto" width="40" height="40" />
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

          {/* Contato */}
          <div className="flex flex-col space-y-3 text-sm text-gray-400">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1 min-w-4" /> 
              <span>
                R. Estéfano Zshoka<br />
                Apucarana - PR
              </span>
            </div>
            <a
              href={SOCIAL_LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" /> (43) 99653-6535
            </a>
            <div>hello@growen.com</div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
          <p>© {currentYear} Growen Idiomas.</p>
          <div className="flex gap-6">
            <a
              href={SOCIAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} aria-hidden={true} />
            </a>
            <a
              href={SOCIAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} aria-hidden={true} />
            </a>
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} aria-hidden={true} />
            </a>
            <a
              href={SOCIAL_LINKS.YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={18} aria-hidden={true} />
            </a>
            <a
              href={SOCIAL_LINKS.TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
