import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./App";
import Axios from "./Component/Axios";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path ="/" element={<App/>}/> */}
        <Route path="/" element={<Axios />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouting;
