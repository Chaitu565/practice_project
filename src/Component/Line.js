
import React, { useState } from "react";
// import { Line } from "recharts";
import Line from "react-apexcharts";

import "./Chart.css";

const LineGraph = () => {
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
            <Line
                type="line"
             
                series={[
                    {
                        data: show,
                    },
                ]}
                options={{}}
            ></Line>
        </div>
    );
}

export default LineGraph;