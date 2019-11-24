import React from "react";
// import { Vehicles, People } from "./Components";
import Navbar from "./Components/guest/Navbar";
import { SignIn, SignUp } from "./Components";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css'


const axios = require('axios')

function App() {
  return (
    <div>
      <Navbar/>

    <Router>
      <Switch>
        {/* <Vehicles />
          <People /> */}
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
    

      </div>
  );
}

export default App;
