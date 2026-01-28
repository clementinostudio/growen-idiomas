import React from 'react';
import { Reveal, SectionTitle } from '../ui';
import { PAIN_POINTS } from '../../../constants';

export const IdentificationSection: React.FC = () => {
  return (
    <section
      id="para-quem"
      className="pt-4 sm:pt-6 pb-20 sm:pb-28 md:pb-32 bg-white overflow-hidden"
    >
      {/* Linha divisória estilosa no topo */}
      <div className="max-w-7xl mx-auto px-12 sm:px-10 md:px-12 lg:px-16 mb-10 sm:mb-14">
        <div className="flex items-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

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
                    Fale inglês com confiança,
                    <br />
                    <span className="text-[#22c55e]">
                      desde o primeiro dia.
                    </span>
                  </>
                }
                description="Seja no começo da jornada ou depois de outras tentativas, se falar inglês ainda parece difícil, a Growen existe para destravar sua comunicação de forma natural e confiante."
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
                      <p className="text-[#4C5267] font-interTight font-medium leading-relaxed">
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
            <div className="relative w-full max-w-[60vw] sm:max-w-[380px]">

              <img
                src="/arquivos/Melvinquem.svg"
                alt="Mascote Growen"
                className="w-full h-full object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
