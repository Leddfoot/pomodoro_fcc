import { useSelector, useDispatch } from "react-redux"
const SessionLengthDisplay =()=> {
  
  const sessionLength = useSelector(state=>state.sessionLength )
  const dispatch = useDispatch()
  const incrementSessionHandler =()=>{
    dispatch({type: 'incrementSession'})
  }
  const decrementSessionHandler =()=>{
    dispatch({type: 'decrementSession'})
  }
    return (
      <div>
      <label id="session-label" >Session Duration</label>
      <button id="session-decrement" onClick={decrementSessionHandler}>Shorter Session</button>
      <label id="session-length">{sessionLength/60}</label>
      <button id="session-increment" onClick={incrementSessionHandler}>Longer Session</button>
      </div>  
    )
}

export default SessionLengthDisplay