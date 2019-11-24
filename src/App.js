import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Vehicles from './components/Vehicles'
import Navbar from './components/guest/Navbar'
import './App.css'
import Mediacard from './Assets/Images/vehicles/Card'


const axios = require('axios')

function App() {

  return (
    <div>
      <Navbar/>
      <Vehicles />

      </div>
  );
}

export default App;
