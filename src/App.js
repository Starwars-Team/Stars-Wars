import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {
  Vehicles,
  People
} from "./Components";
import Navbar from "./Components/guest/Navbar";

const axios = require('axios')

function App() {

  return (
    <div>
      <Navbar/>
      <Vehicles />
      <People />

      </div>
  );
}

export default App;
