import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className="mb-8 pb-6 border-b border-dashed border-zinc-200 dark:border-zinc-800 transition-colors">
      <h1 className="text-3xl sm:text-4xl font-serif italic tracking-tight text-zinc-900 dark:text-zinc-50 font-normal mb-2">
        {title}
      </h1>
      {description && (
        <p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
