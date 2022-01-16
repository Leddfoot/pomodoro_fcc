import BreakLengthDisplay from "./components/BreakLengthDisplay";
import SessionLengthDisplay from "./components/SessionLengthDisplay.js";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";

import { useContext } from "react";
import TimerContext from "./context/TimerContext";

function App() {
  const { toggleTimer, startStop, reset } = useContext(TimerContext);
  const {secondsRemaining} = useContext(TimerContext);


  const displayMinutes =
    Math.trunc(secondsRemaining / 60) > 10
      ? Math.trunc(secondsRemaining / 60)
      : `0${Math.trunc(secondsRemaining / 60)}`;
  const displaySeconds =
    secondsRemaining % 60 > 10 ? secondsRemaining % 60 : `0${secondsRemaining % 60}`;
  return (
    <>

      <BreakLengthDisplay />
      <SessionLengthDisplay />
      <TimerDisplay />
      <TimerControls />
    </>
  );
}

export default App;
