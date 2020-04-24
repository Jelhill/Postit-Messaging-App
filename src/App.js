import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Component/LandingPage";
import SignUpForm from "./Component/SignUpForm"
import Dashboard from "./homepage/Dashboard";
import AddPeople from "./Component/AddPeople";


function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={"/signUpForm"} component={SignUpForm}></Route>
        <Route exact path='/homepage' component={Dashboard} />
      </Switch>
      <AddPeople />
      </Fragment>
  );
}

export default App;
