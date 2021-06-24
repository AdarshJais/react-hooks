import React, { useRef, useEffect } from "react";

export const Hello = () => {
  //   useEffect(() => {
  //     console.log("mount");
  //     return () => {
  //       console.log("Unmount");
  //     };
  //   }, []);
  console.log("hello from hello");
  const render = useRef(0);
  console.log(render);
  //console.log("count", render.current);
  console.log(render.current++);
  return <div>Hello</div>;
};
