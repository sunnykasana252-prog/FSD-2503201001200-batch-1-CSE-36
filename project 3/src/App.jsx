import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import React from "react";

function add(a,b) {
  return a+b;
 
}
// react component
function Welcome(){
  return <h2>Welcome to my first react component </h2>
}

// Another component 

function info(){
  return(
    <div>
      <h3>What is a component </h3>
      <p>A component is a resuable piece of UI in react</p>
    </div>
  );
}

function App(){
  return(
    <div style={{padding: "28px", fontFamily: "Arial"}}>
      <h1>Your first component</h1>
      {/* Using cpmponent */}
      <Welcome/>

      <info/>
      <h3> How to use component ?</h3>
      <p>use component like html tag: &It;welcome /&gt;</p>
      <h3>Difference between function and component </h3>
      <p> Normal function Result: {add(10,20)}</p>

      <h3>Interview Question</h3>
<p> Q: what is react Component?</p>
<p>A: A resuable Ui block writeen as a function or class.</p>

    </div>
  );
}
export default App
