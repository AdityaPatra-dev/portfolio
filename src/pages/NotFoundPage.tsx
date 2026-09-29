import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-20 max-w-md space-y-4">
      <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
        404 Not Found
      </div>
      <h1 className="text-xl font-semibold text-zinc-100">
        Page not found
      </h1>
      <p className="text-xs text-zinc-400 leading-relaxed">
        The requested URL was not found on this site.
      </p>
      <div className="pt-2 text-xs font-mono">
        <Link
          to="/"
          className="text-zinc-300 hover:text-white underline underline-offset-4"
        >
          ← Return to homepage
        </Link>
      </div>
    </div>
  );
};
