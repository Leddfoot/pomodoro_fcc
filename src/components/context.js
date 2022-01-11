import React, { useState, createContext } from "react";

// Create Context Object
export const CounterContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const CounterContextProvider = props => {
    const [sessionLength, setSessionLength] = useState(25)

  return (
    <CounterContext.Provider value={[sessionLength, setSessionLength]}>
      {props.children}
    </CounterContext.Provider>
  );
};