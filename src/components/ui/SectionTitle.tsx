import React from 'react';

interface SectionTitleProps {
  label: string;
  title: string;
  description?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  label,
  title,
  description,
}) => (
  <div>
    <span className="text-[#22c55e] font-bold tracking-widest uppercase text-xs mb-6 block">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl font-satoshi font-bold mb-6 text-gray-900 leading-tight">
      {title}
    </h2>
    {description && (
      <p className="text-gray-600 mb-10 leading-relaxed text-lg">
        {description}
      </p>
    )}
  </div>
);
