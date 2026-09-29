import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { engineeringNotesData } from '../data/notes';

export const NotesPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Engineering Notes"
        description="Writeups and technical notes from actual projects, troubleshooting sessions, and learning deep dives."
      />

      <div className="space-y-4">
        {engineeringNotesData.map((note) => (
          <article
            key={note.id}
            className="group border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 hover:bg-white dark:hover:bg-[#18191e] p-5 rounded-lg space-y-2 transition-all"
          >
            <div className="flex items-baseline justify-between gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="text-zinc-700 dark:text-zinc-300 font-medium px-2 py-0.5 rounded border border-dotted border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 text-[10px]">
                {note.category}
              </span>
              <span>{note.date} · {note.readTime}</span>
            </div>

            <h2 className="text-base sm:text-lg font-serif tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-navy dark:group-hover:text-blue-400 transition-colors">
              <Link to={`/notes/${note.slug}`} className="flex items-center gap-1.5">
                <span>{note.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-navy dark:text-blue-400" />
              </Link>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {note.summary}
            </p>

            <div className="pt-2 text-xs font-mono">
              <Link
                to={`/notes/${note.slug}`}
                className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 font-medium underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400 transition-colors"
              >
                Read deep-dive →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
