import React from 'react'
import { Link } from "react-router-dom"

export default function RightSide() {
    return (
        <div className="col-lg-6 landingRight">
            <form action="" className="form-div">
            <div>
                <input type="email" placeholder="Email" name="email" id="email" autocomplete="on" /><br/>
                <input type="password" placeholder="Password" name="password" id="password" autocomplete="off" /> <br />
                <input type="email" placeholder="Email" name="email" id="email" autocomplete="on" /><br/>
                <input type="password" placeholder="Password" name="password" id="password" autocomplete="off" />
            </div>
            <div class="below-input">
                <div class="below-input-right"><input type="checkbox" />Remember me </div>
                <a href="#">Forgot Password</a>
                </div>
                <button id="login">Sign In</button>           
                <button class="google-signIn" id="login">Sign In with Google</button>  
            </form>
            <div class="dontHaveAccount">
                <p>Dont have an account? <Link to="/">Sign In</Link></p>
            </div>
        </div>
    )
}
