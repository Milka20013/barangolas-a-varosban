export enum QuestionType {
  Normal,
  Inbetween,
  Last,
}
export interface Question {
  id: number;
  description: string;
  answer?: string[];
  help?: string[];
  type?: QuestionType;
}

interface TeamPath {
  teamId: number;
  locationsIds: number[];
  inbetweenIds: number[];
}

export const TeamPaths: TeamPath[] = [
  {
    teamId: 1,
    locationsIds: [1, 2, 3],
    inbetweenIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  {
    teamId: 2,
    locationsIds: [4, 5, 6, 7, 8],
    inbetweenIds: [
      16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
      34, 35, 36, 37, 38, 39,
    ],
  },
];
