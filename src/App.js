import BreakLengthDisplay from "./components/BreakLengthDisplay";
import SessionLengthDisplay from "./components/SessionLengthDisplay.js"
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";

function App() {



  return (
    <>
      <h1>Best Pomodoro App Ever</h1>
      <BreakLengthDisplay/>
      <SessionLengthDisplay/>
      <TimerDisplay/>
      <TimerControls />
    </>
  )
}

export default App;

