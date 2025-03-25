
import { useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
 {/* const[count,setCount]=useState(0);
  let val=useRef(0);

  let btnRef=useRef();

  function handleIncrement(){
    val.current = val.current + 1;
    console.log("value if val",val.current);
    setCount(count+1);
  }
  // it runs on every render
  useEffect(() => {
   console.log("main frese render hogya");
  },[]);

  function changecolor(){
    btnRef.current.style.backgroundColor="red";

  }*/}


 


  const[time,setTime]=useState(0);

  let timerRef=useRef(null);

  function StartTimer(){
    timerRef.current=setInterval(() => {
      setTime(time=>time+1);
      
    }, 1000);

  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;

  }
  function resetTimer(){
    stopTimer();
    setTime(0);

  }

  return (
  <div>
    <h1>stopWatch:{time}seconds</h1>
    <button onClick={StartTimer}>Start</button>
    <br /><br />
    <button onClick={stopTimer}>Stop</button>
    <br /><br />

    <button onClick={resetTimer}>Reset</button>


     {/*<button ref={btnRef} onClick={handleIncrement}>Increment</button>
    <br />
    <button onClick={changecolor}>change color 1st buttton</button>
    <div>
      count:{count}
    </div>*/}
   </div>
  )
}

export default App
