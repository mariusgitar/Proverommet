'use client';

import { Barlow } from 'next/font/google';
import { useMemo, useState } from 'react';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

type Screen = 'innspill' | 'stemming' | 'resultater';

const otherInputs = [
  { id: 1, name: 'Kari N.', initials: 'KN', text: 'Manglende tid til felles planlegging mellom tjenestene.' },
  { id: 2, name: 'Ola B.', initials: 'OB', text: 'Utydelige roller gjør at saker havner mellom to stoler.' },
  { id: 3, name: 'Ingrid S.', initials: 'IS', text: 'Vi mangler en felles arena for å følge opp tiltak.' },
];

const votingItems = [
  'Felles møtepunkt mellom skole, helse og NAV hver uke',
  'Tydelig ansvarskart for oppfølging av familier',
  'Bedre informasjonsdeling med samtykkebasert flyt',
  'Felles opplæring i tverrfaglig arbeidsmetodikk',
  'Fast koordinatorrolle i komplekse saker',
];

const resultVotes = [18, 15, 12, 8, 6];
const userResultVotes = [7, 6, 5, 4];

const hardcodedVotingItems = votingItems.map((label, index) => ({
  id: `hardcoded-${index}`,
  label,
}));

export function SammenDemo() {
  const [screen, setScreen] = useState<Screen>('innspill');
  const [inputValue, setInputValue] = useState('');
  const [userInnspill, setUserInnspill] = useState<string[]>([]);
  const [userVotes, setUserVotes] = useState<Record<string, number>>({});
  const [showOthers, setShowOthers] = useState(false);

  const allVotingItems = useMemo(
    () => [
      ...userInnspill.map((label, index) => ({ id: `user-${index}`, label, isUserItem: true })),
      ...hardcodedVotingItems.map((item) => ({ ...item, isUserItem: false })),
    ],
    [userInnspill],
  );

  const totalVotes = Object.values(userVotes).reduce((sum, value) => sum + value, 0);
  const remainingVotes = 5 - totalVotes;

  const sortedResults = useMemo(
    () =>
      [
        ...userInnspill.map((label, index) => ({
          id: `user-${index}`,
          label,
          votes: userResultVotes[index % userResultVotes.length],
          isUserItem: true,
        })),
        ...hardcodedVotingItems.map((item, index) => ({
          id: item.id,
          label: item.label,
          votes: resultVotes[index],
          isUserItem: false,
        })),
      ]
        .sort((a, b) => b.votes - a.votes),
    [userInnspill],
  );

  const addInput = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      return;
    }

    setUserInnspill((current) => [trimmed, ...current]);
    setInputValue('');
  };

  const setVoteCount = (itemId: string, dotIndex: number) => {
    const currentCount = userVotes[itemId] ?? 0;
    const wantedCount = currentCount === dotIndex + 1 ? dotIndex : dotIndex + 1;
    const delta = wantedCount - currentCount;

    if (totalVotes + delta > 5) {
      return;
    }

    setUserVotes((current) => ({ ...current, [itemId]: wantedCount }));
  };

  return (
    <div className={`${barlow.className} mx-auto w-full max-w-[390px] rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-4 text-[#0f172a] shadow-[0_20px_50px_rgba(15,23,42,0.15)]`}>
      <div className="mb-4 grid grid-cols-3 gap-2 rounded-xl bg-white p-1">
        {[
          { key: 'innspill', label: 'Innspill' },
          { key: 'stemming', label: 'Stemming' },
          { key: 'resultater', label: 'Resultater' },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setScreen(tab.key as Screen)}
            className={`rounded-lg px-2 py-2 text-xs font-semibold transition ${
              screen === tab.key ? 'bg-[#3b5bdb] text-white' : 'text-[#64748b] hover:bg-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {screen === 'innspill' ? (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-[#64748b]">Åpne innspill</p>
            <h3 className="text-lg font-semibold">Hva hindrer godt tverrfaglig samarbeid?</h3>
          </div>

          <div className="rounded-xl border border-[#e2e8f0] bg-white p-4">
            <p className="mb-3 text-sm text-[#64748b]">Del ditt innspill</p>
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Skriv et innspill ..."
              className="w-full rounded-lg border border-[#e2e8f0] px-3 py-2 text-sm outline-none ring-[#3b5bdb] focus:ring"
            />
            <button
              type="button"
              onClick={addInput}
              className="mt-3 w-full rounded-lg bg-[#3b5bdb] px-3 py-2 text-sm font-semibold text-white"
            >
              Legg til innspill
            </button>
          </div>

          {userInnspill.map((entry, index) => (
            <div key={`${entry}-${index}`} className="flex gap-3 rounded-xl border border-[#e2e8f0] bg-white p-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dbe4ff] text-xs font-semibold text-[#3b5bdb]">
                DU
              </span>
              <p className="text-sm">{entry}</p>
            </div>
          ))}

          <div className="rounded-xl border border-[#e2e8f0] bg-white p-3">
            <button
              type="button"
              onClick={() => setShowOthers((current) => !current)}
              className="text-sm font-semibold text-[#3b5bdb]"
            >
              {showOthers ? 'Skjul andres innspill' : 'Vis andres innspill'}
            </button>

            {showOthers ? (
              <div className="mt-3 space-y-3">
                {otherInputs.map((entry) => (
                  <div key={entry.id} className="flex gap-3 rounded-lg border border-[#e2e8f0] p-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-[#64748b]">
                      {entry.initials}
                    </span>
                    <div>
                      <p className="text-xs text-[#64748b]">{entry.name}</p>
                      <p className="text-sm">{entry.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <button
            type="button"
            onClick={() => setScreen('stemming')}
            className="sticky bottom-0 w-full rounded-xl bg-[#3b5bdb] px-4 py-3 text-sm font-semibold text-white"
          >
            Lever svar →
          </button>
        </div>
      ) : null}

      {screen === 'stemming' ? (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-[#64748b]">Stemming</p>
            <h3 className="text-lg font-semibold">Stem på det viktigste</h3>
            <p className="mt-1 text-sm text-[#64748b]">Gjenstående prikker: {remainingVotes}</p>
          </div>

          {allVotingItems.map((item) => (
            <div key={item.id} className="rounded-xl border border-[#e2e8f0] bg-white p-4">
              <div className="mb-3 flex items-start justify-between gap-2">
                <p className="text-sm">{item.label}</p>
                {item.isUserItem ? (
                  <span className="rounded-full border border-[#93c5fd] px-2 py-0.5 text-[10px] font-semibold text-[#1d4ed8]">
                    Ditt innspill
                  </span>
                ) : null}
              </div>
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, dotIndex) => {
                  const isActive = dotIndex < (userVotes[item.id] ?? 0);

                  return (
                    <button
                      key={dotIndex}
                      type="button"
                      onClick={() => setVoteCount(item.id, dotIndex)}
                      className={`h-7 w-7 rounded-full border ${
                        isActive ? 'border-[#3b5bdb] bg-[#3b5bdb]' : 'border-[#cbd5e1] bg-white'
                      }`}
                      aria-label={`Sett ${dotIndex + 1} prikker på forslag`}
                    />
                  );
                })}
              </div>
            </div>
          ))}

          <button
            type="button"
            disabled={totalVotes === 0}
            onClick={() => setScreen('resultater')}
            className="w-full rounded-xl bg-[#3b5bdb] px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Send inn stemmer
          </button>
        </div>
      ) : null}

      {screen === 'resultater' ? (
        <div className="space-y-4">
          <div>
            <p className="text-sm text-[#64748b]">Resultater</p>
            <h3 className="text-lg font-semibold">Dette prioriterte gruppen</h3>
          </div>

          {sortedResults.map((item, index) => {
            const maxVotes = sortedResults[0]?.votes ?? 1;
            const width = (item.votes / maxVotes) * 100;

            return (
              <div key={item.label} className="rounded-xl border border-[#e2e8f0] bg-white p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <p className="text-sm font-medium">{item.label}</p>
                  <span className="text-sm font-semibold text-[#3b5bdb]">{item.votes}</span>
                </div>
                {item.isUserItem ? (
                  <span className="mb-2 inline-block rounded-full border border-[#93c5fd] px-2 py-0.5 text-[10px] font-semibold text-[#1d4ed8]">
                    Ditt innspill
                  </span>
                ) : null}
                {index === 0 ? (
                  <span className="mb-2 inline-block rounded-full bg-[#dbe4ff] px-2 py-1 text-xs font-semibold text-[#3b5bdb]">
                    🏆 Mest stemt
                  </span>
                ) : null}
                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 rounded-full bg-[#3b5bdb]" style={{ width: `${width}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
