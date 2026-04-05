import type { Roadmap } from './types'

export const roadmap: Roadmap = {
  slug: 'temai',
  updatedAt: 'April 2026',
  version: 'v0.5',
  modules: [
    {
      name: 'Autentisering',
      emoji: '🔐',
      color: '#f0f9ff',
      status: 'done',
      features: [
        { text: 'Innlogging via e-post/passord', status: 'done' },
        { text: 'Sesjonshåndtering og utlogging', status: 'done' },
      ],
    },
    {
      name: 'Dokumenthåndtering',
      emoji: '📄',
      color: '#dde4fb',
      status: 'done',
      features: [
        { text: 'Opplasting av .txt-filer', status: 'done' },
        { text: 'Liste over alle dokumenter', status: 'done' },
        { text: 'Åpne enkeltdokument', status: 'done' },
      ],
    },
    {
      name: 'Åpen koding',
      emoji: '🏷️',
      color: '#d4ede0',
      status: 'done',
      features: [
        { text: 'Send dokument til Claude for kodeforslag', status: 'done' },
        { text: 'Motta koder med sitat og begrunnelse', status: 'done' },
        { text: 'Vis koder i grensesnittet', status: 'done' },
      ],
    },
    {
      name: 'Kodebok',
      emoji: '📚',
      color: '#fdefd2',
      status: 'partial',
      features: [
        { text: 'Legg AI-koder til i kodebok', status: 'done' },
        { text: 'Rediger kodenavn og definisjon', status: 'done' },
        { text: 'Sett status (utkast / godkjent)', status: 'done' },
        { text: 'Supabase schema-oppdatering mangler', status: 'partial' },
      ],
    },
    {
      name: 'Lukket koding',
      emoji: '🔁',
      color: '#ede9fe',
      status: 'partial',
      features: [
        { text: 'Backend-endpoint for rekoding (recode.py)', status: 'done' },
        { text: 'Kobling til frontend', status: 'planned' },
      ],
    },
    {
      name: 'Temagenerering',
      emoji: '🌐',
      color: '#fce7f3',
      status: 'planned',
      features: [
        { text: 'Identifisere mønstre på tvers av koder', status: 'planned' },
        { text: 'Foreslå overordnede tema', status: 'planned' },
      ],
    },
  ],
  directions: [
    {
      emoji: '📂',
      title: 'Flerfilsanalyse',
      description: 'Last opp flere intervjuer og kod dem mot samme kodebok.',
      effort: 'mid',
      items: [
        'Endringer i datamodell og UI',
        'Pipeline-logikken er allerede på plass',
        'Gjør verktøyet nyttig for reelle prosjekter',
      ],
    },
    {
      emoji: '📤',
      title: 'Eksport av analyse',
      description: 'Last ned kodebok og kodede segmenter som CSV eller Excel.',
      effort: 'low',
      items: [
        'Dataene finnes allerede i databasen',
        'Kun eksport-logikk mangler',
        'Nødvendig for rapportskriving',
      ],
    },
    {
      emoji: '✂️',
      title: 'Segmentering før koding',
      description: 'Del opp langt intervju i meningsbærende segmenter før koding.',
      effort: 'mid',
      items: [
        'Nytt pipeline-steg',
        'Kortere enheter gir mer treffsikre koder',
        'Øker presisjon i analysen',
      ],
    },
    {
      emoji: '👥',
      title: 'Samarbeid mellom forskere',
      description: 'Del et prosjekt med kollega, sammenlign kodinger og beregn reliabilitet.',
      effort: 'high',
      items: [
        'Rollestyring og delte prosjekter',
        'Sammenligning av kodinger',
        'Intercoder-reliabilitet',
      ],
    },
    {
      emoji: '🗂️',
      title: 'Prosjektstruktur',
      description: 'Grupper dokumenter i prosjekter med felles kodebok og analysemål.',
      effort: 'mid',
      items: [
        'Ny datamodell og navigasjon',
        'Ingen endringer i analyse-pipeline',
        'Hold flere datasett adskilt',
      ],
    },
    {
      emoji: '🌐',
      title: 'Temagenerering på tvers',
      description: 'Etter koding av mange dokumenter: identifiser overordnede tema.',
      effort: 'high',
      items: [
        'Krever robust flerfilsanalyse først',
        'Sluttproduktet i kvalitativ analyse',
        'AI identifiserer mønstre på tvers',
      ],
    },
  ],
  principles: [
    {
      emoji: '🧑‍💻',
      title: 'Brukeren bestemmer',
      description: 'AI foreslår, mennesket bestemmer. Alle koder kan redigeres, avvises eller overstyres.',
    },
    {
      emoji: '👣',
      title: 'Ett steg om gangen',
      description: 'Verktøyet guider brukeren gjennom analysen i naturlig rekkefølge.',
    },
    {
      emoji: '🔍',
      title: 'Synlighet fremfor magi',
      description: 'Alle AI-beslutninger vises med sitat og begrunnelse.',
    },
    {
      emoji: '🔧',
      title: 'Enkel nok til å vedlikeholdes',
      description: 'Ingen kompleks infrastruktur. Koden skal kunne leses av én utvikler.',
    },
    {
      emoji: '💰',
      title: 'Billig å drifte',
      description: 'Rimelige modeller til enkle oppgaver, dyrere modeller kun der det trengs.',
    },
    {
      emoji: '🌱',
      title: 'Iterativ utvikling',
      description: 'Ny funksjonalitet legges til steg for steg uten å ødelegge det som fungerer.',
    },
  ],
}

export default roadmap
