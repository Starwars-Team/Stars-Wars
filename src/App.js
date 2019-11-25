import React from "react";
import 
{BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {
  Peoples,
  Navbar,
  SignIn,
  SignUp,
  Vehicles
} from "./components";
import './App.css'

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact={true}>
          <s />
        </Route>
        <Route path="/peoples" exact={true}>
          <Peoples />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/vehicles">
          <Vehicles />
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
