'use client';

import { useState } from 'react';

import type { Direction, FeatureStatus, Module, Principle, Roadmap } from '@/content/roadmaps/types';

type Tab = 'status' | 'directions' | 'principles';

const tabLabels: Array<{ id: Tab; label: string }> = [
  { id: 'status', label: '📊 Nåværende status' },
  { id: 'directions', label: '🧭 Mulige retninger' },
  { id: 'principles', label: '💡 Produktfilosofi' },
];

const moduleStatusLabel: Record<Module['status'], string> = {
  done: 'Ferdig',
  partial: 'Delvis',
  planned: 'Planlagt',
};

const moduleStatusStyle: Record<Module['status'], string> = {
  done: 'bg-emerald-100 text-emerald-800',
  partial: 'bg-amber-100 text-amber-800',
  planned: 'bg-slate-100 text-slate-700',
};

const effortLabel: Record<Direction['effort'], string> = {
  low: 'Lav innsats',
  mid: 'Middels innsats',
  high: 'Høy innsats',
};

const effortStyle: Record<Direction['effort'], string> = {
  low: 'bg-emerald-100 text-emerald-800',
  mid: 'bg-amber-100 text-amber-800',
  high: 'bg-rose-100 text-rose-800',
};

const featureStatusIcon: Record<FeatureStatus, string> = {
  done: '✓',
  partial: '~',
  planned: '○',
};

export function ProductRoadmap({ roadmap }: { roadmap: Roadmap }) {
  const [tab, setTab] = useState<Tab>('status');

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-8 rounded-3xl border border-[#ddd8cc] bg-white p-6 sm:p-8">
          <p className="text-sm text-slate-600">Oppdatert {roadmap.updatedAt}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="font-serif text-4xl text-slate-900 sm:text-5xl">Produktkart</h1>
            <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#2d5be3]">{roadmap.version}</span>
          </div>
        </header>

        <nav className="mb-8 border-b border-[#ddd8cc]">
          <ul className="flex flex-wrap gap-6">
            {tabLabels.map((item) => {
              const isActive = tab === item.id;

              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setTab(item.id)}
                    className={`border-b-2 pb-3 text-sm font-semibold transition sm:text-base ${
                      isActive ? 'border-[#2d5be3] text-[#2d5be3]' : 'border-transparent text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {tab === 'status' ? (
          roadmap.modules.length ? (
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {roadmap.modules.map((module) => (
                <article key={module.name} className="rounded-2xl border border-[#ddd8cc] bg-white p-5">
                  <header className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                        style={{ backgroundColor: module.color }}
                        aria-hidden="true"
                      >
                        {module.emoji}
                      </span>
                      <h2 className="text-lg font-semibold text-slate-900">{module.name}</h2>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${moduleStatusStyle[module.status]}`}>
                      {moduleStatusLabel[module.status]}
                    </span>
                  </header>

                  <ul className="space-y-2">
                    {module.features.map((feature) => (
                      <li key={feature.text} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-0.5 text-xs font-bold text-[#2d5be3]" aria-hidden="true">
                          {featureStatusIcon[feature.status]}
                        </span>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          ) : (
            <EmptyState message="Status kommer snart." />
          )
        ) : null}

        {tab === 'directions' ? (
          roadmap.directions.length ? (
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {roadmap.directions.map((direction) => (
                <article key={direction.title} className="rounded-2xl border border-[#ddd8cc] bg-white p-5">
                  <header className="mb-4 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-semibold text-slate-900">
                        <span className="mr-2" aria-hidden="true">
                          {direction.emoji}
                        </span>
                        {direction.title}
                      </h2>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${effortStyle[direction.effort]}`}>
                        {effortLabel[direction.effort]}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">{direction.description}</p>
                  </header>

                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {direction.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          ) : (
            <EmptyState message="Mulige retninger kommer snart." />
          )
        ) : null}

        {tab === 'principles' ? (
          roadmap.principles.length ? (
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {roadmap.principles.map((principle) => (
                <article key={principle.title} className="rounded-2xl border border-[#ddd8cc] bg-white p-5">
                  <h2 className="text-lg font-semibold text-slate-900">
                    <span className="mr-2" aria-hidden="true">
                      {principle.emoji}
                    </span>
                    {principle.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-700">{principle.description}</p>
                </article>
              ))}
            </section>
          ) : (
            <EmptyState message="Produktfilosofi kommer snart." />
          )
        ) : null}
      </div>
    </main>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#ddd8cc] bg-white p-10 text-center text-sm text-slate-600">
      {message}
    </div>
  );
}

