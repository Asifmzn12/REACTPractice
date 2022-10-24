import React, { Component } from "react";

export default class Classprops extends Component {
  constructor(props){
   super(props)
   this.state={
    name:"asif ali"
     
   }
   this.changeprops=this.changeprops.bind(this)
   
  }
  changeprops(){
    this.setState((prev)=>({

     name:this.props.fullname


    }))

  }

  render() {
    return (
        <div>
        <h1>{this.state.name}</h1>
         <button onClick={this.changeprops}>Change name</button>
        
        </div>
    )
  }
}
