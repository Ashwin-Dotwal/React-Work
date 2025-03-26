import React from 'react'

const ChildComponet = React.memo((props) => {
  console.log("child Component go re-render");
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
}
);
export default ChildComponet
//React.memo->wrap->component->componet re-render tabhi hoga jab props change hoge nahi toh re-ender nahi hoga

//if u r sending a function then rect.memo want be able to save you from re-rendering