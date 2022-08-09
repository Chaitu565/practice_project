import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";

import TableData from "./Components/Table";

const AppRouting =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<TableData/>}/>
        </Routes>
        </BrowserRouter>
       
    )
}
export default AppRouting;
