import React, { Component } from "react";
import LeftSide from "./LeftSide";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default class LandingPage extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row d-flex justify-space-between'>
          <LeftSide />
          <Switch>
            <Route exact path={"/"} component={SignInForm}></Route>
            <Route exact path={"/signUpForm"} component={SignUpForm}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}
