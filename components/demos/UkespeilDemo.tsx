'use client';

// @ts-expect-error Missing type declarations for canvas-confetti in this environment
import confetti from 'canvas-confetti';
import { Inter } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type DemoStep = 'planlegging' | 'registrering';

interface Project {
  id: string;
  name: string;
  color: string;
}

const weeklyTargetHours = 37.5;
const quickValues = [4, 6, 8] as const;

const projects: Project[] = [
  { id: 'tonsberglftet', name: 'Tønsbergløftet', color: '#6366F1' },
  { id: 'llp-kurs', name: 'LLP-kurs', color: '#E86B5F' },
  { id: 'sammen-utvikling', name: 'Sammen-utvikling', color: '#6BCB8B' },
  { id: 'strategiarbeid', name: 'Strategiarbeid', color: '#A78BFA' },
];

function AnimatedScore({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    const start = performance.now();
    const from = displayValue;
    const duration = 650;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const next = Math.round(from + (value - from) * progress);
      setDisplayValue(next);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value]);

  return <span>{displayValue}</span>;
}

function prefillFromPlan(hours: number) {
  if (hours >= 8) {
    return 6;
  }

  if (hours === 6) {
    return 7;
  }

  if (hours === 4) {
    return 5;
  }

  return 0;
}

function interpretation(score: number) {
  if (score >= 90) {
    return 'Presist! 🎯';
  }

  if (score >= 70) {
    return 'Ganske bra 👍';
  }

  if (score >= 50) {
    return 'Litt avvik 🤔';
  }

  return 'Stor forskjell 📊';
}

