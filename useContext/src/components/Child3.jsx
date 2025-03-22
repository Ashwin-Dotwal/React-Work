import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'



const Child3 = () => {
  const user=useContext(UserContext);
 
  return (
    <div>
    {user.name}
    </div>
  )
}

export default Child3