import React from 'react';
import { Reveal } from '../ui';

interface CTASectionProps {
  onCTAClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onCTAClick }) => {
  return (
    <section
      id="cta-section"
      className="py-32 bg-[#22c55e] text-center px-4 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-fustat font-semibold text-white mb-6 tracking-tight">
              Comece a falar.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-green-100 font-interTight text-xl font-medium mb-12">
              Sem matrículas caras, sem contratos abusivos. Apenas inglês real.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <button
              onClick={onCTAClick}
              aria-label="Agendar aula experimental"
              className="bg-black text-white hover:bg-gray-900 font-bold py-4 px-12 rounded-full text-lg transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-black/20"
            >
              Agendar Aula Experimental
            </button>
          </Reveal>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 p-24 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};
