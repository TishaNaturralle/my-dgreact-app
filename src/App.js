import logo from './logo.svg';
import './App.css';
import React from "react";
import Bridal from "./Bridal";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>
        Hello from Diana Gladioli
       </h1>
       <Bridal/>
     
      </header>
    </div>
  );
}

export default App;
