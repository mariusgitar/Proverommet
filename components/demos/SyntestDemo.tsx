'use client';

import { Inter } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';

import {
  getSyntestPersonaById,
  syntestExamples,
  syntestPersonas,
  syntestPresetResults,
  type SyntestResult,
} from '@/lib/syntest';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const filters = ['Alle', 'Innbyggere', 'Ansatte', 'Næringsliv', 'Offentlige instanser', 'Politikere'];
const modes = ['Hypotesetest', 'Kommunikasjon', 'Høring'];

type Filter = (typeof filters)[number];

function getScoreColor(score: number) {
  if (score >= 7) {
    return 'text-emerald-600';
  }

  if (score >= 4) {
    return 'text-amber-500';
  }

  return 'text-red-500';
}

function getConcernColor(score: number) {
  if (score >= 6) {
    return 'text-red-500';
  }

  if (score >= 4) {
    return 'text-amber-500';
  }

  return 'text-emerald-600';
}

export function SyntestDemo() {
  const [activeMode, setActiveMode] = useState(modes[0]);
  const [activeFilter, setActiveFilter] = useState<Filter>('Innbyggere');
  const [selectedPersonaIds, setSelectedPersonaIds] = useState<string[]>(['kari']);
  const [hypothesis, setHypothesis] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [results, setResults] = useState<SyntestResult[]>([]);
  const [error, setError] = useState('');

  const visiblePersonas = useMemo(() => {
    if (activeFilter === 'Alle') {
      return syntestPersonas;
    }

    return syntestPersonas.filter((persona) => persona.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (!isSimulating) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setResults(
        selectedPersonaIds
          .map((personaId) => syntestPresetResults[personaId])
          .filter((result): result is SyntestResult => Boolean(result)),
      );
      setIsSimulating(false);
    }, 1200);

    return () => window.clearTimeout(timeoutId);
  }, [isSimulating, selectedPersonaIds]);

  const togglePersona = (personaId: string) => {
    setSelectedPersonaIds((current) =>
      current.includes(personaId) ? current.filter((id) => id !== personaId) : [...current, personaId],
    );
  };

  const selectAllPersonas = () => {
    setSelectedPersonaIds(syntestPersonas.map((persona) => persona.id));
  };

  const simulate = () => {
    const trimmedHypothesis = hypothesis.trim();

    if (!trimmedHypothesis) {
      setError('Skriv inn en hypotese eller velg et hurtigeksempel først.');
      return;
    }

    if (selectedPersonaIds.length === 0) {
      setError('Velg minst én persona før du simulerer.');
      return;
    }

    setError('');
    setResults([]);
    setIsSimulating(true);
  };

  return (
    <div className={`${inter.className} mx-auto w-full max-w-[920px] bg-[#f8fafc] text-[#0f172a]`}>
      <div className="space-y-8 p-4 sm:p-6">
        <header className="border-b border-[#e2e8f0] pb-6">
          <h3 className="text-3xl font-bold tracking-tight text-[#020617]">Syntest</h3>
          <p className="mt-1 text-sm text-[#64748b]">Test tjenesteendringer mot digitale innbyggertvillinger</p>
        </header>

        <section className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {modes.map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setActiveMode(mode)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  activeMode === mode
                    ? 'border-violet-600 bg-violet-600 text-white shadow-sm'
                    : 'border-[#e2e8f0] bg-white text-[#334155] hover:border-violet-200'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          <p className="text-sm text-[#334155]">
            {activeMode === 'Hypotesetest'
              ? 'Test hvordan personas reagerer på en tjenesteendring eller nytt tiltak.'
              : activeMode === 'Kommunikasjon'
                ? 'Sjekk hvordan språk, kanal og budskap lander hos ulike innbyggere.'
                : 'Forhåndstest høringsopplegg og se hvem som trenger ekstra støtte for å delta.'}
          </p>
        </section>

        <section className="space-y-4">
          <h4 className="text-xl font-bold text-[#020617]">Velg personas</h4>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter as Filter)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  activeFilter === filter ? 'bg-[#0f172a] text-white' : 'bg-white text-[#334155] hover:bg-[#eef2ff]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visiblePersonas.map((persona) => {
              const isSelected = selectedPersonaIds.includes(persona.id);

              return (
                <button
                  key={persona.id}
                  type="button"
                  onClick={() => togglePersona(persona.id)}
                  className={`relative flex min-h-[170px] flex-col items-center rounded-2xl border bg-white p-5 text-center transition ${
                    isSelected
                      ? 'border-violet-300 shadow-[0_12px_28px_rgba(15,23,42,0.16)] ring-2 ring-violet-100'
                      : 'border-[#e2e8f0] hover:border-violet-200 hover:shadow-sm'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-[#f1f5f9] text-xs font-bold text-[#64748b]">
                    i
                  </span>
                  <span className={`grid h-14 w-14 place-items-center rounded-full text-2xl ${isSelected ? 'bg-violet-100' : 'bg-[#f1f5f9]'}`}>
                    {persona.emoji}
                  </span>
                  <span className="mt-4 text-sm font-bold text-[#020617]">
                    {persona.name} ({persona.age})
                  </span>
                  <span className="mt-1 text-xs text-[#475569]">{persona.role}</span>
                  <span className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {persona.traits.map((trait) => (
                      <span key={trait} className="rounded-full bg-[#f1f5f9] px-2 py-0.5 text-[11px] text-[#475569]">
                        {trait}
                      </span>
                    ))}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <h4 className="text-xl font-bold text-[#020617]">Din test</h4>
          <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
            <label htmlFor="syntest-hypothesis" className="text-sm font-bold text-[#0f172a]">
              Beskriv innholdet du vil teste
            </label>
            <textarea
              id="syntest-hypothesis"
              value={hypothesis}
              onChange={(event) => setHypothesis(event.target.value)}
              placeholder="Beskriv tjenesteendringen eller tiltaket du vil teste..."
              className="mt-3 min-h-[96px] w-full resize-none rounded-xl border border-[#e2e8f0] bg-white p-4 text-sm outline-none transition placeholder:text-[#94a3b8] focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {syntestExamples.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => setHypothesis(example)}
                  className="rounded-full bg-[#f1f5f9] px-3 py-1.5 text-xs text-[#334155] transition hover:bg-violet-50 hover:text-violet-700"
                >
                  {example}
                </button>
              ))}
            </div>

            {error ? <p className="mt-3 text-sm font-medium text-red-600">{error}</p> : null}

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={simulate}
                disabled={isSimulating || selectedPersonaIds.length === 0}
                className="rounded-xl bg-violet-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-600 disabled:cursor-not-allowed disabled:bg-violet-300"
              >
                {isSimulating ? 'Simulerer...' : `Simuler ${selectedPersonaIds.length} persona(s)`}
              </button>
              <button
                type="button"
                onClick={selectAllPersonas}
                disabled={isSimulating}
                className="rounded-xl bg-slate-400 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Test alle
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h4 className="text-xl font-bold text-[#020617]">Resultater</h4>
          <div className="space-y-4">
            {isSimulating ? (
              selectedPersonaIds.map((personaId) => {
                const persona = getSyntestPersonaById(personaId);

                return (
                  <article key={personaId} className="rounded-2xl border border-[#e2e8f0] bg-white p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f1f5f9] text-xl">{persona?.emoji}</span>
                      <div>
                        <p className="font-bold text-[#020617]">{persona?.name} tenker...</p>
                        <p className="text-sm text-[#64748b]">Bygger svar ut fra livssituasjon og egenskaper</p>
                      </div>
                    </div>
                    <div className="mt-4 flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500 [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500 [animation-delay:300ms]" />
                    </div>
                  </article>
                );
              })
            ) : results.length > 0 ? (
              results.map((result) => {
                const persona = getSyntestPersonaById(result.personaId);

                if (!persona) {
                  return null;
                }

                return (
                  <article key={result.personaId} className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f1f5f9] text-xl">{persona.emoji}</span>
                      <div>
                        <h5 className="font-bold text-[#020617]">
                          {persona.name} ({persona.age})
                        </h5>
                        <p className="text-sm text-[#64748b]">{persona.role}</p>
                      </div>
                    </div>

                    <p className="mt-4 rounded-r-xl border-l-4 border-violet-300 bg-violet-50 p-4 text-sm italic leading-relaxed text-[#312e81]">
                      {result.reaction}
                    </p>

                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      <div className="rounded-xl bg-[#f8fafc] p-4 text-center">
                        <p className={`text-2xl font-bold ${getScoreColor(result.willingnessScore)}`}>{result.willingnessScore}</p>
                        <p className="mt-1 text-xs text-[#64748b]">Villighet</p>
                        <p className="mt-1 text-[11px] text-[#94a3b8]">Skår fra 1 til 10</p>
                      </div>
                      <div className="rounded-xl bg-[#f8fafc] p-4 text-center">
                        <p className={`text-2xl font-bold ${getConcernColor(result.concernScore)}`}>{result.concernScore}</p>
                        <p className="mt-1 text-xs text-[#64748b]">Bekymringer</p>
                        <p className="mt-1 line-clamp-2 text-[11px] text-[#94a3b8]">{result.concerns}</p>
                      </div>
                      <div className="rounded-xl bg-[#f8fafc] p-4 text-center">
                        <p className="text-2xl font-bold text-red-500">{result.barrierCount}</p>
                        <p className="mt-1 text-xs text-[#64748b]">Barriere</p>
                        <p className="mt-1 line-clamp-2 text-[11px] text-[#94a3b8]">{result.barrier}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="rounded-xl bg-emerald-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Positivt</p>
                        <p className="mt-1 text-sm text-emerald-950">{result.positives}</p>
                      </div>
                      <div className="rounded-xl bg-violet-50 p-4">
                        <p className="text-xs font-bold uppercase tracking-wide text-violet-700">Forslag</p>
                        <p className="mt-1 text-sm italic text-violet-950">{result.suggestion}</p>
                      </div>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 text-sm text-[#334155]">
                Ingen resultater ennå. Kjør en simulering for å se svar.
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
