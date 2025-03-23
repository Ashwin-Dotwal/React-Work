
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import LoggerComponents from './components/LoggerComponents'



function App() {
  //const [count,setCount]=useState(0);
  //const[total ,setTotal]=useState(1);
  //first=>side effect function
  //second=>clean-up function
  //third=>comma separated dep list 
  
  //variation :1
  //runs on every render
//useEffect(() => {

//alert("i will run on each render ")

//})

//variation :2

//useEffect(()=>{
  //alert("i will run on only 1 render");
//},[])


//variation 3
//useEffect(() => {
  //alert("i will run every time when count is updated")
 
//}, [count])

//variation 4
//multipal dependency
//useEffect(() => {
  //alert("i will run every time when count and total updated")
//}, [count,total])
 

//variation:5
//is barr lets add a cleanup function
//useEffect(() => {
  //alert("count is updated")
  //return()=>{
    //alert("count is unmounted frim UI")
 
  //}
//}, [count])




{/*function handleClick(){
  setCount(count+1);
  setTotal(total+1) ;
}

function handleClickTotal(){
 
  setTotal(total+1) ;
}*/}


  return (
   <div>
{/*<LoggerComponents/>*/}

  {/*<button onClick={handleClick}>click me</button>
    <br />
    count is:{count}
    <br />

    <button onClick={handleClickTotal}>Click me</button>
    <br />
    
    Total is :{total}*/}
   </div>
  )
}

export default App
