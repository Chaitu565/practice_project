import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const Api = ()   => {
    const [getdata, setGetdata] = useState([])
    useEffect(() => {
        // loaddata() 
    }, [])
    //     const loaddata = () => {
    //     fetch("http://universities.hipolabs.com/search?country=United+States")
    //         .then((res) => res.json())
    //         .then((data) => setGetdata(data))
    // }
    axios.get('http://universities.hipolabs.com/search?country=United+States')
        .then(function (response) {
            // handle success
            console.log(response);
            setGetdata(response.data)
        })    
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    return (
        <div>
            <center>
                <Table className="table" striped bordered hover size=" m" >
                    <thead>
                        <tr>
                            <th>domains</th>
                            <th>alpha_two_code</th>
                            <th>name</th>
                            <th>country</th>
                            <th>web_pages</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map((item, index) => {
                                return (

                                    <tr key={index}>

                                        <td>{item.domains}</td>
                                        <td>{item.alpha_two_code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.country}</td>
                                        <td><a href={item.web_pages}>{item.web_pages}</a></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </center>
        </div>

    )
}

export default Api;