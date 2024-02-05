import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./Home";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <Home/>
       
      </header>
      <footer>
        This project was coded by {" "}
        <a href="https://www.ticha.io/" target="_blank">
          Ticha Maenga
        </a>{" "}
        and is {" "} 
        <a href="https://github.com/tishanaturralle/my-dg-react-app"
        target="_blank"> open sourced</a>
        

      </footer>
    </div>
    

  );
}

export default App;
