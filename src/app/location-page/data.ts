interface LocationData {
  id: number;
  description: string;
  answer: string;
  helps: string[];
}

interface PathData {
  initialStation: number;
  path: number[];
}

interface InitialDescription {
  id: number;
  description: string;
}

export const locationDatas: LocationData[] = [
  {
    id: 1,
    description: 'A válasz: 1',
    answer: '1',
    helps: ['A válasz 1', 'A válasz 1'],
  },
  {
    id: 2,
    description: 'A válasz: 2',
    answer: '2',
    helps: ['A válasz 1', 'A válasz 1'],
  },
  {
    id: 3,
    description: 'A válasz: 3',
    answer: '3',
    helps: ['A válasz 1', 'A válasz 1'],
  },
  {
    id: 4,
    description: 'A válasz: 4',
    answer: '4',
    helps: ['A válasz 1', 'A válasz 1'],
  },
];

export const initialDescriptions: InitialDescription[] = [
  {
    id: 4,
    description: 'Menj balra 100 métert',
  },
  {
    id: 2,
    description: 'Menj balra 150 métert',
  },
  {
    id: 3,
    description: 'Menj jobbra 100 métert',
  },
];
export const paths: PathData[] = [
  {
    initialStation: 4,
    path: [4, 3, 2, 1],
  },
  {
    initialStation: 2,
    path: [2, 4, 3, 1],
  },
  {
    initialStation: 3,
    path: [3, 2, 4, 1],
  },
];
