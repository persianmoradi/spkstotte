/**
 * Central site-konfiguration og indholdsdata for spkstøtte.
 * Ét sted at vedligeholde kontaktinfo, navigation og indsatser.
 */

export const site = {
  name: "spkstøtte",
  legalName: "spkstøtte",
  tagline: "Socialpædagogiske indsatser efter Barnets Lov",
  description:
    "spkstøtte leverer socialfaglige indsatser til børn, unge og familier efter Barnets Lov. Vi arbejder ud fra respekt, tillid, empati og anerkendelse – i tæt samarbejde med landets kommuner.",
  url: "https://www.spkstotte.dk",
  locale: "da_DK",
  phone: "50 66 76 50",
  phoneHref: "tel:+4550667650",
  email: "kontakt@spkstotte.dk",
  emailHref: "mailto:kontakt@spkstotte.dk",
  cvr: "44827530",
  country: "Danmark",
  hours: "24 timer i døgnet",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Forside", href: "/" },
  { label: "Om spkstøtte", href: "/om-spk-stotte" },
  { label: "Socialfaglige indsatser", href: "/indsatser" },
  { label: "Metoder", href: "/metoder" },
  { label: "Samarbejde med kommuner", href: "/samarbejde-med-kommuner" },
  { label: "Kontakt", href: "/kontakt" },
];

export const values = [
  {
    title: "Respekt",
    description:
      "Vi møder hvert barn, ung og familie med respekt for deres historie, ressourcer og selvbestemmelse.",
  },
  {
    title: "Tillid",
    description:
      "Relationen er fundamentet. Vi opbygger tillid gennem stabilitet, gennemsigtighed og forudsigelighed.",
  },
  {
    title: "Empati",
    description:
      "Vi lytter og forstår. Empati gør os i stand til at se bag adfærden og møde det reelle behov.",
  },
  {
    title: "Anerkendelse",
    description:
      "Vi anerkender små som store skridt og styrker troen på egne evner hos både barn og familie.",
  },
] as const;

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  forWhom: string;
  outcomes: string[];
  legal?: string;
};

/**
 * Indsatser. Rækkefølgen er bevaret fra opbygningen, og Familiebehandling
 * er tilføjet som nr. 4 (placeholder indtil kunden leverer endelig tekst).
 *
 * `legal` indeholder paragraf-henvisningen (Barnets Lov), som vises som lille
 * underoverskrift under indsatsens titel. Familiebehandling afventer kundens
 * endelige tekst og har derfor ingen paragraf endnu.
 */
