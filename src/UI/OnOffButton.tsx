import React from "react";

import classes from "./OnOffButton.module.css";

const OnOffButton: React.FC<{
  isOn: boolean;
  onText: string;
  offText: string;
}> = (props) => {
  return (
    <button
      className={classes["btn-flip"]}
      data-back={props.onText}
      data-front={props.offText}
    >
      {props.children}
    </button>
  );
};

export default OnOffButton;
