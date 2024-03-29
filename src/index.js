import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import Home from './Home';
import Bridal from './Bridal';
import EveMatricWear from './EveMatricWear';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import {BrowserRouter as Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App />
    <Switch>
  <Route Home="./home" component={Home} />
  <Route Bridal="./bridal" component={Bridal} />
  <Route EveMatricWear="./EveMatricWear" component={EveMatricWear} />
  
  
</Switch>
    <router>
      <Router/>
    <Home/>
  <Bridal/>
  <EveMatricWear/>
  

  </router>

  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
