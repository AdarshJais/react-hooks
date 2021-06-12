import React, { useState } from "react";

const Example3 = () => {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);

  return (
    <div>
      <button
        onClick={() => {
          setCount((currentValue) => currentValue + 1);
          setCount2((currentValue) => currentValue + 1);
        }}
      >
        +
      </button>

      <div>count: {count}</div>
      <div>count2: {count2}</div>
    </div>
  );
};

export default Example3;
