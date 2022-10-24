import React, { Component } from "react";

export default class ClassEvents extends Component {
    constructor() {
        console.log("constructor loaded");
      super()
    
        
    }
    Shoot(){
        alert("greatShoot")
    }
    componentDidUpdate(){
        console.log("component updated");
    }
    componentWillUnmount(){
        console.log("destroy");
    }
 componentDidMount(){
    console.log("component ready to load");
 }
  render() {
    console.log("render")

    return (
        <div>
         <button onClick={this.Shoot}>Click</button>
        </div>
    )
  }
}
