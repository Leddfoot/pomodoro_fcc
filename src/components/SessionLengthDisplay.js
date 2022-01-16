import { useContext } from 'react'
import TimerContext from '../context/TimerContext'

const SessionLengthDisplay =()=> {

  const { incrementSessionLength, decrementSessionLength, timerState } = useContext(TimerContext)
  const sessionLength = timerState.sessionLength
  
    return (
      <div>
      <label id="session-label" >Session Duration</label>
      <button id="session-decrement" onClick={decrementSessionLength} >Shorter Session</button>
      <label id="session-length">{sessionLength/60}</label>
      <button id="session-increment" onClick={incrementSessionLength}>Longer Session</button>
      </div>  
    )
}

export default SessionLengthDisplay