export const services: Service[] = [
  {
    slug: "stottekontaktperson",
    title: "Støttekontaktperson",
    shortDescription:
      "En fast, tryg voksen der støtter barnet eller den unge i hverdagen.",
    description:
      "Vores støttekontaktpersoner skaber en stabil relation og hjælper barnet eller den unge med at mestre hverdagen – fra skole og fritid til struktur, netværk og trivsel. Indsatsen tilrettelægges individuelt og evalueres løbende sammen med sagsbehandler.",
    forWhom: "Børn og unge med behov for en stabil voksenrelation og guidning.",
    outcomes: [
      "Øget trivsel og selvstændighed i hverdagen",
      "Stærkere relation til skole, fritid og netværk",
      "Tydelig dokumentation og løbende status til sagsbehandler",
    ],
    legal: "jf. Barnets Lov § 32, stk. 1, nr. 3",
  },
  {
    slug: "paedagogisk-stotte",
    title: "Pædagogisk støtte",
    shortDescription:
      "Målrettet pædagogisk indsats i hjemmet og det nære miljø.",
    description:
      "Pædagogisk støtte er en helhedsorienteret indsats, der styrker familiens egne ressourcer og handlekompetencer. Vi arbejder konkret med struktur, samspil og udvikling i barnets hverdag og understøtter forældrene i at fastholde positive forandringer.",
    forWhom: "Familier og børn med behov for pædagogisk udvikling og struktur.",
    outcomes: [
      "Styrket forældrekompetence og samspil",
      "Konkrete redskaber til hverdagens udfordringer",
      "Forankring af forandringer der holder over tid",
    ],
    legal: "jf. Barnets Lov § 32, stk. 1, nr. 2",
  },
  {
    slug: "ungestotte",
    title: "Ungestøtte",
    shortDescription:
      "Støtte til unge på vej mod uddannelse, job og et selvstændigt voksenliv.",
    description:
      "Ungestøtte er målrettet unge i overgangen til voksenlivet. Vi støtter den unge i at finde retning – med fokus på uddannelse, beskæftigelse, økonomi, bolig og netværk. Indsatsen bygger på den unges egne mål og motivation.",
    forWhom: "Unge i overgangen til et selvstændigt voksenliv.",
    outcomes: [
      "Klar retning mod uddannelse eller beskæftigelse",
      "Styrkede praktiske livskompetencer",
      "Øget motivation og selvstændighed",
    ],
    legal: "jf. Barnets Lov §§ 114-116, jf. § 113",
  },
  {
    slug: "familiebehandling",
    title: "Familiebehandling",
    shortDescription:
      "Målrettet indsats der styrker relationer, kommunikation og trivsel i familiens hverdag.",
    description:
      "Familiebehandling er en målrettet indsats til familier, hvor der er behov for støtte til at styrke relationer, kommunikation og trivsel i hverdagen. Vi arbejder tæt sammen med familien om at skabe positive forandringer med udgangspunkt i familiens ressourcer, behov og mål.",
    forWhom:
      "Familier med børn og unge, hvor der er behov for støtte til at styrke familiens trivsel og udvikling.",
    outcomes: [
      "Styrkede relationer og bedre kommunikation i familien",
      "Øgede forældrekompetencer og tydeligere rammer i hverdagen",
      "Bedre trivsel og udviklingsmuligheder for barnet eller den unge",
    ],
    legal: "jf. Barnets Lov § 32, stk. 1, nr. 5",
  },
  {
    slug: "stotteperson-75",
    title: "Støtteperson",
    shortDescription:
      "Støtte til forældre under en anbringelsessag, jf. §75 i Barnets Lov.",
    description:
      "Som støtteperson efter §75 støtter vi forældre, hvis barn er anbragt uden for hjemmet. Vi hjælper forældrene med at forstå forløbet, fastholde forældrerollen og samarbejde konstruktivt med myndighed og anbringelsessted – altid med barnets bedste for øje.",
    forWhom: "Forældre til anbragte børn, der har behov for støtte under forløbet.",
    outcomes: [
      "Forældre der forstår og kan navigere i sagsforløbet",
      "Bedre samarbejde mellem forældre, myndighed og anbringelsessted",
      "Bevaret forældrerolle til gavn for barnet",
    ],
    legal: "jf. Barnets Lov § 75",
  },
  {
    slug: "stottet-samvaer",
    title: "Støttet samvær",
    shortDescription:
      "Tryg støtte under samvær mellem barn og forældre.",
    description:
      "Ved støttet samvær er en erfaren medarbejder til stede og understøtter et trygt og udviklende samspil mellem barn og forælder. Vi vejleder undervejs, skaber gode rammer og dokumenterer forløbet nænsomt og fagligt.",
    forWhom: "Familier hvor samværet har gavn af faglig støtte og vejledning.",
    outcomes: [
      "Tryggere og mere udviklende samvær",
      "Konkret vejledning til forælderen undervejs",
      "Saglig, nænsom dokumentation til sagsbehandler",
    ],
    legal: "jf. Barnets Lov § 104",
  },
  {
    slug: "overvaaget-samvaer",
    title: "Overvåget samvær",
    shortDescription:
      "Samvær under konstant overvågning med barnets sikkerhed i centrum.",
    description:
      "Overvåget samvær anvendes, når barnets sikkerhed og trivsel kræver konstant tilstedeværelse af en fagperson. Vi sikrer en rolig og tryg ramme, er til stede under hele samværet og leverer en grundig, objektiv dokumentation til myndigheden.",
    forWhom: "Sager hvor barnets sikkerhed kræver konstant fagligt tilsyn.",
    outcomes: [
      "Barnets sikkerhed og tryghed til enhver tid",
      "Konstant fagligt tilsyn af erfaren medarbejder",
      "Objektiv og grundig dokumentation til myndigheden",
    ],
    legal: "jf. Barnets Lov § 105",
  },
];

