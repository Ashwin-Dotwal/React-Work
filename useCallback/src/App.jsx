
import { useState } from 'react'
import './App.css'
import ChildComponet from './components/ChildComponet';
import { useCallback } from 'react';


function App() {
 const[count,setCount]=useState(0);

 const handleClick = useCallback(()=>{
  setCount(count+1);
 
 },[count]);

  return (
   
  
   <div>
    <div>
      count:{count}
    </div>
    <div>
      <button onClick={handleClick}>Increment</button>
    </div>
    <br />
    <br />
    <div>
    <ChildComponet  buttonName="Click me" handleClick={handleClick} />
    </div>
   </div>

  
)} 

export default App
