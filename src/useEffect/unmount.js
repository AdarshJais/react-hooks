import React from "react";

const Unmount = () => {
  // the return method inside useEffect work as a componentDidUnmount
  // example 3 is follow up example

  React.useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>I came to unmount</div>;
};
export default Unmount;