export type Method = { title: string; description: string; image?: string };

export const methods: Method[] = [
  {
    title: "Anerkendende tilgang",
    image: "/assets/models/ap.smColHH5.png",
    description:
      "Vi arbejder med en anerkendende tilgang, hvor barnet/den unge værdsættes for sine unikke styrker, ressourcer og potentiale. Vi lægger vægt på at møde barnet/unge på deres niveau, både følelsesmæssigt og kommunikativt. Vi skaber et positivt og styrkende miljø, hvor barnet/den unge føler sig set, hørt og værdsat.",
  },
  {
    title: "Relationspædagogisk tilgang",
    image: "/assets/models/rp.njJRCQgs.png",
    description:
      "Vi anvender en relationspædagogisk tilgang med fokus på at opbygge trygge og støttende relationer. Der arbejdes på at skabe en stærk relation til barnet/den unge som tryg base. Støtte tilbydes i relationer med jævnaldrende og familiemedlemmer efter behov. Vi prioriterer at inkludere de unge i fællesskaber, hvor de føler sig værdsatte. Empati og respekt for den unges individuelle behov er kernen i vores tilgang.",
  },
  {
    title: "Den motiverende samtale (MI)",
    image: "/assets/models/mi.-vXphHeA.png",
    description:
      "Motiverende samtaler hjælper barnet/den unge med at identificere mål, værdier og motivation. Tilgangen styrker deres følelse af selvstændighed og kontrol over eget liv. Respekt for deres ret til at træffe egne valg og ansvar for egne handlinger. Kontaktpersonen fungerer som støtte til at hjælpe med at finde løsninger, der passer barnet/unges behov.",
  },
  {
    title: "Systemisk og narrativ tilgang",
    description:
      "Vi ser barnet i sammenhæng med familie, skole og netværk – og hjælper familien med at genfortælle deres historie i et ressourceperspektiv.",
  },
  {
    title: "Low arousal / konfliktnedtrapning",
    description:
      "Vi forebygger og nedtrapper konflikter gennem rolig, anerkendende kommunikation og tilpassede krav til barnets aktuelle formåen.",
  },
  {
    title: "Mentalisering",
    description:
      "Vi styrker barnets og forældrenes evne til at forstå egne og andres følelser, tanker og handlinger – grundlaget for sunde relationer.",
  },
  {
    title: "Mål- og effektstyring",
    description:
      "Indsatsen tager afsæt i konkrete, målbare delmål, der løbende følges op og dokumenteres i tæt dialog med sagsbehandler.",
  },
  {
    title: "Helhedsorienteret samarbejde",
    description:
      "Vi koordinerer med skole, sundhedsvæsen, myndighed og netværk, så indsatsen hænger sammen om barnet.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Henvendelse og afklaring",
    description:
      "Sagsbehandler kontakter os, og vi afklarer behov, mål og rammer for indsatsen – hurtigt og uforpligtende.",
  },
  {
    step: "02",
    title: "Matchning af medarbejder",
    description:
      "Vi matcher omhyggeligt den rette medarbejder til barnet og familien ud fra faglighed, erfaring og personlighed.",
  },
  {
    step: "03",
    title: "Opstart og målsætning",
    description:
      "Vi opstarter indsatsen med en klar plan, konkrete delmål og en fælles forståelse af succeskriterier.",
  },
  {
    step: "04",
    title: "Løbende indsats og dokumentation",
    description:
      "Indsatsen gennemføres med systematisk dokumentation, statusnotater og tæt, gennemsigtig dialog med sagsbehandler.",
  },
  {
    step: "05",
    title: "Status, evaluering og justering",
    description:
      "Vi evaluerer mål, justerer indsatsen efter behov og sikrer, at forandringerne forankres og holder over tid.",
  },
] as const;

export const trustStats = [
  { value: "100%", label: "Indsatser efter Barnets Lov" },
  { value: "4", label: "Værdier der bærer alt vi gør" },
  { value: "24/7", label: "Tilgængelighed ved akutte behov" },
  { value: "DK", label: "Landsdækkende samarbejde" },
] as const;
