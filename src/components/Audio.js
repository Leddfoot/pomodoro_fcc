import { useState, useContext } from "react";
import TimerContext from "../context/TimerContext";

 
function Audio() {
//////////test
// //////////test
const { testContext, testPause } = useContext(TimerContext)
// console.log('audioElement: ', audioElement);
//////////test
//////////test
//////////test



   const test =() => {
    const sound = document.getElementById("beep");
    console.log('sound: ', sound);
    sound.pause();
    sound.currentTime = 0;
    sound.play()
   }
   const test2 =() => {
   }

  return (

    <>
      audio component?
      <audio
        preload="auto"
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      >
        audio component
      </audio>
      <button onClick={testContext}>set audio to the current of the ref</button>
      <button onClick={test}>bullshit</button>
      <button onClick={testPause}>testPause</button>
    </>
  );
}

export default Audio;

// <audio
// id="beep"
// preload="auto"
// ref={(audio) => {
//   this.audioBeep = audio;
// }}
// src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
// />
