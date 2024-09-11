"use client";
import { useState } from "react";

const Counter = () => {
  //   state, function    =     initial val
  let [count, setCount] = useState(1);

  let increment = () => {
    setCount(count + 1);
  };

  return (
    <button
      onClick={increment}
      className={`px-4 py-2  text-white  rounded-lg my-2 
        
        ${count > 10 ? "bg-red-500" : "bg-blue-500"}
        
        `}
    >
      Click me {count}
    </button>
  );
};

export default Counter;
