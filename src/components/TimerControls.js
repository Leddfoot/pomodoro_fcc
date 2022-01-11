import { useSelector, useDispatch } from "react-redux"


////////////////////////////working example in between here/////////////////////////////////
////////////////////////////working example in between here/////////////////////////////////
////////////////////////////working example in between here/////////////////////////////////

//////////note that this starts automatically and cant be paused

// taken from here https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// example here: https://codesandbox.io/s/105x531vkq

////THE ENTIRE CODE IS BELOW

// import React, { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom";

// function Counter() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     // Your custom logic here
//     setCount(count + 1);
//   }, 1000);

//   return <h1>{count}</h1>;
// }

// function useInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Remember the latest function.
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   // Set up the interval.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Counter />, rootElement);

////////////////////////////working example in between here/////////////////////////////////
////////////////////////////working example in between here/////////////////////////////////
////////////////////////////working example in between here/////////////////////////////////
////////////////////////////working example in between here/////////////////////////////////
////////////////////////////working example in between here/////////////////////////////////
////////////////////////////working example in between here/////////////////////////////////
////////////////////////////working example in between here/////////////////////////////////


///////////////////////////////////
///////////////////////////////////
import React, { useState, useRef } from 'react';


///////////////////////////////////
///////////////////////////////////
///////////////////////////////////

const TimerControls = () => {
    const sessionLength = useSelector(state=>state.sessionLength )
    const breakLength = useSelector(state=>state.breakLength )
    const sessionType = useSelector(state=>state.sessionOrBreak)
    const timeRemaining = useSelector(state=>state.timeRemaining)
    const isRunning = useSelector(state=>state.isRunning)

    const [timer, setTimer] = useState()

    const dispatch = useDispatch()

    // let isRunning = false
    // let timer = useRef()
    let timeLeft = useRef(23)
    const handleStartStop = () => {

        console.log('isRunning: ', isRunning);


        if (!isRunning) {
            setTimer(setInterval(() => {
                if (timeLeft > 0) {
                    console.log('timeLeft: ', timeLeft);
                    timeLeft -= 1
                    dispatch({type: 'updateTimeRemaining',timeLeft: timeLeft})
                } else {

                    setTimer(clearInterval(timer))
                    /////trying to flip here if time is up
                    console.log ('timer is up ')

                }

    
            }, 1000))
            
            // timer = setInterval(() => {
            //     if (timeLeft > 0) {
            //         console.log('timeLeft: ', timeLeft);
            //         timeLeft -= 1
            //         dispatch({type: 'updateTimeRemaining',timeLeft: timeLeft})
            //     } else {

            //         /////trying to flip here if time is up
            //         console.log ('timer is up ')

            //     }

    
            // }, 1000);
        } else {
            console.log('shoulda stopped here')
            clearInterval(timer);
        }
        // isRunning = !isRunning

    }

    const handleReset=()=>{

        clearInterval(timer);

        // dispatch({type: 'toggleIsRunning'})
        // isRunning = false
        // if (isRunning) {
        //     isRunning = !isRunning
            
        // }
        
        // clearInterval(timer);
        
        // dispatch({type: 'resetTimeRemaining'})
        // timeLeft = sessionLength //////////////believe that the
        // timer = undefined
    }
    return (
        <div>
            <button id="start_stop" onClick={handleStartStop}>
                Start/Stop Timer
            </button>

            <button id="reset" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default TimerControls