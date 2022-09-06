import React from "react";
import { useState } from "react";
const Text = () => {
  const [state, staState] = useState("");

  const handlechange = (e) => {
    staState(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handlechange} value={state} placeholder="enter your name" />
      <p>my name is:{state}</p>
    </>
  );
};
export default Text;
