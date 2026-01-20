import React, { useState, useRef, useEffect } from 'react';
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

  if (!isScrolled && !forcedVisible) return null;

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={handleClick}
      className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50 flex items-center justify-center w-12 h-12 bg-white text-gray-800 rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-transform duration-150 active:scale-95 focus:outline-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTop;
