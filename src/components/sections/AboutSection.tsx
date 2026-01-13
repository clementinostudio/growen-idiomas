import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../ui';

interface AboutSectionProps {
  onExploreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreClick }) => {
  return (
    <section
      id="quem-somos"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-end">
          <div className="max-w-3xl">
            <Reveal>
              <span className="text-[#22c55e] font-bold tracking-widest uppercase text-xs mb-4 block">
                Quem Somos
              </span>
              <h2 className="text-3xl md:text-5xl font-satoshi font-bold text-gray-900 mb-8 leading-tight">
                Conheça a Growen
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                <p>
                  Imagine falar um novo idioma com confiança, sabendo que você
                  terá o que é necessário para alcançar seus objetivos. Na
                  Growen Idiomas, isso não é promessa distante, é o ponto de
                  partida.
                </p>
                <p>
                  Somos mais do que uma escola. Somos um espaço onde o
                  aprendizado é humano, vivo e focado na comunicação real. Aqui,
                  você aprende a falar de verdade, desde o início. Acreditamos
                  que um idioma não se decora, ele se vive.
                </p>
                <p>
                  Por isso, cada aula é pensada para você, respeitando sua
                  história, sua personalidade e seu propósito. Na Growen, você
                  não estuda um idioma. Você incorpora uma nova forma de se
                  expressar.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Mascot & Action */}
          <div className="flex flex-col gap-8 justify-end h-full">
            <Reveal delay={400}>
              <img
                src="/arquivos/MelvinMesa.svg"
                alt="Mascote Growen"
                className="w-full h-auto max-h-[450px] object-contain"
              />
            </Reveal>

            <Reveal delay={600}>
              <button
                onClick={onExploreClick}
                className="group flex items-center justify-between gap-3 text-black font-bold text-lg hover:text-[#22c55e] transition-colors border-b border-gray-200 hover:border-[#22c55e] pb-4 pt-2 w-full"
              >
                <span>Conheça nossa estrutura</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </Reveal>
          </div>
        </div>

        {/* Interactive Bento Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Large Item */}
          <Reveal
            delay={200}
            className="md:col-span-8 relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm"
          >
            <img
              src="/arquivos/sala.jpg"
              alt="Sala de Aula"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                Sala de Aula
              </span>
            </div>
          </Reveal>

          {/* Side Column Items */}
          <div className="md:col-span-4 flex flex-col gap-6 h-full">
            <Reveal
              delay={300}
              className="flex-1 relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm"
            >
              <img
                src="/arquivos/recep.jpg"
                alt="Recepção"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                  Recepção
                </span>
              </div>
            </Reveal>
            <Reveal
              delay={400}
              className="flex-1 relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm"
            >
              <img
                src="/arquivos/fora.jpg"
                alt="Exterior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                  Growen Exterior
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
