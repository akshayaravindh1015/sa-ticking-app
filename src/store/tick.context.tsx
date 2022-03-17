import React, { useState } from "react";

import { initalize2D_Arr } from "../models/grid.model";
import { getRandomGrid, tickAndGetNewGrid } from "./tick";

type TickContextObj = {
  grid: number[][];
  timerVal: number;
  tick: () => void;
  setTimerVal: (val: number) => void;
  setGrid: (grid: number[][]) => void;
  generateRandom: () => void;
  toggleGridVal: (x: number, y: number) => void;
};

export const TickContext = React.createContext<TickContextObj>({
  grid: [],
  timerVal: 1000,
  tick: () => {},
  setTimerVal: (val: number) => {},
  setGrid: (grid: number[][]) => {},
  generateRandom: () => {},
  toggleGridVal: (x: number, y: number) => {},
});

const TickContextProvider: React.FC = (props) => {
  const [grid, setGrid] = useState<number[][]>(initalize2D_Arr(50));
  const [timerVal, setTimerVal] = useState(1000);

  const tick = () => {
    console.log("ticking....");
    setGrid((prevGrid) => tickAndGetNewGrid(prevGrid));
  };

  const toggleGridVal = (x: number, y: number) => {
    setGrid((prevGrid) =>
      prevGrid.map((row: number[], rowIndex: number) =>
        row.map((el: number, colIndex: number) => {
          if (rowIndex === x && colIndex === y) {
            return el === 0 ? 1 : 0;
          }
          return el;
        })
      )
    );
  };

  const generateRandom = () => {
    setGrid(() => getRandomGrid());
  };

  const contextValue: TickContextObj = {
    grid: grid,
    timerVal: timerVal,
    tick: tick,
    setTimerVal: setTimerVal,
    setGrid: setGrid,
    generateRandom: generateRandom,
    toggleGridVal: toggleGridVal,
  };

  return (
    <TickContext.Provider value={contextValue}>
      {props.children}
    </TickContext.Provider>
  );
};

export default TickContextProvider;
