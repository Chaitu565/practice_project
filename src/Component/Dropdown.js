import React, { useState } from "react";
import "./Dropdown.css";

const Drop = () => {
  const [state, setState] = useState("");
  const numbers = [1, 2, 3, 4, 5];

  const handleChange = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <label for="number">search heare ➡</label>
      <select className="drp" onClick={handleChange}>
        <option>select</option>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
      </select>
      {numbers.map((user, item) => {
        return (

          <button  id="sundeep" key={item} className={item === state - 1 ? "btn btn-success" : "btn"} >{user} </button>
        );
      })}
    </>
  );
};
export default Drop;
