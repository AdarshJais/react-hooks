import React, { useState } from "react";

const Example4 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
    </div>
  );
};

export default Example4;
