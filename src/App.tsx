import { useEffect, useState, useRef } from "react";

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 5 * 60; // 5 minutos

function App() {
  const timeoutId = useRef<number | null>(null);
  const [secondsAmount, setSecondsAmout] = useState(
    COUNTDOWN_INITIAL_TIME_IN_SECONDS
  );

  useEffect(() => {
    if (secondsAmount > 0) {
      timeoutId.current = setTimeout(() => {
        setSecondsAmout((state) => state - 1);
      }, 1000);
    } else if (secondsAmount === 0) {
      alert("A contagem terminou!");
      clearTimeout(timeoutId.current || 0);
    }
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  const pauseTimer = () => {
    if (!timeoutId.current) return;

    clearTimeout(timeoutId.current);
    timeoutId.current = null;
  };

  const resumeTimer = () => {
    if (timeoutId.current || secondsAmount === 0) return;

    timeoutId.current = setTimeout(() => {
      setSecondsAmout((state) => state - 1);
    }, 1000);
  };

  return (
    <>
      <span>{minutes.toString().padStart(2, "0")}</span>
      <span>:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
      <br />
      <button onClick={pauseTimer}>
        <span role="img" aria-label="pause">
          ⏸️
        </span>
        Pause
      </button>
      <button onClick={resumeTimer}>
        <span role="img" aria-label="resume">
          ▶️
        </span>
        Resume
      </button>
    </>
  );
}

export default App;
