
import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
 
const [count,setCount]=useState(0);
const [input,setInput]=useState(0);

function expensivetask(num){
  for(let i=0;i<=1000000;i++){
    
  }
  return num*2;
}
let doublevalue=useMemo(() => expensivetask(input), [input])

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <div>
        count:{count}
      </div>
      <input type="number" placeholder='enter-number'
      value={input}
      onChange={(e)=>setInput(e.target.value)} />
      <div>
        Double:{doublevalue}
      </div>
    </div>
  )
}

export default App
