import React, { useEffect, useState } from 'react';


/*
The useEffect hook is used to start the timer and update the secondsLeft state every second. 
It also handles the cleanup by clearing the interval when the component unmounts.

In the useEffect hook, an interval is set up using setInterval if there are seconds left on the timer. 
It decrements the secondsLeft state by 1 every second until it reaches 0.


*/

const Timer = ({ setGameOver, gameOver }) => {
    const [secondsLeft, setSecondsLeft] = useState(30);
  
    useEffect(() => {
      let intervalId = null;
  
      if (secondsLeft > 0 && !gameOver) {
        intervalId = setInterval(() => {
          setSecondsLeft((prevSeconds) => prevSeconds - 1);
        }, 1000);
      } else {
        clearInterval(intervalId);
        setGameOver(true);
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [secondsLeft, gameOver]);
  
    return <div className="flex text-1xl justify-center p-4">{secondsLeft} seconds</div>;
  };
  
  export default Timer;
