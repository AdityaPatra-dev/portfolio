import React from 'react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-dashed border-zinc-200 dark:border-zinc-800 mt-20 text-zinc-500 dark:text-zinc-400 text-xs py-8 font-mono transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-zinc-800 dark:text-zinc-200 font-serif text-sm">{profileData.name}</span>
          <span className="text-zinc-400 dark:text-zinc-600 mx-2">·</span>
          <span>B.Tech CSE (2nd Year) @ KIIT</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-zinc-600 dark:text-zinc-400">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-navy dark:hover:text-blue-400 transition-colors"
          >
            Email
          </a>
          <a
            href={profileData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy dark:hover:text-blue-400 transition-colors"
          >
            CV (PDF)
          </a>
        </div>
      </div>
    </footer>
  );
};
