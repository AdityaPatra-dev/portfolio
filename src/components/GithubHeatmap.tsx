import React, { useState, useMemo } from 'react';

interface DayData {
  date: string;
  count: number;
  level: number; // 0, 1, 2, 3
}

export const GithubHeatmap: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);

  // Generate realistic clustered commit activity: sprint bursts and quiet valleys
  const { weeks, totalContributions } = useMemo(() => {
    const weeksList: DayData[][] = [];
    const today = new Date();
    let total = 0;

    // Distinct engineering sprint periods (days from 0 to 363)
    const sprints = [
      { start: 35, end: 55, intensity: 0.72 },   // SIH 2026 sprint (TAARAK Flutter & SQLite)
      { start: 108, end: 134, intensity: 0.74 }, // CloudArena k3d & Chaos Mesh
      { start: 188, end: 210, intensity: 0.68 }, // LLM / RAG PyTorch experiments
      { start: 246, end: 252, intensity: 0.80 }, // Hackathon weekend
      { start: 285, end: 305, intensity: 0.65 }, // CKA labs & container security
      { start: 334, end: 363, intensity: 0.75 }, // Recent sprint & portfolio infrastructure
    ];

    // Seeded pseudo-random number generator for deterministic stability
    let seed = 428174;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const days: DayData[] = [];
    for (let i = 0; i < 364; i++) {
      const d = new Date();
      d.setDate(today.getDate() - (363 - i));
      const dateStr = d.toISOString().split('T')[0];

      const sprint = sprints.find((sp) => i >= sp.start && i <= sp.end);
      let count = 0;
      let level = 0;

      if (sprint) {
        // High density during project sprint periods (clusters near each other)
        if (rand() < sprint.intensity) {
          const r = rand();
          if (r > 0.75) {
            count = 3;
            level = 3;
          } else if (r > 0.35) {
            count = 2;
            level = 2;
          } else {
            count = 1;
            level = 1;
          }
        }
      } else {
        // Outside sprints: mostly empty, with very rare isolated commit (~2%)
        if (rand() < 0.02) {
          count = 1;
          level = 1;
        }
      }

      total += count;
      days.push({
        date: dateStr,
        count,
        level,
      });
    }

    // Chunk into 52 columns (weeks) of 7 rows (days)
    for (let i = 0; i < 52; i++) {
      weeksList.push(days.slice(i * 7, (i + 1) * 7));
    }

    return { weeks: weeksList, totalContributions: total };
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-blue-100 dark:bg-blue-950/70 border border-blue-200/50 dark:border-blue-900/40';
      case 2:
        return 'bg-blue-300 dark:bg-blue-800/80 border border-blue-400/50 dark:border-blue-700/50';
      case 3:
        return 'bg-navy dark:bg-blue-400 border border-navy-hover dark:border-blue-300';
      default:
        return 'bg-zinc-100/80 dark:bg-zinc-800/40 border border-zinc-200/30 dark:border-zinc-800/60';
    }
  };

  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  return (
    <div className="border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-white/70 dark:bg-[#18191e]/60 backdrop-blur-sm space-y-3">
      {/* Header with Title and Contribution count */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100">
            Engineering Activity
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>
          <span className="font-mono text-zinc-500 dark:text-zinc-400">
            {totalContributions} contributions in the last year
          </span>
        </div>
        <a
          href="https://github.com/AdityaPatra-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-navy dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
        >
          @AdityaPatra-dev ↗
        </a>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto pb-1 pt-1">
        {/* Month labels */}
        <div className="flex justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mb-1 px-1">
          {months.map((m, idx) => (
            <span key={idx}>{m}</span>
          ))}
        </div>

        {/* 52 columns x 7 rows */}
        <div className="flex gap-[3px] min-w-[580px]">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-[3px] flex-1">
              {week.map((day, dIdx) => (
                <div
                  key={dIdx}
                  onMouseEnter={() => setHoveredDay(day)}
                  onMouseLeave={() => setHoveredDay(null)}
                  className={`w-full aspect-square rounded-[2px] transition-transform hover:scale-125 cursor-pointer ${getLevelColor(
                    day.level
                  )}`}
                  title={`${day.date}: ${day.count} commits`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info & Legend */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pt-1 border-t border-dashed border-zinc-100 dark:border-zinc-800/80">
        <div>
          {hoveredDay ? (
            <span className="text-zinc-800 dark:text-zinc-200">
              <strong className="font-semibold">{hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'}</strong> on {hoveredDay.date}
            </span>
          ) : (
            <span className="text-zinc-400 dark:text-zinc-500">
              Hover over a day to inspect commit cadence
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="flex gap-1">
            <span className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(0)}`} />
            <span className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(1)}`} />
            <span className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(2)}`} />
            <span className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(3)}`} />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
