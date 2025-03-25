
import { useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const[count,setCount]=useState(0);
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

  }
  

  return (
   <div>
    <button ref={btnRef} onClick={handleIncrement}>Increment</button>
    <br />
    <button onClick={changecolor}>change color 1st buttton</button>
    <div>
      count:{count}
    </div>
   </div>
  )
}

export default App
