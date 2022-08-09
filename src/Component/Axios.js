import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const Axios = () => {
  const [state, setState] = useState({ data: [] });

  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setState(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>avatar</th>
          </tr>
        </thead>

        <tbody>
          {state.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.email}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>
                  <img src={item.avatar} alt="avatar" />
                </td>
              </tr>

              //This inline conditional makes it weird but this works
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default Axios;
