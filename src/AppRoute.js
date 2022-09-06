import React from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Api from "./Component/Api";
// import { BarChart } from "recharts";
// import App from "./App";
import Axios from "./Component/Axios";
import Binding from "./Component/Binding";
// import Barchart from "./Component/Chart";
import BarGraph from "./Component/Chart";
// import Graph from "./Component/Chart";
// import Chart2 from "./Component/Charts2";
// import Tes from "./Component/Chart";
import Drop from "./Component/Dropdown";                                                        
import LineGraph from "./Component/Line";
import Sandeep from "./Component/Navbar";
import Home from "./Component/Projecthome";
// import  App from "./Component/Pie";
import Showtext from "./Component/Showhide";
import Text from "./Component/Text";
import Time from "./Component/Time";


const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path ="/" element={<App/>}/> */}
        <Route path="/" element={<Axios />} />
        <Route path="nav" element={<Sandeep />} />
        <Route path="Drop" element={<Drop />} />
        <Route path="show" element={<Showtext />} />
        <Route path="text" element={<Text />} />
        <Route path="time" element={<Time />} />
        {/* <Route path="Graph" element={<Graph />} /> */}
        <Route path="Barchart" element={<BarGraph />} />
        <Route path="LineGraph" element={<LineGraph />} />
        <Route path="Bind" element={<Binding />} />
        <Route path="Api" element={<Api />} />
        <Route path="Form" element={< Form/>} />
        {/* <Route path="Allcharts" element={<Chart2 />} /> */}
        <Route path="Home" element={< Home/>} />

      </Routes>
    </BrowserRouter>
  );
};
export default AppRouting;
