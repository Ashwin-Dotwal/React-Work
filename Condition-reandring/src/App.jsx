
import { useState } from 'react'
import './App.css'
import Logout from './components/Logout';
import Login from './components/Login';

function App() {
 const[isLoggedIn,setLoggetIn]=useState(false);


 

 return(
  <div>
  {isLoggedIn ?<Logout/> : <Login/>}
  </div>
 )

 {/*} if(isLoggedIn)
  {
    return (
      <Logout/>
    )
  }
  else{
   return(
    <Login/>
   )
  }*/}
 }
   
  
 



export default App
