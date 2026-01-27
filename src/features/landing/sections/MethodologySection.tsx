import React from 'react';
import { Reveal } from '../ui';
import { SpinningLogos } from '@/components/ui/spinning-logos';

export const MethodologySection: React.FC = () => {
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
              <h2 className="text-4xl md:text-5xl font-fustat font-semibold text-[#204749] mb-10 tracking-tight leading-tight">
                Uma metodologia feita para quem quer{' '}
                <span className="text-green-500">falar inglês</span>,
                <br />
                não decorar regras
              </h2>
            </Reveal>

            <Reveal delay={200} className="space-y-8">
              <p className="text-lg text-[#4C5267] font-interTight font-medium leading-relaxed">
                Aqui, você não segue um método engessado. Antes de ensinar,
                entendemos você: seu nível, seus objetivos e sua rotina.
              </p>

              <p className="text-lg text-[#4C5267] font-interTight font-medium leading-relaxed">
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
            <Reveal delay={300}>
              <div className="scale-75 md:scale-90 origin-center">
                <SpinningLogos />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
