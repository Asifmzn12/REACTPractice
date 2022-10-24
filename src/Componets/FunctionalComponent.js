import React, { useState } from "react";

function FunctionalComponent() {
     const[count,setcount]=useState(0)
  function Increment(){
    setcount(count+1)
}
    
 function Decrement(){
    if(count<=0)
    return 0;
    else
   setcount(count-1)
}
    return(
    <div>
     <h1>{count}</h1>
     <button onClick={Increment}>+</button>
     <button onClick={ Decrement}>-</button>
    </div>
  )
}

export default FunctionalComponent;
