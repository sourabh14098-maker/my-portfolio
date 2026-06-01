import React from 'react';
import Reveal from './Reveal';

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function PageHeader({
  label,
  title,
  description,
  align = 'center',
}: PageHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <Reveal className={`mb-14 md:mb-16 max-w-2xl ${alignClass}`}>
      <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.2em] font-medium mb-3">
        {label}
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-[-0.02em] text-white leading-tight">
        {title}
      </h1>
      {description && (
        <p className="text-zinc-500 text-sm md:text-base mt-4 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
