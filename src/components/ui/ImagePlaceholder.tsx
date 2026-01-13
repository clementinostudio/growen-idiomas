import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  iconScale?: number;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  className,
  iconScale = 1,
}) => (
  <div
    className={`bg-gray-100 border border-transparent flex flex-col items-center justify-center text-gray-400 overflow-hidden transition-colors duration-500 group-hover:bg-gray-200 ${className}`}
  >
    <ImageIcon
      className={`w-8 h-8 mb-2 opacity-50 transition-transform duration-700 group-hover:scale-110`}
      style={{ transform: `scale(${iconScale})` }}
    />
    <span className="text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
      {label}
    </span>
  </div>
);
