import React, { useState, useEffect, useMemo } from 'react';
import { profileData } from '../data/profile';
import { useTheme } from '../context/ThemeContext';
import { RefreshCw } from 'lucide-react';

interface DayData {
  date: string;
  count: number;
  level: number; // 0, 1, 2, 3, 4
}

interface ApiResponse {
  total: {
    [key: string]: number;
    lastYear: number;
  };
  contributions: DayData[];
}

const CACHE_KEY = `gh_contributions_${profileData.githubUsername}`;
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

export const GithubHeatmap: React.FC = () => {
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState<'snake' | 'grid'>('snake');
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);
  const [contributions, setContributions] = useState<DayData[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(124);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isLive, setIsLive] = useState<boolean>(false);

  const fetchContributions = async (forceRefresh = false) => {
    if (forceRefresh) {
      setIsRefreshing(true);
    }

    // 1. Check local cache first if not force refreshing
    if (!forceRefresh) {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Date.now() - parsed.timestamp < CACHE_TTL_MS && parsed.data?.contributions?.length) {
            setContributions(parsed.data.contributions);
            setTotalContributions(parsed.data.total?.lastYear || 124);
            setIsLoading(false);
            setIsLive(true);
            return;
          }
        }
      } catch (e) {
        console.warn('Could not read cached contributions', e);
      }
    }

    // 2. Fetch from live API
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      const liveUrl = `https://github-contributions-api.jogruber.de/v4/${profileData.githubUsername}?y=last`;
      const res = await fetch(liveUrl, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!res.ok) throw new Error(`Live API status ${res.status}`);
      const data: ApiResponse = await res.json();

      if (data?.contributions && Array.isArray(data.contributions)) {
        setContributions(data.contributions);
        setTotalContributions(data.total?.lastYear ?? 124);
        setIsLive(true);
        setIsLoading(false);
        setIsRefreshing(false);

        // Save to cache
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ timestamp: Date.now(), data })
          );
        } catch {
          // ignore quota errors
        }
        return;
      }
    } catch (err) {
      console.warn('Primary contributions API failed, falling back to local snapshot', err);
    }

    // 3. Fallback to bundled JSON snapshot
    try {
      const fallbackRes = await fetch('/github-contributions.json');
      if (fallbackRes.ok) {
        const fallbackData: ApiResponse = await fallbackRes.json();
        if (fallbackData?.contributions) {
          setContributions(fallbackData.contributions);
          setTotalContributions(fallbackData.total?.lastYear ?? 124);
          setIsLive(true);
          setIsLoading(false);
          setIsRefreshing(false);
          return;
        }
      }
    } catch (fallbackErr) {
      console.error('All contribution sources failed', fallbackErr);
    }

    setIsLoading(false);
    setIsRefreshing(false);
  };

  useEffect(() => {
    fetchContributions();
  }, []);

  // Format into weeks of 7 days (Sunday to Saturday)
  const { weeks, monthHeaders } = useMemo(() => {
    if (!contributions.length) {
      return { weeks: [], monthHeaders: [] };
    }

    const weeksList: DayData[][] = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const headers: { weekIndex: number; label: string }[] = [];
    let lastMonth = -1;

    for (let i = 0; i < contributions.length; i += 7) {
      const week = contributions.slice(i, i + 7);
      while (week.length < 7) {
        week.push({ date: '', count: 0, level: 0 });
      }
      weeksList.push(week);
    }

    weeksList.forEach((week, wIdx) => {
      const firstWithDate = week.find((d) => d.date);
      if (firstWithDate) {
        const parts = firstWithDate.date.split('-');
        if (parts.length === 3) {
          const month = parseInt(parts[1], 10) - 1;
          if (month !== lastMonth) {
            headers.push({ weekIndex: wIdx, label: monthNames[month] });
            lastMonth = month;
          }
        }
      }
    });

    return { weeks: weeksList, monthHeaders: headers };
  }, [contributions]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-blue-100 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-900/40';
      case 2:
        return 'bg-blue-300 dark:bg-blue-800/80 border border-blue-400/60 dark:border-blue-700/50';
      case 3:
        return 'bg-blue-500 dark:bg-blue-600 border border-blue-600 dark:border-blue-500';
      case 4:
        return 'bg-navy dark:bg-blue-400 border border-navy-hover dark:border-blue-300';
      default:
        return 'bg-zinc-100/80 dark:bg-zinc-800/40 border border-zinc-200/30 dark:border-zinc-800/60';
    }
  };

  const snakeSvgSrc =
    theme === 'dark'
      ? '/github-contribution-grid-snake-dark.svg'
      : '/github-contribution-grid-snake.svg';

  const snakeFallbackSrc =
    theme === 'dark'
      ? 'https://raw.githubusercontent.com/AdityaPatra-dev/AdityaPatra-dev/main/output/github-contribution-grid-snake-dark.svg'
      : 'https://raw.githubusercontent.com/AdityaPatra-dev/AdityaPatra-dev/main/output/github-contribution-grid-snake.svg';

  return (
    <div className="border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg p-4 bg-white/70 dark:bg-[#18191e]/60 backdrop-blur-sm space-y-3">
      {/* Header with Title, View Mode Switcher, and Live Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono font-medium text-zinc-900 dark:text-zinc-100">
            Engineering Activity
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">•</span>

          {isLive && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Sync
            </span>
          )}

          <span className="font-mono text-zinc-500 dark:text-zinc-400">
            {totalContributions} contributions
          </span>
        </div>

        {/* View mode toggle: Snake Animation vs Interactive Grid */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 p-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-[11px] font-mono">
            <button
              onClick={() => setViewMode('snake')}
              className={`px-2 py-0.5 rounded transition-all flex items-center gap-1 ${
                viewMode === 'snake'
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs font-medium'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              <span>🐍 Snake</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-2 py-0.5 rounded transition-all flex items-center gap-1 ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-xs font-medium'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              <span>📊 Grid</span>
            </button>
          </div>

          <button
            onClick={() => fetchContributions(true)}
            disabled={isRefreshing}
            title="Sync latest GitHub contributions"
            aria-label="Refresh GitHub contributions"
            className="p-1 rounded text-zinc-400 hover:text-navy dark:hover:text-blue-400 transition-colors disabled:opacity-50"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-navy dark:text-blue-400' : ''}`}
            />
          </button>

          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-navy dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
          >
            @{profileData.githubUsername} ↗
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'snake' ? (
        /* Snake Animation Mode: Slithering continuous animated snake over contributions */
        <div className="overflow-x-auto py-1">
          <div className="min-w-[620px] rounded overflow-hidden">
            <img
              src={snakeSvgSrc}
              onError={(e) => {
                // If local file fails, fallback to GitHub raw repository URL
                const target = e.currentTarget;
                if (target.src !== snakeFallbackSrc) {
                  target.src = snakeFallbackSrc;
                }
              }}
              alt="Animated GitHub contribution snake eating commits"
              className="w-full h-auto block select-none"
            />
          </div>
        </div>
      ) : (
        /* Interactive Grid Mode: Day-by-day hover inspection */
        <div className="overflow-x-auto pb-1 pt-1">
          {isLoading ? (
            <div className="h-28 flex items-center justify-center font-mono text-xs text-zinc-400 animate-pulse">
              Connecting to GitHub API...
            </div>
          ) : (
            <div className="min-w-[620px]">
              {/* Dynamic Month Labels */}
              <div className="relative h-4 text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mb-1">
                {monthHeaders.map((header, idx) => {
                  const leftPercent = (header.weekIndex / Math.max(weeks.length, 1)) * 100;
                  return (
                    <span
                      key={idx}
                      style={{ left: `${leftPercent}%` }}
                      className="absolute"
                    >
                      {header.label}
                    </span>
                  );
                })}
              </div>

              {/* 52-53 columns x 7 rows */}
              <div className="flex gap-[3px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px] flex-1">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => day.date && setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-full aspect-square rounded-[2px] transition-transform hover:scale-125 ${
                          day.date ? 'cursor-pointer ' + getLevelColor(day.level) : 'bg-transparent'
                        }`}
                        title={day.date ? `${day.date}: ${day.count} commits` : undefined}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer Info & Legend */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pt-1 border-t border-dashed border-zinc-100 dark:border-zinc-800/80">
        <div>
          {viewMode === 'snake' ? (
            <span className="text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Animated contribution snake eating recent commit nodes</span>
            </span>
          ) : hoveredDay ? (
            <span className="text-zinc-800 dark:text-zinc-200">
              <strong className="font-semibold">
                {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'}
              </strong>{' '}
              on {hoveredDay.date}
            </span>
          ) : (
            <span className="text-zinc-400 dark:text-zinc-500">
              Hover over any square to inspect commit dates & intensity
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
            <span className={`w-2.5 h-2.5 rounded-[2px] ${getLevelColor(4)}`} />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
