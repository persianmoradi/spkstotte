/**
 * Fotos brugt på sitet. Alle billeder er hentet fra Unsplash og er
 * "Free to use under the Unsplash License" (fri kommerciel brug, ingen
 * kreditering påkrævet — men vi krediterer fotograferne i README).
 *
 * Vil du bruge egne/branded fotos, så udskift blot `src` og `alt` her –
 * så slår det igennem alle steder, billedet bruges.
 */

export type SiteImage = {
  src: string;
  alt: string;
  credit: { name: string; profile: string };
};

const base = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  hero: {
    src: base("photo-1758962036781-c0dc907aea7b"),
    alt: "Familie går hånd i hånd ad en sti gennem skoven i sommerlys",
    credit: { name: "Emma", profile: "https://unsplash.com/@pictures102" },
  },
  family: {
    src: base("photo-1516901408257-500ed7566e6a"),
    alt: "En voksen og et barn går hånd i hånd i varmt eftermiddagslys",
    credit: { name: "Sue Zeng", profile: "https://unsplash.com/@suezeng" },
  },
  collaboration: {
    src: base("photo-1758518732175-5d608ba3abdf"),
    alt: "Fagpersoner i en rolig dialog omkring et bord på et lyst kontor",
    credit: { name: "Vitaly Gariev", profile: "https://unsplash.com/@silverkblack" },
  },
  conversation: {
    src: base("photo-1758273241086-f3585ef8c2f8"),
    alt: "En fagperson lytter anerkendende til en ung under en samtale",
    credit: { name: "Vitaly Gariev", profile: "https://unsplash.com/@silverkblack" },
  },
  nature: {
    src: base("photo-1760479099643-b37a52e7c094", 2000),
    alt: "Sollys der falder gennem en stille skovsti",
    credit: { name: "Ingmar", profile: "https://unsplash.com/@visualsbying" },
  },
} satisfies Record<string, SiteImage>;
