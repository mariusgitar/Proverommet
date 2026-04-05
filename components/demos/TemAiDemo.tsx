'use client';

import { Inter } from 'next/font/google';
import { useEffect, useMemo, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type DemoStep = 0 | 1 | 2;

interface AnalysisCode {
  name: string;
  quote: string;
  justification: string;
}

const interviewExcerpt = `Intervjuer: Kan du fortelle litt om hvordan dere
opplever samarbeidet med andre tjenester?

Informant: Det er jo veldig varierende. Noen ganger
fungerer det bra, men ofte sitter vi i vår egen boble.
Vi vet ikke hva de andre gjør, og de vet ikke hva vi
gjør. Det skaper masse dobbeltarbeid.

Intervjuer: Kan du gi et eksempel?

Informant: Ja, vi hadde en familie der både barnevernet,
NAV og helsesykepleier var inne. Ingen visste om
hverandre. Familien måtte fortelle den samme historien
tre ganger. Det er ikke bra for noen.

Intervjuer: Hva tror du skal til for å forbedre dette?

Informant: Bedre systemer, selvfølgelig. Men jeg tror
egentlig det handler mest om kultur. Vi må bli flinkere
til å plukke opp telefonen. Og så må ledelsen prioritere
det — det kan ikke bare være noe vi gjør når vi har tid.`;

const codedResults: AnalysisCode[] = [
  {
    name: 'Silotenkning',
    quote: '"vi sitter i vår egen boble"',
    justification: 'Informanten beskriver tjenester som opererer isolert uten kjennskap til hverandres arbeid.',
  },
  {
    name: 'Dobbeltarbeid',
    quote: '"det skaper masse dobbeltarbeid"',
    justification: 'Manglende koordinering fører til overlappende innsats fra ulike tjenester.',
  },
  {
    name: 'Brukerbelastning',
    quote: '"Familien måtte fortelle den samme historien tre ganger"',
    justification: 'Brukere bærer kostnaden av koordineringssvikten ved gjentatt informasjonsdeling.',
  },
  {
    name: 'Kulturbarrierer',
    quote: '"jeg tror egentlig det handler mest om kultur"',
    justification: 'Informanten peker på holdninger og vaner som større hinder enn tekniske løsninger.',
  },
  {
    name: 'Ledelsesansvar',
    quote: '"ledelsen prioritere det"',
    justification: 'Endring krever aktiv prioritering fra ledelsen, ikke bare individuell vilje.',
  },
];

const steps = ['Dokument', 'Analyse', 'Kodebok'];

export function TemAiDemo() {
  const [step, setStep] = useState<DemoStep>(0);
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    if (step !== 1 || !isThinking) {
      return;
    }

    const timeoutId = window.setTimeout(() => setIsThinking(false), 2000);

    return () => window.clearTimeout(timeoutId);
  }, [isThinking, step]);

  const startAnalysis = () => {
    setStep(1);
    setIsThinking(true);
  };

  const resetDemo = () => {
    setStep(0);
    setIsThinking(false);
  };

  const stepPills = useMemo(
    () => (
      <div className="flex flex-wrap gap-2">
        {steps.map((label, index) => {
          const isActive = index === step;

          return (
            <span
              key={label}
              className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide ${
                isActive
                  ? 'border-[#0ea5e9] bg-[#e0f2fe] text-[#0369a1]'
                  : 'border-[#e2e8f0] bg-white text-[#64748b]'
              }`}
            >
              {index + 1}. {label}
            </span>
          );
        })}
      </div>
    ),
    [step],
  );

  return (
    <div className={`${inter.className} mx-auto w-full max-w-[600px] space-y-4 text-[#0f172a]`}>
      {stepPills}

      <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5 sm:p-6">
        {step === 0 ? (
          <section className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0ea5e9]">Dokument</p>

            <article className="rounded-2xl border border-[#e2e8f0] bg-white p-4">
              <p className="text-sm font-semibold text-[#0f172a]">📄 Intervju_01_anonymisert.txt</p>
              <p className="mt-1 text-xs text-[#64748b]">Lastet opp · 1 204 ord</p>
              <span className="mt-2 inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                Klar til analyse
              </span>
            </article>

            <div className="max-h-[180px] overflow-y-auto rounded-xl border border-[#e2e8f0] bg-white p-4 text-sm leading-relaxed text-[#64748b]">
              <p className="whitespace-pre-line">{interviewExcerpt}</p>
            </div>

            <button
              type="button"
              onClick={startAnalysis}
              className="w-full rounded-xl bg-[#0ea5e9] px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              Analyser intervju →
            </button>
          </section>
        ) : null}

        {step === 1 ? (
          <section className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0ea5e9]">Analyse</p>

            {isThinking ? (
              <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-white p-4">
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0ea5e9]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0ea5e9]" style={{ animationDelay: '150ms' }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#0ea5e9]" style={{ animationDelay: '300ms' }} />
                </div>
                <p className="text-sm text-[#64748b]">Claude leser og koder teksten...</p>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {codedResults.map((code) => (
                    <article key={code.name} className="rounded-xl border border-[#e2e8f0] bg-white p-4">
                      <h4 className="text-sm font-bold text-[#0ea5e9]">{code.name}</h4>
                      <p className="mt-1 text-sm italic text-[#64748b]">{code.quote}</p>
                      <p className="mt-2 text-xs leading-relaxed text-[#64748b]">{code.justification}</p>
                    </article>
                  ))}
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={resetDemo}
                    className="w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-2.5 text-sm font-semibold text-[#0f172a]"
                  >
                    ← Tilbake
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full rounded-xl bg-[#0ea5e9] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                  >
                    Legg alle til kodebok →
                  </button>
                </div>
              </>
            )}
          </section>
        ) : null}

        {step === 2 ? (
          <section className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0ea5e9]">Kodebok</p>
            <h3 className="text-2xl font-semibold text-[#0f172a]">5 koder godkjent</h3>

            <div className="space-y-2">
              {codedResults.map((code) => (
                <article
                  key={code.name}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[#e2e8f0] bg-white px-3 py-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0ea5e9]" aria-hidden="true" />
                    <p className="text-sm font-medium text-[#0f172a]">{code.name}</p>
                    <span className="text-xs text-[#64748b]" aria-hidden="true">
                      ✏️
                    </span>
                  </div>
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">✓ Godkjent</span>
                </article>
              ))}
            </div>

            <div className="rounded-xl border border-[#e2e8f0] bg-white p-4">
              <p className="text-sm text-[#64748b]">
                I TemAi kan du nå bruke denne kodeboken til å rekode hele intervjuet systematisk — og sammenligne på
                tvers av flere intervjuer.
              </p>
            </div>

            <button
              type="button"
              onClick={resetDemo}
              className="w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-2.5 text-sm font-semibold text-[#0f172a]"
            >
              ← Start på nytt
            </button>
          </section>
        ) : null}
      </div>
    </div>
  );
}
