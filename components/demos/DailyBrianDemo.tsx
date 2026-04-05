'use client';

import { Inter } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type DemoTab = 'notat' | 'oppgaver';
type TaskSource = 'hardcoded' | 'extracted';

type Task = {
  id: string;
  text: string;
  completed: boolean;
  starred: boolean;
  source: TaskSource;
};

const initialHardcodedTasks = [
  'Send referat fra workshop',
  'Bestille service på bilen',
  'Melde meg på fagdag i mai',
] as const;

function formatToday() {
  const now = new Date();
  const weekday = new Intl.DateTimeFormat('nb-NO', { weekday: 'long' }).format(now);
  const date = new Intl.DateTimeFormat('nb-NO', {
    day: 'numeric',
    month: 'long',
  }).format(now);

  return `I dag · ${weekday} ${date}`;
}

function extractTasks(note: string) {
  return note
    .split('\n')
    .map((line) => line.match(/^\s*!\s*(.+)$/)?.[1]?.trim() ?? '')
    .filter((line) => Boolean(line));
}

function TaskRow({
  task,
  onToggleStar,
  onToggleCompleted,
}: {
  task: Task;
  onToggleStar: (taskId: string) => void;
  onToggleCompleted: (taskId: string) => void;
}) {
  return (
    <li className="flex items-center gap-3 border-t border-[#2a2a2a] py-2.5 text-sm transition-opacity duration-200 first:border-t-0 first:pt-0 last:pb-0">
      <button
        type="button"
        onClick={() => onToggleStar(task.id)}
        aria-label={task.starred ? `Fjern stjerne fra ${task.text}` : `Stjern marker ${task.text}`}
        className={`text-base transition-opacity duration-200 ${task.completed ? 'opacity-50' : 'opacity-100'}`}
      >
        <span className={task.starred ? 'text-[#f59e0b]' : 'text-[#6b7280]'}>{task.starred ? '★' : '☆'}</span>
      </button>

      <span
        className={`flex-1 transition-opacity duration-200 ${
          task.completed ? 'text-xs text-[#6b7280] line-through' : 'text-white'
        }`}
      >
        {task.text}
      </span>

      <button
        type="button"
        onClick={() => onToggleCompleted(task.id)}
        aria-label={task.completed ? `Marker ${task.text} som ikke fullført` : `Marker ${task.text} som fullført`}
        className="text-sm transition-opacity duration-200"
      >
        <span
          className={`inline-flex h-5 w-5 items-center justify-center rounded border ${
            task.completed
              ? 'border-[#3b82f6] bg-[#1e3a5f] text-[#93c5fd]'
              : 'border-[#6b7280] bg-transparent text-transparent'
          }`}
        >
          ✓
        </span>
      </button>
    </li>
  );
}

