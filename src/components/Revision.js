import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

const Sample =()=>{

    const [seeds,setSeeds] = useState({
        data:[],
    })

    useEffect(()=>{
        axios.get("https://reqres.in/api/unknown")
        .then(function(response){
            console.log(response)
            setSeeds(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    },[])
    return(
        <>
        <Table className="content">
            <thead>
               <th>ID</th>
               <th>Name</th>
               <th>Year</th> 
               <th>Colour</th>
               <th>Value</th>
               </thead>

            <tbody>
                {seeds.data.map((user,anvesh) => {
                    return(
                    <tr key={anvesh}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.year}</td>
                        <td>{user.color}</td>
                        <td>{user.pantone_value}</td>
                    </tr>
                    )
                })}
            </tbody>

        </Table>
        </>
    )
}
export default Sample;