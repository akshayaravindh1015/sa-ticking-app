import React, { useCallback, FC } from "react";

import classes from "./Cell.module.css";

const NonMemoCell: FC<{
  xCor: number;
  yCor: number;
  isFilled: boolean;
  onCellClick: (xCor: number, yCor: number) => void;
}> = (props) => {
  // console.log("Redering Cell", props.xCor, props.yCor);

  const onCellClick = () => {
    props.onCellClick(props.xCor, props.yCor);
  };

  return (
    <div
      className={`${classes.cell} ${props.isFilled && classes.filled}`}
      onClick={onCellClick}
      data-testid="cell-unit"
    ></div>
  );
};

const Cell = React.memo(NonMemoCell);
export default Cell;
