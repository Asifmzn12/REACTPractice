import React from "react";
// import ReactDOM  from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router-dom"
 import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Error from "./Error";
import Navbar from "./Navbar";


function MainComponent() {
  return(
   
    
 < BrowserRouter>
 <Navbar></Navbar>
   <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='about' element={<About/>}></Route>
   <Route path='/contact' element={<Contact/>}></Route>
   <Route path='*' element={<Error/>}></Route>



  </Routes>
 
 
 
 
 
 </BrowserRouter>
    
    
    
    
  )
}

export default MainComponent;
