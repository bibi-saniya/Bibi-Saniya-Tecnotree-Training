import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [seconds, setSeconds] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    if (remainingSeconds > 0) {
      const intervalId = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [remainingSeconds]);

  const handleStart = () => {
    setRemainingSeconds(seconds);
  };

  const handleSecondsChange = (event) => {
    setSeconds(parseInt(event.target.value, 10));
  };

  return (
    <div class="a ">
      <h2>Countdown Timer</h2>
      <label htmlFor="seconds-input">Seconds:</label>
      <input
        type="number"
        id="seconds-input"
        value={seconds}
        onChange={handleSecondsChange}
      />
      &nbsp;
      <button onClick={handleStart}>Start</button>
      {remainingSeconds > 0 && (
        <h2 class="c">Remaining Time: {remainingSeconds}s</h2>
      )}
      {remainingSeconds === 0 && seconds !== 0 && <p class="b">Time is up!</p>}
    </div>
  );
}

export default CountdownTimer;