export function UkespeilDemo() {
  const [step, setStep] = useState<DemoStep>('planlegging');
  const [planHours, setPlanHours] = useState<Record<string, number>>(() =>
    Object.fromEntries(projects.map((project) => [project.id, 0])),
  );
  const [actualHours, setActualHours] = useState<Record<string, number>>(() =>
    Object.fromEntries(projects.map((project) => [project.id, 0])),
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalPlanHours = useMemo(() => Object.values(planHours).reduce((sum, value) => sum + value, 0), [planHours]);
  const totalActualHours = useMemo(() => Object.values(actualHours).reduce((sum, value) => sum + value, 0), [actualHours]);

  const score = useMemo(() => {
    const deviations = projects.map((project) => {
      const planned = planHours[project.id] ?? 0;
      const actual = actualHours[project.id] ?? 0;

      if (planned === 0) {
        return actual === 0 ? 0 : 100;
      }

      return Math.min((Math.abs(actual - planned) / planned) * 100, 100);
    });

    const averageDeviation = deviations.reduce((sum, value) => sum + value, 0) / projects.length;

    return Math.max(0, Math.round(100 - averageDeviation));
  }, [actualHours, planHours]);

  const hasFilledActual = Object.values(actualHours).some((value) => value > 0);

  const setHours = (
    bucket: 'plan' | 'actual',
    projectId: string,
    nextValue: number,
  ) => {
    const sanitizedValue = Number.isFinite(nextValue) ? Math.max(0, Math.min(40, nextValue)) : 0;

    if (bucket === 'plan') {
      setPlanHours((current) => ({ ...current, [projectId]: sanitizedValue }));
      return;
    }

    setActualHours((current) => ({ ...current, [projectId]: sanitizedValue }));
  };

  const setCustomHours = (bucket: 'plan' | 'actual', projectId: string) => {
    const existingValue = bucket === 'plan' ? planHours[projectId] : actualHours[projectId];
    const input = window.prompt('Angi timer', String(existingValue ?? 0));

    if (!input) {
      return;
    }

    const parsed = Number(input.replace(',', '.'));
    setHours(bucket, projectId, parsed);
  };

  const submitPlan = () => {
    const seededActualHours = Object.fromEntries(
      projects.map((project) => [project.id, prefillFromPlan(planHours[project.id] ?? 0)]),
    );

    setActualHours(seededActualHours);
    setIsSubmitted(false);
    setStep('registrering');
  };

  const renderProjectCards = (bucket: 'plan' | 'actual') => (
    <div className="space-y-3">
      {projects.map((project) => {
        const value = bucket === 'plan' ? (planHours[project.id] ?? 0) : (actualHours[project.id] ?? 0);
        const plannedValue = planHours[project.id] ?? 0;
        const muted = value === 0;

        return (
          <article
            key={`${bucket}-${project.id}`}
            className={`rounded-2xl border border-slate-100 bg-white px-3 py-3 transition ${muted ? 'opacity-65' : 'opacity-100'}`}
            style={{ borderLeftWidth: '6px', borderLeftColor: project.color }}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-800">
                {project.name}
                {bucket === 'actual' ? (
                  <span className="ml-2 text-xs font-medium text-slate-500">Plan: {plannedValue}t</span>
                ) : null}
              </h4>
              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${muted ? 'bg-slate-100 text-slate-500' : 'bg-indigo-50 text-indigo-700'}`}
              >
                {value}t
              </span>
            </div>

            <div className="flex gap-2">
              {quickValues.map((hoursValue) => (
                <button
                  key={`${bucket}-${project.id}-${hoursValue}`}
                  type="button"
                  onClick={() => setHours(bucket, project.id, value === hoursValue ? 0 : hoursValue)}
                  className={`rounded-lg border px-2.5 py-1.5 text-xs font-medium transition ${
                    value === hoursValue
                      ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {hoursValue}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setCustomHours(bucket, project.id)}
                className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
                aria-label="Egendefinert timeverdi"
              >
                ✏️
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );

  const renderComparisonRows = () => {
    const safePlanTotal = totalPlanHours > 0 ? totalPlanHours : 1;
    const safeActualTotal = totalActualHours > 0 ? totalActualHours : 1;

    return (
      <div className="space-y-3">
        {projects.map((project) => {
          const planValue = planHours[project.id] ?? 0;
          const actualValue = actualHours[project.id] ?? 0;
          const planPercent = (planValue / safePlanTotal) * 100;
          const actualPercent = (actualValue / safeActualTotal) * 100;

          return (
            <div key={`compare-${project.id}`} className="space-y-2 rounded-2xl bg-slate-50 p-3">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-slate-700">{project.name}</span>
                <span>
                  Plan {planValue}t · Faktisk {actualValue}t
                </span>
              </div>

              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-12 text-[11px] font-medium uppercase tracking-wide text-slate-500">Plan</span>
                  <div className="h-2 flex-1 rounded-full bg-slate-200">
                    <div className="h-2 rounded-full" style={{ width: `${planPercent}%`, backgroundColor: project.color }} />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-12 text-[11px] font-medium uppercase tracking-wide text-slate-500">Faktisk</span>
                  <div className="h-2 flex-1 rounded-full bg-slate-200">
                    <div className="h-2 rounded-full" style={{ width: `${actualPercent}%`, backgroundColor: project.color }} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className={`${inter.className} mx-auto w-full max-w-[390px] rounded-[2rem] border border-white/80 p-4 text-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.15)] ${
        step === 'planlegging' ? 'bg-[#ffffff]' : 'bg-gradient-to-br from-[#f6f5fb] to-[#e8defb]'
      }`}
    >
      {step === 'planlegging' ? (
        <div className="space-y-4">
          <header className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">PLANLEGGING</p>
            <h3 className="mt-1 text-xl font-semibold">Planlegg uka</h3>
            <p className="text-sm text-slate-600">Uke 15 · 7.–11. april</p>
          </header>

          {renderProjectCards('plan')}

          <footer className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-lg">
            <p className="mb-3 text-sm text-slate-700">
              Registrert: <span className="font-semibold">{totalPlanHours}t</span> av {weeklyTargetHours}t
            </p>
            <button
              type="button"
              onClick={submitPlan}
              disabled={totalPlanHours === 0}
              className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              Lagre plan →
            </button>
          </footer>
        </div>
      ) : null}

      {step === 'registrering' ? (
        <div className="space-y-4">
          <header className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-lg">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">REGISTRERING</p>
            <h3 className="mt-1 text-xl font-semibold">Faktisk tid denne uka</h3>
            <p className="text-sm text-slate-600">Sammenlign med planen din</p>
          </header>

          {renderProjectCards('actual')}

          {!isSubmitted ? (
            <button
              type="button"
              onClick={() => {
                confetti({ particleCount: 120, spread: 70, origin: { y: 0.7 } });
                setIsSubmitted(true);
              }}
              disabled={!hasFilledActual}
              className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              Lever faktisk tid
            </button>
          ) : null}

          {isSubmitted ? (
            <section className="space-y-3 rounded-3xl border border-white/80 bg-white/85 p-4 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">Resultat</p>
              <p className="text-5xl font-bold text-slate-900">
                <AnimatedScore value={score} />
                <span className="text-2xl text-slate-500">/100</span>
              </p>
              <p className="rounded-xl bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700">🔥 3 uker på rad</p>
              <p className="text-sm font-medium text-slate-700">{interpretation(score)}</p>
              {renderComparisonRows()}
            </section>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
