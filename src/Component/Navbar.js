import React, { useState } from "react";
import "./Navbar.css";
const Sandeep = () => {
  //1st method
    // const [state, setState] = useState("please select the Tab");

    // const handlehome = () => {
    //   console.log("you selected home ");
    //   setState("you selected Home ");
    // };
    // //about
    // const handleabout = () => {
    //   console.log("you selected About ");
    //   setState("you selected About ");
    // };
    // //contact
    // const handlecont =()=>{
    //   console.log("you selected countacts ");
    //   setState("you selected contactus ");
    //}

  // 2nd method
  const [state, setState] = useState("please select the Tab");

  return (
    <>
      {/* <h5 className="text" onClick={handlehome}>
        Home
      </h5>
      <span>
        <h5 className="text" onClick={handleabout}>About</h5>
      </span>
      <span>
        <h5 className="text" onClick={handlecont}> Contactus</h5>
      </span>
      <h6 className="pls">{state}t</h6> */}

      <h5 className="text" onClick={() => setState("you selected Home ")}>Home</h5>
      <span>
        <h5 className="text" onClick={() => setState("you selected About ")}>About</h5>
      </span>
      <span>
        <h5 className="text" onClick={() => setState("you selected contactus ")}>Contactus</h5>
      </span>
      <h6 className="pls">{state}</h6>
    </>
  );
};
export default Sandeep;
   