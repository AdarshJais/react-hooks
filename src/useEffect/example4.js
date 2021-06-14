import React, { useState, useEffect } from "react";
import { useCustomHook } from "../useState/useCustomHook";
import { useCustomEffect } from "./useCustomEffect";

const Example4 = () => {
  const [values, handleChange] = useCustomHook({ email: "", password: "" });
  const [count, setCount] = useState(0);

  const { data, loading } = useCustomEffect(
    `http://numbersapi.com/${count}/trivia`
  );

  return (
    <div>
      <button
        onClick={() => {
          setCount((state) => state + 1);
        }}
      >
        Increase Number
      </button>
      <div>{!data ? "loading..." : data} </div>
    </div>
  );
};

export default Example4;
