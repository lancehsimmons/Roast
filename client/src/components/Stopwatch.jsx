import React, { useState, useEffect } from 'react'
import '../assets/stopwatch.css'

export default function Stopwatch() {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime +10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [start])

  return (
    <div>
      <div className='display'>
        <div>
          <span className='digit'>{('0' + Math.floor((time / 60000) % 60)).slice(-2)} </span>
          <span className='digit'>{('0' + Math.floor((time / 1000) % 60)).slice(-2)} </span>
          <span className='digit'>{('0' + (time / 10) % 1000).slice(-2)} </span>
        </div>
      </div>
      <div>
        <div><button onClick={() => setStart((true))}>START</button>
        </div>
        <div>

        </div>
        <button onClick={() => setStart((false))}>STOP</button>
        <button onClick={() => {setTime(0); setStart(false)}}>RESET</button>
      </div>
    </div>
  )
}

