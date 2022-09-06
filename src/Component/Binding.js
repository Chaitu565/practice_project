import React from "react";
import { useState } from "react";

const Binding = () => {

    const [state, setState] = useState("");
    const [show, setShow] = useState("");

    const handleChange = (e) => {
        setState(e.target.value)
        console.log(e.target.value)
    }

    const setChange = (e) => {
        setShow(e.target.value)
        console.log(e.target.value)
    }

    return (
        <>
            <form>
                <label>
                    <input type="text" onChange={handleChange} value={state} />
                    <div>
                        <input type="text1" onChange={setChange} value={show}  />
                    </div>
                    <p >Type here:{state} {show}</p>

                </label>
            </form>

        </>

    )
};
export default Binding;