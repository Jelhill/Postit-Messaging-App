import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Component/LandingPage";
import SignUpForm from "./Component/SignUpForm"
import Dashboard from "./homepage/Dashboard";
import Create from "./CreateChannel/Create";
import MessageDisplay from "./Messaging/MessageDisplay"


function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={"/signUpForm"} component={SignUpForm}></Route>
        <Route exact path='/homepage' component={Dashboard} />
        <Route exact path='/CreateChannel' component={Create} />
        <Route exact path='/Messaging' component={MessageDisplay} />
      </Switch>
      </Fragment>
  );
}

export default App;
