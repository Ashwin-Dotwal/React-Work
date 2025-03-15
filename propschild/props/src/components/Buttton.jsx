import React from 'react'

const Buttton = (props) => {
  return (
    <div>
     {props.children}
  
    <button onClick={props.handleClick}>
     {props.text}

    </button>
    </div>
  )
}

export default Buttton
