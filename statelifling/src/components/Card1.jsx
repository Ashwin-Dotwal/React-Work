import React from 'react'

const Card1 = (props) => {
  return (
    <div>
     <input type="text" onChange={(e)=>props.setName(e.target.value)}/>
     <p>Name state variable ki value inside {props.title}:{props.name}</p>
    </div>
  )
}

export default Card1

