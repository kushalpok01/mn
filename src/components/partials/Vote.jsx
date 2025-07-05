import { useState } from "react";
// import { Dialog } from "./Dialog";

export const Vote = (props) => {
    let [data, setData] = useState(0);


    const increase = () => {
        setData(data++);
    }
    const decrease = () => {
        setData(data--);
    }

    return (
        <div>
            <h1>{data}</h1>



            <button onClick={increase}>Vote</button>
            <button onClick={decrease}>Unvote</button>
        </div>
    )
}