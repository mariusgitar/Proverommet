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

export const syntestPresetResultsByExample: Record<string, Record<string, SyntestResult>> = {
  'Stenge fysisk servicekontor og flytte alt digitalt': {
    kari: {
      personaId: 'kari',
      reaction:
        '“Jeg blir litt redd når servicekontoret skal stenges. Det er dit jeg går når brevene er vanskelige. Hvis alt blir digitalt, trenger jeg et ekte menneske jeg kan ringe før jeg tør å sende noe.”',
      concernScore: 8,
      willingnessScore: 2,
      barrierCount: 3,
      concerns: 'Mister fysisk hjelp, er redd for å trykke feil og forstår ikke alltid digitale brev fra kommunen.',
      positives: 'Kan slippe bussreise til sentrum hvis telefonhjelpen er trygg og hun får skriftlig steg-for-steg-veiledning.',
      barrier: 'Lav digital trygghet, lite nettverk som kan hjelpe og stort behov for personlig bekreftelse.',
      suggestion: 'Behold telefonnummer, tilby faste drop-in-timer på biblioteket og send papirbrev med tydelig kontaktperson.',
    },
    ahmed: {
      personaId: 'ahmed',
      reaction:
        '“Digitalt kan være enklere enn å møte opp hvis jeg forstår språket. Men hvis servicekontoret forsvinner, vet jeg ikke hvor jeg skal spørre når jeg er usikker på rettigheter eller dokumenter.”',
      concernScore: 6,
      willingnessScore: 5,
      barrierCount: 2,
      concerns: 'Usikker på rettigheter, språk og hvor han kan få hjelp når digitale skjemaer stopper opp.',
      positives: 'Kan spare tid og reisevei hvis løsningen har klart språk, oversettelser og gode eksempler.',
      barrier: 'Språkbarriere og frykt for å sende feil dokumentasjon uten å få forklart situasjonen muntlig.',
      suggestion: 'Kombiner digital flyt med flerspråklig veiledning, videoeksempler og enkel timebestilling med veileder.',
    },
    marie: {
      personaId: 'marie',
      reaction:
        '“Jeg har egentlig ikke tid til å dra på servicekontoret, så digitalt høres bra ut. Men hvis alt flyttes før systemene er enkle, blir det bare enda en ting jeg må fikse etter leggetid.”',
      concernScore: 4,
      willingnessScore: 7,
      barrierCount: 1,
      concerns: 'Bekymret for kø i digitale kanaler, mange innlogginger og at hun må fylle ut samme informasjon flere steder.',
      positives: 'Gir fleksibilitet til å ordne kommunale saker på kveldstid og slippe fysisk oppmøte.',
      barrier: 'Tidsklemme og lav toleranse for løsninger som ikke lagrer underveis eller fungerer på mobil.',
      suggestion: 'Lag mobilvennlig selvbetjening med lagring, statusvarsler og telefon-backup for hastesaker.',
    },
    tor: {
      personaId: 'tor',
      reaction:
        '“Når de stenger stedet jeg kan gå til, kjenner jeg at skuldrene går opp. Jeg kan bruke digitale ting litt, men ikke når jeg har angst og saken betyr penger eller hjelp.”',
      concernScore: 8,
      willingnessScore: 3,
      barrierCount: 3,
      concerns: 'Frykter å miste kontroll, bli avvist automatisk og ikke klare å forklare vanskelige perioder digitalt.',
      positives: 'Kan fungere på gode dager hvis han kan bruke rolig tempo og få bekreftelse på at saken er mottatt.',
      barrier: 'Angst, lav systemtillit og behov for forutsigbar oppfølging fra en kjent kontaktperson.',
      suggestion: 'Behold mulighet for avtalt fysisk møte, gi fast kontakt og vis tydelig saksstatus med trygg melding etter innsending.',
    },
    ingrid: {
      personaId: 'ingrid',
      reaction:
        '“Jeg forventer at kommunen tilbyr gode digitale tjenester. Å stenge kontoret er greit for meg, men bare hvis løsningen er rask, logisk og ikke ber om informasjon dere allerede har.”',
      concernScore: 3,
      willingnessScore: 9,
      barrierCount: 1,
      concerns: 'Blir irritert hvis den digitale løsningen er treg, ulogisk eller fragmentert mellom ulike kommunale systemer.',
      positives: 'Høy motivasjon for selvbetjening, varsler og oversikt uten å møte opp fysisk.',
      barrier: 'Høye kvalitetsforventninger og liten tålmodighet med dårlig brukeropplevelse.',
      suggestion: 'Prioriter rask flyt, gjenbruk av data, statusoversikt og kvitteringer som kan deles i familien.',
    },
    omar: {
      personaId: 'omar',
      reaction:
        '“Hvis dere stenger kontoret og bare sier at alt ligger på nettsiden, mister dere meg. Jeg kommer ikke til å lete rundt etter riktig skjema når jeg allerede ikke orker skolegreier.”',
      concernScore: 7,
      willingnessScore: 2,
      barrierCount: 2,
      concerns: 'Opplever digitale kommunale løsninger som tunge, voksenstyrte og lette å droppe når motivasjonen er lav.',
      positives: 'Mobil chat kan senke terskelen hvis han får rask respons uten lange forklaringer først.',
      barrier: 'Lav motivasjon, lite tillit og behov for hjelp i kanaler han faktisk bruker.',
      suggestion: 'Tilby mobil chat, korte SMS-påminnelser og drop-in med ungdomskontakt på skole, bibliotek eller fritidsarena.',
    },
  },
  'Ny app for timebestilling hos helsesøster': {
    kari: {
      personaId: 'kari',
      reaction:
        '“Jeg bruker ikke helsesøster selv, men jeg tenker på barnebarna mine. Hvis foreldre må ha enda en app, må kommunen være sikker på at alle faktisk får bestilt time.”',
      concernScore: 5,
      willingnessScore: 4,
      barrierCount: 2,
      concerns: 'Bekymret for at familier uten digital trygghet mister oversikt over helsetilbud til barn og unge.',
      positives: 'Kan gi bedre oversikt for pårørende hvis påminnelser og kontaktinformasjon er tydelig.',
      barrier: 'Mange apper og innlogginger gjør det vanskelig å hjelpe andre i familien.',
      suggestion: 'Gi alternativ telefonbestilling, tydelige SMS-varsler og enkel forklaring som kan deles med foresatte og besteforeldre.',
    },
    ahmed: {
      personaId: 'ahmed',
      reaction:
        '“Dette kan hjelpe familien min hvis appen viser hva helsesøster kan hjelpe med. Men jeg må forstå om timen er gratis, hva jeg skal ta med, og om jeg kan skrive på enkelt norsk.”',
      concernScore: 4,
      willingnessScore: 7,
      barrierCount: 2,
      concerns: 'Usikker på rettigheter, kostnad, språk og hva helsesøster faktisk kan hjelpe familien med.',
      positives: 'Lavere terskel for å bestille hvis appen forklarer tilbudet og sender påminnelser.',
      barrier: 'Språk og manglende kunnskap om norsk helsestasjon- og skolehelsetjeneste.',
      suggestion: 'Legg inn flerspråklig informasjon, eksempler på vanlige spørsmål og mulighet til å be om tolk ved bestilling.',
    },
    marie: {
      personaId: 'marie',
      reaction:
        '“Ja takk, dette trenger jeg. Hvis jeg kan bestille time etter at barnet har sovnet og få påminnelse på mobilen, sparer det meg for telefonkø midt i arbeidstiden.”',
      concernScore: 3,
      willingnessScore: 9,
      barrierCount: 1,
      concerns: 'Bekymret for at appen ikke viser ledige tider raskt nok eller ikke lar henne endre time når hverdagen krasjer.',
      positives: 'Sparer tid, reduserer telefonkø og gir fleksibilitet for en travel aleneforsørger.',
      barrier: 'Tidsklemme og behov for å kunne bestille, endre og avlyse på mobil uten friksjon.',
      suggestion: 'Vis første ledige time, tilby venteliste, kalenderinvitasjon og enkel ombooking med ett trykk.',
    },
    tor: {
      personaId: 'tor',
      reaction:
        '“For ungdom som sliter kan det være bra å slippe å ringe. Men hvis appen føles kald eller vanskelig, kan terskelen bli enda høyere for de som allerede har det tøft.”',
      concernScore: 6,
      willingnessScore: 5,
      barrierCount: 2,
      concerns: 'Frykter at sårbare brukere ikke klarer å fullføre bestilling når de er stresset eller skamfulle.',
      positives: 'Digital bestilling kan gi ro og kontroll for dem som ikke orker telefon eller oppmøte.',
      barrier: 'Psykisk belastning, skam og behov for trygghet om hva som skjer etter bestilling.',
      suggestion: 'Bruk varmt språk, anonym forhåndsinformasjon og tydelig “trenger du hjelp nå?”-vei til menneskelig støtte.',
    },
    ingrid: {
      personaId: 'ingrid',
      reaction:
        '“En app for helsesøster er helt riktig, særlig med tre barn og mange avtaler. Jeg forventer bare at den synker med kalenderen og ikke blir enda et lukket kommunalt system.”',
      concernScore: 2,
      willingnessScore: 9,
      barrierCount: 1,
      concerns: 'Bekymret for manglende kalenderintegrasjon, varsler og oversikt på tvers av flere barn.',
      positives: 'Gir rask selvbetjening, bedre familieoversikt og mindre administrasjon.',
      barrier: 'Høye forventninger til sikker, sømløs og moderne appopplevelse.',
      suggestion: 'Støtt flere barn, kalenderdeling, pushvarsler og trygg oversikt over tidligere og kommende avtaler.',
    },
    omar: {
      personaId: 'omar',
      reaction:
        '“Hvis jeg kan bestille time uten å ringe noen, er det faktisk bedre. Men ikke kall det helsesøster-app med masse voksenord. Jeg må skjønne raskt at jeg kan få hjelp uten drama.”',
      concernScore: 4,
      willingnessScore: 7,
      barrierCount: 1,
      concerns: 'Kan falle av hvis språket er formelt, innloggingen er tung eller det ikke er tydelig hva han kan spørre om.',
      positives: 'Lav terskel, mobiltilgang og mindre ubehag enn å ringe eller møte opp først.',
      barrier: 'Behov for anonym utforsking, enkelt språk og rask vei til en trygg voksen.',
      suggestion: 'Bruk ungdomsvennlig språk, “jeg vil snakke med noen”-knapp og mulighet for chat før timebestilling.',
    },
  },
  'Automatisk AI-behandling av hjelpesøknader': {
    kari: {
      personaId: 'kari',
      reaction:
        '“Jeg liker ikke tanken på at en maskin skal avgjøre om jeg får hjelp. Hva om den ikke forstår hvordan jeg har det hjemme, eller at jeg ikke klarer å forklare alt riktig?”',
      concernScore: 9,
      willingnessScore: 1,
      barrierCount: 3,
      concerns: 'Frykter automatiske avslag, manglende menneskelig skjønn og at feil i skjema får store konsekvenser.',
      positives: 'Raskere svar kan være positivt hvis et menneske kvalitetssikrer og forklarer avgjørelsen.',
      barrier: 'Lav tillit til AI, lav digital trygghet og behov for menneskelig vurdering i sårbare saker.',
      suggestion: 'Kommuniser at AI bare forbereder saken, gi rett til menneskelig vurdering og tilby hjelp til å kontrollere søknaden.',
    },
    ahmed: {
      personaId: 'ahmed',
      reaction:
        '“Jeg blir usikker hvis AI skal behandle søknaden min. Kanskje den ikke forstår dokumentene mine, norskfeilene mine eller hvorfor familien trenger hjelp akkurat nå.”',
      concernScore: 8,
      willingnessScore: 3,
      barrierCount: 3,
      concerns: 'Redd for språkfeil, manglende dokumentasjon og at systemet ikke forstår en nyankommet families situasjon.',
      positives: 'Raskere svar og tydelig sjekkliste kan hjelpe hvis han vet at en veileder kan se saken.',
      barrier: 'Språk, lav systemtillit og frykt for at automatisering gir urettferdige avslag.',
      suggestion: 'Forklar prosessen på enkelt norsk, vis hva AI sjekker, og tilby veiledergjennomgang før endelig vedtak.',
    },
    marie: {
      personaId: 'marie',
      reaction:
        '“Raskere behandling hadde vært fantastisk når økonomien er presset. Men jeg må vite at AI-en ikke bare avslår fordi et vedlegg mangler eller fordi livssituasjonen min er litt rotete.”',
      concernScore: 6,
      willingnessScore: 6,
      barrierCount: 2,
      concerns: 'Bekymret for rigide regler, manglende helhetsblikk og ekstraarbeid hvis søknaden blir feil tolket.',
      positives: 'Kan gi raskere avklaringer, færre telefoner og bedre forutsigbarhet i en travel hverdag.',
      barrier: 'Tillitsbehov og krav om tydelig klagevei hvis automatikk misforstår saken.',
      suggestion: 'Bruk AI til forhåndssjekk, gi varsel om manglende vedlegg og la saksbehandler bekrefte alle avslag.',
    },
    tor: {
      personaId: 'tor',
      reaction:
        '“Det der gjør meg stressa. Jeg har opplevd nok skjema og avslag. Hvis AI skal vurdere hjelpen min, må jeg vite at et menneske faktisk ser meg før noe bestemmes.”',
      concernScore: 9,
      willingnessScore: 2,
      barrierCount: 3,
      concerns: 'Frykter umenneskelig behandling, automatiske avslag og at psykiske utfordringer ikke kommer fram i datafelt.',
      positives: 'Raskere status kan hjelpe hvis han slipper å vente i uvisshet.',
      barrier: 'Angst, lav tillit og behov for relasjonell trygghet i saker som handler om hjelp og økonomi.',
      suggestion: 'Ikke automatiser avslag, gi fast kontaktperson og la brukeren se, rette og forklare opplysninger før vurdering.',
    },
    ingrid: {
      personaId: 'ingrid',
      reaction:
        '“AI kan sikkert effektivisere en del, men kommunen må være ekstremt tydelig på kvalitet, personvern og hvem som har ansvar når systemet tar feil.”',
      concernScore: 5,
      willingnessScore: 7,
      barrierCount: 2,
      concerns: 'Opptatt av personvern, transparens, feilmarginer og ansvarslinje ved automatiserte vurderinger.',
      positives: 'Kan gi raskere saksbehandling og frigjøre tid til komplekse saker hvis styringen er god.',
      barrier: 'Krav om forklarbarhet, datasikkerhet og tydelig menneskelig ansvar.',
      suggestion: 'Publiser prinsipper for AI-bruk, forklar beslutningsstøtten og vis når en saksbehandler har gjort endelig vurdering.',
    },
    omar: {
      personaId: 'omar',
      reaction:
        '“Hvis en AI bare bestemmer ting, gidder jeg ikke. Da føles det som spillet er rigga. Men hvis den bare hjelper meg å se hva jeg mangler før jeg sender, kan det være greit.”',
      concernScore: 8,
      willingnessScore: 3,
      barrierCount: 2,
      concerns: 'Tror lett at systemet er rigget og kan droppe hele søknaden hvis prosessen virker automatisk og kald.',
      positives: 'En enkel forhåndssjekk kan hjelpe ham å fullføre hvis den gir konkrete neste steg.',
      barrier: 'Lav tillit, lav utholdenhet i skjema og behov for rask, menneskelig backup.',
      suggestion: 'Presenter AI som hjelpesjekk, ikke dommer, og gi chat med ungdomskontakt når noe mangler eller virker uklart.',
    },
  },
};

export const syntestPresetResults = syntestPresetResultsByExample[syntestExamples[0]];
