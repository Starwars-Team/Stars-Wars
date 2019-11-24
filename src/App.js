import React from "react";
import Navbar from "./components/Navbar";
import { SignIn, SignUp } from "./components/";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css'
import Vc from './components/Vehicles'
import Pople from './components/People'






function App() {
  
  
  
  
  return (
    <div>

    
    
    <Router>
    <Navbar/>
      <Switch>
      
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/vehicles">
          <Vc />
        </Route>
        <Route path="/people">
        <Pople />
        </Route>
      </Switch>
    </Router>
    
<h1>
  THIS IS HOME LOH :) HEHEHHE
</h1>
      </div>
  );
}

export default App;
