import type { Roadmap } from './types'

export const roadmap: Roadmap = {
  slug: 'daily-brian',
  updatedAt: 'April 2026',
  version: 'v1.1',
  modules: [
    {
      name: 'Daily Note Editor',
      emoji: '📝',
      color: '#1a1a1a',
      status: 'done',
      features: [
        { text: 'Fri skriving i Tiptap med ##-seksjonsstruktur', status: 'done' },
        { text: 'Auto-lagring og delta-tracking', status: 'done' },
        { text: 'Ytelsesoptimalisering pågår', status: 'partial' },
      ],
    },
    {
      name: 'Levende lister',
      emoji: '✅',
      color: '#1e3a5f',
      status: 'done',
      features: [
        { text: 'LLM ekstraherer oppgaver, ideer og beslutninger automatisk', status: 'done' },
        { text: 'Åpen/lukket-status og kilde-sporing', status: 'done' },
      ],
    },
    {
      name: 'Chat Capture',
      emoji: '💬',
      color: '#1a2e1a',
      status: 'done',
      features: [
        { text: 'Lim inn ekstern chat som drawer', status: 'done' },
        { text: 'LLM strukturerer innholdet inn i listene', status: 'done' },
      ],
    },
    {
      name: 'Ukesoppsummering',
      emoji: '📅',
      color: '#2d1f3d',
      status: 'partial',
      features: [
        { text: 'Manuelt trigget sammenstilling av uken', status: 'done' },
        { text: 'Automatisk cron-jobb', status: 'planned' },
      ],
    },
    {
      name: 'Treningsmodul',
      emoji: '💪',
      color: '#1a1a2e',
      status: 'partial',
      features: [
        { text: 'Registrer treningsprogrammer fra fritekst via LLM', status: 'done' },
        { text: 'Logg økter med target-arv og lås per øvelse', status: 'done' },
        { text: 'Eksport til ChatGPT for evaluering', status: 'done' },
        { text: 'Calisthenics-progresjon', status: 'planned' },
      ],
    },
    {
      name: 'Semantisk søk',
      emoji: '🔍',
      color: '#1f2937',
      status: 'partial',
      features: [
        { text: 'Custom GPT som søker i arkivet', status: 'done' },
        { text: 'pgvector RAG i Supabase', status: 'planned' },
        { text: 'Brief Me — on-demand RAG-briefing', status: 'planned' },
      ],
    },
  ],
  directions: [
    {
      emoji: '🧠',
      title: 'Semantisk arkiv',
      description: 'Embeddings av alle notater i pgvector gir ekte semantisk søk og kontekstuell briefing.',
      effort: 'mid',
      items: [
        'Supabase pgvector for embeddings',
        'Semantisk søk på tvers av notater',
        'Brief Me — situasjonsrapport på ett klikk',
      ],
    },
    {
      emoji: '🗂️',
      title: 'Prosjektbilder',
      description: 'Auto-genererte situasjonsbilder per prosjekt basert på notater.',
      effort: 'mid',
      items: [
        'Grupper notater per ##-seksjon',
        'Oversikt over parallelle prosjekter',
        'Ingen manuelt vedlikehold',
      ],
    },
    {
      emoji: '⏰',
      title: 'Automatiserte ukesritualer',
      description: 'Supabase cron sender ukesoppsummering automatisk hver fredag.',
      effort: 'low',
      items: [
        'Cron-jobb i Supabase',
        'Push-notifikasjon ved levering',
        'Refleksjon skjer selv om man glemmer det',
      ],
    },
    {
      emoji: '📊',
      title: 'Dypere treningsanalyse',
      description: 'Historikk-visning, progresjonskurver og LLM-analyse direkte i appen.',
      effort: 'high',
      items: [
        'Progresjonskurver per øvelse',
        'LLM-analyse av treningstrender',
        'Reduserer avhengighet av ChatGPT-eksport',
      ],
    },
    {
      emoji: '📱',
      title: 'Delt capture',
      description: 'iOS Share Sheet sender tekst direkte til Daily Brian uten å åpne appen.',
      effort: 'mid',
      items: [
        'iOS Share Sheet-integrasjon',
        'Nettleserutvidelse',
        'Tanker fanges der de oppstår',
      ],
    },
    {
      emoji: '🪗',
      title: 'Kollapsbare seksjoner',
      description: '##-overskrifter i Tiptap kan foldes inn og ut for bedre oversikt.',
      effort: 'low',
      items: [
        'Fold/unfold per ##-seksjon',
        'Reduserer kognitiv belastning',
        'Bedre oversikt på lange dager',
      ],
    },
  ],
  principles: [
    {
      emoji: '🏛️',
      title: 'Strøm-data er hellig',
      description: 'Rådata slettes aldri — lister og sammendrag er alltid utledede views.',
    },
    {
      emoji: '🤝',
      title: 'LLM er assistent, ikke arkitekt',
      description: 'AI strukturerer og foreslår; brukeren eier og bestemmer.',
    },
    {
      emoji: '📱',
      title: 'Mobil-først, alltid',
      description: 'Alle interaksjonsmønstre designes for én tommel på iOS Safari.',
    },
    {
      emoji: '⚡',
      title: 'Minimal friksjon ved capture',
      description: 'Å skrive ned noe skal aldri kreve mer enn tre sekunder og to trykk.',
    },
    {
      emoji: '🔗',
      title: 'Ekstern AI for dypere analyse',
      description: 'Appen eksporterer rent og strukturert; tung resonnering skjer i ChatGPT.',
    },
    {
      emoji: '🤫',
      title: 'Feil tier stille',
      description: 'Appen krasjer aldri for brukeren — alle LLM-kall håndterer feil uten synlig brudd.',
    },
  ],
}

export default roadmap
