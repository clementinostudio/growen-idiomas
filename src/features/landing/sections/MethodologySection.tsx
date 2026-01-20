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
      description:
        'As aulas se adaptam à sua rotina, nível e objetivos — nunca o contrário.',
    },
    {
      icon: Zap,
      title: 'Evolução Acelerada',
      description:
        'Você avança de forma natural, sem travar e sem perder tempo com o que não usa.',
    },
    {
      icon: Target,
      title: 'Conteúdo que Faz Sentido',
      description:
        'Nada de inglês genérico. Você aprende o que realmente usa no dia a dia.',
    },
    {
      icon: MessageSquare,
      title: 'Conversação de Verdade',
      description:
        'Desde o início, o foco é falar, errar, corrigir e ganhar confiança.',
    },
  ];

  return (
    <section
      id="solucoes"
      className="py-28 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Container com lateral maior no mobile */}
      <div className="max-w-7xl mx-auto px-10 sm:px-12 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* LEFT: PHILOSOPHY */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-gray-900 mb-10 tracking-tight leading-tight">
                Uma metodologia feita para quem quer{' '}
                <span className="text-green-700">falar inglês</span>,
                <br />
                não decorar regras
              </h2>
            </Reveal>

            <Reveal delay={200} className="space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                Aqui, você não segue um método engessado. Antes de ensinar,
                entendemos você: seu nível, seus objetivos e sua rotina.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                A partir disso, combinamos estratégias e técnicas que realmente
                funcionam para o seu perfil. O resultado é simples e direto:
              </p>

              <p className="text-xl font-satoshi font-bold text-gray-900">
                Menos tempo estudando.
                <br />
                <span className="text-[#15803d]">
                  Mais tempo falando inglês.
                </span>
              </p>
            </Reveal>
          </div>

          {/* RIGHT: PILLARS */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-col">
              {pillars.map((pillar, index) => (
                <Reveal
                  key={index}
                  delay={300 + index * 100}
                  className="group border-t border-gray-100 py-8 flex gap-6 transition-all duration-300 hover:pl-4"
                >
                  {/* Icon */}
                  <div className="shrink-0 pt-1">
                    <pillar.icon
                      className="w-6 h-6 text-[#15803d]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-satoshi font-semibold text-gray-900 text-lg mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-base max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </Reveal>
              ))}

              <div className="border-t border-gray-100" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
