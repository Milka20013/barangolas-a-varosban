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
    inbetweenIds: [
      10, 11, 20, 30, 31, 40, 50, 60, 70, 80, 81, 90, 100, 110, 120, 130, 140,
      150, 400, 410, 420, 430, 440, 450, 460,
    ],
  },
  {
    teamId: 2,
    locationsIds: [4, 5, 6, 7, 8],
    inbetweenIds: [
      160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 251, 260, 270, 280, 290,
      300, 310, 311, 320, 330, 340, 350, 360, 370, 380, 390,
    ],
  },
];

export function getNextInbetweenId(teamId: number, id: number) {
  let path = TeamPaths.find((x) => x.teamId === teamId)!;
  let index = path.inbetweenIds.findIndex((x) => x === id);
  return path.inbetweenIds[index + 1];
}
