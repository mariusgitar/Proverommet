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
      name: 'Deling via lenke og QR-kode',
      emoji: '🔗',
      color: '#dbeafe',
      status: 'done',
      features: [
        { text: 'Generer en unik lenke for økten', status: 'done' },
        { text: 'Vis QR-kode som deltakere scanner', status: 'done' },
        { text: 'Deltakere følger timeren live på egne enheter uten innlogging', status: 'done' },
      ],
    },
    {
      name: 'Fasilitatørvisning',
      emoji: '🖥️',
      color: '#ede9fe',
      status: 'done',
      features: [
        { text: 'Full kontroll over timer og økt', status: 'done' },
        { text: 'Minimalistisk grensesnitt uten distraksjoner', status: 'done' },
        { text: 'Tydelig skille mellom fasilitatør- og deltakervisning', status: 'done' },
      ],
    },
    {
      name: 'Deltakervisning',
      emoji: '📱',
      color: '#dcfce7',
      status: 'done',
      features: [
        { text: 'Stor, tydelig tidsvisning optimalisert for mobil', status: 'done' },
        { text: 'Kun det som trengs for å følge med', status: 'done' },
        { text: 'Ingen kontroller', status: 'done' },
      ],
    },
    {
      name: 'Crazy Eights-modus',
      emoji: '✏️',
      color: '#fef9c3',
      status: 'done',
      features: [
        { text: 'Dedikert timer for Crazy Eights-øvelsen', status: 'done' },
        { text: 'Automatisk sekvens av åtte 60-sekunders runder', status: 'done' },
        { text: 'Varsling mellom runder', status: 'done' },
      ],
    },
    {
      name: 'Maler',
      emoji: '📚',
      color: '#f1f5f9',
      status: 'planned',
      features: [
        { text: 'Ferdigbygde oppsett for vanlige workshop-aktiviteter', status: 'planned' },
        { text: 'Velg mal og start med ett klikk', status: 'planned' },
        { text: 'Crazy Eights er første ferdigstilte mal', status: 'done' },
      ],
    },
  ],
  directions: [
    {
      emoji: '🧩',
      title: 'Flere workshop-maler',
      description: 'Legg til ferdigoppsatte timere for vanlige øvelser som How Might We, dot-voting, 1-2-4-All og lignende.',
      effort: 'low',
      items: [
        'Gjør appen nyttig for flere scenarioer uten at brukeren må konfigurere noe selv',
        'Bygger videre på Crazy Eights som første ferdigstilte mal',
        'Lav innsats fordi mønsteret for maler allerede finnes',
      ],
    },
    {
      emoji: '🧱',
      title: 'Egendefinerte sekvenser',
      description: 'Fasilitatøren kan sette opp en rekke tidsblokker med egne navn og varigheter som kjøres etter hverandre.',
      effort: 'mid',
      items: [
        'Gir mer erfarne fasilitatører fleksibilitet til å tilpasse appen til sin egen metodikk',
        'Støtter workshops som varer gjennom flere aktiviteter',
        'Krever tydelig redigering uten å gjøre standardflyten tyngre',
      ],
    },
    {
      emoji: '🏷️',
      title: 'Merking og tilpasning av deltakervisning',
      description: 'Legg til workshopnavn, logo eller instruksjonstekst som vises i deltakervisningen.',
      effort: 'low',
      items: [
        'Gjør opplevelsen mer profesjonell og kontekstuell for deltakerne',
        'Holder deltakervisningen enkel samtidig som den kan knyttes til workshopens innhold',
        'Lav innsats når tilpasningen begrenses til navn, logo og kort tekst',
      ],
    },
  ],
  principles: [
    {
      emoji: '👁️',
      title: 'Tid er synlig',
      description: 'Timeren er alltid det dominerende elementet – ingen skal måtte lete etter hvor mye tid som gjenstår.',
    },
    {
      emoji: '⚡',
      title: 'Null friksjon for deltakere',
      description: 'En deltaker skal kunne koble seg på ved å scanne en QR-kode, ingenting mer.',
    },
    {
      emoji: '🎙️',
      title: 'Fasilitatøren har kontroll',
      description: 'All styring ligger hos den som leder workshopen – deltakere observerer, fasilitatøren bestemmer.',
    },
    {
      emoji: '🌿',
      title: 'Ro over animasjon',
      description: 'Visuelle overganger og effekter holdes minimale slik at appen ikke stjeler oppmerksomhet fra selve workshopen.',
    },
    {
      emoji: '🧭',
      title: 'Én økt, hele dagen',
      description: 'Appen er bygget for å leve gjennom en hel workshop, ikke bare én enkelt aktivitet.',
    },
  ],
}

export default roadmap
