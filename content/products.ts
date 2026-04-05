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
    tagline: 'Felles workshop for raske avklaringer.',
    description: 'Et workshopverktøy for å samle team, mål og prioriteringer i ett rom.',
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
    tagline: 'Ukentlig refleksjon for bedre flyt.',
    description: 'Hjelper team å fange opp signaler, risiko og læring fra uke til uke.',
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
    tagline: 'AI-støtte for tydeligere tekst.',
    description: 'Assisterer med språk, struktur og tone i kommunale dokumenter.',
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
    tagline: 'Daglige AI-oppsummeringer for teamet.',
    description: 'Genererer korte statusbrev og oppfølgingspunkter basert på dagens arbeid.',
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
    description: 'Utforsker store tekstmengder for å finne tema, mønster og avvik.',
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
    tagline: 'Enklere oversikt over byggesaksdata.',
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
    tagline: 'Bygg AI-boter for interne behov.',
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
