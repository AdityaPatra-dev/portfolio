import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { SkillsPage } from './pages/SkillsPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { NotesPage } from './pages/NotesPage';
import { NoteDetailPage } from './pages/NoteDetailPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#f7f7f5] dark:bg-[#0c0d0f] text-[#1c1d21] dark:text-[#e4e4e7] transition-colors duration-200">
          {/* Central architectural framed container with dashed borders matching Samworks */}
          <div className="max-w-3xl w-full mx-auto border-x border-dashed border-zinc-200 dark:border-zinc-800 min-h-screen flex flex-col bg-[#fbfbf9] dark:bg-[#121316] shadow-sm">
            <Navbar />
            <main className="flex-grow px-4 sm:px-6 py-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<Navigate to="/" replace />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:id" element={<ProjectDetailPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/notes/:slug" element={<NoteDetailPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
