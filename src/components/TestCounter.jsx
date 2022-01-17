import React, { useEffect, useState, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function TestCounter() {

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

  

  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////


  const testMagic =
    Math.trunc(secondsLeft / 60) > 10
      ? Math.trunc(secondsLeft / 60)
      : `0${Math.trunc(secondsLeft / 60)}`;
  const testMagicSeconds =
    secondsLeft % 60 > 10 ? secondsLeft % 60 : `0${secondsLeft % 60}`;

  return (
    <div >
      <h1>Pomodoro Timer</h1>
      <button >start</button>
      <button >stop</button>
      <button onClick={reset}>reset</button>
      <button onClick={startStop}>Start/Stop</button>
      <div>{secondsLeft} seconds left</div>
      <div>
        {testMagic}:{testMagicSeconds}
      </div>
    </div>
  );
}



export default TestCounter;

