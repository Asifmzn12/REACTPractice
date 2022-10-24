import React, { useReducer } from "react";

function UseReducerhook() {
    const initialState={count:0}
    const [state,dispatch]=useReducer(reducer,initialState)

    function reducer(state,action){
        switch(action.type){
            case 'decrement':
                return{count:state.count-1}
                case 'increment':
                return{count:state.count+1}
                case 'reset':
                    return{count:state.count=0}
                default:
                    throw new Error();
        }

    }
  return (
    <div>
    <h2>{state.count}</h2>
    <button onClick={()=>dispatch({type:'decrement'})}>- </button>   
    <button onClick={()=>dispatch({type:'increment'})}>+</button> 
    <button onClick={()=>dispatch({type:'reset'})}>Reset</button> 

    </div>
  )
}

export default UseReducerhook;
