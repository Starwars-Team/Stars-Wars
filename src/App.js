import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Vehicles from './components/Vehicles'
import Nav from './components/guest/Navbar'
import './App.css'
import Mediacard from './Assets/Images/vehicles/Card'


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
