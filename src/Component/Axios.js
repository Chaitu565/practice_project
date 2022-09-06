import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const Axios = () => {
  const [state, setState] = useState([]);
  const [show, setSetshow] = useState(1);
  const [show1, setShow1] = useState(10);
  const handlechange = (e) => {
    console.log(e.target.value);
    setShow1(e.target.value);
  };
  const x = show * show1;
  const y = x - show1;
  const z = state.slice(y, x);
  const page = (item) => setSetshow(item);   



  let arr = [];
  for (let i = 0; i <= Math.ceil(state / show1); i++) {
    arr.push(i);
  }
  useEffect(() => {
    // Make a request for a user with a given ID
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setState(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [show]);

  // useEffect(() => {
  //   let result = state.slice(0, show);
  //   setState(result);
  // }, [show]);

  return (
    <>
      <label for="number">Records:</label>
      <select onChange={handlechange}>
        <option>select</option>
        <option value={5}>05</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      {arr &&
        arr.map((item) => {
          return (
            <button key={item} onClick={() => page(item)}>
              {item}
            </button>
          );
        })}
      <Table striped bordered hover variant="dark blue">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {z.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
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
