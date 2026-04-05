'use client';

import { Inter } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type DemoState = 'upload' | 'processing' | 'dashboard';
type WeekId = '12' | '13' | '14';
type QueueKey = 'sak1' | 'sak2' | 'sak3' | 'ufordelt';

interface MovementData {
  inn: number;
  plukket: number;
  netto: number;
  ufordelt: {
    count: number;
    share: number;
  };
}

interface QueueData {
  name: string;
  color: string;
  total: number;
  trend: 'up' | 'down';
  ventetid: number;
  inn: number;
  innPerUke: number;
  utPerUke: number;
}

const weekMeta: Record<WeekId, { label: string; range: string }> = {
  '12': { label: 'Uke 12', range: '24. feb – 2. mars 2026 · 2 uker siden forrige' },
  '13': { label: 'Uke 13', range: '3. – 9. mars 2026 · 1 uke siden forrige' },
  '14': { label: 'Uke 14', range: '10. – 16. mars 2026 · 1 uke siden forrige' },
};

const movementByWeek: Record<WeekId, MovementData> = {
  '12': { inn: 18, plukket: 14, netto: 4, ufordelt: { count: 58, share: 34 } },
  '13': { inn: 24, plukket: 22, netto: 2, ufordelt: { count: 55, share: 32 } },
  '14': { inn: 32, plukket: 31, netto: -3, ufordelt: { count: 52, share: 30 } },
};

const queuesByWeek: Record<WeekId, Record<QueueKey, QueueData>> = {
  '12': {
    sak1: { name: 'Sak 1', color: '#6366f1', total: 42, trend: 'up', ventetid: 28, inn: 5, innPerUke: 5, utPerUke: 3 },
    sak2: { name: 'Sak 2', color: '#22c55e', total: 31, trend: 'up', ventetid: 81, inn: 4, innPerUke: 4, utPerUke: 2 },
    sak3: { name: 'Sak 3', color: '#f97316', total: 52, trend: 'up', ventetid: 48, inn: 6, innPerUke: 6, utPerUke: 2 },
    ufordelt: {
      name: 'Ufordelt',
      color: '#94a3b8',
      total: 58,
      trend: 'up',
      ventetid: 71,
      inn: 0,
      innPerUke: 0,
      utPerUke: 0,
    },
  },
  '13': {
    sak1: { name: 'Sak 1', color: '#6366f1', total: 39, trend: 'down', ventetid: 26, inn: 6, innPerUke: 6, utPerUke: 9 },
    sak2: { name: 'Sak 2', color: '#22c55e', total: 30, trend: 'up', ventetid: 78, inn: 5, innPerUke: 5, utPerUke: 3 },
    sak3: { name: 'Sak 3', color: '#f97316', total: 49, trend: 'up', ventetid: 45, inn: 8, innPerUke: 8, utPerUke: 4 },
    ufordelt: {
      name: 'Ufordelt',
      color: '#94a3b8',
      total: 55,
      trend: 'down',
      ventetid: 68,
      inn: 0,
      innPerUke: 0,
      utPerUke: 0,
    },
  },
  '14': {
    sak1: { name: 'Sak 1', color: '#6366f1', total: 37, trend: 'down', ventetid: 25, inn: 7, innPerUke: 7, utPerUke: 24 },
    sak2: { name: 'Sak 2', color: '#22c55e', total: 28, trend: 'up', ventetid: 74, inn: 5, innPerUke: 5, utPerUke: 2 },
    sak3: { name: 'Sak 3', color: '#f97316', total: 47, trend: 'up', ventetid: 43, inn: 12, innPerUke: 12, utPerUke: 3 },
    ufordelt: {
      name: 'Ufordelt',
      color: '#94a3b8',
      total: 52,
      trend: 'up',
      ventetid: 67,
      inn: 0,
      innPerUke: 0,
      utPerUke: 0,
    },
  },
};

const chartSeries = {
  labels: ['W12', 'W13', 'W14'],
  nye: [18, 24, 32],
  plukkede: [14, 22, 31],
};

function buildPolyline(values: number[]) {
  const xPoints = [40, 150, 260];
  const yFromValue = (value: number) => 130 - (value / 60) * 100;

  return values.map((value, index) => `${xPoints[index]},${yFromValue(value)}`).join(' ');
}

