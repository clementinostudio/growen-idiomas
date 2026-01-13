import React from 'react';
import { Reveal, SectionTitle } from '../ui';
import { PAIN_POINTS } from '../../constants';

export const IdentificationSection: React.FC = () => {
  return (
    <section id="para-quem" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div>
            <Reveal>
              <SectionTitle
                label="Para quem é a Growen?"
                title="A Growen Idiomas é para você que sente que entende inglês, mas não consegue falar"
                description="Para quem já tentou outros cursos, decorou regras, fez exercícios e mesmo assim trava quando precisa se comunicar. Se o seu objetivo é falar com confiança e naturalidade, você está no lugar certo."
              />
            </Reveal>

            <div className="space-y-8">
              {PAIN_POINTS.map((point, index) => (
                <Reveal key={index} delay={300 + index * 100}>
                  <div className="flex gap-6 group">
                    <div className="shrink-0 pt-1">
                      <point.icon className="w-6 h-6 text-gray-400 group-hover:text-[#22c55e] transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed max-w-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <Reveal delay={300} className="relative w-full flex justify-center lg:justify-end">
            <div className="aspect-square w-full max-w-[700px] relative">
              <img
                src="/arquivos/MelvinPunho.svg"
                alt="Mascote Growen"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
