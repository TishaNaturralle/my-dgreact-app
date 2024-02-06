import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route } from 'react-router-dom';

import {Switch} from 'react-router-dom';


import Home from "./Home";
import Bridal from "./Bridal";
import EveMatricWear from "./EveMatricWear";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

       <Home/>
       <Bridal/>
       <EveMatricWear/>
       <Switch>
  <Route Home="./home" component={Home} />
  <Route Bridal="./bridal" component={Bridal} />
  <Route EveMatricWear="./EveMatricWear" component={EveMatricWear} />
  
  
</Switch>
       
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
