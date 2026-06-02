export interface SyntestPersona {
  id: string;
  name: string;
  age: number;
  emoji: string;
  role: string;
  category: 'Innbyggere' | 'Ansatte' | 'Næringsliv' | 'Offentlige instanser' | 'Politikere';
  lifeSituation: string;
  traits: string[];
}

export interface SyntestResult {
  personaId: string;
  reaction: string;
  concernScore: number;
  willingnessScore: number;
  barrierCount: number;
  concerns: string;
  positives: string;
  barrier: string;
  suggestion: string;
}

export const syntestPersonas: SyntestPersona[] = [
  {
    id: 'kari',
    name: 'Kari',
    age: 72,
    emoji: '👵',
    role: 'Hjemmeboende pensjonist',
    category: 'Innbyggere',
    lifeSituation: 'Bor alene etter at mannen døde, får hjemmehjelp og bruker helst telefon når hun skal ordne kommunale tjenester.',
    traits: ['Lite digitalt', 'Hjemmehjelp', 'Enke'],
  },
  {
    id: 'ahmed',
    name: 'Ahmed',
    age: 34,
    emoji: '👨',
    role: 'Nyankommet flyktning',
    category: 'Innbyggere',
    lifeSituation: 'Har kort botid i Norge, lærer norsk, forsørger familien og er usikker på hvilke rettigheter han har.',
    traits: ['Norsk B1', 'Barnefamilie', 'Leier'],
  },
  {
    id: 'marie',
    name: 'Marie',
    age: 28,
    emoji: '👩',
    role: 'Småbarnsmor, aleneforsørger',
    category: 'Innbyggere',
    lifeSituation: 'Jobber fulltid, leverer og henter i barnehage, og trenger kommunale tjenester som sparer tid fremfor å skape nye skjemaer.',
    traits: ['Stresskjørt', 'Fulljobb', 'Toddler'],
  },
  {
    id: 'tor',
    name: 'Tor',
    age: 55,
    emoji: '👨',
    role: 'Uføretrygdet, psykiske utfordringer',
    category: 'Innbyggere',
    lifeSituation: 'Har perioder med angst, lav tillit til systemet og trenger forutsigbarhet og lav terskel for personlig kontakt.',
    traits: ['Uføre', 'Angst', 'Alene'],
  },
  {
    id: 'ingrid',
    name: 'Ingrid',
    age: 42,
    emoji: '👩‍💼',
    role: 'Ressurssterk trebarnsmor',
    category: 'Innbyggere',
    lifeSituation: 'Høy inntekt, krevende kalender og høy digital kompetanse, men liten tålmodighet med dårlige løsninger.',
    traits: ['Høy inntekt', 'Krevende', 'Digitalt sterk'],
  },
  {
    id: 'omar',
    name: 'Omar',
    age: 17,
    emoji: '👦',
    role: 'Tenåring, utenfor skole og arbeid',
    category: 'Innbyggere',
    lifeSituation: 'Har falt ut av skoleløpet, svarer sjelden på brev og trenger hjelp som møter ham der han faktisk er.',
    traits: ['Ungdom', 'Frafall', 'Isolert'],
  },
];

export function getSyntestPersonaById(id: string) {
  return syntestPersonas.find((persona) => persona.id === id);
}

export const syntestExamples = [
  'Stenge fysisk servicekontor og flytte alt digitalt',
  'Ny app for timebestilling hos helsesøster',
  'Automatisk AI-behandling av hjelpesøknader',
];

