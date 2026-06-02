import type { Roadmap } from './types';

export const roadmap: Roadmap = {
  slug: 'workshop-timer',
  updatedAt: '2026-06-02',
  version: 'v0.1',
  modules: [
    {
      name: 'Timermotor',
      emoji: '⏱️',
      color: '#ecfeff',
      status: 'done',
      features: [
        { text: 'Start timer', status: 'done' },
        { text: 'Pause timer', status: 'done' },
        { text: 'Reset timer', status: 'done' },
        { text: 'Automatisk overgang mellom segmenter', status: 'done' },
      ],
    },
    {
      name: 'Agendabygger',
      emoji: '🧱',
      color: '#eef2ff',
      status: 'done',
      features: [
        { text: 'Legg til sesjoner med varighet', status: 'done' },
        { text: 'Rediger sesjoner', status: 'done' },
        { text: 'Sorter sesjoner', status: 'done' },
        { text: 'Sett total workshoptid', status: 'done' },
      ],
    },
    {
      name: 'Visningsmodus',
      emoji: '📺',
      color: '#f0fdf4',
      status: 'done',
      features: [
        { text: 'Fullskjermvisning for deltakere', status: 'done' },
        { text: 'Vis nåværende sesjon', status: 'done' },
        { text: 'Vis tid igjen på avstand', status: 'done' },
      ],
    },
    {
      name: 'Varslingssystem',
      emoji: '🔔',
      color: '#fff7ed',
      status: 'partial',
      features: [
        { text: 'Lydvarsler ved sesjonsslutt', status: 'done' },
        { text: 'Visuelle varsler ved sesjonsslutt', status: 'done' },
        { text: 'Varsler ved x minutter igjen', status: 'partial' },
        { text: 'Tilpassbare varsler', status: 'planned' },
      ],
    },
    {
      name: 'Malbibliotek',
      emoji: '📚',
      color: '#faf5ff',
      status: 'planned',
      features: [
        { text: 'Lagre agendaoppsett', status: 'planned' },
        { text: 'Gjenbruk tidligere agendaer', status: 'planned' },
      ],
    },
    {
      name: 'Eksport og deling',
      emoji: '🔗',
      color: '#f8fafc',
      status: 'planned',
      features: [
        { text: 'Del agenda som lenke', status: 'planned' },
        { text: 'Eksporter agenda som PDF', status: 'planned' },
        { text: 'Synkroniser med kalender', status: 'planned' },
      ],
    },
  ],
  directions: [
    {
      emoji: '📝',
      title: 'Fasilitatorverktøy',
      description: 'Gjør appen nyttig gjennom hele workshopen, ikke bare som klokke.',
      effort: 'mid',
      items: ['Legg til notatfelt per sesjon', 'Støtt private fasilitatornotater', 'Utforsk håndopprekning-funksjon'],
    },
    {
      emoji: '👥',
      title: 'Samarbeidsvis modus',
      description: 'Øker engasjement og gir alle eierskap til tidsbruken.',
      effort: 'high',
      items: ['La flere deltakere se live-timeren på egne enheter', 'Del timeren via rom-lenke'],
    },
    {
      emoji: '🔌',
      title: 'Integrasjoner',
      description: 'Fjerner dobbeltarbeid for team som allerede planlegger i andre verktøy.',
      effort: 'high',
      items: ['Importer agenda fra Notion', 'Koble til Google Calendar', 'Utforsk Miro-import'],
    },
    {
      emoji: '📈',
      title: 'Analyselogg',
      description: 'Gir fasilitatorer data til å forbedre fremtidige workshops.',
      effort: 'mid',
      items: ['Registrer faktisk tidsbruk per sesjon', 'Vis avvik fra plan'],
    },
    {
      emoji: '♿',
      title: 'Tilgjengelighetsfokus',
      description: 'Gjør appen brukbar for flere og styrker profesjonell troverdighet.',
      effort: 'low',
      items: ['Forbedre kontrast', 'Styrk skjermleserstøtte', 'Sikre tastaturnavigasjon'],
    },
    {
      emoji: '🏷️',
      title: 'White-label / innbygging',
      description: 'Åpner for B2B-salg til konsulentfirmaer og kursleverandører.',
      effort: 'mid',
      items: ['Gjør appen mulig å bygge inn i andre nettsteder', 'Legg til kundetilpasset profilering'],
    },
  ],
  principles: [
    {
      emoji: '👀',
      title: 'Tid er synlig',
      description: 'Alle i rommet skal alltid vite nøyaktig hvor mye tid som er igjen – uten å måtte spørre.',
    },
    {
      emoji: '🫰',
      title: 'Null friksjon under kjøring',
      description: 'Når workshopen er i gang skal fasilitatoren kunne styre timeren med én handling, aldri mer.',
    },
    {
      emoji: '🧭',
      title: 'Planen er utgangspunktet, ikke loven',
      description: 'Det skal være lett å justere agenda underveis uten at hele oppsettet må gjøres om.',
    },
    {
      emoji: '🤫',
      title: 'Stille som standard',
      description: 'Appen forstyrrer ikke – varsler og animasjoner er dempet med mindre noe faktisk haster.',
    },
    {
      emoji: '🏛️',
      title: 'Bygg for rommet, ikke skjermen',
      description: 'Visningsvalg og skriftstørrelser er designet for å leses på avstand, ikke bare på laptop.',
    },
    {
      emoji: '🚀',
      title: 'Rask å starte, enkel å gjenta',
      description: 'En ny agenda skal kunne settes opp på under to minutter, og en brukt agenda skal være enkel å gjenbruke.',
    },
  ],
};
