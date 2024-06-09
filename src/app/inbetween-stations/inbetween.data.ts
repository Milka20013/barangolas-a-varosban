import { Question } from '../data';

export interface InbetweenQuestion extends Question {
  locationId?: number;
}
export const inbetweenQuestions: InbetweenQuestion[] = [
  {
    id: 1,
    description: `Álljatok a sportpályának háttal. Előszőr nézzetek körbe, mi mindent láttok. Az biztos, hogy nem a vár fele kell elindulnotok, de akkor merre?
Előre egyenesen a kerítés fele?
Igen! 
Menjetek, amíg el nem éritek a futókört.
Keressétek egy fának a nevét, és azzal mehettek tovább: 
`,
    answer: ['Jegenyenyár'],
  },

  {
    id: 2,
    description: `Most álljatok a sportpályával szembe. Induljatok el a sportpálya fele.
Jaj, nem is, az rossz irány lenne.
Még mindig a pályával szemben álltok…, menjetek balra, míg el nem éritek a következő bográcsozós helyet. 
Itt forduljatok a pingpongasztalok felé, egészen amíg eléritek a járdát!`,
  },

  {
    id: 3,
    description: `Háttal álltok a bográcsnak, forduljatok balra. 
Ott kell találnotok valami levegővel, élőlénnyel kapcsolatos feliratot…
Ha megtaláltátok, Írjátok be, hogy mivel kapcsolatos a tábla szövege! 

`,
    answer: ['Madár'],
    help: ['Levegőben repül', 'Madár'],
    locationId: 1,
  },

  {
    id: 4,
    description: `Nos, ügyesek voltatok, de vár a következő talány! Induljatok máris visszafele a pálya mellet jó sokáig. Ha elértétek a fedett pavilont álljatok meg, itt kicsit ügyeskednetek kell.`,
  },

  {
    id: 5,
    description: `Hány oldala van a pavilon tetejének?`,
    answer: ['10', 'tíz'],
  },

  {
    id: 6,
    description: `Hány oldalon van kerítése?`,
    answer: ['6', 'hat'],
  },

  {
    id: 7,
    description: `Mi a kettő különbsége, ezt írjátok a megoldás mezőbe?`,
    answer: ['4', 'négy'],
  },

  {
    id: 8,
    description: `Nos, nem tévedtetek, induljatok is a vár fele, de mielőtt eléritek írjátok be, hogy a feljárón hány lépcsőfok van a felétek néző oldalon a várhoz:
forduljatok jobbra!
Meddig kell mennetek?
A kérdésre a választ a fejtörő után kapjátok meg!
`,
  },

  {
    id: 9,
    description: `Hány ujj van két kézen?`,
    answer: ['10', 'tíz'],
  },

  {
    id: 10,
    description: `Hány ujj van 10 kézen?`,
    answer: ['50', 'ötven'],
    help: ['Álljatok 5-en egymás mellé, és számoljatok!'],
  },

  {
    id: 11,
    description: `Egészen a futókörig menjetek, de ott nehogy jobbra lessetek!`,
  },

  {
    id: 12,
    description: `Menjetek csak balra, akár meddig is, de ha az út fekete lesz, ne habozzatok, inkább számoljatok, s a megoldást ide írjátok!`,
    answer: ['32', 'harminckettő'],
    help: ['A 8 négyzetének fele.', '8*4', '32'],
    locationId: 2,
  },

  {
    id: 13,
    description: `Most a vár a fő feladat, meg kell kerülni mind a két falat.
egyszer előre kell mennetek, majd oldalra, de a lényeg, hogy a büfét keressétek.
Segít a sövény, mely előttetek szalad és a büfé falai mellett is elhalad.
Ha a büfét elértétek, jóhelyen vagytok, de a parkból ki ne lógjatok.`,
  },

  {
    id: 14,
    description: `Menjetek kicsit tovább sok ott a fa, de csak egynek van kis táblája.`,
  },

  {
    id: 15,
    description: `Mi is a neve, írjátok be ízibe!`,
    answer: ['Zöld juhar'],
    locationId: 3,
  },
];
