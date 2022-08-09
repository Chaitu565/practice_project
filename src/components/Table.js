import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";

const Test = () => {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(function (response) {
        console.log(response);
        setState(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>

        <tbody>
          {state.data.map((users, anvi) => {
            return (
              <tr key={anvi}>
                <td>{users.id}</td>
                <td>{users.first_name}</td>
                <td>{users.last_name}</td>
                <td>{users.email}</td>
                <td>
                  <img src={users.avatar} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default Test;
