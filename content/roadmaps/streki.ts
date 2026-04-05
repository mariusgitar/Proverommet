import type { Roadmap } from './types'

export const roadmap: Roadmap = {
  slug: 'streki',
  updatedAt: 'April 2026',
  version: 'v1.0',
  modules: [
    {
      name: 'Tekstbasert generering',
      emoji: '✏️',
      color: '#fdefd2',
      status: 'done',
      features: [
        { text: 'Norsk tekstinput med Gemini Flash-oversettelse', status: 'done' },
        { text: 'Flux LoRA med Marius sin illustrasjonsstil', status: 'done' },
        { text: 'To-stegs LLM-pipeline (prompt-ekspansjon → generering)', status: 'done' },
      ],
    },
    {
      name: 'Bildekonvertering',
      emoji: '🖼️',
      color: '#dde4fb',
      status: 'partial',
      features: [
        { text: 'Last opp foto/skisse/skjermbilde', status: 'done' },
        { text: 'Detaljert og enkel illustrasjonsmodus', status: 'done' },
        { text: 'Eksperimentell Gemini Vision-modus', status: 'partial' },
      ],
    },
    {
      name: 'Bildebank',
      emoji: '🗄️',
      color: '#d4ede0',
      status: 'done',
      features: [
        { text: 'Lagring i Neon Postgres + Cloudflare R2', status: 'done' },
        { text: 'Søk på beskrivelse og filtrering', status: 'done' },
        { text: '3-kolonners galleri med lightbox', status: 'done' },
      ],
    },
    {
      name: 'Bakgrunnsfjerning',
      emoji: '🔲',
      color: '#f0f9ff',
      status: 'done',
      features: [
        { text: 'Klientside bakgrunnsfjerning i lightbox', status: 'done' },
        { text: 'Slider for justerbar styrke', status: 'done' },
        { text: 'Last ned som transparent PNG', status: 'done' },
      ],
    },
    {
      name: 'Promptadministrasjon',
      emoji: '⚙️',
      color: '#ede9fe',
      status: 'done',
      features: [
        { text: 'Rediger alle prompts i nettleser uten redeploy', status: 'done' },
        { text: 'Gruppert i tekstprompts, konverteringsmoduser og eksperimentell', status: 'done' },
        { text: 'Strength-parameter per konverteringsmodus', status: 'done' },
      ],
    },
    {
      name: 'Karakterkonsistens',
      emoji: '🧑‍🎨',
      color: '#fce7f3',
      status: 'planned',
      features: [
        { text: 'Faste kommunale personas som egne LoRAer', status: 'planned' },
        { text: 'Kombinerbar med stil-LoRA', status: 'planned' },
        { text: 'Konsistente figurer på tvers av illustrasjoner', status: 'planned' },
      ],
    },
  ],
  directions: [
    {
      emoji: '🧑‍🤝‍🧑',
      title: 'Karakterbibliotek',
      description: 'Dedikerte karakter-LoRAer på faste personas for gjenkjennelige kommunikasjonsfigurer.',
      effort: 'mid',
      items: [
        'Tren LoRA per persona (saksbehandler, innbygger, barn)',
        'Velg karakter og prompt dem inn i settinger',
        'Konsistent utseende på tvers av kampanjer',
      ],
    },
    {
      emoji: '🎨',
      title: 'Stilpakker',
      description: 'Flere visuelle stiler å velge mellom — fargelagt, infografikk, papirklipp.',
      effort: 'mid',
      items: [
        'Tren nye LoRAer per stil',
        'Stilvelger i grensesnittet',
        'Passer ulike kommunikasjonsformål',
      ],
    },
    {
      emoji: '🔁',
      title: 'Iterasjon på eksisterende bilde',
      description: 'Bruk et generert bilde som utgangspunkt for neste generering.',
      effort: 'low',
      items: [
        'Infrastruktur delvis på plass',
        'Juster komposisjon og stemning',
        'Støtter kreativ arbeidsflyt',
      ],
    },
    {
      emoji: '🔗',
      title: 'Deling og eksport',
      description: 'Del enkeltbilder via lenke eller eksporter utvalg som ZIP.',
      effort: 'low',
      items: [
        'Delelenke per bilde',
        'ZIP-eksport av utvalg',
        'Integrasjon med kommunens bildebank',
      ],
    },
    {
      emoji: '🖼️',
      title: 'Plakatgenerator',
      description: 'Ferdig kommunikasjonsmateriell med tekst, layout og illustrasjon kombinert.',
      effort: 'mid',
      items: [
        'Bruk Recraft eller Ideogram for typografi',
        'Maler for vanlige formater',
        'Fra illustrasjon til ferdig plakat',
      ],
    },
    {
      emoji: '🌍',
      title: 'Åpning mot andre kommuner',
      description: 'Gjøre StreKI tilgjengelig for andre kommuner med egne stilpakker.',
      effort: 'high',
      items: [
        'Flerbrukerstøtte',
        'Onboarding og driftsmodell',
        'LoRA-trening per visuell identitet',
      ],
    },
  ],
  principles: [
    {
      emoji: '🎯',
      title: 'Lav terskel, høy kvalitet',
      description: 'Brukeren trenger ingen promptkompetanse — verktøyet gjør det komplekse arbeidet bak kulissene.',
    },
    {
      emoji: '🏛️',
      title: 'Stilen er kommunens',
      description: 'Illustrasjonene skal gjenkjennes som Tønsberg kommunes uttrykk — ikke generisk AI-kunst.',
    },
    {
      emoji: '🗄️',
      title: 'Alt lagres, ingenting kastes',
      description: 'Alle genereringer havner i bildebanken med søkbar metadata.',
    },
    {
      emoji: '📝',
      title: 'Promptene er produktet',
      description: 'Kvaliteten styres av promptene, ikke koden. Promptadministrasjon er en førsteklasses funksjon.',
    },
    {
      emoji: '🧪',
      title: 'Eksperimenter forstyrrer ikke produksjon',
      description: 'Ny funksjonalitet testes i egne moduser med tydelig merking.',
    },
    {
      emoji: '💻',
      title: 'Klientsiden først',
      description: 'Funksjoner som kan skje i nettleseren skjer i nettleseren — raskere og billigere.',
    },
  ],
}

export default roadmap
