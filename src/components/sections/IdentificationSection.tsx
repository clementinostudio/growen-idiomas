import React from 'react';
import { Reveal, SectionTitle } from '../ui';
import { PAIN_POINTS } from '../../constants';

export const IdentificationSection: React.FC = () => {
  return (
    <section
      id="para-quem"
      className="py-20 sm:py-28 md:py-32 bg-white overflow-hidden"
    >
      {/* Container com padding maior só no mobile */}
      <div className="max-w-7xl mx-auto px-12 sm:px-10 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 gap-x-12 items-center">

          {/* LEFT: CONTENT */}
          <div>
            <Reveal>
              <SectionTitle
                label="Para quem é a Growen?"
                title={
                  <>
                    Você entende inglês.
                    <br />
                    <span className="text-[#22c55e]">
                      Mas trava na hora de falar.
                    </span>
                  </>
                }
                description="Se você já tentou outros cursos, decorou regras, fez exercícios e mesmo assim fica inseguro ao se comunicar, a Growen foi criada exatamente para você."
              />
            </Reveal>

            <div className="mt-10 sm:mt-14 space-y-8 sm:space-y-10">
              {PAIN_POINTS.map((point, index) => (
                <Reveal key={index} delay={200 + index * 100}>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 group max-w-full sm:max-w-xl">
                    {/* Icon */}
                    <div className="shrink-0 pt-1">
                      <point.icon className="w-6 h-6 text-gray-400 group-hover:text-[#22c55e] transition-colors duration-200" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {point.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <Reveal delay={300} className="relative w-full flex justify-center lg:justify-end px-6 sm:px-4">
            <div className="relative w-full max-w-[90vw] sm:max-w-[620px]">

              <img
                src="/arquivos/MelvinPunho.svg"
                alt="Mascote Growen"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
