import React, { useState } from 'react';

export default function Timer() {
  const [time, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    clearInterval(intervalId); 
    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTimer(0);
  };

  return (
    <div
      style={{
        marginLeft: '600px',
        background: '#f0f0f0',
        padding: '20px',
        borderRadius: '10px',
        position: 'relative',
        backgroundImage: 'url(https://img.freepik.com/free-photo/white-alarm-clock-yellow-green-background-flat-lay_169016-30337.jpg)',
      }}
    >
      <h1 style={{ color:'black', position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        {time}
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <button onClick={handleStart} style={{ marginRight: '10px' }}>
          Start
        </button>
        <button onClick={handleStop} style={{ marginRight: '10px' }}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
