/**
 * Fotos brugt på sitet.
 *
 * Alle billeder er hentet fra Unsplash og er "Free to use under the Unsplash
 * License" (fri kommerciel brug, ingen kreditering påkrævet — men vi krediterer
 * fotograferne i README).
 *
 * MÅLGRUPPE: Billederne viser unge og unge voksne (ca. 15–25 år) i samtale,
 * mentorforløb, uddannelse og hverdagsliv. Vi bruger bevidst IKKE billeder af
 * små børn, og vi undgår kliniske "behandler/patient"-motiver — udtrykket skal
 * være autentisk, håbefuldt og ikke-stigmatiserende.
 *
 * Vil du bruge egne/branded fotos, så udskift blot `src` og `alt` her –
 * så slår det igennem alle steder, billedet bruges. Ligger filen lokalt i
 * `public/assets/images/<sektion>/`, kan du i stedet pege `src` på fx
 * `img.forside("navn.jpg")` fra `@/lib/assets`.
 */

export type SiteImage = {
  src: string;
  alt: string;
  credit: { name: string; profile: string };
};

const base = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  /** Forsidens hero-kort – unge voksne i hverdagen, opløftende. */
  hero: {
    src: base("photo-1752650143267-57c2491f5ba2", 1400),
    alt: "Fire unge voksne går sammen gennem byen i samtale og godt humør",
    credit: { name: "Unsplash", profile: "https://unsplash.com" },
  },

  /** Én-til-én samtale mellem ung og støtteperson – varm, ligeværdig. */
  mentoring: {
    src: base("photo-1759593047536-5258c3c6a527", 1200),
    alt: "To unge kvinder sidder udendørs på en bænk i en rolig, fortrolig samtale",
    credit: { name: "Unsplash", profile: "https://unsplash.com" },
  },

  /** Ung i refleksion / eget rum – bruges på Om os og Metoder. */
  reflection: {
    src: base("photo-1505766358654-db278b02c108", 1600),
    alt: "Ung kvinde sidder ved en sø i aftensol og læser i ro og mag",
    credit: { name: "Unsplash", profile: "https://unsplash.com" },
  },

  /** Uddannelse og vej videre – bruges til ungestøtte. */
  education: {
    src: base("photo-1760111085279-6c4b6d831acc", 1600),
    alt: "Studerende går gennem et uddannelsessteds portbygning en klar dag",
    credit: { name: "Unsplash", profile: "https://unsplash.com" },
  },

  /** Fællesskab og netværk – ansigtsløst og dermed ikke-stigmatiserende. */
  community: {
    src: base("photo-1520127877998-122c33e8eb38", 1600),
    alt: "Fire unge sidder side om side på en mur og kigger ud over havet",
    credit: { name: "Matheus Ferrero", profile: "https://unsplash.com/@matheusferrero" },
  },

  /** Tværfagligt samarbejde – bruges på siden om kommunesamarbejde. */
  collaboration: {
    src: base("photo-1573164574511-73c773193279", 1600),
    alt: "Fagpersoner i en åben, ligeværdig dialog omkring et bord i et lyst mødelokale",
    credit: { name: "Christina @ wocintechchat.com", profile: "https://unsplash.com/@wocintechchat" },
  },

  /** Rolig natur – diskret baggrund bag citat- og metodesektioner. */
  nature: {
    src: base("photo-1760479099643-b37a52e7c094", 2000),
    alt: "Sollys der falder gennem en stille skovsti",
    credit: { name: "Ingmar", profile: "https://unsplash.com/@visualsbying" },
  },
} satisfies Record<string, SiteImage>;
