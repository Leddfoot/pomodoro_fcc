import { useState, useEffect } from 'react'

import BreakLengthDisplay from "./components/BreakLengthDisplay";
import SessionLengthDisplay from "./components/SessionLengthDisplay.js"
import TimerDisplay from "./components/TimerDisplay";
import TimerControls from "./components/TimerControls";

function App() {
  const [pauseTimer, setPauseTimer] = useState(true)
  let [sessionLength, setSessionLength] = useState(25)
  let [breakLength, setBreakLength] = useState(5)
  let [timeRemaining, setTimeRemaining] = useState(sessionLength * 60)
  const [displayTime, setDisplayTime] = useState('25:00')

  ///start timer
  const changePause = () => {
    setPauseTimer(!pauseTimer)
  }

  const decrementTime = () => {
    setDisplayTime(convertToDisplayTime())

    if (timeRemaining > 0) {
      setTimeRemaining(timeRemaining -= 1);
      console.log(timeRemaining)
    }

  }

  useEffect(() => {
    if (!pauseTimer) {
      const interval = setInterval(decrementTime, 1000);
      return () => clearInterval(interval);
    }
  })

  const convertToDisplayTime = () => {
    const minutes = Math.floor(timeRemaining / 60)
    const seconds = timeRemaining % 60
    return `${minutes}:${seconds}`
  }

  ///end timer


  ///////////start break Length controls
  const incrementBreakLength = () => {
    if (breakLength >= 60) {

      return
    }
    setBreakLength(breakLength += 1)
  }
  const decrementBreakLength = () => {
    if (breakLength <= 1) {

      return
    }
    setBreakLength(breakLength -= 1)

  }
  ///////////end break Length controls

  ///////////start session Length controls
  const incrementSessionLength = () => {
    if (sessionLength >= 60) {

      return
    }
    setSessionLength(sessionLength += 1)
  }
  const decrementSessionLength = () => {
    console.log('sessionLength: ', sessionLength);
    if (sessionLength <= 1) {
      

      return
    }
    setSessionLength(sessionLength -= 1)
  }
  ///////////end session Length controls




  return (
    <>
      <h1>Best Pomodoro App Ever</h1>
      <BreakLengthDisplay
        breakLength={breakLength}
        incrementBreakLength={incrementBreakLength}
        decrementBreakLength={decrementBreakLength}
      />
      <SessionLengthDisplay
        sessionLength={sessionLength}
        incrementSessionLength={incrementSessionLength}
        decrementSessionLength={decrementSessionLength}
      />
      <TimerDisplay displayTime={displayTime} />
      <TimerControls temporaryTest={changePause} />
    </>
  )
}

export default App;
