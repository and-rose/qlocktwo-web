export type QLOCKWordPosition = {
  startLocation: [number, number];
  length: number;
};

export const ConstantWordPositions: Record<string, QLOCKWordPosition> = {
  It: { startLocation: [0, 0], length: 2 },
  Is: { startLocation: [0, 3], length: 2 },
  AM: { startLocation: [0, 7], length: 2 },
  PM: { startLocation: [0, 9], length: 2 },
  Quarter: { startLocation: [1, 2], length: 7 },
  Twenty: { startLocation: [2, 0], length: 6 },
  TwentyFive: { startLocation: [2, 0], length: 10 },
  FiveMinute: { startLocation: [2, 6], length: 4 },
  Half: { startLocation: [3, 0], length: 4 },
  TenMinute: { startLocation: [3, 5], length: 3 },
  To: { startLocation: [3, 9], length: 2 },
  Past: { startLocation: [4, 0], length: 4 },
  Nine: { startLocation: [4, 7], length: 4 },
  One: { startLocation: [5, 0], length: 3 },
  Six: { startLocation: [5, 3], length: 3 },
  Three: { startLocation: [5, 6], length: 5 },
  Four: { startLocation: [6, 0], length: 4 },
  Five: { startLocation: [6, 4], length: 4 },
  Two: { startLocation: [6, 8], length: 3 },
  Eight: { startLocation: [7, 0], length: 5 },
  Eleven: { startLocation: [7, 5], length: 6 },
  Seven: { startLocation: [8, 0], length: 5 },
  Twelve: { startLocation: [8, 5], length: 6 },
  Ten: { startLocation: [9, 0], length: 3 },
  OClock: { startLocation: [9, 5], length: 6 },
};

export const ConstantDigitShapes: [number, number][][] = [
  [
    [6, 1],
    [6, 2],
    [6, 3],
    [5, 0],
    [5, 4],
    [4, 4],
    [3, 0],
    [3, 4],
    [2, 0],
    [2, 4],
    [1, 0],
    [1, 4],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [6, 1],
    [6, 2],
    [6, 3],
    [5, 2],
    [4, 2],
    [3, 2],
    [2, 2],
    [1, 1],
    [1, 2],
    [0, 2],
  ],
  [
    [6, 0],
    [6, 1],
    [6, 2],
    [6, 3],
    [6, 4],
    [5, 1],
    [4, 2],
    [3, 3],
    [2, 4],
    [1, 0],
    [1, 4],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [6, 1],
    [6, 2],
    [6, 3],
    [5, 0],
    [5, 4],
    [4, 4],
    [3, 3],
    [2, 2],
    [1, 4],
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  [
    [6, 3],
    [5, 3],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
    [3, 0],
    [3, 3],
    [2, 1],
    [2, 3],
    [1, 2],
    [1, 3],
    [0, 3],
  ],
  [
    [6, 1],
    [6, 2],
    [6, 3],
    [5, 0],
    [5, 4],
    [4, 4],
    [3, 4],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [1, 0],
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  [
    [6, 1],
    [6, 2],
    [6, 3],
    [5, 0],
    [5, 4],
    [4, 0],
    [4, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 3],
    [2, 0],
    [1, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [6, 1],
    [5, 1],
    [4, 1],
    [3, 2],
    [2, 3],
    [1, 4],
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  [
    [6, 1],
    [6, 2],
    [6, 3],
    [5, 0],
    [5, 4],
    [4, 0],
    [4, 4],
    [3, 1],
    [3, 2],
    [3, 3],
    [2, 0],
    [2, 4],
    [1, 0],
    [1, 4],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  [
    [6, 1],
    [6, 2],
    [5, 3],
    [4, 4],
    [3, 1],
    [3, 2],
    [3, 3],
    [3, 4],
    [2, 0],
    [2, 4],
    [1, 0],
    [1, 4],
    [0, 1],
    [0, 2],
    [0, 3],
  ],
];
