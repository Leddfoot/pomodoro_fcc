const TimerDisplay =(props)=> {

    return (
      <div>
      <label id="timer-label">{props.breakIsRunning ? 'Break Time' : 'Time remaining in this session'}</label>
      <label id="time-left">{props.displayTime}</label>
      </div>  
    )
}

export default TimerDisplay