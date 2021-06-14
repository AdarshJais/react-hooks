import React, { useState, useEffect } from "react";
import { useCustomHook } from "../useState/useCustomHook";
import Unmount from "./unmount";
const Example3 = () => {
  const [values, handleChange] = useCustomHook({ email: "", password: "" });

  // We can also trigger the Unmount with the help of dependency array
  // withount unmounting in actual
  // just incase we need any cleanup activity

  React.useEffect(() => {
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

export default Example3;
