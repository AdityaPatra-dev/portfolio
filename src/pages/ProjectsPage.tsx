import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'cloud_devops', label: 'Cloud & DevOps' },
    { id: 'ml_ai', label: 'Machine Learning' },
    { id: 'software', label: 'Systems Software' },
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

      {/* Filter Tabs (Dashed border + active pill) */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-mono border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-4 transition-colors">
        {filterCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = cat.id === 'all' ? projectsData.length : projectsData.filter(p => p.category === cat.id).length;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
              className={`px-3 py-1 rounded-full text-xs transition-all ${
                isActive
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
                  : 'bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-dashed border-zinc-200 dark:border-zinc-700'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Projects Grid with Mockup headers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="pt-6 border-t border-dashed border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400 font-mono leading-relaxed">
        Note: Completed projects link to working code repositories and test logs. Active learning projects (such as the GFG Cloud Foundation track) are explicitly marked as in progress.
      </div>
    </div>
  );
};
