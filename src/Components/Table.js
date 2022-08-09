import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TableData = () => {
  const [post, setPost] = useState({data: [],});

const[sort,setSort]=useState("ASC");

   const baseURL = "https://reqres.in/api/users?page=2";

  useEffect(() => {
    axios.get(baseURL)
      .then(function (response) {
        // handle success
        console.log(response);
         setPost(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  if (!post) return null;


  const sortingData=(col)=>{
if(sort === "ASC"){
    const sorted=[...post].sort((a,b)=>
    a[col].tolowerCase() > b[col].tolowerCase() ? 1:-1
    )
    setPost(sorted);
    setSort("DSC")
}
else if(sort === "DSC"){
    const sorted=[...post].sort((a,b)=>
    a[col].tolowerCase() < b[col].tolowerCase() ? 1:-1
    )
    setPost(sorted);
    setSort("ASC")
}
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={()=>sortingData("first_name")}>First Name</th>
            <th onClick={()=>sortingData("last_name")}>Last Name</th>
            <th onClick={()=>sortingData("email")}>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {post.data.map((user, index) => {
            return(
            <tr key={index}>
                <td>{user.id-6}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td><img src={user.avatar} /></td>
            </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
