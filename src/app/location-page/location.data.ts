import { Question, QuestionType } from '../data';

export interface LocationData {
  id: number;
  baseDescription: string;
  curiosity: string;
  questions: Question[];
}

const birdQuestions: Question[] = [
  {
    id: 1,
    description: `Melyik a Földön az egyetlen szárny nélküli madár?`,
    answer: ['Kivi'],
    help: [
      'gyümölcsről nevezték el',
      'a gyümölcs kívül szőrös, belül zöld, sok pici fekete magja van',
      'kivi',
    ],
  },
  {
    id: 2,
    description: `5 szénarakás meg 7 szénarakás összehordva hány szénarakás?`,
    answer: ['1', 'egy'],
    help: [
      'Ha kettőt hordanánk össze eggyé, hány lenne belőle?',
      'Egy nagy kupac lesz belőle…',
    ],
  },
];

const puzzleQuestions: Question[] = [
  {
    id: 1,
    description: `Mely állítás hamis az alábbiak közül?\nA kirakós játékok alapvetően a gyerekek\nA.	logikai, és stratégiai gondolkodását \nB.	összpontosító, vizuális képességeit\nC.	szem-kéz-láb koordinációját\nD.	képzelőerejét\nE.	kudarctűrését \nfejleszti, segíti, alakítja.`,
    answer: ['C', 'szem-kéz-láb koordinációját'],
    help: [
      'Milyen végtagunkra van szükség a képkirakásához?',
      `Segít-e bennünket, ha a kezünk helyett más végtagunkat használunk, egyáltalán tudunk-e más végtagot használni?
Ezáltal segít-e bennünket valamilyen módon a puzzle ehhez a végtagunkhoz kapcsolódóan bármiben?
`,
      'Lábunk koordinációjában nem vesz részt a puzzle kirakása….',
    ],
  },
];

const buffetQuestions: Question[] = [
  {
    id: 1,
    description: `A világ legősibb fából faragott szobra a Shigir bálvány, melyet az Urál-hegységben találtak meg. A szobor kb. 11500 éves!!!\nKözel 5 méteres fából készült totem.\nMelyik lehet az alábbi felsorolásból az igaz válasz?\na.	barlangban találták meg\nb.	csak emberarcokat ábrázol\nc.	mocsárban találták meg\nd.	csak geometriai faragások találhatóak rajta\n  `,
    answer: ['C', 'mocsárban találták meg'],
    help: ['Vizes élőhely', `Mocsár`],
  },
  {
    id: 2,
    description: `Melyik országban található a legnagyobb, csak fából készített szobor, melyhez évente több millióan zarándokolnak.\nA szobor 23 méter magas, mely elkészítéséhez több, mint 10 fajta fát használtak fel. `,
    answer: ['Kína'],
    help: ['Buddhát ábrázolja', 'Changhua tartományban található', 'Kína'],
  },
];

const whiteTreeQuestions: Question[] = [
  {
    id: 1,
    description: `Tegyétek sorrendbe az ismert gyermekdal szövegét:\na. Felmászott a fára.\nb. Doktor bácsi\nc. Leesett, leesett,\nd. Mókuska, mókuska,\ne. Huncut a mókus\nf. kitörött a lába.\ng. úgy is fára megy.\nh. ne gyógyítsa meg.\n(A sorok betűjeleit szóköz nélkül kell felsorolni!)`,
    answer: ['DACFBHEG'],
  },
  {
    id: 2,
    description: `Ügyesek voltatok, most pedig csináljátok a mókus után, a második sor nélkül!, egymást nagyban segítve!!!! a lefűrészelt tuskót\nfelhasználva, állítsátok helyre a rendellenességet, amit láttok a fán.\nHa végeztetek, nyomjatok a továbbra!`,
  },
  {
    id: 3,
    description: `Milyen irányba áll már a madáretető?`,
    answer: ['Függőleges', 'fügőleges'],
    help: [
      'Milyen irányban fekszünk, illetve állunk?',
      'Nem vízszintes',
      'Függőleges',
    ],
  },
  {
    id: 4,
    description: `Egy özvegyasszony férje megnősülhet-e?\na. Csak, ha előtte elvált\nb. Igen\nc. Nem`,
    answer: ['C', 'Nem'],
    help: [
      'Ha valaki özvegy….',
      'Egy elhunyt, csak túlvilági esküvőt tarthat, földit semmiképp.',
    ],
  },
];

