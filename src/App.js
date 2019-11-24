import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Vehicles, People } from "./Components";
import Navbar from "./Components/guest/Navbar";
import { SignIn, SignUp } from "./Components";

function App() {
  return (
    <Router>
      <Navbar />
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
  );
}

export default App;
