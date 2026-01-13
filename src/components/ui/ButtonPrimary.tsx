import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonPrimaryProps {
  text: string;
  onClick?: () => void;
  href?: string;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text,
  onClick,
  href,
}) => {
  const content = (
    <>
      <span className="font-satoshi font-bold text-lg tracking-wide relative">
        {text}
      </span>
      <div className="relative w-12 h-12 bg-black rounded-full flex items-center justify-center overflow-hidden">
        <ArrowRight className="w-6 h-6 text-white" />
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group relative flex items-center gap-4 pl-8 pr-2 py-2 bg-[#22c55e] hover:bg-[#1eb053] text-white rounded-full transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-4 pl-8 pr-2 py-2 bg-[#22c55e] hover:bg-[#1eb053] text-white rounded-full transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]"
    >
      {content}
    </button>
  );
};
