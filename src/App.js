import BreakLengthDisplay from "./components/BreakLengthDisplay";
import SessionLengthDisplay from "./components/SessionLengthDisplay.js";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";

import { useContext } from "react";
import TimerContext from "./context/TimerContext";

function App() {
  const {secondsRemaining} = useContext(TimerContext);


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
