"use client"

import React from 'react';
import { 
  Facebook, 
  Youtube, 
  Gamepad2, 
  Code, 
  Palette, 
  Camera,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const SpinningLogos: React.FC = () => {
  const radiusToCenterOfIcons = 190;
  const iconWrapperWidth = 85;
  const ringPadding = 40;

  const toRadians = (degrees: number): number => (Math.PI / 180) * degrees;

  const logos = [
    { src: '/amuletos/1.jpeg', alt: 'Gramática e Tradução' },
    { src: '/amuletos/2.jpeg', alt: 'Método Direto' },
    { src: '/amuletos/3.jpeg', alt: 'Método Audiolingual' },
    { src: '/amuletos/4.jpeg', alt: 'Abordagem Comunicativa' },
    { src: '/amuletos/5.jpeg', alt: 'Método Lexical' },
    { src: '/amuletos/6.jpeg', alt: 'Abordagem Natural' },
    { src: '/amuletos/7.jpeg', alt: 'Task-Based Learning' },
    { src: '/amuletos/8.jpeg', alt: 'Solução Resiliente' },
  ];

  return (
    <div className="flex justify-center items-center p-8 overflow-hidden w-full">
      <div
        style={{
          width: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
          height: radiusToCenterOfIcons * 2 + iconWrapperWidth + ringPadding,
        }}
        // Minimalist: removed bg, lighter border, maybe dashed to imply orbit
        className="relative rounded-full border border-dashed border-gray-200"
      >
        <div className="absolute inset-0 animate-spin-slow">
          {logos.map((logo, index) => {
            const angle = (360 / logos.length) * index;
            return (
              <div
                key={index}
                style={{
                  top: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.sin(toRadians(angle))}px)`,
                  left: `calc(50% - ${iconWrapperWidth / 2}px + ${radiusToCenterOfIcons * Math.cos(toRadians(angle))}px)`,
                  width: iconWrapperWidth,
                  height: iconWrapperWidth,
                }}
                className={cn(
                  "absolute flex items-center justify-center rounded-full shadow-sm border border-gray-100 animate-spin-reverse overflow-hidden bg-white"
                )}
                aria-label={`${logo.alt} logo`}
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Minimalist Center: Smaller, cleaner, less border/shadow */}
          <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-sm border border-gray-100 p-6">
            <img 
              src="/arquivos/logoGrowen.svg" 
              alt="Growen Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
