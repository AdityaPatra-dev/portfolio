import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filterCategories = [
    { id: 'all', label: 'All' },
    { id: 'cloud_devops', label: 'Cloud & DevOps' },
    { id: 'ml_ai', label: 'Machine Learning & AI' },
    { id: 'software', label: 'Software' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Projects"
        description="Systems, infrastructure sandboxes, and machine learning pipelines I have built or am currently developing."
      />

      {/* Filter Tabs (Simple text buttons) */}
      <div className="flex flex-wrap items-center gap-5 text-xs font-mono border-b border-zinc-200 dark:border-zinc-800 pb-3 transition-colors">
        {filterCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
              className={`transition-colors ${
                isActive
                  ? 'text-navy dark:text-blue-400 font-semibold underline underline-offset-8 decoration-navy dark:decoration-blue-400'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {cat.label} ({cat.id === 'all' ? projectsData.length : projectsData.filter(p => p.category === cat.id).length})
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 font-mono leading-relaxed">
        Note: Completed projects link to working code repositories and test logs. Active learning projects (such as the GFG Cloud Foundation track) are explicitly marked as in progress.
      </div>
    </div>
  );
};
