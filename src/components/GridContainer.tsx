import React, { useContext, useCallback } from "react";

import Cell from "../UI/Cell";
import classes from "./GridContainer.module.css";
import { TickContext } from "../store/tick.context";

const GridContainer: React.FC = () => {
  const tickCtx = useContext(TickContext);

  const onClickOfGridEl = useCallback(
    (xCor: number, yCor: number) => {
      tickCtx.toggleGridVal(xCor, yCor);
    },
    [useCallback]
  );

  return (
    // <div className={classes.container} data-testid="gird-container">
    //   {tickCtx.grid.map((row: number[], rowIndex: number) =>
    //     row.map((el: number, colIndex: number) => (
    //       <Cell
    //         key={`${rowIndex}_${colIndex}`}
    //         isFilled={el === 1}
    //         xCor={rowIndex}
    //         yCor={colIndex}
    //         onCellClick={onClickOfGridEl}
    //       />
    //     ))
    //   )}
    // </div>
    <div className={classes.container} data-testid="gird-container">
      {tickCtx.grid.map((row: number[], rowIndex: number) => {
        return (
          <div className={classes.row}>
            {row.map((el: number, colIndex: number) => (
              <Cell
                key={`${rowIndex}_${colIndex}`}
                isFilled={el === 1}
                xCor={rowIndex}
                yCor={colIndex}
                onCellClick={onClickOfGridEl}
              />
            ))}
          </div>
        );
      })}
    </div>
    /*
    <>
      {<p>Testing</p>}
    </>
    */
  );
};

export default GridContainer;
