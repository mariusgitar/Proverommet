'use client';

import { Inter } from 'next/font/google';
import { useEffect, useMemo, useRef, useState } from 'react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type BotKey = 'migrasjon' | 'personvern';

interface BotConfig {
  key: BotKey;
  emoji: string;
  name: string;
  description: string;
  suggestions: string[];
  responses: Record<string, string>;
}

const demoFallbackResponse = `Dette er en demo med forhåndsdefinerte svar.
I en ekte bot ville Claude ha søkt i fagdokumentene
og gitt deg et presist svar basert på kildene.`;

const bots: BotConfig[] = [
  {
    key: 'migrasjon',
    emoji: '🌍',
    name: 'Migrasjonsrådgiveren',
    description:
      'Hjelper ansatte med spørsmål om rettigheter, tiltak og prosedyrer for familier med migrasjonsbakgrunn.',
    suggestions: [
      'Familie med barn 3 år, ikke i barnehage — hva gjør jeg?',
      'Hvem har rett på tolk?',
      'Hva er forskjellen på opphold og statsborgerskap?',
    ],
    responses: {
      'Familie med barn 3 år, ikke i barnehage — hva gjør jeg?': `Barn med lovlig opphold har rett til barnehageplass fra
måneden etter de fyller 1 år. Ta kontakt med kommunens
barnehagekontor for å søke om plass. Husk at familien kan
ha rett på moderasjonsordninger basert på inntekt.
Kilde: Barnehageloven §12a`,
      'Hvem har rett på tolk?': `Alle som ikke behersker norsk godt nok til å ivareta
sine rettigheter i møte med det offentlige har rett på
kvalifisert tolk. Dette gjelder særlig i helse-, barnehage-
og barnevernssaker. Bruk Tolketjenesten eller godkjente
tolkebyråer — unngå familiemedlemmer som tolk.`,
      'Hva er forskjellen på opphold og statsborgerskap?': `Oppholdstillatelse gir rett til å bo og arbeide i Norge
i en bestemt periode. Statsborgerskap er permanent og gir
fulle rettigheter inkludert stemmerett. Man kan søke
statsborgerskap etter 7 års botid med oppholdstillatelse.`,
    },
  },
  {
    key: 'personvern',
    emoji: '🔒',
    name: 'Personvernboten',
    description:
      'Svarer på GDPR-spørsmål for kommuneansatte — samtykke, innsyn, lagringstid og avvik.',
    suggestions: [
      'Hvor lenge kan vi lagre saksdokumenter?',
      'Trenger vi samtykke for å sende e-post til brukere?',
      'Hva gjør vi ved et dataavvik?',
    ],
    responses: {
      'Hvor lenge kan vi lagre saksdokumenter?': `Kommunale saksdokumenter skal følge
bevarings- og kassasjonsreglene i arkivloven.
Hovedregelen er at offentlige saksdokumenter
bevares permanent. Personopplysninger i saker
som er avsluttet skal vurderes for sletting
etter formålet er oppnådd. Kontakt arkivtjenesten
ved tvil.`,
      'Trenger vi samtykke for å sende e-post til brukere?': `Ikke nødvendigvis. Samtykke er kun én av seks
behandlingsgrunnlag i GDPR. For kommunal
saksbehandling er hjemmel i lov eller offentlig
myndighetsutøvelse (art. 6e) ofte tilstrekkelig.
Samtykke egner seg best for frivillige tjenester
og nyhetsbrev.`,
      'Hva gjør vi ved et dataavvik?': `Et dataavvik skal varsles til Datatilsynet
innen 72 timer dersom det medfører risiko for
enkeltpersoners rettigheter. Dokumenter avviket
internt uansett. Kontakt kommunens
personvernombud umiddelbart — de har
varslingsrutiner klare.`,
    },
  },
];

interface ChatEntry {
  id: string;
  question: string;
  answer: string | null;
  isThinking: boolean;
}

