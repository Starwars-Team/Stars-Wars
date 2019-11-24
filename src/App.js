import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// import Navbar from './components/guest/Navbar'
import './App.css'
import Vc from './components/Card'
console.log(Vc);



const axios = require('axios')

function App() {

  return (
    <div>
      {/* <Navbar/> */}
      <Vc />

      </div>
  );
}

export default App;
