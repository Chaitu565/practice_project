import React from "react";
import { useState } from "react";
const Showtext = () => {
  const [show, setShow] = useState(true);

  // const handelechange =()=>{
  //     setShow(!show)
  // }

  return (
    <>
      <h3>show:hide</h3>
      {show && <p>show</p>}
      <button type="button" onClick={() => setShow(!show)}>
        {show === true ? "Hide" : "Show"}
      </button>
    </>
  );
};
export default Showtext;
