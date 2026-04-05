import type { Roadmap } from './types'

export const roadmap: Roadmap = {
  slug: 'byggesaksdash',
  updatedAt: 'April 2026',
  version: 'v1.0',
  modules: [
    {
      name: 'Opplastingspipeline',
      emoji: '📤',
      color: '#dde4fb',
      status: 'done',
      features: [
        { text: 'Mottar ukentlige XLSX-eksporter fra Websak', status: 'done' },
        { text: 'Validerer kolonnestruktur og normaliserer felt', status: 'done' },
        { text: 'Beregner alder, aldersgrupper og kurv-vekting', status: 'done' },
        { text: 'Lagrer i Neon via Drizzle ORM', status: 'done' },
        { text: 'Råfil lagres i Vercel Blob', status: 'done' },
      ],
    },
    {
      name: 'Diff-motor',
      emoji: '🔄',
      color: '#d4ede0',
      status: 'done',
      features: [
        { text: 'Sammenligner nytt snapshot med forrige', status: 'done' },
        { text: 'Beregner bevegelsestype per sak', status: 'done' },
        { text: 'Identifiserer plukkede saker', status: 'done' },
        { text: 'Lagrer diff-hendelser i eget artefakt', status: 'done' },
      ],
    },
    {
      name: 'Historisk dataimport',
      emoji: '📅',
      color: '#fdefd2',
      status: 'done',
      features: [
        { text: '50 ukers historikk importert', status: 'done' },
        { text: 'Bootstrap-snapshot markert', status: 'done' },
      ],
    },
    {
      name: 'Dashboard',
      emoji: '📊',
      color: '#ede9fe',
      status: 'done',
      features: [
        { text: 'KPI-kort: totalt, delta, nye, plukkede', status: 'done' },
        { text: 'Tidsserie-grafer per kurv (Recharts)', status: 'done' },
        { text: 'Fargekodet ventetidsindikator', status: 'done' },
        { text: 'Kurvoversikt med status per behandlingskurv', status: 'done' },
      ],
    },
    {
      name: 'Autentisering',
      emoji: '🔐',
      color: '#f0f9ff',
      status: 'done',
      features: [
        { text: 'Cookie-basert passordinnlogging', status: 'done' },
        { text: 'Separate miljøvariabler per bruker', status: 'done' },
        { text: 'Beskytter opplastings- og admin-sider', status: 'done' },
      ],
    },
    {
      name: 'AI-analyse',
      emoji: '🤖',
      color: '#fce7f3',
      status: 'done',
      features: [
        { text: 'Aggregerte data sendes til LLM via OpenRouter', status: 'done' },
        { text: 'Støtter DeepSeek og Gemini Flash', status: 'done' },
        { text: 'Narrativ analyse av porteføljeutvikling', status: 'done' },
      ],
    },
  ],
  directions: [
    {
      emoji: '🔔',
      title: 'Varslingssystem',
      description: 'Automatisk e-post eller Slack når porteføljemål overstiger terskler.',
      effort: 'mid',
      items: [
        'Definerbare terskler per KPI',
        'E-post eller Slack-notifikasjon',
        'Gjør dashboardet proaktivt',
      ],
    },
    {
      emoji: '📄',
      title: 'Eksport og rapportering',
      description: 'Last ned ukesrapport som PDF eller Excel direkte fra dashboardet.',
      effort: 'mid',
      items: [
        'PDF-eksport formatert for ledelse',
        'Excel-eksport med rådata',
        'Fjerner manuelt rapporteringsarbeid',
      ],
    },
    {
      emoji: '🔍',
      title: 'Saksdetalj-visning',
      description: 'Klikk på saksnr og se hele historikken — kurvbevegelser og aldersutvikling.',
      effort: 'mid',
      items: [
        'Historikk per sak',
        'Kurvbevegelser over tid',
        'Undersøk enkeltsaker uten fagsystem',
      ],
    },
    {
      emoji: '⚙️',
      title: 'Konfigurerbare terskler',
      description: 'UI i admin for å justere aldersterskler og kurv-vekter uten kodeendringer.',
      effort: 'low',
      items: [
        'Admin-UI for terskelverdier',
        'Kurv-vekter justerbare i nettleser',
        'Reduserer avhengighet av utvikler',
      ],
    },
    {
      emoji: '📊',
      title: 'Periodesammenligning',
      description: 'Velg to valgfrie snapshots og se diff mellom dem.',
      effort: 'low',
      items: [
        'Data er allerede lagret',
        'Kvartalsvise og årsbaserte analyser',
        'Nyttig for politisk rapportering',
      ],
    },
    {
      emoji: '👔',
      title: 'Flernivå-dashboard',
      description: 'To visninger — overordnet ledelsesview og operativt saksbehandlerview.',
      effort: 'low',
      items: [
        'Dreier seg om UI-layout',
        'Tilpasser info til ulike brukerbehov',
        'Ingen ny datainnhenting nødvendig',
      ],
    },
  ],
  principles: [
    {
      emoji: '📸',
      title: 'Snapshot-basert sannhet',
      description: 'Historiske data endres aldri — hvert snapshot er uforanderlig.',
    },
    {
      emoji: '📋',
      title: 'Forretningslogikk i koden',
      description: 'Regler for kurv og vekting er eksplisitt i prosesseringslaget, ikke i databasen.',
    },
    {
      emoji: '🔒',
      title: 'Ingen persondata i analyser',
      description: 'AI-analysen mottar kun aggregerte tall — saksnr sendes aldri eksternt.',
    },
    {
      emoji: '🇳🇴',
      title: 'Norsk fagspråk',
      description: 'UI bruker kommunale fagtermer — ikke tekniske engelske begreper.',
    },
    {
      emoji: '🔎',
      title: 'Testbarhet gjennom sporbarhet',
      description: 'Alle rader beholder kobling til kildefil; alle diff-hendelser kan etterprøves.',
    },
    {
      emoji: '🖥️',
      title: 'Driftsenkel for ikke-tekniske brukere',
      description: 'Alt vedlikehold gjøres via nettleser — ingen terminalkommandoer i normal drift.',
    },
  ],
}

export default roadmap
