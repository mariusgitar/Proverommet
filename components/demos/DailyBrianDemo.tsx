'use client';

import { Inter } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type DemoTab = 'notat' | 'oppgaver';

const completedTasks = [
  'Send referat fra workshop',
  'Bestill reise til Oslo',
  'Oppdater AGENTS.md i Prøverommet',
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

export function DailyBrianDemo() {
  const [activeTab, setActiveTab] = useState<DemoTab>('notat');
  const [note, setNote] = useState('');
  const [pulseDetectedTasks, setPulseDetectedTasks] = useState(false);

  const extractedTasks = useMemo(() => extractTasks(note), [note]);
  const todayLabel = useMemo(() => formatToday(), []);

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
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-4">
            <ul className="space-y-2">
              {completedTasks.map((task) => (
                <li key={task} className="text-sm text-[#6b7280] line-through">
                  ✓ {task}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-4">
            {extractedTasks.length > 0 ? (
              <ul className="space-y-2">
                {extractedTasks.map((task, index) => (
                  <li key={`${task}-pending-${index}`} className="flex items-center gap-2 text-sm text-white">
                    <input
                      type="checkbox"
                      aria-label={`Uavkrysset oppgave: ${task}`}
                      checked={false}
                      readOnly
                      className="h-4 w-4 rounded border-[#2a2a2a] bg-transparent accent-[#3b82f6]"
                    />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-[#6b7280]">Ingen nye oppgaver ennå — legg til ! i notatet</p>
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
}
