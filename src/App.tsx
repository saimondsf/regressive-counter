import { useEffect, useState } from 'react'

const COUNTDOWN_INITIAL_TIME_IN_SECONDS =  5 * 60; // 5 minutos 

function App() {

  const [secondsAmount, setSecondsAmout] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);

  useEffect(() => {

    if(secondsAmount > 0) {
      setTimeout(() => {
        setSecondsAmout(state => state - 1);
      }, 1000);
      
    } 
    else if(secondsAmount == 0) {
      alert("A contagem terminou!");
    }

  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <>
      <span>{minutes.toString().padStart(2, '0')}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, '0')}</span>
    </>
  )
}

export default App
