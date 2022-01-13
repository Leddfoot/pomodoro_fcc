
const BreakLengthDisplay =()=> {
  const breakLength = 112



    return (
      <div>
      <label id="break-label">Break Duration</label>
      <button id="break-decrement" >Shorter Break</button>
      <label id="break-length">{breakLength/60}</label>
      <button id="break-increment" >Longer Break</button>
      </div>  
    )
}

export default BreakLengthDisplay