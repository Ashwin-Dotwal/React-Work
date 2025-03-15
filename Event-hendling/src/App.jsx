
import './App.css'

function App() {


  function handleInputChange(){
    console.log("value till now:",e.target.value);
    
  }

  function handleClick(){
    alert("I am clicked");
  }

  function handleMouseover(){
    alert("parra k uper mouse leker aaye ho");
  }
  function handleSubmit(e){
    e.preventDefault();
   //i am writing my custom behaviour

   alert("form submit kardu kya");
  }
  

  return (
  <div>

    <form  onSubmit={handleSubmit}>
      <input type="Enter your Name" onChange={handleInputChange} />
      <button type='submit'>submit</button>
    </form>


   <p onMouseOver={handleMouseover} style={{border:"1px solid black"}}>I am a para</p>


    <button onClick={handleClick}>Click me</button>

<button onClick={()=> alert("button click hua hai")}>click me</button>

 
  </div>
  
  )
}

export default App
