import React from 'react';
import { Reveal, SectionTitle } from '../ui';
import { PAIN_POINTS } from '../../constants';

export const IdentificationSection: React.FC = () => {
  return (
    <section
      id="para-quem"
      className="py-28 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

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

            <div className="mt-14 space-y-10">
              {PAIN_POINTS.map((point, index) => (
                <Reveal key={index} delay={200 + index * 100}>
                  <div className="flex gap-6 group max-w-xl">
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
          <Reveal delay={300} className="relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px]">
              {/* Context Badge */}
              <div className="absolute top-10 left-10 z-10 bg-white border border-gray-200 px-4 py-2 rounded-xl text-sm text-gray-700 shadow-sm">
                Identificação real, sem enrolação
              </div>

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
