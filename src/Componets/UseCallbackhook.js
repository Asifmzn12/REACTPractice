import React, { useState, useCallback } from 'react'



function UseCallbackhook() {
    var funccount = new Set();

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    const incrementCounter = useCallback(() => {
        setCount(count + 1)
    }, [count])
    const decrementCounter = useCallback(() => {
        setCount(count - 1)
    }, [count])
    const incrementNumber = useCallback(() => {
        setNumber(number + 1)
    }, [number])
   

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);
 
    alert( "function count size="+funccount.size);

    return (
        <div>
        <h2>Count:{count}</h2>
        <h3>Number:{number}</h3>
            <button onClick={incrementCounter}>
                Increase counter
            </button>
            <button onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button onClick={incrementNumber}>
                increase number
            </button>
           <hr></hr>
           <h3>when we change the state ‘count’ then two functions will re-instantiated so the set size will increase by 2 and when we update the state ‘number’ then only one function will re-instantiated and the size of the set will increase by only one.</h3>
        </div>
    )
}

export default UseCallbackhook;