const sportQuestions: Question[] = [
  {
    id: 1,
    description: `Válasszatok két versenyzőt, ők lesznek, akik akár olimpiai részvételre jogosító ajánlást is szerezhetnek….\nHozzájuk válasszatok két edzőt.\nŐk négyen menjenek oda egy-egy általuk választott edzőeszközhöz és egy percen keresztül keményen hajtva használja is azt.\nEzután az edzőknek egy óra segítségével meg kell mérnie a versenyzők pulzusát!\nMiután ez megvolt, írjátok be a pulzusok átlagát (kerekítve)`,
    answer: ['60', '240'],
    help: ['Egézségesnek kell lennetek!', 'Próbáljátok meg a 100-at!'],
    type: QuestionType.Inbetween,
  },
  {
    id: 2,
    description: `Hajrá!\nEz remek volt!\nIsmételjetek meg!!!!\nCsak most az edző legyen a versenyző! (Természetesen választhat bármilyen más sporteszközt…)\nAzután elő az órával, és ismét pulzusmérés!\nAdjátok össze a 4 kapott értéket és átlagoljátok az eredményt!\nHa megvan az összeg, akkor írjátok be a csapatotok számát!`,
    answer: ['1', '3'],
    type: QuestionType.Inbetween,
    help: ['Mit kell beírni?'],
  },
  {
    id: 3,
    description: `Melyik állítás az igaz?\nA. A fiataloktól az idősekig az átlagos pulzusszám növekszik a kor előrehaladtával:\n20 év - 200 átlagos pulzusszám\n30 év - 190 átlagos pulzusszám\n40 év - 185 átlagos pulzusszám\n45 év - 175 átlagos pulzusszám\n50 év - 170 átlagos pulzusszám\n\nB. Az idősektől a fiatalokig az átlagos pulzusszám növekszik a kor előrehaladtával:\n20 év - 170 átlagos pulzusszám\n30 év - 175 átlagos pulzusszám\n40 év - 185 átlagos pulzusszám\n45 év - 190 átlagos pulzusszám\n50 év - 200 átlagos pulzusszám\n\nC. A fiataloktól az idősekig az átlagos pulzusszám állandó a kor előrehaladtával:\n20 év - 185 átlagos pulzusszám\n30 év - 185 átlagos pulzusszám\n40 év - 185 átlagos pulzusszám\n45 év - 185 átlagos pulzusszám\n50 év - 185 átlagos pulzusszám`,
    answer: ['A'],
    help: ['Bizony nem mindig növekszik valami a kor előrehaladtával…'],
  },
  {
    id: 4,
    description: `Aki olvasta a Harry Potter könyveket, jól tudja, hogy mi is az a quidditch, vagy ahogyan magyarosan ejtjük: kviddics.\nEz a játék, ma már nem csak egy elismert sport, hanem bajnokságot és világbajnokságot is rendeznek belőle.\n\nA. Ezt nem igaz, hisz fizikailag kivitelezhetetlen.\nB. Persze, hogy igaz, ma már minden őrület valósággá válik.\nC. Már az állítás sem igaz…`,
    answer: ['B'],
    help: [
      `Természetesen előszőr konzol- és számítógépes játékokon karsztul csodálhattuk meg…\nA legtöbb csapata Angliának és Írországnak van, de már szinte az egész világon szerveződtek egyesületei.\nIgen már Magyarországon is!\nA Harry Potter Club (anno 2000-2001), az ÁlomVilág Ifjúsági Klub (2001-től) és a Varázslat Közhasznú Egyesület\n(2005-től) keretein belül rendeznek élő kviddics mérkőzéseket, bizony.`,
    ],
  },
];

