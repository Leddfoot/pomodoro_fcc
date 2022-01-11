import React, { useEffect, useState } from "react";

function TestCounter() {
//   const [secondsLeft, setSecondsLeft] = useState(65);
//   const [isRunning, setIsRunning] = useState(false);
//   const [timer, setTimer] = useState();
//   const [sessionType, setSessionType] = useState('session');
//   const [sessionLength, setSessionLength] = useState(4);
//   const [breakLength, setBreakLength] = useState(5*60);
//   const [timerHasBegun, setTimerHasBegun] = useState(false);


  //////////////////////////do no delete this link
  //////////////////////////do no delete this link
  ///   https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  //////////////////////////do no delete this link
  //////////////////////////do no delete this link

  const checkIfCountIsUnderway = () => {
    if (timerHasBegun) {
        startOrStopTimer()

    } else {
        setTimerHasBegun(true)
        setSecondsLeft(sessionLength)
        startOrStopTimer()
    }
  };

  const toggleTimerType= () => {
      sessionType === 'session' ? setSessionType('break') : setSessionType('session')
  }

  const startTimerWithNewTime=()=>{

  }


  const reset = () => {
    setIsRunning(false);
    setTimer(undefined);
    setTimerHasBegun(false)
    setSecondsLeft(sessionLength)
  };

  const handleTimeRanOut =()=>{
    clearInterval(timer)
    setTimer(undefined);
    
    setIsRunning(false);
      if (sessionType === 'session') {
          setSecondsLeft(breakLength)
      } else {
        setSecondsLeft(sessionLength)
      }
      console.log('should call here: ');
      startOrStopTimer()
      
  }

  const startOrStopTimer = () => {
    //   debugger
    if (!isRunning) {
      setIsRunning(true);
      const timer = setInterval(() => {
          
        setSecondsLeft(12);
        // setSecondsLeft((secondsLeft) => secondsLeft - 1);
        console.log('secondsLeft inside interval: ', secondsLeft);

        if (secondsLeft  <= 0) {
        //   clearInterval(timer);
        console.log('sl < 0')
          handleTimeRanOut()
        }
      }, 1000);
      setTimer(timer);
    } else {
      setIsRunning(false);
    }
  };



  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);

  useEffect(() => {
    if (!isRunning) {
      clearInterval(timer);
    }
  }, [isRunning, secondsLeft, timer]);

  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);

  const testMagic =
    Math.trunc(secondsLeft / 60) > 10
      ? Math.trunc(secondsLeft / 60)
      : `0${Math.trunc(secondsLeft / 60)}`;
  const testMagicSeconds =
    secondsLeft % 60 > 10 ? secondsLeft % 60 : `0${secondsLeft % 60}`;

  return (
    <div >
      <h1>Pomodoro Timer</h1>
      <button onClick={checkIfCountIsUnderway}>startstopwsess</button>
      <button onClick={checkIfCountIsUnderway}>stop</button>
      <button onClick={reset}>reset</button>
      <button onClick={startOrStopTimer}>Start/Stop</button>
      <div>{secondsLeft} seconds left</div>
      <div>
        {testMagic}:{testMagicSeconds}
      </div>
    </div>
  );
}

export default TestCounter;


// const start = () => {
//     setIsRunning(true);
//     const timer = setInterval(() => {
//       setSecondsLeft((secondsLeft) => secondsLeft - 1);

//       if (secondsLeft === 0) {
//         clearInterval(timer);
//       }
//     }, 1000);
//     setTimer(timer);
//   };

//   const stop = () => {
//     setIsRunning(false);
//   };

// const reset = () => {
//     setIsRunning(false);
//     setTimer(undefined);
//     setSecondsLeft(33);
//   };
