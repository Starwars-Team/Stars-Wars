import React from "react";
import 
{BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {
  Peoples,
  Header,
  SignIn,
  SignUp,
  Vehicles,
  Starships
} from "./components";
import './App.scss'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <s />
        </Route>
        <Route path="/people" exact={true}>
          <Peoples />
        </Route>
        <Route path="/Starships" exact={true}>
          <Starships />
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
  );
}

export default App;
