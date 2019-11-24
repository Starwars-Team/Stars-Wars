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



// console.log(images);




  return (
    <div>
      <Mediacard />

      {/* <Vehicles /> */}
      {/* { images.map(
        ({id, src}) => 
        <img key={id} src={src} alt="this.jpg" />) } */}
        {/* <img src='' /> */}
     

      </div>
  );
}

export default App;
