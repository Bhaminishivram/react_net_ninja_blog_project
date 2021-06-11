import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import HomePage from "./homePage";

function App() {
  // const title ="Welcome to the new blog "; 
  // const likes =50;   
  // //const person ={name:'bhamini' , age:25}; 
  // const links= "http://www.google.com";
  return (

    <div className="App">
      <Navbar />
      <div className="content">
        <HomePage />








        {/* 
        <h2>{title}</h2> 
        <p>Liked {likes} times</p>  
        <p>{10}</p>   
        <p> {"hello , prashantha"}</p>
        {/* <p>{person}</p> 
        
        <p>{ "hello , prashantha" }</p> 
        <p>{ [1,23,4,5,6] }</p> 
        <p>{Math.random() * 10}</p>  
        <a href={links} >Google Site</a>    */}

      </div>
    </div>
  );
}

export default App;
