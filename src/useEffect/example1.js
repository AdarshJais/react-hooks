import React, { useState, useEffect } from "react";
import { useCustomHook } from "../useState/useCustomHook";

const Example1 = () => {
  // A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

  const [values, handleChange] = useCustomHook({ email: "", password: "" });

  // *****Will get invocked evertime component render******

  //   useEffect(() => {
  //     console.log("render2");
  //   });

  // *****Will get invocked only once when compont render for first time*****
  // *** as like componentDidMount, here the 2nd parameter is the dependency array******

  //   useEffect(() => {
  //     console.log("render2");
  //   },[]);

  // *****Will get invocked when componet render for first time*****
  // *** and also render evertime the email chnage******

  //   useEffect(() => {
  //     console.log("render for first render and only only when email change");
  //   }, [values.email]);

  // *****Will get invocked when componet render for first time*****
  // *** and also render evertime the email or password chnage******

  useEffect(() => {
    console.log(
      "render for first render and only only when email or password change"
    );
  }, [values.email, values.password]);

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
