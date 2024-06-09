export interface Question {
  id: number;
  description: string;
  answer?: string[];
  help?: string[];
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
];
