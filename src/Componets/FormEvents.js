import React,{useState,useEffect} from "react";

function FormEvents() {
const[name,setName]=useState("")
 function Submitted(e){
    e.preventDefault();
    alert(`name=${name}`)

 }


  return(
    <div>
    
   <form onSubmit={Submitted}>
   
    <label>Name</label> <br></br>
     <input type="text" value={name} onChange={((e)=>setName(e.target.value))} />
     <input type="submit"/>
   
 
   
   
   
   
   
   </form>
    <br>
    </br>
     <h1>Name={name}</h1>    
   </div>  
  )
}

export default FormEvents;
