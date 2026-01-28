import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../ui';
import { FAQ_ITEMS } from '../../../constants';

export const FAQSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      {/* CONTAINER COM MESMO ESPAÇO LATERAL DO MOBILE */}
      <div className="max-w-2xl mx-auto px-12 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-fustat font-semibold mb-12 text-left text-gray-900 tracking-tight">
            Dúvidas Frequentes
          </h2>
        </Reveal>
        <div className="flex flex-col">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <Reveal key={faq.id} delay={index * 50}>
                <div className="border-b border-gray-200 last:border-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                    aria-expanded={isOpen}
                    aria-label={`${isOpen ? 'Fechar' : 'Abrir'} pergunta: ${faq.question}`}
                  >
                    <span
                      className={`font-medium text-lg transition-colors duration-300 ${
                        isOpen
                          ? 'text-[#22c55e]'
                          : 'text-gray-700 group-hover:text-gray-900'
                      }`}
                    >
                      {faq.question}
                    </span>

                    <div
                      className={`transition-transform duration-500 ease-out ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <ChevronDown
                        className={`w-5 h-5 ${
                          isOpen
                            ? 'text-[#22c55e]'
                            : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`
                      grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pr-8 text-gray-600 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
