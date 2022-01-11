import { useSelector } from "react-redux"


const TimerDisplay =()=> {
  const timeLeft = useSelector(state=>state.timeRemaining)
  console.log('timeLeft: ffffffffffffffffffffffffffff', timeLeft);
  
  const unMutatedTime = [].concat(timeLeft)
  console.log('unMutatedTime: ', unMutatedTime);
  const minutesLeft = [...unMutatedTime] / 60
  console.log('minutesLeft: ', minutesLeft);
  const roundedMinutesLeft = Math.trunc(minutesLeft)
  const secondsLeft = ([...unMutatedTime] % 60)
  console.log('secondsfffLeft: ', secondsLeft);
    return (
      <div>
      <label id="timer-label">{ 'Break Time : Time remaining in this session'}</label>
      <label id="time-left">{roundedMinutesLeft}:{secondsLeft}</label>
      </div>  
    )
}

export default TimerDisplay