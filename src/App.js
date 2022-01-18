import BreakLengthDisplay from "./components/BreakLengthDisplay";
import SessionLengthDisplay from "./components/SessionLengthDisplay.js";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";
import Audio from "./components/Audio";


function App() {

  return (
    <>
      <BreakLengthDisplay />
      <SessionLengthDisplay />
      <TimerDisplay />
      <TimerControls />
      <Audio />
    </>
  );
}

export default App;
