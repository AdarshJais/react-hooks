import React, { useState } from "react";

const Example2 = () => {
  //Using Objecct as initial state and desturing the same
  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  return (
    <div>
      {/* In class comp. thi9s button click would setState  the value of count as 11 and count2 will remail same as it is
      But here This button click will set count as 11 and count2 as undefined
      Bcz it don't do any merging of the object it simply take the returned object and save it in state */}

      {/* <button
        onClick={() =>
          setCount((curentState) => ({ count: curentState.count + 1 }))
        }
      >
        +
      </button> */}

      {/* To Overcome above use we need to merge the new count value with the current object 
     insted of replacing it as what we did above */}

      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count: currentState.count + 1,
          }))
        }
      >
        +
      </button>

      {/* OR WE CAN ALSO DO THIS WAY */}

      <button
        onClick={() =>
          setCount((currentState) => ({
            count2: currentState.count2,
            count: currentState.count + 1,
          }))
        }
      >
        +
      </button>

      <div>count: {count}</div>
      <div>count2: {count2}</div>
    </div>
  );
};

export default Example2;