export function ByggesaksdashDemo() {
  const [demoState, setDemoState] = useState<DemoState>('upload');
  const [processingText, setProcessingText] = useState('Analyserer Websak-eksport...');
  const [selectedWeek, setSelectedWeek] = useState<WeekId>('14');

  const movement = movementByWeek[selectedWeek];
  const queues = queuesByWeek[selectedWeek];

  useEffect(() => {
    if (demoState !== 'processing') {
      return;
    }

    setProcessingText('Analyserer Websak-eksport...');

    const step2 = window.setTimeout(() => setProcessingText('Sammenligner med forrige uke...'), 600);
    const step3 = window.setTimeout(() => setProcessingText('Oppdaterer dashboard...'), 1200);
    const done = window.setTimeout(() => setDemoState('dashboard'), 1800);

    return () => {
      window.clearTimeout(step2);
      window.clearTimeout(step3);
      window.clearTimeout(done);
    };
  }, [demoState]);

  const chartPoints = useMemo(
    () => ({
      nye: buildPolyline(chartSeries.nye),
      plukkede: buildPolyline(chartSeries.plukkede),
      x: [40, 150, 260],
    }),
    [],
  );

  const selectedWeekIndex = Number(selectedWeek) - 12;

  const startProcessing = () => {
    setDemoState('processing');
  };

  const resetDemo = () => {
    setDemoState('upload');
    setProcessingText('Analyserer Websak-eksport...');
    setSelectedWeek('14');
  };

  const ufordeltTrendClass =
    movement.ufordelt.share > 30
      ? 'text-[#ef4444]'
      : movement.ufordelt.share >= 20
        ? 'text-[#f97316]'
        : 'text-[#22c55e]';

  return (
    <div className={`${inter.className} mx-auto w-full max-w-[640px] rounded-3xl bg-[#f5f4ef] p-4 text-[#0f172a] sm:p-6`}>
      {demoState === 'upload' ? (
        <section className="mx-auto flex min-h-[460px] w-full max-w-[560px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm">
          <div className="w-full text-center">
            <div className="mb-4 text-6xl">🏗️</div>
            <h3 className="text-2xl font-semibold text-[#0f172a]">Last opp ukeseksport</h3>
            <p className="mt-2 text-sm text-[#64748b]">
              Klikk på feltet under for å se hvordan
              <br />
              dashboardet oppdateres med nye data.
            </p>

            <div
              onClick={startProcessing}
              className="mt-6 w-full cursor-pointer rounded-2xl border-2 border-dashed border-[#cbd5e1] bg-white p-10 text-center transition hover:bg-slate-50"
            >
              <p className="text-sm font-medium text-[#64748b]">Klikk for å simulere opplasting</p>
              <p className="mt-2 text-xs text-[#94a3b8]">Dette er en demo — ingen fil lastes faktisk opp</p>
            </div>

            <p className="mt-4 text-xs text-[#94a3b8]">Støtter .xlsx fra Websak · Ingen data forlater nettleseren</p>
          </div>
        </section>
      ) : null}

      {demoState === 'processing' ? (
        <section className="mx-auto flex min-h-[460px] w-full max-w-[560px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm">
          <div className="w-full text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
            <p className="mt-6 text-sm font-medium text-[#64748b]">{processingText}</p>
          </div>
        </section>
      ) : null}

      {demoState === 'dashboard' ? (
        <section className="max-h-[72vh] space-y-4 overflow-y-auto rounded-2xl bg-transparent pr-1">
          <header className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs font-medium text-[#64748b]">🏗️ Byggesak · Dashboard</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(Object.keys(weekMeta) as WeekId[]).map((week) => (
                <button
                  key={week}
                  type="button"
                  onClick={() => setSelectedWeek(week)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    selectedWeek === week
                      ? 'bg-[#0f172a] text-white'
                      : 'border border-[#e2e8f0] bg-white text-[#0f172a] hover:bg-slate-50'
                  }`}
                >
                  {weekMeta[week].label}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-[#64748b]">{weekMeta[selectedWeek].range}</p>
          </header>

          <section className="rounded-2xl bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0f172a]">Bevegelse denne perioden</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <article className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm" style={{ borderTop: '4px solid #0f172a' }}>
                <p className="text-sm text-[#64748b]">Nye inn i kurv</p>
                <p className="mt-1 text-3xl font-semibold">{movement.inn}</p>
                <p className="text-xs text-[#64748b]">Siste uke: +{movement.inn - movementByWeek['13'].inn}</p>
              </article>

              <article className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm" style={{ borderTop: '4px solid #6366f1' }}>
                <p className="text-sm text-[#64748b]">Plukket ut</p>
                <p className="mt-1 text-3xl font-semibold">{movement.plukket}</p>
                <p className="text-xs text-[#64748b]">Saksbehandling ferdigstilt denne uken</p>
              </article>

              <article
                className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
                style={{ borderTop: `4px solid ${movement.netto < 0 ? '#22c55e' : '#ef4444'}` }}
              >
                <p className="text-sm text-[#64748b]">Netto backlog</p>
                <p className={`mt-1 text-3xl font-semibold ${movement.netto < 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                  {movement.netto > 0 ? `+${movement.netto}` : movement.netto}
                </p>
                <p className="text-xs text-[#64748b]">↑ Snitt siste 12 uker: +1</p>
              </article>

              <article className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm" style={{ borderTop: '4px solid #94a3b8' }}>
                <p className="text-sm text-[#64748b]">Ufordelt</p>
                <p className="mt-1 text-3xl font-semibold text-[#0f172a]">{movement.ufordelt.count}</p>
                <p className={`text-xs ${ufordeltTrendClass}`}>↑ {movement.ufordelt.share}% av total saksmengde</p>
              </article>
            </div>
          </section>

          <section className="rounded-2xl bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0f172a]">Kurvoversikt</h3>
            <p className="text-sm text-[#64748b]">Antall saker, flyt og status per behandlingskurv</p>

            <div className="mt-3 grid gap-3">
              {(Object.values(queues) as QueueData[]).map((queue) => {
                const isGrowing = queue.trend === 'up';
                const trendArrow = isGrowing ? '↑' : '↓';
                const trendColor = isGrowing ? 'text-[#ef4444]' : 'text-[#22c55e]';
                const waitBadge = queue.ventetid > 21 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-700';

                return (
                  <article
                    key={`${selectedWeek}-${queue.name}`}
                    className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
                    style={{ borderLeft: `6px solid ${queue.color}` }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-semibold text-[#0f172a]">
                        {queue.name}: {queue.total}{' '}
                        <span className={`text-sm ${trendColor}`}>
                          {trendArrow} {isGrowing ? 'opp' : 'ned'}
                        </span>
                      </h4>
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${waitBadge}`}>
                        Snitt ventetid: {queue.ventetid} dager
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#64748b]">
                      Inn {queue.inn} · Inn/uke {queue.innPerUke} · Ut/uke {queue.utPerUke}
                    </p>
                    <p className={`mt-1 text-sm font-semibold ${isGrowing ? 'text-[#ef4444]' : 'text-[#22c55e]'}`}>
                      {isGrowing ? '✗ Vokser' : '✓ Tømmes'}
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#0f172a]">Inn vs. ut (siste 3 uker)</h3>
            <svg viewBox="0 0 300 160" className="mt-3 w-full rounded-xl border border-slate-100 bg-slate-50 p-2" role="img" aria-label="Inn versus plukkede saker siste tre uker">
              <line x1="40" y1="130" x2="260" y2="130" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="40" y1="30" x2="40" y2="130" stroke="#cbd5e1" strokeWidth="1" />

              <text x="16" y="132" fontSize="9" fill="#64748b">0</text>
              <text x="12" y="30" fontSize="9" fill="#64748b">60</text>

              <polyline fill="none" stroke="#22c55e" strokeWidth="3" points={chartPoints.nye} />
              <polyline fill="none" stroke="#6366f1" strokeWidth="3" points={chartPoints.plukkede} />

              {chartSeries.nye.map((value, index) => {
                const y = 130 - (value / 60) * 100;
                const isSelected = index === selectedWeekIndex;
                return (
                  <circle
                    key={`nye-${chartSeries.labels[index]}`}
                    cx={chartPoints.x[index]}
                    cy={y}
                    r={isSelected ? 5 : 3}
                    fill="#22c55e"
                  />
                );
              })}

              {chartSeries.plukkede.map((value, index) => {
                const y = 130 - (value / 60) * 100;
                const isSelected = index === selectedWeekIndex;
                return (
                  <circle
                    key={`plukkede-${chartSeries.labels[index]}`}
                    cx={chartPoints.x[index]}
                    cy={y}
                    r={isSelected ? 5 : 3}
                    fill="#6366f1"
                  />
                );
              })}

              {chartSeries.labels.map((label, index) => (
                <text key={label} x={chartPoints.x[index] - 10} y="146" fontSize="9" fill="#64748b">
                  {label}
                </text>
              ))}
            </svg>
            <div className="mt-3 flex items-center gap-4 text-xs text-[#64748b]">
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#22c55e]" /> Nye i kurv
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#6366f1]" /> Plukkede
              </span>
            </div>
          </section>

          <button type="button" onClick={resetDemo} className="pb-1 text-sm text-[#64748b] underline-offset-2 hover:text-[#0f172a] hover:underline">
            ← Last opp ny fil
          </button>
        </section>
      ) : null}
    </div>
  );
}
