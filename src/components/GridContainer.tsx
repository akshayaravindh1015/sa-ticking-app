import React, { useContext, useCallback } from "react";

import Cell from "../UI/Cell";
import classes from "./GridContainer.module.css";
import { TickContext } from "../store/tick.context";

const GridContainer: React.FC = () => {
  const ctx = useContext(TickContext);

  const onClickOfGridEl = useCallback(
    (xCor: number, yCor: number) => {
      ctx.toggleGridVal(xCor, yCor);
    },
    [useCallback]
  );

  return (
    <div className={classes.container}>
      {ctx.grid.map((row: number[], rowIndex: number) =>
        row.map((el: number, colIndex: number) => (
          <Cell
            key={`${rowIndex}_${colIndex}`}
            isFilled={el === 1}
            xCor={rowIndex}
            yCor={colIndex}
            onCellClick={onClickOfGridEl}
          />
        ))
      )}
    </div>
  );
};

export default GridContainer;
