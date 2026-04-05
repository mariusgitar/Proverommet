import type { Roadmap } from './types'

export const roadmap: Roadmap = {
  slug: 'ukespeil',
  updatedAt: 'April 2026',
  version: 'v1.0',
  modules: [
    {
      name: 'Bruker og identitet',
      emoji: '👤',
      color: '#e0f2fe',
      status: 'partial',
      features: [
        { text: 'Velg brukerprofil ved første besøk', status: 'done' },
        { text: 'Lagre valgt bruker lokalt', status: 'done' },
        { text: 'Bytte av bruker', status: 'partial' },
        { text: 'Onboarding for nye teammedlemmer', status: 'planned' },
      ],
    },
    {
      name: 'Ukeplan',
      emoji: '📅',
      color: '#dde4fb',
      status: 'partial',
      features: [
        { text: 'Registrere planlagt tidsfordeling per prosjekt', status: 'done' },
        { text: 'Velge relevante prosjekter for uka', status: 'done' },
        { text: 'Validere at totalen blir 100%', status: 'done' },
        { text: 'UX-forbedringer for hurtigregistrering', status: 'partial' },
        { text: 'Forslag basert på tidligere uker', status: 'planned' },
      ],
    },
    {
      name: 'Ukefasit',
      emoji: '✅',
      color: '#d4ede0',
      status: 'partial',
      features: [
        { text: 'Innsending av faktisk tidsfordeling', status: 'done' },
        { text: 'Sammenligne plan mot faktisk', status: 'done' },
        { text: 'Mer intuitiv redigering før innsending', status: 'partial' },
        { text: 'Støtte for etterregistrering og påminnelser', status: 'planned' },
      ],
    },
    {
      name: 'Innsikt og score',
      emoji: '📊',
      color: '#fdefd2',
      status: 'partial',
      features: [
        { text: 'Beregne treffsikkerhet (accuracy)', status: 'done' },
        { text: 'Streak og gamification', status: 'done' },
        { text: 'Visualisering av trender', status: 'partial' },
        { text: 'Personlige innsikter og anbefalinger', status: 'planned' },
      ],
    },
    {
      name: 'Prosjektadministrasjon',
      emoji: '🗂️',
      color: '#ede9fe',
      status: 'partial',
      features: [
        { text: 'Opprette og redigere prosjekter', status: 'done' },
        { text: 'Aktivere/deaktivere prosjekter', status: 'done' },
        { text: 'Kvalitetssikring av navngivning/farger', status: 'partial' },
        { text: 'Rollebasert styring og historikk', status: 'planned' },
      ],
    },
    {
      name: 'API og datalag',
      emoji: '⚙️',
      color: '#f8fafc',
      status: 'partial',
      features: [
        { text: 'Sentrale endepunkter for v1', status: 'done' },
        { text: 'Upsert for plan/fasit per uke', status: 'done' },
        { text: 'Observability og feilsporing', status: 'partial' },
        { text: 'Hardere tilgangskontroll og revisjonsspor', status: 'planned' },
      ],
    },
  ],
  directions: [
    {
      emoji: '🔮',
      title: 'Prediktiv planlegging',
      description: 'Foreslå ukeplan automatisk basert på brukerens siste 4–8 uker.',
      effort: 'mid',
      items: [
        'Analyser historiske mønstre per bruker',
        'Foreslå prosjektfordeling ved planlegging',
        'Senker terskelen for registrering',
        'Øker datakvalitet over tid',
      ],
    },
    {
      emoji: '👥',
      title: 'Teamnivå-portefølje',
      description: 'Samlet tidsfordeling per team, prosjekt og uke for ledelse og team.',
      effort: 'mid',
      items: [
        'Aggregert visning per prosjekt',
        'Ukentlig teamoversikt',
        'Eksport for rapportering',
        'Bedre prioriteringsgrunnlag',
      ],
    },
    {
      emoji: '📱',
      title: 'Mobil-først mikroinnsending',
      description: 'Ekstra rask innsending optimalisert for mobil på under 30 sekunder.',
      effort: 'low',
      items: [
        'Forenklet mobilvisning',
        'Hurtigknapper for vanlige fordelinger',
        'Øker fullføringsgrad på fredager',
        'Push-påminnelse ved manglende fasit',
      ],
    },
    {
      emoji: '💬',
      title: 'Personlige refleksjoner',
      description: 'Korte ukesammendrag med forslag basert på avvik mellom plan og faktisk.',
      effort: 'mid',
      items: [
        'AI-generert ukesoppsummering',
        'Påpek gjentakende avviksmønstre',
        'Forslag til justering neste uke',
        'Gjør verktøyet nyttig for individet',
      ],
    },
    {
      emoji: '🔗',
      title: 'Integrasjoner',
      description: 'Koble plan/fasit til verktøy teamet allerede bruker.',
      effort: 'high',
      items: [
        'Kalenderintegrasjon',
        'Slack-notifikasjoner',
        'Eksport til Excel/CSV',
        'Høyere adopsjon gjennom kjente flater',
      ],
    },
    {
      emoji: '📈',
      title: 'Dypere prosjektinnsikt',
      description: 'Trender for avvik, stabilitet og risiko per prosjekt over tid.',
      effort: 'high',
      items: [
        'Avvikshistorikk per prosjekt',
        'Stabilitetsindikator',
        'Tidlig varsling ved systematiske avvik',
        'Nyttig for porteføljestyring',
      ],
    },
  ],
  principles: [
    {
      emoji: '⚡',
      title: 'Rask registrering',
      description: 'All kjerneinput skal kunne fullføres på under 30 sekunder.',
    },
    {
      emoji: '🔄',
      title: 'Plan vs. faktisk først',
      description: 'Produktet prioriterer sammenligning og læring, ikke bare logging.',
    },
    {
      emoji: '✂️',
      title: 'Minst mulig friksjon',
      description: 'Få felt, tydelig flyt og minst mulig konfigurasjon for brukeren.',
    },
    {
      emoji: '💡',
      title: 'Tydelighet over kompleksitet',
      description: 'Tall og innsikt skal være enkle å forstå uten forklaring.',
    },
    {
      emoji: '🌱',
      title: 'Kontinuerlig forbedring',
      description: 'Små ukentlige refleksjoner er viktigere enn perfekt historikk.',
    },
    {
      emoji: '👥',
      title: 'Team- og individnytte',
      description: 'Data skal gi verdi både for porteføljestyring og personlig arbeidsflyt.',
    },
  ],
}

export default roadmap
