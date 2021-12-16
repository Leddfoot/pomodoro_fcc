const TimerControls = (props) => {
    return (
        <div>
        <button
        id="start_stop"         
        onClick={props.temporaryTest}
        >
        Start/Stop Timer
        </button>
        <button id="reset" onClick={props.resetTimer}>Reset</button>
        </div>
    )
}

export default TimerControls