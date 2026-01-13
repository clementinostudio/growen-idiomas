import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = "" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
