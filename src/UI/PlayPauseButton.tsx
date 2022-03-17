import React from "react";

import classes from "./PlayPauseButton.module.css";

const PlayPauseButton: React.FC<{
  isOn: boolean;
  onText: string;
  offText: string;
  onClick: () => void;
}> = (props) => {
  return (
    <div className={classes["button-wrap"]} onClick={props.onClick}>
      <span className={classes.text} data-testid="play-pause-text">
        {props.isOn ? props.offText : props.onText}
      </span>
      <button
        className={`${classes.button} ${props.isOn && classes.pause}`}
      ></button>
    </div>
  );
};

export default PlayPauseButton;
