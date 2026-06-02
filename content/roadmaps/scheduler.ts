import type { Roadmap } from './types'

export const roadmap: Roadmap = {
  slug: 'scheduler',
  updatedAt: 'Juni 2026',
  version: 'v1.0',
  modules: [
    {
      name: 'Agenda-bygger',
      emoji: '🧱',
      color: '#cffafe',
      status: 'done',
      features: [
        { text: 'Legg til, rediger og slett blokker med tittel, varighet og type', status: 'done' },
        { text: 'Drag-and-drop for å endre rekkefølge', status: 'done' },
        { text: 'Automatisk tidsberegning per seksjon og totalt', status: 'done' },
      ],
    },
    {
      name: 'Seksjoner',
      emoji: '🗂️',
      color: '#dbeafe',
      status: 'done',
      features: [
        { text: 'Grupper blokker i navngitte seksjoner', status: 'done' },
        { text: 'Automatisk summering av varighet per seksjon', status: 'done' },
        { text: 'Tydelig struktur for lange workshopprogrammer', status: 'done' },
      ],
    },
    {
      name: 'Blokktyper og kategorier',
      emoji: '🎨',
      color: '#ede9fe',
      status: 'done',
      features: [
        { text: 'Forhåndsdefinerte typer som aktivitet, pause og info', status: 'done' },
        { text: 'Fargekoding som gjør agendaen lett å lese', status: 'done' },
        { text: 'Egendefinerte kategorier per workshop med valgbare preset-farger', status: 'done' },
      ],
    },
    {
      name: 'Workshop-administrasjon',
      emoji: '🛠️',
      color: '#dcfce7',
      status: 'done',
      features: [
        { text: 'Opprett, rediger og slett workshops', status: 'done' },
        { text: 'Listevisning over egne programmer', status: 'done' },
        { text: 'Auto-lagring med debounce', status: 'done' },
      ],
    },
    {
      name: 'Deling',
      emoji: '🔗',
      color: '#fef3c7',
      status: 'done',
      features: [
        { text: 'Redigeringslenke for kollegaer', status: 'done' },
        { text: 'Skrivebeskyttet deltakervisning via unik token', status: 'done' },
        { text: 'Mottakere kan åpne delt agenda uten konto', status: 'done' },
      ],
    },
    {
      name: 'Notater',
      emoji: '📝',
      color: '#fce7f3',
      status: 'done',
      features: [
        { text: 'Flytende notatskuff via FAB', status: 'done' },
        { text: 'Notater knyttes direkte til workshopen', status: 'done' },
        { text: 'Rask tilgang uten å forlate agendaen', status: 'done' },
      ],
    },
    {
      name: 'Autentisering',
      emoji: '🔐',
      color: '#f1f5f9',
      status: 'done',
      features: [
        { text: 'Google OAuth via NextAuth', status: 'done' },
        { text: 'Tilgangskontroll basert på eierskap', status: 'done' },
        { text: 'Egne workshops beskyttes bak innlogging', status: 'done' },
      ],
    },
  ],
  directions: [
    {
      emoji: '📚',
      title: 'Maler og gjenbruk',
      description: 'Lagre workshops som maler som kan gjenbrukes eller deles med andre fasilitatorer.',
      effort: 'mid',
      items: [
        'Reduserer tid brukt på å bygge fra bunnen',
        'Øker verdien for team som kjører like program flere ganger',
        'Passer godt som neste steg fordi grunnstrukturen allerede finnes',
      ],
    },
    {
      emoji: '🖨️',
      title: 'Eksport og utskrift',
      description: 'Eksporter agenda som PDF eller utskriftsvennlig visning for deltakere og fasilitatorer.',
      effort: 'low',
      items: [
        'Støtter workshops som kjøres med fysisk program',
        'Gjør agendaen nyttig også utenfor skjermen',
        'Kan bygges som en enkel utskriftsvennlig visning først',
      ],
    },
    {
      emoji: '📈',
      title: 'Evaluering og gjennomføringslogg',
      description: 'Marker blokker som gjennomført under workshopen og logg avvik fra planen, for eksempel faktisk tidsbruk.',
      effort: 'mid',
      items: [
        'Gir innsikt til forbedring etter workshopen',
        'Dokumenterer hva som faktisk ble gjennomført',
        'Kobler planlegging og læring tettere sammen',
      ],
    },
    {
      emoji: '👥',
      title: 'Samarbeid i sanntid',
      description: 'Flere brukere kan redigere samme workshop samtidig med live-oppdateringer.',
      effort: 'high',
      items: [
        'Gjør verktøyet egnet for team-planlegging',
        'Støtter co-fasilitering før og under workshop',
        'Krever robust konflikthåndtering og synkronisering',
      ],
    },
    {
      emoji: '📊',
      title: 'Portefølje og statistikk',
      description: 'Oversikt over gjennomførte workshops med søk, filtrering og enkel statistikk.',
      effort: 'mid',
      items: [
        'Vis antall timer, tema og deltakere på tvers av workshops',
        'Hjelper fasilitatorer å dokumentere praksis',
        'Gir rapporteringsverdi til oppdragsgivere og organisasjoner',
      ],
    },
    {
      emoji: '🔌',
      title: 'Integrasjoner',
      description: 'Koble agendaen til kalender eller eksporter til Notion og lignende verktøy.',
      effort: 'high',
      items: [
        'Møter brukeren i verktøyene de allerede bruker',
        'Senker terskelen for adopsjon i team',
        'Kan starte med enkel Google/Outlook-kalendereksport',
      ],
    },
  ],
  principles: [
    {
      emoji: '⏱️',
      title: 'Tid er kjernen',
      description: 'Alt i appen er bygget rundt varighet – rekkefølge og tid er de viktigste variablene i en agenda.',
    },
    {
      emoji: '⚡',
      title: 'Minst mulig friksjon',
      description: 'Brukeren skal kunne bygge en ferdig agenda på minutter, uten opplæring eller manualer.',
    },
    {
      emoji: '👁️',
      title: 'Visuell klarhet fremfor fleksibilitet',
      description: 'Appen gjør noen tydelige valg for brukeren heller enn å tilby uendelige innstillinger.',
    },
    {
      emoji: '🔗',
      title: 'Del det du lager',
      description: 'Enhver agenda skal enkelt kunne deles med medplanleggere og deltakere uten at mottaker trenger konto.',
    },
    {
      emoji: '🧭',
      title: 'Bygget for praksis',
      description: 'Funksjonaliteten hentes fra ekte arbeidssituasjoner, ikke hypotetiske behov.',
    },
    {
      emoji: '🌱',
      title: 'Iterativt og levende',
      description: 'Workshop agenda utvikles i takt med faktisk bruk og tilbakemeldinger fra virkelige workshoper.',
    },
  ],
}

export default roadmap
