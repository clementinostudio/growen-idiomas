import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { TESTIMONIALS } from '../../../constants';
import ShinyText from '../../../components/ui/ShinyText';

/* =========================================================
 * COMPONENTE: Reveal
 * Responsável por animar elementos ao entrarem na viewport
 * ========================================================= */

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

/* =========================================================
 * COMPONENTE: HeroSection
 * Seção principal (Hero) da landing page
 * ========================================================= */

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-svh flex items-center overflow-hidden bg-white isolate">
      {/* Clean white background */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* CONTAINER PRINCIPAL */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-6 md:px-12 lg:px-16 pt-36 md:pt-28 lg:pt-32 py-20 md:py-24 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* CONTEÚDO ESQUERDO */}
          <div className="relative flex flex-col items-start text-left px-2 sm:px-0">
            <div className="relative z-10 space-y-6">
              <Reveal delay={200}>
                <h1 className="text-5xl md:text-[68px] font-fustat font-semibold leading-[105%] tracking-tighter text-[#204749]">
                  <span className="block pb-1">
                    <ShinyText
                      text="Pare de estudar inglês."
                      speed={2}
                      delay={0}
                      color="#22c55e"
                      shineColor="#ffffff"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                    />
                  </span>
                  <span className="block">Comece a falar.</span>
                </h1>
              </Reveal>

              <Reveal delay={400}>
                <p className="text-[#4C5267] font-interTight text-base md:text-lg font-medium max-w-full sm:max-w-lg leading-relaxed">
                  Aprenda inglês falando, errando e evoluindo. Curso de inglês em <span className="text-[#204749] font-semibold">Apucarana</span> e online para quem está começando ou quer finalmente destravar a fala.
                </p>
              </Reveal>

              <Reveal delay={600} className="pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        'https://wa.me/5543996536535?text=Olá!%20😊%0AGostaria%20de%20agendar%20uma%20aula%20teste%20gratuita%20de%20inglês.%20Poderia%20me%20passar%20mais%20informações?',
                        '_blank',
                        'noopener,noreferrer'
                      )
                    }
                    aria-label="Agendar aula experimental gratuita pelo WhatsApp"
                    className="group relative flex items-center gap-3 pl-6 pr-2 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/20"
                  >
                    <span className="font-satoshi font-semibold text-base tracking-wide">
                      Agendar aula gratuita
                    </span>
                    <div className="relative w-10 h-10 bg-green-500 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-green-400 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </button>
                  
                  <button
                    onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    Conhecer método
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* Indicador de confiança com fotos reais */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {TESTIMONIALS.slice(0, 5).map((t) => (
                        <img 
                          key={t.id}
                          src={t.image} 
                          alt={t.name}
                          className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                        />
                      ))}
                      <div className="w-10 h-10 rounded-full border-2 border-white bg-green-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        +50
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-0.5">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {/* Meia estrela para 4.8 */}
                          <div className="relative w-4 h-4">
                            <Star className="w-4 h-4 text-gray-300" />
                            <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            </div>
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 ml-1">4.8</span>
                      </div>
                      <span className="text-sm text-gray-500">Avaliação dos alunos</span>
                    </div>
                  </div>
                  
                  <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">Aula teste gratuita</span>
                    <span className="text-sm text-gray-500">Sem compromisso</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* CONTEÚDO DIREITO */}
          <div className="relative flex justify-center lg:justify-end px-2 sm:px-0">
            <Reveal
              delay={800}
              className="relative z-20 w-full flex justify-center lg:justify-end"
            >
              <img
                src="/arquivos/MelvinM.webp"
                alt="Mascote Growen"
                className="w-full max-w-[420px] object-contain"
                fetchPriority="high"
                width="520"
                height="640"
              />
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
};
