import React from 'react';
import bg from './Images/bg.jpg';
import './Home.css';



const Home = () => {
    return (
        <>
            <div className='image'> 
            <div className='title'>
            <img src={bg} class="img-rounded" alt="Baground" style={{ height: 750, width: 1550 }} />
            </div>
            </div>
        </>

    )

};
export default Home