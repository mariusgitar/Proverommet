export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: 'workshop' | 'analyse' | 'verktoy' | 'ai';
  status: 'aktiv' | 'beta' | 'eksperiment';
  color: string;
  accent: string;
  emoji: string;
  demoAvailable: boolean;
  productMapAvailable: boolean;
  liveUrl?: string;
}

export type ProductCategory = Product['category'];

export const productCategories: Array<{ value: ProductCategory; label: string }> = [
  { value: 'workshop', label: 'Workshop' },
  { value: 'analyse', label: 'Analyse' },
  { value: 'verktoy', label: 'Verktøy' },
  { value: 'ai', label: 'AI' },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PRODUKTER — rediger copy her
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Denne filen styrer alle produktkort og produktsider.
// Du kan trygt redigere følgende felt direkte i GitHub:
//   name        → vises som tittel overalt
//   tagline     → kort beskrivelse under tittelen
//   description → lengre tekst på produktsiden
//   status      → 'aktiv' | 'beta' | 'eksperiment'
//   emoji       → ikonet på kortet
//
// IKKE endre uten å vite hva du gjør:
//   slug        → brukes i URL, må matche demo-komponent
//   category    → brukes til filtrering
//   color/accent → Tailwind-klasser, må være gyldige
//   demoAvailable / productMapAvailable → styrer knapper
export const products: Product[] = [
  // ─── Sammen ───────────────────────────────
  {
    slug: 'sammen',
    name: 'Sammen',
    tagline: 'Fasilitatorstyrt verktøy for digitale og fysiske workshops — fra innspill til beslutning. Tenk Padlet og Menti med større kontroll og uten restriksjoner.',
    description: 'Fasilitatorstyrt verktøy for digitale og fysiske workshops — fra innspill til beslutning. Tenk Padlet og Menti med større kontroll og uten restriksjoner.',
    category: 'workshop',
    status: 'aktiv',
    color: 'bg-blue-50',
    accent: 'text-blue-700',
    emoji: '🤝',
    demoAvailable: true,
    productMapAvailable: true,
    liveUrl: '#',
  },
  // ─── Ukespeil ─────────────────────────────
  {
    slug: 'ukespeil',
    name: 'Ukespeil',
    tagline: 'Rask og morsom app for å planlegge og registrere prosjekttimer',
    description: 'Hjelper team å fange opp mønstre i timebruk og prioriteringer.',
    category: 'workshop',
    status: 'beta',
    color: 'bg-indigo-50',
    accent: 'text-indigo-700',
    emoji: '🪞',
    demoAvailable: true,
    productMapAvailable: true,
    liveUrl: '#',
  },
  // ─── StreKI ───────────────────────────────
  {
    slug: 'streki',
    name: 'StreKI',
    tagline: 'Bildegenerator trent på Marius sin strek. Perfekt for å illustrere Petter i Midten.',
    description: 'Bildegenerator trent på Marius sin strek. Perfekt for å illustrere Petter i Midten.',
    category: 'ai',
    status: 'beta',
    color: 'bg-purple-50',
    accent: 'text-purple-700',
    emoji: '✨',
    demoAvailable: false,
    productMapAvailable: true,
    liveUrl: '#',
  },
  // ─── Daily Brian ──────────────────────────
  {
    slug: 'daily-brian',
    name: 'Daily Brian',
    tagline: 'Personlig notatapp med automatisk generering av oppgaver, oppsummeringer og innsikt.',
    description: 'Personlig notatapp med automatisk generering av oppgaver, oppsummeringer og innsikt.',
    category: 'ai',
    status: 'eksperiment',
    color: 'bg-amber-50',
    accent: 'text-amber-700',
    emoji: '🧠',
    demoAvailable: true,
    productMapAvailable: true,
  },
  // ─── TemAi ────────────────────────────────
  {
    slug: 'temai',
    name: 'TemAi',
    tagline: 'Temaanalyse med innsikt på minutter.',
    description: 'Utforsker store tekstmengder for å finne tema, mønster og avvik. Alt i en enkel og oversiktlig flyt',
    category: 'analyse',
    status: 'eksperiment',
    color: 'bg-rose-50',
    accent: 'text-rose-700',
    emoji: '📊',
    demoAvailable: true,
    productMapAvailable: true,
  },
  // ─── Byggesaksdash ────────────────────────
  {
    slug: 'byggesaksdash',
    name: 'Byggesaksdash',
    tagline: 'Oversikt over byggesaksdata med enkel og robust flyt for ukentlig datafangst.',
    description: 'Dashboard for saksflyt, behandlingstid og kapasitet i byggesak.',
    category: 'analyse',
    status: 'beta',
    color: 'bg-teal-50',
    accent: 'text-teal-700',
    emoji: '🏗️',
    demoAvailable: true,
    productMapAvailable: true,
    liveUrl: '#',
  },
  // ─── Botfabrikk ───────────────────────────
  {
    slug: 'botfabrikk',
    name: 'Botfabrikk',
    tagline: 'Skreddersydde chatboter med egen RAG-kunnskapsbank — for trygge og presise KI-svar.',
    description: 'Et eksperimentelt verktøy for å sette opp domene-spesifikke hjelpeboter.',
    category: 'ai',
    status: 'eksperiment',
    color: 'bg-fuchsia-50',
    accent: 'text-fuchsia-700',
    emoji: '🤖',
    demoAvailable: true,
    productMapAvailable: false,
  },
  // ─── Byråkratens lommekniv ────────────────
  {
    slug: 'byrakratens-lommekniv',
    name: 'Byråkratens lommekniv',
    tagline: 'Små verktøy for stor arbeidshverdag.',
    description: 'Samler nyttige mikrofuksjoner for administrasjon, tekst og beslutningsstøtte.',
    category: 'verktoy',
    status: 'aktiv',
    color: 'bg-emerald-50',
    accent: 'text-emerald-700',
    emoji: '🧰',
    demoAvailable: true,
    productMapAvailable: false,
    liveUrl: '#',
  },
];
