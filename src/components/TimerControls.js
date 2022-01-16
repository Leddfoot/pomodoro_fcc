import { useContext } from "react"
import TimerContext from "../context/TimerContext"

const TimerControls = () => {

    const { startStop,reset } = useContext(TimerContext)
 
    return (
        <div>
            <button id="start_stop" onClick={startStop}>
                Start/Stop Timer
            </button>

            <button id="reset" onClick={reset}>Reset</button>
        </div>
    )
}

export default TimerControls