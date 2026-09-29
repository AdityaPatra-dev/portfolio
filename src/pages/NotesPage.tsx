import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { engineeringNotesData } from '../data/notes';

export const NotesPage: React.FC = () => {
  return (
    <div className="space-y-10 max-w-3xl">
      <PageHeader
        title="Engineering Notes"
        description="Writeups and notes from actual projects, troubleshooting sessions, and learning deep dives."
      />

      <div className="space-y-6">
        {engineeringNotesData.map((note) => (
          <article key={note.id} className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] p-5 rounded shadow-[0_1px_3px_rgba(0,0,0,0.02)] dark:shadow-none space-y-2 transition-colors">
            <div className="flex items-baseline justify-between gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">{note.category}</span>
              <span>{note.date} · {note.readTime}</span>
            </div>

            <h2 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:text-navy dark:hover:text-blue-400 transition-colors">
              <Link to={`/notes/${note.slug}`}>
                {note.title}
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
                Read note →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
