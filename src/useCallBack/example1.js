import React, { useState } from "react";
import { Hello } from "./hello";

const Example1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Hello increment={() => setCount(count + 1)} />
      <div> count: {count}</div>
    </div>
  );
};

export default Example1;
