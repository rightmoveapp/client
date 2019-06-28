import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  return (
    <span>
    <li>
      <Link
        to="/"
        className={
        window.location.pathname === "/" || window.location.pathname === "/createaccount"
          ? "nav-link active"
          : "nav-link"
        }
      >
      Create Account
      </Link>
    </li>

    <li>
      <Link
        to="/"
        className={
          window.location.pathname === "/" || window.location.pathname === "/login"
            ? "nav-link active"
            : "nav-link"
        }
      >
      Login
      </Link>
    </li>
    </span>
  )
}

export default Login;

