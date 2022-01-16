import { createContext, useState } from "react";
import useInterval from "../logic/useInterval"; ////I am thinking that this will get used in here?????????????????

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  ///I am thinking that the seconds remaining should be its own separate state so that the whole state doesnt have to be copied every second

  const [secondsRemaining, setSecondsRemaining] = useState(1500);

  const [timerState, setTimerState] = useState({
    isRunning: false,
    sessionType: "session",
    sessionLength: 1500,
    breakLength: 300,
  });

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
      sessionLength: (timerState.sessionLength = timerState.sessionLength + 60),
      breakLength: timerState.breakLength,
    });
  }
  };
  const decrementSessionLength = () => {
    
    if (timerState.sessionLength > 60) {
    setTimerState({
      isRunning: timerState.isRunning,
      sessionType: timerState.sessionType,
      sessionLength: (timerState.sessionLength = timerState.sessionLength - 60),
      breakLength: timerState.breakLength,
    });
  }
  };

  const startStop = () => {
    console.log(timerState);
    setTimerState({
      isRunning: !timerState.isRunning,
      sessionType: timerState.sessionType,
      sessionLength: timerState.sessionLength,
      breakLength: timerState.breakLength,
    });

    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    setSecondsRemaining(timerState.sessionLength);
    ////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
  };

  const toggleTimer = () => {
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
    if (timerState.isRunning) {
      setTimerState({
        isRunning: !timerState.isRunning,
        sessionType: "session",
        sessionLength: timerState.sessionLength,
        breakLength: timerState.breakLength,
      });
    }
    setSecondsRemaining(timerState.sessionLength);
  };

  useInterval(
    () => {
      setSecondsRemaining(secondsRemaining - 1);
      console.log("secondsRemaining: ", secondsRemaining);

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
