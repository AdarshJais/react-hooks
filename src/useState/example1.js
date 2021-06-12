import React, { useState } from "react";

function expensiveninitialState() {
  return 10;
}

const Example1 = () => {
  //****************** useState alwaya rturns an array where the first element has*********
  //********data (it can be anything array, object, string , number , boolean e.t.c) and another as setter function

  //const arr = useState(() => expensiveninitialState());
  // console.log(arr);
  //*********** OUTPUT -> [10,f] **********

  // Destructuring the output array of useState

  const [count, setCount] = useState(10);

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}

      {/* The good thing about the setter function is that we can pass a function inside it and the value returned from that function will be set to count*/}
      {/* Here the function will alert 10 and set count as undefined */}
      {/* <button onClick={() => setCount((e) => alert(e))}>+</button> */}

      {/* This is the best Practice for setState to avoid race conditions*/}
      <button
        onClick={() => setCount((curentStateValue) => curentStateValue + 1)}
      >
        +
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Example1;