const beeQuestions: Question[] = [
  {
    id: 1,
    description: `A méhek azért szeretik a bugás csörgőfa virágát, mert\na. sárga a virága, könnyen észrevehető, ez jobban vonzza őket.\nb. sokáig virágzik, így több ideig meg lehet találni a természetben.\nc. A nektárja nagyon csábító, hisz ez a méhek végső célja.`,
    answer: ['C'],
    help: [
      `A méhek nem a színek alapján keresik a táplálékot.`,
      `A NEKTÁR a megoldás!`,
    ],
  },
  {
    id: 2,
    description: `Melyik a hamis állítás az alábbi felsorolásból?\n1. A méhek lényegében táncolva kommunikálnak egymással, amit azt jelenti, hogyha egy méh talál egy távolabbi\nnektárforrást, akkor a kaptárhoz visszatérve, tánccal tájékoztatja a társait\n2. A délszláv háború egyes aknáit méhekkel szerették volna felderíteni, hiszen a virágok illata mellett a TNT robbanóanyag\nszagát is érzékelik a rovarok, de nem jártak kézzel fogható sikerrel.\n3. Ha méhecskével találkozunk, az szinte kivétel nélkül nőstény lehet, hiszen a hímek általában a kaptárban vannak, hogy\negyetlen életcéljukat - a méhkirálynő megtermékenyítését - beteljesítsék.\n4. A méhek testsúlyok kb. 80%-át is képesek „cipelni”, vagyis egy méhecske akár a testsúlyának 80%-át is képes virágpor és\nnektár formájában magával vinni a kaptárba. Mindezt naponta akár többször is megteszik, vagyis igazi testépítők is\nlehetnének, hiszen folyamatosan súllyal dolgoznak.\n5. Habár azt hihetjük, hogy a méhek - a medvéhez hasonlóan - télen alszanak, ez nem teljesen igaz, hiszen ilyenkor\nvisszavonulnak a kaptárjukba, a méhkirálynő körül csoportosulnak össze és a repülőizmaikat rezegtetve fűtik fel kaptárukat.`,
    answer: ['3'],
    help: [
      `A méhecskék nem mind nőstények...`,
      `Ez az egyetlen hamis állítás a listában.`,
    ],
  },
  {
    id: 3,
    description: `Mi a méhek életcélja?\na. Mézet gyűjteni és a méhkirálynő megtermékenyítése.\nb. A kaptár védelme és a mézkészlet gyarapítása.\nc. A méhsejtek építése és a mézkészlet gyarapítása.`,
    answer: ['C'],
    help: [
      `Gondoljatok arra, mi a legfontosabb teendőjük!`,
      `A mézkészlet gyarapítása és a kaptár építése az elsődleges céljuk.`,
    ],
  },
];

const millQuestions: Question[] = [
  {
    id: 1,
    description: `Melyik lehet az alábbi felsorolásból az igaz állítás?\na. A madarakra az épületek és az épületek üvegfelületei a legveszélyesebbek.\nb. A világ legnagyobb szélturbinája egy fordulatból kitermeli egy kisebb település egynapnyi energiaszükségletét.\nc. A szélenergia legnagyobb hátránya a szél kiszámíthatatlansága, ezért építik minél magasabbra a szélturbinákat.\nd. Egy vizsgálat segítségével állapították meg, hogy a szélturbina négy fehér lapátja közül hármat feketére festenek, akkor 72 százalékkal csökkenti az elhullott madarak számát.`,
    answer: ['A'],
    help: [
      `Az emberi alkotások az élővilág legnagyobb ellenségei, ezekből fakad a legnagyobb állatállomány pusztulás.\n`,
      `Az építmények a legnagyobb környezetátalakító építmények, ebből fakadóan, bár próbálunk különféle módszerekkel felhívni a madarak figyelmét rájuk, de ezek a legveszélyesebbek a madarakra.\n`,
    ],
  },
];

