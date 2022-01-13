
const SessionLengthDisplay =()=> {
  
  const sessionLength = 44
    return (
      <div>
      <label id="session-label" >Session Duration</label>
      <button id="session-decrement" >Shorter Session</button>
      <label id="session-length">{sessionLength/60}</label>
      <button id="session-increment" >Longer Session</button>
      </div>  
    )
}

export default SessionLengthDisplay