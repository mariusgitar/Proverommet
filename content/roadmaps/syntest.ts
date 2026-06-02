import type { Roadmap } from './types'

export const roadmap: Roadmap = {
  slug: 'syntest',
  updatedAt: 'Juni 2026',
  version: 'fase 1',
  modules: [
    {
      name: 'Persona-bibliotek',
      emoji: '👥',
      color: '#ede9fe',
      status: 'done',
      features: [
        { text: 'Statisk samling av 6 predefinerte innbyggerpersonas', status: 'done' },
        { text: 'Navn, rolle, emoji, livssituasjon og egenskaper per persona', status: 'done' },
        { text: 'Hjelpefunksjon for oppslag etter ID', status: 'done' },
      ],
    },
    {
      name: 'Simuleringsmotor',
      emoji: '⚙️',
      color: '#dbeafe',
      status: 'done',
      features: [
        { text: 'Tar imot hypotese og valgte personas', status: 'done' },
        { text: 'Returnerer strukturert respons per persona', status: 'done' },
        { text: 'Hardkodet demomotor med ferdige svar', status: 'done' },
      ],
    },
    {
      name: 'Testgrensesnitt',
      emoji: '🧪',
      color: '#f5d0fe',
      status: 'done',
      features: [
        { text: 'Persona-grid med flervalgsfunksjon', status: 'done' },
        { text: 'Hypotesefelt med hurtigeksempler', status: 'done' },
        { text: 'Resultatkort med loading-tilstand og feilhåndtering', status: 'done' },
      ],
    },
    {
      name: 'Resultatlagring',
      emoji: '🗄️',
      color: '#dcfce7',
      status: 'partial',
      features: [
        { text: 'Datamodell for hypotese, persona-ID, AI-respons og tidsstempel', status: 'done' },
        { text: 'Lagring beskrives i produktkartet', status: 'done' },
        { text: 'Kobling til denne hardkodede demoen gjenstår', status: 'planned' },
      ],
    },
    {
      name: 'Historikk og sammenligning',
      emoji: '🕘',
      color: '#fef3c7',
      status: 'planned',
      features: [
        { text: 'Oversikt over tidligere tester', status: 'planned' },
        { text: 'Sammenligne resultater på tvers av hypoteser og personas', status: 'planned' },
      ],
    },
    {
      name: 'Egendefinerte personas og eksport',
      emoji: '🧩',
      color: '#e0f2fe',
      status: 'planned',
      features: [
        { text: 'Opprette og redigere personas utover standardbiblioteket', status: 'planned' },
        { text: 'Last ned testresultater som PDF eller CSV', status: 'planned' },
      ],
    },
  ],
  directions: [
    {
      emoji: '📚',
      title: 'Historikk og testarkiv',
      description: 'En søkbar logg over alle gjennomførte simuleringer filtrert etter dato, persona og hypotese.',
      effort: 'low',
      items: ['Spor utvikling over tid', 'Unngå dobbeltarbeid', 'Databasestrukturen er i stor grad på plass'],
    },
    {
      emoji: '⚖️',
      title: 'Sammenligningsmodus',
      description: 'Kjør samme hypotese mot ulike tidspunkter eller persona-sett og se differansen side om side.',
      effort: 'mid',
      items: ['Dokumenter om endringer adresserer avdekkede bekymringer', 'Ny UI-komponent', 'Diff-logikk for resultater'],
    },
    {
      emoji: '🧑‍🎨',
      title: 'Egendefinerte personas',
      description: 'La ansatte lage egne personas basert på faktiske brukersegmenter de kjenner til.',
      effort: 'mid',
      items: ['Øker presisjonen for spesifikke tjenester', 'Form-UI og validering', 'Databasetabell for brukerdefinerte personas'],
    },
    {
      emoji: '🤝',
      title: 'Teamfunksjonalitet og deling',
      description: 'Enkel autentisering og deling av testsesjoner med kollegaer via lenke.',
      effort: 'high',
      items: ['Gjør Syntest til et samarbeidsverktøy', 'Auth-lag og brukermodell', 'Tilgangsstyring'],
    },
    {
      emoji: '📤',
      title: 'Eksport og rapportgenerering',
      description: 'Generer ferdig formatert rapport som kan brukes i saksutredning eller presentasjon.',
      effort: 'mid',
      items: ['Kobler verktøyet til eksisterende arbeidsprosesser', 'PDF- eller CSV-generering', 'Rapportdesign og formatering'],
    },
    {
      emoji: '🏛️',
      title: 'Utvidelse til andre kommuner',
      description: 'Gjør Syntest tilgjengelig som SaaS for norske kommuner med egne persona-biblioteker og branding.',
      effort: 'high',
      items: ['Multi-tenancy', 'Tilpasbar persona-konfigurasjon', 'Driftsmodell og bærekraftig finansiering'],
    },
  ],
  principles: [
    {
      emoji: '🗣️',
      title: 'Tvillingen snakker, ikke statistikken',
      description: 'Innsikt skal føles menneskelig og konkret. Personas svarer med ord og følelser, ikke bare prosenttall.',
    },
    {
      emoji: '⚡',
      title: 'Lav terskel for å teste',
      description: 'Enhver kommunalt ansatt skal kunne kjøre en simulering på under ett minutt uten opplæring.',
    },
    {
      emoji: '📐',
      title: 'Strukturert nok til å handle på',
      description: 'Outputen følger samme format med bekymringer, positive sider, villighet, barrierer og forslag.',
    },
    {
      emoji: '🎯',
      title: 'Hypotesen er utgangspunktet',
      description: 'Verktøyet tvinger brukeren til å formulere en påstand før simuleringen starter.',
    },
    {
      emoji: '🌱',
      title: 'Åpent for iterasjon',
      description: 'Persona-biblioteket og prompt-logikken skal være lette å justere basert på faktisk bruk.',
    },
    {
      emoji: '🇳🇴',
      title: 'Norsk kontekst er ikke valgfritt',
      description: 'Alle personas er forankret i norsk velferd, kommunal hverdag og norskspråklig kommunikasjon.',
    },
  ],
}

export default roadmap
