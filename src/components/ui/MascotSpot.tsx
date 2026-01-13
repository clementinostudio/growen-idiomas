import React from 'react';

interface MascotSpotProps {
  className?: string;
}

export const MascotSpot: React.FC<MascotSpotProps> = ({ className }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <img
      src="/arquivos/mascote/mascote.png"
      alt="Mascote Growen"
      className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
    />
  </div>
);
