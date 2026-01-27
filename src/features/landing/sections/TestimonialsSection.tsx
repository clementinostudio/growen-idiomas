import React from 'react';
import { TestimonialsColumn } from '@/components/ui/TestimonialsColumn';
import { TESTIMONIALS } from '../../../constants';
import { Reveal } from '../ui';
import { Star } from 'lucide-react';

// Usando os depoimentos reais diretamente
const testimonialsData = TESTIMONIALS.map((t) => ({
  ...t,
}));

// Dividindo em colunas de forma equilibrada (10 depoimentos)
const firstColumn = testimonialsData.slice(0, 4);
const secondColumn = testimonialsData.slice(4, 7);
const thirdColumn = testimonialsData.slice(7, 10);

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-gradient-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container z-10 mx-auto px-4 relative">
        <Reveal>
          <div className="flex flex-col items-center justify-center max-w-[700px] mx-auto mb-16">
            <div className="flex justify-center mb-6">
              <span className="bg-green-50 border border-green-200 rounded-full px-5 py-2 text-sm font-semibold text-green-700 shadow-sm flex items-center gap-2">
                <span className="flex items-center gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <div className="relative w-3.5 h-3.5">
                    <Star className="w-3.5 h-3.5 text-gray-300" />
                    <div className="absolute inset-0 overflow-hidden" style={{ width: '80%' }}>
                      <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                  <span className="ml-1 font-bold">4.8</span>
                </span>
                Avaliação média
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-fustat font-semibold tracking-tight text-center text-[#204749] mb-6">
              Histórias de quem já{' '}
              <span className="text-green-600">transformou</span> sua vida
            </h2>
            <p className="text-center text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              Esses são nossos alunos de verdade. Pessoas como você que decidiram dar o primeiro passo e hoje falam inglês com confiança.
            </p>
          </div>
        </Reveal>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[750px] overflow-hidden -mx-4 sm:mx-0">
          <TestimonialsColumn testimonials={firstColumn} duration={30} className="flex-1 min-w-[320px] max-w-[400px]" />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block flex-1 min-w-[320px] max-w-[400px]" 
            duration={38} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block flex-1 min-w-[320px] max-w-[400px]" 
            duration={28} 
          />
        </div>

        {/* Trust indicator */}
        <Reveal>
          <div className="mt-12 flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-4">Junte-se a centenas de alunos satisfeitos</p>
            <div className="flex -space-x-3">
              {TESTIMONIALS.slice(0, 6).map((t, i) => (
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
          </div>
        </Reveal>
      </div>
    </section>
  );
};
