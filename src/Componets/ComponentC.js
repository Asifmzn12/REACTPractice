import React,{useContext} from "react";
import { Context } from "./UseContextHook";

function ComponentC() {
  const Data=useContext(Context)
  return (

    <div>
     <h1>Component C</h1>
     <h1>{Data}</h1>
    
    </div>
  )
}

export default ComponentC;
