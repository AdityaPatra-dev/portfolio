import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { engineeringNotesData } from '../data/notes';
import { ArrowLeft } from 'lucide-react';

export const NoteDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const note = engineeringNotesData.find((n) => n.slug === slug);

  if (!note) {
    return <Navigate to="/notes" replace />;
  }

  return (
    <article className="space-y-8">
      <div>
        <Link
          to="/notes"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-blue-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Notes</span>
        </Link>

        <div className="border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-5 space-y-2">
          <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {note.category} · {note.date} · {note.readTime}
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug">
            {note.title}
          </h1>
          <p className="text-xs sm:text-sm font-mono text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
            "{note.summary}"
          </p>
        </div>
      </div>

      {/* Takeaways */}
      <div className="border border-dashed border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#18191e]/50 p-5 rounded-lg space-y-2 transition-colors">
        <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 font-semibold">
          Key Takeaways
        </h2>
        <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
          {note.keyTakeaways.map((takeaway, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-navy dark:text-blue-400 font-mono">—</span>
              <span>{takeaway}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Prose */}
      <div className="space-y-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
        {note.content.map((paragraph, idx) => (
          <p key={idx}>
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tags */}
      <div className="pt-6 border-t border-dashed border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500 dark:text-zinc-400 flex flex-wrap gap-1.5">
        <span className="self-center mr-1">Tags:</span>
        {note.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded border border-dotted border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900/50 text-[10px]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="pt-4 flex items-center justify-between text-xs font-mono">
        <Link
          to="/notes"
          className="text-navy dark:text-blue-400 hover:text-navy-hover dark:hover:text-blue-300 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-navy dark:hover:decoration-blue-400"
        >
          ← All notes
        </Link>
        <Link
          to="/projects"
          className="text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-white"
        >
          Related projects →
        </Link>
      </div>
    </article>
  );
};
