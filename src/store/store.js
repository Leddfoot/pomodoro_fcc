import { createStore } from "redux";

const initialState = {
    sessionLength: 5,
    breakLength: 9,
    sessionOrBreak: 'session',
    timeRemaining: 1500,
    isRunning: false,
    timer: null
}






const timerReducer = (state = initialState, action) => {
    console.log('action: ', action);

    if (action.type === 'decrementtimeleft') {
        console.log('state.timeRemaining: ', state.timeRemaining);
        return {
            sessionLength: state.sessionLength,
            breakLength: state.breakLength,
            sessionOrBreak: state.sessionOrBreak,
            timeRemaining: state.timeRemaining -1,
            
            isRunning: state.isRunning,
            timer: state.timer
        }
    }

    if (action.type === 'incrementBreak') {
        if (state.breakLength < 3600) {
            return {
                sessionLength: state.sessionLength,
                breakLength: state.breakLength + 60,
                sessionOrBreak: state.sessionOrBreak,
                timeRemaining: state.timeRemaining,
                isRunning: state.isRunning,
                timer: state.timer
            }
        } else {
            return {
                sessionLength: state.sessionLength,
                breakLength: state.breakLength,
                sessionOrBreak: state.sessionOrBreak,
                timeRemaining: state.timeRemaining,
                isRunning: state.isRunning,
                timer: state.timer
            }
        }
    }

    if (action.type === 'decrementBreak') {
        if (state.breakLength >= 120) {
            return {
                sessionLength: state.sessionLength,
                breakLength: state.breakLength - 60,
                sessionOrBreak: state.sessionOrBreak,
                timeRemaining: state.timeRemaining,
                isRunning: state.isRunning,
                timer: state.timer
            }
        } else {
            return {
                sessionLength: state.sessionLength,
                breakLength: state.breakLength,
                sessionOrBreak: state.sessionOrBreak,
                timeRemaining: state.timeRemaining,
                isRunning: state.isRunning,
                timer: state.timer
            }
        }

    }
    if (action.type === 'incrementSession') {
        if (state.sessionLength < 3600) {
            return {
                sessionLength: state.sessionLength + 60,
                breakLength: state.breakLength,
                sessionOrBreak: state.sessionOrBreak,
                timeRemaining: state.timeRemaining,
                isRunning: state.isRunning,
                timer: state.timer
            }
        } else {
            return {
                sessionLength: state.sessionLength,
                breakLength: state.breakLength,
                sessionOrBreak: state.sessionOrBreak,
                timeRemaining: state.timeRemaining,
                isRunning: state.isRunning,
                timer: state.timer
            }
        }
    }

    if (action.type === 'decrementSession') {
        if (state.sessionLength > 60) {
            return {
                sessionLength: state.sessionLength - 60,
                breakLength: state.breakLength,
                sessionOrBreak: state.sessionOrBreak,
                timeRemaining: state.timeRemaining,
                isRunning: state.isRunning,
                timer: state.timer
            }
        } else {
            return {
                sessionLength: state.sessionLength,
                breakLength: state.breakLength,
                sessionOrBreak: state.sessionOrBreak,
                timeRemaining: state.timeRemaining,
                isRunning: state.isRunning,
                timer: state.timer
            }
        }

    }
    if (action.type === 'updateTimeRemaining') {
        return {
            sessionLength: state.sessionLength,
            breakLength: state.breakLength,
            sessionOrBreak: state.sessionOrBreak,
            timeRemaining: action.timeLeft,
            isRunning: state.isRunning,
            timer: state.timer
        }
    }
    if (action.type === 'resetTimeRemaining') {
        return {
            sessionLength: 1500,
            breakLength: 300,
            sessionOrBreak: state.sessionOrBreak,
            timeRemaining: 1500,
            isRunning: state.isRunning,
            timer: state.timer
        }
    }

    if (action.type === 'toggleIsRunning') {  ///this is not used in the timer controls
        console.log('toggleIsRunning:dasfdadafs ');
        return{
            sessionLength: state.sessionLength,
            breakLength: state.breakLength,
            sessionOrBreak: state.sessionOrBreak,
            timeRemaining: action.timeLeft,
            isRunning: !state.isRunning,
            timer: state.timer
        }
    }

    if (action.type === 'toggleTimerType') {
        let nextTypeOfTimer
        let currentTypeOfTimer = state.sessionOrBreak
        if (currentTypeOfTimer === 'session') {
            nextTypeOfTimer = 'break'
        } else {
            nextTypeOfTimer = 'session'
        }
        console.log('should change to other timer here')
        return {
            sessionLength: state.sessionLength,
            breakLength: state.breakLength,
            sessionOrBreak: nextTypeOfTimer,
            timeRemaining: action.timeLeft,
            isRunning: !state.isRunning,
            timer: state.timer
        }
    }


    console.log('end of counter Reducer, just returns state here')
    return state
}

const store = createStore(timerReducer)

export default store