const snailQuestions: Question[] = [
  {
    id: 1,
    description: `Bár az idő vasfoga és a kicsik töretlen játéka megkoptatta már,\nde még mindig halad előre az útján, de még mindig arra vár,\nhogy aki erre jár, szeretgessen, gyönyörködjön benne,\nés nektek bizony most ő lesz az utolsó lecke.\nNyomjatok a továbbra!`,
  },
  {
    id: 2,
    description: `Számoljátok hát meg hány pöttyöt kapott,\nmár amennyit az idő hagyott.\nDe a pirosat és a kéket külön-külön,\nhogy a csapat nagyot küzdjön!\nNem kell megijednetek, nem kell pontosan látnotok,\nMegelégszünk, ha körülbelül helyesen számoltok,\nés bizony elfogadjuk majd a számotok.\nÍrjátok be a csapatotok számát:`,
    answer: ['1', '3'],
    help: ['Mit kell beírni?'],
    type: QuestionType.Inbetween,
  },
  {
    id: 3,
    description: `Nos, mennyit számoltatok?\nAdjátok össze a pöttyök számát.`,
    answer: ['350', '450'],
    help: [
      'A 300-as szám arra buzdít, hogy ne engedjük, hogy az egyértelműség hiánya visszatartson minket. Nos, ne is tartson vissza, mert ez a szám kevés…\n',
      '500 nap nyár című, 2009-es amerikai romantikus vígjáték nagyon sok mindenkinek tetszett (7,5/10), persze, hisz játszott benne Joseph Gordon-Levitt, de ez a szám már túl sok…\n',
      'Kb. 380 és 420 között van a valóság….\n',
    ],
    type: QuestionType.Inbetween,
  },
  {
    id: 4,
    description: `Ezzel még nem végeztetek,\nmert nem messze egy másik pöttyöset is megnézhettek!\nGyorsan számoljátok meg azt is, és annak a számát írjátok ide meg:`,
    answer: ['20', '25'],
    type: QuestionType.Inbetween,
  },
];

