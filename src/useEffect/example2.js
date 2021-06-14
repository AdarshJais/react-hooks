import React, { useState, useEffect } from "react";
import { useCustomHook } from "../useState/useCustomHook";
import Unmount from "./unmount";
const Example2 = () => {
  const [values, handleChange] = useCustomHook({ email: "", password: "" });
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {/* <button onClick={(toggle) => console.log(!toggle)}>Unmount</button>
      <button onClick={(toggle) => console.log(toggle)}>parameter</button>

      <button onClick={() => alert(toggle)}>no parameter</button> */}

      <button onClick={() => setToggle(!toggle)}>Mount/Unmount</button>
      {toggle && <Unmount />}

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

export default Example2;
