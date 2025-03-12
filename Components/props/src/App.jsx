import UserCard from "./components/UserCard"
import bird1 from "./assets/1.png"
import bird2 from "./assets/2.png"
import bird3 from "./assets/3.png"

function App() {


  return (
  <div className="container">
   <UserCard name="new bird" desc="bird is good" image={bird1}/>
   <UserCard name ="old bird" desc="bird is old" image={bird2}/>
   <UserCard name="bird" desc="is a normal bird" image={bird3}/>
  </div>
  )
}

export default App
