import { useSelector, useDispatch } from 'react-redux'


const BreakLengthDisplay =()=> {
  const breakLength = useSelector(state=>state.breakLength)

  const dispatch = useDispatch()
  const incrementBreakHandler =()=>{
    dispatch({type: 'incrementBreak'})
  }
  const decrementBreakHandler =()=>{
    dispatch({type: 'decrementBreak'})
  }

    return (
      <div>
      <label id="break-label">Break Duration</label>
      <button id="break-decrement" onClick={decrementBreakHandler}>Shorter Break</button>
      <label id="break-length">{breakLength/60}</label>
      <button id="break-increment" onClick={incrementBreakHandler}>Longer Break</button>
      </div>  
    )
}

export default BreakLengthDisplay