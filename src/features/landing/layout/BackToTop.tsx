import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useSmoothScroll, useScrollPosition } from '../../../hooks';

export const BackToTop: React.FC = () => {
  const isScrolled = useScrollPosition(200);
  const { scrollToTop } = useSmoothScroll();
  const [forcedVisible, setForcedVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = () => {
    setForcedVisible(true);
    scrollToTop();
    timerRef.current = window.setTimeout(() => setForcedVisible(false), 700);
  };

  const handleScheduleClick = () => {
    window.open(
      'https://wa.me/5543996536535?text=Olá!%20😊%0AGostaria%20de%20agendar%20uma%20aula%20teste%20gratuita%20de%20inglês.%20Poderia%20me%20passar%20mais%20informações?',
      '_blank'
    );
  };

  if (!isScrolled && !forcedVisible) return null;

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50 flex flex-col items-center gap-3">
      {/* Botão de Agendar Aula */}
      <button
        type="button"
        onClick={handleScheduleClick}
        className="group flex items-center gap-3 pl-5 pr-2 py-2 bg-[#7ed957] hover:bg-[#6bc748] text-white rounded-full transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] shadow-lg"
      >
        <span className="font-satoshi font-bold text-sm tracking-wide whitespace-nowrap">
          Agendar aula experimental
        </span>
        <div className="relative w-10 h-10 bg-black rounded-full flex items-center justify-center overflow-hidden">
          <ArrowRight className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Botão de Voltar ao Topo */}
      <button
        type="button"
        aria-label="Voltar ao topo"
        onClick={handleClick}
        className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full shadow-lg hover:bg-gray-900 hover:shadow-xl transition-all duration-200 active:scale-95 focus:outline-none cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
