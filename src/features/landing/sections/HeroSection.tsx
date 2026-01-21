import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

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
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-black isolate">
      {/* Background with Forced Green Tint */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* 1. Base Image - High Constast Grayscale */}
        <img
            src="/arquivos/space-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-70 grayscale contrast-150"
        />
        {/* 2. Colorizer Layer - Maps White to Green */}
        <div className="absolute inset-0 bg-green-600 mix-blend-overlay opacity-100" />
        
        {/* 3. Extra Glow for highlights */}
        <div className="absolute inset-0 bg-green-500/30 mix-blend-color-dodge" />

        {/* 4. Vignette / Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>
      
      {/* Texture Overlay (Ring) */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

      {/* BACKGROUND OVERLAYS */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>



      {/* LOGOS DECORATIVAS */}

      
      <div className="absolute -bottom-28 -left-28 z-10 pointer-events-none select-none">
        <img
          src="/arquivos/logoGrowen.svg"
          alt=""
          className="w-[360px] opacity-10"
          width="360"
          height="100"
          fetchPriority="high"
        />
      </div>


      <div className="absolute -top-24 -right-28 z-10 pointer-events-none select-none hidden lg:block">
        <img
          src="/arquivos/logoGrowen.svg"
          alt=""
          className="w-[415px] opacity-10"
          loading="lazy"
          width="415"
          height="100"
          style={{
            transform: 'rotate(180deg)',
            maskImage: 'linear-gradient(315deg, black 60%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(315deg, black 60%, transparent 100%)',
          }}
        />
      </div>







      {/* CONTAINER PRINCIPAL */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-6 md:px-12 lg:px-16 pt-36 md:pt-28 lg:pt-32 py-20 md:py-24 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* CONTEÚDO ESQUERDO */}
          <div className="relative flex flex-col items-start text-left px-2 sm:px-0">
            <div
              className="hidden sm:block absolute -bottom-40 -left-8 w-[640px] h-[640px] bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none z-0 rounded-md"
              style={{ backgroundImage: "url('/arquivos/fundo.webp')" }}
            />

            <div className="relative z-10 space-y-6">
              <Reveal>
                <div className="mb-2">
                  <h2 className="text-4xl font-satoshi font-black tracking-tighter text-white leading-none">
                    Growen
                  </h2>
                  <span className="text-[10px] tracking-[0.4em] text-gray-400 font-bold uppercase block mt-1 ml-1">
                    IDIOMAS
                  </span>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h1 className="text-5xl md:text-7xl font-satoshi font-bold leading-[1.05] tracking-tight text-white">
                  <span className="block text-green-400">
                    Pare de estudar inglês.
                  </span>
                  <span className="block">Comece a falar.</span>
                </h1>
              </Reveal>

              <Reveal delay={400}>
                <p className="text-gray-400 text-base md:text-lg max-w-full sm:max-w-lg leading-relaxed font-questrial">
                  Aprenda inglês falando, errando e evoluindo. Aulas para quem está começando ou quer finalmente destravar a fala.
                </p>
              </Reveal>

              <Reveal delay={600} className="pt-6">
                <button
                  onClick={() =>
                    window.open(
                      'https://wa.me/5543996536535?text=Olá!%20😊%0AGostaria%20de%20agendar%20uma%20aula%20teste%20gratuita%20de%20inglês.%20Poderia%20me%20passar%20mais%20informações?',
                      '_blank'
                    )
                  }
                  className="group relative flex items-center gap-4 pl-6 pr-2 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <span className="font-satoshi font-bold text-lg tracking-wide">
                    Agendar aula experimental gratuita
                  </span>

                  <div className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center overflow-hidden">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </button>

                <div className="mt-4 space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="text-green-400 font-bold">
                      +300 alunos
                    </span>
                    <span>já falando inglês com a Growen</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Aula teste gratuita • Sem compromisso
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
                src="/arquivos/MelvinM.svg"
                alt="Mascote Growen"
                className="w-full max-w-[650px] object-contain drop-shadow-2xl"
                fetchPriority="high"
                width="650"
                height="800"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, black 80%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 80%, transparent 100%)',
                }}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
