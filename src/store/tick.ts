import { initalize2D_Arr } from "../models/grid.model";

const DIRECTIONS = [
  [1, -1],
  [1, 0],
  [1, 1],
  [0, -1],
  //   [0,0],  cell itself
  [0, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];
export const getRandomGrid = (size: number): number[][] => {
  return initalize2D_Arr(size).map((row: number[]) =>
    row.map(() => {
      return Math.round(Math.random());
    })
  );
};
export const tickAndGetNewGrid = (grid: number[][]): number[][] => {
  return grid.map((row: number[], rowIndex: number) =>
    row.map((el: number, colIndex: number) => {
      let neighbourCount = getNumberOfNeighbours(grid, rowIndex, colIndex);
      if (el === 1) {
        // LIVE CELL
        if (neighbourCount < 2 || neighbourCount > 3) {
          // (underpopulation) & (overcrowding)
          return 0;
        } else {
          // lives on
          return 1;
        }
      } else {
        //DEAD CELL
        if (neighbourCount == 3) {
          // (reproduction).
          return 1;
        } else {
          return 0;
        }
      }
    })
  );
};
const isInBound = (xCor: number, yCor: number, len: number): boolean => {
  return xCor >= 0 && yCor >= 0 && xCor < len && yCor < len;
};
const getNumberOfNeighbours = (
  grid: number[][],
  rowIndex: number,
  colIndex: number
): number => {
  let neighbourCount = 0;
  for (let i = 0; i < DIRECTIONS.length; i++) {
    const dir = DIRECTIONS[i];
    const newXCor = rowIndex + dir[0];
    const newYCor = colIndex + dir[1];
    if (
      isInBound(newXCor, newYCor, grid.length) &&
      grid[newXCor][newYCor] == 1
    ) {
      neighbourCount++;
    }
  }
  return neighbourCount;
};
