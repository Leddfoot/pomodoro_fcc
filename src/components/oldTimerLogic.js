
  ///////////start timer controls

  //User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), 
  ////and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.

  //User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break 
  //countdown should begin, counting down from the value currently displayed in the id="break-length" element.
  const startTimer = () => {

    setIsCounting(!isCounting)


    setTimerHolder(
      setInterval(function () {
        if (sessionLengthSeconds === 0 && sessionLengthMinutes >= 1) {
          
          console.log('n here')
          setSessionLengthMinutes(sessionLengthMinutes -= 1)
          // temporaryTestResetSeconds()
          // setTimeLeft((sessionTime + 1) * 60)
          setSessionLengthSeconds((sessionLengthSeconds) + 60)
          
          console.log('sessionLengthSeconds: ', sessionLengthSeconds);
        }
        setSessionLengthSeconds(sessionLengthSeconds -= 1)


        console.log(`${sessionLengthMinutes} minutes and ${sessionLengthSeconds} seconds left`)

      }, 1000)
    )
  }

  const temporaryTestResetSeconds =()=>{
    setSessionLengthSeconds(24)
  }

  const pauseTimer = () => {
    setIsCounting(!isCounting)
    setTimerHolder(clearInterval(timerHolder))
  }

  const resetTimer = () => {
setSessionLengthSeconds(0)



    //gonna have to tie this tho the break duration and session duration
    // AND DONT KNOW IF THIS PAUSE TIMER CALL HERE IS KOSHER
  
    // setSessionLengthMinutes(25)
    // setSessionLengthSeconds(0)
    // setBreakLengthMinutes(5)
    // setBreakLengthSeconds(0)
    // pauseTimer()
  }
  ///////////end timer controls
  ////////////////////timer starts and stops here if undoing