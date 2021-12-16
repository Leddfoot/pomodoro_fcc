const BreakLengthDisplay =(props)=> {
    return (
      <div>
      <label id="break-label">Break Duration</label>
      <button id="break-decrement" onClick={props.decrementBreakLength}>Shorter Break</button>
      <label id="break-length">{props.breakLength}</label>
      <button id="break-increment" onClick={props.incrementBreakLength}>Longer Break</button>
      </div>  
    )
}

export default BreakLengthDisplay