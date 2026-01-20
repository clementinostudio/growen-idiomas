import React from 'react';
import { motion } from 'motion/react';
import { TestimonialsColumn } from '@/components/ui/TestimonialsColumn';
import { TESTIMONIALS } from '../../../constants';
import { Reveal } from '../ui';

// Expandindo os depoimentos para preencher as colunas
const testimonialsData = [
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS
].map((t, idx) => ({
  ...t,
  // Mantemos a estrutura compatível com TestimonialsColumn
}));

// Dividindo em colunas
const firstColumn = testimonialsData.slice(0, 4);
const secondColumn = testimonialsData.slice(4, 8);
const thirdColumn = testimonialsData.slice(8, 12);

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-gray-50 py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <Reveal>
          <div className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-12">
            <div className="flex justify-center mb-6">
              <span className="bg-white border border-gray-200 rounded-full px-4 py-1 text-sm font-medium text-gray-600 shadow-sm">
                Depoimentos
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center text-gray-900 font-satoshi mb-6">
              O que dizem sobre nós
            </h2>
            <p className="text-center text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
              Veja como nossos alunos estão transformando suas vidas e carreiras através do inglês.
            </p>
          </div>
        </Reveal>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[700px] overflow-hidden -mx-4 sm:mx-0">
          <TestimonialsColumn testimonials={firstColumn} duration={25} className="flex-1 min-w-[300px]" />
          <TestimonialsColumn 
            testimonials={secondColumn} 
            className="hidden md:block flex-1 min-w-[300px]" 
            duration={35} 
          />
          <TestimonialsColumn 
            testimonials={thirdColumn} 
            className="hidden lg:block flex-1 min-w-[300px]" 
            duration={30} 
          />
        </div>
      </div>
    </section>
  );
};
