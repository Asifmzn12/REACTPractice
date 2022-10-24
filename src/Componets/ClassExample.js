import React from "react";
class ClassExample extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
         this.Example=this.Example.bind(this)
        
    }
    Example(){
      this.setState((state)=>({
      counter:state.counter+1
      }))
    }
        
    
    
 render(){
    return(

        <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.Example}>click me</button>

        </>
    )
 }


}
export default ClassExample;