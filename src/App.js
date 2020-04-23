import React from "react";
import "./App.css";
import Header from "./homepage/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Addmessage from "./homepage/Addmessage";
import LandingPage from "./Component/LandingPage";
import Homepage from "./homepage/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/homepage' component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
