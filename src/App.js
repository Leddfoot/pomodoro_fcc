import React, { useState } from "react";

import BreakLengthDisplay from "./components/BreakLengthDisplay";
import SessionLengthDisplay from "./components/SessionLengthDisplay.js";
import TimerControls from "./components/TimerControls";
import TimerDisplay from "./components/TimerDisplay";

import useInterval from "./logic/useInterval";

function App() {
  
  const [secondsLeft, setSecondsLeft] = useState(4);
  
  const [isRunning, setIsRunning] = useState(false);
  const [sessionType, setSessionType] = useState('session');

  const switchAndRestartTimer =() => {
    if (sessionType === 'session') {
      setSecondsLeft(4)
      setSessionType('break')
    } else {
      setSecondsLeft(7)
      setSessionType('session')
    }
  }
  
  
  useInterval(() => {
    setSecondsLeft(secondsLeft - 1);
    console.log('secondsLeft: ', secondsLeft);
  
    if (secondsLeft <= 0) {
      switchAndRestartTimer()
    }
  
  }, isRunning ? 1000 : null);
  
  
  const startStop =()=>{
    setIsRunning(!isRunning)
  }
  
  const reset =()=>{
    if (isRunning) {
      setIsRunning(!isRunning)
    }
    setSecondsLeft(33)
  }
  
  const testMagic =
  Math.trunc(secondsLeft / 60) > 10
    ? Math.trunc(secondsLeft / 60)
    : `0${Math.trunc(secondsLeft / 60)}`;
  const testMagicSeconds =
  secondsLeft % 60 > 10 ? secondsLeft % 60 : `0${secondsLeft % 60}`;
  return (
    <>
      <h1> Pomodoro App LUCKy that it works</h1>
      <div>
      <hr />
      <h2>This whole div is temporary for testing purposes only</h2>
      <button onClick={reset}>reset</button>
      <button onClick={startStop}>Start/Stop</button>
      <div>{secondsLeft} seconds left</div>
      <div>
        {testMagic}:{testMagicSeconds}
      </div>
      <hr /></div>
      <BreakLengthDisplay />
      <SessionLengthDisplay />
      <TimerDisplay />
      <TimerControls />
    </>
  );
}

export default App;
