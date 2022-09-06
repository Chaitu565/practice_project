
import  React, { useState , useEffect } from 'react'

export const Time = () => {

    const [date,setDate] = useState(new Date());

    const handleChange =()=>{
        setDate("")
    }

    
    useEffect(() => {
        const timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p> Time : {date.toLocaleTimeString()}</p>
            {/* <p> Date : {date.toLocaleDateString()}</p> */}
            <button onClick={handleChange}>Stop</button>

        </div>
    )
}

export default Time;