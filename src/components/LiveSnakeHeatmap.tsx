import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export interface DayData {
  date: string;
  count: number;
  level: number; // 0..4
}

interface LiveSnakeHeatmapProps {
  weeks: DayData[][];
  monthHeaders: { weekIndex: number; label: string }[];
  theme: 'dark' | 'light';
  onHoverDay: (day: DayData | null) => void;
  isLoading: boolean;
}

interface Point {
  x: number;
  y: number;
}

interface MoveStep {
  dir: Point;
  pos: Point;
}

const CELL_SIZE = 11;
const CELL_PITCH = 14;
const OFFSET_X = 16;
const OFFSET_Y = 20;
const INITIAL_LENGTH = 4;
const MAX_LENGTH = 7;
const TICK_MS = 115;

export const LiveSnakeHeatmap: React.FC<LiveSnakeHeatmapProps> = ({
  weeks,
  monthHeaders,
  theme,
  onHoverDay,
  isLoading,
}) => {
  const cols = weeks.length;
  const rows = 7;

  // Find first active commit to spawn snake naturally
  const findInitialSpawn = useCallback((): { startCol: number; startRow: number } => {
    if (cols === 0) return { startCol: 2, startRow: 3 };
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < 7; r++) {
        if (weeks[c]?.[r]?.level > 0) {
          return { startCol: Math.max(c - 2, 0), startRow: r };
        }
      }
    }
    return { startCol: 2, startRow: 3 };
  }, [cols, weeks]);

  // Snake coordinates
  const [snake, setSnake] = useState<Point[]>(() => {
    return [
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
    ];
  });
  const [direction, setDirection] = useState<Point>({ x: 1, y: 0 });
  const [eatenKeys, setEatenKeys] = useState<Set<string>>(new Set());
  const [eatenCount, setEatenCount] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [lastEatenBurst, setLastEatenBurst] = useState<Point | null>(null);

  const snakeRef = useRef<Point[]>(snake);
  snakeRef.current = snake;
  const directionRef = useRef<Point>(direction);
  directionRef.current = direction;
  const eatenKeysRef = useRef<Set<string>>(eatenKeys);
  eatenKeysRef.current = eatenKeys;

  // Reset snake to intelligent start point
  const resetGame = useCallback(() => {
    if (cols === 0) return;
    const { startCol, startRow } = findInitialSpawn();
    const initialSnake: Point[] = [];
    for (let i = 0; i < INITIAL_LENGTH; i++) {
      initialSnake.push({ x: Math.max(startCol + (INITIAL_LENGTH - 1 - i), 0), y: startRow });
    }
    setSnake(initialSnake);
    snakeRef.current = initialSnake;
    setDirection({ x: 1, y: 0 });
    directionRef.current = { x: 1, y: 0 };
    setEatenKeys(new Set());
    eatenKeysRef.current = new Set();
    setEatenCount(0);
    setLastEatenBurst(null);
  }, [cols, findInitialSpawn]);

  // Run initial spawn reset when weeks load for the first time
  const hasInitializedRef = useRef(false);
  useEffect(() => {
    if (cols > 0 && !hasInitializedRef.current) {
      hasInitializedRef.current = true;
      resetGame();
    }
  }, [cols, resetGame]);

  // Color palette for cells based on theme
  const getCellFill = (level: number, isEaten: boolean) => {
    if (theme === 'dark') {
      if (isEaten) return '#1b2333';
      switch (level) {
        case 1:
          return '#172554';
        case 2:
          return '#1e40af';
        case 3:
          return '#2563eb';
        case 4:
          return '#60a5fa';
        default:
          return '#1f2128';
      }
    } else {
      if (isEaten) return '#e0e7ff';
      switch (level) {
        case 1:
          return '#dbeafe';
        case 2:
          return '#93c5fd';
        case 3:
          return '#3b82f6';
        case 4:
          return '#1d4ed8';
        default:
          return '#f4f4f5';
      }
    }
  };

  const getCellStroke = (level: number) => {
    if (theme === 'dark') {
      switch (level) {
        case 1:
          return '#1e3a8a';
        case 2:
          return '#2563eb';
        case 3:
          return '#3b82f6';
        case 4:
          return '#93c5fd';
        default:
          return '#282b37';
      }
    } else {
      switch (level) {
        case 1:
          return '#bfdbfe';
        case 2:
          return '#60a5fa';
        case 3:
          return '#2563eb';
        case 4:
          return '#1e40af';
        default:
          return '#e4e4e7';
      }
    }
  };

  // Autonomous BFS Simulation Loop (Mathematically guaranteed to never freeze or self-trap)
  useEffect(() => {
    if (!isPlaying || isLoading || cols === 0) return;

    // Helper BFS to find shortest path on grid avoiding obstacles
    const bfs = (
      start: Point,
      isGoal: (p: Point) => boolean,
      isBlocked: (p: Point) => boolean
    ): MoveStep[] | null => {
      const queue: { pos: Point; path: MoveStep[] }[] = [{ pos: start, path: [] }];
      const visited = new Set<string>([`${start.x},${start.y}`]);
      const moves: Point[] = [
        { x: 1, y: 0 },
        { x: -1, y: 0 },
        { x: 0, y: 1 },
        { x: 0, y: -1 },
      ];

      while (queue.length > 0) {
        const current = queue.shift()!;
        if (isGoal(current.pos)) return current.path;

        for (const m of moves) {
          const next = { x: current.pos.x + m.x, y: current.pos.y + m.y };
          const key = `${next.x},${next.y}`;

          if (next.x < 0 || next.x >= cols || next.y < 0 || next.y >= rows) continue;
          if (visited.has(key)) continue;
          if (isBlocked(next)) continue;

          visited.add(key);
          queue.push({ pos: next, path: [...current.path, { dir: m, pos: next }] });
        }
      }
      return null;
    };

    const interval = setInterval(() => {
      const currentSnake = snakeRef.current;
      const currentDir = directionRef.current;
      const currentEaten = eatenKeysRef.current;
      const head = currentSnake[0];
      if (!head) return;

      // 1. Collect all active targets (commit level > 0 and not yet eaten)
      const activeTargets: Point[] = [];
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < 7; r++) {
          const day = weeks[c]?.[r];
          if (day && day.level > 0 && !currentEaten.has(`${c},${r}`)) {
            activeTargets.push({ x: c, y: r });
          }
        }
      }

      // If all targets are eaten, respawn them for infinite continuous slithering!
      if (activeTargets.length === 0) {
        const clearedSet = new Set<string>();
        eatenKeysRef.current = clearedSet;
        setEatenKeys(clearedSet);
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < 7; r++) {
            if (weeks[c]?.[r]?.level > 0) {
              activeTargets.push({ x: c, y: r });
            }
          }
        }
      }

      // 2. Find nearest target by Manhattan distance
      let nearestTarget: Point = { x: (head.x + 1) % cols, y: head.y };
      if (activeTargets.length > 0) {
        let minDist = Infinity;
        for (const t of activeTargets) {
          const dist = Math.abs(t.x - head.x) + Math.abs(t.y - head.y);
          if (dist < minDist) {
            minDist = dist;
            nearestTarget = t;
          }
        }
      }

      // Snake body (excluding tail, since tail will move forward)
      const bodySet = new Set<string>(
        currentSnake.slice(0, -1).map((seg) => `${seg.x},${seg.y}`)
      );
      const isBlocked = (p: Point) => bodySet.has(`${p.x},${p.y}`);

      // 3. Primary Path: BFS to nearest commit target
      let chosenMove: MoveStep | null = null;
      const pathToTarget = bfs(
        head,
        (p) => p.x === nearestTarget.x && p.y === nearestTarget.y,
        isBlocked
      );

      if (pathToTarget && pathToTarget.length > 0) {
        chosenMove = pathToTarget[0];
      } else {
        // 4. Secondary Path (Safe Tail Chasing): BFS toward snake tail
        const tail = currentSnake[currentSnake.length - 1];
        const pathToTail = bfs(
          head,
          (p) => Math.abs(p.x - tail.x) + Math.abs(p.y - tail.y) <= 1,
          isBlocked
        );

        if (pathToTail && pathToTail.length > 0) {
          chosenMove = pathToTail[0];
        } else {
          // 5. Emergency Step: Any adjacent open unblocked cell
          const moves: Point[] = [
            currentDir, // Prefer continuing in same direction
            { x: 1, y: 0 },
            { x: -1, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: -1 },
          ];

          for (const m of moves) {
            const nx = head.x + m.x;
            const ny = head.y + m.y;
            if (
              nx >= 0 &&
              nx < cols &&
              ny >= 0 &&
              ny < rows &&
              !bodySet.has(`${nx},${ny}`) &&
              !(currentSnake.length > 1 && nx === currentSnake[1].x && ny === currentSnake[1].y)
            ) {
              chosenMove = { dir: m, pos: { x: nx, y: ny } };
              break;
            }
          }
        }
      }

      // 6. Fail-safe auto-rescue if somehow cornered completely
      if (!chosenMove) {
        const rescueTarget = nearestTarget || { x: 2, y: 3 };
        const rescuedSnake: Point[] = [
          { x: rescueTarget.x, y: rescueTarget.y },
          { x: Math.max(rescueTarget.x - 1, 0), y: rescueTarget.y },
        ];
        snakeRef.current = rescuedSnake;
        directionRef.current = { x: 1, y: 0 };
        setSnake(rescuedSnake);
        setDirection({ x: 1, y: 0 });
        return;
      }

      const nextHead = chosenMove.pos;
      const nextDir = chosenMove.dir;
      const cellKey = `${nextHead.x},${nextHead.y}`;
      const dayAtHead = weeks[nextHead.x]?.[nextHead.y];
      const justAte =
        dayAtHead && dayAtHead.level > 0 && !eatenKeysRef.current.has(cellKey);

      let newEatenKeys = eatenKeysRef.current;
      if (justAte) {
        newEatenKeys = new Set(eatenKeysRef.current);
        newEatenKeys.add(cellKey);
        eatenKeysRef.current = newEatenKeys;
        setEatenKeys(newEatenKeys);
        setEatenCount((prev) => prev + 1);
        setLastEatenBurst(nextHead);
      }

      // Snake growth when eating commits
      const targetLength = justAte
        ? Math.min(currentSnake.length + 1, MAX_LENGTH)
        : currentSnake.length;

      const newSnake = [nextHead, ...currentSnake.slice(0, targetLength - 1)];

      // Synchronously update refs to eliminate race conditions
      snakeRef.current = newSnake;
      directionRef.current = nextDir;

      setSnake(newSnake);
      setDirection(nextDir);
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [cols, rows, weeks, isPlaying, isLoading]);

  if (isLoading || cols === 0) {
    return (
      <div className="h-32 flex flex-col items-center justify-center font-mono text-xs text-zinc-400 gap-2 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Connecting to live GitHub activity stream...</span>
      </div>
    );
  }

  const head = snake[0] || { x: 0, y: 0 };
  const headPixelX = OFFSET_X + head.x * CELL_PITCH;
  const headPixelY = OFFSET_Y + head.y * CELL_PITCH;

  // Eye positions according to head direction
  let eye1 = { x: headPixelX + 3, y: headPixelY + 3 };
  let eye2 = { x: headPixelX + 8, y: headPixelY + 3 };
  let pupil1 = { x: headPixelX + 3, y: headPixelY + 3 };
  let pupil2 = { x: headPixelX + 8, y: headPixelY + 3 };

  if (direction.x > 0) {
    // Facing right
    eye1 = { x: headPixelX + CELL_SIZE - 2.5, y: headPixelY + 2.8 };
    eye2 = { x: headPixelX + CELL_SIZE - 2.5, y: headPixelY + CELL_SIZE - 2.8 };
    pupil1 = { x: eye1.x + 0.6, y: eye1.y };
    pupil2 = { x: eye2.x + 0.6, y: eye2.y };
  } else if (direction.x < 0) {
    // Facing left
    eye1 = { x: headPixelX + 2.5, y: headPixelY + 2.8 };
    eye2 = { x: headPixelX + 2.5, y: headPixelY + CELL_SIZE - 2.8 };
    pupil1 = { x: eye1.x - 0.6, y: eye1.y };
    pupil2 = { x: eye2.x - 0.6, y: eye2.y };
  } else if (direction.y > 0) {
    // Facing down
    eye1 = { x: headPixelX + 2.8, y: headPixelY + CELL_SIZE - 2.5 };
    eye2 = { x: headPixelX + CELL_SIZE - 2.8, y: headPixelY + CELL_SIZE - 2.5 };
    pupil1 = { x: eye1.x, y: eye1.y + 0.6 };
    pupil2 = { x: eye2.x, y: eye2.y + 0.6 };
  } else if (direction.y < 0) {
    // Facing up
    eye1 = { x: headPixelX + 2.8, y: headPixelY + 2.5 };
    eye2 = { x: headPixelX + CELL_SIZE - 2.8, y: headPixelY + 2.5 };
    pupil1 = { x: eye1.x, y: eye1.y - 0.6 };
    pupil2 = { x: eye2.x, y: eye2.y - 0.6 };
  }

  const svgWidth = OFFSET_X + cols * CELL_PITCH + 10;
  const svgHeight = OFFSET_Y + rows * CELL_PITCH + 8;

  return (
    <div className="space-y-2">
      {/* Mini Controls Bar for Snake Game */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 px-1">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
            title={isPlaying ? 'Pause Snake' : 'Play Snake'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-emerald-500" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-500" />
                <span>Resume</span>
              </>
            )}
          </button>
          <button
            onClick={resetGame}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors"
            title="Restart Snake hunting"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Restart</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{eatenCount} commits eaten</span>
          </span>
        </div>
      </div>

      {/* SVG Canvas rendering Live Heatmap + Snake Animation */}
      <div className="overflow-x-auto py-1">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto min-w-[620px] select-none block"
          style={{ maxHeight: '140px' }}
        >
          <defs>
            {/* Snake Head Glow Filter */}
            <filter id="snake-head-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#10b981" floodOpacity="0.6" />
            </filter>
            {/* Linear gradient for snake body */}
            <linearGradient id="snake-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
          </defs>

          {/* Month Headers */}
          {monthHeaders.map((header, idx) => (
            <text
              key={idx}
              x={OFFSET_X + header.weekIndex * CELL_PITCH}
              y={OFFSET_Y - 8}
              className="fill-zinc-400 dark:fill-zinc-500 font-mono text-[9px]"
            >
              {header.label}
            </text>
          ))}

          {/* 53 Columns x 7 Rows Grid Cells (Live Data) */}
          {weeks.map((week, c) => (
            <g key={c}>
              {week.map((day, r) => {
                const isEaten = eatenKeys.has(`${c},${r}`);
                const x = OFFSET_X + c * CELL_PITCH;
                const y = OFFSET_Y + r * CELL_PITCH;

                return (
                  <rect
                    key={r}
                    x={x}
                    y={y}
                    width={CELL_SIZE}
                    height={CELL_SIZE}
                    rx={2}
                    ry={2}
                    fill={getCellFill(day.level, isEaten)}
                    stroke={getCellStroke(day.level)}
                    strokeWidth={1}
                    className="cursor-pointer transition-colors duration-200"
                    onMouseEnter={() => day.date && onHoverDay(day)}
                    onMouseLeave={() => onHoverDay(null)}
                  >
                    <title>
                      {day.date ? `${day.date}: ${day.count} contributions` : ''}
                    </title>
                  </rect>
                );
              })}
            </g>
          ))}

          {/* Eaten burst ripple animation */}
          {lastEatenBurst && (
            <circle
              cx={OFFSET_X + lastEatenBurst.x * CELL_PITCH + CELL_SIZE / 2}
              cy={OFFSET_Y + lastEatenBurst.y * CELL_PITCH + CELL_SIZE / 2}
              r={CELL_SIZE}
              fill="none"
              stroke="#34d399"
              strokeWidth={1.5}
              opacity={0.8}
              className="animate-ping origin-center pointer-events-none"
            />
          )}

          {/* Snake Body Segments */}
          {snake.slice(1).map((segment, idx) => {
            const x = OFFSET_X + segment.x * CELL_PITCH;
            const y = OFFSET_Y + segment.y * CELL_PITCH;
            // Slightly taper body towards the tail
            const inset = Math.min(idx * 0.35, 1.4);
            const size = CELL_SIZE - inset * 2;

            return (
              <rect
                key={idx}
                x={x + inset}
                y={y + inset}
                width={size}
                height={size}
                rx={2.5}
                ry={2.5}
                fill="#34d399"
                opacity={Math.max(0.95 - idx * 0.1, 0.45)}
                stroke="#059669"
                strokeWidth={0.8}
                className="pointer-events-none"
              />
            );
          })}

          {/* Snake Head with glowing face & eyes */}
          <g filter="url(#snake-head-glow)" className="pointer-events-none">
            <rect
              x={headPixelX}
              y={headPixelY}
              width={CELL_SIZE}
              height={CELL_SIZE}
              rx={3}
              ry={3}
              fill="#10b981"
              stroke="#047857"
              strokeWidth={1}
            />
            {/* Sclera (Whites of the eyes) */}
            <circle cx={eye1.x} cy={eye1.y} r={1.3} fill="#ffffff" />
            <circle cx={eye2.x} cy={eye2.y} r={1.3} fill="#ffffff" />
            {/* Pupils looking in movement direction */}
            <circle cx={pupil1.x} cy={pupil1.y} r={0.7} fill="#064e3b" />
            <circle cx={pupil2.x} cy={pupil2.y} r={0.7} fill="#064e3b" />
          </g>
        </svg>
      </div>
    </div>
  );
};
