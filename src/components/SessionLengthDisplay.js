const SessionLengthDisplay =(props)=> {
    return (
      <div>
      <label id="session-label" >Session Duration</label>
      <button id="session-decrement" onClick={props.decrementSessionLength}>Shorter Session</button>
      <label id="session-length">{props.sessionLength}</label>
      <button id="session-increment" onClick={props.incrementSessionLength}>Longer Session</button>
      </div>  
    )
}

export default SessionLengthDisplay