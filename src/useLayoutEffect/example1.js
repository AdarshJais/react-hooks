import React, { useState, useEffect, useRef } from "react";
import { useCustomHook } from "../useState/useCustomHook";

const Example1 = () => {
  const [values, handleChange] = useCustomHook({ email: "", password: "" });

  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));
  return (
    <div>
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
    </div>
  );
};

export default Example1;
