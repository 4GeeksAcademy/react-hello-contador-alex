import React, { useState, useEffect } from "react";
import Contador from "./Contador";

const Home = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(null);
  const [startCountdown, setStartCountdown] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else if (startCountdown) {
      intervalId = setInterval(() => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
      }, 1000);
    }
    
    if (targetTime !== null && count === targetTime) {
      alert(`Se alcanzó el tiempo de ${targetTime} segundos`);
      setTargetTime(null);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, count, startCountdown]);

  const cuentaRegresiva = () => {
    const initialTime = parseInt(prompt("Ingrese el tiempo inicial en segundos:"), 10);
    if (!isNaN(initialTime) && initialTime > 0) {
      setCount(initialTime);
      setStartCountdown(true);
      setIsRunning(false);
    }
  };

  const Pause = () => {
    setIsRunning(false);
    setStartCountdown(false);
  };

  const Reiniciar = () => {
    setCount(0);
    setIsRunning(false);
    setStartCountdown(false);
  };

  const Play = () => {
    setIsRunning(true);
    setStartCountdown(false);
  };

  const Alerta = () => {
    const time = parseInt(prompt("Ingrese el tiempo objetivo en segundos:"), 10);
    if (!isNaN(time)) {
      setTargetTime(time);
    }
  };

  return (
    <div>
      <Contador Number={count} />
      <button onClick={cuentaRegresiva}>Cuenta Regresiva</button>
      <button onClick={Alerta}>Añadir Alerta</button>
      <button onClick={Pause}>Pause</button>
      <button onClick={Reiniciar}>Reiniciar</button>
      <button onClick={Play}>Play</button>
    </div>
  );
};

export default Home;
