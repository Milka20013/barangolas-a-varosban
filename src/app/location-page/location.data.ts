import { Question } from '../data';

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
    description: `Mely állítás hamis az alábbiak közül?
A kirakós játékok alapvetően a gyerekek
A.	logikai, és stratégiai gondolkodását 
B.	összpontosító, vizuális képességeit
C.	szem-kéz-láb koordinációját
D.	képzelőerejét
E.	kudarctűrését 
fejleszti, segíti, alakítja.
`,
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
    description: `A világ legősibb fából faragott szobra a Shigir bálvány, melyet az Urál-hegységben találtak meg. A szobor kb. 11500 éves!!!
Közel 5 méteres fából készült totem.
Melyik lehet az alábbi felsorolásból az igaz válasz?
a.	barlangban találták meg
b.	csak emberarcokat ábrázol
c.	mocsárban találták meg
d.	csak geometriai faragások találhatóak rajta
  `,
    answer: ['C', 'mocsárban találták meg'],
    help: ['Vizes élőhely', `Mocsár`],
  },
  {
    id: 2,
    description: `Melyik országban található a legnagyobb, csak fából készített szobor, melyhez évente több millióan zarándokolnak.
A szobor 23 méter magas, mely elkészítéséhez több, mint 10 fajta fát használtak fel. 
`,
    answer: ['Kína'],
    help: ['Buddhát ábrázolja', 'Changhua tartományban található', 'Kína'],
  },
];
export const LocationDatas: LocationData[] = [
  {
    id: 1,
    baseDescription: `A víz jelenléte elengedhetetlen egy madárbarát udvarban, egy friss vízzel teli, tiszta madárfürdető olyan szárnyasokat is a kertünkbe vonzhat, amelyek érdeklődését egyébként nem keltik fel az etetők és a madárházak.`,
    curiosity: `Tudtad, hogy a madár szíve nyugalmi állapotban 400-szor húzódik össze, míg repülés közben 1000-re is megnőhet!
A világ egyik legérdekesebb madaráért a lábatokat sem kell kitenni a városból. Legalábbis Pestről biztosan nem!
Igen, ezek a sarlósfecskék.
Mitől olyan érdekesek? Hát attól, hogy:
•	a világ leggyorsabb röptű madarai közé tartoznak (111 km/h).
•	a levegőben esznek isznak, párosodnak, sőt, ott is alszanak.
•	soha nem szállnak le a földre, nem ülnek ki ágakra, nem pihennek villanydrótokon. A költésen kívül egész életüket a levegőben töltik.
•	a lábaik olyan gyengék, hogy csak a sziklafalakon való kapaszkodásra jók. Járni nem tudnának vele.
•	nem igazi fecskék. A kolibrikkel állnak rokonságban.
•	a fiókák képesek hibernálni magukat, ha huzamosabb ideig hűvös, esős idő van. Éhségalvásnak hívják, amikor testhőmérsékletük csökken, a szívverésük és légzésük extrém módon lelassul, így akár egy-két hétig is életben maradnak.  
•	a szülők ilyenkor akár Horvátországig is elrepülnek, hogy táplálékot hozzanak.
•	a párok hűségesek egymáshoz, és a fészkelőhelyükhöz.
•	a régi emeletesházakat mesterséges sziklafalnak tekintik, és azok repedéseibe fészkelnek.
•	rettenetesen sok levéltetűt, szúnyogot, muslincát fogyasztanak el,
•	akár 21 évig is élhetnek, ami egy ilyen apró madárnál igazi kuriózum. 
`,
    questions: birdQuestions,
  },
  {
    id: 2,
    baseDescription: `A kirakó játékok egészen 1763-ig vezethetők vissza. Ekkor ugyanis egy angol térképkészítő egy Nagy Britannia térképet darabolt fel úgy, hogy a grófságok határait követve fűrészelte szét. Ezt az "ős puzzle"-t aztán földrajz oktatáshoz használta segédeszközként.`,
    curiosity: `A világ legtöbb darabból álló kirakója 51300 db-os!! 868 centiméter széles és 190 centiméter magas, a Kodak cég forgalmazza potom 600 dollárért... Maga a kép 27 db, a világ legjobb fotósai által készített csodás fotókat ábrázol.
A legnagyobb európai puzzlét 2013-ban készítették, ez 40.000 darabból áll, és a méretei elképesztőek:
6 méter x 2,4 méteres, egy angliai profi puzzlejátékos és egyben készítő fejéből pattant ki, 35 napon keresztül vágta és állította ismét össze, a saját maga általtervezett darabokat, ami természetesen nem másról szól, mint az brit uralkodó gyémántjubileumi ünnepségéről. 
`,
    questions: puzzleQuestions,
  },
  {
    id: 3,
    baseDescription: `Észak-Amerikából származik, folyóparti és mocsári élőhelyein széles körben elterjedt, Magyarországra a 17. században került homoki, sziki és ártéri erdősítésre. A zöld juhar zöld elnevezése onnan ered, hogy egyéves ágai még zöld színűek. Törzsének átmérője 30-60, kérge fiatalon zöld, majd sárgásbarna, sima, majd sötétebb és barázdált, idősebb korában hosszant árkolt, repedezett.`,
    curiosity: `Magassága többnyire 12-15 méter, ha sérülés éri, tőből újra sarjad és többtörzsű bokorfává fejlődik.
Puha, szivacsos szerkezete miatt fűtőértéke alacsony, viszont kiválóan faragható.
Az ágak sérülékenysége miatt könnyen megfertőzik a fát a farontó gombák, a Fusarium reticulatum var. negundinis pirosra színezi a faanyagot.
Az ÁNTSZ közleménye szerint a zöld juhar pollenszórása március végén, április elején indul, ami okozhat az arra érzékenyeknek erős tüsszögéses tünetet! 

`,
    questions: buffetQuestions,
  },
];
