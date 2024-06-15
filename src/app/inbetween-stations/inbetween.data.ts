import { Question, QuestionType } from '../data';

export interface InbetweenQuestion extends Question {
  locationId?: number;
}
export const inbetweenQuestions: InbetweenQuestion[] = [
  {
    id: 10,
    description: `Álljatok a sportpályának háttal. Előszőr nézzetek körbe, mi mindent láttok. Az biztos, hogy nem a vár fele kell elindulnotok, de akkor merre?\nElőre egyenesen a kerítés fele?\nIgen! \nMenjetek, amíg el nem éritek a futókört.\nKeressétek egy fának a nevét!`,
  },
  {
    id: 11,
    description: `Ennek a fának a nevével mehettek tovább!`,
    answer: ['Jegenyenyár'],
  },

  {
    id: 20,
    description: `Most álljatok a sportpályával szembe. Induljatok el a sportpálya fele.\nJaj, nem is, az rossz irány lenne.\nMég mindig a pályával szemben álltok…, menjetek balra, míg el nem éritek a következő bográcsozós helyet.`,
  },

  {
    id: 30,
    description: `Itt forduljatok a pingpongasztalok felé, egészen amíg eléritek a járdát!`,
  },

  {
    id: 31,
    description: `Háttal álltok a bográcsnak, forduljatok balra. \nOtt kell találnotok valami levegővel, élőlénnyel kapcsolatos feliratot…\nHa megtaláltátok, Írjátok be, hogy mivel kapcsolatos a tábla szövege!`,
    answer: ['Madár'],
    help: ['Levegőben repül', 'Madár'],
    locationId: 1,
  },

  {
    id: 40,
    description: `Nos, ügyesek voltatok, de vár a következő talány! Induljatok máris visszafele a pálya mellet jó sokáig. Ha elértétek a fedett pavilont álljatok meg, itt kicsit ügyeskednetek kell.`,
  },

  {
    id: 50,
    description: `Hány oldala van a pavilon tetejének?`,
    answer: ['16', 'tizenhat', 'tízenhat'],
    help: ['Nagy és kis tető!'],
  },

  {
    id: 60,
    description: `Hány oldalon van kerítése?`,
    answer: ['4', 'négy'],
  },

  {
    id: 70,
    description: `Mi a kettő különbsége, ezt írjátok a megoldás mezőbe?`,
    answer: ['12', 'tizenkettő'],
  },

  {
    id: 80,
    description: `Nos, nem tévedtetek, induljatok is a vár fele, de mielőtt eléritek írjátok be, hogy a feljárón hány lépcsőfok van a felétek néző oldalon a várhoz:`,
    answer: ['16'],
    help: ['Bűvös négyes', '4+4+4+4'],
  },

  {
    id: 81,
    description: `Forduljatok jobbra!\nMeddig kell mennetek?\nA kérdésre a választ a fejtörő után kapjátok meg!`,
  },

  {
    id: 90,
    description: `Hány ujj van két kézen?`,
    answer: ['10', 'tíz'],
  },

  {
    id: 100,
    description: `Hány ujj van 10 kézen?`,
    answer: ['50', 'ötven'],
    help: ['Álljatok 5-en egymás mellé, és számoljatok!'],
  },

  {
    id: 110,
    description: `Egészen a futókörig menjetek, de ott nehogy jobbra lessetek!`,
  },

  {
    id: 120,
    description: `Menjetek csak balra, akár meddig is, de ha az út fekete lesz, ne habozzatok, inkább számoljatok, s a megoldást ide írjátok!`,
    answer: ['32', 'harminckettő'],
    help: ['A 8 négyzetének fele.', '8*4', '32'],
    locationId: 2,
  },

  {
    id: 130,
    description: `Most a vár a fő feladat, meg kell kerülni mind a két falat.\negyszer előre kell mennetek, majd oldalra, de a lényeg, hogy a büfét keressétek.\nSegít a sövény, mely előttetek szalad és a büfé falai mellett is elhalad.\nHa a büfét elértétek, jóhelyen vagytok, kerüljétek meg jobbról, de a parkból ki ne lógjatok.`,
  },

  {
    id: 140,
    description: `Menjetek kicsit tovább sok ott a fa, de csak egynek van kis táblája.`,
  },

  {
    id: 150,
    description: `Mi is a neve, írjátok be ízibe!`,
    answer: ['Zöld juhar'],
    locationId: 3,
  },

  {
    id: 400,
    description: `Nos a futókör kényelmes sétának ígérkezne, de sétátokat inkább a bejárattól induló kis utcácskán folytassátok (a narancssárga kukák során), és bizony sokáig kell
kutyagolnotok, míg a malmot meg nem találjátok.
Ott aztán a csapatszámotok írjátok:`,
    answer: ['1', '3'],
    type: QuestionType.Inbetween,
  },

  {
    id: 410,
    description: `Balra haladjatok tovább, és már nincs messze a cél, az alábbi kérdés meg is adja azt:
    A világon bizony nem minden fehér és fekete, de ennek a játéknak ez az egyik legfontosabb eleme!
Melyikre gondoltam?`,
    answer: ['sakk'],
  },

  {
    id: 420,
    description: `Nos caplassatok tovább és az asztaloknál újabb érdekes kérdések várnak reád!
Ha odaértetek a csapatszámotok gépeljétek!`,
    answer: ['1', '3'],
    type: QuestionType.Inbetween,
    locationId: 10,
  },

  {
    id: 430,
    description: `Most jön a célhoz vezető legnehezebb szakasz!
Nagyon figyeljetek, mert könnyű elvéteni az irányt.
A sakkasztal legyen a szemetek előtt úgy, hogy a balkezetek fele essen a malom.
Induljatok el a spotpálya fel, hogy melyik oldalról kell meg kerülnötök, nos az alábbi kérdésből kell rájönnötök:
Milyen oldalú közlekedés van Angliában?`,
    answer: ['bal'],
  },

  {
    id: 440,
    description: `A kis erdősoron végig osonva fékezzetek, a sportpálya végén balra nézzetek,
és pár lépés után elérkeztetek kalandos túrátok utolsó állomására.
A játszótérre.
Ott inkább szaladgálhattok, mint játszhattok, de van egy érdekes állat a kis oázis mellett.

Rohanni még senki se látta,
Hát még, hogy hátra felé mászna,
Az egyik éti, a másik vízi,
De házát mindig a hátán viszi.

Menjetek el hozzá, és ismét írjátok be a csapatotok számát:`,
    answer: ['1', '3'],
    type: QuestionType.Inbetween,
    locationId: 11,
  },

  {
    id: 450,
    description: `Sajnos kalandos utunk véget ért, de ha tetszett….
Írjátok be a csapatotok számát:`,
    answer: ['1', '3'],
    type: QuestionType.Inbetween,
  },
  {
    id: 460,
    description: `Hát…. Akkor is a végére értetek!
Most pedig irány vissza a táborba, mert a mókázásnak bizony még nem szakadt vége!
További jó szórakozást!`,
    type: QuestionType.Last,
  },

  {
    id: 160,
    description: `Képzeljétek, jelen kihíváshoz elindulhattok bármerre!
Például, ha a sportpályával szemben álltok, akkor jobbra van a pavilon, de az biztos, hogy arra ne menjetek!
Inkább az ellenkező irány a helyes, és addig kell loholni, míg a narancssárga kukáig el nem értek.
Ott aztán a telefon lesz a lényeg.
Ha odaértetek nyomjatok a továbbra!`,
  },

  {
    id: 170,
    description: `Jobbra az út folytatódik, haladjatok hát tovább, 
    a sakkasztalnál álljatok meg, de ne várjatok csodát!
Ha odaértetek nyomjatok a továbbra!`,
  },

  {
    id: 180,
    description: `Ó, ez nem a végállomás, de ha már idáig eljöttetek figyeljetek,
    mert a Malom előtt el kell, hogy térjetek.
Ha odaértetek nyomjatok a továbbra!`,
  },

  {
    id: 190,
    description: `Döntenetek kell, íme a kérdések, a jobbat akkor válasszátok,
    ha tenger hullámzik, ha arra járnátok. 
    Balra pedig akkor menjetek,
    ha arra fordulva hatalmas mezőre nézhettek.
Válasszatok, merre mentek?
A. Balra
B. Jobbra`,
    answer: ['A', 'balra', 'bal'],
    help: ['Tenger Magyarországon????'],
  },

  {
    id: 200,
    description: `Igen!
Jól gondoltátok, valóban a mező lehetne a megoldás, de mielőtt odaérnétek találtok egy fát, melynek egyik lábát már levágták.
Keressétek meg a fának a nevét és azzal mehettek tovább:
Írjatok be a nevét:`,
    answer: ['Fehér akác'],
    help: ['Fehér', 'Akác'],
    locationId: 4,
  },

  {
    id: 210,
    description: `Szép teljesítmény, de még sok megoldandó feladat vár rátok! Induljatok hát tovább a narancssárga R2D2 felé, hogy ez merre van?
Ha háttal átok az akácnak, és a malom a bal kezetek felé esik, akkor veletek szemben lesz valahol.
Menjetek oda, és ha eléritek, nyomjatok a továbbra.`,
  },
  {
    id: 220,
    description: `Pisti este 8-kor aludt el. Reggel 9-ig akart aludni, így beállította a vekkert 9-re. Mennyit aludt?`,
    answer: ['egy', '1', '1 órát', 'egy órát', '1 óra', 'egy óra'],
    help: [
      `a. 12 órát
b. 11 órát
c. 1 órát
d. 13 órát`,
      'Ha 8 órakor állítom az órát 9 órára, akkor a legközelebbi 9 órakor fog ébreszteni, vagyis alig fogok aludni valamit….',
    ],
  },

  {
    id: 230,
    description: `Induljatok is az úton tovább, míg el nem éritek a bejáratot.
Ha odaértetek nyomjatok a továbbra!`,
  },

  {
    id: 240,
    description: `Talán jobbra kell mennetek, de biztos, hogy nem balra, ha látjátok a futókörön az eltérő burkolatot, ismét nyomjatok a továbbra!`,
  },

  {
    id: 250,
    description: `Addig kell forgolódnotok, míg….
A kérdésre jól nem válaszoltok!`,
  },

  {
    id: 251,
    description: `Szerintetek melyik új sportág fog a Párizsi Olimpián megjelenni, az idei évtől?
a. Szlalom kajak-kenu
b. Breaktánc
c. Fallabda`,
    answer: ['b', 'breaktánc'],
    help: [
      `Bizony, ez a sport meglehetősen eltér az eddigiektől, hiszen a jelentősége abban rejlik, hogy valaki csinálja, de
rengetegen, még a saját csapattársai is, csak nézik a versenyző által előadottat.`,
      `Itt bizony nagyon ügyesen kell tudnod táncolni is!`,
    ],
  },

  {
    id: 260,
    description: `Ha sport, akkor a sportpályát célozzátok,
a következő feladatot ott kapjátok.
Ha odaértetek nyomjatok a továbbra!`,
    locationId: 5,
  },

  {
    id: 270,
    description: `Most messze kell látnotok!
Egészan addig forgolódjatok, míg a fapavilont meg nem látjátok,
menjetek el egészen addig, hogy a telefont ismét előkaphassátok.
Ha a várat látjátok, akkor mellette a fedett homokozó már majdnem a cél, arra keressétek!`,
  },

  {
    id: 280,
    description: `Gábor a pékség felé vezető úton 20 házat számol a baloldalon, visszafelé pedig 20 házat a jobb oldalon. Hány ház van összesen?
    A. 80
B. 20
C. 40
D. 60`,
    answer: ['B', '20'],
    help: [
      'Ha egyszer az egyik oldalra fordulunk, majd a másik oldalra, akkor a bal-jobb merre esik?',
      '20 ház van összesen, mert mindkét megnevezett oldal ugyan az.',
    ],
  },

  {
    id: 290,
    description: `Utatokat a kis járdán folytassátok, teljesen végig a pálya mellett, el ne tévedjetek!
Akár a végéig is el kell, hogy menjetek, na ott aztán ne siessetek, itt már keresgéljetek!
Nyomjatok a továbbra!`,
  },

  {
    id: 300,
    description: `Gyorsan menjetek erre-meg arra, és egy kőből készült medence mellett jobbra találhattok egy fanevet, melyet a telefonba kell gépelnetek.
    Mi is a neve, írjátok ide be!`,
    answer: ['Bugás csörgőfa'],
    help: [
      'Az előtagjával van egy majdnem ugyanilyen nevű tájegységünk is, azt Bugacnak hívják…',
      'Az utótagjával pedig van hasonló babajáték, amelyet le-fel mozgatva,-rázva vonjuk el a babák figyelmét, több-kevesebb sikerrel.',
    ],
    locationId: 6,
  },

  {
    id: 310,
    description: `Most egy könnyű séta ígérkezik, induljatok a sakkasztalok felé, és ha már ott jártok,
a további irányt a kérdés megválaszolása után kapjátok.`,
  },

  {
    id: 311,
    description: `Ha tudjuk, hogy 6 tyúk 6 nap alatt 6 tojást tojik, akkor hány tojást tojik 12 tyúk 12 nap alatt?
a. 12
b. 36
c. 48
d. 24`,
    answer: ['d', '24'],
    help: ['6 tyúk 12 nap alatt hány tojást tojik?', '24 tojást fognak tojni…'],
    locationId: 7,
  },

  {
    id: 320,
    description: `Egyenesen haladjatok tovább, és már nincs messze a cél: nagy, fából van és a szál hajtja…
Mi lehet az?
Hát persze a malom a cél, sétáljatok közelebb,
hogy előjöhessenek a további rejtvények!
Ha elértétek a malmot, nyomjatok a továbbra!`,
    locationId: 7,
  },

  {
    id: 330,
    description: `Menjetek tovább, induljatok,
a rejtélyek nagyját már megoldottátok.
Most jön a sorból az utolsó rejtvény,
Készüljetek mert nem könnyen járható az oda vezető ösvény.
Mennetek ugyan nem sokat kell,
De az út minden merre zöldell.
Merre kell hát mennetek?
Az alábbi kérdésre kell, hogy feleljetek:
Hány M betű van ebben a szövegben?`,
    answer: ['13'],
    help: ['Nem szerencsés, ha ma van péntek (...)', '13'],
  },

  {
    id: 340,
    description: `Kérdés:
Ha 11+11=4 és 22+22=16, akkor mennyi 33+33=?
a. 54
b. 33
c. 66
d. 36
e. 24`,
    answer: ['D', '36'],
    help: [
      'A matematikai műveletek közül csak egyetlen egyet kell még használni a megoldáshoz, de az nem az kivonás.',
      'Ha szorzunk, az jó lehet?',
      'Az első két tagot összeadjuk egymással, majd a második kétszámjegyet is, és végül összeszorozzuk a kapott eredményeket: 3+3=6, és ugyancsak 3+3=6, akkor már csak össze kell szoroznunk, 6x6=36.',
    ],
  },

  {
    id: 350,
    description: `Álljatok a malommal szembe, hogy a sakkasztalok a hátatok mögött legyenek.
Az úton jobbra kell, hogy menjetek.
Árnyat adó fa alatt sétáljatok, majd a napra érve fékezzetek.
Nézzetek mindent jól meg,
mert a végjáték elérkezett.
Nyomjatok a továbbra!`,
  },

  {
    id: 360,
    description: `A játszótéren vár a nagy feladat, mely könnyedén becsaphat.
Nyomjatok a továbbra!`,
  },

  {
    id: 370,
    description: `Hegyezzétek hátfüleitek,
    mert aki a sorokat olvassa tévedhet:
    
    Szarvat visel, nem ökör,
    nyerge van, de nem szamár,
    
    lába nélkül fára jár.
    Ismertek egy tarka házat? Lakik benne szarvas állat.
    Szegény igen fél ám tőled, szarvát behúzza előled.
    Bármerre jár, völgyön, hegyen, házikója vele megyen…
    Tarka házban szarvas állat, kitaláltad melyik állat?`,
    answer: ['csiga'],
    help: ['Van egy ilyen versike: ... biga gyere ki, ég a házad ideki!'],
    locationId: 8,
  },

  {
    id: 380,
    description: `Hát, elvégeztétek a feladatokat, de reméljük jól éreztétek magatokat,
folytassatok hát utatokat, induljatok az alaptábor felé,
ha esetleg nem tudnátok merre lehet,
írjátok be a már oly sokszor használt csapatjegyetek!`,
    answer: ['1', '3'],
    type: QuestionType.Inbetween,
  },

  {
    id: 390,
    description: `Pontosan a sportpálya ellenkező oldalán vagytok!
    Most pedig irány vissza a táborba, mert a mókázásnak bizony még nem szakadt vége!
    További jó szórakozást!`,
    type: QuestionType.Last,
  },
];
