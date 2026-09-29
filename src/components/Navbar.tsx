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
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-[#fbfbf9]/90 dark:bg-[#121316]/90 backdrop-blur-sm sticky top-0 z-40 transition-colors">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Author / Logo */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-navy dark:hover:text-blue-400 transition-colors"
        >
          {profileData.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? 'text-navy dark:text-blue-400 font-semibold underline underline-offset-8 decoration-navy dark:decoration-blue-400'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-zinc-100'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href={profileData.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-zinc-100 transition-colors"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          </a>

          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-zinc-600 dark:text-zinc-400 hover:text-navy dark:hover:text-zinc-100 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <div className="pl-1 border-l border-zinc-200 dark:border-zinc-800">
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
            className="text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700 px-2 py-1 rounded bg-white dark:bg-zinc-800"
          >
            CV
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18191e] px-5 py-4 space-y-3 text-sm shadow-sm transition-colors">
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
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 font-mono">
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
