
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Buttton from './components/Buttton';


function App() {
  const [count,setCount]=useState(0);

  function handleClick(){
    setCount(count+1);
  }
 

  return (
    <div>
      <Buttton handleClick={handleClick}text="click me" >
        <h1>{count}</h1>
      </Buttton>
    
    {/*<Card name="Ashwin Dotwal">
      <h1>My intro</h1>
      <p>this is ashwin dotwal from indore </p>
      <p>I am persuing Btech from ips academy</p>
      <p>i have good Knowlege of Web devlopment</p>
     </Card>*/}
    </div>
  )
}

export default App
