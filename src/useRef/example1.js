import React, { useState, useEffect, useRef } from "react";
import { useCustomHook } from "../useState/useCustomHook";
import { Hello } from "./hello";

const Example1 = () => {
  const [values, handleChange] = useCustomHook({ email: "", password: "" });
  const [showHello, setShowHello] = useState(true);
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello when input field get focused"));
  console.log("hello from example1 useRef");
  return (
    <div>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name="email"
        value={values.email}
        onChange={handleChange}
      ></input>
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      ></input>
      <button
        onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}
      >
        Call ref
      </button>
      <button
        onClick={() => {
          setShowHello(!showHello);
        }}
      >
        Toggle Hello
      </button>
    </div>
  );
};

export default Example1;
