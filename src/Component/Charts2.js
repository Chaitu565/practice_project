import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart } from "react-chartjs-2/dist/chart";
// import Chart from "react-apexcharts";

const Chart2 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [string, setString] = useState("");
  const [state, setState] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "2020 Expense",
        data: [],
        backgroundColor: "green",
      },
    ],
  });
  const { datasets } = state;
  const { data } = state;
  const options = {
    plugins: {
      legend: { position: "top" },
      title: { display: "true", text: "Expense Tracker" },
    },
  };
  const handleInput = (e) => {
    setString(e.target.value);
  };
  const generateFn = (e) => {
    e.preventDefault();
    let numData = [];
    const splitData = string.split(" ");

    for (let i = 0; i <= splitData.length - 1; i++) {
      numData.push(Number(splitData[i]));
    }
    datasets[0].data = numData;
    setState({ ...state, datasets: [...state.datasets] });
    setIsPlaying(true);
  };
  console.log(datasets[0].data);
  return (
    <div className="container  mt-3">
      <div>
        <div className="row">
          <div className="col-md-4">
            <div className="card ">
              <div className="card-header bg-success text-white text-center">
                <h1>Chart Data</h1>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={generateFn}>
                  <input
                    type="text"
                    name="string"
                    value={string}
                    className="form-control mb-3"
                    onChange={handleInput}
                    placeholder={"Enter Chart data"}
                  />
                  <input
                    type="submit"
                    className="btn btn-success mb-3"
                    value="Generate"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPlaying ? (
        <div className="d-flex mt-5">
          <div>
            <div style={{ width: "500px", height: "300px" }}>
              <Bar data={state} options={options} />
            </div>
            <div style={{ width: "500px", height: "300px" }}>
              <Line data={state} options={options} />
            </div>
          </div>
          <div style={{ width: "500px" }} className="ms-5">
            <Pie data={state} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Chart2;
