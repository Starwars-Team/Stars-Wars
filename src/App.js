import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './components/guest/Navbar'
import './App.css'


const axios = require('axios')

function App() {

  return (
    <div>
      <Navbar/>

      </div>
  );
}

export default App;
