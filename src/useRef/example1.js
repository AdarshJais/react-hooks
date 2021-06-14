import React, { useState, useEffect } from "react";
import { useCustomHook } from "../useState/useCustomHook";

const Example1 = () => {
  const [values, handleChange] = useCustomHook({ email: "", password: "" });

  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, [values.email]);

  return (
    <div>
      <input name="email" value={values.email} onChange={handleChange}></input>
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Example1;
