
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2 className="font-serif text-3xl md:text-5xl text-brand-espresso mb-6">{title}</h2>
      {subtitle && <p className="font-sans text-brand-charcoal/60 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      <div className={`h-[1px] bg-brand-gold/30 w-24 mt-8 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeader;
