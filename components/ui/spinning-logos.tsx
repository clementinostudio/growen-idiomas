"use client"

import React from 'react';
import { Code, Camera, Palette, Zap, Star } from 'lucide-react';

/**
 * SpinningLogos
 * - componente adaptado a partir do layout de orbes.
 * - usa as imagens em /amuletos como ícones e o logo em /arquivos/logoGrowen.svg
 */
export const SpinningLogos: React.FC = () => {
  const orbitCount = 3;
  const orbitGap = 8; // rem entre órbitas
  const icons = [
    { img: '/amuletos/amuleto1.webp', alt: 'Amuleto 1' },
    { img: '/amuletos/amuleto2.webp', alt: 'Amuleto 2' },
    { img: '/amuletos/amuleto3.webp', alt: 'Amuleto 3' },
    { img: '/amuletos/amuleto4.webp', alt: 'Amuleto 4' },
    { img: '/amuletos/amuleto5.webp', alt: 'Amuleto 5' },
    { img: '/amuletos/amuleto6.webp', alt: 'Amuleto 6' },
    { img: '/amuletos/amuleto7.webp', alt: 'Amuleto 7' },
    { img: '/amuletos/amuleto8.webp', alt: 'Amuleto 8' },
  ];

  const iconsPerOrbit = Math.ceil(icons.length / orbitCount);

  return (
    <div className="flex justify-center items-center p-6 w-full">
      <div className="relative w-[36rem] h-[36rem]">
        {/* Centro com logo (sem fundo) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <img src="/arquivos/logoGrowen.svg" alt="Growen" className="w-28 h-28 object-contain" />
        </div>

        {/* Orbits geradas dinamicamente */}
        {[...Array(orbitCount)].map((_, orbitIdx) => {
          const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
          const animationDuration = 12 + orbitIdx * 6;

          return (
            <div
              key={orbitIdx}
              className="absolute rounded-full border border-gray-200/30 dark:border-gray-700/20"
              style={{
                width: size,
                height: size,
                left: `calc(50% - ${parseFloat(size) / 2}rem)`,
                top: `calc(50% - ${parseFloat(size) / 2}rem)`,
                animation: `spin ${animationDuration}s linear infinite`,
                animationDirection: orbitIdx % 2 === 1 ? 'reverse' : 'normal',
              }}
            >
              {icons
                .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                .map((it, iconIdx) => {
                  const angleStep = (2 * Math.PI) / iconsPerOrbit;
                  const angle = iconIdx * angleStep;
                  const x = 50 + 50 * Math.cos(angle);
                  const y = 50 + 50 * Math.sin(angle);

                  return (
                    <div
                      key={iconIdx}
                      className="absolute rounded-full shadow-sm overflow-hidden"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <img src={it.img} alt={it.alt} className="w-16 h-16 rounded-full object-cover" />
                    </div>
                  );
                })}
            </div>
          );
        })}

        {/* Keyframes locais para animação */}
        <style>{`\n          @keyframes spin {\n            from { transform: rotate(0deg); }\n            to { transform: rotate(360deg); }\n          }\n        `}</style>
      </div>
    </div>
  );
};

export default SpinningLogos;
