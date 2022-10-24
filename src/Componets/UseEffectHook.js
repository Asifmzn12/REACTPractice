import React, { useState, useEffect } from "react";

function UseEffectHook() {
    const [count, setCount] = useState(0)

        useEffect(() => {
            setTimeout(() => {
                setCount(count+1)
            }, 3000);
        },[])






    return (

        <div>
            <h1>{count}</h1>
            <button >Click here</button>

        </div>
    )
}

export default UseEffectHook;
