import React, { useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);
    const [name, setName] = useState("jim");

    const changeName = () =>
 {
    setName("John")
 }
    const add = () => {
        setCount(count + 1);
    };

    const sub = () => {
        setCount(count - 1);
    };


    return (
        <div>
            <h1>{count}</h1>
            <h1>{name}</h1>
            <button onClick={changeName}>change name</button>
            <button onClick={add}>add</button>
            <button onClick={sub}>sub</button>
         

        </div>
    );
}

export default Counter;