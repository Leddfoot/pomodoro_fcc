import { createContext, useState } from "react";
import useInterval from "../logic/useInterval";

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {

  const [secondsRemaining, setSecondsRemaining] = useState(1500);

  const [timerState, setTimerState] = useState({
    isRunning: false,
    sessionType: "session",
    sessionLength: 1500,
    breakLength: 300,
  });

  const playSound = () => {
    const audioElement = document.getElementById("beep");
    audioElement.play();
  };

  const incrementBreakLength = () => {
    if (timerState.breakLength < 3600) {
      setTimerState({
        isRunning: timerState.isRunning,
        sessionType: timerState.sessionType,
        sessionLength: timerState.sessionLength,
        breakLength: (timerState.breakLength = timerState.breakLength + 60),
      });
    }
  };

  const decrementBreakLength = () => {
    if (timerState.breakLength > 60) {
      setTimerState({
        isRunning: timerState.isRunning,
        sessionType: timerState.sessionType,
        sessionLength: timerState.sessionLength,
        breakLength: (timerState.breakLength = timerState.breakLength - 60),
      });
    }
  };

  const incrementSessionLength = () => {
    if (timerState.sessionLength < 3600) {
      setTimerState({
        isRunning: timerState.isRunning,
        sessionType: timerState.sessionType,
        sessionLength: (timerState.sessionLength =
          timerState.sessionLength + 60),
        breakLength: timerState.breakLength,
      });

      setSecondsRemaining(timerState.sessionLength);
    }
  };
  const decrementSessionLength = () => {
    if (timerState.sessionLength > 60) {
      setTimerState({
        isRunning: timerState.isRunning,
        sessionType: timerState.sessionType,
        sessionLength: (timerState.sessionLength =
          timerState.sessionLength - 60),
        breakLength: timerState.breakLength,
      });

      setSecondsRemaining(timerState.sessionLength);
    }
  };

  const startStop = () => {
    setTimerState({
      isRunning: !timerState.isRunning,
      sessionType: timerState.sessionType,
      sessionLength: timerState.sessionLength,
      breakLength: timerState.breakLength,
    });
  };

  const toggleTimer = () => {
      playSound()
    //This switches the sessionType and starts the timer over with that amount of time
    let newTimerLength =
      timerState.sessionType === "session"
        ? timerState.breakLength
        : timerState.sessionLength;
    if (timerState.sessionType === "session") {
      setSecondsRemaining(newTimerLength);

      setTimerState({
        isRunning: timerState.isRunning,
        sessionType: "break",
        sessionLength: timerState.sessionLength,
        breakLength: timerState.breakLength,
      });
    } else {
      setSecondsRemaining(newTimerLength);


      setTimerState({
        isRunning: timerState.isRunning,
        sessionType: "session",
        sessionLength: timerState.sessionLength,
        breakLength: timerState.breakLength,
      });
    }

    newTimerLength = null;
  };

  const reset = () => {

    const audioElement = document.getElementById("beep");
    if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
    }

    setTimerState({
      isRunning: false,
      sessionType: "session",
      sessionLength: 1500,
      breakLength: 300,
    });

    setSecondsRemaining(1500);
  };

  useInterval(
    () => {
      setSecondsRemaining(secondsRemaining - 1);

      if (secondsRemaining <= 0) {
        toggleTimer();
      }
    },
    timerState.isRunning ? 1000 : null
  );

  return (
    <TimerContext.Provider
      value={{
        secondsRemaining,
        timerState,
        toggleTimer,
        startStop,
        reset,
        incrementBreakLength,
        decrementBreakLength,
        incrementSessionLength,
        decrementSessionLength,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContext;
