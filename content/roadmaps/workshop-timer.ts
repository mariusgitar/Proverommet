import type { Roadmap } from './types'

export const roadmap: Roadmap = {
  slug: 'workshop-timer',
  updatedAt: 'Juni 2026',
  version: 'v1.0',
  modules: [
    {
      name: 'Timermotor',
      emoji: '⏱️',
      color: '#ffedd5',
      status: 'done',
      features: [
        { text: 'Start, pause, stopp og reset', status: 'done' },
        { text: 'Nedtelling med sekund-presisjon', status: 'done' },
        { text: 'Varsling ved utløp', status: 'done' },
      ],
    },
    {
      name: 'Øktoppsett',
      emoji: '🧱',
      color: '#dbeafe',
      status: 'partial',
      features: [
        { text: 'Definer aktiviteter med navn og varighet', status: 'done' },
        { text: 'Bygg sekvenser av blokker', status: 'done' },
        { text: 'Lagre maler', status: 'planned' },
      ],
    },
    {
      name: 'Agendavisning',
      emoji: '📋',
      color: '#dcfce7',
      status: 'partial',
      features: [
        { text: 'Visuell oversikt over alle blokker i økten', status: 'done' },
        { text: 'Fremhev aktiv blokk', status: 'done' },
        { text: 'Vis gjenstående tid per blokk og totalt', status: 'partial' },
      ],
    },
    {
      name: 'Presentatørvisning',
      emoji: '🖥️',
      color: '#ede9fe',
      status: 'planned',
      features: [
        { text: 'Stor og tydelig tidsvisning for skjermdeling eller storskjerm', status: 'planned' },
        { text: 'Minimalt grensesnitt uten distraksjoner', status: 'planned' },
      ],
    },
    {
      name: 'Deltakeroversikt',
      emoji: '👥',
      color: '#fef9c3',
      status: 'planned',
      features: [
        { text: 'Registrer hvem som er i rommet', status: 'planned' },
        { text: 'Fordel taletid jevnt', status: 'planned' },
        { text: 'Vis hvem som har ordet', status: 'planned' },
      ],
    },
    {
      name: 'Eksport og logg',
      emoji: '🗄️',
      color: '#f1f5f9',
      status: 'planned',
      features: [
        { text: 'Lagre gjennomførte økter', status: 'planned' },
        { text: 'Eksporter agenda til PDF eller kalender', status: 'planned' },
        { text: 'Se historikk', status: 'planned' },
      ],
    },
  ],
  directions: [
    {
      emoji: '📚',
      title: 'Møtemaler-bibliotek',
      description: 'Et ferdigbygd bibliotek med maler for vanlige møtetyper som retrospektiv, planleggingsmøte og standups.',
      effort: 'low',
      items: [
        'Senker terskelen for nye brukere',
        'Gjør oppstart raskere',
        'Gir gode standardløp for vanlige fasiliteringsbehov',
      ],
    },
    {
      emoji: '📆',
      title: 'Integrasjon med kalender',
      description: 'Koble appen til Google Kalender eller Outlook slik at agendaen hentes automatisk fra møteinvitasjonen.',
      effort: 'high',
      items: [
        'Eliminerer dobbeltarbeid',
        'Gjør appen til en naturlig del av eksisterende arbeidsflyt',
        'Krever integrasjoner, autentisering og robust datamodell',
      ],
    },
    {
      emoji: '🔗',
      title: 'Sanntidsdeling for deltakere',
      description: 'Deltakere kan følge timeren live på egne enheter via en delt lenke, uten å installere noe.',
      effort: 'mid',
      items: [
        'Gir alle i rommet samme tidsbilde',
        'Øker ansvarsfølelsen',
        'Passer både fysiske, hybride og digitale workshops',
      ],
    },
    {
      emoji: '📈',
      title: 'Fasilitatørstatistikk',
      description: 'Etter en økt vises data om faktisk tidsbruk mot planlagt, og hvilke blokker som sklei.',
      effort: 'mid',
      items: [
        'Hjelper fasilitatøren å forbedre fremtidige møter',
        'Synliggjør reelle mønstre i tidsbruk',
        'Kan gi bedre maler over tid',
      ],
    },
    {
      emoji: '📱',
      title: 'Mobil-app',
      description: 'Nativ app for iOS og Android slik at timeren kan kjøres fra lommen uten nettleser.',
      effort: 'high',
      items: [
        'Gjør produktet tilgjengelig i fysiske workshops uten bærbar PC',
        'Åpner for varsler og mer robust offline-opplevelse',
        'Krever egen distribusjon og vedlikehold',
      ],
    },
    {
      emoji: '🏢',
      title: 'Team-arbeidsområde',
      description: 'Delt kontostruktur der et team kan lagre, redigere og gjenbruke hverandres maler.',
      effort: 'high',
      items: [
        'Gjør produktet klebrig for organisasjoner',
        'Åpner for B2B-prising',
        'Krever roller, rettigheter og delt datalagring',
      ],
    },
  ],
  principles: [
    {
      emoji: '👁️',
      title: 'Tid er synlig',
      description: 'Timeren skal alltid være det dominerende visuelle elementet, så brukeren aldri må lete etter hvor mye tid som gjenstår.',
    },
    {
      emoji: '⚡',
      title: 'Null friksjon ved oppstart',
      description: 'En bruker skal kunne starte en enkel økt på under 30 sekunder, uten obligatorisk registrering eller konfigurasjon.',
    },
    {
      emoji: '🎙️',
      title: 'Fasilitatøren i sentrum',
      description: 'Alle valg tas fra perspektivet til personen som leder møtet, ikke deltakerne eller en administrator.',
    },
    {
      emoji: '🌿',
      title: 'Ro over animasjon',
      description: 'Visuelle overganger og effekter holdes minimale slik at appen ikke stjeler oppmerksomhet fra selve workshopen.',
    },
    {
      emoji: '🛟',
      title: 'Feil er ufarlige',
      description: 'Det skal alltid være mulig å justere, hoppe over eller starte på nytt uten å miste fremdriften i økten.',
    },
    {
      emoji: '🧭',
      title: 'Strukturert fleksibilitet',
      description: 'Appen tilbyr nok struktur til å holde en økt på sporet, men låser aldri fasilitatøren fast i en rigid plan.',
    },
  ],
}

export default roadmap