export function BotfabrikkDemo() {
  const [activeBot, setActiveBot] = useState<BotConfig | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [chatEntries, setChatEntries] = useState<ChatEntry[]>([]);
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const timeoutRefs = useRef<number[]>([]);

  const canSend = inputValue.trim().length > 0;

  const statusPill = useMemo(
    () => (
      <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
        DEMO
      </span>
    ),
    [],
  );

  const openBot = (bot: BotConfig) => {
    setActiveBot(bot);
    setInputValue('');
    setChatEntries([]);
  };

  const closeModal = () => {
    setActiveBot(null);
    setInputValue('');
    setChatEntries([]);
  };

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, []);

  const submitQuestion = (questionInput?: string) => {
    if (!activeBot) {
      return;
    }

    const question = (questionInput ?? inputValue).trim();
    if (!question) {
      return;
    }

    const id = `${Date.now()}-${Math.random()}`;
    const answer = activeBot.responses[question] ?? demoFallbackResponse;

    setChatEntries((current) => [...current, { id, question, answer: null, isThinking: true }]);

    const timeoutId = window.setTimeout(() => {
      setChatEntries((current) =>
        current.map((entry) => (entry.id === id ? { ...entry, answer, isThinking: false } : entry)),
      );
    }, 1200);
    timeoutRefs.current.push(timeoutId);
    setInputValue('');
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText('marius.granholt.lundervold@tonsberg.kommune.no');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`${inter.className} relative mx-auto w-full max-w-[680px] overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white text-[#0f172a]`}
    >
      <div className="max-h-[820px] space-y-10 overflow-y-auto p-6 sm:p-8">
        <section className="space-y-5">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d28d9]">Botfabrikken</p>
            {statusPill}
            <h3 className="text-3xl font-semibold leading-tight">
              Hva om fagansvarlige kunne lage sin egen chatbot på en ettermiddag?
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-[#64748b]">
              Last opp fagdokumenter, skriv inn noen setninger om domenet — og få en ferdig chatbot som svarer
              presist på spørsmål fra kolleger og brukere.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['📄 Last opp fagdokumenter', '🤖 Del med kolleger på sekunder'].map((feature) => (
              <span key={feature} className="rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-3 py-1.5 text-xs font-medium text-[#0f172a]">
                {feature}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d28d9]">Prøv en bot</p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {bots.map((bot) => (
              <article key={bot.key} className="flex h-full flex-col rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4">
                <div className="mb-2 text-2xl" aria-hidden="true">
                  {bot.emoji}
                </div>
                <h4 className="text-base font-semibold text-[#0f172a]">{bot.name}</h4>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-[#64748b]">{bot.description}</p>
                <button
                  type="button"
                  onClick={() => openBot(bot)}
                  className="mt-4 inline-flex w-fit rounded-lg bg-[#6d28d9] px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-700"
                >
                  Chat →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d28d9]">Bestill bot</p>
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6 text-center">
            <h3 className="text-2xl font-semibold">Vil du teste en bot for ditt fagområde?</h3>
            <p className="mt-2 text-sm text-[#64748b]">
              Ta kontakt så setter vi opp en pilot — gjerne med dine egne fagdokumenter.
            </p>
          </div>

          {!showEmail ? (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowEmail(true)}
                className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                📧 Vis e-postadresse
              </button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-4 py-3">
              <span className="break-all text-sm font-medium text-[#0f172a]">marius.granholt.lundervold@tonsberg.kommune.no</span>
              <button
                type="button"
                onClick={copyEmail}
                className="rounded-lg border border-[#cbd5e1] bg-white px-3 py-1.5 text-xs font-semibold text-[#0f172a]"
              >
                {copied ? 'Kopiert ✓' : 'Kopier'}
              </button>
            </div>
          )}
        </section>
      </div>

      {activeBot ? (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="flex h-[80vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#e2e8f0] px-4 py-3">
              <h4 className="text-sm font-semibold text-[#0f172a]">
                {activeBot.emoji} {activeBot.name}
              </h4>
              <button type="button" onClick={closeModal} className="text-sm font-medium text-[#64748b] transition hover:text-[#0f172a]">
                × Lukk
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              <div className="flex flex-wrap gap-2">
                {activeBot.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => {
                      setInputValue(suggestion);
                      submitQuestion(suggestion);
                    }}
                    className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-left text-xs font-medium text-violet-700"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              {chatEntries.length === 0 ? (
                <p className="text-sm text-[#64748b]">Velg et forslag eller skriv et spørsmål for å se demosvar.</p>
              ) : (
                <div className="space-y-3">
                  {chatEntries.map((entry) => (
                    <div key={entry.id} className="space-y-2">
                      <div className="ml-auto w-fit max-w-[90%] rounded-xl bg-violet-600 px-3 py-2 text-sm text-white">
                        {entry.question}
                      </div>
                      {entry.isThinking ? (
                        <div className="w-fit rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2">
                          <div className="flex items-center gap-1">
                            <span className="h-2 w-2 animate-bounce rounded-full bg-[#6d28d9] delay-0" />
                            <span
                              className="h-2 w-2 animate-bounce rounded-full bg-[#6d28d9] delay-150"
                              style={{ animationDelay: '150ms' }}
                            />
                            <span
                              className="h-2 w-2 animate-bounce rounded-full bg-[#6d28d9] delay-300"
                              style={{ animationDelay: '300ms' }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="max-w-[95%] whitespace-pre-line rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-3 py-2 text-sm text-[#0f172a]">
                          {entry.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <form
              className="flex items-center gap-2 border-t border-[#e2e8f0] p-3"
              onSubmit={(event) => {
                event.preventDefault();
                submitQuestion();
              }}
            >
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Skriv et spørsmål..."
                className="w-full rounded-xl border border-[#e2e8f0] px-3 py-2 text-sm outline-none ring-[#6d28d9] focus:ring"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="rounded-xl bg-[#6d28d9] px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
