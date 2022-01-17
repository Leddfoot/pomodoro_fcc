import { useContext } from "react";
import TimerContext from "../context/TimerContext";

const TimerDisplay = () => {
  const { secondsRemaining, timerState } = useContext(TimerContext);
  const sessionType = timerState.sessionType

  const displayMinutes =
    Math.trunc(secondsRemaining / 60) > 10
      ? Math.trunc(secondsRemaining / 60)
      : `0${Math.trunc(secondsRemaining / 60)}`;

  const displaySeconds =
    secondsRemaining % 60 > 10
      ? secondsRemaining % 60
      : `0${secondsRemaining % 60}`;

  return (
    <div>
      <p id="timer-label">Type of Break : {sessionType}</p>
      <p id="time-left">{displayMinutes}:{displaySeconds}</p>
    </div>
  );
};

export default TimerDisplay;
