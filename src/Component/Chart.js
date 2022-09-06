
import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Chart.css";

const BarGraph = ()=> {
  const [state, setstate] = useState("");
  const [show, setshow] = useState([]);
  const handlechange = (e) => {
    setstate(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = () => {
    let value = state.split(",");
    const data = value.map((each) => {
      return Number(each);
    });
    setshow(data);
  };

  return (
    <div className="chart">
      <h3>Chart</h3>
      <input type="text" name="name" value={state} onChange={handlechange} />
      <button onClick={handleSubmit} id='primary'>Click here</button>
      <Chart
        type="bar"
        id="bar"
        series={[
          {
            data: show,
          },
        ]}
        options={{}}
      ></Chart>
    </div>
  );
}

export default BarGraph;