export const syntestPresetResults: Record<string, SyntestResult> = {
  kari: {
    personaId: 'kari',
    reaction:
      '“Jeg blir litt redd hvis alt skal skje på skjerm. Jeg vil gjerne gjøre ting riktig, men når jeg ikke forstår hvor jeg skal trykke, føles det som om kommunen forsvinner bak en lukket dør.”',
    concernScore: 5,
    willingnessScore: 3,
    barrierCount: 2,
    concerns: 'Mister mulighet til å spørre et menneske og er redd for å gjøre feil i digitale skjemaer.',
    positives: 'Kan spare reisevei hvis hun får trygg telefonstøtte eller hjelp fra hjemmehjelpen.',
    barrier: 'Lav digital trygghet og behov for personlig bekreftelse før hun våger å endre rutiner.',
    suggestion: 'Behold telefonnummer, tilby drop-in digitalhjelp og send korte papirbrev som forklarer den nye løsningen steg for steg.',
  },
  ahmed: {
    personaId: 'ahmed',
    reaction:
      '“Hvis appen forklarer hva jeg har rett på og bruker enkelt språk, kan det hjelpe. Men jeg er redd for å misforstå noe viktig og miste støtte til familien min.”',
    concernScore: 4,
    willingnessScore: 6,
    barrierCount: 2,
    concerns: 'Usikker på rettigheter, språk og om digitale svar kan brukes som bindende informasjon.',
    positives: 'Lavere terskel hvis han kan teste anonymt, få oversettelser og se konkrete eksempler.',
    barrier: 'Språk, tillit og frykt for konsekvenser hvis han sender feil dokumentasjon.',
    suggestion: 'Bruk klart norsk, forklar rettigheter med eksempler og legg inn “snakk med veileder”-knapp ved alle vanskelige valg.',
  },
  marie: {
    personaId: 'marie',
    reaction:
      '“Dette høres faktisk bra ut for meg som har så lite tid. Hvis jeg slipper kø og kan ordne ting etter leggetid, er det gull — men bare hvis systemene snakker sammen.”',
    concernScore: 5,
    willingnessScore: 7,
    barrierCount: 1,
    concerns: 'Fragmenterte digitale løsninger som ber om de samme opplysningene flere ganger.',
    positives: 'Sparer tid, gir fleksibilitet og gjør det mulig å følge opp saker når hverdagen roer seg.',
    barrier: 'Manglende integrasjon mellom kommunale systemer og risiko for flere innlogginger.',
    suggestion: 'Lag én samlet inngang med status på alle saker, gjenbruk kjente opplysninger og tilby backup på telefon ved hastesaker.',
  },
  tor: {
    personaId: 'tor',
    reaction:
      '“Jeg orker ikke enda et system som sender meg rundt. Hvis jeg først prøver, må jeg vite at noen følger med og at jeg ikke mister saken min hvis jeg får en dårlig uke.”',
    concernScore: 6,
    willingnessScore: 4,
    barrierCount: 3,
    concerns: 'Frykter tap av kontroll, automatiske avslag og at digital dialog øker stressnivået.',
    positives: 'Kan oppleves tryggere enn oppmøte hvis tempoet er rolig og han kan lagre underveis.',
    barrier: 'Angst, lav systemtillit og behov for forutsigbar oppfølging fra en kjent kontakt.',
    suggestion: 'Gi tydelig saksstatus, lagre utkast automatisk og la brukeren velge fast kontaktperson eller telefonoppfølging.',
  },
  ingrid: {
    personaId: 'ingrid',
    reaction:
      '“Jeg forventer egentlig at kommunen fikser dette digitalt. Men jeg blir irritert hvis løsningen er treg, ulogisk eller krever informasjon dere allerede har.”',
    concernScore: 3,
    willingnessScore: 9,
    barrierCount: 1,
    concerns: 'Lav toleranse for dårlig brukeropplevelse, treg respons og manglende datadeling.',
    positives: 'Høy motivasjon for selvbetjening, varsler og oversikt hvis løsningen fungerer sømløst.',
    barrier: 'Kvalitetsforventninger: løsningen må være like enkel som bank og helsetjenester hun bruker fra før.',
    suggestion: 'Prioriter rask flyt, tydelig status, kalenderintegrasjon og kvitteringer som kan deles med resten av familien.',
  },
  omar: {
    personaId: 'omar',
    reaction:
      '“Hvis dette er jo helt dust og bare enda en greie jeg må logge inn på, mister dere meg. Men hvis jeg får svar på mobilen uten masse skjema, kan det faktisk funke.”',
    concernScore: 5,
    willingnessScore: 2,
    barrierCount: 1,
    concerns: 'Får ikke hjelp når han trenger det mest og opplever kommunale kanaler som voksenstyrte og tunge.',
    positives: 'Mobil, chat og lav terskel kan gjøre det enklere å ta første steg uten å møte opp fysisk.',
    barrier: 'Lav motivasjon, lite tillit og behov for rask respons før han faller ut av dialogen.',
    suggestion: 'Tilby enkel chat på mobil, korte meldinger og mulighet for drop-in timer med ungdomskontakt uten lang forklaring først.',
  },
};
