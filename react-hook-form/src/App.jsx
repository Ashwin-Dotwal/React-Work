import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
     console.log("submitting the form",data);
  }
  

  return (
   
   <form onSubmit={handleSubmit(onSubmit)}>
    

    <div>
    <label>FirstName:</label>
    
    <input {...register("firstName", { required: true,minLength:3 })}/>
    </div>
    <br />
    <div>
    <label>MiddleName:</label>
    
    <input  {...register("middleName", { required: true,minLength:3 })}/>
    </div>
    <br />
    <div>
    <label>LastName:</label>
   
    <input{...register("lastName ",{ required: true,minLength:3 })}/>
    </div>

    <br />
    <input type='submit'/>
   </form>
  
  );
}

export default App;