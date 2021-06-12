import React, { useState } from "react";
import { useCustomHook } from "./useCustomHook";

const Example5 = () => {
  // A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

  const [values, handleChange] = useCustomHook({ email: "", password: "" });

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

export default Example5;
