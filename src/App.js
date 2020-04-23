import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Component/LandingPage";
import SignUpForm from "./Component/SignUpForm"
import Homepage from "./homepage/Homepage";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={"/signUpForm"} component={SignUpForm}></Route>
        <Route exact path='/homepage' component={Homepage} />
      </Switch>
      </Fragment>
  );
}

export default App;
