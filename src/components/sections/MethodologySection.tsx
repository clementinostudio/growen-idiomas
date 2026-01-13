import React from 'react';
import {
  SlidersHorizontal,
  Zap,
  Target,
  MessageSquare,
} from 'lucide-react';
import { Reveal } from '../ui';

export const MethodologySection: React.FC = () => {
  const pillars = [
    {
      icon: SlidersHorizontal,
      title: 'Flexibilidade Total',
      description: 'Aulas que se adaptam a você e ao seu ritmo, não o contrário.',
    },
    {
      icon: Zap,
      title: 'Aprendizado Rápido',
      description: 'Evolução natural, acelerada e focada em resultados reais.',
    },
    {
      icon: Target,
      title: 'Conteúdo Relevante',
      description:
        'Você aprende o que realmente importa para a sua realidade.',
    },
    {
      icon: MessageSquare,
      title: 'Foco Prático',
      description: '100% focado na comunicação e na conversação real.',
    },
  ];

  return (
    <section id="solucoes" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Side: Philosophy */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-gray-900 mb-8 tracking-tight leading-tight">
                O Poder de Nossa Metodologia
              </h2>
            </Reveal>

            <Reveal
              delay={200}
              className="text-lg text-gray-600 leading-relaxed space-y-8 font-light"
            >
              <p>
                Na Growen, não acreditamos em métodos engessados. Acreditamos em
                estratégia. Utilizamos o{' '}
                <span className="text-gray-900 font-medium">Pós-Método</span>:
                antes de ensinar, nós entendemos você.
              </p>
              <p>
                Seu nível, seus objetivos e sua rotina definem o caminho.
                Combinamos as técnicas mais eficazes para o seu desenvolvimento.
                O resultado é simples:{' '}
                <strong className="text-gray-900 font-bold">
                  menos tempo estudando, mais tempo falando.
                </strong>
              </p>
            </Reveal>
          </div>

          {/* Right Side: Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-col">
              {pillars.map((pillar, index) => (
                <Reveal
                  key={index}
                  delay={300 + index * 100}
                  className="group border-t border-gray-100 py-8 flex gap-6 transition-all hover:pl-4"
                >
                  <div className="shrink-0 pt-1">
                    <pillar.icon
                      className="w-6 h-6 text-[#22c55e]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2 font-satoshi">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-base">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-b border-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
