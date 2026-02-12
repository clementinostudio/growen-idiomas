"use client"

import React from 'react';

export const SpinningLogos: React.FC = () => {
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

  // Divide os ícones em duas órbitas (4 em cada)
  const orbits = [
    icons.slice(0, 4),
    icons.slice(4, 8)
  ];

  return (
    <div className="flex justify-center items-center min-h-[50rem] w-full overflow-hidden bg-transparent">
      {/* Container Principal */}
      <div className="relative flex items-center justify-center w-[45rem] h-[45rem]">
        
        {/* Logo Central Fixa */}
        <div className="absolute z-50 pointer-events-none">
          <img 
            src="/arquivos/logoGrowen.svg" 
            alt="Growen" 
            className="w-24 h-24 object-contain" 
          />
        </div>

        {/* Mapeamento das Órbitas */}
          {orbits.map((orbitItems, orbitIdx) => {
          const radius = orbitIdx === 0 ? 10 : 15; // Raio menor e raio maior (externa reduzida)
          const duration = orbitIdx === 0 ? 30 : 45; // Velocidades diferentes
          
          // Lógica de direção: Órbita 0 (interna) normal, Órbita 1 (externa) reverse
          const direction = orbitIdx % 2 === 0 ? 'normal' : 'reverse';

          return (
            <div
              key={orbitIdx}
              // borda menos tracejada (mais sólida e sutil)
              className="absolute rounded-full border-2 border-solid border-gray-400/30 dark:border-gray-500/20"
              style={{
                width: `${radius * 2}rem`,
                height: `${radius * 2}rem`,
                animation: `orbit ${duration}s linear infinite`,
                animationDirection: direction,
                transformOrigin: '50% 50%',
                willChange: 'transform',
              }}
            >
              {orbitItems.map((it, iconIdx) => {
                const angle = (iconIdx * (360 / orbitItems.length));
                
                return (
                  <div
                    key={iconIdx}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      // Posicionamento no raio da órbita
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}rem) rotate(-${angle}deg)`,
                    }}
                  >
                    {/* Container do Amuleto */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white shadow-lg overflow-hidden bg-white group hover:scale-110 transition-transform" style={{ transformStyle: 'preserve-3d' }}>
                      <img 
                        src={it.img} 
                        alt={it.alt} 
                        className="w-full h-full object-cover"
                        style={{
                            // Animação interna para manter a imagem sempre reta
                            animation: `counterOrbit ${duration}s linear infinite`,
                            // Se a órbita vai pra frente, a imagem compensa indo pra trás (e vice-versa)
                            animationDirection: direction === 'normal' ? 'reverse' : 'normal',
                            backfaceVisibility: 'hidden',
                            willChange: 'transform',
                            // Distribui os ícones ao longo da animação para evitar agrupamentos visuais
                            animationDelay: `${-(angle / 360) * duration}s`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Definição Global dos Keyframes */}
        <style>{`
          @keyframes orbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes counterOrbit {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default SpinningLogos;