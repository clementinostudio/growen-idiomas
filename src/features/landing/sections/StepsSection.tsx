import React from 'react';
import { Reveal } from '../ui';
import { STEPS } from '../../../constants';

export const StepsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      {/* CONTAINER COM MESMO ESPAÇO LATERAL MOBILE */}
      <div className="max-w-5xl mx-auto px-12 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center justify-center gap-4 mb-16">
            <h2 className="text-2xl font-bold text-center text-gray-900 font-satoshi">
              Sua jornada simplificada
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical Line Mobile / Horizontal Desktop */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-0 md:right-0 md:top-6 md:h-0.5 md:w-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {STEPS.map((step, index) => (
              <Reveal
                key={step.id}
                delay={index * 200}
                className="relative pl-12 md:pl-0 md:pt-12 md:text-center group"
              >
                <div className="absolute left-0 top-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-gray-200 group-hover:border-[#22c55e] transition-colors z-10"></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
