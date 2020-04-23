import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import LeftSide from "./LeftSide";

export default function RightSide() {
  return (
    <Fragment>      
    <LeftSide />
    <div className='col-lg-6 landingRight'>
      <form action='' className='form-div'>
        <div>
          <input
            type='email'
            placeholder='Email'
            name='email'
            id='email'
            autocomplete='on'
          />
          <br />
          <input
            type='password'
            placeholder='Password'
            name='password'
            id='password'
            autocomplete='off'
          />
        </div>
        <div class='below-input'>
          <div class='below-input-right'>
            <input type='checkbox' />
            Remember me{" "}
          </div>
          <Link to={""}>Forgot Password</Link>
        </div>
        <button className='login'>Sign In</button>
        <button className='google-signIn' id='login'>
          Sign In with Google
        </button>
      </form>
      <div class='dontHaveAccount'>
        <p>
          Dont have an account? <Link to={"/signUpForm"}> Sign Up</Link>
        </p>
      </div>
    </div>
    </Fragment>
  );
}