export const LocationDatas: LocationData[] = [
  {
    id: 1,
    baseDescription: `A víz jelenléte elengedhetetlen egy madárbarát udvarban, egy friss vízzel teli, tiszta madárfürdető olyan szárnyasokat is a kertünkbe vonzhat, amelyek érdeklődését egyébként nem keltik fel az etetők és a madárházak.`,
    curiosity: `Tudtad, hogy a madár szíve nyugalmi állapotban 400-szor húzódik össze, míg repülés közben 1000-re is megnőhet!\nA világ egyik legérdekesebb madaráért a lábatokat sem kell kitenni a városból. Legalábbis Pestről biztosan nem!\nIgen, ezek a sarlósfecskék.\nMitől olyan érdekesek? Hát attól, hogy:\n•\t a világ leggyorsabb röptű madarai közé tartoznak (111 km/h).\n•\t a levegőben esznek isznak, párosodnak, sőt, ott is alszanak.\n•\t soha nem szállnak le a földre, nem ülnek ki ágakra, nem pihennek villanydrótokon. A költésen kívül egész életüket a levegőben töltik.\n•\t a lábaik olyan gyengék, hogy csak a sziklafalakon való kapaszkodásra jók. Járni nem tudnának vele.\n•\t nem igazi fecskék. A kolibrikkel állnak rokonságban.\n•\t a fiókák képesek hibernálni magukat, ha huzamosabb ideig hűvös, esős idő van. Éhségalvásnak hívják, amikor testhőmérsékletük csökken, a szívverésük és légzésük extrém módon lelassul, így akár egy-két hétig is életben maradnak.  \n•\t a szülők ilyenkor akár Horvátországig is elrepülnek, hogy táplálékot hozzanak.\n•\t a párok hűségesek egymáshoz, és a fészkelőhelyükhöz.\n•\t a régi emeletesházakat mesterséges sziklafalnak tekintik, és azok repedéseibe fészkelnek.\n•\t rettenetesen sok levéltetűt, szúnyogot, muslincát fogyasztanak el,\n•\t akár 21 évig is élhetnek, ami egy ilyen apró madárnál igazi kuriózum.`,
    questions: birdQuestions,
  },
  {
    id: 2,
    baseDescription: `A kirakó játékok egészen 1763-ig vezethetők vissza. Ekkor ugyanis egy angol térképkészítő egy Nagy Britannia térképet darabolt fel úgy, hogy a grófságok határait követve fűrészelte szét. Ezt az "ős puzzle"-t aztán földrajz oktatáshoz használta segédeszközként.`,
    curiosity: `A világ legtöbb darabból álló kirakója 51300 db-os!! 868 centiméter széles és 190 centiméter magas, a Kodak cég forgalmazza potom 600 dollárért... Maga a kép 27 db, a világ legjobb fotósai által készített csodás fotókat ábrázol.\nA legnagyobb európai puzzlét 2013-ban készítették, ez 40.000 darabból áll, és a méretei elképesztőek:\n6 méter x 2,4 méteres, egy angliai profi puzzlejátékos és egyben készítő fejéből pattant ki, 35 napon keresztül vágta és állította ismét össze, a saját maga általtervezett darabokat, ami természetesen nem másról szól, mint az brit uralkodó gyémántjubileumi ünnepségéről. `,
    questions: puzzleQuestions,
  },
  {
    id: 3,
    baseDescription: `Észak-Amerikából származik, folyóparti és mocsári élőhelyein széles körben elterjedt, Magyarországra a 17. században került homoki, sziki és ártéri erdősítésre. A zöld juhar zöld elnevezése onnan ered, hogy egyéves ágai még zöld színűek. Törzsének átmérője 30-60, kérge fiatalon zöld, majd sárgásbarna, sima, majd sötétebb és barázdált, idősebb korában hosszant árkolt, repedezett.`,
    curiosity: `Magassága többnyire 12-15 méter, ha sérülés éri, tőből újra sarjad és többtörzsű bokorfává fejlődik.\nPuha, szivacsos szerkezete miatt fűtőértéke alacsony, viszont kiválóan faragható.\nAz ágak sérülékenysége miatt könnyen megfertőzik a fát a farontó gombák, a Fusarium reticulatum var. negundinis pirosra színezi a faanyagot.\nAz ÁNTSZ közleménye szerint a zöld juhar pollenszórása március végén, április elején indul, ami okozhat az arra érzékenyeknek erős tüsszögéses tünetet! `,
    questions: buffetQuestions,
  },
  {
    id: 4,
    baseDescription: `Az Egyesült Államok délkeleti részein őshonos fafaj, melyet idővel szerte a világon meghonosítottak.
Hazánkban virágából tea, méz, fánk készül belőle, de természetesen a faanyag a fő hasznosítási területe.`,
    curiosity: `*   Új-Zélandra is megpróbálták betelepíteni, ám sikertelenül, Ausztráliában pedig törvényekkel tiltották meg az akácfák ültetését,
mivel e növényfaj mérgező a szarvasmarhák számára.\n*   A népi megfigyelés szerint, ha kétszer virágzik a fehér akác, akkor hosszú ősz lesz.`,
    questions: whiteTreeQuestions,
  },
  {
    id: 5,
    baseDescription: `Rég ismert tény, hogy a sport pozitív hatással van egészségünkre. A rendszeres testmozgás számos előnnyel jár, mint például a stressz csökkentése, a hangulatjavulás, a pozitív szokások kialakulása és a jobb egészség - mind fizikai, mind szellemi.\nIdőben a legkorábbi emlékek az Ókori Egyiptomból származnak. Az időszámításunk kezdete előtti 3. évezredből maradtak fenn vázafestmények és barlang-, illetve falrajzok olyan emberekről, akik birkóznak, úsznak, futnak, vagy a mai ökölvíváshoz hasonló módon küzdenek egymással.\nAz i.e. 2. évezredből Krétán találtak a régészek sportolásra utaló tárgyi leleteket.\nA váza-, és edényfestményeken a Bikaugrás sportágat figyelhetjük meg. A tudósok szerint a krétaiak szembe futottak a bikával, majd a megfelelő pillanatban elrugaszkodva a bika fején, vagy szarván kéztámasszal átlendülve, átszaltóztak az állat felett. Ez lett az első olyan tárgyi lelettel bizonyított sporttevékenység (bikaugrás), amelyet kizárólag az élményért magáért űzhettek, és amelyhez sporteszközt (az élő bika) használtak.`,
    curiosity: `*   Ha minden egyes izmod egyszerre feszülne meg, körülbelül 22.000 kg-ot lennél képes megemelni.\n*   A legegyszerűbb módja, hogy kiderítsd, mennyire edzel intenzíven az, hogy megpróbálsz beszélni edzés közben. Ha nem tudsz, érdemes visszavenni annyira, hogy meg tudj szólalni.\n*   Minél többet edzel a tested annál jobban megtanulja, hogy a zsírt égetni kell, nem pedig raktároznia.\n*   Közel 70 izomnak kell dolgoznia ahhoz, hogy kimondjunk egy szót!\n*   Az ókori olimpiákon meztelenül mérkőztek a versenyzők.\n*   A brazilok nem csupán a karneválokat, a rekordokat is halmozzák. Eddig csak a sárga mezesek jutottak ki, mind a 18 labdarúgó VB-re, csak nekik van háromszoros világbajnokuk (Pelé), és csak egy csapat van, amelyet VB-n még nem tudtak megverni. Ez utóbbi egyébként a magyar.`,
    questions: sportQuestions,
  },
  {
    id: 6,
    baseDescription: `Kelet - Ázsiában, Kína és Korea területén őshonos, Európába a 16.sz-ban a törökök közvetítésével került be. Díszfaként termesztik. 5-10 méter magas, kerek koronájú fa. A talajra és a városi levegőre nem érzékeny növény, ezért utcafának is kiváló, de parkokban is szép látványt nyújt, mint az láthatjátok is…`,
    curiosity: `Három élű toktermése 3-6 cm hosszú, 2-4 cm széles, felfújt hólyagra emlékeztet. Színe éretlenül zöld, éretten narancssárgás, ősszel sötétbarna. Egész télen díszíti a fát. A termés sötétbarna vagy fekete, 5-8 mm átmérőjű magokat tartalmaz, melyek sütve ehetők, de fogyasztásuk nem terjedt el.\nMikor a virága termésbe fordul, virágkötők előszeretettel alkalmazzák csokrok készítéséhez.\nA méhek nagyon szeretik citromsárga virágát, mely akár két héten keresztül is pompázik.`,
    questions: beeQuestions,
  },
  {
    id: 7,
    baseDescription: `A légáramlás energiáját hasznosító mechanikai berendezés, amellyel hazánkban őrlést, darálást, esetleg hántolást végeztek. A szélmalomra vonatkozó első magyar adatok a 16. sz.-ból valók. Legnagyobb számban az Alföldön terjedt el, másfel inkább a vízimalmok, vagy az állati erővel működő malmok voltak a szokásosak. A legelterjedtebbek az otthoni malomkövek voltak, amit emberi erővel, vagy igavonókkal hajtottak, tekertek.`,
    curiosity: `Igazi óriás ebben a műfajban a hivatalosan Vestas V236-15.0 MW-ként emlegetett konstrukció, mely 280 méter magas, rotorjának átmérője 236 méter, a szél által megfújt felülete pedig 43 743 négyzetméter. A gigantikus szélkerék évi 80 gigawattóra termelésre képes. A számítások alapján ez nagyjából 20 ezer átlagos európai háztartás éves áramigényét fedezheti, és így 38 ezer tonna szén-dioxid semlegesíthető.`,
    questions: millQuestions,
  },
  {
    id: 8,
    baseDescription: `A legnagyobb méretű házas csigafaj Európában az éticsiga. Magyarországon kívül őshonos még Ausztriában, Belgiumban, Csehországban, Kelet-Franciaországban, Észak-Olaszországban, Németországban, Hollandiában, Lengyelországban, Nyugat- Oroszországban, Szlovákiában, Szlovéniában, Ukrajnában, Romániában és a délkelet-európai országokban. Körülbelül 43 000 csigafaj létezik a világon. Egy kifejlett példány háza átlagosan 45 mm átmérőjű. Teste egy fejből, egy lábból és a zsigerzacskóból áll. A fején két pár tapogató van, a felsőkön ülnek a szemek. A csiga szuperereje, hogy nemcsak a felső tapogatóját tudja visszahúzni, de tulajdonképpen egy pillanat alatt az egész testét begyűri a házába, amikor veszélyt érez. A csigahéjat mész és egy a conchyolin nevű fehérje alkotja. Két rétegből áll, és a köpenymirigyek termelik. A legtöbb csigahéj jobbra csavarodik – az irány egyébként anyai ágon öröklődik.`,
    curiosity: `Svédországba, Norvégiába és Finnországba a középkorban a szerzetesek telepítették be. Akkoriban azért szerették különösen a csigát, mert böjti időszakban lehetett enni, ugyanis nem húsnak, hanem halnak tekintették. Ahogy a neve is mutatja, az éticsigát megeszik – és nem, nem csak a franciák (csigapörkölt, csigapaella…). Itthon áprilistól június közepéig lehet gyűjteni, de kizárólag engedéllyel. Az év többi részében ez tilos, ráadásul az éticsiga védett is, a természetvédelmi értéke 2000 Ft/darab!`,
    questions: snailQuestions,
  },
];
