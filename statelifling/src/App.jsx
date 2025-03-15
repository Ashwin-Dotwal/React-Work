

import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1'

function App() {
 //create state
    //manage state
    //change state
    //sabhi child me stage ko synk karwadunga
    const[name,setName]=useState('');

  return (
    
   <div>
<Card1 title="card11" name={name}setName={setName}/>
<Card1 title="card22" name={name} setName={"setName"}/>
{/*<p>I am inside the parent components{name}</p>*/}

   </div>
  )
}

export default App
