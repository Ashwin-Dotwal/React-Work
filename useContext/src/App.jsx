
import { createContext } from 'react'
import './App.css'
import Child1 from './components/Child1';
import { useState } from 'react';

// Step :1create context
const UserContext=createContext();

//step:2 wrap al the child inside a provider

//step:3 pass value 

//step :4 consume k ander jaake consume karlo

function App() {
  const[user,setUser]=useState({name:"ashwin"});
  
  return (
    <>
  <UserContext.Provider value={user}>
  <Child1/>
  </UserContext.Provider>
   
    </>
  )
}

export default App
export {UserContext}
