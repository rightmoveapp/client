import React from "react";
import { Link } from "react-router-dom";
import YellowUnderline from "../YellowUnderline";
import "./style.css";

const Login = () => {
  var callbackUri = "http://localhost:3000/linkedin_auth"
  var callbackState = "dovdvdsoibusobus"
  var clientId = "86cmhugfwi4259"

  return (
    <span>
      <li className="hide-on-small-only">
        <a
          href={`https://linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${escape(callbackUri)}&state=${callbackState}&scope=r_liteprofile%20r_emailaddress`}>
          Create Account
        </a>
      </li>

      <li>
        {/* <YellowUnderline to="/login" text="Log In"/> */}
        <Link to="/login">
          Log In
        </Link>
      </li>
    </span>
  )
}

export default Login;

