import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ContactTileProps {
  label: string;
  sublabel: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}

export const ContactTile: React.FC<ContactTileProps> = ({
  label,
  sublabel,
  href,
  icon,
  external = true,
}) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group relative flex flex-col justify-between p-3.5 rounded-lg border border-dashed border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white/70 dark:bg-[#18191e]/50 hover:bg-white dark:hover:bg-[#18191e] transition-all duration-150 hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between text-zinc-600 dark:text-zinc-400">
        <div className="p-1.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors">
          {icon}
        </div>
        <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-navy dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      </div>

      <div className="mt-3">
        <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors">
          {label}
        </div>
        <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
          {sublabel}
        </div>
      </div>
    </a>
  );
};
