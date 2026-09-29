import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';
import { ThemeToggle } from './ThemeToggle';
import { profileData } from '../data/profile';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
    { name: 'Notes', path: '/notes' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full border-b border-dashed border-zinc-200 dark:border-zinc-800 bg-[#fbfbf9]/90 dark:bg-[#121316]/90 backdrop-blur sticky top-0 z-40 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Name / Logo */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="font-serif text-lg sm:text-xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-navy dark:hover:text-blue-400 transition-colors"
        >
          {profileData.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-xs">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-1 transition-colors flex flex-col items-center ${
                  isActive
                    ? 'text-navy dark:text-blue-400 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-zinc-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive ? (
                    <span className="w-1 h-1 rounded-full bg-navy dark:bg-blue-400 mt-0.5" />
                  ) : (
                    <span className="w-1 h-1 rounded-full bg-transparent mt-0.5" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <a
            href={profileData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-0.5 text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-zinc-100 transition-colors py-1"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
          </a>

          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-zinc-100 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <div className="pl-2 border-l border-dashed border-zinc-200 dark:border-zinc-800">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Action Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <a
            href={profileData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-zinc-700 dark:text-zinc-300 border border-dashed border-zinc-300 dark:border-zinc-700 px-2 py-0.5 rounded bg-white/70 dark:bg-zinc-800/70"
          >
            CV ↗
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-dashed border-zinc-200 dark:border-zinc-800 bg-[#fbfbf9] dark:bg-[#18191e] px-5 py-4 space-y-3 text-sm shadow-sm transition-colors">
          {navLinks.map((link) => (
            <div key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-1 transition-colors ${
                    isActive ? 'text-navy dark:text-blue-400 font-semibold' : 'text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </div>
          ))}
          <div className="pt-2 border-t border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 font-mono">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy dark:hover:text-white"
            >
              GitHub ↗
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy dark:hover:text-white"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-navy dark:hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
