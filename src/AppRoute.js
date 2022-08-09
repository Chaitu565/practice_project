import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import App from "./App";
import Sample from "./components/Revision";
import Test from "./components/Table";

const AppRouting =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<App/>}/>
            <Route path ="/test" element={<Test/>}/>
            <Route path ="/sample" element={<Sample/>}/>

        </Routes>
        </BrowserRouter>
       
    )
}
export default AppRouting;
