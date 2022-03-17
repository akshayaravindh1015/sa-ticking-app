import React, { useContext, useState } from "react";

import "./App.css";
import GridContainer from "./components/GridContainer";
import { TickContext } from "./store/tick.context";
import PlayPauseButton from "./UI/PlayPauseButton";

const App = () => {
  const tickCtx = useContext(TickContext);

  const [isTicking, setIsTicking] = useState(false);
  const [tickingController, setTickingController] = useState();

  const startTimer = () => {
    const interval: any = setInterval(() => {
      tickCtx.tick();
    }, tickCtx.timerVal);
    setTickingController(interval);
  };

  const stopPrevTimer = () => {
    if (!!tickingController) {
      clearInterval(tickingController);
    }
  };

  const clickHanlder = () => {
    if (isTicking) {
      stopPrevTimer();
      setIsTicking(false);
    } else {
      startTimer();
      setIsTicking(true);
    }
  };

  return (
    <div className="container">
      <h1>Seeking Alpha React - Test</h1>
      <PlayPauseButton
        onClick={clickHanlder}
        isOn={isTicking}
        offText="Stop Ticking"
        onText="Start Ticking"
      ></PlayPauseButton>
      <br />
      <GridContainer />
    </div>
  );
};

export default App;
