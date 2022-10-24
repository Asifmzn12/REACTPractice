import React,{createContext} from "react";
import ComponentA from "./ComponentA";
export  const Context=createContext();
function UseContextHook() {
  return (
    <div>
    <Context.Provider value={"asif ali"}>
     <ComponentA></ComponentA>
    
    
    
    </Context.Provider>
    
    
    </div>
  )
}

export default UseContextHook;