export function DailyBrianDemo() {
  const [activeTab, setActiveTab] = useState<DemoTab>('notat');
  const [note, setNote] = useState('');
  const [pulseDetectedTasks, setPulseDetectedTasks] = useState(false);
  const [taskStates, setTaskStates] = useState<Record<string, Pick<Task, 'completed' | 'starred'>>>({});

  const extractedTasks = useMemo(() => extractTasks(note), [note]);
  const todayLabel = useMemo(() => formatToday(), []);

  const allTaskDescriptors = useMemo(
    () => [
      ...initialHardcodedTasks.map((text, index) => ({
        id: `hardcoded-${index}`,
        text,
        source: 'hardcoded' as const,
      })),
      ...extractedTasks.map((text, index) => ({
        id: `extracted-${index}`,
        text,
        source: 'extracted' as const,
      })),
    ],
    [extractedTasks],
  );

  useEffect(() => {
    if (extractedTasks.length === 0) {
      return;
    }

    setPulseDetectedTasks(true);
    const timeout = window.setTimeout(() => {
      setPulseDetectedTasks(false);
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [extractedTasks]);

  useEffect(() => {
    setTaskStates((previous) => {
      const allowedIds = new Set(allTaskDescriptors.map((task) => task.id));
      const next: Record<string, Pick<Task, 'completed' | 'starred'>> = {};

      allTaskDescriptors.forEach((task) => {
        next[task.id] = previous[task.id] ?? { completed: false, starred: false };
      });

      Object.keys(previous).forEach((id) => {
        if (allowedIds.has(id) || !id.startsWith('extracted-')) {
          return;
        }

        delete next[id];
      });

      return next;
    });
  }, [allTaskDescriptors]);

  const tasks = useMemo<Task[]>(
    () =>
      allTaskDescriptors.map((task) => ({
        ...task,
        completed: taskStates[task.id]?.completed ?? false,
        starred: taskStates[task.id]?.starred ?? false,
      })),
    [allTaskDescriptors, taskStates],
  );

  const prioritizedTasks = useMemo(
    () => tasks.filter((task) => !task.completed && task.starred),
    [tasks],
  );
  const remainingTasks = useMemo(
    () => tasks.filter((task) => !task.completed && !task.starred),
    [tasks],
  );
  const completedTasks = useMemo(() => tasks.filter((task) => task.completed), [tasks]);
  const openTaskCount = prioritizedTasks.length + remainingTasks.length;

  const toggleTaskStar = (taskId: string) => {
    setTaskStates((previous) => ({
      ...previous,
      [taskId]: {
        completed: previous[taskId]?.completed ?? false,
        starred: !(previous[taskId]?.starred ?? false),
      },
    }));
  };

  const toggleTaskCompleted = (taskId: string) => {
    setTaskStates((previous) => ({
      ...previous,
      [taskId]: {
        completed: !(previous[taskId]?.completed ?? false),
        starred: previous[taskId]?.starred ?? false,
      },
    }));
  };

  const clearCompletedTasks = () => {
    setTaskStates((previous) => {
      const next = { ...previous };
      Object.keys(next).forEach((taskId) => {
        if (next[taskId]?.completed) {
          next[taskId] = { ...next[taskId], completed: false };
        }
      });

      return next;
    });
  };

  return (
    <div
      className={`${inter.className} mx-auto w-full max-w-[390px] rounded-[2rem] border border-[#2a2a2a] bg-[#0f0f0f] p-4 text-[#ffffff] shadow-[0_20px_50px_rgba(0,0,0,0.35)]`}
    >
      <header className="mb-4 space-y-3 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-4">
        <p className="text-xs uppercase tracking-[0.22em] text-[#6b7280]">SECOND LIFE OF BRIAN</p>
        <p className="text-sm text-[#ffffff]">{todayLabel}</p>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('notat')}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              activeTab === 'notat'
                ? 'bg-[#3b82f6] text-white'
                : 'border border-[#2a2a2a] bg-[#1a1a1a] text-[#6b7280] hover:text-white'
            }`}
          >
            📝 Notat
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('oppgaver')}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              activeTab === 'oppgaver'
                ? 'bg-[#3b82f6] text-white'
                : 'border border-[#2a2a2a] bg-[#1a1a1a] text-[#6b7280] hover:text-white'
            }`}
          >
            ✅ Oppgaver
          </button>
        </div>
      </header>

      {activeTab === 'notat' ? (
        <section className="space-y-4">
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder={
              'Skriv tanker, ideer eller oppgaver...\nTips: start en linje med ! for å lage en oppgave'
            }
            className="min-h-52 w-full resize-none rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 text-sm leading-6 text-white outline-none placeholder:text-[#6b7280] focus:border-[#3b82f6]"
          />

          {extractedTasks.length > 0 ? (
            <div
              className={`rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 transition-opacity duration-300 ${
                pulseDetectedTasks ? 'animate-pulse opacity-100' : 'opacity-95'
              }`}
            >
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#3b82f6]">⚡ Oppdaget oppgaver</p>
              <div className="flex flex-wrap gap-2">
                {extractedTasks.map((task, index) => (
                  <span
                    key={`${task}-${index}`}
                    className="rounded-full bg-[#1e3a5f] px-3 py-1 text-sm text-[#93c5fd] transition-opacity duration-500"
                  >
                    ✓ {task}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      ) : null}

      {activeTab === 'oppgaver' ? (
        <section className="space-y-3">
          <div className="flex items-center justify-between rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3">
            <p className="text-sm font-medium text-white">{openTaskCount} åpne oppgaver</p>
            {completedTasks.length > 0 ? (
              <button
                type="button"
                onClick={clearCompletedTasks}
                className="text-xs text-[#6b7280] transition hover:text-white"
              >
                Tøm fullførte
              </button>
            ) : null}
          </div>

          <div className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-4">
            {tasks.length === 0 ? (
              <p className="text-sm text-[#6b7280]">Ingen oppgaver ennå — legg til ! i notatet</p>
            ) : (
              <div className="space-y-4">
                {prioritizedTasks.length > 0 ? (
                  <div className="border-l-4 border-blue-500 pl-3">
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[#6b7280]">PRIORITERT</p>
                    <ul>
                      {prioritizedTasks.map((task) => (
                        <TaskRow
                          key={task.id}
                          task={task}
                          onToggleStar={toggleTaskStar}
                          onToggleCompleted={toggleTaskCompleted}
                        />
                      ))}
                    </ul>
                  </div>
                ) : null}

                {remainingTasks.length > 0 ? (
                  <ul>
                    {remainingTasks.map((task) => (
                      <TaskRow
                        key={task.id}
                        task={task}
                        onToggleStar={toggleTaskStar}
                        onToggleCompleted={toggleTaskCompleted}
                      />
                    ))}
                  </ul>
                ) : null}

                {completedTasks.length > 0 ? (
                  <ul>
                    {completedTasks.map((task) => (
                      <TaskRow
                        key={task.id}
                        task={task}
                        onToggleStar={toggleTaskStar}
                        onToggleCompleted={toggleTaskCompleted}
                      />
                    ))}
                  </ul>
                ) : null}
              </div>
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
}
