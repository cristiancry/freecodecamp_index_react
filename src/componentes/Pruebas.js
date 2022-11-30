import React from 'react';
import '../hojas-de-estilo/Pruebas.css';
import { useEffect, useRef, useState } from "react";

function Pruebas(){
    function Counter1() {
        let ref = useRef(0);
      
        useEffect(() => {
          console.log("component Counter1 updated");
        });
      
        function handleClick() {
          ref.current = ref.current + 1;
          alert("You clicked " + ref.current + " times!");
        }
      
        return <button onClick={handleClick}>Click me!</button>;
      }
      function Counter2() {
        const [time, setTime] = useState(0);
      
        useEffect(() => {
          console.log("component Counter2 updated");
        });
      
        function handleClick() {
          const newTime = time + 1;
          setTime(newTime);
          alert("You clicked " + newTime + " times!");
        }
      
        return <button onClick={handleClick}>Click me!</button>;
      }
      function Stopwatch(){
        const [startTime,setStartTime]=useState(null);
        const [now,setNow]=useState(null);
        const intervalRef= useRef(null);
        
        function handleStart(){
            setStartTime(Date.now());
            setNow(Date.now());
        clearInterval(intervalRef.current);
        intervalRef.current=setInterval(() => {
            setNow(Date.now)
        }, 10);
        
        }
        function handleStop(){
            clearInterval(intervalRef.current)
        }
        let secondsPassed = 0;
        if (startTime != null && now != null) {
        secondsPassed = (now - startTime) / 1000;
  }

        
        return(
            <div>
                <p className='parrafo'>Cronometro interactivo a travez de ref</p>
                <p className='parrafo'>Time Passed: {secondsPassed.toFixed(3)}</p>
                <div className='contenedor-boton'>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                </div>
            </div>
            
        )
      }


    return(
            
            <div className='contenedor-prin'>
                <div className='titulo'>
                    <h1> Ejemplos React</h1>
                </div>
                <div className='contenedor-prueba'>
            
                    <div className='contenedor-contador'>
                        <p className='parrafo'> Contador de Clicks a travez de ref</p>
                        <Counter1/>
                        <br />
                        <Counter2/>
                    </div>
                    <div className='contenedor-stopwatch'>
                    <Stopwatch/>
                    </div>
                </div>
            </div>
    )
}
export default Pruebas;