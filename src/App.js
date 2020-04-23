import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Component/LandingPage";
import Dashboard from "./homepage/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/homepage' component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
