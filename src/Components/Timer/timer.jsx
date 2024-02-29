import React, { useState } from 'react'

export default function Timer() {
    const [time,setTimer] = useState(0)
    const [intervalId,setintervalId] = useState(null)


    const handleStart = () =>{
        clearInterval(intervalId)
       const id = setInterval(() =>{
            setTimer(prev =>prev+1)
        },1000)
        setintervalId(id)
    }
    const handleStop = () =>{
      clearInterval(intervalId)
      setintervalId(null)
    }
    const handleRestart = () =>{
        clearInterval(intervalId)
        handleStart();
    }
    const handleReset = () =>{
        clearInterval(intervalId)
        setTimer(0)
    }
    
  return (
    <div style={{'marginLeft':'600px'}}>
        <h1>TIMER : {time}</h1>    
      <button onClick={handleStart}>Start</button> &nbsp;

    {time?(
     intervalId? (
      <button onClick={handleStop}>Pause</button> 
      ) : (
      <button onClick={handleRestart}>Continue</button> 
      )

    ):''
      }
      &nbsp;
      <button onClick={handleReset}>Reset</button>

    </div>
  )
}

  
