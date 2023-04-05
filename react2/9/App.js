import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';


function CountdownTimer({ targetDate }) {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const difference = +new Date(targetDate) - +new Date();
    if (difference < 0) {
      // The target date is in the past, return zero time remaining
      return {
        total: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    return {
      total: difference,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div>{remainingTime.days} days</div>
      <div>{remainingTime.hours} hours</div>
      <div>{remainingTime.minutes} minutes</div>
      <div>{remainingTime.seconds} seconds</div>
    </div>
  );
}

function App() {
  const [targetDate, setTargetDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (targetDate) {
      console.log(`Counting down to ${targetDate}`);
    } else {
      console.log('Please enter a valid date');
    }
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a target date and time:
          <input type="datetime-local" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
        </label>
       
      </form>
      {targetDate && <CountdownTimer targetDate={targetDate} />}
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
