import { useContext } from "react"
import TimerContext from "../context/TimerContext"

const BreakLengthDisplay =()=> {

const { incrementBreakLength, decrementBreakLength } = useContext(TimerContext)
const {timerState} = useContext(TimerContext);
const breakLength = timerState.breakLength 

    return (
      <div>
      <label id="break-label">Break Duration</label>
      <button id="break-decrement" onClick={decrementBreakLength} >Shorter Break</button>
      <label id="break-length">{breakLength/60}</label>
      <button id="break-increment" onClick={incrementBreakLength} >Longer Break</button>
      </div>  
    )
}

export default BreakLengthDisplay