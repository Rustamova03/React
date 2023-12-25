// import React from "react";
import React, { useState } from "react";
import "./index.css";

const Button = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  // const Button = ({text}) => {
    const [value,setValue]=useState(0)
  return (
    <>
      {/* <button>{text}</button> */}
      <div className="container">
        <div className="button">
          <button onClick={increment}>Increment</button>
          <h2>{count}</h2>
          <button onClick={decrement}>Decrement</button>
          <hr />
          <input type="number" value={value} onChange={(e)=>setValue(e.target.valueAsNumber)} />
          <button onClick={()=>{
            setCount(count+value)
          }} >Inc by Value</button>
        </div>
      </div>
    </>
  );
};

export default Button;
