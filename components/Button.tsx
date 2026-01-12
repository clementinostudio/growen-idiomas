import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, fullWidth, className = '', ...props }) => {
  return (
    <button
      className={`
        group flex items-center justify-center gap-2 
        bg-green-600 hover:bg-green-500 text-white font-bold 
        py-4 px-8 rounded-full text-lg transition-all duration-300 
        transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </button>
  );
};