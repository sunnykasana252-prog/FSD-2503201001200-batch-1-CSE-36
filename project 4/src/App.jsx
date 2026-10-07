import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 const username="raj Kumar";
 let x=10;
 let y=20;

return(
 <>
  <h1>{username}</h1>
  <h1>{10+20+30}</h1>
  <h1>{x+y}</h1>
  <button onClick={()=>alert("Hello")}>click me </button>
  </>
);

}

export default App;
