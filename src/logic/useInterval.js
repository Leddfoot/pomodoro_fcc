///NOTE: If you are reviewing my code, this is not original. After a substantial time investment, I could not create the code below myself, so I borrowed it from Abramov. It is tricky enough to adapt and implement in the current scenario, even when this code is provided. Using this code requires an understanding of it. 
/// this comes from https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import { useEffect, useRef } from "react";

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    });
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
  
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  export default useInterval