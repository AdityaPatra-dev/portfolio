import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { skillGroupsData } from '../data/skills';

export const SkillsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'used_in_projects' | 'learning_exploring'>('all');

  return (
    <div className="space-y-8">
      <PageHeader
        title="Skills & Technologies"
        description="Categorized tools and technologies I have worked with. To keep things honest, I distinguish between tools used in actual projects versus concepts actively being explored."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-mono border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-4 transition-colors">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-full text-xs transition-all ${
            filter === 'all'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
              : 'bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-dashed border-zinc-200 dark:border-zinc-700'
          }`}
        >
          All Skills
        </button>
        <button
          onClick={() => setFilter('used_in_projects')}
          className={`px-3 py-1 rounded-full text-xs transition-all ${
            filter === 'used_in_projects'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
              : 'bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-dashed border-zinc-200 dark:border-zinc-700'
          }`}
        >
          Used in Projects
        </button>
        <button
          onClick={() => setFilter('learning_exploring')}
          className={`px-3 py-1 rounded-full text-xs transition-all ${
            filter === 'learning_exploring'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium'
              : 'bg-zinc-100/80 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-dashed border-zinc-200 dark:border-zinc-700'
          }`}
        >
          Active Learning
        </button>
      </div>

      {/* Skill Categories */}
      <div className="space-y-8">
        {skillGroupsData.map((group) => {
          const visibleSkills = group.skills.filter((s) => {
            if (filter === 'all') return true;
            return s.status === filter;
          });

          if (visibleSkills.length === 0) return null;

          return (
            <section key={group.id} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-serif italic text-zinc-900 dark:text-zinc-100 border-b border-dashed border-zinc-200 dark:border-zinc-800 pb-2">
                {group.title}
              </h2>

              <div className="space-y-2 text-xs">
                {visibleSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-2 border-b border-dashed border-zinc-100 dark:border-zinc-800/80 last:border-0"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-dotted border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 bg-zinc-50/80 dark:bg-zinc-900/50">
                        {skill.status === 'used_in_projects' ? 'project verified' : 'actively learning'}
                      </span>
                    </div>

                    {skill.note && (
                      <span className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-right max-w-md">
                        {skill.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-6 text-xs text-zinc-500 dark:text-zinc-400 font-mono leading-relaxed">
        Note: I do not list arbitrary percentage bars (e.g. "Docker 85%") because skills depend heavily on problem scope. Everything above is backed by university coursework, personal code repositories, or hands-on labs.
      </div>
    </div>
  );
};
