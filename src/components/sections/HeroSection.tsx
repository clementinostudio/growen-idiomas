import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal, ButtonPrimary } from '../ui';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-[#050505]">
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div className="relative flex flex-col items-start text-left h-full">
            <div
              className="absolute -bottom-40 -left-8 w-[640px] h-[640px] bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none z-10 rounded-md"
              style={{ backgroundImage: "url('/arquivos/fundo.png')" }}
            />
            <div className="relative z-20 space-y-6">
              <Reveal>
                <div className="mb-2">
                  <h2 className="text-4xl font-satoshi font-black tracking-tighter text-white leading-none">
                    Growen
                  </h2>
                  <span className="text-[10px] tracking-[0.4em] text-gray-400 font-bold uppercase block mt-1">
                    IDIOMAS
                  </span>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <h1 className="text-5xl md:text-7xl font-satoshi font-bold leading-[1.05] tracking-tight text-white">
                  <span className="block text-[#22c55e]">
                    Pare de estudar inglês.
                  </span>
                  <span className="block">Comece a falar.</span>
                </h1>
              </Reveal>
              <Reveal delay={400}>
                <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed font-questrial font-medium">
                  Aulas de inglês focadas em conversação real, para quem já
                  cansou de estudar e não consegue falar.
                </p>
              </Reveal>
              <Reveal delay={600} className="pt-6">
                <button
                  onClick={onCTAClick}
                  className="group relative flex items-center gap-4 pl-8 pr-2 py-2 bg-[#22c55e] hover:bg-[#1eb053] text-white rounded-full transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <span className="font-satoshi font-bold text-lg tracking-wide relative">
                    Marque uma aula teste
                  </span>
                  <div className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center overflow-hidden">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </button>
              </Reveal>
            </div>
          </div>

          {/* Right Content - Mascot */}
          <div className="relative flex justify-center lg:justify-end h-full min-h-[400px]">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none">
              <div className="absolute right-0 top-0 w-64 h-32 border-[12px] border-[#22c55e] rounded-full opacity-20 blur-sm transform rotate-12"></div>
              <div className="absolute right-20 bottom-0 w-64 h-32 border-[12px] border-[#22c55e] rounded-full opacity-20 blur-sm transform -rotate-12"></div>
            </div>
            <Reveal
              delay={800}
              className="relative z-10 w-full flex justify-center lg:justify-end"
            >
              <img
                src="/arquivos/Melvin.svg"
                alt="Mascote Growen"
                className="w-full max-w-[650px] object-contain drop-shadow-2xl mask-image-fade-bottom"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
